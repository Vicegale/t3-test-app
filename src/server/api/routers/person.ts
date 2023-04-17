import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const personRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.person.findMany();
  }),
  getCount: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.person.count();
  })
});
