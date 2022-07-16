import styles from './styles.module.scss';

type AlertProps = {
  children: string;
};

export const Alert = ({ children }: AlertProps) => (
  <div className={styles.alert}>
    <p className={styles.alert__content}>{children}</p>
  </div>
);
