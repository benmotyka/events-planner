import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

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

const eventList: Event[] = [
  {
    id: "1",
    title: "Spotkanie z Andrzej Duda",
    date: new Date(),
    createdAt: new Date(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    latitude: 50.0412,
    longitude: 21.9991,
    activeUsers: 10,
    usersLimit: 30
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
    activeUsers: 85,
  },
];

export const appRouter = t.router({
  userById: t.procedure
    // The input is unknown at this time.
    // A client could have sent us anything
    // so we won't assume a certain data type.
    .input((val: unknown) => {
      // If the value is of type string, return it.
      // TypeScript now knows that this value is a string.
      if (typeof val === "string") return val;

      // Uh oh, looks like that input wasn't a string.
      // We will throw an error instead of running the procedure.
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query((req) => {
      const { input } = req;
      const user = userList.find((u) => u.id === input);

      return user;
    }),
  eventList: t.procedure.query((req) => {
    return eventList;
  }),
});

export type AppRouter = typeof appRouter;
