<template>
  <div>
    <!-- Project Grid -->
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
            <img :src="project.images[0]" :alt="project.title" 
                 class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
            <!-- Overlay: always visible on mobile, hover effect on larger screens -->
            <div class="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4
                        opacity-100 md:opacity-0 md:group-hover:opacity-100
                        transition-opacity duration-300">
              <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
              <p class="text-sm text-gray-300">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal -->
    <teleport to="body">
      <div v-if="showModal" 
           class="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 overflow-y-auto"
           @click.self="closeModal"> <!-- Close modal when clicking outside -->
        <div class="min-h-screen flex items-center justify-center p-4">
          <div class="bg-gray-800 w-full max-w-4xl lg:max-w-6xl xl:max-w-7xl rounded-lg overflow-hidden flex flex-col relative">
            <!-- Close button -->
            <button 
              @click="closeModal"
              class="absolute top-4 right-4 bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition-colors z-10"
              aria-label="Close Modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="flex flex-col lg:flex-row">
              <!-- Left side - Content -->
              <div class="w-full lg:w-1/2 relative">
                <div class="relative h-64 lg:h-[calc(100vh-8rem)] max-h-[800px]">
                  <!-- Video Player -->
                  <template v-if="selectedProject.videoUrl">
                    <video controls class="w-full h-full object-cover">
                      <source :src="selectedProject.videoUrl" type="video/mp4">
                      Your browser does not support the video tag.
                    </video>
                  </template>
                  <!-- Image Carousel -->
                  <template v-else>
                    <img 
                      v-for="(image, index) in selectedProject.images" 
                      :key="index"
                      :src="image" 
                      :alt="`${selectedProject.title} - Image ${index + 1}`"
                      :class="['w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500', 
                               { 'opacity-100': currentImageIndex === index, 'opacity-0': currentImageIndex !== index }]"
                    />
                  </template>
                </div>
                <div class="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-gray-900 to-transparent">
                  <!-- <h2 class="text-gray text-2xl md:text-4xl font-bold mb-2">{{ selectedProject.title }}</h2> -->
                  <!-- <p class="text-sm md:text-lg">{{ selectedProject.description }}</p> -->
                </div>
                <!-- Image navigation buttons -->
                <div v-if="!selectedProject.videoUrl && selectedProject.images.length > 1"
                     class="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
                  <button @click="prevImage" class="bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button @click="nextImage" class="bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Right side - Content -->
              <div class="w-full lg:w-1/2 p-6 md:p-8 bg-gray-800 overflow-y-auto max-h-[calc(100vh-8rem)]">
                <h2 class="text-orange-500 text-2xl md:text-3xl font-bold mb-4">{{ selectedProject.title }}</h2>
                <p class="text-gray-300 mb-6 text-sm md:text-base">{{ selectedProject.fullDescription }}</p>
                <div class="space-y-4 mb-6">
                  <div class="flex items-center">
                    <span class="text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <span class="font-semibold w-20 text-gray-400">Client:</span>
                    <span class="text-blue-400 flex-grow">{{ selectedProject.client }}</span>
                  </div>
                  <div class="h-px bg-gray-700 w-full"></div>
                  <div class="flex items-center">
                    <span class="text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                    <span class="font-semibold w-20 text-gray-400">Type:</span>
                    <span class="text-blue-400 flex-grow">{{ selectedProject.type }}</span>
                  </div>
                  <div class="h-px bg-gray-700 w-full"></div>
                  <div class="flex items-center">
                    <span class="text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span class="font-semibold w-20 text-gray-400">Year:</span>
                    <span class="flex-grow text-gray-400">{{ selectedProject.year }}</span>
                  </div>
                  <div class="h-px bg-gray-700 w-full"></div>
                  <div class="flex items-center">
                    <span class="text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                    <span class="font-semibold w-20 text-gray-400">Preview:</span>
                    <a :href="selectedProject.previewUrl" class="text-orange-500 hover:underline flex-grow">
                      More Work
                    </a>
                  </div>
                </div>
                <blockquote class="border-l-4 border-gray-700 pl-4 italic text-gray-300 text-sm md:text-base">
                  "{{ selectedProject.quote }}"
                  <footer class="text-gray-400 mt-2">— {{ selectedProject.quoteAuthor }}</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: 'Software Development',
    description: 'Your vision transformed into a seamless digital experience that engages and resonates with your audience. Every element reflects your brand’s unique identity, ensuring your message captivates and builds lasting connections with users.',
    images: ['/images/loan3.jpg', '/images/loan1.jpg', '/images/loan2.png'],
    videoUrl: null,
    fullDescription: 'This project features a sleek, minimalistic website built with Vue.js and PHP-Laravel as a backend framework and styled using Tailwind CSS, emphasizing clean aesthetics and user-friendly navigation. Real time and fast responses from a well organized backend APIs for both the web and android applications. By leveraging Vue.js for dynamic rendering and Tailwind CSS for a responsive layout, the website not only looks modern and inviting but also delivers a seamless and engaging user experience',
    client: 'Lixnet Technologies',
    type: 'Software Development',
    year: '2024',
    previewUrl: 'https://github.com/davidokumbo',
    quote: 'I take a challenge as an opportunity to learn and build from.',
    quoteAuthor: 'Jameela Jamil'
  },
  {
    title: 'Graphics Design',
    description: 'Your brand’s personality, captured in a single, powerful logo',
    //images: ['/images/mockup_1.jpg', '/images/mockup_2.jpg', '/images/mockup_3.jpg', '/images/mockup_4.jpg', '/images/mockup_5.jpg', '/images/mockup_6.jpg', '/images/mockup_7.jpg'],
    images: ['/images/1.png','/images/bg_main.jpg','/images/2.png'],
    videoUrl: null,
    fullDescription: 'Blending creativity with purpose, our graphic design transforms visuals into compelling stories that resonate. Every color, line, and layout is thoughtfully crafted to capture attention, convey meaning, and inspire action. From branding to digital and print, we create visuals that leave a lasting impression, ensuring your message is as powerful as it is beautiful.',
    client: 'Okumbo Softwares',
    type: 'Graphic',
    year: '2024',
    previewUrl: 'https://www.canva.com/design/DAGZGDQVjdA/KvNl5W_BVMVhssSNzHGK2g/edit?utm_content=DAGZGDQVjdA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    quote: 'Great design is more than just aesthetics; it’s a visual story that speaks louder than words and lingers longer than a glance',
    quoteAuthor: 'AI'
  },
  {
    title: 'Backend Software Development',
    description: 'Here comes askilled backend developer with experience in laravel and Springboot. Strong foundation in database design, API development and security based practices.',
    images: ['/images/backend2.jpg','/images/backend1.jpg','/images/backend3.jpg'],
    videoUrl: null,
    fullDescription: 'At Masterclass Software Solutions, Database Design and Backend development was the key role when working there. Fetching and validating data from Payment APIs and other third party APIs and cleaning the data, Storing in database and retrieving a summary sample of the data to be displayed in the front end side. ',
    client: 'Masterclass Software Solutions, Opposite Garden City Mall Nairobi',
    type: 'Backend Software Development',
    year: '2022 - 2023',
    previewUrl: 'https://github.com/davidokumbo',
    quote: "First, solve the problem. Then, write the code",
    quoteAuthor: 'John Johnson'
  },
])

const showModal = ref(false)
const selectedProject = ref(null)
const currentImageIndex = ref(0)

const openProject = (project) => {
  selectedProject.value = project
  currentImageIndex.value = 0
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const nextImage = () => {
  if (selectedProject.value && !selectedProject.value.videoUrl) {
    currentImageIndex.value = (currentImageIndex.value + 1) % selectedProject.value.images.length
  }
}

const prevImage = () => {
  if (selectedProject.value && !selectedProject.value.videoUrl) {
    currentImageIndex.value = (currentImageIndex.value - 1 + selectedProject.value.images.length) % selectedProject.value.images.length
  }
}
</script>