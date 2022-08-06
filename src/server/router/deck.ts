import { createRouter } from './context';
import { z } from 'zod';

export const deckRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.deck.findMany();
    },
  })
  .mutation('createBlankDeck', {
    async resolve({ ctx }) {
      return await ctx.prisma.deck.create({
        data: {
          name: 'Untitled Deck',
        },
      });
    },
  })
  .mutation('updateDeck', {
    input: z.object({
      id: z.string({
        required_error: 'ID is required',
      }),
      name: z
        .string({
          required_error: 'Name is required',
        })
        .min(1, { message: 'Must be 1 or more characters long' }),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.deck.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
        },
      });
    },
  })
  .mutation('deleteDeck', {
    input: z.object({
      id: z.string({
        required_error: 'ID is required',
      }),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.deck.delete({
        where: {
          id: input.id,
        },
      });
    },
  });
