import { GraphQLServer } from 'graphql-yoga'
//스키마 import
import schema from "./schema"

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')


const server = new GraphQLServer({ schema });
server.start(() => console.log('Server is running on localhost:4000'))