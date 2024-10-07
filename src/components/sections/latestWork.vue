<template>
    <div class="bg-gray-900 w-full py-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white inline-block">Latest Work</h2>
          <div class="h-1 w-20 bg-orange-500 mx-auto mt-2"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(project, index) in projects" :key="index" 
               class="relative overflow-hidden rounded-lg cursor-pointer group"
               @click="openProject(project)">
            <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
              <p class="text-sm text-gray-300">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const projects = ref([
    {
      title: 'Community Event',
      description: 'Organized and spoke at a local community gathering',
      image: '/path/to/community-event-image.jpg'
    },
    {
      title: 'CTC Africa',
      description: 'Branding project for a community transformation initiative',
      image: '/path/to/ctc-africa-logo.jpg'
    },
    {
      title: 'Product Catalog App',
      description: 'Developed a mobile app for browsing industrial products',
      image: '/path/to/product-catalog-app.jpg'
    },
    {
      title: 'Virtual Tea Party Invitation',
      description: 'Designed an invitation for an online pre-wedding event',
      image: '/path/to/virtual-tea-party-image.jpg'
    },
    {
      title: 'Mobile App UI',
      description: 'Created user interface for a media streaming application',
      image: '/path/to/mobile-app-ui.jpg'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Developed an interactive dashboard for data analysis',
      image: '/path/to/data-visualization-dashboard.jpg'
    }
  ])
  
  const openProject = (project) => {
    // Handle project click, e.g. navigate to project details page
    console.log('Opening project:', project.title)
  }
  </script>