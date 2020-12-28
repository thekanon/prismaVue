const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
export default {
    Mutation:{
        deleteVote: async (_, args) =>{
            const { 
                id,
            } = args;

            const Vote = await prisma.vote.delete({
                where: { id: id }, 
                
            });
            // return user; 20201006 return user 시 데이터 에러 발생함(boolean 값이어야 함)
            return true;
        }
    }
}
