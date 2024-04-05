import type { CocktailCode } from './types';
import { useQuery } from '@tanstack/vue-query';
import { fetchCocktail } from './services';
import { toRef, type MaybeRef } from 'vue';

export function useCocktail(code: MaybeRef<CocktailCode>) {
  const codeRef = toRef(code);

  return useQuery({
    queryKey: ['cocktail', codeRef],
    queryFn: () => fetchCocktail(codeRef.value),
    staleTime: Infinity,
  });
}
