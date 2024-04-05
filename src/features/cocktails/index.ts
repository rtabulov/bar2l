import type { CocktailListItem } from './types';

export * from './types';
export * from './composables';
export * from './services';

export const cocktailCodes = ['margarita', 'mojito', 'a1', 'kir'] as const;
export const cocktailList: CocktailListItem[] = [
  { displayName: 'Margarita', code: 'margarita' },
  { displayName: 'Mojito', code: 'mojito' },
  { displayName: 'A1', code: 'a1' },
  { displayName: 'Kir', code: 'kir' },
];
