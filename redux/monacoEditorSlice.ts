import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { editor } from 'monaco-editor';

export interface MonacoEditorState {
  theme: editor.IStandaloneThemeData;
  isMount: boolean;
}

const initialState: MonacoEditorState = {
  theme: { base: 'vs-dark', inherit: false, colors: {}, rules: [] },
  isMount: false,
};

export const monacoEditorSlice = createSlice({
  name: 'monacoEditor',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<editor.IStandaloneThemeData>) => {
      state.theme = action.payload;
    },

    setIsMount: (state, action: PayloadAction<boolean>) => {
      state.isMount = action.payload;
    },
  },
});

export const { setTheme, setIsMount } = monacoEditorSlice.actions;

export default monacoEditorSlice.reducer;
