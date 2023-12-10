<template>
  <PageOverlay />

  <div class="person-form">
    <h2>{{ title }}</h2>

    <div class="label">
      Name
    </div>
    <input
      v-model.lazy.trim="nameProxy"
      class="input"
    >

    <div class="label">
      Height
    </div>
    <input
      v-model.lazy.number="heightProxy"
      class="input"
    > cm
    <br>
    <slot />
  </div>
</template>

<script setup>
import PageOverlay from '@/components/PageOverlay.vue';
import { computed } from 'vue';

const props = defineProps({
  person: {
    type: Object,
    default: () => ({}),
  },
  title: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update-person-field']);

const nameProxy = computed({
  get() {
    return props.person.name;
  },
  set(name) {
    emit('update-person-field', 'name', name);
  },
});

const heightProxy = computed({
  get() {
    return props.person.height;
  },
  set(height) {
    emit('update-person-field', 'height', height);
  },
});

</script>

<style scoped>
.person-form {
   position: absolute;
   top: 50%;
   right: 50%;
   transform: translate(50%, -50%);
   width: 20rem;
   min-height: 10rem;
   border: 1px solid;
   box-shadow: 3px 3px 5px rgba(122,122,122,.5);
   padding: 1rem;
   z-index: 100;
   background-color: white;
}

.label {
  font-weight: bold;
  margin-bottom: .25rem;
}

.input {
  margin-bottom: 1rem;
}
</style>