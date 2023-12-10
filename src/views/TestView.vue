<template>
  <div class="test">
    <h1>This is a test page</h1>
    <br>

    <VModel v-model="baseModelValue" v-model:sync-a="syncA" v-model:sync-b="syncB" ></VModel>
    <br>

    1. baseModelValue: {{ baseModelValue }}
    <br>
    2. syncA: {{ syncA }}
    <br>
    3. syncB: {{ syncB }}
  </div>
</template>

<script>
// intentionally options API
import VModel from '@/components/VModel.vue';

export default {
  components: {
    VModel,
  },
  data()  {
    return {
      baseModelValue: '',
      syncA: '',
      syncB: '',
    };
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
