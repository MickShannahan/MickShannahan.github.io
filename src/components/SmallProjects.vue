<script setup>
import SmallProjectCard from './SmallProjectCard.vue';


</script>


<template>
  <section class="container-fluid bg-black text-light py-5">
    <div class="container">
      <div class="row mb-3">
        <h2 class="text-center fs-1"><i class="mdi mdi-close"></i> Misc Projects <i class="mdi mdi-close"></i></h2>
        <p class="text-center">A highlight of some of the smaller projects i've built often experimenting with different
          technologies</p>
      </div>
      <div class="row g-3">
        <SmallProjectCard v-for="num in 6" :key="num">
          something about the project and it's tech
        </SmallProjectCard>
      </div>
      <div class="row mt-5">
        <p>To see all the random projects I work on check out my <a href="https://github.com/MickShannahan"
            target="_blank" class="text-green">github <i class="mdi mdi-github"></i></a>
        </p>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>