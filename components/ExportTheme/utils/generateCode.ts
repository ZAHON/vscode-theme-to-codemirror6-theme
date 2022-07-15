import type { Colors } from '@/redux/editorViewStyleSlice';
import type { Tags } from '@/redux/highlightStyleSlice';

import prettier from 'prettier/standalone';
import babylon from 'prettier/parser-babel';

import { generateEditorViewTheme } from './generateEditorViewTheme';
import { generateHighlightStyle } from './generateHighlightStyle';

export const generateCode = ({
  themeName,
  themeType,
  includeScrollbarStyles,
  colors,
  tags,
}: {
  themeName: string;
  themeType: string;
  includeScrollbarStyles: boolean;
  colors: Colors;
  tags: Tags;
}) => {
  const editorViewTheme = generateEditorViewTheme({
    themeName,
    themeType,
    includeScrollbarStyles,
    colors,
  });
  const highlightStyle = generateHighlightStyle({ themeName, tags });

  const imports = `
		import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
		import { Extension } from '@codemirror/state';
		import { EditorView } from '@codemirror/view';
		import { tags as t } from '@lezer/highlight';
	`;

  const uglyCode = `
		${imports}
		${editorViewTheme}
		${highlightStyle}
		export const ${themeName}: Extension = [${themeName}Theme, syntaxHighlighting(${themeName}HighlightStyle)]
	`;

  const formattedCode = prettier.format(uglyCode, {
    parser: 'babel',
    plugins: [babylon],
    tabWidth: 2,
  });

  return formattedCode;
};
