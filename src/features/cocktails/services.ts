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
  [key: `strIngredient${number}`]: string;
  [key: `strMeasure${number}`]: string;
  strImageSource: string;
  strImageAttribution: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

export async function fetchCocktail(code: CocktailCode): Promise<Drink | null> {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`,
  ).then((res) => res.json() as Promise<CocktailsSearchDTO>);

  return res.drinks[0] || null;
}
