import { useState } from 'react';
import { loadWASM } from 'onigasm';

import { Header } from '@/components/Header/index';
import { Navbar } from '@/components/Navbar/index';
import { Main } from '@/components/Main';
import { PreviewEditor } from '@/components/PreviewEditor/index';
import { HiddenEditors } from '@/components/HiddenEditors/index';
import styles from './styles.module.scss';

export const AppShell = () => {
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
    <div className={styles['app-shell']}>
      <div className={styles['app-shell__header']}>
        <Header />
      </div>
      <div className={styles['app-shell__content']}>
        <div className={styles['app-shell__navbar']}>
          <Navbar />
        </div>
        <div className={styles['app-shell__main']}>
          <Main>
            <PreviewEditor />
            {isOnigasmloaded && <HiddenEditors />}
          </Main>
        </div>
      </div>
    </div>
  );
};
