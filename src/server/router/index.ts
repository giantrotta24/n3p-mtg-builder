// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { deckRouter } from './deck';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('deck.', deckRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
