import type { ReactNode } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import styles from './styles.module.scss';

export type Data = {
  value: string;
  label: string;
  content: ReactNode;
  icon?: ReactNode;
}[];

type TabsProps = {
  defaultValue?: string;
  data: Data;
  contentClassName?: string;
};

export const Tabs = ({ defaultValue, data, contentClassName }: TabsProps) => (
  <RadixTabs.Root defaultValue={defaultValue ? defaultValue : data[0].value}>
    <RadixTabs.List className={styles.tabs__list}>
      {data.map(({ value, label, icon }) => (
        <RadixTabs.Trigger key={value} className={styles.tabs__trigger} value={value}>
          {icon && <span>{icon}</span>}
          <span>{label}</span>
        </RadixTabs.Trigger>
      ))}
    </RadixTabs.List>
    {data.map(({ value, content }) => (
      <RadixTabs.Content
        className={contentClassName ? contentClassName : ''}
        key={value}
        value={value}
      >
        {content}
      </RadixTabs.Content>
    ))}
  </RadixTabs.Root>
);
