import { ofetch } from 'ofetch';

export const api = ofetch.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
  retry: 0,
  timeout: 5_000,
});
