import type { ReactNode, CSSProperties } from 'react';
import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

type CodeMirrorThemeWrapperProps = {
  children: ReactNode;
};

interface CustomCSS extends CSSProperties {
  '--base-text': string;
  '--base-background': string;

  '--scrollbar-thumb-background': string;
  '--scrollbar-track-background': string;

  '--cursor-border': string;

  '--gutters-text': string;
  '--gutters-background': string;

  '--active-line-background': string;
  '--active-line-border': string;
  '--active-line-gutter-background': string;
  '--active-line-gutter-text': string;

  '--fold-placeholder-text': string;

  '--selection-background': string;
  '--selection-match-outline': string;
  '--selection-match-background': string;

  '--matching-bracket-outline': string;
  '--matching-bracket-background': string;

  '--search-match-background': string;
  '--search-match-selected-background': string;

  '--tooltip-background': string;
  '--tooltip-border': string;
  '--tooltip-item-text': string;
  '--tooltip-item-selected-text': string;
  '--tooltip-item-selected-background': string;
  '--tooltip-item-hovered-background': string;

  '--panels-text': string;
  '--panels-background': string;
  '--panels-text-field-background': string;
  '--panels-text-field-focused-border': string;
  '--panels-button-text': string;
  '--panels-button-background': string;
  '--panels-button-focused-outline': string;
  '--panels-button-hovered-background': string;
  '--panels-button-close-text': string;

  '--definition-property-name-color': string;
  '--definition-property-name-font-style': string;

  '--module-keyword-color': string;
  '--module-keyword-font-style': string;

  '--keyword-color': string;
  '--keyword-font-style': string;

  '--type-name-color': string;
  '--type-name-font-style': string;

  '--type-operator-color': string;
  '--type-operator-font-style': string;

  '--definition-type-name-color': string;
  '--definition-type-name-font-style': string;

  '--operator-color': string;
  '--operator-font-style': string;

  '--special-string-color': string;
  '--special-string-font-style': string;

  '--bool-color': string;
  '--bool-font-style': string;

  '--number-color': string;
  '--number-font-style': string;

  '--string-color': string;
  '--string-font-style': string;

  '--processing-instruction-color': string;
  '--processing-instruction-font-style': string;

  '--inserted-color': string;
  '--inserted-font-style': string;

  '--null-color': string;
  '--null-font-style': string;

  '--self-color': string;
  '--self-font-style': string;

  '--function-variable-name-color': string;
  '--function-variable-name-font-style': string;

  '--function-property-name-color': string;
  '--function-property-name-font-style': string;

  '--comment-color': string;
  '--comment-font-style': string;

  '--regexp-color': string;
  '--regexp-font-style': string;

  '--tag-name-color': string;
  '--tag-name-font-style': string;

  '--name-color': string;
  '--name-font-style': string;

  '--definition-name-color': string;
  '--definition-name-font-style': string;

  '--meta-color': string;
  '--meta-font-style': string;

  '--attribute-name-color': string;
  '--attribute-name-font-style': string;

  '--attribute-value-color': string;
  '--attribute-value-font-style': string;

  '--atom-color': string;
  '--atom-font-style': string;

  '--class-name-color': string;
  '--class-name-font-style': string;

  '--namespace-color': string;
  '--namespace-font-style': string;

  '--unit-color': string;
  '--unit-font-style': string;

  '--color-color': string;
  '--color-font-style': string;

  '--constant-name-color': string;
  '--constant-name-font-style': string;

  '--standard-name-color': string;
  '--standard-name-font-style': string;

  '--heading-color': string;
  '--heading-font-style': string;

  '--punctuation-color': string;
  '--punctuation-font-style': string;

  '--paren-color': string;
  '--paren-font-style': string;

  '--square-bracket-color': string;
  '--square-bracket-font-style': string;

  '--bracket-color': string;
  '--bracket-font-style': string;

  '--angle-bracket-color': string;
  '--angle-bracket-font-style': string;
}

