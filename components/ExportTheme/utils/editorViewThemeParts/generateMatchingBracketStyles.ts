export const generateMatchingBracketStyles = (colors: { background: string; outline: string }) => {
  const matchingBracketStyles = {
    '&.cm-focused .cm-matchingBracket': {
      backgroundColor: colors.background,
      outline: `1px solid ${colors.outline}`,
    },
  };

  return matchingBracketStyles;
};
