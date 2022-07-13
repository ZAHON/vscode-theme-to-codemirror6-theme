import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { loadWASM } from 'onigasm';
import { Header } from '@/components/Header/index';
import { Main } from '@/components/Main';
import { PreviewEditor } from '@/components/PreviewEditor/index';
import { HiddenEditors } from '@/components/HiddenEditors/index';

const Home: NextPage = () => {
  const [isOnigasmloaded, setIsOnigasmloaded] = useState(false);

  const init = async () => {
    try {
      await loadWASM('/onigasm/onigasm.wasm');
      setIsOnigasmloaded(true);
    } catch {
      // try/catch prevents onigasm from erroring on fast refreshes
    }
  };

  init();

  return (
    <Provider store={store}>
      <Head>
        <title>VCcode theme to CodeMirror6 theme</title>
        <meta name="description" content="VCcode theme to CodeMirror6 theme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main>
        <PreviewEditor />
        {isOnigasmloaded && <HiddenEditors />}
      </Main>
    </Provider>
  );
};

export default Home;
