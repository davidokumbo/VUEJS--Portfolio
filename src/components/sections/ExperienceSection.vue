<template>
  <!-- Full width wrapper for the background color -->
  <div class="bg-gray-900 w-full">
    <div class="text-white p-4 sm:p-8 max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center relative pb-4">
        My Resume
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-500"></div>
      </h1>
      <a href="https://docs.google.com/document/d/1f3Sd1ETlEa6T2D0vj2uC6mp0B8lTL7Bm00Sa30dh8yU" target="_blank">
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
    period: "2019 - Now",
    title: "Founder and CEO",
    company: "Briva Digital",
    description: "A digital agency focused on Web, Creative Graphic Design, Android App Development, Branding and UI/UX Design. Succesfully Designs various creatives and Supports wide range of Customers"
  },
  {
    period: "2024 - Now",
    title: "Backend Software Engineer",
    company: "Stanbest Group (EA) Limited",
    description: "Integrating POS (Point of Sale) systems with eTIMS(Electronic Tax Invoice Management Systems) Creating RESTFUL APIs"
  },
  {
    period: "2022 - 2024",
    title: "STEM IT",
    company: "FOCUS Kenya",
    description: "Involved in student ministry, offered mentorship and advisory support to students and Christian Union leaders. Facilitated training to students in different Universities/Colleges. Involved in FOCUS Kenya Android Students App Development, FOCUS Kenya Bookstall App Development, FOCUS Student Management System, and FOCUS Tatua Enterprise System. Involved in Creative Graphics Design for FOCUS Productions"
  },
  {
    period: "2022 - 2022",
    title: "IT Support and Graphics Designer",
    company: "ArielTech & Essert Kenya ",
    description: "Assisted in the development of responsive web applications using CMS (Content Management Systems) to implement user-friendly interfaces. Designed Creatives for print such as banners, Business cards and Company profiles "
  },
])

const education = ref([
  {
    period: "2024 - Now",
    degree: "certificate in Software Development - Scholarship",
    institution: "Power Learn project",
    description: "This course is meant to train young people from Africa, starting at a point of little experience to fairly skilled software developers ready to get into the market place and jump on the next phase of their learning at an advanced levels."
  },
  {
    period: "2022 - 2022",
    degree: "Android Development",
    institution: "Google Africa Developers Programme",
    description: "It is an initiative by Google aimed at supporting and empowering developers in Africa. It focuses on providing resources, training, and opportunities to developers to help them build high-quality applications, grow their careers, and contribute to the African tech ecosystem."
  },
  {
    period: "2018 - 2022",
    degree: "Bachelor of Science in Computer Science",
    institution: "Kenyatta University, Nairobi",
    description: "Comprehensive study of computer science fundamentals, including data structures, algorithms, software engineering principles, and database management systems."
  },
  {
    period: "2018 - 2018",
    degree: "Certificate of Computer Fundamentals",
    institution: "P.C.E.A College, Molo",
    description: "The Certificate of Computer Fundamentals Programme is a full-time course that requires learners to commit to atleast 3 hours of learning per week to successfully complete the coursework. The Programme prepares learner with the sought after professional skills for today's digital workforce."
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