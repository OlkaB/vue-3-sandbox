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
      @click="onCreatePerson"
    >
      Create
    </button>
  </PersonForm>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { usePeople } from '@/composables/usePeople';
import { RouteNames } from '@/router/RouteNames';
import PersonForm from '@/components/PersonForm.vue';
import { onBeforeUnmount } from 'vue';

const router = useRouter();
const { personToEdit, resetPersonToEdit, createPerson } = usePeople();

function onCloseEdit() {
  router.push({ name: RouteNames.PEOPLE });
}

function onPersonUpdate(fieldName, fieldValue) {
  personToEdit.value[fieldName] = fieldValue;
}

function onCreatePerson() {
  // Add API call, when successful pass response to store instead of personToEdit.value, add loading state and disable save button on request processing
  createPerson(personToEdit.value);
  onCloseEdit();
}

onBeforeUnmount(() => {
  resetPersonToEdit();
});
</script>
