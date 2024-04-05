import type { cocktailCodes } from '.';

export type CocktailCode = (typeof cocktailCodes)[number];
export interface CocktailListItem {
  displayName: string;
  code: CocktailCode;
}
