import type { ReactNode } from 'react';
import styles from './styles.module.scss';

type ButtonProps = {
  children: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  color?: 'teal' | 'primary';
  onClick?: () => void;
};

export const Button = ({
  children,
  fullWidth = false,
  disabled = false,
  icon,
  color = 'primary',
  onClick,
}: ButtonProps) => {
  const buttonClassNames = [
    styles.button,
    fullWidth ? styles['button--full-width'] : '',
    styles[`button--${color}`],
  ].join(' ');

  const clickHandle = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={buttonClassNames} onClick={clickHandle} disabled={disabled} type="button">
      {icon && <span className={styles.button__icon}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
