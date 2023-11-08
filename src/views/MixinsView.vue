<template>
  <AComponent />
  <BComponent />
</template>

<script lang="ts">
import AComponent from '@/components/mixins-vue2/AComponent.vue';
import BComponent from '@/components/mixins-vue2/BComponent.vue';

export default {
  components: {
    AComponent,
    BComponent,
  },
};
</script>
