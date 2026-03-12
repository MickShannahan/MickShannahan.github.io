<script setup lang="ts">
import defaultCover from '../assets/img/crosshair-45.svg'


defineProps({
  title: { type: String, required: true, default: 'Project' },
  coverImg: { type: URL, required: false, default: defaultCover },
  textColor: { type: String, required: false, default: 'var(--bs-light)' },
  background: { type: String, required: false, default: 'var(--bs-primary)' },
  accentBackground: { type: String, required: false, default: 'var(--bs-black)' },
  links: { type: Array, required: false },
  orientation: { type: String, default: 'left' }
})
</script>


<template>

  <article :class="[orientation]">
    <section class="corner-block">
      <img :src="coverImg" class="bg-grid-warp no-invert">
    </section>
    <section class="frame-title text-dark">
      <div :class="`${orientation == 'left' ? 'ps-4' : 'pe-4'}`">
        <!-- title -->
        <div class="">
          //:{{ title }}
        </div>
        <!-- links -->
        <div class="d-flex flex-wrap justify-content-end gap-1">
          <a v-for="link in links" :href="link.link" target="_blank"
            :class="`btn btn-${link.color} rounded-4 px-3 d-flex`"><span>{{
              link.text
            }} <i :class="`mdi ${link.icon}`"></i></span></a>
        </div>
      </div>
    </section>
    <section class="frame-spine">
      <div class="bg-light">

      </div>
    </section>
    <section class="frame-body">
      <div class="float-box "></div>
      <p class="p-2">
        <slot>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in eaque a molestias incidunt deleniti sed,
          exercitationem, minima ad eius dolor vitae animi placeat facere adipisci rem. Ab, nesciunt quod.
        </slot>
      </p>
    </section>

  </article>

</template>


<style lang="scss" scoped>
article.left {
  --frame-radius: 40px;
  display: grid;
  grid-template-columns: 100px 100px 1fr;
  grid-template-rows: 100px 100px 1fr;
}

article.right {
  --frame-radius: 40px;
  display: grid;
  grid-template-columns: 1fr 100px 100px;
  grid-template-rows: 100px 100px 1fr;
}

article.left .corner-block {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}

article.right .corner-block {
  grid-column: 2 / span 2;
  grid-row: 1 / span 2;
}

article.left .frame-title {
  grid-column: 3;
  grid-row: 1;
}

article.right .frame-title {
  grid-column: 1;
  grid-row: 1;
}

article.left .frame-spine {
  grid-column: 1;
  grid-row: 3;
}

article.right .frame-spine {
  grid-column: 3;
  grid-row: 3;
}

article.left .frame-body {
  grid-column: 2 / span 2;
  grid-row: 2 / span 2;
}

article.right .frame-body {
  grid-column: 1 / span 2;
  grid-row: 2 / span 2;
}

.corner-block {
  background-color: v-bind(background);
  border-radius: var(--frame-radius);
  padding: 1.5em;

  img {
    background-color: v-bind(accentBackground);
    background-size: 260%;
    padding: .5em;
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    border-radius: calc(var(--frame-radius) - 10px);
  }
}

.frame-title,
.frame-spine {
  background-color: v-bind(background);
}

.frame-title div {
  height: 100%;
  white-space: nowrap;
  background-color: var(--bs-light);
  display: flex;
  font-size: 44px;
  font-family: 'Sora-bold';
  align-items: center;
  justify-content: space-between;
}

article.left .frame-title div {
  border-bottom-left-radius: var(--frame-radius);
}

article.right .frame-title div {
  border-bottom-right-radius: var(--frame-radius);
}

.frame-spine div {
  height: 100%;
  width: 100%;
  background-color: var(--bs-light);
}

article.left .frame-spine div {
  border-top-right-radius: var(--frame-radius);
}

article.right .frame-spine div {
  border-top-left-radius: var(--frame-radius);
}

.frame-body {
  background-color: v-bind(background);
  border-radius: var(--frame-radius);
  color: v-bind(textColor);
  font-family: monospace;
  padding: 2em;
  min-height: 200px;
}

article.left .frame-body {
  box-shadow: 5px 5px 0px var(--bs-black);
}

article.right .frame-body {
  box-shadow: -5px 5px 0px var(--bs-black);
}

.float-box {
  // border: 1px solid var(--bs-light);
  height: 40px;
  width: 60px;
}

article.left .float-box {
  float: left;
}

article.right .float-box {
  float: right;
}

.float-left {
  float: left;
}
</style>