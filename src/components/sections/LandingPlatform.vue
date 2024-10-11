<template>
  <div class="relative min-h-screen overflow-hidden bg-gray-900">
    <!-- Parallax background -->
    <div class="absolute inset-0 z-0 parallax">
      <img src="/images/bg_main.jpg" alt="Background" class="object-cover w-full h-full" />
    </div>

    <!-- Gradient overlay -->
    <div class="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900"></div>

    <!-- Content -->
    <div class="relative z-30 flex items-center min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="text-white w-full lg:w-1/2 text-left">
        <h1 class="text-sm font-medium mb-2 sm:text-base md:text-lg text-gray-300">
          Welcome to my website
        </h1>
        <h2 class="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-2">
          Hi, I'm <span class="text-orange-500">Briva Hamisi</span>
        </h2>
        <div class="text-2xl text-yellow-400 sm:text-3xl md:text-4xl h-12 mb-4">
          <span ref="typewriter"></span>
        </div>
        <p class="text-base text-gray-300 max-w-2xl mb-8">
          I am a Software Engineer, Fullstack Developer, Mobile Apps Developer, Graphic Designer, Video Editor, and Photographer. My passion lies in creating impactful digital experiences across various platforms, combining technical expertise and creativity. Whether it’s building scalable web solutions, designing intuitive mobile apps, or crafting stunning visuals, I bring a comprehensive approach to every project. Let's collaborate and bring your ideas to life! ✨
        </p>
        <button 
          class="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300"
          @click="scrollToSection('experience')"
        >
          My Resume
        </button>
      </div>
      <div class="hidden lg:block w-1/2">
        <img src="/images/Banner_Image.png" alt="Edward Muss" class="w-full h-auto object-contain" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Typewriter from 'typewriter-effect/dist/core';

export default {
  name: 'LandingPage',
  setup() {
    const typewriter = ref(null);

    const scrollToSection = (sectionRef) => {
      const sectionElement = document.getElementById(sectionRef);
      const marginTop = 32; // 32px margin

      if (sectionElement) {
        const sectionPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset - marginTop;
        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth',
        });
      }
    };

    onMounted(() => {
      new Typewriter(typewriter.value, {
        strings: ['a Software Engineer', 'a UI/UX Designer', 'a Creative Graphics Designer', 'a Video Editor', 'a Photographer'],
        autoStart: true,
        loop: true,
      });
    });

    return {
      typewriter,
      scrollToSection,
    };
  },
};
</script>

<style>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
