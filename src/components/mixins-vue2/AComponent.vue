<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import testMixin from './mixin';

export default {
  mixins: [testMixin('A Component')],
};
</script>
