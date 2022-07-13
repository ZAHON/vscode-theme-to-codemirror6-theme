import { configureStore } from '@reduxjs/toolkit';
import monacoEditorReducer from './monacoEditorSlice';
import editorViewStyleReducer from './editorViewStyleSlice';
import highlightStyleReducer from './highlightStyleSlice';

export const store = configureStore({
  reducer: {
    monacoEditor: monacoEditorReducer,
    editorViewStyle: editorViewStyleReducer,
    highlightStyle: highlightStyleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
