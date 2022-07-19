import type { HighlightStyleState } from '../highlightStyleSlice';

const tags = {
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
  typeOperatorTag: {
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
  specialStringTag: {
    color: '#ce9178',
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
  headingTag: {
    color: '#ce9178',
    fontStyle: 'normal',
  },
  processingInstructionTag: {
    color: '#ce9178',
    fontStyle: 'normal',
  },
  insertedTag: {
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
  functionPropertyNameTag: {
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
  constantNameTag: {
    color: '#d7ba7d',
    fontStyle: 'normal',
  },
  standardNameTag: {
    color: '#d7ba7d',
    fontStyle: 'normal',
  },
  classNameTag: {
    color: '#d7ba7d',
    fontStyle: 'normal',
  },
  namespaceTag: {
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
};

export const initialState: HighlightStyleState = {
  isLoad: false,
  tags,
  defaultTags: tags,
};
