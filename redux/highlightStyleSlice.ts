import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState/highlightStyle';

export type Tag = {
  color: string;
  fontStyle: string;
};

export type Tags = {
  definitionPropertyNameTag: Tag;
  moduleKeywordTag: Tag;
  keywordTag: Tag;
  typeNameTag: Tag;
  typeOperatorTag: Tag;
  definitionTypeNameTag: Tag;
  operatorTag: Tag;
  specialStringTag: Tag;
  boolTag: Tag;
  numberTag: Tag;
  stringTag: Tag;
  headingTag: Tag;
  processingInstructionTag: Tag;
  insertedTag: Tag;
  nullTag: Tag;
  selfTag: Tag;
  functionVariableNameTag: Tag;
  functionPropertyNameTag: Tag;
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
  constantNameTag: Tag;
  standardNameTag: Tag;
  classNameTag: Tag;
  namespaceTag: Tag;
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
  defaultTags: Tags;
}

export const highlightStyleSlice = createSlice({
  name: 'highlightStyle',
  initialState,
  reducers: {
    setHighlightStyle(
      state,
      action: PayloadAction<{ isLoad: boolean; tags: Tags; defaultTags: Tags }>
    ) {
      return {
        isLoad: action.payload.isLoad,
        tags: action.payload.tags,
        defaultTags: action.payload.defaultTags,
      };
    },
    setHighlightStyleTag(
      state,
      action: PayloadAction<{ key: keyof Tags; property: keyof Tag; value: string }>
    ) {
      state.tags[action.payload.key][action.payload.property] = action.payload.value;
    },
  },
});

export const { setHighlightStyle, setHighlightStyleTag } = highlightStyleSlice.actions;

export default highlightStyleSlice.reducer;
