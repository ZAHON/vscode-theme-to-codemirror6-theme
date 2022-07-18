import type { EditorViewStyleState, Colors } from '@/redux/editorViewStyleSlice';

export const getEditorViewStyle = (data: string): EditorViewStyleState => {
  const theme = JSON.parse(data.replaceAll('//', '').trim());

  const getThemeColor = (property: string) => {
    const color: string | undefined | null = theme?.['colors']?.[property];

    if (color === undefined) return '';
    if (color === null) return '';
    return color;
  };

  const themeType: string = (() => {
    const type: string | undefined = theme?.['type'];
    return type === undefined ? '' : type;
  })();

  const colors: Colors = {
    base: {
      text: getThemeColor('editor.foreground'),
      background: getThemeColor('editor.background'),
    },
    scrollbar: {
      thumb: {
        background: getThemeColor('scrollbarSlider.background'),
      },
      track: {
        background: getThemeColor('editor.background'),
      },
    },
    cursor: {
      border: getThemeColor('editorCursor.foreground'),
    },
    lineNumbers: {
      text: getThemeColor('editorLineNumber.foreground'),
      background: getThemeColor('editor.background'),
    },
    activeLine: {
      background: getThemeColor('editor.lineHighlightBackground'),
      border: getThemeColor('editor.lineHighlightBorder'),
      lineNumbers: {
        text: getThemeColor('editorLineNumber.activeForeground'),
        background: getThemeColor('editor.background'),
      },
    },
    foldPlaceholder: {
      text: getThemeColor('editorGutter.foldingControlForeground'),
    },
    selection: {
      background: getThemeColor('editor.selectionBackground'),
      match: {
        background: getThemeColor('editor.selectionHighlightBackground'),
        outline: getThemeColor('editor.selectionHighlightBorder'),
      },
    },
    matchingBracket: {
      background: getThemeColor('editorBracketMatch.background'),
      outline: getThemeColor('editorBracketMatch.border'),
    },
    searchMatch: {
      background: getThemeColor('editor.findMatchHighlightBackground'),
      selected: {
        background: getThemeColor('editor.findMatchBackground'),
      },
    },
    autocomplete: {
      background: getThemeColor('editorSuggestWidget.background'),
      border: getThemeColor('editorSuggestWidget.border'),
      item: {
        text: getThemeColor('editorSuggestWidget.foreground'),
        selected: {
          text: getThemeColor('editorSuggestWidget.selectedForeground'),
          background: getThemeColor('editorSuggestWidget.selectedBackground'),
        },
        hovered: {
          background: getThemeColor('list.hoverBackground'),
        },
      },
    },
    panels: {
      text: getThemeColor('editorHoverWidget.foreground'),
      background: getThemeColor('editorHoverWidget.background'),
      textField: {
        background: getThemeColor('input.background'),
        focused: {
          border: getThemeColor('focusBorder'),
        },
      },
      button: {
        text: getThemeColor('button.foreground'),
        background: getThemeColor('button.background'),
        hovered: {
          background: getThemeColor('button.hoverBackground'),
        },
        focused: {
          outline: getThemeColor('focusBorder'),
        },
      },
      buttonClose: {
        text: getThemeColor('editorHoverWidget.foreground'),
      },
    },
  };

  // Base
  // const textColor: Color = themeObject?.['colors']?.['editor.foreground'];
  // const backgroundColor: Color = themeObject?.['colors']?.['editor.background'];

  // const scrollbarThumbColor: Color = themeObject?.['colors']?.['scrollbarSlider.background'];

  // Cursor
  // const cursorColor: Color = themeObject?.['colors']?.['editorCursor.foreground'];

  // LineNumbers
  // const lineNumbersBackgroundColor: Color = themeObject?.['colors']?.['editor.background'];
  // const lineNumbersTextColor: Color = themeObject?.['colors']?.['editorLineNumber.foreground'];

  // ActiveLine
  // const activeLineBackgroundColor: Color =
  //   themeObject?.['colors']?.['editor.lineHighlightBackground'];
  // const activeLineBorderColor: Color = themeObject?.['colors']?.['editor.lineHighlightBorder'];
  // const activeLineLineNumbersBackgroundColor: Color =
  //   themeObject?.['colors']?.['editor.background'];
  // const activeLineLineNumbersTextColor: Color =
  //   themeObject?.['colors']?.['editorLineNumber.activeForeground'];

  // FoldPlaceholder
  // const foldPlaceholderColor: Color =
  //   themeObject?.['colors']?.['editorGutter.foldingControlForeground'];

  // Selection
  // const selectionBackgroundColor: Color = themeObject?.['colors']?.['editor.selectionBackground'];
  // const selectionMatchBackgroundColor: Color =
  //   themeObject?.['colors']?.['editor.selectionHighlightBackground'];
  // const selectionMatchBorderColor: Color =
  //   themeObject?.['colors']?.['editor.selectionHighlightBorder'];

  // MatchingBracket
  // const matchingBracketBackgroundColor: Color =
  //   themeObject?.['colors']?.['editorBracketMatch.background'];
  // const matchingBracketOutlineColor: Color = themeObject?.['colors']?.['editorBracketMatch.border'];

  // SearchMatch
  // const searchMatchBackgroundColor: Color =
  //   themeObject?.['colors']?.['editor.findMatchHighlightBackground'];
  // const searchMatchSelectedBackgroundColor: Color =
  //   themeObject?.['colors']?.['editor.findMatchBackground'];

  // Autocomplete
  // const autocompleteBackgroundColor: Color =
  //   themeObject?.['colors']?.['editorSuggestWidget.background'];
  // const autocompleteBorderColor: Color = themeObject?.['colors']?.['editorSuggestWidget.border'];
  // const autocompleteItemTextColor: Color =
  //   themeObject?.['colors']?.['editorSuggestWidget.foreground'];
  // const autocompleteItemSelectedTextColor: Color =
  //   themeObject?.['colors']?.['editorSuggestWidget.selectedForeground'];
  // const autocompleteItemSelectedBackgroundColor: Color =
  //   themeObject?.['colors']?.['editorSuggestWidget.selectedBackground'];
  // const autocompleteItemHoveredBackgroundColor: Color =
  //   themeObject?.['colors']?.['list.hoverBackground'];

  // // Panels
  // const panelsTextColor: Color = themeObject?.['colors']?.['editorHoverWidget.foreground'];
  // const panelsBackgroundColor: Color = themeObject?.['colors']?.['editorHoverWidget.background'];

  // // Textfield
  // const textfieldBackgroundColor: Color = themeObject?.['colors']?.['input.background'];
  // const textfieldFocusedBorderColor: Color = themeObject?.['colors']?.['focusBorder'];

  // // Button
  // const buttonTextColor: Color = themeObject?.['colors']?.['button.foreground'];
  // const buttonBackgroundColor: Color = themeObject?.['colors']?.['button.background'];
  // const buttonHoveredBackgroundColor: Color = themeObject?.['colors']?.['button.hoverBackground'];
  // const buttonFocusOutlineColor: Color = themeObject?.['colors']?.['focusBorder'];

  // // ButtonClose
  // const buttonCloseTextColor = themeObject?.['colors']?.['editorHoverWidget.foreground'];

  return {
    isLoad: true,
    themeType,
    colors,
  };
};
