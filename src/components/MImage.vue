<script setup>
const { imgSrc } = defineProps({
  imgSrc: String
})
</script>


<template>
  <div>
    <img :src="imgSrc" alt="">
  </div>
</template>


<style lang="scss" scoped></style>