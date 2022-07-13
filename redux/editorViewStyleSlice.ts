import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface EditorViewStyleState {
  themeType: string | null;

  textColor: string | null;
  backgroundColor: string | null;

  cursorColor: string | null;

  lineNumbersBackgroundColor: string | null;
  lineNumbersTextColor: string | null;

  activeLineBackgroundColor: string | null;
  activeLineLineNumbersBackgroundColor: string | null;
  activeLineLineNumbersTextColor: string | null;

  foldPlaceholderColor: string | null;

  selectionBackgroundColor: string | null;
  selectionMatchBackgroundColor: string | null;
  selectionMatchBorderColor: string | null;

  matchingBracketBackgroundColor: string | null;
  matchingBracketOutlineColor: string | null;
  searchMatchBackgroundColor: string | null;
  searchMatchSelectedBackgroundColor: string | null;
  autocompleteBackgroundColor: string | null;
  autocompleteBorderColor: string | null;
  autocompleteItemTextColor: string | null;
  autocompleteItemSelectedTextColor: string | null;
  autocompleteItemSelectedBackgroundColor: string | null;
  autocompleteItemHoveredBackgroundColor: string | null;
  panelsTextColor: string | null;
  panelsBackgroundColor: string | null;
  textfieldBackgroundColor: string | null;
  textfieldFocusedBorderColor: string | null;
  buttonTextColor: string | null;
  buttonBackgroundColor: string | null;
  buttonHoveredBackgroundColor: string | null;
  buttonFocusOutlineColor: string | null;
  buttonCloseTextColor: string | null;
}

const initialState: EditorViewStyleState = {
  themeType: '',

  textColor: '',
  backgroundColor: '',

  cursorColor: '',

  lineNumbersBackgroundColor: '',
  lineNumbersTextColor: '',

  activeLineBackgroundColor: '',
  activeLineLineNumbersBackgroundColor: '',
  activeLineLineNumbersTextColor: '',

  foldPlaceholderColor: '',

  selectionBackgroundColor: '',
  selectionMatchBackgroundColor: '',
  selectionMatchBorderColor: '',

  matchingBracketBackgroundColor: '',
  matchingBracketOutlineColor: '',
  searchMatchBackgroundColor: '',
  searchMatchSelectedBackgroundColor: '',
  autocompleteBackgroundColor: '',
  autocompleteBorderColor: '',
  autocompleteItemTextColor: '',
  autocompleteItemSelectedTextColor: '',
  autocompleteItemSelectedBackgroundColor: '',
  autocompleteItemHoveredBackgroundColor: '',
  panelsTextColor: '',
  panelsBackgroundColor: '',
  textfieldBackgroundColor: '',
  textfieldFocusedBorderColor: '',
  buttonTextColor: '',
  buttonBackgroundColor: '',
  buttonHoveredBackgroundColor: '',
  buttonFocusOutlineColor: '',
  buttonCloseTextColor: '',
};

export const editorViewStyleSlice = createSlice({
  name: 'editorViewStyle',
  initialState,
  reducers: {
    setOption(state, action: PayloadAction<{ key: keyof EditorViewStyleState; value: string | null }>) {
      state[action.payload.key] = action.payload.value;
    },

    setEditorViewStyle(state, action: PayloadAction<EditorViewStyleState>) {
      return action.payload;
    },
  },
});

export const { setOption, setEditorViewStyle } = editorViewStyleSlice.actions;

export default editorViewStyleSlice.reducer;
