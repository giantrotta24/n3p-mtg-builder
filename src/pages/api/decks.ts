// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';

const decks = async (req: NextApiRequest, res: NextApiResponse) => {
  const decks = await prisma.deck.findMany();
  res.status(200).json(decks);
};

export default decks;
