<script setup>
defineProps({
  carouselId: { type: String, required: true },
  images: { type: Array, required: true },
  bgColor: { type: String, required: true }
})
</script>

<template>
  <section class="mt-4">
    <div :id="carouselId" class="carousel slide">
      <div class="carousel-indicators">
        <button v-for="(image, index) in images" :key="index" type="button" :data-bs-target="`#${carouselId}`"
          :data-bs-slide-to="index" class="bg-green" :class="{ active: index === 0 }"
          :aria-current="index === 0"></button>
      </div>
      <div class="carousel-inner rounded rounded-5">
        <div v-for="(image, index) in images" :key="index"
          :class="['carousel-item', 'bg-grid-warp', `bg-${bgColor}`, { active: index === 0 }]">
          <img :src="image" class="d-block w-100 no-invert" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="prev">
        <i class="mdi mdi-arrow-left-thick fs-1 bg-dark rounded text-green border border-green"></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="next">
        <i class="mdi mdi-arrow-right-thick fs-1 bg-dark rounded text-green border border-green"></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.carousel-item img {
  max-height: 600px;
  object-fit: contain;
}
</style>
