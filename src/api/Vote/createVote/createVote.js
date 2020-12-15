const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
export default {
    Mutation:{
        createUser: async (_, args) =>{
            const { username, email} = args;
            const user = await prisma.user.create({
                data:{
                    username:username,
                    email:email
                }
            });
            // return user; 20201006 return user 시 데이터 에러 발생함(boolean 값이어야 함)
            return true;
        }
    }
}
