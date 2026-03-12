<script setup>
defineProps({
  icon: String,
  img: URL,
  bgColor: { type: String, default: 'bg-dark' }
})
</script>


<template>
  <span class="skill-badge px-3 p-2 rounded rounded-4" :class="`text-${bgColor}`">
    <i v-if="icon" class="mdi" :class="icon"></i>
    <img v-if="img" :src="img">
    <slot></slot>
  </span>
</template>


<style lang="scss" scoped>
.skill-badge {
  font-size: 18px;
  display: flex;
  align-items: center;
  font-family: 'Sora-Regular', monospace;

  i {
    font-size: 1.2em;
    margin-right: .1em;
  }

  img {
    height: 1.2em;
    aspect-ratio: 1/1;
    object-fit: contain;
    margin-right: .1em;
  }
}
</style>