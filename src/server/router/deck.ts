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
  });
