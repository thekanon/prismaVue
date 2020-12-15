const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
export default {
    Mutation:{
        createVote: async (_, args) =>{
            const { 
                id,
                title,
                description,
                users,
                upperVote,
                lowerVote,
                val1,
                val2,
                val3,
                val4,
                val5,
                val6,
                val7,
                val8,
                val9,
                val10,
                val11,
                val12,
                val13,
                val14,
                val15,
                val16,
                val17,
                val18,
                val19,
                val20
            } = args;

            const Vote = await prisma.vote.create({
                data:{
                    id:id,
                    title:title,
                    description:description,

                    users: users == undefined ? undefined : {
                        connect: {
                            id: users,
                        }
                    },
                    upperVote : upperVote == undefined ? undefined : {
                        connect: {
                            id: upperVote,
                        }
                    },
                    lowerVote: lowerVote == undefined ? undefined : {
                        connect: {
                            id: lowerVote,
                        }
                    },

                    val1:val1,
                    val2:val2,
                    val3:val3,
                    val4:val4,
                    val5:val5,
                    val6:val6,
                    val7:val7,
                    val8:val8,
                    val9:val9,
                    val10:val10,
                    val11:val11,
                    val12:val12,
                    val13:val13,
                    val14:val14,
                    val15:val15,
                    val16:val16,
                    val17:val17,
                    val18:val18,
                    val19:val19,
                    val20:val20
                }
            });
            // return user; 20201006 return user 시 데이터 에러 발생함(boolean 값이어야 함)
            return true;
        }
    }
}
