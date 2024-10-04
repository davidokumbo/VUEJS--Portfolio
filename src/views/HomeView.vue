<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <ExperienceSection/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ExperienceSection from '@/sections/ExperienceSection.vue';


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ExperienceSection
  }
}
</script>
