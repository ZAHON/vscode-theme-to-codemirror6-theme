import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { Extension } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { tags as t } from '@lezer/highlight';

import type { Colors } from '@/redux/editorViewStyleSlice';
import type { Tags } from '@/redux/highlightStyleSlice';

export const createTheme = (themeType: string, colors: Colors, tags: Tags): Extension => {
  const theme = EditorView.theme(
    {
      // Base
      '&': {
        color: colors.base.text,
        backgroundColor: colors.base.background,
      },

      '.cm-scroller': {
        '-ms-overflow-style': 'auto',
        scrollbarColor: `${colors.scrollbar.thumb.background} ${colors.scrollbar.track.background}`,

        '&::-webkit-scrollbar-thumb': {
          backgroundColor: colors.scrollbar.thumb.background,
        },

        '&::-webkit-scrollbar-track': {
          backgroundColor: colors.scrollbar.track.background,
        },

        '&::-webkit-scrollbar-corner': {
          backgroundColor: colors.scrollbar.track.background,
        },

        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
      },

      // Cursor
      '.cm-content': {
        caretColor: colors.cursor.border,
      },
      '.cm-cursor, .cm-dropCursor': {
        borderLeftColor: colors.cursor.border,
        borderLeftWidth: '2px',
      },

      // LineNumbers
      '.cm-gutters': {
        backgroundColor: colors.lineNumbers.background,
        color: colors.lineNumbers.text,
        borderRight: 'none',
      },
      '.cm-gutterElement': {
        userSelect: 'none',
      },

      // ActiveLine
      '.cm-activeLine': {
        backgroundColor: colors.activeLine.background
          ? colors.activeLine.background
          : 'transparent',
        boxShadow:
          !colors.activeLine.background && colors.activeLine.background !== colors.activeLine.border
            ? `0px -2px 0px 0px ${colors.activeLine.border}, 0px 2px 0px 0px ${colors.activeLine.border}`
            : `none`,
      },
      '.cm-activeLineGutter': {
        backgroundColor: colors.activeLine.lineNumbers.background,
        color: colors.activeLine.lineNumbers.text,
      },

      // FoldPlaceholder
      '.cm-foldPlaceholder': {
        backgroundColor: 'transparent',
        border: 'none',
        color: colors.foldPlaceholder.text,
      },

      // Selection
      '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
        backgroundColor: colors.selection.background,
      },
      '.cm-selectionMatch': {
        backgroundColor: colors.selection.match.background,
        outline: `1px solid ${colors.selection.match.outline}`,
      },

      // MatchingBracket
      '&.cm-focused .cm-matchingBracket': {
        backgroundColor: colors.matchingBracket.background,
        outline: `1px solid ${colors.matchingBracket.outline}`,
      },

      // SearchMatch
      '.cm-searchMatch': {
        backgroundColor: colors.searchMatch.background,
      },
      '.cm-searchMatch.cm-searchMatch-selected': {
        backgroundColor: colors.searchMatch.selected.background,
      },

      // Autocomplete
      '.cm-tooltip': {
        backgroundColor: colors.autocomplete.background,
        border: `1px solid ${colors.autocomplete.border}`,
      },
      '.cm-tooltip .cm-tooltip-arrow:before': {
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
      },
      '.cm-tooltip .cm-tooltip-arrow:after': {
        borderTopColor: colors.autocomplete.background,
        borderBottomColor: colors.autocomplete.background,
      },
      '.cm-tooltip-autocomplete': {
        '& > ul > li': {
          color: colors.autocomplete.item.text,
        },
        '& > ul > li[aria-selected]': {
          color: colors.autocomplete.item.selected.text,
          backgroundColor: colors.autocomplete.item.selected.background,
        },
        '& > ul > li:hover:not([aria-selected])': {
          backgroundColor: colors.autocomplete.item.hovered.background,
        },
      },

      // Panels
      '.cm-panels': {
        color: colors.panels.text,
        backgroundColor: colors.panels.background,
      },
      '.cm-panels.cm-panels-top': {
        borderBottom: 'none',
      },
      '.cm-panels.cm-panels-bottom': {
        borderTop: 'none',
      },
      '.cm-textfield': {
        backgroundColor: colors.panels.textField.background,
        border: `1px solid ${colors.panels.textField.background}`,
      },
      '.cm-textfield:focus': {
        outline: 'none',
        borderColor: colors.panels.textField.focused.border,
      },
      '.cm-button': {
        color: colors.panels.button.text,
        backgroundColor: colors.panels.button.background,
        backgroundImage: 'none',
        border: 'none',
        borderRadius: '0',
        cursor: 'pointer',
        transition: 'background-color 0.1s ease-in',
      },
      '.cm-button:focus': {
        outlineOffset: '1px',
        outline: `1px solid ${colors.panels.button.focused.outline}`,
      },
      '.cm-button:hover': {
        backgroundColor: colors.panels.button.hovered.background,
      },
      '.cm-button:active': {
        backgroundImage: 'none',
      },
      '[name="close"]': {
        cursor: 'pointer',
        color: colors.panels.buttonClose.text,
      },
    },
    { dark: themeType === 'dark' }
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
      color: tags.definitionPropertyNameTag.color,
      fontStyle: tags.definitionPropertyNameTag.fontStyle,
    },
    {
      tag: [t.moduleKeyword],
      color: tags.moduleKeywordTag.color,
      fontStyle: tags.moduleKeywordTag.fontStyle,
    },
    {
      tag: [t.keyword],
      color: tags.keywordTag.color,
      fontStyle: tags.keywordTag.fontStyle,
    },
    {
      tag: [t.typeName, t.typeOperator],
      color: tags.typeNameTag.color,
      fontStyle: tags.typeNameTag.fontStyle,
    },
    {
      tag: [t.definition(t.typeName)],
      color: tags.definitionTypeNameTag.color,
      fontStyle: tags.definitionTypeNameTag.fontStyle,
    },
    {
      tag: [t.operator, t.special(t.string)],
      color: tags.operatorTag.color,
      fontStyle: tags.operatorTag.fontStyle,
    },
    {
      tag: [t.bool],
      color: tags.boolTag.color,
      fontStyle: tags.boolTag.fontStyle,
    },
    {
      tag: [t.number],
      color: tags.numberTag.color,
      fontStyle: tags.numberTag.fontStyle,
    },
    {
      tag: [t.string, t.processingInstruction, t.inserted],
      color: tags.stringTag.color,
      fontStyle: tags.stringTag.fontStyle,
    },
    {
      tag: [t.null],
      color: tags.nullTag.color,
      fontStyle: tags.nullTag.fontStyle,
    },
    {
      tag: [t.self],
      color: tags.selfTag.color,
      fontStyle: tags.selfTag.fontStyle,
    },
    {
      tag: [t.function(t.variableName), t.function(t.propertyName)],
      color: tags.functionVariableNameTag.color,
      fontStyle: tags.functionVariableNameTag.fontStyle,
    },
    {
      tag: [t.comment],
      color: tags.commentTag.color,
      fontStyle: tags.commentTag.fontStyle,
    },
    {
      tag: [t.regexp],
      color: tags.regexpTag.color,
      fontStyle: tags.regexpTag.fontStyle,
    },
    {
      tag: [t.tagName],
      color: tags.tagNameTag.color,
      fontStyle: tags.tagNameTag.fontStyle,
    },
    {
      tag: [t.name],
      color: tags.nameTag.color,
      fontStyle: tags.nameTag.fontStyle,
    },
    {
      tag: [t.definition(t.name)],
      color: tags.definitionNameTag.color,
      fontStyle: tags.definitionNameTag.fontStyle,
    },
    {
      tag: [t.meta],
      color: tags.metaTag.color,
      fontStyle: tags.metaTag.fontStyle,
    },
    {
      tag: [t.attributeName],
      color: tags.attributeNameTag.color,
      fontStyle: tags.attributeNameTag.fontStyle,
    },
    {
      tag: [t.attributeValue],
      color: tags.attributeValueTag.color,
      fontStyle: tags.attributeValueTag.fontStyle,
    },
    {
      tag: [t.atom],
      color: tags.atomTag.color,
      fontStyle: tags.atomTag.fontStyle,
    },
    {
      tag: [t.className, t.namespace],
      color: tags.classNameTag.color,
      fontStyle: tags.classNameTag.fontStyle,
    },
    {
      tag: [t.unit],
      color: tags.unitTag.color,
      fontStyle: tags.unitTag.fontStyle,
    },
    {
      tag: [t.color, t.constant(t.name), t.standard(t.name)],
      color: tags.colorTag.color,
      fontStyle: tags.colorTag.fontStyle,
    },
    {
      tag: [t.heading],
      color: tags.stringTag.color,
      fontStyle: tags.stringTag.fontStyle,
      fontWeight: '700',
    },
    {
      tag: [t.punctuation],
      color: tags.punctuationTag.color,
      fontStyle: tags.punctuationTag.fontStyle,
    },
    {
      tag: [t.paren],
      color: tags.parenTag.color,
      fontStyle: tags.parenTag.fontStyle,
    },
    {
      tag: [t.squareBracket],
      color: tags.squareBracketTag.color,
      fontStyle: tags.squareBracketTag.fontStyle,
    },
    {
      tag: [t.bracket],
      color: tags.bracketTag.color,
      fontStyle: tags.bracketTag.fontStyle,
    },
    {
      tag: [t.angleBracket],
      color: tags.angleBracketTag.color,
      fontStyle: tags.angleBracketTag.fontStyle,
    },
  ]);

  return [theme, syntaxHighlighting(themeHighlightStyle)];
};
