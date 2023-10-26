<template>
  <div><span>자식3</span></div>
  <h1>{{ value }}</h1>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const value = inject('test');
</script>
