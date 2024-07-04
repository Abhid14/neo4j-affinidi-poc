// src/graphql.ts
import { createYoga } from 'graphql-yoga';
import { createSchema } from 'graphql-yoga';
import { ApolloServer } from 'apollo-server';
import { Neo4jGraphQL } from '@neo4j/graphql';
import neo4j from 'neo4j-driver';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

// Initialize Neo4j driver
const driver = neo4j.driver(
  'bolt://localhost:7687',  // replace with your Neo4j instance URL
  neo4j.auth.basic('neo4j', 'password')  // replace with your Neo4j username and password
);

const neoSchema = new Neo4jGraphQL({ typeDefs, resolvers, driver });

export const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  context: ({ req }: { req: any }) => ({ req, driver }),
});