export const CodeMirrorThemeWrapper = ({ children }: CodeMirrorThemeWrapperProps) => {
  const tags = useSelector((state: RootState) => state.highlightStyle.tags);
  const colors = useSelector((state: RootState) => state.editorViewStyle.colors);

  const style: CustomCSS = {
    '--base-text': colors.base.text,
    '--base-background': colors.base.background,

    '--scrollbar-thumb-background': colors.scrollbar.thumb.background,
    '--scrollbar-track-background': colors.scrollbar.track.background,

    '--cursor-border': colors.cursor.border,

    '--gutters-text': colors.lineNumbers.text,
    '--gutters-background': colors.lineNumbers.background,

    '--active-line-background': colors.activeLine.background
      ? colors.activeLine.background
      : 'transparent',
    '--active-line-border':
      !colors.activeLine.background && colors.activeLine.background !== colors.activeLine.border
        ? `0px -2px 0px 0px ${colors.activeLine.border}, 0px 2px 0px 0px ${colors.activeLine.border}`
        : `none`,
    '--active-line-gutter-text': colors.activeLine.lineNumbers.text,
    '--active-line-gutter-background': colors.activeLine.lineNumbers.background,

    '--fold-placeholder-text': colors.foldPlaceholder.text,

    '--selection-background': colors.selection.background,
    '--selection-match-outline': colors.selection.match.outline,
    '--selection-match-background': colors.selection.match.background,

    '--matching-bracket-outline': colors.matchingBracket.outline,
    '--matching-bracket-background': colors.matchingBracket.background,

    '--search-match-background': colors.searchMatch.background,
    '--search-match-selected-background': colors.searchMatch.selected.background,

    '--tooltip-background': colors.autocomplete.background,
    '--tooltip-border': colors.autocomplete.border,
    '--tooltip-item-text': colors.autocomplete.item.text,
    '--tooltip-item-selected-text': colors.autocomplete.item.selected.text,
    '--tooltip-item-selected-background': colors.autocomplete.item.selected.background,
    '--tooltip-item-hovered-background': colors.autocomplete.item.hovered.background,

    '--panels-text': colors.panels.text,
    '--panels-background': colors.panels.background,
    '--panels-text-field-background': colors.panels.textField.background,
    '--panels-text-field-focused-border': colors.panels.textField.background,
    '--panels-button-text': colors.panels.button.text,
    '--panels-button-background': colors.panels.button.background,
    '--panels-button-focused-outline': colors.panels.button.focused.outline,
    '--panels-button-hovered-background': colors.panels.button.hovered.background,
    '--panels-button-close-text': colors.panels.buttonClose.text,

    '--definition-property-name-color': tags.definitionPropertyNameTag.color,
    '--definition-property-name-font-style': tags.definitionPropertyNameTag.fontStyle,

    '--module-keyword-color': tags.moduleKeywordTag.color,
    '--module-keyword-font-style': tags.moduleKeywordTag.fontStyle,

    '--keyword-color': tags.keywordTag.color,
    '--keyword-font-style': tags.keywordTag.fontStyle,

    '--type-name-color': tags.typeNameTag.color,
    '--type-name-font-style': tags.typeNameTag.fontStyle,

    '--type-operator-color': tags.typeOperatorTag.color,
    '--type-operator-font-style': tags.typeOperatorTag.fontStyle,

    '--definition-type-name-color': tags.definitionNameTag.color,
    '--definition-type-name-font-style': tags.definitionNameTag.fontStyle,

    '--operator-color': tags.operatorTag.color,
    '--operator-font-style': tags.operatorTag.fontStyle,

    '--special-string-color': tags.specialStringTag.color,
    '--special-string-font-style': tags.specialStringTag.fontStyle,

    '--bool-color': tags.boolTag.color,
    '--bool-font-style': tags.boolTag.fontStyle,

    '--number-color': tags.numberTag.color,
    '--number-font-style': tags.numberTag.fontStyle,

    '--string-color': tags.stringTag.color,
    '--string-font-style': tags.stringTag.fontStyle,

    '--processing-instruction-color': tags.processingInstructionTag.color,
    '--processing-instruction-font-style': tags.processingInstructionTag.fontStyle,

    '--inserted-color': tags.insertedTag.color,
    '--inserted-font-style': tags.insertedTag.fontStyle,

    '--null-color': tags.nullTag.color,
    '--null-font-style': tags.nullTag.fontStyle,

    '--self-color': tags.selfTag.color,
    '--self-font-style': tags.selfTag.fontStyle,

    '--function-variable-name-color': tags.functionVariableNameTag.color,
    '--function-variable-name-font-style': tags.functionVariableNameTag.fontStyle,

    '--function-property-name-color': tags.functionPropertyNameTag.color,
    '--function-property-name-font-style': tags.functionPropertyNameTag.fontStyle,

    '--comment-color': tags.commentTag.color,
    '--comment-font-style': tags.commentTag.fontStyle,

    '--regexp-color': tags.regexpTag.color,
    '--regexp-font-style': tags.regexpTag.fontStyle,

    '--tag-name-color': tags.tagNameTag.color,
    '--tag-name-font-style': tags.tagNameTag.fontStyle,

    '--name-color': tags.nameTag.color,
    '--name-font-style': tags.nameTag.fontStyle,

    '--definition-name-color': tags.definitionNameTag.color,
    '--definition-name-font-style': tags.definitionNameTag.fontStyle,

    '--meta-color': tags.metaTag.color,
    '--meta-font-style': tags.metaTag.fontStyle,

    '--attribute-name-color': tags.attributeNameTag.color,
    '--attribute-name-font-style': tags.attributeNameTag.fontStyle,

    '--attribute-value-color': tags.attributeValueTag.color,
    '--attribute-value-font-style': tags.attributeValueTag.fontStyle,

    '--atom-color': tags.atomTag.color,
    '--atom-font-style': tags.atomTag.fontStyle,

    '--class-name-color': tags.classNameTag.color,
    '--class-name-font-style': tags.classNameTag.fontStyle,

    '--namespace-color': tags.namespaceTag.color,
    '--namespace-font-style': tags.namespaceTag.fontStyle,

    '--unit-color': tags.unitTag.color,
    '--unit-font-style': tags.unitTag.fontStyle,

    '--color-color': tags.colorTag.color,
    '--color-font-style': tags.colorTag.fontStyle,

    '--constant-name-color': tags.constantNameTag.color,
    '--constant-name-font-style': tags.constantNameTag.fontStyle,

    '--standard-name-color': tags.standardNameTag.color,
    '--standard-name-font-style': tags.standardNameTag.fontStyle,

    '--heading-color': tags.headingTag.color,
    '--heading-font-style': tags.headingTag.fontStyle,

    '--punctuation-color': tags.punctuationTag.color,
    '--punctuation-font-style': tags.punctuationTag.fontStyle,

    '--paren-color': tags.parenTag.color,
    '--paren-font-style': tags.parenTag.fontStyle,

    '--square-bracket-color': tags.squareBracketTag.color,
    '--square-bracket-font-style': tags.squareBracketTag.fontStyle,

    '--bracket-color': tags.bracketTag.color,
    '--bracket-font-style': tags.bracketTag.fontStyle,

    '--angle-bracket-color': tags.angleBracketTag.color,
    '--angle-bracket-font-style': tags.angleBracketTag.fontStyle,
  };

  return <div style={style}>{children}</div>;
};
