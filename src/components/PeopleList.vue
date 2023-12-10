<template>
  <div
    v-if="isLoading && people.length === 0"
    class="loading-skeleton"
  >
    Please wait, loading data...
  </div>

  <div v-else class="people-list">
    <PeopleListItem
      v-for="person in people"
      :key="person.id"
      :person="person"
    />
  </div>
</template>

<script setup>
import PeopleListItem from './PeopleListItem.vue';

defineProps({
  people: {
    type: Array,
    default: () => [],
  },
  isLoading: Boolean,
});
</script>

<style>
.people-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.loading-skeleton {
  font-size: 1.25rem;
}
</style>
