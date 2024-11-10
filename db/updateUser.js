const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// run -> node updateUser.js

//prisma.user.update({
//  where: { id: 1 },
//  data: {name: "Thein"}
//}).then(_ => console.log("successfully updated"))
//  .catch(e => console.error(e))
//.finally(() => prisma.$disconnect());

prisma.user.upsert({
  where: { id: 2 },
  update:{name: "Zan", bio: "Hello updated 2"},
  create: {
    name: "Zan",
    bio: "New bio",
    posts: {
      create: [{ content: "Hello post 2" }],
    },
  },
}).then(result => console.log(result))
  .catch(e => { console.error(e), process.exit(1) })
  .finally(() => prisma.$disconnect());
