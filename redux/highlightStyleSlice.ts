import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Tag = {
  color: string;
  fontStyle: string;
};

export type Tags = {
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
};

export interface HighlightStyleState {
  isLoad: boolean;
  tags: Tags;
}

const initialState: HighlightStyleState = {
  isLoad: false,

  tags: {
    definitionPropertyNameTag: {
      color: '#9cdcfe',
      fontStyle: 'normal',
    },
    moduleKeywordTag: {
      color: '#c586c0',
      fontStyle: 'normal',
    },
    keywordTag: {
      color: '#569cd6',
      fontStyle: 'normal',
    },
    typeNameTag: {
      color: '#4ec9b0',
      fontStyle: 'normal',
    },
    definitionTypeNameTag: {
      color: '#4ec9b0',
      fontStyle: 'normal',
    },
    operatorTag: {
      color: '#569cd6',
      fontStyle: 'normal',
    },
    boolTag: {
      color: '#569cd6',
      fontStyle: 'normal',
    },
    numberTag: {
      color: '#b5cea8',
      fontStyle: 'normal',
    },
    stringTag: {
      color: '#ce9178',
      fontStyle: 'normal',
    },
    nullTag: {
      color: '#569cd6',
      fontStyle: 'normal',
    },
    selfTag: {
      color: '#569cd6',
      fontStyle: 'normal',
    },
    functionVariableNameTag: {
      color: '#dcdca8',
      fontStyle: 'normal',
    },
    commentTag: {
      color: '#6a9955',
      fontStyle: 'normal',
    },
    regexpTag: {
      color: '#d16969',
      fontStyle: 'normal',
    },
    tagNameTag: {
      color: '#569cd6',
      fontStyle: 'normal',
    },
    nameTag: {
      color: '#9cdcfe',
      fontStyle: 'normal',
    },
    definitionNameTag: {
      color: '#9cdcfe',
      fontStyle: 'normal',
    },
    metaTag: {
      color: '#569cd6',
      fontStyle: 'normal',
    },
    attributeNameTag: {
      color: '#9cdcfe',
      fontStyle: 'normal',
    },
    attributeValueTag: {
      color: '#ce9178',
      fontStyle: 'normal',
    },
    atomTag: {
      color: '#ce9178',
      fontStyle: 'normal',
    },
    colorTag: {
      color: '#d7ba7d',
      fontStyle: 'normal',
    },
    classNameTag: {
      color: '#d7ba7d',
      fontStyle: 'normal',
    },
    unitTag: {
      color: '#b4cda7',
      fontStyle: 'normal',
    },
    angleBracketTag: {
      color: '#d4d4d4',
      fontStyle: 'normal',
    },
    punctuationTag: {
      color: '#d4d4d4',
      fontStyle: 'normal',
    },
    parenTag: {
      color: '#d4d4d4',
      fontStyle: 'normal',
    },
    squareBracketTag: {
      color: '#d4d4d4',
      fontStyle: 'normal',
    },
    bracketTag: {
      color: '#d4d4d4',
      fontStyle: 'normal',
    },
  },
};

export const highlightStyleSlice = createSlice({
  name: 'highlightStyle',
  initialState,
  reducers: {
    setHighlightStyle(state, action: PayloadAction<{ isLoad: boolean; tags: Tags }>) {
      return {
        isLoad: action.payload.isLoad,
        tags: action.payload.tags,
      };
    },
  },
});

export const { setHighlightStyle } = highlightStyleSlice.actions;

export default highlightStyleSlice.reducer;
