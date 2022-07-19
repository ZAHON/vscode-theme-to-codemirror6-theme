import { useState } from 'react';

import { Download } from 'tabler-icons-react';
import { Button } from '@/components/UI/Button/index';

import { ThemeModal } from './ThemeModal';

export const ExportTheme = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)} icon={<Download size={16} />}>
        Export
      </Button>
      {opened && <ThemeModal opened={opened} onClose={() => setOpened(false)} />}
    </>
  );
};
