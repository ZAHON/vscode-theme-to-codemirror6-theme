export const generateLineNumbersStyles = (colors: { background: string; text: string }) => {
  const lineNumbersStyles = {
    '.cm-gutters': {
      backgroundColor: colors.background,
      color: colors.text,
      borderRight: 'none',
    },
    '.cm-gutterElement': {
      userSelect: 'none',
    },
  };

  return lineNumbersStyles;
};
