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
  "Artist",
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
    <div class="container">
      <section class="my-4">
        <div class="text-center">
          <img class="me-img no-invert" src="/img/portfolio-2.gif" alt="">
        </div>
        <h2 class="my-4 mb-5 font-array text-center text-primary">
          <TextBoxTyper :text="titles[currentTextIndex]" :delay-between-chars="25" />
        </h2>
      </section>

      <section class="row g-4">

        <article class="mb-5">
          <InfoWindow class="rounded rounded-4">
            <template #header>
              A little lore
            </template>
            <template #body>
              <TextBoxTyper
                :text="`Yeah I have a backstory, all great characters do! Born and raised in Boise Idaho, I came out of highschool wanting to be a Graphic Designer. I had a creative side that was hard to quell and it seemed like the perfect fit. I didn't work out, but this wasn't bad a thing, when one door closes another one opens. After a few jobs I found myself installing security systems. To my surprise this was a great outlet to my creative side. I got the opportunity to build and service many of the valley's systems with the kind of creative problem solving skills I loved to use. The time came that I decided to move on. I've always been close to computer and tech, and my journey brought me to software development. I fell in love when I took an online course in 2017 to make a small game. That passion ate away at me until I was able to attend Boise CodeWork and that passion exploded.`"
                :delay-between-chars="2" :blink="false" />
            </template>
          </InfoWindow>
        </article>
      </section>
    </div>

    <div class="bg-green py-5 mt-5">
      <div class="container">
        <section class="row p-3">
          <article class="col-lg-7">
            <h3>Where I am now</h3>
            <p>With my hunger to learn more and dive deeper into the world of software development not sated, I found
              new passion, <b>teaching</b>. Sharing the knowledge and passing those skills to others, helping them
              change
              their lives was
              an
              incredible experience. This drive to learn and teach eventually put me in the
              position of <kbd>Lead Instructor</kbd> for the very boot camp that taught me, Where I transformed the
              curriculum
              with new projects, tests, figma mocks and my own unique spin of design, humor, art and fun to engage
              students
              from week to
              1 to
              13.</p>
          </article>
          <article class="col-lg-5">
            <h3>Contact Me</h3>
            <div class="d-flex gap-2">
              <button class="btn btn-outline-dark w-100"><i class="mdi mdi-github fs-2"></i></button>
              <button class="btn btn-outline-dark w-100"><i class="mdi mdi-linkedin fs-2"></i></button>
              <button class="btn btn-outline-dark w-100"><i class="mdi mdi-email fs-2"></i></button>
            </div>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.me-img {
  width: 300px;
  aspect-ratio: 1/1;
  object-fit: cover;
  filter: saturate(.9) brightness(1);
  border-radius: 40px;
  border: 2px solid var(--bs-primary);
}

@media (min-width: 768px) {
  .me-img {
    width: 400px;
  }
}

.font-array {
  line-height: .85em;
  font-size: 3em;
}

@media (min-width: 768px) {
  .font-array {
    font-size: 4em;
  }
}

#about-me {
  // background-image: url('/img/Cups-room-hivis.png');
}
</style>