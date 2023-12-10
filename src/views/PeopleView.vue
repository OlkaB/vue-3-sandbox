<template>
  <PeopleList
    :people="people"
    :is-loading="isLoadingPeople"
  />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import PeopleList from '@/components/PeopleList.vue';
import { usePeople } from '@/composables/usePeople';
import { onMounted, provide } from 'vue';

const {
  getPeopleList,
  people,
  isLoadingPeople,
  ratePerson,
} = usePeople();

provide('rateItem', ratePerson);

getPeopleList();
console.log('%c People view setup', 'background: #222; color: #bada55');

onMounted(() => {
 console.log('%c People view onMounted', 'background: #222; color: #bada55');
});
</script>
