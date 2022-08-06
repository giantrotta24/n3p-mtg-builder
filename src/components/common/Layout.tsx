import Head from 'next/head';

import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
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
        {children}
      </main>
    </>
  );
};

export default Layout;
