import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '@/redux/monacoEditorSlice';
import { setEditorViewStyle } from '@/redux/editorViewStyleSlice';
import { setHighlightStyle } from '@/redux/highlightStyleSlice';

import { getEditorViewStyle } from './getEditorViewStyle';
import { getHighlightStyle } from './getHighlightStyle';
import type { editor } from 'monaco-editor';

import { Button } from '@/components/UI/Button/index';
import { CodeMirrorWrapper } from '@/components/CodeMirrorWrapper/index';
import { Modal } from '@/components/UI/Modal';

import { placeholder } from './placeholder';

// @ts-ignore
import * as vscodeThemeToMonacoThemeWeb from 'vscode-theme-to-monaco-theme-web';

export const ImportTheme = () => {
  const [opened, setOpened] = useState(false);
  const dispatch = useDispatch();
  const [vsCodeTheme, setVsCodeTheme] = useState('');

  const buttonClickHandle = () => {
    try {
      const editorViewStyle = getEditorViewStyle(vsCodeTheme);
      dispatch(setEditorViewStyle(editorViewStyle));

      const monacoTheme = vscodeThemeToMonacoThemeWeb.convertTheme(vsCodeTheme) as editor.IStandaloneThemeData;
      dispatch(setTheme(monacoTheme));
      setOpened(false);

      setTimeout(() => {
        const highlightStyle = getHighlightStyle();

        dispatch(setHighlightStyle(highlightStyle));
      }, 2000);
    } catch {
      console.log('Error');
    }
  };

  return (
    <>
      <Button onClick={() => setOpened(true)}>Import</Button>
      <Modal title="VS Vode Theme" opened={opened} onClose={() => setOpened(false)}>
        <>
          <CodeMirrorWrapper
            language="json"
            value={vsCodeTheme}
            onChange={(value) => setVsCodeTheme(value)}
            height="250px"
            placeholder={placeholder}
          />
          <Button onClick={buttonClickHandle}>Import</Button>
        </>
      </Modal>
    </>
  );
};
