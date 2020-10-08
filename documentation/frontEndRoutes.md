# Front End Routes

* / (splash.pug)
  * Splash
  * If no user
* /login (log-in.pug)
  * Log-in form
* /sign-up (sign-up.pug)
  * Sign-up form
* / (main.pug)
  * Nav bar (welcome greeting, profile dropdown)
  * Article feed
  * Follow creators
  * Trending articles
  * Footer (Contributor links)
  * If User is logged in
* /users/:id/profile (profile.pug)
  * Claps
  * Latest Story
  * Following
  * Followers
  * Responses
* /users/:id/followers (followers.pug, Use Mixin)
  * List of current followers
  * Link to Profile, Claps, Following
* /users/:id/following (following.pug)
  * List of users currently following
  * Link to Profile, Claps, Following
* /stories/create (stories-create.pug)
  * Story form (title, subtitle, body, submit)
  * Genre selection
* /users/:id/stories (users-stories.pug)
  * List of published storied
    * Timestamp
  * Dropdown
    * Edit story
    * Delete story
      * Pop-up
    * View stats
  * Write story
* /stories/:id/edit (edit-story.pug, Similar to create)
  * Title
  * Story
  * Genre
  * Submit
  * Only creater can edit their stories
