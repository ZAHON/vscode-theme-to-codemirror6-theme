import { Tabs } from '@/components/UI/Tabs/index';
import type { Data } from '@/components/UI/Tabs/index';
import { AppWindow, Code } from 'tabler-icons-react';
import { Tags } from './Tags/index';
import styles from './styles.module.scss';

const data: Data = [
  {
    value: 'window',
    label: 'Window',
    icon: <AppWindow size={16} />,
    content: <p>Editor</p>,
  },
  {
    value: 'tags',
    label: 'Tags',
    icon: <Code size={16} />,
    content: <Tags />,
  },
];

export const Navbar = () => (
  <div>
    <Tabs data={data} defaultValue="tags" contentClassName={styles['navbar-content']} />
  </div>
);
