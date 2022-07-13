import type { HighlightStyleState } from '@/redux/highlightStyleSlice';

const getTokenStyles = (spans: HTMLSpanElement[], text: string): string | null => {
  const token = spans.find((span) => span.hasAttribute('class') && span.textContent === text);

  console.log(text, token);

  if (token === undefined) {
    return null;
  }

  const { color } = getComputedStyle(token);

  return color;
};

export const getHighlightStyle = (): HighlightStyleState => {
  const monacoTSX = document.querySelector<HTMLDivElement>('#monaco-editor-tsx')!;
  const spansTSX = [...monacoTSX.querySelectorAll('span')];

  const monacoHTML = document.querySelector<HTMLDivElement>('#monaco-editor-html')!;
  const spansHTML = [...monacoHTML.querySelectorAll('span')];

  const monacoCSS = document.querySelector<HTMLDivElement>('#monaco-editor-css')!;
  const spansCSS = [...monacoCSS.querySelectorAll('span')];

  const definitionPropertyNameColor = getTokenStyles(spansTSX, 'heading');
  const moduleKeywordColor = getTokenStyles(spansTSX, 'import');
  const keywordColor = getTokenStyles(spansTSX, 'const');
  const typeNameColor = getTokenStyles(spansTSX, 'HTMLProps');
  const definitionTypeNameColor = getTokenStyles(spansTSX, 'Props');
  const operatorColor = getTokenStyles(spansTSX, '=');
  const boolColor = getTokenStyles(spansTSX, 'true');
  const numberColor = getTokenStyles(spansTSX, '123');
  const stringColor = getTokenStyles(spansTSX, "'string'");
  const nullColor = getTokenStyles(spansTSX, 'null');
  const selfColor = getTokenStyles(spansTSX, 'this');
  const functionVariableNameColor = getTokenStyles(spansTSX, 'log');
  const commentColor = getTokenStyles(spansTSX, '//Comment');
  const regexpColor = getTokenStyles(spansTSX, ' /pani');
  const tagNameColor = getTokenStyles(spansTSX, 'div');
  const definitionNameColor = getTokenStyles(spansTSX, 'React');
  const nameColor = getTokenStyles(spansTSX, 'console');

  const metaColor = getTokenStyles(spansHTML, 'DOCTYPE');
  const attributeNameColor = getTokenStyles(spansHTML, 'charset');
  const attributeValueColor = getTokenStyles(spansHTML, '"en"');

  const atomColor = getTokenStyles(spansCSS, 'border-box');
  const colorColor = getTokenStyles(spansCSS, ':root');
  const classNameColor = getTokenStyles(spansCSS, 'body');
  const unitColor = getTokenStyles(spansCSS, 'px');

  return {
    definitionPropertyNameColor,
    moduleKeywordColor,
    keywordColor,
    typeNameColor,
    definitionTypeNameColor,
    operatorColor,
    boolColor,
    numberColor,
    stringColor,
    nullColor,
    selfColor,
    functionVariableNameColor,
    commentColor,
    regexpColor,
    tagNameColor,
    definitionNameColor,
    nameColor,
    metaColor,
    attributeNameColor,
    attributeValueColor,
    atomColor,
    colorColor,
    classNameColor,
    unitColor,
  };
};
