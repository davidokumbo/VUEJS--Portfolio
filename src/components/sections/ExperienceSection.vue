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
    company: "Cloud Rebus Solutions",
    description: "A digital agency focused on Web, Bulk SMS, Graphic Design, Web and App Development, Promotional and Gift Items, Branding and Printing. Successfully deploy RESTFUL and efficient back-end WebAPI solutions for a Bulk SMS system."
  },
  {
    period: "2021 - 2024",
    title: "Software Engineer",
    company: "CTC Africa",
    description: "Volunteered as a Web Developer at Community Transformation Centre Africa. Came up with the CTC cofoam and brand Manual. Designed CTC Africa new Developed CTC Africa Website, Integrated Payment Gateways for seamless donations."
  },
  {
    period: "2022 - 2023",
    title: "Webmaster",
    company: "Daystar University",
    description: "Successfully ensured Daystar websites are up to date, running and user interactive, transformed the webpages from static HTML to dynamic pages. Used GitHub as version control to track and manage all web applications."
  },
  {
    period: "2018 - 2019",
    title: "Junior Web Developer",
    company: "Tech Startup X",
    description: "Assisted in the development of responsive web applications using modern JavaScript frameworks. Collaborated with the design team to implement user-friendly interfaces."
  },
  {
    period: "2017 - 2018",
    title: "IT Intern",
    company: "Global Corp Y",
    description: "Provided technical support to employees, assisted in network maintenance, and contributed to small-scale web projects for internal use."
  }
])

const education = ref([
  {
    period: "2024 - Now",
    degree: "Diploma in Cyber Security and Ethical Hacking",
    institution: "Institute of Software Technologies (IST)",
    description: "Institute of Software Technologies is a fully-fledged Kenyan institution registered with the Ministry of Higher Education, Science, and Technology (MOHEST), to provide Technical, Vocational, and Entrepreneurship Training (TVET) Institution No. MOH/IST/PRIV/TVC/011."
  },
  {
    period: "2022 - 2022",
    degree: "ALX-T Cloud Developer",
    institution: "ALX-T Cloud Developer Nanodegree Program",
    description: "The ALX Cloud Developer Programme, in partnership with Udacity, offers the fundamentals of cloud development and deployment with Amazon Web Services (AWS). This programme offers fully-funded scholarships dedicated to training African youth."
  },
  {
    period: "2021 - 2022",
    degree: "Software Engineering (12 months course)",
    institution: "Africa Leadership X (ALX) in Collaboration with Holberton School",
    description: "The ALX Software Engineering Programme full-time requires learners to commit to 70 hours of learning per week to successfully complete the coursework. The Programme prepares learner with the sought after professional skills for today's digital workforce."
  },
  {
    period: "2016 - 2020",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    description: "Comprehensive study of computer science fundamentals, including data structures, algorithms, software engineering principles, and database management systems."
  },
  {
    period: "2015 - 2016",
    degree: "Certificate in Web Development",
    institution: "Online Learning Platform",
    description: "Self-paced online course covering HTML, CSS, JavaScript, and basic backend technologies. Completed several projects showcasing web development skills."
  }
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