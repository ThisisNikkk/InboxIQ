import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

await db.user.create({
  data: {
    emailAddress:"test@gmail.com ",
    firstName: "Nikhil ",
    lastName: "Siwan ",
  }

});
console.log('done');