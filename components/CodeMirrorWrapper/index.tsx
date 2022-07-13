import CodeMirror from '@uiw/react-codemirror';
import { useMemo } from 'react';
import type { Language } from './languages';
import { languages } from './languages';
import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { createTheme } from './createTheme';
import styles from './styles.module.scss';

type CodeMirrorWrapperProps = {
  language: string;
  value?: string;
  height?: string;
  width?: string;
  lineNumbers?: boolean;
  editable?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const CodeMirrorWrapper = ({
  language,
  value,
  height = 'auto',
  width = '100%',
  lineNumbers = true,
  editable = true,
  placeholder,
  onChange,
}: CodeMirrorWrapperProps) => {
  const editorViewStyle = useSelector((state: RootState) => state.editorViewStyle);
  const highlightStyle = useSelector((state: RootState) => state.highlightStyle);

  const theme = createTheme(editorViewStyle, highlightStyle);

  const languageExtension = useMemo(() => {
    const languageData = languages.find((data) => data.id === language) as Language;

    return languageData.extension;
  }, [language]);

  return (
    <div className={styles['code-mirror-wrapper']}>
      <CodeMirror
        value={value}
        height={height}
        width={width}
        editable={editable}
        theme={theme}
        placeholder={placeholder}
        onChange={onChange}
        basicSetup={{
          lineNumbers,
        }}
        extensions={[languageExtension()]}
      />
    </div>
  );
};
