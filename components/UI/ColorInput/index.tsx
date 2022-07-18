import { useId, useMemo, useRef } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { RgbaStringColorPicker } from 'react-colorful';
import { colord } from 'colord';
import { TextInput } from '@/components/UI/TextInput';
import { Button } from '@/components/UI/Button';
import { Refresh } from 'tabler-icons-react';
import styles from './styles.module.scss';

type ColorInputProps = {
  value: string;
  label: string;
  onChange: (value: string) => void;
};

export const ColorInput = ({ label, value, onChange }: ColorInputProps) => {
  const id = useId();
  const orginalColor = useRef(value);

  const color = useMemo(() => {
    return value.startsWith('rgba') ? value : colord(value).toRgbString();
  }, [value]);

  return (
    <div className={styles['color-input']}>
      <label className={styles['color-input__label']} htmlFor={id}>
        {label}
      </label>
      <div>
        <Popover.Root>
          <Popover.Trigger asChild>
            <button
              style={{ backgroundColor: color }}
              className={styles['color-input__swatch']}
              id={id}
              type="button"
            />
          </Popover.Trigger>
          <Popover.Anchor />
          <Popover.Content sideOffset={5} className={styles['color-input__content']}>
            <RgbaStringColorPicker color={color} onChange={(value) => onChange(value)} />
            <TextInput fullWidth value={color} onChange={(value) => onChange(value)} />
            <Button
              onClick={() => onChange(orginalColor.current)}
              icon={<Refresh size={16} />}
              fullWidth
            >
              Reset color
            </Button>
          </Popover.Content>
        </Popover.Root>
      </div>
    </div>
  );
};
