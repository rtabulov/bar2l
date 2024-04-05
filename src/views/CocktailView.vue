<script setup lang="ts">
import { toRefs } from 'vue';
import { useCocktail, type CocktailCode } from '@/features/cocktails';
import BaseLoading from '@/components/BaseLoading.vue';
import CocktailDetails from '@/components/CocktailDetails.vue';

const props = defineProps<{
  cocktailCode: CocktailCode;
}>();

const { cocktailCode } = toRefs(props);
const query = useCocktail(cocktailCode);
</script>

<template>
  <BaseLoading v-slot="{ data: cocktail }" :query="query">
    <CocktailDetails :cocktail="cocktail" />
  </BaseLoading>
</template>
