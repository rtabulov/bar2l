import { api } from '../api';
import type { CocktailCode } from './types';

export interface CocktailsSearchDTO {
  drinks: Drink[];
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
  strImageSource: string;
  strImageAttribution: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

export async function fetchCocktail(code: CocktailCode) {
  const res = await api<CocktailsSearchDTO>('/search.php', {
    query: { s: code },
  });

  if (!res.drinks?.length) {
    throw new Error('Not found');
  }

  return res.drinks[0] ?? null;
}
