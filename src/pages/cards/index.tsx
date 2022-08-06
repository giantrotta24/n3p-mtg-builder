import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/common/Header';

const Test: NextPage = () => {
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

      <Header />
      <main className="container mx-auto min-h-screen h-auto w-screen">
        <p>hello world</p>
      </main>
    </>
  );
};

export default Test;
