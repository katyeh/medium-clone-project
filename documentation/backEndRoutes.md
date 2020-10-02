# Back End Routes

* users
  * GET /users/:id -> get a single users info (returns fullName and email)
  * POST /users => create a new user (returns userId and token)
  * POST /users/token => verifies user login and returns token for the user
  * DELETE /users/:id => delete a user
* stories
  * GET /stories/:id => gets a single story (returns title, body, creator, and createdAt)
  * POST /stories => create a new story
  * PUT /users/:id => update a users info (returns full user info)
  * DELETE /stories/:id => delete a story
* comments
  * GET /stories/:id/comments => gets all comments for a single story
  * POST /stories/:id/comments => create a new comment
  * DELETE /comments/:id => delete a comment
* likes
