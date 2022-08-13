import { createRouter } from './context';
import { z } from 'zod';

import * as Scry from 'scryfall-sdk';

export const cardRouter = createRouter().query('getCardByName', {
  input: z.object({ name: z.string() }),
  async resolve({ input }) {
    const card = await Scry.Cards.byName(input.name, true);

    return card;
  },
});
