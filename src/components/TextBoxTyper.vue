<script setup>
import { delay } from '../utils/Timer.js';
import { onMounted, ref, watch, watchEffect } from 'vue';

const { text, delayBetweenChars = 100, showCursor = true, blink = true } = defineProps({
  text: String,
  delayBetweenChars: Number,
  showCursor: Boolean,
  blink: Boolean
})

const currentText = ref('')
const currentlyTyping = ref(false)

watch(() => text, () => {
  if (!text) return currentText.value = ''
  currentText.value = ''
  typeOutText(text, delayBetweenChars)
}, { immediate: true })

async function typeOutText(text = '', delayBetweenChars = .1) {
  let textToType = text.split('')
  currentlyTyping.value = true
  while (textToType.length) {
    let char = textToType.shift()
    currentText.value += char
    await delay(delayBetweenChars)
  }
  currentlyTyping.value = false
}
</script>


<template>
  <div>{{ currentText }}<span :class="`${currentlyTyping ? 'cursor' : blink ? 'cursor blink' : ''}`"></span></div>
</template>


<style lang="scss" scoped>
.cursor {
  color: var(--bs-warning);
  margin-left: -.75ch;
  background-color: var(--bs-warning);
  width: .75ch;
  height: 1em;
  display: inline-block;
  mix-blend-mode: difference;

  &.blink {
    animation: blinky .8s infinite steps(2);
    mix-blend-mode: difference;
  }
}

@keyframes blinky {

  0%,
  49% {
    opacity: 0;
  }

  50%,
  100% {
    opacity: 1;
  }
}
</style>