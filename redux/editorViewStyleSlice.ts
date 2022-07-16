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
      text: '#d4d4d4',
      background: '#1e1e1e',
    },
    scrollbar: {
      thumb: {
        background: '#79797966',
      },
      track: {
        background: '#1e1e1e',
      },
    },
    cursor: {
      border: '#aeafad',
    },
    lineNumbers: {
      text: '#858585',
      background: '#1e1e1e',
    },
    activeLine: {
      background: '',
      border: '#282828',
      lineNumbers: {
        text: '#c6c6c6',
        background: '#1e1e1e',
      },
    },
    foldPlaceholder: {
      text: '#c5c5c5',
    },
    selection: {
      background: '#264f78',
      match: {
        background: '#add6ff26',
        outline: 'none',
      },
    },
    matchingBracket: {
      background: '#0064001a',
      outline: '#888888',
    },
    searchMatch: {
      background: '#ea5c0055',
      selected: {
        background: '#515c6a',
      },
    },
    autocomplete: {
      background: '#252526',
      border: '#454545',
      item: {
        text: '#d4d4d4',
        selected: {
          text: '#ffffff',
          background: '#094771',
        },
        hovered: {
          background: '#2a2d2e',
        },
      },
    },
    panels: {
      text: '#cccccc',
      background: '#252526',
      textField: {
        background: '#3c3c3c',
        focused: {
          border: '#007fd4',
        },
      },
      button: {
        text: '#ffffff',
        background: '#0e639c',
        hovered: {
          background: '#1177bb',
        },
        focused: {
          outline: '#007fd4',
        },
      },
      buttonClose: {
        text: '#cccccc',
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
