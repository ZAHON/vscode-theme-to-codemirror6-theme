export const generateActiveLineStyles = (colors: {
  background: string;
  border: string;
  lineNumbers: { background: string; text: string };
}) => {
  const activeLineStyles = {
    '.cm-activeLine': {
      backgroundColor: colors.background ? colors.background : 'transparent',
      boxShadow:
        !colors.background && colors.background !== colors.border
          ? `0px -2px 0px 0px ${colors.border}, 0px 2px 0px 0px ${colors.border}`
          : `none`,
    },
    '.cm-activeLineGutter': {
      backgroundColor: colors.lineNumbers.background,
      color: colors.lineNumbers.text,
    },
  };

  return activeLineStyles;
};
