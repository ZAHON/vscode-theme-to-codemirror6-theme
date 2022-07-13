import { data } from './data';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import type { Values } from '../index';

import styles from './styles.module.scss';

type TabsProps = {
  activeTab: keyof Values;
  onClickTab: Dispatch<SetStateAction<keyof Values>>;
};

export const Tabs = ({ activeTab, onClickTab }: TabsProps) => {
  return (
    <div className={styles.tabs}>
      {data.map(({ id, label, icon }) => (
        <button
          key={id}
          onClick={() => onClickTab(id)}
          type="button"
          className={`${styles.tab} ${activeTab === id ? styles['tab--active'] : ''}`}
        >
          <span>
            <Image width={16} height={16} src={icon} alt={`${id} programming language icon`} />
          </span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};
