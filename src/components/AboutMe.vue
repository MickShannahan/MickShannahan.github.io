<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import TextBoxTyper from './TextBoxTyper.vue';
import { logger } from '@/utils/Logger';
import InfoWindow from './InfoWindow.vue';

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
  <div id="about-me">
    <section class="my-4">
      <h2 class="font-array text-center text-primary">
        <TextBoxTyper :text="titles[currentTextIndex]" :delay-between-chars="25" />
      </h2>
    </section>

    <section>
      <InfoWindow class="rounded rounded-4">
        <template #header>
          A little about me
        </template>
        <template #body>
          <TextBoxTyper
            :text="`Yeah I have a backstory, all great characters do! Born and raised in Boise, I came out of highschool wanting to be a Graphic Designer. I had a creative side that was hard to quell and it seemed like the perfect fit. I didn't work out, but this wasn't bad a thing, when one door closes another one opens. After a few jobs I found myself installing security systems. To my surprise this was a great outlet to my creative side. I got the opportunity to build and service many of the valley's systems with the kind of creative problem solving skills I loved to use. The time came that I decided to move on. I've always been close to computer and tech, and my journey brought me to software development. I fell in love when I took an online course in 2017 to make a small game. That passion ate away at me until I was able to make the move and take the Boise Code Works, BootCamp course. I am now striving to further my career with software development and continue learning`"
            :delay-between-chars="5" />
        </template>
      </InfoWindow>
    </section>
  </div>
</template>


<style lang="scss" scoped>
h2 {
  font-size: 4em;
}

#about-me {
  // background-image: url('/img/Cups-room-iso-2color.png');
}
</style>