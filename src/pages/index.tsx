import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Deck from '../components/Deck';
import { trpc } from '../utils/trpc';

const sampleData = [
  {
    id: 1,
    name: '🤪🤪🤪🤪',
    description: 'タイトル1',
  },
];

export interface DeckType {
  id: number;
  name: string;
  description: string;
}

type Decks = DeckType[];

const Home: NextPage = () => {
  const decksRespponse = trpc.useQuery(['deck.getAll']);
  console.log(
    '🚀 ~ file: index.tsx ~ line 26 ~ decksRespponse',
    decksRespponse
  );

  const [decks, setDecks] = useState<Decks>(sampleData);

  const addDeck = () => {
    const blankDeck = {
      id: decks.length + 1,
      name: '',
      description: '',
    };

    setDecks([...decks, blankDeck]);
  };

  return (
    <>
      <Head>
        <title>MTG Deck Builder</title>
        <meta
          name="description"
          content="Organize deck lists for MTG, commander"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto min-h-screen h-auto w-screen border border-red-500">
        <div className="flex flex-col p-4">
          <button
            onClick={() => addDeck()}
            className="bg-sky-600 px-10 py-2 self-start hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300"
          >
            add deck
          </button>
          <div className="p-4" />
          {decks.length > 0 && (
            <ul className="flex flex-col gap-3">
              {decks.map((deck) => (
                <Deck
                  key={deck.name}
                  id={deck.id}
                  name={deck.name}
                  description={deck.description}
                />
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
