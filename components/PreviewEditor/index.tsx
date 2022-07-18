import { useState } from 'react';
import { CodeMirrorWrapper } from '@/components/CodeMirrorWrapper/index';
import { CodeMirrorThemeWrapper } from '@/components/CodeMirrorThemeWrapper/index';
import { Tabs } from './Tabs/index';
import {
  cppValue,
  cssValue,
  htmlValue,
  javascriptValue,
  javaValue,
  jsonValue,
  jsxValue,
  markdownValue,
  phpValue,
  pythonValue,
  rustValue,
  tsxValue,
  typescriptValue,
} from '@/data/defaultValues/_index.ts';

import styles from './styles.module.scss';

export type Values = {
  cpp: string;
  css: string;
  html: string;
  javascript: string;
  java: string;
  json: string;
  jsx: string;
  markdown: string;
  php: string;
  python: string;
  rust: string;
  tsx: string;
  typescript: string;
};

export const PreviewEditor = () => {
  const [activeTab, setActiveTab] = useState<keyof Values>('html');
  const [values, setValues] = useState<Values>({
    cpp: cppValue,
    css: cssValue,
    html: htmlValue,
    javascript: javascriptValue,
    java: javaValue,
    json: jsonValue,
    jsx: jsxValue,
    markdown: markdownValue,
    php: phpValue,
    python: pythonValue,
    rust: rustValue,
    tsx: tsxValue,
    typescript: typescriptValue,
  });

  const onChange = (value: string) => {
    setValues({ ...values, [activeTab]: value });
  };

  return (
    <div className={styles['preview-editor']}>
      <Tabs onClickTab={setActiveTab} activeTab={activeTab} />
      <CodeMirrorThemeWrapper>
        <CodeMirrorWrapper
          value={values[activeTab]}
          onChange={onChange}
          language={activeTab}
          height="100%"
        />
      </CodeMirrorThemeWrapper>
    </div>
  );
};
