<template>
  <div
    v-if="isLoading && people.length === 0"
    class="loading-skeleton"
  >
    Please wait, loading data...
  </div>

  <template v-else>
    <div
      v-for="person in people"
      :key="person.id"
      class="person-item"
    >
      {{ person.id }}. {{ person.name }}
      <RouterLink
        :to="{
          name: RouteNames.PERSON_EDIT,
          params: {
            personId: person.id
          }
        }"
      >
        <button type="button">Edit</button>
      </RouterLink>
    </div>
  </template>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { RouteNames } from '@/router/RouteNames';

defineProps({
  people: {
    type: Array,
    default: () => [],
  },
  isLoading: Boolean,
});
</script>

<style>
.loading-skeleton {
  font-size: 1.25rem;
}
</style>
