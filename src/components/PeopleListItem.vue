<template>
  <div class="people-list__item">
    <div class="person-data">
      <div class="title">
        {{ person.name }}
      </div>

      <RatingStars
        :rating="person.rating"
        @rate-item="$event => ratePerson(person.id, $event)"
      />
    </div>

    <div class="actions">
      <button
        type="button"
        class="action-btn"
        @click="deletePersonById(person.id)"
      >
        Delete
      </button>


      <RouterLink
        :to="{
          name: RouteNames.PERSON_EDIT,
          params: {
            personId: person.id
          }
        }"
      >
        <button
          type="button"
          class="action-btn"
        >
          Edit
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { RouteNames } from '@/router/RouteNames';
import RatingStars from './RatingStars.vue';
import { inject } from 'vue';

defineProps({
  person: {
    type: Object,
    default: () => ({}),
  },
});

const ratePerson = inject('rateItem');
const deletePersonById = inject('deletePersonById');
</script>

<style scoped>
.people-list__item {
  border: 1px solid;
}

.person-data {
  padding: 1rem;
}

.title {
  font-weight: bold;
  font-size: 1.5rem;
}

.actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.action-btn {
  width: 100%;
  height: 2.5rem;
}
</style>