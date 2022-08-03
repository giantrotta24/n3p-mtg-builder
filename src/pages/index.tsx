import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Deck from '../components/Deck';

const sampleData = [
  {
    id: 1,
    name: 'タイトル1',
    description: '🤪🤪🤪🤪',
  },
];

export interface Deck {
  id: number;
  name: string;
  description: string;
}

type Decks = Deck[];

const Home: NextPage = () => {
  const [decks, setDecks] = useState<Decks>([]);

  const addDeck = (deck: Deck | undefined) => {
    if (deck) {
      setDecks([...decks, deck]);
    }
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
            onClick={() => addDeck(sampleData[0])}
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
