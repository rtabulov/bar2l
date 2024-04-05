<script setup lang="ts">
import TheSidebar from '@/components/TheSidebar.vue';
</script>

<template>
  <div class="container">
    <div class="layout">
      <TheSidebar class="layout__aside" />

      <main class="layout__main">
        <RouterView />
      </main>
    </div>
  </div>
</template>
