const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
export default {
    Query:{
        allUser: async() => {
            return await prisma.user.findMany({
            })
        }
    }
} 