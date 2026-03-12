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
import codeworksLogo from '../assets/img/codeworks-course-logo.png'
import noterLogo from '../assets/img/noter-logo.svg'
import ProjectFrame from './ProjectFrame.vue'
import ImageCarousel from './ImageCarousel.vue'
import { ProjectLink } from '@/models/ProjectLink.js'



</script>


<template>
  <section id="featured-projects" class="container my-3 mb-4">
    <h2 class="text-center fs-1"><i class="mdi mdi-close"></i> Featured Projects <i class="mdi mdi-close"></i></h2>
  </section>

  <div class="container my-3">
    <!-- SECTION CUPS -->
    <div class="my-5">
      <ProjectFrame title="C.U.P.S" :cover-img="cupsLogo" orientation="left" background="var(--bs-dark)"
        accentBackground="var(--bs-primary)" :links="[
          new ProjectLink('mdi-arrow-top-right-thick', 'try it', 'primary', 'https://catsups.herokuapp.com/#/'),
          new ProjectLink('mdi-github', 'git repo', 'dark', 'https://github.com/MickShannahan/cat-query-shipping')
        ]">
        <p>The <kbd class="bg-primary">Cat's Universal Postal Service</kbd> Web Game developed wholly by me as a way to
          give
          people a fun
          and quirky
          way to learn how to Query and API through url queries and MongoDb filter objects. User's are given corrupted
          data and have to craft more and more precise queries to refine their searches from 10s of thousands of
          shipments down to the one they are looking for.</p>
        <p>As a passion project of mine, I continued to add in more features as time when on. A leaderboard,
          achievements, a shop with computer parts and collectables, extra challenging glitched shipments. All of the
          code, art, characters, dialog and secrets are of my creation all to create a fun leaning experience in a
          future ran by bureaucratic cats in space.</p>

        <ImageCarousel carouselId="cups-carousel" :images="[cups1, cups4, cups3, cups2]" bgColor="primary" />
      </ProjectFrame>
    </div>

    <!-- SECTION CODEWORKS COURSE -->
    <div class="my-5">
      <ProjectFrame title="CodeWorks Course Tool" :cover-img="codeworksLogo" orientation="right"
        background="var(--bs-green)" textColor="var(--bs-dark)" accentBackground="var(--bs-light)" :links="[
          new ProjectLink('mdi-arrow-top-right-thick', 'Web Foundations', 'primary', 'https://course.codeworksacademy.com/web-foundations/'),
          new ProjectLink('mdi-space-invaders', 'Unity Launchpad', 'purple', 'https://course.codeworksacademy.com/unity-launchpad/'),
          new ProjectLink('mdi-github', 'git repo', 'dark', 'https://github.com/codeworksacademy/codeworksacademy')
        ]">
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

        <ImageCarousel carouselId="codeworks-carousel"
          :images="[codeworks1, codeworks2, codeworks3, codeworks4, codeworks5]" bgColor="purple" />
      </ProjectFrame>
    </div>

    <!-- SECTION NOTER -->
    <div class="my-5">
      <ProjectFrame title="Noter" :cover-img="noterLogo" orientation="left" background="var(--bs-dark)"
        accentBackground="var(--bs-light)" :links="[
          new ProjectLink('mdi-arrow-top-right-thick', 'Live Site', 'primary', 'https://cw-cloud-demo-d0aecab0e751.herokuapp.com/#/'),
          new ProjectLink('mdi-figma', 'Figma Mock', 'pink', 'https://www.figma.com/design/GTKQbvx6AeinXwQUzmkNDV/Dugeon-Noter?node-id=3-819&t=zO3Y6nBmCxpUH3p6-0'),
          new ProjectLink('mdi-rocket', 'Postman Tests', 'orange', 'https://codeworksacademy.postman.co/workspace/%F0%9F%8F%81Fs-Checkpoints~4b386cf9-42e3-4563-94eb-67e9778ef2fe/collection/23988459-eba039c4-e35f-49a7-8ee4-94a099e830bc?action=share&creator=23988459'),
          new ProjectLink('mdi-github', 'git repo', 'dark', 'https://github.com/MickShannahan/dungeon_noter')
        ]">
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

        <ImageCarousel carouselId="noter-carousel" :images="[noter1, noter2, noter3, noter4, noter5]" bgColor="dark" />
      </ProjectFrame>
    </div>

  </div>
</template>
