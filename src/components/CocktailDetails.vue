<script setup lang="ts">
import { type Drink } from '@/features/cocktails';

defineProps<{
  cocktail: Drink;
}>();
</script>

<template>
  <article class="cocktail-details">
    <div class="cocktail-details__main">
      <header class="cocktail-details__header">
        <h1 class="cocktail-details__heading">{{ cocktail.strDrink }}</h1>
      </header>
      <main>
        <p class="cocktail-details__description">
          {{ cocktail.strCategory }}, {{ cocktail.strAlcoholic }},
          {{ cocktail.strGlass }}
        </p>
        <ul class="cocktail-details__ingredient-list">
          <template v-for="num in 15" :key="num">
            <li
              v-if="cocktail[`strIngredient${num}`]"
              class="cocktail-details__ingredient"
            >
              {{ cocktail[`strMeasure${num}`] }}
              {{ cocktail[`strIngredient${num}`] }}
            </li>
          </template>
        </ul>
      </main>
    </div>

    <div class="cocktail-details__image-wrapper">
      <img
        :src="cocktail.strDrinkThumb"
        class="cocktail-details__image"
        width="700px"
        height="700px"
      />
    </div>
  </article>
</template>
