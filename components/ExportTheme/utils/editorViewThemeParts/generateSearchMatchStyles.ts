export const generateSearchMatchStyles = (colors: {
  background: string;
  selected: { background: string };
}) => {
  const searchMatchStyles = {
    '.cm-searchMatch': {
      backgroundColor: colors.background,
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: colors.selected.background,
    },
  };

  return searchMatchStyles;
};
