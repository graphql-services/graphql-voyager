# voyager

Docker wrapper for GraphQL voyager

# Usage

With GraphQL API server already running:

```
docker run --rm -e GRAPHQL_ENDPOINT=https://example.com/graphql -p 8080:80 graphql/voyager
```

With GraphQL schema stored locally:

```
docker run --rm -v path/to/schema.graphql:/app/schema.graphql -p 8080:80 graphql/voyager
```
