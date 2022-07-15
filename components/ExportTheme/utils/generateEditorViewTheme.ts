import type { Colors } from '@/redux/editorViewStyleSlice';

import { generateBaseStyles } from './editorViewThemeParts/generateBaseStyles';
import { generateCursorStyles } from './editorViewThemeParts/generateCursorStyles';
import { generateScrollbarStyles } from './editorViewThemeParts/generateScrollbarStyles';
import { generateLineNumbersStyles } from './editorViewThemeParts/generateLineNumbersStyles';
import { generateActiveLineStyles } from './editorViewThemeParts/generateActiveLineStyles';
import { generateFoldPlaceholderStyles } from './editorViewThemeParts/generateFoldPlaceholderStyles';
import { generateSelectionStyles } from './editorViewThemeParts/generateSelectionStyles';
import { generateMatchingBracketStyles } from './editorViewThemeParts/generateMatchingBracketStyles';
import { generateSearchMatchStyles } from './editorViewThemeParts/generateSearchMatchStyles';
import { generateAutocompleteStyles } from './editorViewThemeParts/generateAutocompleteStyles';
import { generatePanelsStyles } from './editorViewThemeParts/generatePanelsStyles';

export const generateEditorViewTheme = ({
  themeName,
  themeType,
  includeScrollbarStyles,
  colors,
}: {
  themeName: string;
  themeType: string;
  includeScrollbarStyles: boolean;
  colors: Colors;
}) => {
  const baseStyles = generateBaseStyles(colors.base);
  const cursorStyles = generateCursorStyles(colors.cursor);
  const scrollbarStyles = includeScrollbarStyles ? generateScrollbarStyles(colors.scrollbar) : '';
  const lineNumbersStyles = generateLineNumbersStyles(colors.lineNumbers);
  const activeLineStyles = generateActiveLineStyles(colors.activeLine);
  const foldPlaceholderStyles = generateFoldPlaceholderStyles(colors.foldPlaceholder);
  const selectionStyles = generateSelectionStyles(colors.selection);
  const matchingBracketStyles = generateMatchingBracketStyles(colors.matchingBracket);
  const searchMatchStyles = generateSearchMatchStyles(colors.searchMatch);
  const autocompleteStyles = generateAutocompleteStyles(colors.autocomplete);
  const panelsStyles = generatePanelsStyles(colors.panels);

  const code = `
	export const ${themeName}Theme = EditorView.theme(
		${JSON.stringify({
      ...baseStyles,
      ...cursorStyles,
      ...scrollbarStyles,
      ...lineNumbersStyles,
      ...activeLineStyles,
      ...foldPlaceholderStyles,
      ...selectionStyles,
      ...matchingBracketStyles,
      ...searchMatchStyles,
      ...autocompleteStyles,
      ...panelsStyles,
    })},
		${JSON.stringify({
      dark: themeType === 'dark',
    })}
	)
	`;

  return code;
};
