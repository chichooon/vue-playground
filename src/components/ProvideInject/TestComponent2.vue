<template>
  <div>
    <span>{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const value = inject('test');
</script>
