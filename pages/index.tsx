import type { NextPage } from 'next';
import Head from 'next/head';

import { About } from '../components/About';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jack Douglas</title>
      </Head>

      <About />
    </div>
  );
};

export default Home;
