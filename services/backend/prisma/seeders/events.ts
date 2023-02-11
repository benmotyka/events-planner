import { Prisma, PrismaClient } from "@prisma/client";

const data: Prisma.EventCreateInput[] = [
  {
    id: "1",
    title: "Spotkanie z Andrzej Duda",
    date: new Date(),
    createdAt: new Date(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    latitude: 50.0412,
    longitude: 21.9991,
    activeUsersCount: 10,
    usersLimit: 30,
  },
  {
    id: "2",
    title: "Piwo z Menzenem",
    date: new Date(),
    createdAt: new Date(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    latitude: 50.0412,
    longitude: 21.5991,
    activeUsersCount: 85,
  },
];

export const seedEvents = async ({ prisma }: { prisma: PrismaClient }) => {
  console.info("Seeding events...");

  for (const item of data) {
    await prisma.event.create({
      data: item,
    });
  }

  console.info("Seeding events");
};
