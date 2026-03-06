<script setup>
import cups1 from '../assets/img/cups-1.png'
import cups2 from '../assets/img/cups-2.png'
import cups3 from '../assets/img/cups-3.png'
import cups4 from '../assets/img/cups-4.png'
import cupsLogo from '../assets/img/CUPS-Logo.svg'

import codeworks1 from '../assets/img/codeworks-course-1.png'
import codeworks2 from '../assets/img/codeworks-course-2.png'
import codeworks3 from '../assets/img/codeworks-course-3.png'
import codeworks4 from '../assets/img/codeworks-course-4.png'
import codeworks5 from '../assets/img/codeworks-course-5.png'

import noter1 from '../assets/img/noter-1.png'
import noter2 from '../assets/img/noter-2.png'
import noter3 from '../assets/img/noter-3.png'
import noter4 from '../assets/img/noter-4.png'
import noter5 from '../assets/img/noter-5.png'
import figmaLogo from '../assets/img/figma-logo.svg'

</script>


<template>
  <section id="featured-projects" class="container my-3 mb-4">
    <h2 class="text-center fs-1"><i class="mdi mdi-close"></i> Featured Projects <i class="mdi mdi-close"></i></h2>
  </section>

  <div class="container my-3">
    <!-- SECTION CUPS -->
    <section class="row border border-dark rounded rounded-5 p-4 hard-shadow shadow-primary mb-5">
      <div class="col-md-3">
        <img :src="cupsLogo" class="img-fluid bg-grid-warp bg-primary rounded rounded-3 p-2"
          alt="cats universal postal service logo">
      </div>

      <div class="col-md-9">
        <h3>C.U.P.S</h3>
        <p>The <kbd>Cat's Universal Postal Service</kbd> Web Game developed wholly by me as a way to give people a fun
          and quirky
          way to learn how to Query and API through url queries and MongoDb filter objects. User's are given corrupted
          data and have to craft more and more precise queries to refine their searches from 10s of thousands of
          shipments down to the one they are looking for.</p>
        <p>As a passion project of mine, I continued to add in more features as time when on. A leaderboard,
          achievements, a shop with computer parts and collectables, extra challenging glitched shipments. All of the
          code, art, characters, dialog and secrets are of my creation all to create a fun leaning experience in a
          future ran by bureaucratic cats in space.</p>
        <div class="d-flex justify-content-end gap-2">
          <a href="https://catsups.herokuapp.com/#/" target="_blank" class="btn btn-primary px-5 py-2">Try it out! <i
              class="mdi mdi-arrow-top-right-thick"></i></a>
          <a href="https://github.com/MickShannahan/cat-query-shipping" target="_blank"
            class="btn btn-dark px-5 fs-5"><i class="mdi mdi-github"></i></a>
        </div>
      </div>

      <section class="mt-4">
        <div id="cups-carousel" class="carousel slide">
          <div class="carousel-inner rounded rounded-5">
            <div class="carousel-item bg-grid-warp bg-primary active">
              <img :src="cups1" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item bg-grid-warp bg-primary">
              <img :src="cups4" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item bg-grid-warp bg-primary">
              <img :src="cups3" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item bg-grid-warp bg-primary">
              <img :src="cups2" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#cups-carousel" data-bs-slide="prev">
            <i class="mdi mdi-arrow-left-thick fs-1 bg-dark rounded text-green border border-green"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#cups-carousel" data-bs-slide="next">
            <i class="mdi mdi-arrow-right-thick fs-1 bg-dark rounded text-green border border-green"></i>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </section>

    <!-- SECTION CODEWORKS COURSE -->
    <section
      class="row bg-green border border-dark rounded rounded-5 p-4 hard-shadow reverse-shadow shadow-purple mb-5">
      <div class="col-md-9">
        <h3>CodeWorks Online Course Tool</h3>
        <p>
          Frustrated with the current online platforms we wanted to create something we had full control over. Something
          that was ours, something that we could extend with features for our students and for ourselves. We also wanted
          something that would be easy for anyone to create new courses or update old ones.
        </p>
        <p>
          Built around the <kbd>Vitepress</kbd> documentation framework. With lots of custom plugins, styles and
          wrappers, we were able to achieve our goal. A learning platform to host both written and video content.
          Project labs that could have progress completed over multiple sessions. The beautify of utilizing a
          documentation framework for this was our entire course was easily searchable through powerful indexing of our
          lessons and new courses were as easy as just writing the lessons in markdown. CodeWorks launched 5 separate
          courses under this platform.
        </p>
        <div class="d-flex gap-2">
          <a href="https://course.codeworksacademy.com/web-foundations/" target="_blank"
            class="btn btn-primary py-2 px-3">
            Web Foundations
            <i class="mdi mdi-arrow-top-right-thick"></i>
          </a>
          <a href="https://course.codeworksacademy.com/unity-launchpad/" target="_blank"
            class="btn btn-purple py-2 px-3">
            Unity Launchpad
            <i class="mdi mdi-space-invaders"></i>
          </a>
          <a href="https://github.com/codeworksacademy/codeworksacademy" target="_blank"
            class="btn btn-dark px-5 fs-5"><i class="mdi mdi-github"></i></a>
        </div>
      </div>
      <div class="col-md-3">
        <img src="../assets/img/codeworks-course-logo.png" class="img-fluid bg-purple bg-grid-warp rounded"
          alt="Lego brick logos with text for HTML CSS and JavaScript">
      </div>

      <section class="mt-4">
        <div id="codeworks-carousel" class="carousel slide">
          <div class="carousel-inner rounded rounded-5">
            <div class="carousel-item bg-grid-warp bg-purple active">
              <img :src="codeworks1" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item bg-grid-warp bg-purple">
              <img :src="codeworks2" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item bg-grid-warp bg-purple">
              <img :src="codeworks3" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item bg-grid-warp bg-purple">
              <img :src="codeworks4" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item bg-grid-warp bg-purple">
              <img :src="codeworks5" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#codeworks-carousel" data-bs-slide="prev">
            <i class="mdi mdi-arrow-left-thick fs-1 bg-dark rounded text-green border border-green"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#codeworks-carousel" data-bs-slide="next">
            <i class="mdi mdi-arrow-right-thick fs-1 bg-dark rounded text-green border border-green"></i>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </section>

    <!-- SECTION NOTER -->
    <section class="row border border-dark rounded rounded-5 p-4 hard-shadow  mb-5">
      <div class="col-md-3">
        <img height="500" width="500" src="../assets/img/noter-logo.svg" style="aspect-ratio: 1/1;"
          class="img-fluid bg-dark bg-grid-warp rounded" alt="Noter Logo">
      </div>
      <div class="col-md-9">
        <h3>Noter</h3>
        <p>
          What started as a personal project to help organize my Dungeon Master notes, turned into one of the project
          for the students of CodeWorks. There are three key technologies used in Noter to make it a worth while project
          for students. <b>File Upload</b>, <b>Cloud Functions</b> and <b>Markdown Parsing</b>.
        </p>
        <p>
          This project goes over setting up and utilizing <b>Azure</b> blob storage and cloud functions to upload image
          files as well as the <b>Marked</b> library to both write in markdown but parse it for a <i>WYSWYG</i>. This
          project came with both suite of <b>Postman</b> tests and a <b>Figma</b> mock.
        </p>

        <div class="d-flex gap-2">
          <a href="https://cw-cloud-demo-d0aecab0e751.herokuapp.com/#/" target="_blank"
            class="btn btn-primary py-2 px-3">
            Live Site
            <i class="mdi mdi-arrow-top-right-thick"></i>
          </a>
          <a href="https://www.figma.com/design/GTKQbvx6AeinXwQUzmkNDV/Dugeon-Noter?node-id=3-819&t=zO3Y6nBmCxpUH3p6-0"
            target="_blank" class="btn btn-pink py-2 px-3">
            Figma Mock
            <svg width="1.5rem" height="1.5rem" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
              style="display: inline;">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.00005 2.04999H5.52505C4.71043 2.04999 4.05005 2.71037 4.05005 3.52499C4.05005 4.33961 4.71043 4.99999 5.52505 4.99999H7.00005V2.04999ZM7.00005 1.04999H8.00005H9.47505C10.842 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5642 5.04815 10.9669 5.49999C11.5642 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.842 9.95 9.47505 9.95C8.92236 9.95 8.41198 9.76884 8.00005 9.46266V9.95L8.00005 11.425C8.00005 12.7919 6.89195 13.9 5.52505 13.9C4.15814 13.9 3.05005 12.7919 3.05005 11.425C3.05005 10.6183 3.43593 9.90184 4.03317 9.44999C3.43593 8.99814 3.05005 8.28163 3.05005 7.475C3.05005 6.66836 3.43594 5.95184 4.03319 5.5C3.43594 5.04815 3.05005 4.33163 3.05005 3.52499C3.05005 2.15808 4.15814 1.04999 5.52505 1.04999H7.00005ZM8.00005 2.04999V4.99999H9.47505C10.2897 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2897 2.04999 9.47505 2.04999H8.00005ZM5.52505 8.94998H7.00005L7.00005 7.4788L7.00005 7.475L7.00005 7.4712V6H5.52505C4.71043 6 4.05005 6.66038 4.05005 7.475C4.05005 8.28767 4.70727 8.94684 5.5192 8.94999L5.52505 8.94998ZM4.05005 11.425C4.05005 10.6123 4.70727 9.95315 5.5192 9.94999L5.52505 9.95H7.00005L7.00005 11.425C7.00005 12.2396 6.33967 12.9 5.52505 12.9C4.71043 12.9 4.05005 12.2396 4.05005 11.425ZM8.00005 7.47206C8.00164 6.65879 8.66141 6 9.47505 6C10.2897 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2897 8.95 9.47505 8.95C8.66141 8.95 8.00164 8.29121 8.00005 7.47794V7.47206Z"
                fill="currentColor" />
            </svg>
          </a>
          <a href="https://codeworksacademy.postman.co/workspace/%F0%9F%8F%81Fs-Checkpoints~4b386cf9-42e3-4563-94eb-67e9778ef2fe/collection/23988459-eba039c4-e35f-49a7-8ee4-94a099e830bc?action=share&creator=23988459"
            target="_blank" class="btn btn-orange py-2 px-3">Postman Tests<i class="mdi mdi-rocket"></i></a>
          <a href="https://github.com/MickShannahan/dungeon_noter" target="_blank" class="btn btn-dark px-5 fs-5"><i
              class="mdi mdi-github"></i></a>
        </div>
      </div>


      <section class="mt-4">
        <div id="noter-carousel" class="carousel slide">
          <div class="carousel-inner rounded rounded-5">
            <div class="carousel-item bg-grid-warp bg-dark active">
              <img :src="noter1" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item bg-grid-warp bg-dark">
              <img :src="noter2" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item bg-grid-warp bg-dark">
              <img :src="noter3" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item bg-grid-warp bg-dark">
              <img :src="noter4" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item bg-grid-warp bg-dark">
              <img :src="noter5" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#noter-carousel" data-bs-slide="prev">
            <i class="mdi mdi-arrow-left-thick fs-1 bg-dark rounded text-green border border-green"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#noter-carousel" data-bs-slide="next">
            <i class="mdi mdi-arrow-right-thick fs-1 bg-dark rounded text-green border border-green"></i>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </section>

  </div>
</template>


<style lang="scss" scoped>
.carousel-item img {
  height: 600px;
  object-fit: contain;
}
</style>