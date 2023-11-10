<template>
  <template v-for="text in textSegment" :key="text">
    <span v-if="!text.match">{{ text.text }}</span>
    <mark v-else>{{ text.text }}</mark>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  text: string;
  textToHighlight: string;
}

interface TextSegment {
  text: string;
  match: boolean;
}

const props = defineProps<Props>();

const textSegment = computed<TextSegment[]>(() => {
  const lowerText = props.text.toLowerCase();
  const lowerHighlightText = props.textToHighlight.toLowerCase();
  if (!lowerText.includes(lowerHighlightText)) return [{ text: props.text, match: false }];

  const result: TextSegment[] = [];
  let startPos = 0;
  const regexp = new RegExp(lowerHighlightText, 'ig');
  for (const matchValue of lowerText.matchAll(regexp)) {
    if (matchValue.index === undefined) {
      console.log('matchValue.index is undefined!');
      return [{ text: props.text, match: true }];
    }
    result.push({ text: lowerText.substring(startPos, matchValue.index), match: false });
    startPos = matchValue.index;
    result.push({
      text: lowerHighlightText,
      match: true,
    });
    startPos += lowerHighlightText.length;
  }
  return result;
});
</script>
