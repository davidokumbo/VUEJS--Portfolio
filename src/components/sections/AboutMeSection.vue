<template>
    <div class="bg-gray-900 w-full">
      <div class="text-white p-8 max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="col-span-1">
            <img src="/api/placeholder/400/500" alt="Briva Hamisi" class="w-full rounded-lg shadow-lg mb-6" />
          </div>
          <div class="col-span-2 text-left">
            <h1 class="text-3xl font-bold mb-4">About Briva Hamisi</h1>
            <h2 class="text-2xl font-semibold mb-4">Software Engineer | Full Stack Developer | Creative Designer</h2>
            <p class="text-sm text-gray-400 mb-4">
              A versatile professional with 5 years of experience across IT, media, and the entertainment industry. Adept at delivering high-quality solutions in mobile app and web development, video editing, and graphic design. 
              Proficient in a broad range of technologies and tools, including PHP, JavaScript, Java, Shell, C, Python, HTML, CSS, Bootstrap, Laravel, CodeIgniter, WordPress, and the Adobe Creative Suite (Photoshop, Illustrator, InDesign, Lightroom, Premiere Pro, After Effects). Experienced in version control systems like Subversion/SVN.
            </p>
            <p class="text-sm text-gray-400 mb-6">
              Demonstrates strong leadership in building cross-functional teams and excelling in communication, with a proven ability to make critical decisions under pressure.
            </p>
  
            <!-- Hardcoded Skill Bars -->
            <div class="space-y-4 mt-8">
              <!-- Laravel Skill -->
              <div class="mb-4">
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm font-medium text-white">Laravel</span>
                  <span class="text-sm font-medium text-white">97%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-orange-500 h-2 rounded-full relative overflow-hidden" style="width: 97%;"></div>
                </div>
              </div>
  
              <!-- JavaScript Skill -->
              <div class="mb-4">
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm font-medium text-white">JavaScript</span>
                  <span class="text-sm font-medium text-white">70%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-orange-500 h-2 rounded-full relative overflow-hidden" style="width: 70%;"></div>
                </div>
              </div>
  
              <!-- PHP Skill -->
              <div class="mb-4">
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm font-medium text-white">PHP</span>
                  <span class="text-sm font-medium text-white">98%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-orange-500 h-2 rounded-full relative overflow-hidden" style="width: 98%;"></div>
                </div>
              </div>
  
              <!-- Photoshop Skill -->
              <div class="mb-4">
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm font-medium text-white">Adobe Photoshop</span>
                  <span class="text-sm font-medium text-white">86%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-orange-500 h-2 rounded-full relative overflow-hidden" style="width: 86%;"></div>
                </div>
              </div>
  
              <!-- Illustrator Skill -->
              <div class="mb-4">
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm font-medium text-white">Adobe Illustrator</span>
                  <span class="text-sm font-medium text-white">89%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-orange-500 h-2 rounded-full relative overflow-hidden" style="width: 89%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    // No dynamic skill logic here, all data is hardcoded in the template
  </script>
  