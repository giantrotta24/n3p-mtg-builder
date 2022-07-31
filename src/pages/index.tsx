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

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold">
          Hello World
        </h1>
      </main>
    </>
  );
};

export default Home;
