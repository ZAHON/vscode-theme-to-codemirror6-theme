import styles from './styles.module.scss';

type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

export const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => (
  <div className={styles['checkbox']}>
    <input
      onChange={() => onChange(!checked)}
      checked={checked}
      className={styles['checkbox__hidden-input']}
      type="checkbox"
      id={id}
    />
    <label className={styles['checkbox__input']} htmlFor={id} />
    <label className={styles['checkbox__label']} htmlFor={id}>
      {label}
    </label>
  </div>
);
