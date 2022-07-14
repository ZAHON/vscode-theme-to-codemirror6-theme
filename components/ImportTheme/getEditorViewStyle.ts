import type { EditorViewStyleState } from '@/redux/editorViewStyleSlice';

type Color = string | null;

export const getEditorViewStyle = (data: string): EditorViewStyleState => {
  const themeObject = JSON.parse(data.replaceAll('//', ''));

  const themeType: Color = themeObject?.['type'];

  // Base
  const textColor: Color = themeObject?.['colors']?.['editor.foreground'];
  const backgroundColor: Color = themeObject?.['colors']?.['editor.background'];
  const scrollbarThumbColor: Color = themeObject?.['colors']?.['scrollbarSlider.background'];

  // Cursor
  const cursorColor: Color = themeObject?.['colors']?.['editorCursor.foreground'];

  // LineNumbers
  const lineNumbersBackgroundColor: Color = themeObject?.['colors']?.['editor.background'];
  const lineNumbersTextColor: Color = themeObject?.['colors']?.['editorLineNumber.foreground'];

  // ActiveLine
  const activeLineBackgroundColor: Color = themeObject?.['colors']?.['editor.lineHighlightBackground'];
  const activeLineBorderColor: Color = themeObject?.['colors']?.['editor.lineHighlightBorder'];
  const activeLineLineNumbersBackgroundColor: Color = themeObject?.['colors']?.['editor.background'];
  const activeLineLineNumbersTextColor: Color = themeObject?.['colors']?.['editorLineNumber.activeForeground'];

  // FoldPlaceholder
  const foldPlaceholderColor: Color = themeObject?.['colors']?.['editorGutter.foldingControlForeground'];

  // Selection
  const selectionBackgroundColor: Color = themeObject?.['colors']?.['editor.selectionBackground'];
  const selectionMatchBackgroundColor: Color = themeObject?.['colors']?.['editor.selectionHighlightBackground'];
  const selectionMatchBorderColor: Color = themeObject?.['colors']?.['editor.selectionHighlightBorder'];

  // MatchingBracket
  const matchingBracketBackgroundColor: Color = themeObject?.['colors']?.['editorBracketMatch.background'];
  const matchingBracketOutlineColor: Color = themeObject?.['colors']?.['editorBracketMatch.border'];

  // SearchMatch
  const searchMatchBackgroundColor: Color = themeObject?.['colors']?.['editor.findMatchHighlightBackground'];
  const searchMatchSelectedBackgroundColor: Color = themeObject?.['colors']?.['editor.findMatchBackground'];

  // Autocomplete
  const autocompleteBackgroundColor: Color = themeObject?.['colors']?.['editorSuggestWidget.background'];
  const autocompleteBorderColor: Color = themeObject?.['colors']?.['editorSuggestWidget.border'];
  const autocompleteItemTextColor: Color = themeObject?.['colors']?.['editorSuggestWidget.foreground'];
  const autocompleteItemSelectedTextColor: Color = themeObject?.['colors']?.['editorSuggestWidget.selectedForeground'];
  const autocompleteItemSelectedBackgroundColor: Color =
    themeObject?.['colors']?.['editorSuggestWidget.selectedBackground'];
  const autocompleteItemHoveredBackgroundColor: Color = themeObject?.['colors']?.['list.hoverBackground'];

  // Panels
  const panelsTextColor: Color = themeObject?.['colors']?.['editorHoverWidget.foreground'];
  const panelsBackgroundColor: Color = themeObject?.['colors']?.['editorHoverWidget.background'];

  // Textfield
  const textfieldBackgroundColor: Color = themeObject?.['colors']?.['input.background'];
  const textfieldFocusedBorderColor: Color = themeObject?.['colors']?.['focusBorder'];

  // Button
  const buttonTextColor: Color = themeObject?.['colors']?.['button.foreground'];
  const buttonBackgroundColor: Color = themeObject?.['colors']?.['button.background'];
  const buttonHoveredBackgroundColor: Color = themeObject?.['colors']?.['button.hoverBackground'];
  const buttonFocusOutlineColor: Color = themeObject?.['colors']?.['focusBorder'];

  // ButtonClose
  const buttonCloseTextColor = themeObject?.['colors']?.['editorHoverWidget.foreground'];

  return {
    themeType,
    textColor,
    backgroundColor,
    scrollbarThumbColor,
    cursorColor,
    lineNumbersBackgroundColor,
    lineNumbersTextColor,
    activeLineBackgroundColor,
    activeLineBorderColor,
    activeLineLineNumbersBackgroundColor,
    activeLineLineNumbersTextColor,
    foldPlaceholderColor,
    selectionBackgroundColor,
    selectionMatchBackgroundColor,
    selectionMatchBorderColor,
    matchingBracketBackgroundColor,
    matchingBracketOutlineColor,
    searchMatchBackgroundColor,
    searchMatchSelectedBackgroundColor,
    autocompleteBackgroundColor,
    autocompleteBorderColor,
    autocompleteItemTextColor,
    autocompleteItemSelectedTextColor,
    autocompleteItemSelectedBackgroundColor,
    autocompleteItemHoveredBackgroundColor,
    panelsTextColor,
    panelsBackgroundColor,
    textfieldBackgroundColor,
    textfieldFocusedBorderColor,
    buttonTextColor,
    buttonBackgroundColor,
    buttonHoveredBackgroundColor,
    buttonFocusOutlineColor,
    buttonCloseTextColor,
  };
};
