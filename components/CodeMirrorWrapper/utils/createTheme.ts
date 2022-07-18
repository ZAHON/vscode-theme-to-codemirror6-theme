import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { Extension } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { tags as t } from '@lezer/highlight';

import type { Colors } from '@/redux/editorViewStyleSlice';

export const createTheme = (themeType: string, colors: Colors): Extension => {
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
      fontStyle: 'normal',
    },
    {
      tag: t.definition(t.propertyName),
      color: 'var(--definition-property-name-color)',
      fontStyle: 'var(--definition-property-name-font-style)',
    },
    {
      tag: [t.moduleKeyword],
      color: 'var(--module-keyword-color)',
      fontStyle: 'var(--module-keyword-font-style)',
    },
    {
      tag: [t.keyword],
      color: 'var(--keyword-color)',
      fontStyle: 'var(--keyword-font-style)',
    },
    {
      tag: [t.typeName],
      color: 'var(--type-name-color)',
      fontStyle: 'var(--type-name-font-style)',
    },
    {
      tag: [t.typeOperator],
      color: 'var(--type-operator-color)',
      fontStyle: 'var(--type-operator-font-style)',
    },
    {
      tag: [t.definition(t.typeName)],
      color: 'var(--definition-type-name-color)',
      fontStyle: 'var(--definition-type-name-font-style)',
    },
    {
      tag: [t.operator],
      color: 'var(--operator-color)',
      fontStyle: 'var(--operator-font-style)',
    },
    {
      tag: [t.special(t.string)],
      color: 'var(--special-string-color)',
      fontStyle: 'var(--special-string-font-style)',
    },
    {
      tag: [t.bool],
      color: 'var(--bool-color)',
      fontStyle: 'var(--bool-font-style)',
    },
    {
      tag: [t.number],
      color: 'var(--number-color)',
      fontStyle: 'var(--number-font-style)',
    },
    {
      tag: [t.string],
      color: 'var(--string-color)',
      fontStyle: 'var(--string-font-style)',
    },
    {
      tag: [t.processingInstruction],
      color: 'var(--processing-instruction-color)',
      fontStyle: 'var(--processing-instruction-font-style)',
    },
    {
      tag: [t.inserted],
      color: 'var(--inserted-color)',
      fontStyle: 'var(--inserted-font-style)',
    },
    {
      tag: [t.null],
      color: 'var(--null-color)',
      fontStyle: 'var(--null-font-style)',
    },
    {
      tag: [t.self],
      color: 'var(--self-color)',
      fontStyle: 'var(--self-font-style)',
    },
    {
      tag: [t.function(t.variableName)],
      color: 'var(--function-variable-name-color)',
      fontStyle: 'var(--function-variable-name-font-style)',
    },
    {
      tag: [t.function(t.propertyName)],
      color: 'var(--function-property-name-color)',
      fontStyle: 'var(--function-property-name-font-style)',
    },
    {
      tag: [t.comment],
      color: 'var(--comment-color)',
      fontStyle: 'var(--comment-font-style)',
    },
    {
      tag: [t.regexp],
      color: 'var(--regexp-color)',
      fontStyle: 'var(--regexp-font-style)',
    },
    {
      tag: [t.tagName],
      color: 'var(--tag-name-color)',
      fontStyle: 'var(--tag-name-font-style)',
    },
    {
      tag: [t.name],
      color: 'var(--name-color)',
      fontStyle: 'var(--name-font-style)',
    },
    {
      tag: [t.definition(t.name)],
      color: 'var(--definition-name-color)',
      fontStyle: 'var(--definition-name-font-style)',
    },
    {
      tag: [t.meta],
      color: 'var(--meta-color)',
      fontStyle: 'var(--meta-font-style)',
    },
    {
      tag: [t.attributeName],
      color: 'var(--attribute-name-color)',
      fontStyle: 'var(--attribute-name-font-style)',
    },
    {
      tag: [t.attributeValue],
      color: 'var(--attribute-value-color)',
      fontStyle: 'var(--attribute-value-font-style)',
    },
    {
      tag: [t.atom],
      color: 'var(--atom-color)',
      fontStyle: 'var(--atom-font-style)',
    },
    {
      tag: [t.className],
      color: 'var(--class-name-color)',
      fontStyle: 'var(--class-name-font-style)',
    },
    {
      tag: [t.namespace],
      color: 'var(--namespace-color)',
      fontStyle: 'var(--namespace-font-style)',
    },
    {
      tag: [t.unit],
      color: 'var(--unit-color)',
      fontStyle: 'var(--unit-font-style)',
    },
    {
      tag: [t.color],
      color: 'var(--color-color)',
      fontStyle: 'var(--color-font-style)',
    },
    {
      tag: [t.constant(t.name)],
      color: 'var(--constant-name-color)',
      fontStyle: 'var(--constant-name-font-style)',
    },
    {
      tag: [t.standard(t.name)],
      color: 'var(--standard-name-color)',
      fontStyle: 'var(--standard-name-font-style)',
    },
    {
      tag: [t.heading],
      color: 'var(--heading-color)',
      fontStyle: 'var(--heading-font-style)',
      fontWeight: '700',
    },
    {
      tag: [t.punctuation],
      color: 'var(--punctuation-color)',
      fontStyle: 'var(--punctuation-font-style)',
    },
    {
      tag: [t.paren],
      color: 'var(--paren-color)',
      fontStyle: 'var(--paren-font-style)',
    },
    {
      tag: [t.squareBracket],
      color: 'var(--square-bracket-color)',
      fontStyle: 'var(--square-bracket-font-style)',
    },
    {
      tag: [t.bracket],
      color: 'var(--bracket-color)',
      fontStyle: 'var(--bracket-font-style)',
    },
    {
      tag: [t.angleBracket],
      color: 'var(--angle-bracket-color)',
      fontStyle: 'var(--angle-bracket-font-style)',
    },
  ]);

  return [theme, syntaxHighlighting(themeHighlightStyle)];
};
