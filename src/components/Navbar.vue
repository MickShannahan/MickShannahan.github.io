<script setup>


</script>

<template>
  <nav class="bg-primary d-none d-md-flex flex-column justify-content-between pb-3">
    <section class="d-flex flex-column px-2 sticky-top">
      <div>

      </div>

      <section class="d-flex flex-column gap-2 align-items-center justify-content-end">
        <a href="https://github.com/MickShannahan" target="_blank" class="btn btn-outline-light"><i
            class="mdi mdi-github fs-2"></i></a>
        <a href="https://www.linkedin.com/in/mick-shannahan-5320171b7/" target="_blank" class="btn btn-outline-light"><i
            class="mdi mdi-linkedin fs-2"></i></a>
        <a href="mailto:mickshanny@gmail.com" class="btn btn-outline-light"><i class="mdi mdi-email fs-2"></i></a>
      </section>
    </section>
  </nav>

  <nav class="bg-primary d-flex d-md-none">

  </nav>
</template>

<style lang="scss" scoped>
nav section {
  top: 1em;
  height: calc(100dvh - 140px);
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
