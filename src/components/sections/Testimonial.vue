<template>
    <div class="bg-gray-900 w-full py-16">  <!-- Increased vertical padding -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-start md:space-x-16">  <!-- Increased space between columns -->
          <div class="w-full md:w-1/3 mb-12 md:mb-0">  <!-- Increased bottom margin on mobile -->
            <h2 class="text-3xl font-bold text-white mb-6 text-left">Professional Recommendations</h2>  <!-- Increased margin bottom -->
            <p class="text-gray-400 mb-8 text-left">Throughout my career, I've had the privilege of collaborating with exceptional professionals across various industries. These individuals have not only witnessed my work firsthand but have also experienced the value I bring to projects and teams. Their words reflect my commitment to excellence, innovation, and client satisfaction. I'm honored to share their recommendations, which speak to my expertise, work ethic, and the positive impact I've made in my field.</p>  <!-- Increased margin bottom -->
            <div class="text-left">
              <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded">  <!-- Increased padding -->
                View More
              </button>
            </div>
          </div>
          
          <div class="w-full md:w-2/3">
            <div class="space-y-8 relative">  <!-- Increased space between cards -->
              <div v-for="(testimonial, index) in testimonials" :key="index" 
                   :class="[
                     'bg-gray-800 rounded-lg shadow-md p-8 flex items-start space-x-6 relative overflow-hidden',
                     index === 1 ? 'md:-ml-12 z-10' : '',
                     'w-11/12' 
                   ]">
                <div :class="[
                  'absolute top-0 left-0 w-2 h-full',
                  index === 1 ? 'bg-gradient-to-b from-orange-500 to-orange-600' : 'bg-gray-700'
                ]"></div>
                <svg class="absolute top-6 right-6 w-12 h-12 text-orange-500 opacity-20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <img :src="testimonial.avatar" :alt="testimonial.name" class="w-14 h-14 rounded-full object-cover z-10"/>  <!-- Slightly increased image size -->
                <div class="flex-grow pr-10">  <!-- Increased right padding -->
                  <h3 class="font-semibold text-white text-left text-lg mb-1">{{ testimonial.name }}</h3>  <!-- Increased font size and margin bottom -->
                  <p class="text-gray-400 text-sm text-left mb-3">{{ testimonial.title }}</p>  <!-- Increased margin bottom -->
                  <p class="text-gray-400 text-base text-left leading-relaxed">{{ testimonial.comment }}</p>  <!-- Increased font size and line height -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const testimonials = ref([
    {
      name: 'Dominic Kyengo',
      title: 'Software Developer at Lixnet Technologies',
      avatar: '/images/dommy5.jpg',  // Adjusted for larger image size
      comment: "Mr Okumbo is a developer with a difference. With a keen eye on detail and purpose, he lets his coding skills speak for themselves. He pays attention to what the customer needs and delivers an outstanding work. On building softwares, he's flexible to deliver both mobile and web applications working on backend side mostly."
    },
    {
      name: 'Edwin Wesonga',
      title: 'Project Manager',
      avatar: '/images/edwin.png',
      comment: "I have had the opportunity to interact with his work over a year, and his commitment to grow and become better is admirable.  He is consistent and with a touch of his creativity and keen to details writes quality and readable code that can be read by anyone in a simple way."
    },
    {
      name: 'Nelson Kipkorir',
      title: 'Software Project Manager at Lixnet Technologies',
      avatar: '/images/nelson.png',
      comment: "I highly recommend David Okumbo for his exceptional skills as a Software Developer. David's work consistently demonstrates creativity, attention to detail, and a thorough understanding of design principles. He brings fresh, innovative ideas to every project and skillfully translates concepts into visually compelling designs. His professionalism, timely delivery, and adaptability make him a pleasure to work with, and his designs have had a positive impact on our brand. David’s expertise and dedication to quality make him a valuable asset to any team."
    }
  ])
  </script>