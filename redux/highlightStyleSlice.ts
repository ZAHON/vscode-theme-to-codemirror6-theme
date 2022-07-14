import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Tag = {
  color: string;
  fontStyle: string;
};

export interface HighlightStyleState {
  definitionPropertyNameTag: Tag;
  moduleKeywordTag: Tag;
  keywordTag: Tag;
  typeNameTag: Tag;
  definitionTypeNameTag: Tag;
  operatorTag: Tag;
  boolTag: Tag;
  numberTag: Tag;
  stringTag: Tag;
  nullTag: Tag;
  selfTag: Tag;
  functionVariableNameTag: Tag;
  commentTag: Tag;
  regexpTag: Tag;
  tagNameTag: Tag;
  nameTag: Tag;
  definitionNameTag: Tag;
  metaTag: Tag;
  attributeNameTag: Tag;
  attributeValueTag: Tag;
  atomTag: Tag;
  colorTag: Tag;
  classNameTag: Tag;
  unitTag: Tag;
  angleBracketTag: Tag;
  punctuationTag: Tag;
  parenTag: Tag;
  squareBracketTag: Tag;
  bracketTag: Tag;
}

const initialState: HighlightStyleState = {
  definitionPropertyNameTag: {
    color: '',
    fontStyle: 'normal',
  },
  moduleKeywordTag: {
    color: '',
    fontStyle: 'normal',
  },
  keywordTag: {
    color: '',
    fontStyle: 'normal',
  },
  typeNameTag: {
    color: '',
    fontStyle: 'normal',
  },
  definitionTypeNameTag: {
    color: '',
    fontStyle: 'normal',
  },
  operatorTag: {
    color: '',
    fontStyle: 'normal',
  },
  boolTag: {
    color: '',
    fontStyle: 'normal',
  },
  numberTag: {
    color: '',
    fontStyle: 'normal',
  },
  stringTag: {
    color: '',
    fontStyle: 'normal',
  },
  nullTag: {
    color: '',
    fontStyle: 'normal',
  },
  selfTag: {
    color: '',
    fontStyle: 'normal',
  },
  functionVariableNameTag: {
    color: '',
    fontStyle: 'normal',
  },
  commentTag: {
    color: '',
    fontStyle: 'normal',
  },
  regexpTag: {
    color: '',
    fontStyle: 'normal',
  },
  tagNameTag: {
    color: '',
    fontStyle: 'normal',
  },
  nameTag: {
    color: '',
    fontStyle: 'normal',
  },
  definitionNameTag: {
    color: '',
    fontStyle: 'normal',
  },
  metaTag: {
    color: '',
    fontStyle: 'normal',
  },
  attributeNameTag: {
    color: '',
    fontStyle: 'normal',
  },
  attributeValueTag: {
    color: '',
    fontStyle: 'normal',
  },
  atomTag: {
    color: '',
    fontStyle: 'normal',
  },
  colorTag: {
    color: '',
    fontStyle: 'normal',
  },
  classNameTag: {
    color: '',
    fontStyle: 'normal',
  },
  unitTag: {
    color: '',
    fontStyle: 'normal',
  },
  angleBracketTag: {
    color: '',
    fontStyle: 'normal',
  },
  punctuationTag: {
    color: '',
    fontStyle: 'normal',
  },
  parenTag: {
    color: '',
    fontStyle: 'normal',
  },
  squareBracketTag: {
    color: '',
    fontStyle: 'normal',
  },
  bracketTag: {
    color: '',
    fontStyle: 'normal',
  },
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
