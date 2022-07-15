import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Colors = {
  base: {
    text: string;
    background: string;
  };
  scrollbar: {
    thumb: {
      background: string;
    };
    track: {
      background: string;
    };
  };
  cursor: {
    border: string;
  };
  lineNumbers: {
    text: string;
    background: string;
  };
  activeLine: {
    background: string;
    border: string;
    lineNumbers: {
      text: string;
      background: string;
    };
  };
  foldPlaceholder: {
    text: string;
  };
  selection: {
    background: string;
    match: {
      background: string;
      outline: string;
    };
  };
  matchingBracket: {
    background: string;
    outline: string;
  };
  searchMatch: {
    background: string;
    selected: {
      background: string;
    };
  };
  autocomplete: {
    background: string;
    border: string;
    item: {
      text: string;
      selected: {
        text: string;
        background: string;
      };
      hovered: {
        background: string;
      };
    };
  };
  panels: {
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
  };
};

export interface EditorViewStyleState {
  isLoad: boolean;
  themeType: string;
  colors: Colors;
}

const initialState: EditorViewStyleState = {
  isLoad: false,
  themeType: '',
  colors: {
    base: {
      text: '',
      background: '',
    },
    scrollbar: {
      thumb: {
        background: '',
      },
      track: {
        background: '',
      },
    },
    cursor: {
      border: '',
    },
    lineNumbers: {
      text: '',
      background: '',
    },
    activeLine: {
      background: '',
      border: '',
      lineNumbers: {
        text: '',
        background: '',
      },
    },
    foldPlaceholder: {
      text: '',
    },
    selection: {
      background: '',
      match: {
        background: '',
        outline: '',
      },
    },
    matchingBracket: {
      background: '',
      outline: '',
    },
    searchMatch: {
      background: '',
      selected: {
        background: '',
      },
    },
    autocomplete: {
      background: '',
      border: '',
      item: {
        text: '',
        selected: {
          text: '',
          background: '',
        },
        hovered: {
          background: '',
        },
      },
    },
    panels: {
      text: '',
      background: '',
      textField: {
        background: '',
        focused: {
          border: '',
        },
      },
      button: {
        text: '',
        background: '',
        hovered: {
          background: '',
        },
        focused: {
          outline: '',
        },
      },
      buttonClose: {
        text: '',
      },
    },
  },
};

export const editorViewStyleSlice = createSlice({
  name: 'editorViewStyle',
  initialState,
  reducers: {
    setEditorViewStyle(state, action: PayloadAction<EditorViewStyleState>) {
      return action.payload;
    },
  },
});

export const { setEditorViewStyle } = editorViewStyleSlice.actions;

export default editorViewStyleSlice.reducer;
