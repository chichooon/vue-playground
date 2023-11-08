<template>
  <h1>{{ message }}</h1>
</template>

<script setup lang="ts">
import { useTestComposition } from './useTestComposition';

const { message } = useTestComposition('A Component');
</script>
