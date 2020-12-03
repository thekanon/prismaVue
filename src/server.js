import { GraphQLServer } from 'graphql-yoga'
import schema from "./schema"

const { PrismaClient } = require("@prisma/client")
const { makeExecutableSchema } = require('@graphql-tools/schema');

const prisma = new PrismaClient()

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}


const server = new GraphQLServer({ schema});

async function users() {
  const allUsers = await prisma.vote.findMany({

  })
  console.dir(allUsers)
}
// users();
server.start(() => console.log('Server is running on localhost:4000'))