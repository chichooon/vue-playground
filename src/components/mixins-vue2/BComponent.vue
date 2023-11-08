<template>
  <span>{{ message }}</span>
</template>

<script lang="ts">
import testMixin from './mixin';

export default {
  mixins: [testMixin('B Component')],
  data: function () {
    return {
      testData: 1,
    };
  },
};
</script>
