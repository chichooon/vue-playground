<template>
  <div>
    <h1>Counter</h1>
    <h3>Counted: {{ count }}</h3>
  </div>
  <button @click="handleClickButton">click me</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { count } = storeToRefs(store);

function handleClickButton() {
  store.increment();
}
</script>
