const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// run -> node readData.js

//prisma.user.findMany().then(data => {
//  console.log('Users fetched successfully:', data);
//}).catch(error => {
//  console.error('Error fetching users:', error);
//});

//async
//async function readUser() {
//  const data = await prisma.user.findMany();
//  console.log(data);
//  return data;
//}

//findMany(), findFirst(), findUnique()
async function readUser() {
  await prisma.user.findFirst({
    where: { id: 1 },
    include: {posts: true}
  }).then(data => console.log(data))
    .catch(e => {
      console.error(e);
      process.exit(1);
    }).finally(() => {
      prisma.$disconnect();
  })
}

readUser();