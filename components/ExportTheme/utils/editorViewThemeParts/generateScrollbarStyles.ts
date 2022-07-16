export const generateScrollbarStyles = (colors: {
  thumb: { background: string };
  track: { background: string };
}) => {
  const scrollbarStyles = {
    '.cm-scroller': {
      '-ms-overflow-style': 'auto',
      scrollbarColor: `${colors.thumb.background} ${colors.track.background}`,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: colors.thumb.background,
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: colors.track.background,
      },
      '&::-webkit-scrollbar-corner': {
        backgroundColor: colors.track.background,
      },
      '&::-webkit-scrollbar': {
        width: '8px',
        height: '8px',
      },
    },
  };

  return scrollbarStyles;
};
