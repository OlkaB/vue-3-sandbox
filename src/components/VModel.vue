<template>
  <div class="">
    <div class="label">
      Base v-model
    </div>
    <input
      :value="modelValue"
      class="input"
      @input="emitInput"
    />

    <br>

    <input
      :value="syncA"
      class="input"
      @input="$emit('update:sync-a', $event.target.value)"
    />

    <br>

    <input
      :value="syncB"
      class="input"
      @input="$emit('update:sync-b', $event.target.value)"
    />
  </div>
</template>

<script>
// intentionally options API
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    syncA: String,
    syncB: String,
  },
  emits: ['update:modelValue', 'update:sync-a', 'update:sync-b'],
  methods: {
    emitInput($event) {
      this.$emit('update:modelValue', $event.target.value);
    },
  },
};
</script>

<style>
.label {
 font-weight: bold;
 margin-bottom: .25rem;
}

.input {
  margin-bottom: 1rem;
}
</style>