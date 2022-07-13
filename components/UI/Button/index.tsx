import type { ReactNode } from 'react';
import styles from './styles.module.scss';

type ButtonProps = {
  children: ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
};

export const Button = ({ children, fullWidth = false, onClick }: ButtonProps) => {
  const classNames = [styles.button, fullWidth ? styles['button--full-width'] : ''].join(' ');

  const clickHandle = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={classNames} onClick={clickHandle} type="button">
      {children}
    </button>
  );
};
