import { useId } from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { Check, Selector } from 'tabler-icons-react';
import styles from './styles.module.scss';

type SelectProps = {
  value: string;
  label: string;
  data: { label: string; value: string }[];
  onChange: (value: string) => void;
};

export const Select = ({ value, label, data, onChange }: SelectProps) => {
  const id = useId();

  return (
    <div className={styles.select}>
      <label htmlFor={id} className={styles.select__label}>
        {label}
      </label>
      <RadixSelect.Root defaultValue={value} onValueChange={onChange}>
        <RadixSelect.Trigger asChild>
          <button id={id} className={styles.select__trigger}>
            <RadixSelect.Value />
            <RadixSelect.SelectIcon className={styles.select__icon}>
              <Selector size={16} />
            </RadixSelect.SelectIcon>
          </button>
        </RadixSelect.Trigger>
        <RadixSelect.Content className={styles.select__content}>
          <RadixSelect.Viewport className={styles.select__viewport}>
            {data.map(({ label, value }) => (
              <RadixSelect.Item key={value} className={styles.select__item} value={value}>
                <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator className={styles.select__itemIndicator}>
                  <Check size={15} />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Root>
    </div>
  );
};
