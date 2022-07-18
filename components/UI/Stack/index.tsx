import type { ReactNode } from 'react';
import styles from './styles.module.scss';

type StackProps = {
  children: ReactNode;
};

export const Stack = ({ children }: StackProps) => <div className={styles.stack}>{children}</div>;
