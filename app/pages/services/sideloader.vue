<script setup lang="ts">
// Sideloader Transport页面SEO配置
useSeoMeta({
  title: 'Sideloader Transport Service Australia | Ground-Level Container Placement | BSB Transport',
  description: 'Advanced sideloader equipment delivers containers directly to ground level at your location. Perfect for sites without crane facilities.',
  keywords: 'sideloader transport australia, ground-level container placement, no crane requirements, sideloader equipment, flexible positioning, BSB transport',
  ogImage: 'https://www.bsbtransport.com.au/images/services/sideloader/sideloader.png',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Sideloader Services', to: '/services/sideloader' }
]

// 服务特性数据
const features = [
  {
    icon: 'i-lucide-layers',
    title: 'Ground-Level Container Placement',
    description: 'Containers are placed directly on the ground at your location, eliminating the need for crane facilities.'
  },
  {
    icon: 'i-lucide-x-circle',
    title: 'No Crane Requirements',
    description: 'Perfect solution for sites without crane facilities or lifting equipment infrastructure.'
  },
  {
    icon: 'i-lucide-loader',
    title: 'Sideloader Equipment',
    description: 'Specialized sideloader equipment designed for efficient ground-level container handling.'
  },
  {
    icon: 'i-lucide-move',
    title: 'Flexible Positioning',
    description: 'Containers can be positioned precisely where you need them for optimal workflow.'
  },
  {
    icon: 'i-lucide-bell',
    title: 'Customer Notification System',
    description: 'Automated notification system to alert us when containers are ready for collection.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Professional Container Handling',
    description: 'Expert operators ensure safe and efficient container placement and collection.'
  }
]

// 设备规格
const equipmentSpecs = [
  {
    name: 'Standard 20ft / 40ft Container',
    capacity: '≤ 22 tonnes',
    features: ['Direct from port', 'Time-saving', 'Fast turnaround', 'Efficient']
  },
  {
    name: 'Heavy 20ft / 40ft Container',
    capacity: '22 – 28 tonnes',
    features: ['Trailer pickup', 'Sideloader lift down', 'Multi-vehicle coordination', 'Safe & reliable']
  },
  {
    name: 'Special Containers (45ft / 48ft)',
    capacity: 'Non-standard sizes',
    features: ['Container Jack Set', 'Adaptable', 'Secure handling', 'Specialized']
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
    <section class="relative py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation Placeholder -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-green-200 to-emerald-200 dark:from-green-800 dark:to-emerald-800 h-full w-full"></div>
      </div>

      <UContainer class="relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Sideloader Transport Service
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Advanced sideloader equipment delivers containers directly to ground level at your location.
              Perfect for sites without crane facilities. Professional container handling with maximum flexibility.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
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

          <!-- Hero Video -->
          <div class="relative">
            <div class="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <video
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                class="w-full h-full object-cover"
              >
                <source src="/videos/sdl.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <!-- Floating Animation Elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sideloader Capabilities
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced sideloader technology for efficient and safe container handling operations
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard
            v-for="feature in features"
            :key="feature.title"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="feature.icon" class="text-2xl text-green-600 dark:text-green-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  {{ feature.title }}
                </h3>
              </div>
            </template>

            <div>
              <p class="text-gray-600 dark:text-gray-300">
                {{ feature.description }}
              </p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Equipment Specifications -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sideloader Operation Methods
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Different sideloader operation approaches for various container types
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard
            v-for="equipment in equipmentSpecs"
            :key="equipment.name"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="text-center">
                <div class="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UIcon name="i-lucide-settings" class="text-3xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ equipment.name }}
                </h3>
                <p class="text-green-600 dark:text-green-400 font-medium">
                  {{ equipment.capacity }}
                </p>
              </div>
            </template>

            <div class="space-y-3">
              <h4 class="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
              <ul class="space-y-2">
                <li
                  v-for="feature in equipment.features"
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


    <!-- Advantages Section -->
    <section class="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold mb-6">
              Why Choose Our Sideloader Services?
            </h2>
            <p class="text-xl mb-8 opacity-90">
              Advanced technology and professional service for superior container handling
            </p>

            <div class="space-y-6">
              <div class="flex items-start">
                <UIcon name="i-lucide-check-circle" class="text-green-300 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-lg">Self-Sufficient Operations</h3>
                  <p class="opacity-90">Independent container handling without external equipment dependency</p>
                </div>
              </div>

              <div class="flex items-start">
                <UIcon name="i-lucide-check-circle" class="text-green-300 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-lg">Ground-Level Efficiency</h3>
                  <p class="opacity-90">Safer and more efficient ground-level loading operations</p>
                </div>
              </div>

              <div class="flex items-start">
                <UIcon name="i-lucide-check-circle" class="text-green-300 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-lg">Versatile Applications</h3>
                  <p class="opacity-90">Suitable for ports, warehouses, construction sites, and remote locations</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Advantages Image -->
          <div class="relative">
            <div class="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/services/sideloader/drive.png"
                alt="Sideloader Drive Operations - Professional container handling equipment"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 w-12 h-12 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-8 h-8 bg-white bg-opacity-20 rounded-full animate-bounce"></div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready for Sideloader Services?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get a professional quote for your specialized container handling needs
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="primary" to="/quote">
              Get Quote Now
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="xl" variant="outline" to="/contact">
              Call Us Now
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
