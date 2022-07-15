import { useState } from 'react';
import type { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/redux/monacoEditorSlice';
import { setEditorViewStyle } from '@/redux/editorViewStyleSlice';
import { setHighlightStyle } from '@/redux/highlightStyleSlice';
import { getEditorViewStyle } from './utils/getEditorViewStyle';
import { getHighlightStyle } from './utils/getHighlightStyle';
import type { editor } from 'monaco-editor';
import { Button } from '@/components/UI/Button/index';
import { Modal } from '@/components/UI/Modal';
import { CodeMirrorWrapper } from '@/components/CodeMirrorWrapper/index';
import { FileImport } from 'tabler-icons-react';
import { placeholder } from './data/placeholder';

// @ts-ignore
import * as vscodeThemeToMonacoThemeWeb from 'vscode-theme-to-monaco-theme-web';

export const ImportTheme = () => {
  const dispatch = useDispatch();
  const monacoEditorIsMount = useSelector((state: RootState) => state.monacoEditor.isMount);
  const [opened, setOpened] = useState(false);
  const [vsCodeTheme, setVsCodeTheme] = useState('');

  const buttonClickHandle = () => {
    try {
      if (monacoEditorIsMount) {
        const editorViewStyle = getEditorViewStyle(vsCodeTheme);
        dispatch(setEditorViewStyle(editorViewStyle));

        const monacoTheme = vscodeThemeToMonacoThemeWeb.convertTheme(
          vsCodeTheme
        ) as editor.IStandaloneThemeData;
        dispatch(setTheme(monacoTheme));

        setTimeout(() => {
          const highlightStyle = getHighlightStyle();
          dispatch(setHighlightStyle(highlightStyle));
        }, 1000);

        setOpened(false);
      }
    } catch {
      console.log('Error');
    }
  };

  return (
    <>
      <Button
        icon={<FileImport size={15} />}
        disabled={!monacoEditorIsMount}
        onClick={() => setOpened(true)}
      >
        Import
      </Button>
      <Modal title="VS Vode Theme" opened={opened} onClose={() => setOpened(false)}>
        <>
          <CodeMirrorWrapper
            language="json"
            value={vsCodeTheme}
            onChange={(value) => setVsCodeTheme(value)}
            height="300px"
            placeholder={placeholder}
          />
          <Button onClick={buttonClickHandle}>Import</Button>
        </>
      </Modal>
    </>
  );
};
