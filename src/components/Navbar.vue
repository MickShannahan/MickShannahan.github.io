<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const scrollAmount = 140
const scrolled = ref(window.scrollY > scrollAmount)

function onScroll() {
  scrolled.value = window.scrollY > scrollAmount
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})


</script>

<template>
  <nav class="d-none d-md-flex flex-column justify-content-between align-items-center sticky-top" :class="{ scrolled }">
    <section :style="`opacity: ${scrolled ? 1 : 0}`" class="hidden-name">
      <div class="px-2 pb-2">
        <div>Mick</div>
        <div>Shanny</div>
      </div>
      <div class="px-2 mb-3">
        <img src="/public/img/portfolio-2.gif" class="nav-bar-img rounded rounded-4" alt="picture of me, mick">
      </div>
    </section>

    <section class="text-center">
      <div>
        <a href="" target="_blank" class="btn btn-outline-light"><i class="mdi mdi-github fs-2"></i></a>
      </div>
    </section>


    <section class="d-flex flex-column justify-content-center gap-2">
      <div>
        <a href="https://www.linkedin.com/in/mick-shannahan-5320171b7/" target="_blank" class="btn btn-outline-light"><i
            class="mdi mdi-linkedin fs-2"></i></a>
      </div>
      <div>
        <a href="https://github.com/MickShannahan" target="_blank" class="btn btn-outline-light"><i
            class="mdi mdi-github fs-2"></i></a>
      </div>
      <div>
        <a href="mailto:mickshanny@gmail.com" class="btn btn-outline-light"><i class="mdi mdi-email fs-2"></i></a>
      </div>
    </section>

  </nav>

  <button class="btn btn-primary fs-1 mobile-nav-fab d-md-none d-block rounded-4 border border-primary"><i
      class="mdi mdi-menu" data-bs-toggle="offcanvas" data-bs-target="#mobile-nav"></i>
  </button>
  <div class="offcanvas offcanvas-end" id="mobile-nav">
    <div class="offcanvas-header text-bg-primary d-flex justify-content-end">
      <button class="btn" data-bs-dismiss="offcanvas">
        <i class="text-light mdi mdi-close fs-1"></i>
      </button>
    </div>
    <div class="offcanvas-body text-bg-primary d-flex flex-column justify-content-center align-items-center gap-5">
      <div>
        <a href="" class="btn">one</a>
      </div>
      <div>
        <a href="" class="btn">two</a>
      </div>
      <div>
        <a href="" class="btn">three</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
nav {
  max-height: 100dvh;
  margin-top: -140px;
  padding-top: 140px;
  padding-bottom: 20px;
  transition: all .2s ease;
}

nav.scrolled {
  padding-top: 180px;
}

.nav-bar-img {
  width: 100%;
}

.hidden-name {
  font-family: 'Sora-Bold';
  color: var(--bs-light);
  position: absolute;
  top: 1em;
  transition: all .2s ease;
}

.mobile-nav-fab {
  position: fixed;
  top: .25em;
  right: .25em;
  z-index: 200;
}


a.btn {
  text-decoration: none;
  height: 60px;
  width: 60px;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  color: var(--bs-light);
  font-family: 'Sora-Regular';
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.offcanvas {
  width: 100%;
}
</style>
