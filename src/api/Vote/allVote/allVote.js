const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
export default {
    Query:{
        allVote: async() => {
            const votes =  await prisma.vote.findMany({
                include: { upperVote: true, lowerVote: true, users: true }
            })
            console.log(votes);
            return votes
        }
    }
} 