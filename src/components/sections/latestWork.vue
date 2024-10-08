<template>
  <div>
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

    <!-- Modal component -->
    <teleport to="body">
      <div v-if="showModal" class="fixed inset-0 bg-gray-900 text-white z-50 overflow-hidden">
        <div class="flex h-full mx-8 my-16">
          <!-- Left side - Image -->
          <div class="w-1/2 relative">
            <img 
              :src="selectedProject.image" 
              :alt="selectedProject.title" 
              class="w-full h-full object-cover"
            />
            <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-gray-900 to-transparent">
              <h2 class="text-4xl font-bold mb-2">{{ selectedProject.title }}</h2>
              <p class="text-lg">{{ selectedProject.description }}</p>
            </div>
          </div>

          <!-- Right side - Content -->
          <div class="w-1/2 p-8 overflow-y-auto bg-gray-800 rounded-lg">
            <h2 class="text-3xl font-bold mb-4">{{ selectedProject.title }}</h2>
            <p class="text-gray-300 mb-6">{{ selectedProject.fullDescription }}</p>
            <div class="space-y-4 mb-6">
              <div class="flex items-center">
                <span class="font-semibold w-20">Client:</span>
                <span class="text-blue-400">{{ selectedProject.client }}</span>
              </div>
              <div class="flex items-center">
                <span class="font-semibold w-20">Type:</span>
                <span class="text-blue-400">{{ selectedProject.type }}</span>
              </div>
              <div class="flex items-center">
                <span class="font-semibold w-20">Year:</span>
                <span>{{ selectedProject.year }}</span>
              </div>
              <div class="flex items-center">
                <span class="font-semibold w-20">Preview:</span>
                <a :href="selectedProject.previewUrl" class="text-orange-500 hover:underline">
                  More Work
                </a>
              </div>
            </div>
            <blockquote class="border-l-4 border-gray-700 pl-4 italic text-gray-300">
              "{{ selectedProject.quote }}"
              <footer class="text-gray-400 mt-2">— {{ selectedProject.quoteAuthor }}</footer>
            </blockquote>
          </div>
        </div>
        
        <!-- Close button -->
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const projects = ref([
  {
    title: 'Tea Party',
    description: 'A virtual tea party in preparation for a wedding',
    image: '/images/bg_main.jpg',
    fullDescription: 'A tea party is a social gathering event held in the afternoon. For centuries, many societies have cherished drinking tea with company...',
    client: 'Parsmiti',
    type: 'Graphic',
    year: '2021',
    previewUrl: 'https://example.com/more-work',
    quote: 'Before you marry a person, you should first make them use a computer with slow internet to see who they really are.',
    quoteAuthor: 'Will Ferrell'
  },
  
  // Other projects...
])

const showModal = ref(false)
const selectedProject = ref(null)

const openProject = (project) => {
  selectedProject.value = project
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

watch(showModal, (val) => {
  if (val) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})
</script>
