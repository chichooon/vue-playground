<template>
  <Teleport to="#modal">
    <div v-if="isOpen" class="modal-wrapper">
      <div class="modal-inner">
        <h1>안녕하세요</h1>
        <button @click="handleClickClose" type="button">닫기</button>
      </div>
    </div>
  </Teleport>
  <button @click="handleClickOpen" type="button">열기</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

function handleClickOpen() {
  isOpen.value = true;
}

function handleClickClose() {
  isOpen.value = false;
}
</script>

<style scoped lang="scss">
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000030;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-inner {
  background-color: #ffffff;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h1 {
    margin-bottom: 10px;
  }
}
</style>
