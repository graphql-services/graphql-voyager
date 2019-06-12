const express = require('express');
const voyager = require('graphql-voyager/middleware');

const { server } = require('./apollo-server');

const app = express();

if (server) {
  server.applyMiddleware({ app });
}

app.use(
  '/',
  voyager.express({ endpointUrl: process.env.GRAPHQL_ENDPOINT || '/graphql' })
);

const port = process.env.PORT || 80;

app.listen(port, err => {
  if (err) {
    throw new Error(
      `Failed to start listening on ${port}, error: ${err.message}`
    );
  }
  console.log(`listening on http://0.0.0.0:${port}`);
});
