import neo4j from 'neo4j-driver';

// Load environment variables from .env file
require('dotenv').config();

const driver = neo4j.driver(
    process.env.NEO4J_URI || 'neo4j://localhost:7687',
    neo4j.auth.basic(process.env.NEO4J_USERNAME||"", process.env.NEO4J_PASSWORD||"")
);

export default driver;