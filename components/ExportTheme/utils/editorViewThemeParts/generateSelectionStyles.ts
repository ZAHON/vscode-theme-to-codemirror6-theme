export const generateSelectionStyles = (colors: {
  background: string;
  match: { background: string; outline: string };
}) => {
  const selectionStyles = {
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
      backgroundColor: colors.background,
    },
    '.cm-selectionMatch': {
      backgroundColor: colors.match.background,
      outline: colors.match.outline ? `1px solid ${colors.match.outline}` : 'none',
    },
  };

  return selectionStyles;
};
