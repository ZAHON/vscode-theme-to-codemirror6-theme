export const generateAutocompleteStyles = (colors: {
  background: string;
  border: string;
  item: {
    text: string;
    selected: { text: string; background: string };
    hovered: { background: string };
  };
}) => {
  const autocompleteStyles = {
    '.cm-tooltip': {
      backgroundColor: colors.background,
      border: `1px solid ${colors.border}`,
    },
    '.cm-tooltip .cm-tooltip-arrow:before': {
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
    },
    '.cm-tooltip .cm-tooltip-arrow:after': {
      borderTopColor: colors.background,
      borderBottomColor: colors.background,
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li': {
        color: colors.item.text,
      },
      '& > ul > li[aria-selected]': {
        color: colors.item.selected.text,
        backgroundColor: colors.item.selected.background,
      },
      '& > ul > li:hover:not([aria-selected])': {
        backgroundColor: colors.item.hovered.background,
      },
    },
  };

  return autocompleteStyles;
};
