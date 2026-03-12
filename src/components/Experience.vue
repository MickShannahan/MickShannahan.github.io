<script setup>
import GithubContributions from './GithubContributions.vue'
import InfoWindow from './InfoWindow.vue';
import SkillBadge from './SkillBadge.vue';
import TextBoxTyper from './TextBoxTyper.vue';

const skills = [
  // Languages
  { icon: 'mdi-language-javascript', text: 'JavaScript' },
  { icon: 'mdi-language-python', text: 'Python' },
  { icon: 'mdi-language-html5', text: 'HTML' },
  { icon: 'mdi-language-css3', text: 'CSS' },
  { icon: 'mdi-sass', text: 'SASS' },

  // Frontend Frameworks & UI
  { icon: 'mdi-vuejs', text: 'Vue.js' },
  { icon: 'mdi-react', text: 'React' },
  { icon: 'mdi-nuxt', text: 'Nuxt' },
  { icon: 'mdi-bootstrap', text: 'Bootstrap' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg', text: 'Vitepress' },

  // Backend & Runtimes
  { icon: 'mdi-nodejs', text: 'Node.js' },
  { icon: 'mdi-server-network', text: 'Express' },

  // .NET Ecosystem
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/500px-Microsoft_.NET_logo.svg.png', text: 'DotNet' },
  { icon: 'mdi-fire', text: 'Blazor' },
  { icon: 'mdi-cellphone', text: '.NET MAUI' },

  // Game Dev
  { img: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg', text: 'Unity' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg', text: 'Godot' },

  // Databases
  { img: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg', text: 'MySql' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg', text: 'PostgreSQL' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/200px-MongoDB_Logo.svg.png', text: 'MongoDB' },

  // Cloud
  { icon: 'mdi-aws', text: 'AWS EC2' },
  { icon: 'mdi-aws', text: 'AWS S3' },
  { icon: 'mdi-microsoft-azure', text: 'Azure Web Services' },
  { icon: 'mdi-microsoft-azure', text: 'Azure Blob Storage' },
  { icon: 'mdi-microsoft-azure', text: 'Azure Functions' },

  // DevOps & Tooling
  { icon: 'mdi-docker', text: 'Docker' },
  { icon: 'mdi-git', text: 'Git' },
  { icon: 'mdi-github', text: 'Github Actions' },
  { icon: 'mdi-google-chrome', text: 'Puppeteer' },
  { icon: 'mdi-account-group', text: 'Scrum' },

  // APIs & Auth
  { icon: 'mdi-api', text: 'REST APIs' },
  { icon: 'mdi-web', text: 'Axios' },
  { icon: 'mdi-shield-lock', text: 'Auth0' },

  // Design & Docs
  { img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', text: 'Figma' },
  { icon: 'mdi-language-markdown', text: 'Markdown' },
  { icon: 'mdi-send', text: 'Postman' },

  // Patterns & Concepts
  { icon: 'mdi-layers', text: 'MVC' },
  { icon: 'mdi-eye', text: 'Observer Pattern' },
  { icon: 'mdi-state-machine', text: 'State Pattern' },
]

</script>


<template>
  <div class="container">
    <h2 class="fs-1 text-dark text-center"><i class="mdi mdi-close"></i> Experience <i class="mdi mdi-close"></i></h2>


    <section class="row justify-content-center">
      <GithubContributions />
    </section>

    <section class="d-flex flex-wrap gap-1 justify-content-center mb-4">
      <SkillBadge v-for="skill in skills" :icon="skill.icon" :img="skill.img" :key="skill.text"
        :bgColor="skill.bgColor">{{
          skill.text }}
      </SkillBadge>
    </section>

    <section class="row justify-content-center">
      <div class="col-md-9">
        <InfoWindow class="rounded rounded-4">
          <template #header>
            <span>...</span>
          </template>
          <template #body>
            <TextBoxTyper text="With 5+ years developing, and much of that time as an instructor, I've had the opportunity to work with a wide array of technologies and tools. Many of these were skills I
            learned specifically to write course material I would teach." :delay-between-chars="1" />
          </template>
        </InfoWindow>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped></style>