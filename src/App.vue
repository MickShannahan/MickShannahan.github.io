<script setup>
import LoadingCrossEffect from './components/LoadingCrossEffect.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import twoColorOslo from './assets/img/NegaOslo-2color.gif'

import { ref, watch } from 'vue';
import { loadState, saveState } from './utils/Store.js';

const theme = ref(loadState('theme') || 'light')

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
}

watch(theme, () => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  document.body.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}, { immediate: true })


const boollll = ref(false)
</script>

<template>
  <!-- <LoadingCrossEffect :show="boollll" :inverted="boollll" /> -->
  <header class="bg-primary d-flex justify-content-between align-items-bottom ">
    <div>
      <h1 class="px-2 pt-4 text-light font-satoshi m-0 fw-bold">Mick Shannahan<span class="large-period">.</span>
      </h1>
    </div>
    <img @click="toggleTheme" style="height: auto; width: 180px; margin-top: -20px; margin-bottom: -20px;"
      class="d-none d-md-block invert rounded rounded-2 selectable" :src="twoColorOslo" alt="">
  </header>
  <section class="main-layout">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </section>
  <footer class=" text-center">
  </footer>
</template>

<style lang="scss">
h1 {
  position: relative;
  z-index: 1001;
  letter-spacing: 0;
  font-size: 3em;
  line-height: .85em;
  padding-bottom: .25em;
}

@media (min-width: 768px) {
  h1 {
    font-size: 5em;
    padding-bottom: 0;
  }
}

.large-period {
  font-size: 64px;
}

.main-layout {
  flex-grow: 1;
  // display: flex;
  // grid-template-columns: 150px 1fr;
}

@media (min-width: 768px) {
  .main-layout {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 100px 1fr;
  }
}
</style>
