const routes = require('next-routes');

// Putting every route, file
module.exports = routes()
  .add('/', 'home')
  .add('/users', 'users')
  .add('/users/:user', 'detail');
