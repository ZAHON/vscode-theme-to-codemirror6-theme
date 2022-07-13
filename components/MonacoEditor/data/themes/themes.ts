import { themesDark } from './themesDark';
import { themesLight } from './themesLight';

export type Theme = {
  isDark: boolean;
  id: string;
  label: string;
  url: string;
};

export const themes: Theme[] = [...themesDark, ...themesLight];
