# Stickyboard

Sorta like Google Keep with columns - possibly useful for kanban/scrum/retro boards and the like?

For detailed information on the client see the README at `~/clients/web/README.md`.
For detailed information on the backend see the README at `~/server/README.md`.

# Running

Only works in dev at the moment.

Web client uses CRA - so `yarn start` to start it :)
Server uses Express - also `yarn start` to start it (it uses nodemon as a file watcher :)


## TODO

### Web client

Testing!

drag n drop

 * save the column change

styling:

 * make column full height (at least)
 * show no-entry mouse pointer when can't drop
 * show scrollbar when minwidth hit

sticky

 * make sticky text editing autofocus highlight whole text or put cursor to end
 * make sticky text editing cancel other text edits?
 * make other actions (click outside etc.) cancel text editing
 * edit text - saves on server
 * delete sticky
 * add sticky

board

 * add board
 * board admin - rename/delete
 * add column/ rename column

### Mobile client

 * Make one! :P
 * React native
 * share code with web?

### Backend

 * possibly move to appsync instead of a complex custom websockets implementation?
 * https://aws.amazon.com/blogs/mobile/building-fine-grained-authorization-using-amazon-cognito-user-pools-groups/
 * https://aws.amazon.com/blogs/compute/using-amazon-api-gateway-as-a-proxy-for-dynamodb/
 * research and setup cognito auth - with facebook/google/github integration?
 * look into how easy cognito/dynamo/gateway??? without server would be?
