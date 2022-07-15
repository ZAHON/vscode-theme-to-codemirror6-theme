export const generateCursorStyles = (colors: { border: string }) => {
  const cursorStyles = {
    '.cm-content': {
      caretColor: colors.border,
    },
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: colors.border,
      borderLeftWidth: '2px',
    },
  };

  return cursorStyles;
};
