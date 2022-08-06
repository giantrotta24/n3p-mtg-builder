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

  const updateDeck = trpc.useMutation(['deck.updateDeck'], {
    onSuccess: () => {
      refetch();
    },
    // handle error
  });

  const deleteDeck = trpc.useMutation(['deck.deleteDeck'], {
    onSuccess: () => {
      refetch();
    },
    // handle error
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error! {error.message} 🥴</div>;

  const isLoadingButtons =
    updateDeck.isLoading || createBlankDeck.isLoading || deleteDeck.isLoading;

  const addDeck = () => {
    createBlankDeck.mutate();
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
            onClick={addDeck}
            className="bg-sky-600 px-10 py-2 self-start hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 disabled:bg-gray-400"
            disabled={isLoading || isLoadingButtons}
          >
            Add deck
          </button>
          <div>Render: {count++}</div>
          <div className="p-4" />
          {data && data?.length > 0 && (
            <>
              {createBlankDeck.isLoading && <div>Loading...</div>}
              <ul className="flex flex-col gap-3">
                {data.map((deck) => (
                  <Deck
                    key={deck.id}
                    id={deck.id}
                    name={deck.name}
                    updateDeck={updateDeck}
                    deleteDeck={deleteDeck}
                    isLoading={isLoadingButtons}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
