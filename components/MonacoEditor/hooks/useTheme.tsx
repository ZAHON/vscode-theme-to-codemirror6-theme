import { useState, useEffect } from 'react';
import type { editor } from 'monaco-editor';

type Monaco = typeof import('monaco-editor/esm/vs/editor/editor.api') | null;

export const useTheme = (theme: editor.IStandaloneThemeData, monaco: Monaco) => {
  const [loadedTheme, setLoadedTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (monaco === null) return;
    if (theme === null) return;

    try {
      const themeID = 'themeid';
      monaco.editor.defineTheme(themeID, theme);
      setLoadedTheme(themeID);
    } catch {
      console.log('Error');
    }
  }, [theme, monaco]);

  return { loadedTheme };
};
