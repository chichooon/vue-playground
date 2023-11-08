<template>
  <span>{{ message }}</span>
</template>

<script setup lang="ts">
import { useTestComposition } from './useTestComposition';

const { message } = useTestComposition('B Component');
</script>
