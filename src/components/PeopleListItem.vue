<template>
  <div class="people-list__item">
    <div class="person-data">
      <div class="title">
        {{ person.name }}
      </div>

      <RatingStars
        :rating="person.rating"
        @rate-item="ratePersonProxy"
      />
    </div>

    <div class="actions">
      <RouterLink :to="{ name: RouteNames.PEOPLE }">
        <button
          type="button"
          class="action-btn"
        >
          Cancel
        </button>
      </RouterLink>


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

const props = defineProps({
  person: {
    type: Object,
    default: () => ({}),
  },
});

const ratePerson = inject('rateItem');

function ratePersonProxy(rating) {
  ratePerson(props.person.id, rating);
}
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