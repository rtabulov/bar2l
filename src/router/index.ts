import { cocktailCodes, type CocktailCode } from '@/features/cocktails';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'cocktail',
        params: {
          cocktailCode: cocktailCodes[0],
        },
      },
    },
    {
      path: '/cocktail/:cocktailCode',
      name: 'cocktail',
      component: () => import('../views/CocktailView.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        if (cocktailCodes.includes(to.params.cocktailCode as CocktailCode)) {
          return next();
        }

        return next({
          name: 'not-found',
          params: {
            pathMatch: to.path.substring(1).split('/'),
          },
          query: to.query,
          hash: to.hash,
        });
      },
    },
    {
      // will match everything
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
});

export default router;
