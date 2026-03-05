<script setup>
import LoadingCrossEffect from './components/LoadingCrossEffect.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <LoadingCrossEffect />
  <header>
    <h1 class="bg-primary py-5 px-2 text-light font-satoshi m-0 fw-bold">Mick Shannahan<span
        class="large-period">.</span>
    </h1>
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
  letter-spacing: .5em;
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
