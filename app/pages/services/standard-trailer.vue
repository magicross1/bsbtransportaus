<script setup lang="ts">
// Standard Trailer Transport页面SEO配置
useSeoMeta({
  title: 'Standard Trailer Transport Service Australia | Port-to-Customer Delivery | BSB Transport',
  description: 'Professional standard trailer transport service from port pickup to customer delivery. Our driver waits while you unload, then returns the empty container to the port.',
  keywords: 'standard trailer transport australia, port pickup delivery, container transport service, driver wait service, empty container return, BSB transport',
  ogImage: 'https://www.bsbtransport.com.au/images/services/standard-trailer/standard-trailer.png',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Standard Trailer Transport', to: '/services/standard-trailer' }
]

// 服务特性数据
const features = [
  {
    icon: 'i-lucide-truck',
    title: 'Port Container Pickup',
    description: 'Professional container pickup from major Australian ports with real-time tracking and scheduling.'
  },
  {
    icon: 'lucide:map-pin',
    title: 'Direct Customer Delivery',
    description: 'Direct delivery to your location with specialized standard trailer equipment and professional drivers.'
  },
  {
    icon: 'i-lucide-clock',
    title: 'Driver Waits During Unloading',
    description: 'Our experienced driver waits at your location while you unload, ensuring immediate container return.'
  },
  {
    icon: 'i-lucide-refresh-cw',
    title: 'Immediate Empty Container Return',
    description: 'Once unloading is complete, we immediately return the empty container to the port for efficient operations.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Real-Time Tracking',
    description: 'Complete visibility throughout the transport process with live tracking and status updates.'
  },
  {
    icon: 'i-lucide-users',
    title: 'Professional Drivers',
    description: 'Licensed and experienced drivers trained in container handling and customer service excellence.'
  }
]

// 服务流程
const processSteps = [
  {
    step: 1,
    title: 'Port Pickup',
    description: 'We collect your container straight from the port, right on time.',
    image: '/images/services/standard-trailer/p.png'
  },
  {
    step: 2,
    title: 'Delivery',
    description: 'We ensure safe, reliable delivery directly to your site.',
    image: '/images/services/standard-trailer/d.png'
  },
  {
    step: 3,
    title: 'Waiting / Unpacking',
    description: 'We stand by while you unpack, making the process smooth and stress-free.',
    image: '/images/services/standard-trailer/pe.png'
  },
  {
    step: 4,
    title: 'Empty De-hire',
    description: 'We return the empty container promptly to the empty park',
    image: '/images/services/standard-trailer/de.png'
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
              Standard Trailer Transport Service
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Professional container transport from port pickup to customer delivery. Our driver waits while you unload,
              then returns the empty container to the port. Safe, reliable, and efficient service across Australia.
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
            <div class="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg overflow-hidden">
              <video 
                src="/videos/std.mp4"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                class="w-full h-full object-cover rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <!-- Floating Animation Elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Standard Trailer Transport Capabilities
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional standard trailer transport solutions designed for efficient port-to-customer delivery
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
                <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="feature.icon" class="text-2xl text-blue-600 dark:text-blue-400" />
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
            Our Transport Process
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Simple, efficient, and transparent process from quote to delivery
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
              class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent z-0"
              :style="{ width: 'calc(100% - 2rem)' }"
            ></div>

            <div class="relative z-10">
              <!-- Step Number -->
              <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {{ step.step }}
              </div>

              <!-- Step Image -->
              <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg mb-4 overflow-hidden">
                <img 
                  :src="step.image" 
                  :alt="step.title"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {{ step.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Equipment Section -->
    <section class="py-20">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Specialized Equipment
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Our modern fleet includes specialized trailers and equipment designed specifically for container transport operations.
            </p>

            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon name="i-lucide-check-circle" class="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Light Skel Trailer</h3>
                  <p class="text-gray-600 dark:text-gray-300">A lightweight yet durable trailer built to carry containers up to 29 tonnes with ease.</p>
                </div>
              </div>

              <div class="flex items-start">
                <UIcon name="i-lucide-check-circle" class="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Retractable Trailer</h3>
                  <p class="text-gray-600 dark:text-gray-300">A retractable design that easily handles 20ft heavy containers and extends on-site for smooth unloading.</p>
                </div>
              </div>

              <div class="flex items-start">
                <UIcon name="i-lucide-check-circle" class="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Low Trailer</h3>
                  <p class="text-gray-600 dark:text-gray-300">A low-profile trailer engineered to move oversized open-top containers up to 3 metres tall.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Equipment Image -->
          <div class="relative">
            <div class="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg overflow-hidden">
              <img 
                src="/images/services/standard-trailer/3t.png"
                alt="Specialized Equipment - Light Skel Trailer, Retractable Trailer, Low Trailer"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-8 h-8 bg-indigo-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-4">
            Ready for Container Transport?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Get a professional quote for your container trucking needs today
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="primary" variant="solid" to="/quote" class="bg-white text-blue-600 hover:bg-gray-100">
              Get Quote Now
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="xl" color="primary" variant="outline" to="/contact" class="border-white text-white hover:bg-white hover:text-blue-600">
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
