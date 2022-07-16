export const generatePanelsStyles = (colors: {
  text: string;
  background: string;
  textField: {
    background: string;
    focused: {
      border: string;
    };
  };
  button: {
    text: string;
    background: string;
    hovered: {
      background: string;
    };
    focused: {
      outline: string;
    };
  };
  buttonClose: {
    text: string;
  };
}) => {
  const panelsStyles = {
    '.cm-panels': {
      color: colors.text,
      backgroundColor: colors.background,
    },
    '.cm-panels.cm-panels-top': {
      borderBottom: 'none',
    },
    '.cm-panels.cm-panels-bottom': {
      borderTop: 'none',
    },
    '.cm-textfield': {
      backgroundColor: colors.textField.background,
      border: `1px solid ${colors.textField.background}`,
    },
    '.cm-textfield:focus': {
      outline: 'none',
      borderColor: colors.textField.focused.border,
    },
    '.cm-button': {
      color: colors.button.text,
      backgroundColor: colors.button.background,
      backgroundImage: 'none',
      border: 'none',
      borderRadius: '0',
      cursor: 'pointer',
      transition: 'background-color 0.1s ease-in',
    },
    '.cm-button:focus': {
      outlineOffset: '1px',
      outline: `1px solid ${colors.button.focused.outline}`,
    },
    '.cm-button:hover': {
      backgroundColor: colors.button.hovered.background,
    },
    '.cm-button:active': {
      backgroundImage: 'none',
    },
    '[name="close"]': {
      cursor: 'pointer',
      color: colors.buttonClose.text,
    },
  };

  return panelsStyles;
};
