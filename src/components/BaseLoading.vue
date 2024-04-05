<script setup lang="ts" generic="T, E extends Error">
import { type UseQueryReturnType } from '@tanstack/vue-query';
import { reactive, toRefs } from 'vue';

const props = defineProps<{
  query: UseQueryReturnType<T, E>;
}>();

const { data, error, isFetching, isError } = toRefs(reactive(props.query));
</script>

<template>
  <div v-if="isFetching" class="text-center">
    <slot name="loading" v-bind="query">
      <img src="@/assets/spinner.svg" alt="Loading" width="100" height="100" />
    </slot>
  </div>
  <div v-else-if="isError" v-bind="query">
    <slot name="error">
      <p>Error:</p>
      <pre>{{ error!.message }}</pre>
    </slot>
  </div>
  <div v-else-if="data">
    <slot :data="data" />
  </div>
</template>
