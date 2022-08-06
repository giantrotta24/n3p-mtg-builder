import type { NextPage } from 'next';
import Head from 'next/head';

import { trpc } from '../utils/trpc';

import Deck from '../components/Deck';

export interface DeckType {
  id: string;
  name: string;
  description: string | null;
  notes: string;
  lists: [];
  colors: string;
  price: number;
}

let count = 0;

const Home: NextPage = () => {
  const { data, error, isLoading, isError, refetch } = trpc.useQuery(
    ['deck.getAll'],
    // https://tanstack.com/query/v4/docs/guides/important-defaults
    { refetchOnWindowFocus: false } // react-query will refetch on window focus but we don't want that here
  );

  const createBlankDeck = trpc.useMutation(['deck.createBlankDeck'], {
    onSuccess: () => {
      refetch();
    },
    // handle error
  });

  const addDeck = () => {
    createBlankDeck.mutate();
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error! {error.message} 🥴</div>;

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

      <main className="container mx-auto min-h-screen h-auto w-screen">
        <div className="flex flex-col p-4">
          <button
            onClick={addDeck}
            className="rounded-md bg-sky-600 px-10 py-2 self-start hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 disabled:bg-gray-400"
            disabled={createBlankDeck.isLoading}
          >
            Add deck
          </button>
          <div className="p-4" />
          {data && data?.length > 0 && (
            <ul className="flex flex-col gap-3">
              {data.map((deck) => (
                <Deck
                  key={deck.id}
                  id={deck.id}
                  name={deck.name}
                  refetchDecks={refetch}
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
