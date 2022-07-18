import { useId } from 'react';
import styles from './styles.module.scss';

type CheckboxProps = {
  label: string;
  checked: boolean;
  labelOnLeft?: boolean;
  grow?: boolean;
  onChange: (value: boolean) => void;
};

export const Checkbox = ({
  label,
  checked,
  grow = false,
  labelOnLeft = false,
  onChange,
}: CheckboxProps) => {
  const id = useId();

  return (
    <div className={`${styles['checkbox']} ${grow ? styles['checkbox--grow'] : ''}`}>
      {labelOnLeft && (
        <label className={styles['checkbox__label']} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        onChange={() => onChange(!checked)}
        checked={checked}
        className={styles['checkbox__hidden-input']}
        type="checkbox"
        id={id}
      />
      <label className={styles['checkbox__input']} htmlFor={id} />
      {!labelOnLeft && (
        <label className={styles['checkbox__label']} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
