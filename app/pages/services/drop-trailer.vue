<script setup lang="ts">
// Drop Trailer Transport页面SEO配置
useSeoMeta({
  title: 'Drop Trailer Transport Service Australia | Flexible Container & Trailer Storage | BSB Transport',
  description: 'Convenient drop-off service where we leave both container and trailer at your location. We return to collect when you notify us the container is empty.',
  keywords: 'drop trailer transport australia, container trailer storage, flexible unloading, customer controlled timing, automatic collection, BSB transport',
  ogImage: 'https://www.bsbtransport.com.au/images/services/index/drop.png',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Drop Trailer Transport', to: '/services/drop-trailer' }
]

// 服务特性数据
const features = [
  {
    icon: 'i-lucide-package',
    title: 'Container + Trailer Drop-off',
    description: 'We leave both the container and trailer at your location for maximum convenience and flexibility.'
  },
  {
    icon: 'i-lucide-clock',
    title: 'Flexible Unloading Schedule',
    description: 'Unload at your own pace without time pressure or driver waiting costs.'
  },
  {
    icon: 'i-lucide-user-check',
    title: 'Customer-Controlled Timing',
    description: 'You control when the container is ready for collection, giving you complete flexibility.'
  },
  {
    icon: 'i-lucide-refresh-cw',
    title: 'Automatic Collection Service',
    description: 'We automatically return to collect the empty container and trailer when you notify us.'
  },
  {
    icon: 'i-lucide-calendar',
    title: 'Extended Storage Options',
    description: 'Flexible storage periods to accommodate your business operations and schedules.'
  },
  {
    icon: 'i-lucide-dollar-sign',
    title: 'Cost-Effective Solution',
    description: 'Reduced driver waiting time and optimized resource utilization for better pricing.'
  }
]

// 服务流程
const processSteps = [
  {
    step: 1,
    title: 'Port Pickup',
    description: 'We collect your container from the port using our standard trailer equipment.',
    icon: 'i-lucide-anchor'
  },
  {
    step: 2,
    title: 'Delivery & Drop-off',
    description: 'We deliver to your location and leave both container and trailer for your use.',
    icon: 'i-lucide-package'
  },
  {
    step: 3,
    title: 'Flexible Unloading',
    description: 'You unload at your own pace without time constraints or additional costs.',
    icon: 'i-lucide-clock'
  },
  {
    step: 4,
    title: 'Collection & Return',
    description: 'We collect the empty container and trailer when you notify us it\'s ready.',
    icon: 'i-lucide-refresh-cw'
  }
]

// 优势对比
const advantages = [
  {
    title: 'Time Flexibility',
    description: 'No rush to unload - take your time without driver waiting costs',
    icon: 'i-lucide-clock'
  },
  {
    title: 'Cost Efficiency',
    description: 'Reduced operational costs through optimized resource utilization',
    icon: 'i-lucide-dollar-sign'
  },
  {
    title: 'Operational Control',
    description: 'Complete control over unloading schedule and container availability',
    icon: 'i-lucide-settings'
  },
  {
    title: 'Convenience',
    description: 'Container and trailer available on-site for extended periods',
    icon: 'i-lucide-check-circle'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Breadcrumb Navigation -->
    <section class="py-4 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <UBreadcrumb :links="breadcrumbs" />
      </UContainer>
    </section>

    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-green-200 to-emerald-200 dark:from-green-800 dark:to-emerald-800 h-full w-full"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Drop Trailer Transport Service
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Convenient drop-off service where we leave both container and trailer at your location. 
              We return to collect when you notify us the container is empty. Maximum flexibility for your operations.
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
                <source src="/videos/dt.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <!-- Floating Animation Elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Drop Trailer Transport Capabilities
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible container and trailer storage solutions designed for maximum operational convenience
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

    <!-- Process Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Drop Trailer Process
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Simple, flexible process designed to give you maximum control over your operations
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="step in processSteps"
            :key="step.step"
            class="text-center relative"
          >
            <!-- Connection Line -->
            <div
              v-if="step.step < processSteps.length"
              class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent z-0"
              :style="{ width: 'calc(100% - 2rem)' }"
            ></div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon :name="step.icon" class="text-2xl text-green-600 dark:text-green-400" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Step {{ step.step }}: {{ step.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Advantages Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Drop Trailer Service?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Maximum flexibility and cost efficiency for your container transport needs
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="advantage in advantages"
            :key="advantage.title"
            class="text-center group"
          >
            <div class="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <UIcon :name="advantage.icon" class="text-3xl text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {{ advantage.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ advantage.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-4">
            Ready for Flexible Container Transport?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Get a quote for our drop trailer service and experience maximum operational flexibility
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="primary" variant="solid" to="/quote" class="bg-white text-green-600 hover:bg-gray-100">
              Get Quote Now
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="xl" color="primary" variant="outline" to="/contact" class="border-white text-white hover:bg-white hover:text-green-600">
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
