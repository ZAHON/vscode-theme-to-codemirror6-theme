export const generateBaseStyles = (colors: { text: string; background: string }) => {
  const baseStyles = {
    '&': {
      color: colors.text,
      backgroundColor: colors.background,
    },
  };

  return baseStyles;
};
