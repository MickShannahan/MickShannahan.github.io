<script setup>

function randomDelay(i = 0) {
  return ((i * .5) * (Math.random() * 1.2) * .06) + .2
}

</script>


<template>
  <div class="loading-grid">
    <div v-for="i in 100" :key="i" class="loading-cross" :style="{ '--delay': randomDelay(i) + 's' }"></div>
  </div>
  <div class="loading-grid">
    <div v-for="i in 100" :key="i" class="loading-square" :style="{ '--delay': randomDelay(i) + 's' }"></div>
  </div>
</template>


<style lang="scss" scoped>
.cross-bg {
  width: 100%;
  height: 100vh;
  background: var(--bs-primary);
  overflow: hidden;
}

.loading-grid {
  pointer-events: none;
  overflow: hidden;
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 100dvw;
  height: 100dvh;
  z-index: 1000;
  ;
}

.loading-square {
  background: var(--bs-primary);
  animation: fadeOut 0.5s ease-out forwards;
  animation-delay: var(--delay);
  aspect-ratio: 1/1;
}

.loading-cross {
  background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1500 1500" xmlns="http://www.w3.org/2000/svg"><path d="M512.5 37C512.5 16.5655 495.935 0 475.5 0H402.5C382.065 0 365.5 16.5655 365.5 37V328.5C365.5 348.935 348.935 365.5 328.5 365.5H37C16.5655 365.5 4.08415e-06 382.065 3.19093e-06 402.5L0 475.5C-8.93218e-07 495.934 16.5655 512.5 37 512.5H328.5C348.935 512.5 365.5 529.065 365.5 549.5V841C365.5 861.435 382.065 878 402.5 878H475.5C495.935 878 512.5 861.435 512.5 841V549.5C512.5 529.065 529.065 512.5 549.5 512.5H841C861.435 512.5 878 495.935 878 475.5V402.5C878 382.065 861.435 365.5 841 365.5H549.5C529.065 365.5 512.5 348.935 512.5 328.5V37Z" fill="%230e6efd"/></svg>');
  background-size: 10px 10px;
  background-position: center;
  animation: fadeOut 0.8s ease-out forwards;
  animation-delay: var(--delay);
  aspect-ratio: 1/1;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>