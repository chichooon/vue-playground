<template>
  <h1>{{ n }}</h1>
  <div class="message-wrapper">
    {{ message }}
  </div>
  <input type="text" v-model="message" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const message = ref<string>('');
const n = ref<number>(0);
let intervalID: number;

onMounted(() => {
  intervalID = setInterval(() => {
    n.value += 1;
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalID);
});
</script>

<style scoped lang="scss">
.message-wrapper {
  height: 20px;
}
</style>
