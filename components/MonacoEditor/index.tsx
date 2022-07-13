import dynamic from 'next/dynamic';
import type { ReactMonacoEditorProps } from './ReactMonacoEditor';

const ReactMonacoEditor = dynamic(() => import('./ReactMonacoEditor'), {
  ssr: false,
});

export const MonacoEditor = (props: ReactMonacoEditorProps) => <ReactMonacoEditor {...props} />;
