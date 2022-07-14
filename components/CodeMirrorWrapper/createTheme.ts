import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { Extension } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { tags as t } from '@lezer/highlight';

import type { EditorViewStyleState } from '@/redux/editorViewStyleSlice';
import type { HighlightStyleState } from '@/redux/highlightStyleSlice';

export const createTheme = (editorViewStyle: EditorViewStyleState, highlightStyle: HighlightStyleState): Extension => {
  const theme = EditorView.theme(
    {
      // Base
      '&': {
        color: editorViewStyle.textColor,
        backgroundColor: editorViewStyle.backgroundColor,
        scrollbarColor: `${editorViewStyle.scrollbarThumbColor} ${editorViewStyle.backgroundColor}`,
      },

      // Cursor
      '.cm-content': {
        caretColor: editorViewStyle.cursorColor,
      },
      '.cm-cursor, .cm-dropCursor': {
        borderLeftColor: editorViewStyle.cursorColor,
        borderLeftWidth: '2px',
      },

      // LineNumbers
      '.cm-gutters': {
        backgroundColor: editorViewStyle.lineNumbersBackgroundColor,
        color: editorViewStyle.lineNumbersTextColor,
        borderRight: 'none',
      },

      // ActiveLine
      '.cm-activeLine': {
        backgroundColor: editorViewStyle.activeLineBackgroundColor
          ? editorViewStyle.activeLineBackgroundColor
          : 'transparent',
        boxShadow: editorViewStyle.activeLineBackgroundColor
          ? 'none'
          : `0px -2px 0px 0px ${editorViewStyle.activeLineBorderColor}, 0px 2px 0px 0px ${editorViewStyle.activeLineBorderColor}`,
      },
      '.cm-activeLineGutter': {
        backgroundColor: editorViewStyle.activeLineLineNumbersBackgroundColor,
        color: editorViewStyle.activeLineLineNumbersTextColor,
      },

      // FoldPlaceholder
      '.cm-foldPlaceholder': {
        backgroundColor: 'transparent',
        border: 'none',
        color: editorViewStyle.foldPlaceholderColor,
      },

      // Selection
      '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
        backgroundColor: editorViewStyle.selectionBackgroundColor,
      },
      '.cm-selectionMatch': {
        backgroundColor: editorViewStyle.selectionMatchBackgroundColor,
        outline: `1px solid ${editorViewStyle.selectionMatchBorderColor}`,
      },

      // MatchingBracket
      '&.cm-focused .cm-matchingBracket': {
        backgroundColor: editorViewStyle.matchingBracketBackgroundColor,
        outline: `1px solid ${editorViewStyle.matchingBracketOutlineColor}`,
      },

      // SearchMatch
      '.cm-searchMatch': {
        backgroundColor: editorViewStyle.searchMatchBackgroundColor,
      },
      '.cm-searchMatch.cm-searchMatch-selected': {
        backgroundColor: editorViewStyle.searchMatchSelectedBackgroundColor,
      },

      // Autocomplete
      '.cm-tooltip': {
        backgroundColor: editorViewStyle.autocompleteBackgroundColor,
        border: `1px solid ${editorViewStyle.autocompleteBorderColor}`,
      },
      '.cm-tooltip .cm-tooltip-arrow:before': {
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
      },
      '.cm-tooltip .cm-tooltip-arrow:after': {
        borderTopColor: editorViewStyle.autocompleteBackgroundColor,
        borderBottomColor: editorViewStyle.autocompleteBackgroundColor,
      },
      '.cm-tooltip-autocomplete': {
        '& > ul > li': {
          color: editorViewStyle.autocompleteItemTextColor,
        },
        '& > ul > li[aria-selected]': {
          color: editorViewStyle.autocompleteItemSelectedTextColor,
          backgroundColor: editorViewStyle.autocompleteItemSelectedBackgroundColor,
        },
        '& > ul > li[aria-selected]:hover': {
          backgroundColor: editorViewStyle.autocompleteItemSelectedBackgroundColor,
        },
        '& > ul > li:hover': {
          backgroundColor: editorViewStyle.autocompleteItemHoveredBackgroundColor,
        },
      },

      // Panels
      '.cm-panels': {
        color: editorViewStyle.panelsTextColor,
        backgroundColor: editorViewStyle.autocompleteBackgroundColor,
      },
      '.cm-panels.cm-panels-top': {
        borderBottom: 'none',
      },
      '.cm-panels.cm-panels-bottom': {
        borderTop: 'none',
      },
      '.cm-textfield': {
        backgroundColor: editorViewStyle.textfieldBackgroundColor,
        border: `1px solid ${editorViewStyle.textfieldBackgroundColor}`,
      },
      '.cm-textfield:focus': {
        outline: 'none',
        borderColor: editorViewStyle.textfieldFocusedBorderColor,
      },
      '.cm-button': {
        color: editorViewStyle.buttonTextColor,
        backgroundColor: editorViewStyle.buttonBackgroundColor,
        backgroundImage: 'none',
        border: 'none',
        borderRadius: '0',
      },
      '.cm-button:focus': {
        outlineOffset: '1px',
        outline: `1px solid ${editorViewStyle.buttonFocusOutlineColor}`,
      },
      '.cm-button:hover': {
        backgroundColor: editorViewStyle.buttonHoveredBackgroundColor,
      },
      '.cm-button:active': {
        backgroundImage: 'none',
      },
      '[name="close"]': {
        color: editorViewStyle.buttonCloseTextColor,
      },
    },
    { dark: editorViewStyle.themeType === 'dark' }
  );

  const themeHighlightStyle = HighlightStyle.define([
    {
      tag: [t.emphasis],
      fontStyle: 'italic',
    },
    {
      tag: [t.strong],
      fontStyle: 'bold',
    },
    {
      tag: t.definition(t.propertyName),
      color: highlightStyle.definitionPropertyNameTag.color,
      fontStyle: highlightStyle.definitionPropertyNameTag.fontStyle,
    },
    {
      tag: [t.moduleKeyword],
      color: highlightStyle.moduleKeywordTag.color,
      fontStyle: highlightStyle.moduleKeywordTag.fontStyle,
    },
    {
      tag: [t.keyword],
      color: highlightStyle.keywordTag.color,
      fontStyle: highlightStyle.keywordTag.fontStyle,
    },
    {
      tag: [t.typeName, t.typeOperator],
      color: highlightStyle.typeNameTag.color,
      fontStyle: highlightStyle.typeNameTag.fontStyle,
    },
    {
      tag: [t.definition(t.typeName)],
      color: highlightStyle.definitionTypeNameTag.color,
      fontStyle: highlightStyle.definitionTypeNameTag.fontStyle,
    },
    {
      tag: [t.operator, t.special(t.string)],
      color: highlightStyle.operatorTag.color,
      fontStyle: highlightStyle.operatorTag.fontStyle,
    },
    {
      tag: [t.bool],
      color: highlightStyle.boolTag.color,
      fontStyle: highlightStyle.boolTag.fontStyle,
    },
    {
      tag: [t.number],
      color: highlightStyle.numberTag.color,
      fontStyle: highlightStyle.numberTag.fontStyle,
    },
    {
      tag: [t.string, t.processingInstruction, t.inserted],
      color: highlightStyle.stringTag.color,
      fontStyle: highlightStyle.stringTag.fontStyle,
    },
    {
      tag: [t.null],
      color: highlightStyle.nullTag.color,
      fontStyle: highlightStyle.nullTag.fontStyle,
    },
    {
      tag: [t.self],
      color: highlightStyle.selfTag.color,
      fontStyle: highlightStyle.selfTag.fontStyle,
    },
    {
      tag: [t.function(t.variableName), t.function(t.propertyName)],
      color: highlightStyle.functionVariableNameTag.color,
      fontStyle: highlightStyle.functionVariableNameTag.fontStyle,
    },
    {
      tag: [t.comment],
      color: highlightStyle.commentTag.color,
      fontStyle: highlightStyle.commentTag.fontStyle,
    },
    {
      tag: [t.regexp],
      color: highlightStyle.regexpTag.color,
      fontStyle: highlightStyle.regexpTag.fontStyle,
    },
    {
      tag: [t.tagName],
      color: highlightStyle.tagNameTag.color,
      fontStyle: highlightStyle.tagNameTag.fontStyle,
    },
    {
      tag: [t.name],
      color: highlightStyle.nameTag.color,
      fontStyle: highlightStyle.nameTag.fontStyle,
    },
    {
      tag: [t.definition(t.name)],
      color: highlightStyle.definitionNameTag.color,
      fontStyle: highlightStyle.definitionNameTag.fontStyle,
    },
    {
      tag: [t.meta],
      color: highlightStyle.metaTag.color,
      fontStyle: highlightStyle.metaTag.fontStyle,
    },
    {
      tag: [t.attributeName],
      color: highlightStyle.attributeNameTag.color,
      fontStyle: highlightStyle.attributeNameTag.fontStyle,
    },
    {
      tag: [t.attributeValue],
      color: highlightStyle.attributeValueTag.color,
      fontStyle: highlightStyle.attributeValueTag.fontStyle,
    },
    {
      tag: [t.atom],
      color: highlightStyle.atomTag.color,
      fontStyle: highlightStyle.atomTag.fontStyle,
    },
    {
      tag: [t.className, t.namespace],
      color: highlightStyle.classNameTag.color,
      fontStyle: highlightStyle.classNameTag.fontStyle,
    },
    {
      tag: [t.unit],
      color: highlightStyle.unitTag.color,
      fontStyle: highlightStyle.unitTag.fontStyle,
    },
    {
      tag: [t.color, t.constant(t.name), t.standard(t.name)],
      color: highlightStyle.colorTag.color,
      fontStyle: highlightStyle.colorTag.fontStyle,
    },
    {
      tag: [t.heading],
      color: highlightStyle.stringTag.color,
      fontStyle: highlightStyle.stringTag.fontStyle,
      fontWeight: '700',
    },
    {
      tag: [t.punctuation],
      color: highlightStyle.punctuationTag.color,
      fontStyle: highlightStyle.punctuationTag.fontStyle,
    },
    {
      tag: [t.paren],
      color: highlightStyle.parenTag.color,
      fontStyle: highlightStyle.parenTag.fontStyle,
    },
    {
      tag: [t.squareBracket],
      color: highlightStyle.squareBracketTag.color,
      fontStyle: highlightStyle.squareBracketTag.fontStyle,
    },
    {
      tag: [t.bracket],
      color: highlightStyle.bracketTag.color,
      fontStyle: highlightStyle.bracketTag.fontStyle,
    },
    {
      tag: [t.angleBracket],
      color: highlightStyle.angleBracketTag.color,
      fontStyle: highlightStyle.angleBracketTag.fontStyle,
    },
  ]);

  return [theme, syntaxHighlighting(themeHighlightStyle)];
};
