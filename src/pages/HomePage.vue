<script setup>
import AboutMe from '@/components/AboutMe.vue';
import Experience from '@/components/Experience.vue';
import FeaturedProjects from '@/components/FeaturedProjects.vue';
import SmallProjects from '@/components/SmallProjects.vue';

import giantArrow from '../assets/img/giantArrow.svg'



</script>

<template>
  <div class=" my-5">
    <AboutMe />
  </div>
  <div class=" my-5">
    <FeaturedProjects />
  </div>
  <!-- <div class="my-5">
    <SmallProjects />
  </div> -->
  <div class="my-5">
    <Experience />
  </div>
  <div class="my-5">
    <div class="container">
      <div class="arrow-wrapper">
        <div class="contact text-light font-array fw-bold">
          CONTACT ME!!
        </div>
        <div class="my-3">
          <img height="300" :src="giantArrow" alt="giant arrow pointing left">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.arrow-wrapper {
  position: relative;
}

.contact {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 5em;
  letter-spacing: -2px;
  padding-left: .2em;
}
</style>
