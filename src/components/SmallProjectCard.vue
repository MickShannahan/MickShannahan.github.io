<script setup>
import defaultCover from '../assets/img/crosshair-45.svg'



defineProps({
  title: { type: String, default: 'Project' },
  bgColor: { type: String, default: 'var(--bs-dark)' },
  coverImg: { type: URL, default: defaultCover }
})
</script>


<template>
  <div class="col-md-4">
    <article class="card overflow-hidden rounded-5 border-green">
      <img :src="coverImg" class="card-img no-invert">
      <div class="card-body bg-dark text-white">
        <slot>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolor aliquam iste nisi! Accusantium
          necessitatibus vel alias minima odio dolor, officiis voluptas eos fuga, beatae magni quam libero commodi cum!
        </slot>
      </div>
    </article>
  </div>
</template>


<style lang="scss" scoped>
.card-img {
  height: 200px;
  background-color: var(--bs-dark);
  background-image: url(../assets/img/VectorGridWarpGreen.png);
  background-position: center;
  background-size: 200%;
}
</style>