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
        backgroundColor: editorViewStyle.activeLineBackgroundColor,
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
      '.cm-textfield': {
        backgroundColor: editorViewStyle.textfieldBackgroundColor,
        border: `1px solid ${editorViewStyle.textfieldBackgroundColor}`,
      },
      '.cm-textfield:focus': {
        outline: 'none',
        borderColor: editorViewStyle.textfieldFocusedBorderColor,
      },
      '.cm-button': {
        color: editorViewStyle.buttonCloseTextColor,
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
      color: highlightStyle.definitionPropertyNameColor,
    },
    {
      tag: [t.moduleKeyword],
      color: highlightStyle.moduleKeywordColor,
    },
    {
      tag: [t.keyword],
      color: highlightStyle.keywordColor,
    },
    {
      tag: [t.typeName, t.typeOperator],
      color: highlightStyle.typeNameColor,
    },
    {
      tag: [t.definition(t.typeName)],
      color: highlightStyle.definitionTypeNameColor,
    },
    {
      tag: [t.operator, t.special(t.string)],
      color: highlightStyle.operatorColor,
    },
    {
      tag: [t.bool],
      color: highlightStyle.boolColor,
    },
    {
      tag: [t.number],
      color: highlightStyle.numberColor,
    },
    {
      tag: [t.string, t.processingInstruction, t.inserted],
      color: highlightStyle.stringColor,
    },
    {
      tag: [t.null],
      color: highlightStyle.nullColor,
    },
    {
      tag: [t.self],
      color: highlightStyle.selfColor,
    },
    {
      tag: [t.function(t.variableName), t.function(t.propertyName)],
      color: highlightStyle.functionVariableNameColor,
    },
    {
      tag: [t.comment],
      color: highlightStyle.commentColor,
    },
    {
      tag: [t.regexp],
      color: highlightStyle.regexpColor,
    },
    {
      tag: [t.tagName],
      color: highlightStyle.tagNameColor,
    },
    {
      tag: [t.name],
      color: highlightStyle.nameColor,
    },
    {
      tag: [t.definition(t.name)],
      color: highlightStyle.definitionNameColor,
    },
    {
      tag: [t.meta],
      color: highlightStyle.metaColor,
    },
    {
      tag: [t.attributeName],
      color: highlightStyle.attributeNameColor,
    },
    {
      tag: [t.attributeValue],
      color: highlightStyle.attributeValueColor,
    },
    {
      tag: [t.atom],
      color: highlightStyle.atomColor,
    },
    {
      tag: [t.className, t.namespace],
      color: highlightStyle.classNameColor,
    },
    {
      tag: [t.unit],
      color: highlightStyle.unitColor,
    },
    {
      tag: [t.color, t.constant(t.name), t.standard(t.name)],
      color: highlightStyle.colorColor,
    },
    {
      tag: [t.heading],
      color: highlightStyle.stringColor,
      fontWeight: '700',
    },
  ]);

  return [theme, syntaxHighlighting(themeHighlightStyle)];
};
