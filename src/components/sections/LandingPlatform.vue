<template>
    <div class="relative min-h-screen overflow-hidden bg-gray-900">
      <!-- Parallax background -->
      <div class="absolute inset-0 z-0 parallax">
        <img src="/images/bg_main.jpg" alt="Background" class="object-cover w-full h-full" />
      </div>
  
      <!-- tsParticles container (with custom styles) -->
      <!-- <div id="tsparticles-container">
        <ParticlesComponent
          id="tsparticles"
          :options="particlesOptions"
          class="particles-custom"
        />
      </div> -->
  
      <!-- Gradient overlay (above tsParticles) -->
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
            I am a Mechanical Engineer, a Fullstack Developer, Mobile Apps Developer, 
            Graphic Designer, Video Editor, Photographer, Saxophonist, Guitarist. I break down 
            complex concepts by showing you how to implement them in project-based courses 
            and tutorials. I love coding, yes I do it for fun sometimes 😊
          </p>
          <button class="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300">
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
  import { ParticlesComponent } from "vue3-particles";
  import { loadFull } from 'tsparticles';
  import Typewriter from 'typewriter-effect/dist/core';
  
  export default {
    name: 'LandingPage',
    components: {
      ParticlesComponent
    },
    setup() {
      const typewriter = ref(null);
      const particlesOptions = {
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ff8c00",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      };
  
      onMounted(() => {
        // Load full tsParticles
        loadFull(tsParticles).then(() => {
          console.log("tsParticles fully loaded");
        });
  
        new Typewriter(typewriter.value, {
          strings: ['an Engineer', 'a Developer', 'a Designer', 'a Video Editor', 'a Photographer'],
          autoStart: true,
          loop: true,
        });
      });
  
      return {
        typewriter,
        particlesOptions
      };
    }
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  body {
    font-family: 'Poppins', sans-serif;
  }
  
  .parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  #tsparticles-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: initial;
  }
  
  .particles-custom canvas {
    width: 100% !important;
    height: 100% !important;
    position: fixed !important;
    z-index: 0 !important;
    top: 0;
    left: 0;
  }
  </style>
  