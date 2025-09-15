<script setup lang="ts">
// Coverage页面SEO配置
useSeoMeta({
  title: 'Service Coverage Australia | Container Transport Service Areas | BSB Transport',
  description: 'Comprehensive container transport service coverage across Australia. Service areas, delivery times, and additional charges for regional and remote locations.',
  keywords: 'container transport coverage australia, service areas, delivery times, regional transport, remote locations, BSB transport',
  ogImage: 'https://www.bsbtransport.com.au/images/Coverage/dm.png',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Coverage', to: '/coverage' }
]

// 服务区域数据
const serviceAreas = [
  {
    region: 'Metropolitan Areas',
    areas: ['Sydney', 'Melbourne', 'Canberra'],
    deliveryTime: 'Same Day - Next Day',
    surcharge: 'Standard Rate',
    icon: 'i-lucide-building-2',
    color: 'green'
  },
  {
    region: 'Regional Centers',
    areas: ['Newcastle', 'Wollongong', 'Geelong'],
    deliveryTime: '1-2 Days',
    surcharge: 'Special Rate',
    icon: 'lucide:map-pin',
    color: 'blue'
  },
  {
    region: 'Rural Areas',
    areas: ['Country Towns', 'Agricultural Regions', 'Mining Areas'],
    deliveryTime: '2-3 Days (Afrer Rural Tailgate Inspection done)',
    surcharge: 'Special Rate',
    icon: 'i-lucide-tree-pine',
    color: 'orange'
  },
  {
    region: 'Remote Locations',
    areas: ['Outback Areas', 'Remote Mining Sites', 'Isolated Communities'],
    deliveryTime: 'TBC',
    surcharge: 'TBC',
    icon: 'i-lucide-mountain',
    color: 'red'
  }
]

// 主要港口
const majorPorts = [
  {
    name: 'Dp Wolrd Sydney',
    location: '42 Friendship Rd, Port Botany NSW 2036',
    services: ['Port Deliver', 'Port De-hire', 'Rail Transport'],
    image: '/images/Coverage/ds.png',
    icon: 'i-lucide-anchor'
  },
  {
    name: 'Dp Wolrd Melbourne',
    location: '40 MacKenzie Rd, West Melbourne VIC 3003',
    services: ['Port Deliver', 'Port De-hire', 'Stack Run Pickup'],
    image: '/images/Coverage/dm.png',
    icon: 'i-lucide-ship'
  },
  {
    name: 'Patrick Terminals – Sydney AutoStrad',
    location: 'Gate B105A, Penrhyn Rd, Botany NSW 2019',
    services: ['Port Deliver', 'Port De-hire', 'Rail Transport'],
    image: '/images/Coverage/ps.png',
    icon: 'i-lucide-waves'
  },
  {
    name: 'Patrick Terminals – Melbourne',
    location: '2 Phillipps Rd, West Melbourne VIC 3003',
    services: ['Port Deliver', 'Port De-hire', 'Stack Run Pickup'],
    image: '/images/Coverage/pm.png',
    icon: 'i-lucide-compass'
  },
  {
    name: 'Hutchison Ports Sydney',
    location: 'Gate B/150-160 Foreshore Rd, Botany NSW 2019',
    services: ['Port Deliver', 'Port De-hire', 'Rail Transport'],
    image: '/images/Coverage/hs.png',
    icon: 'i-lucide-anchor'
  },
  {
    name: 'Victoria International Container Terminal',
    location: '78 Webb Dock Dr, Port Melbourne VIC 3207',
    services: ['Port Deliver', 'Port De-hire', 'Stack Run Pickup'],
    image: '/images/Coverage/vm.png',
    icon: 'i-lucide-ship'
  }
]


// 附加费用
const additionalCharges = [
  {
    service: 'Weekend Delivery',
    charge: '+0%',
    description: 'Delivery on weekends and public holidays',
    icon: 'i-lucide-calendar'
  },
  {
    service: 'After Hours',
    charge: '+0%',
    description: 'Delivery outside standard business hours',
    icon: 'i-lucide-clock'
  },
  {
    service: 'Express Service',
    charge: '+0%',
    description: 'Priority delivery within 24 hours',
    icon: 'lucide:zap'
  },
  {
  service: 'DG Goods Handling',
  charge: '+40%',
  description: 'Dangerous goods handling surcharge',
  icon: 'i-lucide-alert-triangle'
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
    <section class="relative py-20 bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation Placeholder -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-green-200 to-blue-200 dark:from-green-800 dark:to-blue-800 h-full w-full"></div>
      </div>

      <UContainer class="relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Service Coverage Across Australia
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Comprehensive container transport services covering metropolitan areas, regional centers,
            rural areas, and remote locations across Australia with transparent pricing and delivery times.
          </p>

          <!-- Coverage Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div class="text-gray-600 dark:text-gray-300">Metro Coverage</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">95%</div>
              <div class="text-gray-600 dark:text-gray-300">Regional Coverage</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-orange-600 dark:text-orange-400">80%</div>
              <div class="text-gray-600 dark:text-gray-300">Rural Coverage</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-red-600 dark:text-red-400">24/7</div>
              <div class="text-gray-600 dark:text-gray-300">Emergency Service</div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Service Areas Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Service Areas & Delivery Times
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transparent delivery times and pricing for different service areas across Australia
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UCard
            v-for="area in serviceAreas"
            :key="area.region"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mr-4">
                    <UIcon :name="area.icon" class="text-xl text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                      {{ area.region }}
                    </h3>
                  </div>
                </div>
                <UBadge color="primary" variant="soft">
                  {{ area.surcharge }}
                </UBadge>
              </div>
            </template>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Coverage Areas:</h4>
                <div class="flex flex-wrap gap-2">
                  <UBadge
                    v-for="location in area.areas"
                    :key="location"
                    variant="outline"
                    size="sm"
                  >
                    {{ location }}
                  </UBadge>
                </div>
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span class="text-gray-600 dark:text-gray-300">Delivery Time:</span>
                <span class="font-semibold text-gray-900 dark:text-white">{{ area.deliveryTime }}</span>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Major Ports Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Major Port Coverage
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional port services across Australia's major shipping ports
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UCard
            v-for="port in majorPorts"
            :key="port.name"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="relative">
                <!-- Real Port Image -->
                <div class="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <img 
                    :src="port.image" 
                    :alt="port.name"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ port.name }}
                </h3>
                <p class="text-blue-600 dark:text-blue-400 font-medium">
                  {{ port.location }}
                </p>
              </div>
            </template>

            <div class="space-y-3">
              <h4 class="font-semibold text-gray-900 dark:text-white">Services Available:</h4>
              <ul class="space-y-2">
                <li
                  v-for="service in port.services"
                  :key="service"
                  class="flex items-center text-sm text-gray-600 dark:text-gray-300"
                >
                  <UIcon name="i-lucide-check" class="text-green-500 mr-2 flex-shrink-0" />
                  {{ service }}
                </li>
              </ul>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>


    <!-- Additional Charges Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Additional Charges
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transparent pricing for additional services and special requirements
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UCard
            v-for="charge in additionalCharges"
            :key="charge.service"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="text-center">
                <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UIcon :name="charge.icon" class="text-2xl text-orange-600 dark:text-orange-400" />
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {{ charge.service }}
                </h3>
                <div class="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {{ charge.charge }}
                </div>
              </div>
            </template>

            <div>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                {{ charge.description }}
              </p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Coverage Map Section -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <UContainer>
        <div class="text-center mb-20">
          <h2 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Service Coverage Map
          </h2>
          <p class="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Interactive visualization of our comprehensive service coverage across Australia
          </p>
        </div>

        <!-- Interactive Coverage Map -->
        <div class="relative max-w-7xl mx-auto">
          <!-- Map Container - Much Larger -->
          <div class="relative aspect-[4/3] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl overflow-hidden shadow-3xl border-4 border-white/20 backdrop-blur-sm">
            <!-- Animated Grid Background -->
            <div class="absolute inset-0 opacity-20">
              <div class="grid grid-cols-12 grid-rows-8 h-full w-full">
                <div 
                  v-for="i in 96" 
                  :key="i"
                  class="border border-blue-400/30 animate-pulse"
                  :style="{ animationDelay: `${i * 0.1}s` }"
                ></div>
              </div>
            </div>

            <!-- Australia Outline (Larger & More Detailed) -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="relative">
                <!-- Main Australia Shape - Much Larger -->
                <div class="w-96 h-72 bg-gradient-to-br from-green-400/25 to-blue-400/25 rounded-2xl border-3 border-green-400/60 relative overflow-hidden shadow-2xl">
                  <!-- Inner Grid Pattern - More Detailed -->
                  <div class="absolute inset-0 grid grid-cols-12 grid-rows-9 gap-1 p-3">
                    <div 
                      v-for="i in 108" 
                      :key="i"
                      class="bg-green-400/15 rounded-md hover:bg-green-400/40 transition-all duration-500 cursor-pointer hover:scale-110"
                      :class="{
                        'bg-green-400/50': i % 12 < 4, // Metro areas
                        'bg-blue-400/40': i % 12 >= 4 && i % 12 < 8, // Regional areas
                        'bg-orange-400/30': i % 12 >= 8 && i % 12 < 10, // Rural areas
                        'bg-red-400/20': i % 12 >= 10 // Remote areas
                      }"
                    ></div>
                  </div>
                  
                  <!-- Major Cities Dots - Larger & More -->
                  <div class="absolute top-1/5 left-1/4 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-xl"></div>
                  <div class="absolute top-1/3 right-1/5 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-xl"></div>
                  <div class="absolute bottom-2/5 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
                  <div class="absolute bottom-1/4 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
                  <div class="absolute top-1/2 left-1/6 w-2 h-2 bg-orange-400 rounded-full animate-pulse shadow-md"></div>
                  <div class="absolute bottom-1/3 right-1/6 w-2 h-2 bg-orange-400 rounded-full animate-pulse shadow-md"></div>
                </div>

                <!-- Floating Data Points - More Dynamic -->
                <div class="absolute -top-6 -left-6 w-3 h-3 bg-cyan-400 rounded-full animate-ping shadow-lg"></div>
                <div class="absolute -bottom-6 -right-6 w-3 h-3 bg-emerald-400 rounded-full animate-ping shadow-lg"></div>
                <div class="absolute top-1/2 -right-8 w-3 h-3 bg-blue-400 rounded-full animate-ping shadow-lg"></div>
                <div class="absolute top-1/4 -left-8 w-2 h-2 bg-purple-400 rounded-full animate-ping shadow-md"></div>
                <div class="absolute bottom-1/4 -left-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping shadow-md"></div>
              </div>
            </div>

            <!-- Coverage Stats Overlay - Larger & More Detailed -->
            <div class="absolute top-6 left-6 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-2xl">
              <div class="space-y-3">
                <h3 class="text-white text-lg font-bold mb-3 flex items-center">
                  <UIcon name="lucide:map-pin" class="w-5 h-5 mr-2" />
                  Coverage Areas
                </h3>
                <div class="flex items-center space-x-3">
                  <div class="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                  <span class="text-white text-base font-medium">Metro Areas</span>
                  <span class="text-green-400 text-sm font-bold">95%</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-4 h-4 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
                  <span class="text-white text-base font-medium">Regional Areas</span>
                  <span class="text-blue-400 text-sm font-bold">78%</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-4 h-4 bg-orange-400 rounded-full animate-pulse shadow-lg"></div>
                  <span class="text-white text-base font-medium">Rural Areas</span>
                  <span class="text-orange-400 text-sm font-bold">45%</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-4 h-4 bg-red-400 rounded-full animate-pulse shadow-lg"></div>
                  <span class="text-white text-base font-medium">Remote Areas</span>
                  <span class="text-red-400 text-sm font-bold">12%</span>
                </div>
              </div>
            </div>

            <!-- Real-time Data Overlay - Enhanced -->
            <div class="absolute top-6 right-6 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-2xl">
              <div class="text-center">
                <div class="flex items-center justify-center mb-2">
                  <UIcon name="i-lucide-activity" class="w-6 h-6 text-green-400 mr-2 animate-pulse" />
                  <span class="text-white text-lg font-bold">Development Progress</span>
                </div>
                <div class="text-4xl font-bold text-green-400 mb-2">68%</div>
                <div class="text-white text-base font-medium mb-1">Completeness</div>
                <div class="text-xs text-gray-300 mt-3 bg-green-400/20 px-3 py-1 rounded-full">
                  Real-time Updates Coming Soon
                </div>
              </div>
            </div>

            <!-- Interactive Elements - Enhanced -->
            <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md px-8 py-4 rounded-full border border-white/30 shadow-2xl">
              <div class="flex items-center space-x-8 text-white text-base">
                <span class="flex items-center space-x-2">
                  <UIcon name="i-lucide-truck" class="w-5 h-5 text-blue-400" />
                  <span class="font-medium">Active Routes</span>
                  <span class="text-blue-400 font-bold">24</span>
                </span>
                <span class="flex items-center space-x-2">
                  <UIcon name="i-lucide-clock" class="w-5 h-5 text-green-400" />
                  <span class="font-medium">24/7 Service</span>
                  <span class="text-green-400 font-bold">✓</span>
                </span>
                <span class="flex items-center space-x-2">
                  <UIcon name="i-lucide-shield-check" class="w-5 h-5 text-purple-400" />
                  <span class="font-medium">Fully Insured</span>
                  <span class="text-purple-400 font-bold">✓</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-4">
            Need Service in Your Area?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Contact us to confirm service availability and get a quote for your location
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="primary" variant="solid" to="/quote">
              Get Quote Now
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="xl" color="primary" variant="outline" to="/contact">
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
