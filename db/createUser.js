const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// run -> node createUser.js

prisma.user.create({
  data: {
    name: "Daniel",
    bio: "If you think it is worth, just do it.",
    posts: {
      create: [{ content: "First Post" }, { content: "Second Post" }],
    },
  },
}).then(() => {
  console.log("Inserted User Bob with Posts");
}).catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => {
  prisma.$disconnect();
})