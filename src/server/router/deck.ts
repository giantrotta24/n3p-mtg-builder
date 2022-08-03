import { createRouter } from './context';
import { z } from 'zod';

export const deckRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.deck.findMany();
    },
  })
  .mutation('create-deck', {
    input: z.object({
      name: z.string(),
      description: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.deck.create({
        data: {
          name: input.name,
          description: input.description,
        },
      });
    },
  });
