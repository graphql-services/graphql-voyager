const { ApolloServer, gql } = require('apollo-server-express');
const { readFileSync, existsSync } = require('fs');

let server = null;
try {
  const schemaPath = process.env.GRAPHQL_SCHEMA_PATH || 'schema.graphql';
  if (existsSync(schemaPath)) {
    const content = readFileSync(schemaPath, 'utf-8');
    const typeDefs = gql(content);

    console.log(
      'loaded schema file from',
      process.env.GRAPHQL_SCHEMA_PATH || 'schema.graphql'
    );
    server = new ApolloServer({ typeDefs });
  }
} catch (err) {
  console.log(err);
  process.exit(1);
}

module.exports = { server };
