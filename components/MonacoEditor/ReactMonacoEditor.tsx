import Editor, { useMonaco } from '@monaco-editor/react';
import type { editor } from 'monaco-editor';
import { useState, useRef } from 'react';
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import type { RootState } from '@/redux/store';
import { setIsMount } from '@/redux/monacoEditorSlice';
import { useSelector, useDispatch } from 'react-redux';

export type ReactMonacoEditorProps = {
  language: string;
  value: string;
};

const ReactMonacoEditor = ({ language, value }: ReactMonacoEditorProps) => {
  const isOnigasmloaded = true;
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.monacoEditor.theme);
  const monaco = useMonaco();
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const { loadedTheme } = useTheme(theme, monaco);
  const { loadedLanguage } = useLanguage(language, monaco, editorRef.current, isOnigasmloaded);
  const [height, setHeight] = useState(20);

  const updateHeight = (editor: editor.IStandaloneCodeEditor) => {
    const contentHeight = editor.getContentHeight();

    setHeight(contentHeight);
  };

  const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;

    dispatch(setIsMount(true));

    editor.onDidContentSizeChange(() => {
      updateHeight(editor);
    });
  };

  return (
    <Editor
      onMount={handleEditorDidMount}
      width="100%"
      height={height}
      language={loadedLanguage}
      value={value}
      theme={loadedTheme}
      options={{
        bracketPairColorization: {
          enabled: true,
        },
        padding: { bottom: 50, top: 50 },
        revealHorizontalRightPadding: 0,
        glyphMargin: false,
        lineDecorationsWidth: 0,
        lineNumbersMinChars: 0,
        folding: false,
        scrollbar: {
          handleMouseWheel: false,
        },
        scrollBeyondLastLine: false,
        wordWrap: 'on',
        wrappingStrategy: 'advanced',
        overviewRulerLanes: 0,
        automaticLayout: true,
        lineNumbers: 'off',
        minimap: {
          enabled: false,
        },
      }}
    />
  );
};

export default ReactMonacoEditor;
