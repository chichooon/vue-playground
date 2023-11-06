<template>
  <div class="wrapper">
    <Transition>
      <p v-if="isShown">하이하이</p>
    </Transition>
  </div>
  <button type="button" @click="handleToggleShow"><span>토글</span></button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isShown = ref<boolean>(false);

function handleToggleShow() {
  isShown.value = !isShown.value;
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: scaleY(0);
}

.wrapper {
  height: 20px;
}
</style>
