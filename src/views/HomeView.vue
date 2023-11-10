<template>
  <TestComponent />
  <TestComponent2 />
  <TextHighlightView text="exem@exem.ioexemasdksfnasdknfklsdnfkldsexem" text-to-highlight="exem" />
</template>

<script setup lang="ts">
import TestComponent from '@/components/ProvideInject/TestComponent.vue';
import TestComponent2 from '@/components/ProvideInject/TestComponent2.vue';
import TextHighlightView from './TextHighlightView.vue';
</script>
