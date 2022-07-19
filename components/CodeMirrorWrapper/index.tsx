import CodeMirror from '@uiw/react-codemirror';
import { useMemo } from 'react';
import type { Language } from './utils/languages';
import { languages } from './utils/languages';
import { createTheme } from './utils/createTheme';
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

const theme = createTheme();

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
