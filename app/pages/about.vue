<script setup lang="ts">
// About页面SEO配置
useSeoMeta({
  title: 'About BSB Transport Australia | Professional Container Transport Company',
  description: 'Learn about BSB Transport Australia - a leading container transport company with CoR certification, MSIC compliance, comprehensive insurance, and professional service standards.',
  keywords: 'about BSB transport, container transport company australia, CoR certification, MSIC compliance, transport insurance, BSB transport history',
  ogImage: 'https://www.bsbtransport.com.au/images/about/about.png',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' }
]

// 公司信息
const companyInfo = {
  founded: '2015',
  containers: '100000+',
  vehicles: '30+',
  coverage: 'Australia Wide',
  certifications: ['CoR', 'MSIC', 'ISO 9001', 'Chain of Responsibility']
}

// 公司历史里程碑
const milestones = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'BSB Transport Australia was established with a vision to provide professional container transport services.',
    icon: 'i-lucide-rocket'
  },
  {
    year: '2017',
    title: 'Fleet Expansion',
    description: 'Expanded fleet operations and established stronger presence in key Australian markets.',
    icon: 'i-lucide-truck'
  },
  {
    year: '2020',
    title: 'VIC Depot Expansion',
    description: 'Opened new depot in Victoria to better serve our customers across the state.',
    icon: 'i-lucide-map'
  },
  {
    year: '2023',
    title: 'Technology Department',
    description: 'Established dedicated technology department to drive innovation and digital transformation.',
    icon: 'i-lucide-monitor'
  },
  {
    year: '2025',
    title: 'Digital Transformation',
    description: 'Launched comprehensive digital platforms for enhanced customer experience and operational efficiency.',
    icon: 'i-lucide-smartphone'
  }
]

// 认证和合规
const certifications = [
  {
    name: 'Chain of Responsibility (CoR)',
    description: 'Full compliance with Chain of Responsibility legislation ensuring safety and accountability.',
    icon: 'i-lucide-shield-check',
    color: 'green'
  },
  {
    name: 'MSIC Compliance',
    description: 'Maritime Security Identification Card compliance for port operations.',
    icon: 'i-lucide-anchor',
    color: 'blue'
  },
  {
    name: 'ISO 9001:2015',
    description: 'Quality management system certification for consistent service delivery.',
    icon: 'i-lucide-award',
    color: 'purple'
  },
  {
    name: 'Comprehensive Insurance',
    description: 'Full insurance coverage including public liability and cargo insurance.',
    icon: 'i-lucide-file-check',
    color: 'orange'
  }
]

// 核心价值观
const values = [
  {
    title: 'Safety First',
    description: 'Safety is our top priority in all operations and decision-making processes.',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Reliability',
    description: 'Consistent, dependable service delivery that our customers can count on.',
    icon: 'i-lucide-clock'
  },
  {
    title: 'Professionalism',
    description: 'Maintaining the highest standards of professional conduct and service.',
    icon: 'i-lucide-users'
  },
  {
    title: 'Innovation',
    description: 'Continuously improving our services through technology and innovation, with dedicated focus on research and development.',
    icon: 'i-lucide-lightbulb'
  },
  {
    title: 'Customer Focus',
    description: 'Putting our customers at the center of everything we do.',
    icon: 'i-lucide-heart'
  },
  {
    title: 'Sustainability',
    description: 'Commitment to environmental responsibility and sustainable practices.',
    icon: 'i-lucide-leaf'
  }
]

