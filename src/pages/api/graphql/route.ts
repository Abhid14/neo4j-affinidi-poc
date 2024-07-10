import { createYoga } from "graphql-yoga";
import { neoSchema } from "@/lib/neo4j";

const { handleRequest } = createYoga({
  schema: neoSchema.getSchema(),
  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };