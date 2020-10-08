const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

module.exports = csrfProtection
