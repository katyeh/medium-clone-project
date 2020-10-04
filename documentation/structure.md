# File Structure

| Directory/file     | Sub-directories/files | Description |
| ------------------ | --------------------- | ----------- |
| bin/               | www                   | - Check database connection before starting the app.<br>- If connection succeeds, start listening.<br>- If there's an error connecting to the database, *console.error* that the connection failed.
| config/            | database.js           | - Create and export an object that contains all of required configurations that sequelize will use.
|                    | index.js              | - Create and export an object that contains all of required environment variables.<br>- environment, port, sessionSecret, db (username, password, database, host).<br>- Export out the object.
| db/                | migrations/           | - All of the sequelize migration files will be in here.
|                    | models/               | - All of the sequelize model files will be in here.
|                    | seeds/                | - All of the sequelize seed files will be in here.
| node_modules/      |                       | 
| public/            | js/                   | - Contains frontend js files.
|                    | css/                  | - Contains compiled css files.
| routes/            | index.js              |
|                    | users.js              |
|                    | stories.js            |
|                    | comments.js           |
| sass/              | main.sass             | - A file that imports all of our sass files.
|                    | abstracts/            | - To hold all of our sass files that hold reusable components/variables (i.e. *_variables.sass, _mixins.sass*).
|                    | base/                 | - To hold all of our sass files that set the basic structure (i.e. *_reset.sass, _typography.sass*).
|                    | components/           | - To hold all of our component-level sass files (i.e. *_buttons.sass*).
|                    | layout/               | - To hold all of our sass files related to sections of the page (i.e. *_grid.sass, _navbar.sass, _footer.sass, _sidebar.sass, _forms.sass*).
|                    | pages/                | - To hold all of our sass files relevant to each pages we'll create (i.e. *_splash.sass, _profile.sass*).
| views/             | splash.pug            |
|                    | utilities/            | - Includes all mixins, include.<br> - Contains error.pug that displays error pages.
|                    | log-in.pug            |
|                    | sign-up.pug           |
|                    | main.pug              |
|                    | profile.pug           |
|                    | followers.pug         |
|                    | following.pug         |
|                    | edit-story.pug        |
|                    | users-stories.pug     |
|                    | layout.pug            | - To hold basic HTML structure and navbar that will be extended on other pages.
| .env               |                       | - Define all of our environment variables (PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, SESSION_SECRET, JWT_SECRET, JWT_EXPIRES_IN).
| .env.example       |                       | - Example of how *.env* should look like.
| .gitignore         |                       | - Include *.env* and *node_modules*.
| .sequelizerc       |                       | - Define *config* as *database.js* within *config* directory.<br>- Set models, seeders, and migrations path to *models*, *seeders*, *migrations* directories within *db* parent directory.
| app.js             |                       | - The main js file. <br><br>Todo: <br>- Set the view engine as pug. <br>- Intake all route handlers from files in *routes* directory. <br>- Middleware function that will throw error if no route matches. <br>- Define error handlers. <br>- Parse cookies and request body upon form submission.
| utils.js           |                       | - asyncHandler <br>- csrfProtection middleware<br> - handleValidationErrors middleware
| auth.js            |                       | - getUserToken<br>- restoreUser middleware<br>- deleteUserToken
| package-lock.json  |
| package.json       |
| README.md          |