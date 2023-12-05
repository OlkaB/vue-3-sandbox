<template>
  <div class="person-edit">
    <h2>Edit person</h2>

    <input
      v-model="personToEdit.name"
    />
    <br><br>
    <RouterLink :to="{ name: RouteNames.PEOPLE }">
      <button type="button">Close</button>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { usePeople } from '@/composables/usePeople';
import { ref, watch } from 'vue';
import { RouteNames } from '@/router/RouteNames';

const route = useRoute();
const { getPersonById } = usePeople();
const personToEdit = ref({});

watch(
  () => route.params.personId,
  async (personId) => {
    const person = getPersonById(Number(personId));
    if(!person) return;
    personToEdit.value = {...person};
  },
  { immediate: true },
);

</script>

<style scoped>
.person-edit {
   position: absolute;
   top: 5rem;
   right: 2rem;
   width: 20rem;
   height: 10rem;
   border: 1px solid;
   box-shadow: 3px 3px 5px rgba(122,122,122,.5);
   padding: 1rem;
}
</style>