import type { Tags, Tag } from '@/redux/highlightStyleSlice';

const generateTag = (data: { name: string; style?: Tag; otherStyle?: string }) => {
  const createStyle = () => {
    if (data.style && data.otherStyle) {
      return `color: "${data.style.color}", ${
        data.style.fontStyle !== 'normal'
          ? `fontStyle: "${data.style.fontStyle}", data.otherStyle`
          : data.otherStyle
      }`;
    }

    if (data.style) {
      return `color: "${data.style.color}", ${
        data.style.fontStyle !== 'normal' ? `fontStyle: "${data.style.fontStyle}",` : ''
      }`;
    }

    if (data.otherStyle) {
      return data.otherStyle;
    }
  };

  const tag = `{
  	tag: ${data.name},
		${createStyle()}
  }`;

  return tag;
};

export const generateHighlightStyle = ({ themeName, tags }: { themeName: string; tags: Tags }) => {
  const emphasisTag = generateTag({
    name: '[t.emphasis]',
    otherStyle: `fontStyle: 'italic'`,
  });

  const strongTag = generateTag({
    name: '[t.strong]',
    otherStyle: `fontStyle: 'bold'`,
  });

  const definitionPropertyNameTag = generateTag({
    name: 't.definition(t.propertyName)',
    style: tags.definitionPropertyNameTag,
  });

  const moduleKeywordTag = generateTag({
    name: '[t.moduleKeyword]',
    style: tags.moduleKeywordTag,
  });

  const keywordTag = generateTag({
    name: '[t.keyword]',
    style: tags.keywordTag,
  });

  const typeNameTag = generateTag({
    name: '[t.typeName, t.typeOperator]',
    style: tags.typeNameTag,
  });

  const definitionTypeNameTag = generateTag({
    name: '[t.definition(t.typeName)]',
    style: tags.definitionTypeNameTag,
  });

  const operatorTag = generateTag({
    name: '[t.operator, t.special(t.string)]',
    style: tags.operatorTag,
  });

  const boolTag = generateTag({
    name: '[t.bool]',
    style: tags.boolTag,
  });

  const numberTag = generateTag({
    name: '[t.number]',
    style: tags.numberTag,
  });

  const stringTag = generateTag({
    name: '[t.string, t.processingInstruction, t.inserted]',
    style: tags.stringTag,
  });

  const nullTag = generateTag({
    name: '[t.null]',
    style: tags.nullTag,
  });

  const selfTag = generateTag({
    name: '[t.self]',
    style: tags.selfTag,
  });

  const functionVariableNameTag = generateTag({
    name: '[t.function(t.variableName), t.function(t.propertyName)]',
    style: tags.functionVariableNameTag,
  });

  const commentTag = generateTag({
    name: '[t.comment]',
    style: tags.commentTag,
  });

  const regexpTag = generateTag({
    name: '[t.regexp]',
    style: tags.regexpTag,
  });

  const tagNameTag = generateTag({
    name: '[t.tagName]',
    style: tags.tagNameTag,
  });

  const nameTag = generateTag({
    name: '[t.name]',
    style: tags.nameTag,
  });

  const definitionNameTag = generateTag({
    name: '[t.definition(t.name)]',
    style: tags.definitionNameTag,
  });

  const metaTag = generateTag({
    name: '[t.meta]',
    style: tags.metaTag,
  });

  const attributeNameTag = generateTag({
    name: '[t.attributeName]',
    style: tags.attributeNameTag,
  });

  const attributeValueTag = generateTag({
    name: '[t.attributeValue]',
    style: tags.attributeValueTag,
  });

  const atomTag = generateTag({
    name: '[t.atom]',
    style: tags.atomTag,
  });

  const classNameTag = generateTag({
    name: '[t.className, t.namespace]',
    style: tags.classNameTag,
  });

  const unitTag = generateTag({
    name: '[t.unit]',
    style: tags.unitTag,
  });

  const colorTag = generateTag({
    name: '[t.color, t.constant(t.name), t.standard(t.name)]',
    style: tags.colorTag,
  });

  const headingTag = generateTag({
    name: '[t.heading]',
    style: tags.stringTag,
    otherStyle: "fontWeight: '700'",
  });

  const punctuationTag = generateTag({
    name: '[t.punctuation]',
    style: tags.punctuationTag,
  });

  const parenTag = generateTag({
    name: '[t.paren]',
    style: tags.parenTag,
  });

  const squareBracketTag = generateTag({
    name: '[t.squareBracket]',
    style: tags.squareBracketTag,
  });

  const bracketTag = generateTag({
    name: '[t.bracket]',
    style: tags.bracketTag,
  });

  const angleBracketTag = generateTag({
    name: '[t.angleBracket]',
    style: tags.angleBracketTag,
  });

  const code = `
	export const ${themeName}HighlightStyle = HighlightStyle.define([
		${emphasisTag},
		${strongTag},
		${definitionPropertyNameTag},
		${moduleKeywordTag},
		${keywordTag},
		${typeNameTag},
		${definitionTypeNameTag},
		${operatorTag},
		${boolTag},
		${numberTag},
		${stringTag},
		${nullTag},
		${selfTag},
		${functionVariableNameTag},
		${commentTag},
		${regexpTag},
		${tagNameTag},
		${nameTag},
		${definitionNameTag},
		${metaTag},
		${attributeNameTag},
		${attributeValueTag},
		${atomTag},
		${classNameTag},
		${unitTag},
		${colorTag},
		${headingTag},
		${punctuationTag},
		${parenTag},
		${squareBracketTag},
		${bracketTag},
		${angleBracketTag}
	]);
	`;

  return code;
};
