import { ImportTheme } from '@/components/ImportTheme/index';
import { Test } from '@/components/Test/index';
import styles from './styles.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Test />
    <ImportTheme />
  </header>
);
