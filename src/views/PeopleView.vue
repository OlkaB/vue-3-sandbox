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

// w ponizszych funkcjach zamiast metod ze stora najpierw uzyj API call i potem operuj adekwatnie na storze
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