import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { Extension } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { tags as t } from '@lezer/highlight';

export const createTheme = (): Extension => {
  const theme = EditorView.theme(
    {
      // Base
      '&': {
        color: 'var(--base-text)',
        backgroundColor: 'var(--base-background)',
      },

      '.cm-scroller': {
        '-ms-overflow-style': 'auto',
        scrollbarColor: 'var(--scrollbar-thumb-background) var(--scrollbar-track-background)',

        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'var(--scrollbar-thumb-background)',
        },

        '&::-webkit-scrollbar-track': {
          backgroundColor: 'var(--scrollbar-track-background)',
        },

        '&::-webkit-scrollbar-corner': {
          backgroundColor: 'var(--scrollbar-track-background)',
        },

        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
      },

      // Cursor
      '.cm-content': {
        caretColor: 'var(--cursor-border)',
      },
      '.cm-cursor, .cm-dropCursor': {
        borderLeftColor: 'var(--cursor-border)',
        borderLeftWidth: '2px',
      },

      // LineNumbers
      '.cm-gutters': {
        backgroundColor: 'var(--gutters-background)',
        color: 'var(--gutters-text)',
        borderRight: 'none',
      },
      '.cm-gutterElement': {
        userSelect: 'none',
      },

      // ActiveLine
      '.cm-activeLine': {
        backgroundColor: 'var(--active-line-background)',
        boxShadow: 'var(--active-line-border)',
      },
      '.cm-activeLineGutter': {
        backgroundColor: 'var(--active-line-gutter-background)',
        color: 'var(--active-line-gutter-text)',
      },

      // FoldPlaceholder
      '.cm-foldPlaceholder': {
        backgroundColor: 'transparent',
        border: 'none',
        color: 'var(--fold-placeholder-text)',
      },

      // Selection
      '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
        backgroundColor: 'var(--selection-background)',
      },
      '.cm-selectionMatch': {
        backgroundColor: 'var(--selection-match-background)',
        outline: '1px solid var(--selection-match-outline)',
      },

      // MatchingBracket
      '&.cm-focused .cm-matchingBracket': {
        backgroundColor: 'var(--matching-bracket-background)',
        outline: '1px solid var(--matching-bracket-outline)',
      },

      // SearchMatch
      '.cm-searchMatch': {
        backgroundColor: 'var(--search-match-background)',
      },
      '.cm-searchMatch.cm-searchMatch-selected': {
        backgroundColor: 'var(--search-match-selected-background)',
      },

      // Autocomplete
      '.cm-tooltip': {
        backgroundColor: 'var(--tooltip-background)',
        border: '1px solid var(--tooltip-border)',
      },
      '.cm-tooltip .cm-tooltip-arrow:before': {
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
      },
      '.cm-tooltip .cm-tooltip-arrow:after': {
        borderTopColor: 'var(--tooltip-background)',
        borderBottomColor: 'var(--tooltip-background)',
      },
      '.cm-tooltip-autocomplete': {
        '& > ul > li': {
          color: 'var(--tooltip-item-text)',
        },
        '& > ul > li[aria-selected]': {
          color: 'var(--tooltip-item-selected-text)',
          backgroundColor: 'var(--tooltip-item-selected-background)',
        },
        '& > ul > li:hover:not([aria-selected])': {
          backgroundColor: 'var(--tooltip-item-hovered-background)',
        },
      },

      // Panels
      '.cm-panels': {
        color: 'var(--panels-text)',
        backgroundColor: 'var(--panels-background)',
      },
      '.cm-panels.cm-panels-top': {
        borderBottom: 'none',
      },
      '.cm-panels.cm-panels-bottom': {
        borderTop: 'none',
      },
      '.cm-textfield': {
        backgroundColor: 'var(--panels-text-field-background)',
        border: '1px solid var(--panels-text-field-background)',
      },
      '.cm-textfield:focus': {
        outline: 'none',
        borderColor: 'var(--panels-text-field-focused-border)',
      },
      '.cm-button': {
        color: 'var(--panels-button-text)',
        backgroundColor: 'var(--panels-button-background)',
        backgroundImage: 'none',
        border: 'none',
        borderRadius: '0',
        cursor: 'pointer',
        transition: 'background-color 0.1s ease-in',
      },
      '.cm-button:focus': {
        outlineOffset: '1px',
        outline: '1px solid var(--panels-button-focused-outline)',
      },
      '.cm-button:hover': {
        backgroundColor: 'var(--panels-button-hovered-background)',
      },
      '.cm-button:active': {
        backgroundImage: 'none',
      },
      '[name="close"]': {
        cursor: 'pointer',
        color: 'var(--panels-button-close-text)',
      },
    },
    { dark: true }
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
