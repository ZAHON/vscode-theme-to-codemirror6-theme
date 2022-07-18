import type { NextPage } from 'next';
import Head from 'next/head';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

import { AppShell } from '@/components/AppShell/index';

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <Head>
        <title>VCcode theme to CodeMirror6 theme</title>
        <meta name="description" content="VCcode theme to CodeMirror6 theme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell />
    </Provider>
  );
};

export default Home;
