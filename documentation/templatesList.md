# Template List

* layout.pug
  * Nav bar
  * User Drop Down
* Utilities Directory
  * Contains a list of mixins
  * Contains "includes" pug list
  * Anything used across multiple pages
  * Errors.pug
* splash.pug
  * Renders if no user has logged in
* log-in.pug
  * Log-in form
  * Option to login as Demo user
* sign-up.pug
  * Sign-up form
* main.pug
  * extends layout
  * Nav bar (welcome greeting, profile dropdown)
  * Article feed
  * Follow creators
  * Trending articles
  * Footer (Contributor links)
  * If User is logged in
* profile.pug
  * Extends layout
  * Claps Tab that renders content that user clapped
  * Latest Story
  * Following tab that renders who the user is following
  * Followers tab that renders who is following the user
  * Responses tab that renders the responses the user has given to other stories
* followers.pug, Use Mixin
  * Extends Layout
  * List of current followers
  * Link to Profile, Claps, Following
* following.pug
  * Extends Layout
  * List of users currently following
  * Link to Profile, Claps, Following
* stories-create.pug
  * Extends Layout
  * Story form (title, story, submit)
  * Genre selection
* users-stories.pug
  * Extends Layout
  * List of published storied
    * Timestamp
  * Dropdown
    * Edit story
    * Delete story
      * Pop-up
    * View stats
  * Write story
* edit-story.pug, Similar to create
  * Extends Layout
  * Title
  * Story
  * Genre
  * Submit
  * Only creater can edit their stories
