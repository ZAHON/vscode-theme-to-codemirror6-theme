import { useState } from 'react';

import type { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

import { Copy } from 'tabler-icons-react';

import { useClipboard } from '@/hooks/useClipboard';

import { Button } from '@/components/UI/Button';
import { TextInput } from '@/components/UI/TextInput';
import { Checkbox } from '@/components/UI/Checkbox';
import { Modal } from '@/components/UI/Modal';
import { CodeMirrorThemeWrapper } from '@/components/CodeMirrorThemeWrapper';
import { CodeMirrorWrapper } from '@/components/CodeMirrorWrapper';

import { generateCode } from '../utils/generateCode';

type ThemeModalProps = {
  opened: boolean;
  onClose: () => void;
};

export const ThemeModal = ({ opened, onClose }: ThemeModalProps) => {
  const clipboard = useClipboard();
  const [themeName, setThemeName] = useState('example');
  const [includeScrollbarStyles, setIncludeScrollbarStyles] = useState(true);

  const themeType = useSelector((state: RootState) => state.editorViewStyle.themeType);
  const colors = useSelector((state: RootState) => state.editorViewStyle.colors);
  const tags = useSelector((state: RootState) => state.highlightStyle.tags);

  const formatedThemeName = (() => {
    const name = themeName.trim().replaceAll(' ', '');
    return name === '' ? 'example' : name;
  })();

  const themeCode = generateCode({
    themeName: formatedThemeName,
    themeType,
    includeScrollbarStyles,
    colors,
    tags,
  });

  return (
    <Modal title="CodeMirror6 Theme" opened={opened} onClose={onClose}>
      <>
        <TextInput value={themeName} onChange={(value) => setThemeName(value)} label="Theme name" />
        <Checkbox
          checked={includeScrollbarStyles}
          onChange={(value) => setIncludeScrollbarStyles(value)}
          label="Include scrollbar styles"
        />
        <CodeMirrorThemeWrapper>
          <CodeMirrorWrapper
            value={themeCode}
            language="typescript"
            height="300px"
            editable={false}
          />
        </CodeMirrorThemeWrapper>
        <Button
          color={clipboard.copied ? 'teal' : 'primary'}
          onClick={() => clipboard.copy(themeCode)}
          icon={<Copy size={16} />}
        >
          {clipboard.copied ? 'Copied' : 'Copy'}
        </Button>
      </>
    </Modal>
  );
};
