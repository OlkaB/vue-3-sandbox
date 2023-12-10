<template>
  <PeopleList
    :people="people"
    :is-loading="isLoadingPeople"
  />

  <RouterLink
    :to="{ name: RouteNames.PERSON_ADD }"
    class="add-person"
  >
    <button
      type="button"
      class="action-btn"
    >
      Add person
    </button>
  </RouterLink>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import PeopleList from '@/components/PeopleList.vue';
import { usePeople } from '@/composables/usePeople';
import { provide } from 'vue';
import { RouteNames } from '@/router/RouteNames';

const {
  getPeopleList,
  people,
  isLoadingPeople,
  ratePerson,
  deletePersonById,
} = usePeople();

provide('rateItem', ratePerson);
provide('deletePersonById', deletePersonById);

getPeopleList();
</script>

<style scoped>
.add-person {
  display: inline-block;
  margin-top: 2.5rem;
}
</style>