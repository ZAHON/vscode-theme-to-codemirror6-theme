export const generateFoldPlaceholderStyles = (colors: { text: string }) => {
  const foldPlaceholderStyles = {
    '.cm-foldPlaceholder': {
      backgroundColor: 'transparent',
      border: 'none',
      color: colors.text,
    },
  };

  return foldPlaceholderStyles;
};
