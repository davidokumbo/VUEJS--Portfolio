<template>
  <AboutMeSection/>
  <whatIdo/>
  <latestWork/>
  <ExperienceSection/>
</template>

<script>
// @ is an alias to /src
import ExperienceSection from '../components/sections/ExperienceSection.vue';
import whatIdo from '../components/sections/whatIdo.vue';
import AboutMeSection from '../components/sections/AboutMeSection.vue';
import latestWork from '../components/sections/latestWork.vue'


export default {
  name: 'HomeView',
  components: {
    whatIdo,
    AboutMeSection,
    ExperienceSection,
    latestWork
  }
}
</script>
