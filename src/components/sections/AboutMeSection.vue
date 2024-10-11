<template>
  <div class="bg-gray-900 w-full">
    <div class="text-white p-8 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div class="col-span-1 lg:col-span-2">
          <img 
            src="/images/profile.png" 
            alt="Briva Hamisi" 
            class="w-full rounded-lg shadow-lg mb-6 transition-all duration-300 ease-in-out" 
            :class="{ 'lg:h-[700px] lg:object-cover': showAllSkills }"
          />
        </div>
        <div class="col-span-1 lg:col-span-3 text-left">
          <h1 class="text-4xl font-bold mb-4">About Briva Hamisi</h1>
          <h2 class="text-2xl font-semibold mb-4">Software Engineer | Full Stack Developer | Creative Designer</h2>
          <p class="text-sm text-gray-400 mb-4">
            A versatile professional with 3 years of experience across IT, media, and the entertainment industry. Adept at delivering high-quality solutions in mobile app and web development, video editing, and graphic design. 
            Proficient in a broad range of technologies and tools, including PHP, JavaScript, Java, C, Python, HTML, CSS, ngnix, Bootstrap, Laravel, kotlin, WordPress, and the Adobe Creative Suite (Photoshop, Illustrator, InDesign, Lightroom, Premiere Pro, After Effects). Experienced in production process managers like PM2.
          </p>
          <p class="text-sm text-gray-400 mb-6">
            Demonstrates strong leadership, working with minimum supervision and excelling in communication, with a proven ability to make critical decisions and work under pressure.
          </p>

          <!-- Dynamic Skill Bars -->
          <div class="space-y-4 mt-8">
            <div v-for="(skill, index) in displayedSkills" :key="index" class="mb-4">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-medium text-white">{{ skill.name }}</span>
                <span class="text-sm font-medium text-white">{{ skill.percentage }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div 
                  class="bg-orange-500 h-2 rounded-full relative overflow-hidden" 
                  :style="{ width: `${skill.percentage}%` }"
                ></div>
              </div>
            </div>
          </div>
          
          <button 
            @click="toggleSkills" 
            class="mt-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300"
          >
            {{ showAllSkills ? 'Show Less' : 'Load More' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const skills = ref([
  { name: 'Laravel', percentage: 70 },
  { name: 'JavaScript', percentage: 70 },
  { name: 'PHP', percentage: 75 },
  { name: 'Adobe Photoshop', percentage: 94 },
  { name: 'Adobe Illustrator', percentage: 90 },
  { name: 'Vue.js', percentage: 75 },
  { name: 'React', percentage: 65 },
  { name: 'Node.js', percentage: 80 },
  { name: 'Python', percentage: 70 },
  { name: 'SQL', percentage: 85 },
  { name: 'Bootstrap', percentage: 80 },
  { name: 'Tailwind Css', percentage: 75 },
  { name: 'WordPress', percentage: 70 },
  { name: 'Kotlin', percentage: 75 },
  { name: 'Java', percentage: 65 },
])

const showAllSkills = ref(false)

const displayedSkills = computed(() => {
  return showAllSkills.value ? skills.value : skills.value.slice(0, 5)
})

const toggleSkills = () => {
  showAllSkills.value = !showAllSkills.value
}
</script>