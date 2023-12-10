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
import { onBeforeUnmount, watch } from 'vue';
import { RouteNames } from '@/router/RouteNames';
import PersonForm from '@/components/PersonForm.vue';

const route = useRoute();
const router = useRouter();
const {
  personToEdit,
  initPersonToEdit,
  resetPersonToEdit,
  getPersonById,
  updatePerson,
} = usePeople();

watch(
  () => route.params.personId,
  async (personId) => {
    const person = getPersonById(Number(personId));
    if (!person) return;
    initPersonToEdit({ ...person });
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
  // Add API call, when successful pass response to store instead of personToEdit.value, add loading state and disable update button on request processing
  updatePerson(personToEdit.value.id, personToEdit.value);
  onCloseEdit();
}

onBeforeUnmount(() => {
  resetPersonToEdit();
});
</script>
