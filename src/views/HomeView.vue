<template>
  <AboutMeSection/>
  <whatIdo/>
  <ExperienceSection/>
</template>

<script>
// @ is an alias to /src
import ExperienceSection from '../components/sections/ExperienceSection.vue';
import whatIdo from '../components/sections/whatIdo.vue';
import AboutMeSection from '../components/sections/AboutMeSection.vue';


export default {
  name: 'HomeView',
  components: {
    whatIdo,
    AboutMeSection,
    ExperienceSection
  }
}
</script>
