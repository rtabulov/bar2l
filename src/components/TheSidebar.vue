<script setup lang="ts">
import { cocktailList } from '@/features/cocktails';
</script>

<template>
  <aside class="sidebar">
    <nav class="sidebar__container">
      <RouterLink
        v-for="{ code, displayName } in cocktailList"
        :key="code"
        class="sidebar__link"
        active-class="sidebar__link--active"
        :to="{
          name: 'cocktail',
          params: {
            cocktailCode: code,
          },
        }"
      >
        {{ displayName }}
      </RouterLink>
      <hr class="sidebar__hr" />
      <RouterLink
        to="/404"
        class="sidebar__link"
        active-class="sidebar__link--active"
      >
        404
      </RouterLink>
    </nav>
  </aside>
</template>
