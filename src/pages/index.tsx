import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
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

      <main className="container mx-auto h-screen w-screen border border-red-500">
        <div className="flex flex-col p-4">
          <button className="bg-sky-600 px-10 py-2 self-start hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300">
            add deck
          </button>
          <div className="p-2" />
          <div className="border border-red-500">decks</div>
        </div>
      </main>
    </>
  );
};

export default Home;
