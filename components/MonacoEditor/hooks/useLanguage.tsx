import { useEffect, useState } from 'react';
import { Registry } from 'monaco-textmate';
import { wireTmGrammars } from 'monaco-editor-textmate';
import { languages } from '../data/languages';
import type { editor } from 'monaco-editor';

type Monaco = typeof import('monaco-editor/esm/vs/editor/editor.api') | null;

const registry = new Registry({
  getGrammarDefinition: async (scopeName: string, dependentScope: string) => {
    console.log(`scopeName: ${scopeName}, dependentScope: ${dependentScope}`);
    const language = languages.find((language) => language.scopeName === scopeName);

    if (language === undefined) return;

    return {
      format: 'json',
      content: await (await fetch(language.url)).text(),
    };
  },
});

export const useLanguage = (
  languagesId: string,
  monaco: Monaco,
  editor: editor.IStandaloneCodeEditor | null,
  isOnigasmloaded: boolean
) => {
  const [loadedLanguage, setLoadedLanguage] = useState<string | undefined>(undefined);
  const [loadedLanguages, setloadedLanguages] = useState<string[]>([]);

  useEffect(() => {
    if (monaco === null) return;
    if (editor === null) return;
    if (isOnigasmloaded === false) return;

    const loadLanguage = async () => {
      try {
        const language = languages.find((language) => language.id === languagesId);

        if (language === undefined) return;

        if (loadedLanguages.includes(language.id)) {
          setLoadedLanguage(language.id);
          return;
        }

        const grammars = new Map();
        grammars.set(language.id, language.scopeName);

        monaco.languages.register({ id: language.id });

        await wireTmGrammars(monaco, registry, grammars, editor);

        setLoadedLanguage(language.id);
        setloadedLanguages([...loadedLanguages, language.id]);
      } catch {
        console.log('Error');
      }
    };

    loadLanguage();
  }, [languagesId, monaco, editor, loadedLanguages, isOnigasmloaded]);

  return { loadedLanguage };
};
