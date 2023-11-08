import { onMounted } from 'vue';

export function useTestComposition(message: string) {
  onMounted(() => {
    console.log('Composition created');
  });

  function testComposition() {
    console.log('testComposition');
  }

  return { message, testComposition };
}
