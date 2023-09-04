import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  for (let i = 0; i < 50; i++) {
    await prisma.candidate.create({
      data: {
        name: faker.person.fullName(),
        image_url: faker.internet.avatar(),
        job: faker.person.jobTitle(),
        title: `${faker.person.jobTitle()} at ${faker.person.jobArea()}`,
        salary: parseFloat((60000.0 + Math.random() * (70000.0 - 60000.0)).toFixed(2)),
        description: faker.person.bio()
      }
    });
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
