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
* responses
  * GET /responses => gets all responses from a single user
  * GET /stories/:id/responses => gets all responses for a single story
  * POST /stories/:id/responses => create a new comment
  * DELETE /responses/:id => delete a response
* claps
  * GET /stories/:id/claps => gets all claps for a single story
  * GET /stories/:id/responses/:id/claps => gets all claps for a single response
  * POST /stories/:id/claps => adds a clap to a single story
  * POST /stories/:id/responses/:id/claps => adds a clap to a single response
