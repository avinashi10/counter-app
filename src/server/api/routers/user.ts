import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.create({ data: { name: input.name } });
      return user;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany();
  }),
});
