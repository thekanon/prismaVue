const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
export default {
    Query:{
        allUser: async() => {
            const users =  await prisma.user.findMany({
                include: { votes: true }
            })
            console.log(users);
            return users
        }
    }
} 