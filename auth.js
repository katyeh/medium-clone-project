const jwt = require('jsonwebtoken');
const bearerToken = require('express-bearer-token');
const { User } = require('./db/models');
const { jwtConfig } = require('./config');
const { secret, expiresIn } = jwtConfig;

const restoreUser = (req, res, next) => {
    const { token } = req;

    if (!token) {
        return res.set("WWW-Authenticate", "Bearer").status(401).end();
    }

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        // TODO: Define asynchronous function for jwtPayload logic
        if (err) {
            err.status = 401;
            return next(err);
        }

        const { id } = jwtPayload.data;

        try {
            req.user = await User.findByPk(id);
        } catch (err) {
            return next(err);
        }

        if (!req.user) {
            return res.set("WWW-Authenticate", "Bearer").status(401).end();
        }

        return next();
    });
};

const getUserToken = (user) => {
    const userDataForToken = {
        id: user.id,
        email: user.email,
    };

    const token = jwt.sign(
        { data: userDataForTOken },
        secret,
        { expiresIn: parseInt(expiresIn, 10) }
    );

    return token;
};

const requireAuth = [bearerToken(), restoreUser];

module.exports = { getUserToken, requireAuth };
