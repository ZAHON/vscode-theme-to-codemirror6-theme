import type { Values } from '../index';

import cppIcon from '../../../public/programming-languages-icons/cpp.svg';
import cssIcon from '../../../public/programming-languages-icons/css.svg';
import htmlIcon from '../../../public/programming-languages-icons/html.svg';
import javaIcon from '../../../public/programming-languages-icons/java.svg';
import javascriptIcon from '../../../public/programming-languages-icons/javascript.svg';
import jsonIcon from '../../../public/programming-languages-icons/json.svg';
import jsxIcon from '../../../public/programming-languages-icons/jsx.svg';
import markdownIcon from '../../../public/programming-languages-icons/markdown.svg';
import phpIcon from '../../../public/programming-languages-icons/php.svg';
import pythonIcon from '../../../public/programming-languages-icons/python.svg';
import rustIcon from '../../../public/programming-languages-icons/rust.svg';
import tsxIcon from '../../../public/programming-languages-icons/tsx.svg';
import typescriptIcon from '../../../public/programming-languages-icons/typescript.svg';

export const data: { id: keyof Values; label: string; icon: string }[] = [
  {
    id: 'cpp',
    label: 'C++',
    icon: cppIcon,
  },
  {
    id: 'css',
    label: 'CSS',
    icon: cssIcon,
  },
  {
    id: 'html',
    label: 'HTML',
    icon: htmlIcon,
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    icon: javascriptIcon,
  },
  {
    id: 'java',
    label: 'Java',
    icon: javaIcon,
  },
  {
    id: 'json',
    label: 'JSON',
    icon: jsonIcon,
  },
  {
    id: 'jsx',
    label: 'JSX',
    icon: jsxIcon,
  },
  {
    id: 'markdown',
    label: 'Markdown',
    icon: markdownIcon,
  },
  {
    id: 'php',
    label: 'PHP',
    icon: phpIcon,
  },
  {
    id: 'python',
    label: 'Python',
    icon: pythonIcon,
  },
  {
    id: 'rust',
    label: 'Rust',
    icon: rustIcon,
  },
  {
    id: 'tsx',
    label: 'TSX',
    icon: tsxIcon,
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    icon: typescriptIcon,
  },
];
