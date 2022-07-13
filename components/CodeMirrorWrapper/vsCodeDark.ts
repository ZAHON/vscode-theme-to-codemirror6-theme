import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { Extension } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { tags as t } from '@lezer/highlight';

const vsCodeDarkTheme = EditorView.theme(
  {
    // Base
    '&': {
      color: '#d4d4d4',
      backgroundColor: '#1e1e1e',
    },

    // Cursor
    '.cm-content': {
      caretColor: '#aeafad',
    },
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: '#aeafad',
      borderLeftWidth: '2px',
    },

    // LineNumbers
    '.cm-gutters': {
      backgroundColor: '#1e1e1e',
      color: '#858585',
    },

    // ActiveLine
    '.cm-activeLine': {
      backgroundColor: 'transparent',
      boxShadow: '0px -2px 0px 0px #282828, 0px 2px 0px 0px #282828',
    },
    '.cm-activeLineGutter': {
      backgroundColor: '#1e1e1e',
      color: '#c6c6c6',
    },

    // FoldPlaceholder
    '.cm-foldPlaceholder': {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#c5c5c5',
    },

    // Selection
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
      background: '#264f78',
    },
    '.cm-selectionMatch': {
      backgroundColor: '#add6ff26',
    },

    // MatchingBracket
    '&.cm-focused .cm-matchingBracket': {
      backgroundColor: '#0064001a',
      outline: '1px solid #888888',
    },

    // SearchMatch
    '.cm-searchMatch': {
      backgroundColor: '#ea5c0055',
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: '#515c6a',
    },

    // Autocomplete
    '.cm-tooltip': {
      backgroundColor: '#252526',
      border: '1px solid #454545',
    },
    '.cm-tooltip .cm-tooltip-arrow:before': {
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
    },
    '.cm-tooltip .cm-tooltip-arrow:after': {
      borderTopColor: '#252526',
      borderBottomColor: '#252526',
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li': {
        color: '#d4d4d4',
      },
      '& > ul > li[aria-selected]': {
        color: '#ffffff',
        backgroundColor: '#094771',
      },
      '& > ul > li[aria-selected]:hover': {
        backgroundColor: '#094771',
      },
      '& > ul > li:hover': {
        backgroundColor: '#2a2d2e',
      },
    },

    // Panels
    '.cm-panels': {
      color: '#cccccc',
      backgroundColor: '#252526',
    },
    '.cm-textfield': {
      backgroundColor: '#3c3c3c',
      border: '1px solid #3c3c3c',
    },
    '.cm-textfield:focus': {
      outline: 'none',
      borderColor: '#007fd4',
    },
    '.cm-button': {
      color: '#ffffff',
      backgroundColor: '#0e639c',
      backgroundImage: 'none',
      border: 'none',
      borderRadius: '0',
    },
    '.cm-button:focus': {
      outlineOffset: '2px',
      outline: '1px solid #007fd4',
    },
    '.cm-button:hover': {
      backgroundColor: '#1177bb',
    },
    '.cm-button:active': {
      backgroundImage: 'none',
    },
    '[name="close"]': {
      color: '#cccccc',
    },
  },
  { dark: true }
);

const vsCodeDarkHighlightStyle = HighlightStyle.define([
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
    color: '#9CDCFE',
  },
  {
    tag: [t.moduleKeyword],
    color: '#C586C0',
  },
  {
    tag: [t.keyword],
    color: '#569CD6',
  },
  {
    tag: [t.changed, t.annotation, t.modifier, t.namespace],
    color: '#569CD6',
  },
  {
    tag: [t.typeName, t.typeOperator],
    color: '#4EC9B0',
  },
  {
    tag: [t.definition(t.typeName)],
    color: '#4EC9B0',
  },
  {
    tag: [t.operator, t.special(t.string)],
    color: '#D4D4D4',
  },
  {
    tag: [t.bool],
    color: '#569CD6',
  },
  {
    tag: [t.number],
    color: '#B5CEA8',
  },
  {
    tag: [t.string, t.processingInstruction, t.inserted],
    color: '#CE9178',
  },
  {
    tag: [t.null],
    color: '#569CD6',
  },
  {
    tag: [t.className, t.namespace],
    color: '#D7BA7D',
  },
  {
    tag: [t.unit],
    color: '#B5CEA8',
  },
  {
    tag: [t.color, t.constant(t.name), t.standard(t.name)],
    color: '#CE9178',
  },
  {
    tag: [t.self],
    color: '#569CD6',
  },
  {
    tag: [t.function(t.variableName), t.function(t.propertyName)],
    color: '#DCDCAA',
  },
  {
    tag: [t.annotation],
    color: '#4EC9B0',
  },
  {
    tag: [t.punctuation],
    color: '#d4d4d4',
  },
  {
    tag: [t.paren],
    color: '#d4d4d4',
  },
  {
    tag: [t.squareBracket, t.bracket, t.angleBracket],
    color: '#d4d4d4',
  },
  {
    tag: [t.meta],
    color: '#569CD6',
  },
  {
    tag: [t.comment],
    color: '#6A9955',
  },
  {
    tag: [t.regexp],
    color: '#D16969',
  },
  {
    tag: [t.tagName],
    color: '#569CD6',
  },
  {
    tag: [t.atom],
    color: '#CE9178',
  },
  {
    tag: [t.attributeValue],
    color: '#CE9178',
  },
  {
    tag: [t.attributeName],
    color: '#9CDCFE',
  },
  {
    tag: [t.name],
    color: '#4FC1FF',
  },
  {
    tag: [t.definition(t.name)],
    color: '#4FC1FF',
  },
  {
    tag: [t.heading],
    color: '#569CD6',
    fontWeight: '700',
  },
  {
    tag: [t.quote],
    color: '#6A9955',
  },
]);

export const vsCodeDark: Extension = [vsCodeDarkTheme, syntaxHighlighting(vsCodeDarkHighlightStyle)];
