import { ImportTheme } from '@/components/ImportTheme/index';
import { ExportTheme } from '@/components/ExportTheme/index';
import styles from './styles.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <ImportTheme />
    <ExportTheme />
  </header>
);
