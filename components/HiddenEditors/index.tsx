import { MonacoEditor } from '@/components/MonacoEditor/index';
import { tsxValue, htmlValue, cssValue } from '@/data/defaultValues/_index.ts';
import styles from './styles.module.scss';

export const HiddenEditors = () => {
  return (
    <div className={styles['hidden-editors']}>
      <div id="monaco-editor-tsx">
        <MonacoEditor language="tsx" value={tsxValue} />
      </div>
      <div id="monaco-editor-html">
        <MonacoEditor language="html" value={htmlValue} />
      </div>
      <div id="monaco-editor-css">
        <MonacoEditor language="css" value={cssValue} />
      </div>
    </div>
  );
};
