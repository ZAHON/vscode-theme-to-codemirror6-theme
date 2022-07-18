import { useState } from 'react';

import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

import { useClipboard } from '@/hooks/useClipboard';

import { Download, Copy } from 'tabler-icons-react';

import { Button } from '@/components/UI/Button/index';
import { TextInput } from '@/components/UI/TextInput';
import { Checkbox } from '@/components/UI/Checkbox';
import { Modal } from '@/components/UI/Modal';
import { CodeMirrorWrapper } from '@/components/CodeMirrorWrapper/index';

import { generateCode } from './utils/generateCode';

export const ExportTheme = () => {
  const clipboard = useClipboard();
  const [themeName, setThemeName] = useState('example');
  const [includeScrollbarStyles, setIncludeScrollbarStyles] = useState(true);
  const [opened, setOpened] = useState(false);

  const editorViewStyleIsLoad = useSelector((state: RootState) => state.editorViewStyle.isLoad);
  const highlightStyleIsLoad = useSelector((state: RootState) => state.highlightStyle.isLoad);

  const themeType = useSelector((state: RootState) => state.editorViewStyle.themeType);
  const colors = useSelector((state: RootState) => state.editorViewStyle.colors);
  const tags = useSelector((state: RootState) => state.highlightStyle.tags);

  const themeIsLoad = editorViewStyleIsLoad && highlightStyleIsLoad;

  const formatedThemeName = (() => {
    const name = themeName.trim().replaceAll(' ', '');
    return name === '' ? 'example' : name;
  })();

  const themeCode = themeIsLoad
    ? generateCode({
        themeName: formatedThemeName,
        themeType,
        includeScrollbarStyles,
        colors,
        tags,
      })
    : '';

  return (
    <>
      <Button onClick={() => setOpened(true)} disabled={!themeIsLoad} icon={<Download size={16} />}>
        Export
      </Button>
      <Modal title="CodeMirror6 Theme" opened={opened} onClose={() => setOpened(false)}>
        <>
          <TextInput
            value={themeName}
            onChange={(value) => setThemeName(value)}
            label="Theme name"
          />
          <Checkbox
            checked={includeScrollbarStyles}
            onChange={(value) => setIncludeScrollbarStyles(value)}
            label="Include scrollbar styles"
          />
          <CodeMirrorWrapper
            value={themeCode}
            language="typescript"
            height="300px"
            editable={false}
          />
          <Button
            color={clipboard.copied ? 'teal' : 'primary'}
            onClick={() => clipboard.copy(themeCode)}
            icon={<Copy size={16} />}
          >
            {clipboard.copied ? 'Copied' : 'Copy'}
          </Button>
        </>
      </Modal>
    </>
  );
};
