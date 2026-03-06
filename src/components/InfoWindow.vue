<script setup>

</script>


<template>
  <section class="info-window">
    <div class="info-header px-3 p-1 d-flex justify-content-between">
      <slot name="header"></slot>
      <i class="mdi mdi-close"></i>
    </div>
    <div class="info-body p-3">
      <slot name="body"></slot>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.info-window {
  border: 1px solid var(--bs-light);
  background-color: var(--bs-primary);
  color: var(--bs-light);
  box-shadow: 5px 5px var(--bs-dark);
}

.info-header {
  font-family: monospace;
  font-weight: bold;
  border-bottom: 1px solid var(--bs-light);
}

.info-body {
  font-family: monospace;
}
</style>