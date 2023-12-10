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
import { ref } from 'vue';
import { RouteNames } from '@/router/RouteNames';
import PersonForm from '@/components/PersonForm.vue';

const router = useRouter();
const { createPerson } = usePeople();
const personToEdit = ref({
  // TODO create Person class and instantiate
  name: '',
  height: '',
});


function onCloseEdit () {
  router.push({ name: RouteNames.PEOPLE });
}

function onPersonUpdate(fieldName, fieldValue) {
  personToEdit.value[fieldName] = fieldValue;
}

function onCreatePerson() {
  createPerson(personToEdit.value);
  onCloseEdit();
}
</script>
