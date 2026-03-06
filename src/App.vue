<script setup>
import LoadingCrossEffect from './components/LoadingCrossEffect.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import twoColorOslo from './assets/img/NegaOslo-2color.gif'
import { ref } from 'vue';


const boollll = ref(false)
</script>

<template>
  <LoadingCrossEffect :show="boollll" :inverted="boollll" />
  <header class="bg-primary d-flex justify-content-between align-items-bottom">
    <div>
      <h1 class="px-2 pt-4 text-light font-satoshi m-0 fw-bold">Mick Shannahan<span class="large-period">.</span>
      </h1>
    </div>
    <img style="height: auto; width: 180px; margin-top: -20px; margin-bottom: -20px;"
      class="d-none d-md-block invert rounded rounded-2" :src="twoColorOslo" alt="">
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
main {
  border-top-left-radius: 24px;
}


h1 {
  position: relative;
  z-index: 1001;
  letter-spacing: 0;
  font-size: 5em;
}

.large-period {
  font-size: 64px;
}

.main-layout {
  flex-grow: 1;
  height: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
}
</style>
