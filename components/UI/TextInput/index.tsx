import { useId } from 'react';
import styles from './styles.module.scss';

type TextInputProps = {
  label?: string;
  value: string;
  fullWidth?: boolean;
  onChange: (value: string) => void;
};

export const TextInput = ({ label, value, fullWidth = false, onChange }: TextInputProps) => {
  const id = useId();

  return (
    <div className={styles['text-input']}>
      {label && (
        <label className={styles['text-input__label']} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={`${styles['text-input__input']} ${
          fullWidth ? styles['text-input__input--full-width'] : ''
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id={id}
        type="text"
      />
    </div>
  );
};
