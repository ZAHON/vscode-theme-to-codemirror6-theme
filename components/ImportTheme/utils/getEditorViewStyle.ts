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

  return {
    isLoad: true,
    themeType,
    colors,
  };
};
