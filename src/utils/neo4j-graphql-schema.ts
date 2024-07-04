import { Neo4jGraphQL } from '@neo4j/graphql';
import { readFileSync } from 'fs';
import { join } from 'path';
import driver from './neo4j-setup';

// Path to your GraphQL schema file
const schemaFilePath = join(__dirname, 'neo4j-graphql-schema.graphql');
const typeDefs = readFileSync(schemaFilePath, 'utf-8');

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

export default neoSchema;
