import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import prisma from "./db";

const t = initTRPC.create({
  transformer: superjson,
});

interface User {
  id: string;
  name: string;
}

const userList: User[] = [
  {
    id: "1",
    name: "KATT",
  },
];

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  createdAt: Date;
  latitude: number;
  longitude: number;
  usersLimit?: number;
  activeUsers: number;
}

export const appRouter = t.router({
  eventList: t.procedure.query((req) => {
    return prisma.event.findMany();
  }),
  
});

export type AppRouter = typeof appRouter;
