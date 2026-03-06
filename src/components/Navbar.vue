<script setup>
import { ref, watch } from 'vue';
import { loadState, saveState } from '../utils/Store.js';

const theme = ref(loadState('theme') || 'light')

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
}

watch(theme, () => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}, { immediate: true })

</script>

<template>
  <nav class="bg-primary">
    <div class="d-flex flex-column px-2 sticky-top">
      <img class="rounded rounded-4 me-img no-invert" src="/img/portfolio-2.gif" alt="">
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.me-img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  filter: saturate(0) brightness(.9);
}

a {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
