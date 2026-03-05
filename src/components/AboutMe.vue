<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import TextBoxTyper from './TextBoxTyper.vue';
import { logger } from '@/utils/Logger';

const titles = [
  "Full Stack Developer",
  "Instructor",
  "Graphic Designer",
  "Game Developer",
  "Dungeon Master",
  "Artist"
]

const currentTextIndex = ref(0)
/**
 * @type {string | number | NodeJS.Timeout | undefined}
 */
let intervalId;

function changeText() {
  currentTextIndex.value = (currentTextIndex.value + 1) % titles.length
  logger.log('chaning', titles[currentTextIndex.value])
}

onMounted(() => {
  intervalId = setInterval(changeText, 5000)
})

onUnmounted(() => clearInterval(intervalId))



</script>


<template>
  <Section class="my-4">
    <h2 class="font-array text-center text-primary">
      <TextBoxTyper :text="titles[currentTextIndex]" :delay-between-chars="25" />
    </h2>
  </Section>
</template>


<style lang="scss" scoped>
h2 {
  font-size: 4em;
}
</style>