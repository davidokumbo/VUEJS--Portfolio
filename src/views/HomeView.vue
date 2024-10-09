<template>
  <LandingPlatform/>
  <AboutMeSection/>
  <whatIdo/>
  <ExperienceStats/>
  <latestWork/>
  <ExperienceSection/>
  <ContactUs/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import ExperienceSection from '../components/sections/ExperienceSection.vue';
import whatIdo from '../components/sections/whatIdo.vue';
import AboutMeSection from '../components/sections/AboutMeSection.vue';
import latestWork from '../components/sections/latestWork.vue'
import LandingPlatform from '../components/sections/LandingPlatform.vue';
import ContactUs from '../components/sections/ContactUs.vue'
import ExperienceStats from '@/components/sections/ExperienceStats.vue';
import Footer from '../components/Footer.vue';


export default {
  name: 'HomeView',
  components: {
    whatIdo,
    AboutMeSection,
    ExperienceSection,
    latestWork,
    LandingPlatform,
    ContactUs,
    ExperienceStats,
    Footer
  }
}
</script>
