<template>
  <div class="rating-stars">
    <span class="rating-text">
      Rating: ({{ rating }}/{{ RATING_MAX }})
    </span>

    <div
      v-for="index in RATING_ITERATIONS"
      :key="index"
      class="star"
      :class="{'star--selected': index <= rating}"
      @click="rateItem(index)"
    >
      <template v-if="index <= rating">
        ★
      </template>
      <template v-else>
        ☆
      </template>
    </div>
  </div>
</template>

<script setup>
import { RATING_MIN, RATING_MAX } from '@/constants/RatingRange';

const props = defineProps({
  rating: {
    type: Number,
    default: RATING_MIN,
  },
});

const emit = defineEmits(['rate-item']);
const RATING_ITERATIONS = Array.from({length: RATING_MAX}, (_, i) => i + 1);

function rateItem (ratingToAdd) {
  if(props.rating === ratingToAdd) {
    console.warn('Rating already selected');
    return;
  }
  emit('rate-item', ratingToAdd);
}

</script>

<style scoped>
.rating-stars {
  display: flex;
  align-items: center;
}

.rating-text {
  font-size: .75rem;
}

.star {
  cursor: pointer;
  padding: .25rem;
}

.star--selected {
  color: rgb(214, 165, 3);
}
</style>