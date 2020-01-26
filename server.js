const { createServer } = require('http');
const next = require('next');
const routes = require('./routes.js');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

// Creating a NextJS server
app.prepare().then(() => {
  createServer(handler).listen(3000);
});
