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
    name: '[t.typeName]',
    style: tags.typeNameTag,
  });

  const typeOperatorTag = generateTag({
    name: '[t.typeOperator]',
    style: tags.typeOperatorTag,
  });

  const definitionTypeNameTag = generateTag({
    name: '[t.definition(t.typeName)]',
    style: tags.definitionTypeNameTag,
  });

  const operatorTag = generateTag({
    name: '[t.operator]',
    style: tags.operatorTag,
  });

  const specialStringTag = generateTag({
    name: '[t.special(t.string)]',
    style: tags.specialStringTag,
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
    name: '[t.string]',
    style: tags.stringTag,
  });

  const processingInstructionTag = generateTag({
    name: '[t.processingInstruction]',
    style: tags.processingInstructionTag,
  });

  const insertedTag = generateTag({
    name: '[t.inserted]',
    style: tags.insertedTag,
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
    name: '[t.function(t.variableName)]',
    style: tags.functionVariableNameTag,
  });

  const functionPropertyNameTag = generateTag({
    name: '[t.function(t.propertyName)]',
    style: tags.functionPropertyNameTag,
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
    name: '[t.className]',
    style: tags.classNameTag,
  });

  const namespaceTag = generateTag({
    name: '[t.namespace]',
    style: tags.namespaceTag,
  });

  const unitTag = generateTag({
    name: '[t.unit]',
    style: tags.unitTag,
  });

  const colorTag = generateTag({
    name: '[t.color]',
    style: tags.colorTag,
  });

  const constantNameTag = generateTag({
    name: '[t.constant(t.name)]',
    style: tags.constantNameTag,
  });

  const standardNameTag = generateTag({
    name: '[t.standard(t.name)]',
    style: tags.standardNameTag,
  });

  const headingTag = generateTag({
    name: '[t.heading]',
    style: tags.headingTag,
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
		${typeOperatorTag},
		${definitionTypeNameTag},
		${operatorTag},
		${specialStringTag},
		${boolTag},
		${numberTag},
		${stringTag},
		${processingInstructionTag},
		${insertedTag},
		${nullTag},
		${selfTag},
		${functionVariableNameTag},
		${functionPropertyNameTag},
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
		${namespaceTag},
		${unitTag},
		${colorTag},
		${constantNameTag},
		${standardNameTag},
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
