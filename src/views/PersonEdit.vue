<template>
  <PersonForm
    :person="personToEdit"
    title="Edit person"
    @update-person-field="onPersonUpdate"
  >
    <button
      type="button"
      @click="onCloseEdit"
    >
      Close
    </button>

    <button
      type="button"
      @click="onUpdatePerson"
    >
      Update
    </button>
  </PersonForm>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { usePeople } from '@/composables/usePeople';
import { ref, watch } from 'vue';
import { RouteNames } from '@/router/RouteNames';
import PersonForm from '@/components/PersonForm.vue';

const route = useRoute();
const router = useRouter();
const { getPersonById, updatePerson } = usePeople();
const personToEdit = ref({});

watch(
  () => route.params.personId,
  async (personId) => {
    const person = getPersonById(Number(personId));
    if (!person) return;
    personToEdit.value = { ...person };
  },
  { immediate: true },
);

function onCloseEdit () {
  router.push({ name: RouteNames.PEOPLE });
}

function onPersonUpdate(fieldName, fieldValue) {
  personToEdit.value[fieldName] = fieldValue;
}

function onUpdatePerson() {
  updatePerson(personToEdit.value.id, personToEdit.value);
  onCloseEdit();
}
</script>
