const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
async function main() {
  const allUsers = await prisma.user.findMany({
  })
  console.dir(allUsers)
}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })