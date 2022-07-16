import type { HighlightStyleState, Tag } from '@/redux/highlightStyleSlice';
import { RGBToHex } from '@/utils/RGBToHex';

const getTagStyles = (spans: HTMLSpanElement[], text: string): Tag => {
  const token = spans.find((span) => span.hasAttribute('class') && span.textContent.includes(text));

  if (token === undefined) {
    return { color: '', fontStyle: '' };
  }

  const { color, fontStyle } = getComputedStyle(token);

  const test = RGBToHex(color);
  console.log(test);

  // console.log(color, test);

  return { color, fontStyle };
};

export const getHighlightStyle = (): HighlightStyleState => {
  const monacoTSX = document.querySelector<HTMLDivElement>('#monaco-editor-tsx')!;
  const spansTSX = [...monacoTSX.querySelectorAll('span')];

  const monacoHTML = document.querySelector<HTMLDivElement>('#monaco-editor-html')!;
  const spansHTML = [...monacoHTML.querySelectorAll('span')];

  const monacoCSS = document.querySelector<HTMLDivElement>('#monaco-editor-css')!;
  const spansCSS = [...monacoCSS.querySelectorAll('span')];

  const definitionPropertyNameTag = getTagStyles(spansTSX, 'heading');
  const moduleKeywordTag = getTagStyles(spansTSX, 'import');
  const keywordTag = getTagStyles(spansTSX, 'const');
  const typeNameTag = getTagStyles(spansTSX, 'HTMLProps');
  const definitionTypeNameTag = getTagStyles(spansTSX, 'Props');
  const operatorTag = getTagStyles(spansTSX, '=');
  const boolTag = getTagStyles(spansTSX, 'true');
  const numberTag = getTagStyles(spansTSX, '123');
  const stringTag = getTagStyles(spansTSX, "'string'");
  const nullTag = getTagStyles(spansTSX, 'null');
  const selfTag = getTagStyles(spansTSX, 'this');
  const functionVariableNameTag = getTagStyles(spansTSX, 'log');
  const commentTag = getTagStyles(spansTSX, '//Comment');
  const regexpTag = getTagStyles(spansTSX, ' /pani');
  const definitionNameTag = getTagStyles(spansTSX, 'React');
  const nameTag = getTagStyles(spansTSX, 'console');
  const punctuationTag = getTagStyles(spansTSX, ';');
  const parenTag = getTagStyles(spansTSX, ' () ');
  const squareBracketTag = getTagStyles(spansTSX, '[');
  const bracketTag = getTagStyles(spansTSX, '{');

  const tagNameTag = getTagStyles(spansHTML, 'head');
  const metaTag = getTagStyles(spansHTML, 'DOCTYPE');
  const attributeNameTag = getTagStyles(spansHTML, 'lang');
  const attributeValueTag = getTagStyles(spansHTML, '"en"');
  const angleBracketTag = getTagStyles(spansHTML, '/>');

  const atomTag = getTagStyles(spansCSS, 'border-box');
  const colorTag = getTagStyles(spansCSS, ':root');
  const classNameTag = getTagStyles(spansCSS, 'body');
  const unitTag = getTagStyles(spansCSS, 'px');

  return {
    isLoad: true,
    tags: {
      definitionPropertyNameTag,
      moduleKeywordTag,
      keywordTag,
      typeNameTag,
      definitionTypeNameTag,
      operatorTag,
      boolTag,
      numberTag,
      stringTag,
      nullTag,
      selfTag,
      functionVariableNameTag,
      commentTag,
      regexpTag,
      tagNameTag,
      definitionNameTag,
      nameTag,
      metaTag,
      attributeNameTag,
      attributeValueTag,
      atomTag,
      colorTag,
      classNameTag,
      unitTag,
      angleBracketTag,
      punctuationTag,
      parenTag,
      squareBracketTag,
      bracketTag,
    },
  };
};
