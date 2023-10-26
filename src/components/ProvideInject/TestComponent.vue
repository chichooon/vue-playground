<template>
  <div><span>자식1</span></div>
  <TestChildComponent />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import TestChildComponent from './TestChildComponent.vue';

provide('test', 'testvalue123');
</script>
