import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface HighlightStyleState {
  definitionPropertyNameColor: string | null;
  moduleKeywordColor: string | null;
  keywordColor: string | null;
  typeNameColor: string | null;
  definitionTypeNameColor: string | null;
  operatorColor: string | null;
  boolColor: string | null;
  numberColor: string | null;
  stringColor: string | null;
  nullColor: string | null;
  selfColor: string | null;
  functionVariableNameColor: string | null;
  commentColor: string | null;
  regexpColor: string | null;
  tagNameColor: string | null;
  nameColor: string | null;
  definitionNameColor: string | null;
  metaColor: string | null;
  attributeNameColor: string | null;
  attributeValueColor: string | null;
  atomColor: string | null;
  colorColor: string | null;
  classNameColor: string | null;
  unitColor: string | null;
}

const initialState: HighlightStyleState = {
  definitionPropertyNameColor: '',
  moduleKeywordColor: '',
  keywordColor: '',
  typeNameColor: '',
  definitionTypeNameColor: '',
  operatorColor: '',
  boolColor: '',
  numberColor: '',
  stringColor: '',
  nullColor: '',
  selfColor: '',
  functionVariableNameColor: '',
  commentColor: '',
  regexpColor: '',
  tagNameColor: '',
  nameColor: '',
  definitionNameColor: '',
  metaColor: '',
  attributeNameColor: '',
  attributeValueColor: '',
  atomColor: '',
  colorColor: '',
  classNameColor: '',
  unitColor: '',
};

export const highlightStyleSlice = createSlice({
  name: 'highlightStyle',
  initialState,
  reducers: {
    setHighlightStyle(state, action: PayloadAction<HighlightStyleState>) {
      return action.payload;
    },
  },
});

export const { setHighlightStyle } = highlightStyleSlice.actions;

export default highlightStyleSlice.reducer;
