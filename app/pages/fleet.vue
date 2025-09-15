<script setup lang="ts">
// Fleet页面SEO配置
useSeoMeta({
  title: 'Fleet & Equipment Australia | Professional Container Transport Fleet | BSB Transport',
  description: 'Modern fleet of specialized container transport vehicles including prime movers, trailers, and sideloaders. Professional maintenance and safety standards across Australia.',
  keywords: 'container transport fleet australia, prime movers, trailers, sideloaders, fleet maintenance, BSB transport',
  ogImage: 'https://www.bsbtransport.com.au/images/fleet/G480.png',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Fleet', to: '/fleet' }
]

// 车队数据
const fleetData = {
  primeMovers: [
    {
      model: 'G480 Prime Mover',
      capacity: 'Trailer Specialist',
      description: 'Specialized prime mover designed for efficient trailer operations with superior fuel economy and reliability',
      features: ['Advanced Engine Management', 'GPS Fleet Tracking', 'Driver Safety Systems', 'Comfort Cab Design'],
      image: '/images/fleet/G480.png',
      icon: 'i-lucide-truck'
    },
    {
      model: 'R620 Prime Mover',
      capacity: 'Sideloader Operations',
      description: 'Heavy-duty prime mover engineered specifically for sideloader operations with enhanced power and stability',
      features: ['High Torque Engine', 'Enhanced Stability Control', 'Professional Grade Suspension', 'Operator Comfort'],
      image: '/images/fleet/R620.png',
      icon: 'i-lucide-truck'
    },
    {
      model: 'R660 Prime Mover',
      capacity: 'Heavy Container Specialist',
      description: 'Premium prime mover built for heavy container transport with maximum power and advanced safety features',
      features: ['Maximum Power Output', 'Advanced Braking Systems', 'Load Monitoring Technology', 'Premium Driver Environment'],
      image: '/images/fleet/R660.png',
      icon: 'i-lucide-truck'
    }
  ],
  trailers: [
    {
      type: 'Light Skel Trailer',
      capacity: 'Up to 29 Tonnes',
      description: 'Lightweight skeleton trailer engineered for optimal strength-to-weight ratio with superior durability',
      features: ['High-Strength Steel Frame', 'Advanced Suspension System', 'LED Safety Lighting', 'Container Locking System'],
      image: '/images/fleet/skel-trailer.png',
      icon: 'i-lucide-trailer'
    },
    {
      type: 'Retractable Trailer',
      capacity: 'Up to 28 Tonnes',
      description: 'Innovative retractable trailer design allowing 20ft containers to be positioned at the rear for easy unloading',
      features: ['Hydraulic Retraction System', 'Precise Positioning Control', 'Heavy-Duty Construction', 'Safety Interlock System'],
      image: '/images/fleet/retractable-trailer.png',
      icon: 'i-lucide-trailer'
    },
    {
      type: 'Low Trailer',
      capacity: 'Up to 28 Tonnes',
      description: 'Specialized low-profile trailer designed for handling oversized open-top containers exceeding 3 meters in height',
      features: ['Ultra-Low Profile Design', 'Enhanced Stability Features', 'Heavy-Duty Axle System', 'Specialized Container Securing'],
      image: '/images/fleet/low-trailer.png',
      icon: 'i-lucide-trailer'
    }
  ],
  sideloaders: [
    {
      model: 'Hammar 155 Sideloader',
      capacity: 'Professional Grade',
      description: 'Industry-leading sideloader featuring advanced hydraulic systems and precision control for efficient container handling',
      features: ['Advanced Hydraulic System', 'Precision Load Control', 'Ground-Level Operations', 'Operator Safety Features'],
      image: '/images/fleet/hammar155.png',
      icon: 'i-lucide-loader'
    },
    {
      model: 'Container Jack Set',
      capacity: 'Specialized Equipment',
      description: 'Professional container jack system designed for handling non-standard container sizes including 45ft and 48ft containers',
      features: ['Four-Point Support System', 'Heavy-Duty Hydraulic Jacks', 'Precision Leveling Control', 'Safety Locking Mechanisms'],
      image: '/images/fleet/container-jack-set.png',
      icon: 'i-lucide-loader'
    }
  ]
}

// 安全标准
const safetyStandards = [
  {
    title: 'Driver Training',
    description: 'Comprehensive driver training programs including container handling and safety protocols',
    icon: 'i-lucide-graduation-cap'
  },
  {
    title: 'Vehicle Maintenance',
    description: 'Regular maintenance schedules and inspections to ensure optimal performance',
    icon: 'i-lucide-wrench'
  },
  {
    title: 'Safety Equipment',
    description: 'Advanced safety equipment including GPS tracking, cameras, and emergency systems',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Compliance',
    description: 'Full compliance with Australian transport regulations and industry standards',
    icon: 'i-lucide-file-check'
  }
]

// 维护制度
const maintenanceProgram = [
  {
    type: 'Daily Checks',
    description: 'Pre-trip inspections and daily safety checks',
    frequency: 'Every Trip',
    icon: 'i-lucide-calendar-check'
  },
  {
    type: 'Weekly Service',
    description: 'Comprehensive weekly maintenance and inspections',
    frequency: 'Weekly',
    icon: 'i-lucide-calendar-days'
  },
  {
    type: 'Monthly Overhaul',
    description: 'Detailed monthly service and component checks',
    frequency: 'Monthly',
    icon: 'i-lucide-calendar-range'
  },
  {
    type: 'Annual Certification',
    description: 'Annual safety certification and compliance verification',
    frequency: 'Annually',
    icon: 'i-lucide-award'
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
    <section class="relative py-20 bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation Placeholder -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-gray-200 to-blue-200 dark:from-gray-800 dark:to-blue-800 h-full w-full"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Fleet & Equipment
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Modern fleet of specialized container transport vehicles with professional maintenance 
            and safety standards. Reliable equipment for superior service delivery.
          </p>
          
          <!-- Fleet Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">20+</div>
              <div class="text-gray-600 dark:text-gray-300">Prime Movers</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 dark:text-green-400">30+</div>
              <div class="text-gray-600 dark:text-gray-300">Trailers</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">10+</div>
              <div class="text-gray-600 dark:text-gray-300">Sideloaders</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
              <div class="text-gray-600 dark:text-gray-300">Compliance</div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Prime Movers Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Prime Movers
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Modern prime movers equipped with advanced technology and safety features
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard
            v-for="vehicle in fleetData.primeMovers"
            :key="vehicle.model"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="relative">
                <!-- Real Image -->
                <div class="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <img 
                    :src="vehicle.image" 
                    :alt="vehicle.model"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ vehicle.model }}
                </h3>
                <p class="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {{ vehicle.capacity }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  {{ vehicle.description }}
                </p>
              </div>
            </template>

            <div class="space-y-3">
              <h4 class="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
              <ul class="space-y-2">
                <li
                  v-for="feature in vehicle.features"
                  :key="feature"
                  class="flex items-center text-sm text-gray-600 dark:text-gray-300"
                >
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2 flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Trailers Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trailers & Equipment
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Specialized trailers designed for efficient container transport operations
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard
            v-for="trailer in fleetData.trailers"
            :key="trailer.type"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="relative">
                <!-- Real Image -->
                <div class="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <img 
                    :src="trailer.image" 
                    :alt="trailer.type"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ trailer.type }}
                </h3>
                <p class="text-green-600 dark:text-green-400 font-medium mb-2">
                  {{ trailer.capacity }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  {{ trailer.description }}
                </p>
              </div>
            </template>

            <div class="space-y-3">
              <h4 class="font-semibold text-gray-900 dark:text-white">Features:</h4>
              <ul class="space-y-2">
                <li
                  v-for="feature in trailer.features"
                  :key="feature"
                  class="flex items-center text-sm text-gray-600 dark:text-gray-300"
                >
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2 flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Sideloaders Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sideloader Equipment
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced sideloader equipment for specialized container handling operations
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UCard
            v-for="sideloader in fleetData.sideloaders"
            :key="sideloader.model"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="relative">
                <!-- Real Image -->
                <div class="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <img 
                    :src="sideloader.image" 
                    :alt="sideloader.model"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ sideloader.model }}
                </h3>
                <p class="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {{ sideloader.capacity }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  {{ sideloader.description }}
                </p>
              </div>
            </template>

            <div class="space-y-3">
              <h4 class="font-semibold text-gray-900 dark:text-white">Capabilities:</h4>
              <ul class="space-y-2">
                <li
                  v-for="feature in sideloader.features"
                  :key="feature"
                  class="flex items-center text-sm text-gray-600 dark:text-gray-300"
                >
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2 flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Safety Standards Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Safety Standards & Training
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive safety programs and training to ensure the highest standards
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UCard
            v-for="standard in safetyStandards"
            :key="standard.title"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="text-center">
                <div class="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="standard.icon" class="text-2xl text-red-600 dark:text-red-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  {{ standard.title }}
                </h3>
              </div>
            </template>

            <div>
              <p class="text-gray-600 dark:text-gray-300">
                {{ standard.description }}
              </p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Maintenance Program Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Maintenance Program
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive maintenance program ensuring optimal fleet performance and reliability
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="maintenance in maintenanceProgram"
            :key="maintenance.type"
            class="text-center relative"
          >
            <!-- Connection Line -->
            <div
              v-if="maintenance.type !== 'Annual Certification'"
              class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent z-0"
              :style="{ width: 'calc(100% - 2rem)' }"
            ></div>
            
            <div class="relative z-10">
              <!-- Icon -->
              <div class="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon :name="maintenance.icon" class="text-3xl text-blue-600 dark:text-blue-400" />
              </div>
              
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {{ maintenance.type }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">
                {{ maintenance.description }}
              </p>
              <div class="text-blue-600 dark:text-blue-400 font-medium">
                {{ maintenance.frequency }}
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white mb-0">
      <UContainer>
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-3xl font-bold mb-3">
            Professional Fleet Services
          </h2>
          <p class="text-lg mb-6 opacity-90">
            Experience the reliability and efficiency of our modern container transport fleet
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <UButton size="lg" color="primary" variant="solid" to="/quote">
              Get Quote Now
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="lg" color="primary" variant="outline" to="/contact">
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