// 团队部门
const departments = [
  {
    name: 'Operations',
    description: 'Comprehensive 24/7 operational coverage ensuring continuous service delivery and fleet management excellence.',
    icon: 'i-lucide-settings'
  },
  {
    name: 'Customer Service',
    description: 'Dedicated 24/7 customer support team providing round-the-clock assistance and relationship management.',
    icon: 'i-lucide-headphones'
  },
  {
    name: 'Safety & Compliance',
    description: 'Comprehensive safety protocols, training programs, and regulatory compliance management.',
    icon: 'i-lucide-shield-check'
  },
  {
    name: 'Technology',
    description: 'Proactive innovation and digital transformation initiatives driving operational efficiency and customer experience.',
    icon: 'i-lucide-monitor'
  },
  {
    name: 'Finance & Admin',
    description: 'Automated financial management systems and streamlined administrative processes for operational excellence.',
    icon: 'i-lucide-calculator'
  },
  {
    name: 'Maintenance',
    description: 'Comprehensive and professional fleet maintenance programs ensuring optimal vehicle performance and reliability.',
    icon: 'i-lucide-wrench'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Breadcrumb Navigation -->
    <UContainer class="py-4">
      <UBreadcrumb :links="breadcrumbs" />
    </UContainer>

    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation Placeholder -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-800 dark:to-indigo-800 h-full w-full"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About BSB Transport Australia
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Leading container transport company with over 10 years of experience in providing 
              professional, safe, and reliable transport services across Australia.
            </p>
            
            <!-- Company Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">{{ companyInfo.founded }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">Founded</div>
              </div>
              <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div class="text-2xl font-bold text-green-600 dark:text-green-400">{{ companyInfo.containers }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">Containers Delivered</div>
              </div>
              <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">{{ companyInfo.vehicles }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">Vehicles</div>
              </div>
              <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div class="text-2xl font-bold text-orange-600 dark:text-orange-400">{{ companyInfo.coverage }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">Coverage</div>
              </div>
            </div>
          </div>
          
          <!-- Hero Video -->
          <div class="relative">
            <div class="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
              <video 
                src="/videos/about.mp4" 
                autoplay
                muted
                loop
                playsinline
                preload="auto"
                class="w-full h-full object-cover"
              >
                您的浏览器不支持视频播放
              </video>
              <!-- Video Overlay for better text readability if needed -->
              <div class="absolute inset-0 bg-black/10"></div>
            </div>
            <!-- Floating Animation Elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Company History Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Journey
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From humble beginnings to becoming a leading container transport company in Australia
          </p>
        </div>

        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 hidden lg:block"></div>
          
          <div class="space-y-12">
            <div
              v-for="(milestone, index) in milestones"
              :key="milestone.year"
              class="relative flex items-center"
              :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
            >
              <!-- Timeline Dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10 hidden lg:block"></div>
              
              <div class="w-full lg:w-1/2" :class="index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'">
                <UCard class="group hover:shadow-xl transition-all duration-300">
                  <template #header>
                    <div class="flex items-center">
                      <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                        <UIcon :name="milestone.icon" class="text-xl text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ milestone.year }}</h3>
                        <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400">{{ milestone.title }}</h4>
                      </div>
                    </div>
                  </template>
                  
                  <div>
                    <p class="text-gray-600 dark:text-gray-300">{{ milestone.description }}</p>
                  </div>
                </UCard>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Certifications Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Compliance
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Maintaining the highest standards of certification and regulatory compliance
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UCard
            v-for="cert in certifications"
            :key="cert.name"
            class="group hover:shadow-xl transition-all duration-300 text-center"
          >
            <template #header>
              <div class="text-center">
                <div class="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="cert.icon" class="text-2xl text-gray-600 dark:text-gray-400" />
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {{ cert.name }}
                </h3>
              </div>
            </template>

            <div>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                {{ cert.description }}
              </p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Values Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The principles that guide our operations and define our company culture
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard
            v-for="value in values"
            :key="value.title"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="value.icon" class="text-2xl text-green-600 dark:text-green-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  {{ value.title }}
                </h3>
              </div>
            </template>

            <div>
              <p class="text-gray-600 dark:text-gray-300">
                {{ value.description }}
              </p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Team
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dedicated professionals working together to deliver exceptional service
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard
            v-for="dept in departments"
            :key="dept.name"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="dept.icon" class="text-2xl text-purple-600 dark:text-purple-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ dept.name }}
                </h3>
              </div>
            </template>

            <div>
              <p class="text-gray-600 dark:text-gray-300">
                {{ dept.description }}
              </p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Mission Statement Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <UContainer>
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p class="text-xl mb-8 opacity-90">
            To provide safe, reliable, and professional container transport services that exceed 
            customer expectations while maintaining the highest standards of safety, compliance, 
            and environmental responsibility.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <UIcon name="i-lucide-target" class="text-4xl mb-4 opacity-80" />
              <h3 class="text-xl font-bold mb-2">Our Vision</h3>
              <p class="opacity-90">To be Australia's leading container transport company</p>
            </div>
            
            <div class="text-center">
              <UIcon name="i-lucide-heart" class="text-4xl mb-4 opacity-80" />
              <h3 class="text-xl font-bold mb-2">Our Purpose</h3>
              <p class="opacity-90">Connecting businesses through reliable transport solutions</p>
            </div>
            
            <div class="text-center">
              <UIcon name="i-lucide-star" class="text-4xl mb-4 opacity-80" />
              <h3 class="text-xl font-bold mb-2">Our Promise</h3>
              <p class="opacity-90">Excellence in every delivery, every time</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Partner with BSB Transport
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Experience the difference of working with a professional, certified, and reliable transport partner
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="primary" to="/quote">
              Get Quote Now
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="xl" variant="outline" to="/contact">
              Contact Us
              <template #trailing>
                <UIcon name="i-lucide-phone" />
              </template>
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
