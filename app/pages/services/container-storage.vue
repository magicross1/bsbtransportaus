<script setup lang="ts">
// Container Storage页面SEO配置
useSeoMeta({
  title: 'Container Storage Service Australia | Bulk Port Operations & Yard Storage | BSB Transport',
  description: 'Comprehensive container storage solutions including bulk port operations, stack runs, rail transport, and secure yard storage facilities.',
  keywords: 'container storage australia, bulk port operations, stack run services, rail transport, yard storage, secure storage, BSB transport',
  ogImage: 'https://www.bsbtransport.com.au/images/services/index/storage.png',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Container Storage', to: '/services/container-storage' }
]

// 服务特性数据
const features = [
  {
    icon: 'i-lucide-ship',
    title: 'Bulk Port Operations',
    description: 'Efficient bulk container operations from major Australian ports with specialized equipment and processes.'
  },
  {
    icon: 'i-lucide-layers',
    title: 'Stack Run Services',
    description: 'Professional stack run operations for organized container storage and retrieval systems.'
  },
  {
    icon: 'i-lucide-train',
    title: 'Rail Transport Integration',
    description: 'Seamless integration with rail transport networks for efficient long-distance container movement.'
  },
  {
    icon: 'i-lucide-warehouse',
    title: 'Secure Yard Storage',
    description: 'Secure, monitored yard storage facilities with 24/7 security and access control systems.'
  },
  {
    icon: 'i-lucide-package',
    title: 'Small Quantity Storage',
    description: 'Flexible storage options for small quantities with competitive pricing and flexible terms.'
  },
  {
    icon: 'i-lucide-calendar',
    title: 'Flexible Storage Terms',
    description: 'Customizable storage periods and terms to accommodate your business requirements.'
  }
]

// 存储类型
const storageTypes = [
  {
    title: 'Bulk Storage',
    description: 'Large volume container storage for major importers and exporters',
    icon: 'i-lucide-boxes',
    capacity: '100+ containers',
    features: ['Stack run operations', 'Rail transport access', 'Automated systems']
  },
  {
    title: 'Small Quantity Storage',
    description: 'Flexible storage for smaller businesses and individual containers',
    icon: 'i-lucide-package',
    capacity: '1-50 containers',
    features: ['Flexible terms', 'Easy access', 'Competitive pricing']
  },
  {
    title: 'Temporary Storage',
    description: 'Short-term storage solutions for immediate needs',
    icon: 'i-lucide-clock',
    capacity: 'Any quantity',
    features: ['Quick setup', 'Flexible duration', 'Easy retrieval']
  },
  {
    title: 'Long-term Storage',
    description: 'Extended storage periods for seasonal or strategic needs',
    icon: 'i-lucide-calendar',
    capacity: 'Any quantity',
    features: ['Extended terms', 'Volume discounts', 'Secure facilities']
  }
]

// 服务流程
const processSteps = [
  {
    step: 1,
    title: 'Port Collection',
    description: 'We collect containers from ports using stack runs or rail transport.',
    icon: 'i-lucide-anchor'
  },
  {
    step: 2,
    title: 'Transport to Yard',
    description: 'Containers are transported to our secure storage facilities.',
    icon: 'i-lucide-truck'
  },
  {
    step: 3,
    title: 'Secure Storage',
    description: 'Containers are stored securely with monitoring and access control.',
    icon: 'i-lucide-warehouse'
  },
  {
    step: 4,
    title: 'Retrieval & Delivery',
    description: 'Containers are retrieved and delivered when you need them.',
    icon: 'i-lucide-package'
  }
]

// 优势
const advantages = [
  {
    title: 'Cost Effective',
    description: 'Competitive storage rates with volume discounts for bulk operations',
    icon: 'i-lucide-dollar-sign'
  },
  {
    title: 'Secure Facilities',
    description: '24/7 monitored facilities with advanced security systems',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Flexible Terms',
    description: 'Customizable storage periods and terms to suit your needs',
    icon: 'i-lucide-settings'
  },
  {
    title: 'Easy Access',
    description: 'Convenient access to stored containers with efficient retrieval systems',
    icon: 'i-lucide-key'
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
    <section class="relative py-20 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-orange-200 to-amber-200 dark:from-orange-800 dark:to-amber-800 h-full w-full"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Container Storage Service
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Comprehensive container storage solutions including bulk port operations, stack runs, rail transport, 
              and secure yard storage facilities. Flexible storage options for all business sizes.
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
                <source src="/videos/st.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <!-- Floating Animation Elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-bounce"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Container Storage Capabilities
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional container storage solutions designed for efficient operations and secure facilities
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
                <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="feature.icon" class="text-2xl text-orange-600 dark:text-orange-400" />
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

    <!-- Storage Types Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Storage Solutions
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible storage options designed to meet your specific business requirements
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UCard
            v-for="storage in storageTypes"
            :key="storage.title"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="text-center">
                <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="storage.icon" class="text-2xl text-orange-600 dark:text-orange-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ storage.title }}
                </h3>
                <p class="text-sm text-orange-600 dark:text-orange-400 font-medium mb-3">
                  {{ storage.capacity }}
                </p>
              </div>
            </template>

            <div class="space-y-4">
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                {{ storage.description }}
              </p>
              
              <div class="space-y-2">
                <h4 class="font-semibold text-gray-900 dark:text-white text-sm">Key Features:</h4>
                <ul class="space-y-1">
                  <li
                    v-for="feature in storage.features"
                    :key="feature"
                    class="flex items-center text-xs text-gray-600 dark:text-gray-300"
                  >
                    <UIcon name="i-lucide-check" class="text-orange-500 mr-2 flex-shrink-0 w-3 h-3" />
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Process Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Storage Process
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Simple, efficient process from collection to secure storage and retrieval
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
              class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent z-0"
              :style="{ width: 'calc(100% - 2rem)' }"
            ></div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon :name="step.icon" class="text-2xl text-orange-600 dark:text-orange-400" />
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
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Our Storage Service?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional storage solutions with competitive advantages for your business
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="advantage in advantages"
            :key="advantage.title"
            class="text-center group"
          >
            <div class="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <UIcon :name="advantage.icon" class="text-3xl text-orange-600 dark:text-orange-400" />
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
    <section class="py-20 bg-gradient-to-r from-orange-600 to-amber-700 text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-4">
            Ready for Professional Container Storage?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Get a quote for our container storage service and secure your logistics operations
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="primary" variant="solid" to="/quote" class="bg-white text-orange-600 hover:bg-gray-100">
              Get Quote Now
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="xl" color="primary" variant="outline" to="/contact" class="border-white text-white hover:bg-white hover:text-orange-600">
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
