import { PrismaClient } from '@prisma/client';
import { seedEvents } from './seeders/events';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  await seedEvents({ prisma });

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
