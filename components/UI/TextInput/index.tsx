import styles from './styles.module.scss';

type TextInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export const TextInput = ({ id, label, value, onChange }: TextInputProps) => {
  return (
    <div className={styles['text-input']}>
      <label className={styles['text-input__label']} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles['text-input__input']}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id={id}
        type="text"
      />
    </div>
  );
};
