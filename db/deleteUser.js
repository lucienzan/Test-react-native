const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// run -> node deleteUser.js

prisma.post.deleteMany({
  where:{userId: 1}
}).then(_ => {
  prisma.user.delete({
    where:{id: 1}
  })
  .then(_=> {
    console.log("Deleted User 1 and their posts");
    });
}).finally(() => {
  prisma.$disconnect();
  });