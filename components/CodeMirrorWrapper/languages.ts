import { cpp } from '@codemirror/lang-cpp';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { php } from '@codemirror/lang-php';
import { python } from '@codemirror/lang-python';
import { rust } from '@codemirror/lang-rust';
import { languages as languageData } from '@codemirror/language-data';

export type Language = {
  id: string;
  label: string;
  extension: Function;
};

export const languages: Language[] = [
  {
    id: 'css',
    label: 'CSS',
    extension: css,
  },
  {
    id: 'cpp',
    label: 'C++',
    extension: cpp,
  },
  {
    id: 'html',
    label: 'HTML',
    extension: html,
  },
  {
    id: 'java',
    label: 'Java',
    extension: java,
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    extension: javascript,
  },
  {
    id: 'jsx',
    label: 'JSX',
    extension: () => javascript({ jsx: true }),
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    extension: () => javascript({ typescript: true }),
  },
  {
    id: 'tsx',
    label: 'TSX',
    extension: () => javascript({ jsx: true, typescript: true }),
  },
  {
    id: 'json',
    label: 'JSON',
    extension: json,
  },
  {
    id: 'markdown',
    label: 'Markdown',
    extension: () => markdown({ base: markdownLanguage, codeLanguages: languageData }),
  },
  {
    id: 'php',
    label: 'PHP',
    extension: php,
  },
  {
    id: 'python',
    label: 'Python',
    extension: python,
  },
  {
    id: 'rust',
    label: 'Rust',
    extension: rust,
  },
];
