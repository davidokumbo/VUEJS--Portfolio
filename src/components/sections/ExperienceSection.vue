<template>
  <!-- Full width wrapper for the background color -->
  <div class="bg-gray-900 w-full">
    <div class="text-white p-4 sm:p-8 max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center relative pb-4">
        My Resume
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-500"></div>
      </h1>
      <a href="https://docs.google.com/document/d/1u_7YY0h9Ujt-IJPkc7dvlIlDyeSVEID8HbNzvOjjOPQ/edit?usp=sharing" target="_blank">
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mb-8 block mx-auto">
          Download CV
        </button>
      </a>

      <div class="flex flex-col md:flex-row gap-8">
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-semibold mb-4 text-left">Experiences</h2>
          <div v-for="(job, index) in displayedExperiences" :key="index" class="mb-6 relative pl-10">
            <div class="absolute left-0 top-0 h-full w-px bg-orange-500"></div>
            <div class="absolute left-0 top-1 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center -ml-4 text-sm font-bold">
              {{ index + 1 }}
            </div>
            <div class="relative">
              <div class="absolute -left-10 top-0 h-8 bg-gradient-to-r from-orange-500/20 to-transparent" :style="{ width: 'calc(100% + 2.5rem)' }"></div>
              <div class="font-semibold text-orange-500 relative z-10" style="text-align: left;">{{ job.period }}</div>
            </div>
            <h3 class="text-xl font-semibold mb-1 text-left mt-2">{{ job.title }}</h3>
            <p class="text-gray-400 mb-1 text-left">{{ job.company }}</p>
            <p class="text-sm text-left">{{ job.description }}</p>
          </div>
        </div>
        
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-semibold mb-4 text-left">Education</h2>
          <div v-for="(edu, index) in displayedEducation" :key="index" class="mb-6 relative pl-10">
            <div class="absolute left-0 top-0 h-full w-px bg-orange-500"></div>
            <div class="absolute left-0 top-1 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center -ml-4 text-sm font-bold">
              {{ index + 1 }}
            </div>
            <div class="relative">
              <div class="absolute -left-10 top-0 h-8 bg-gradient-to-r from-orange-500/20 to-transparent" :style="{ width: 'calc(100% + 2.5rem)' }"></div>
              <div class="font-semibold text-orange-500 relative z-10" style="text-align: left;">{{ edu.period }}</div>
            </div>
            <h3 class="text-xl font-semibold mb-1 text-left mt-2">{{ edu.degree }}</h3>
            <p class="text-gray-400 mb-1 text-left">{{ edu.institution }}</p>
            <p class="text-sm text-left">{{ edu.description }}</p>
          </div>
        </div>
      </div>
  
      <button 
        @click="toggleLoadMore" 
        class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-8 block mx-auto"
      >
        {{ isShowingAll ? 'Show less' : 'Load more' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const experiences = ref([
  {
    period: "2022 - Now",
    title: "Founder and CEO",
    company: "Okumbo Software's",
    description: "A digital agency focused on Web, Creative Graphic Design and Android App Development. Succesfully Designs various creatives and Supports wide range of Customers"
  },
  {
    period: "2024 - Now",
    title: "ICT Internship ",
    company: "Ministry of Education Emuhaya Sub County Vihiga County",
    description: "Updating Education Government websites with data such as NEMIS, TMIS, TPAD and TMEC platforms for teachers and learners. Making sure the data captured is up to date both in the field and in the system"
  },
  {
    period: "2023",
    title: "Software Developer",
    company: "Lixnet Software Technologies",
    description: "Involved in Software development, Data migrations, Database Designs, APIs Development, Bulk SMS integrations and development of business logics"
  },
  {
    period: "2022 - 2023",
    title: "Software Developer",
    company: "Masterclass Software Solutions ",
    description: "Assisted in the development of responsive web applications to implement user-friendly interfaces. Did Data Fetching from third party APIs such as Payment, Database management and writing backend business logic"
  },
])

const education = ref([
  {
    period: "2023",
    degree: "Certificate in Oracle Cloud Data Infrastructure and Data Management",
    institution: "Oracle",
    description: "This course was meant to equip learners with cloud computing skills related to Data protection, Data structure and data magaement using Oracle Cloud Platform."
  },
  {
    period: "2018 - 2022",
    degree: "Bachelor of Science in Computer Science",
    institution: "Kenyatta University, Nairobi",
    description: "Comprehensive study of computer science fundamentals, including data structures, algorithms, software engineering principles, and database management systems."
  },

])

const itemsToShow = ref(3)
const isShowingAll = ref(false)

const displayedExperiences = computed(() => 
  isShowingAll.value ? experiences.value : experiences.value.slice(0, itemsToShow.value)
)
const displayedEducation = computed(() => 
  isShowingAll.value ? education.value : education.value.slice(0, itemsToShow.value)
)

const toggleLoadMore = () => {
  isShowingAll.value = !isShowingAll.value
  if (!isShowingAll.value) {
    itemsToShow.value = 3 // Reset to initial value when loading less
  }
}
</script>