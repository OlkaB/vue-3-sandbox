<template>
  <PeopleList
    :people="people"
    :is-loading="isLoadingPeople"
  />
  <RouterView></RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router';
import PeopleList from '@/components/PeopleList.vue';
import { usePeople } from '@/composables/usePeople';
import { onMounted } from 'vue';

const { getPeopleList, people, isLoadingPeople } = usePeople();

getPeopleList();
console.log('%c People view setup', 'background: #222; color: #bada55');

onMounted(() => {
 console.log('%c People view onMounted', 'background: #222; color: #bada55');
});
</script>
