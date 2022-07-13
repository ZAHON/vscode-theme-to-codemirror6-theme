import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { editor } from 'monaco-editor';

export interface MonacoEditorState {
  theme: editor.IStandaloneThemeData;
}

const initialState: MonacoEditorState = {
  theme: { base: 'vs-dark', inherit: false, colors: {}, rules: [] },
};

export const monacoEditorSlice = createSlice({
  name: 'monacoEditor',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<editor.IStandaloneThemeData>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = monacoEditorSlice.actions;

export default monacoEditorSlice.reducer;
