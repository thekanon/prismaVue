const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
export default {
    Query:{
        getVote: async(_,args) => {
            const {id,upperVote,lowerVote} = args
            console.log(id,upperVote,lowerVote)
            const votes =  await prisma.vote.findMany({
                where:{
                    id:id,
                    upperVote: upperVote? {
                        some:{
                            id:upperVote
                        }
                    }:{},          
                    lowerVote: lowerVote? {
                        some:{
                            id:lowerVote
                        }
                    }:{}        
                },
                include: {
                    upperVote: true,
                    lowerVote: true,
                },
            })
            console.log(votes);
            return votes
        }
    }
} 