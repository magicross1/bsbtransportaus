<script setup lang="ts">
// 服务页面SEO配置
useSeoMeta({
  title: 'Professional Container Transport Services Australia | BSB Transport',
  description: 'Comprehensive container transport solutions including standard trailer, drop trailer, sideloader services, container storage, logistics automation, and smart quote calculator.',
  keywords: 'container transport services, standard trailer transport, drop trailer service, sideloader transport, container storage, logistics automation, quote calculator australia, BSB transport',
  ogImage: 'https://www.bsbtransport.com.au/images/services/index/std.png',
  twitterCard: 'summary_large_image'
})

// 结构化数据
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Container Transport Services',
        description: 'Professional container transport services across Australia',
        provider: {
          '@type': 'Organization',
          name: 'BSB Transport Australia'
        },
        areaServed: {
          '@type': 'Country',
          name: 'Australia'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Container Transport Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Standard Trailer Transport Service',
                description: 'Port-to-customer delivery with driver waiting during unloading'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Drop Trailer Transport Service',
                description: 'Flexible container and trailer storage at customer location'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Sideloader Transport Service',
                description: 'Ground-level container placement with specialized equipment'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Container Storage Service',
                description: 'Bulk port operations and secure yard storage facilities'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Logistics Automation Development',
                description: 'Custom system integration and API development services'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Smart Quote Calculator',
                description: 'Instant pricing and service estimation system'
              }
            }
          ]
        }
      })
    }
  ]
})

// 服务数据 - 更新为新的服务类型
const services = [
  {
    id: 'standard-trailer',
    title: 'Standard Trailer Transport Service',
    subtitle: 'Port-to-Customer Delivery & Return',
    description: 'Professional container transport from port pickup to customer delivery. Our driver waits while you unload, then returns the empty container to the port.',
    features: [
      'Port container pickup',
      'Direct customer delivery',
      'Driver waits during unloading',
      'Immediate empty container return',
      'Real-time tracking',
      'Professional drivers'
    ],
    image: '/images/services/index/std.png',
    icon: 'i-lucide-truck',
    link: '/services/standard-trailer',
    color: 'blue'
  },
  {
    id: 'drop-trailer',
    title: 'Drop Trailer Transport Service',
    subtitle: 'Flexible Container & Trailer Storage',
    description: 'Convenient drop-off service where we leave both container and trailer at your location. We return to collect when you notify us the container is empty.',
    features: [
      'Container + trailer drop-off',
      'Flexible unloading schedule',
      'Customer-controlled timing',
      'Automatic collection service',
      'Extended storage options',
      'Cost-effective solution'
    ],
    image: '/images/services/index/drop.png',
    icon: 'i-lucide-package',
    link: '/services/drop-trailer',
    color: 'green'
  },
  {
    id: 'sideloader',
    title: 'Sideloader Transport Service',
    subtitle: 'Ground-Level Container Placement',
    description: 'Advanced sideloader equipment delivers containers directly to ground level at your location. Perfect for sites without crane facilities.',
    features: [
      'Ground-level container placement',
      'No crane requirements',
      'Sideloader equipment',
      'Flexible positioning',
      'Customer notification system',
      'Professional container handling'
    ],
    image: '/images/services/index/sdl.png',
    icon: 'i-lucide-loader',
    link: '/services/sideloader',
    color: 'purple'
  },
  {
    id: 'container-storage',
    title: 'Container Storage Service',
    subtitle: 'Bulk Port Operations & Yard Storage',
    description: 'Comprehensive container storage solutions including bulk port operations, stack runs, rail transport, and secure yard storage facilities.',
    features: [
      'Bulk port operations',
      'Stack run services',
      'Rail transport integration',
      'Secure yard storage',
      'Small quantity storage',
      'Flexible storage terms'
    ],
    image: '/images/services/index/storage.png',
    icon: 'i-lucide-warehouse',
    link: '/services/container-storage',
    color: 'orange'
  },
  {
    id: 'logistics-automation',
    title: 'Logistics Automation Development',
    subtitle: 'Custom System Integration & API Development',
    description: 'Cutting-edge logistics automation solutions including custom system development, 1-Stop integration, API connections, and seamless system-to-system communication.',
    features: [
      'Custom system development',
      '1-Stop platform integration',
      'API development & connection',
      'System-to-system integration',
      'Real-time data automation',
      'Workflow optimization'
    ],
    image: '/images/services/index/sys.png',
    icon: 'i-lucide-code-2',
    link: '/services/logistics-automation',
    color: 'cyan'
  },
  {
    id: 'quote-calculator',
    title: 'Smart Quote Calculator',
    subtitle: 'Instant Pricing & Service Estimation',
    description: 'Advanced quote calculation system providing instant pricing estimates, service recommendations, and transparent cost breakdowns for all transport services.',
    features: [
      'Instant pricing calculation',
      'Service recommendations',
      'Transparent cost breakdown',
      'Multiple service comparison',
      'Real-time rate updates',
      'Custom quote generation'
    ],
    image: '/images/services/index/quote.png',
    icon: 'i-lucide-calculator',
    link: '/services/quote-calculator',
    color: 'indigo'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation Placeholder -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-800 dark:to-indigo-800 h-full w-full"></div>
      </div>

      <UContainer class="relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Container Transport Services
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            From standard trailer transport to advanced logistics automation - comprehensive solutions tailored to your container transport needs across Australia
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="primary" to="/quote">
              Get Quote Now
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="xl" variant="outline" color="primary" to="/contact">
              Contact Us
              <template #trailing>
                <UIcon name="i-lucide-phone" />
              </template>
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Services Grid -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Transport Services
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive range of container transport services designed to meet your specific logistics needs
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard
            v-for="service in services"
            :key="service.id"
            class="group hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            @click="navigateTo(service.link)"
          >
            <template #header>
              <div class="relative">
                <!-- Service Image -->
                <div class="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg mb-4 overflow-hidden">
                  <img
                    :src="service.image"
                    :alt="service.title"
                    class="w-full h-full object-contain rounded-lg"
                  />

                  <!-- Color Accent -->
                  <div
                    class="absolute top-0 left-0 w-full h-1 rounded-t-lg"
                    :class="{
                      'bg-blue-500': service.color === 'blue',
                      'bg-green-500': service.color === 'green',
                      'bg-purple-500': service.color === 'purple',
                      'bg-orange-500': service.color === 'orange',
                      'bg-cyan-500': service.color === 'cyan',
                      'bg-indigo-500': service.color === 'indigo'
                    }"
                  ></div>
                </div>

                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ service.title }}
                </h3>
                <p class="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {{ service.subtitle }}
                </p>
              </div>
            </template>

            <div class="space-y-4">
              <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {{ service.description }}
              </p>

              <div class="space-y-2">
                <h4 class="font-semibold text-gray-900 dark:text-white text-sm">Key Features:</h4>
                <ul class="space-y-1">
                  <li
                    v-for="feature in service.features.slice(0, 4)"
                    :key="feature"
                    class="flex items-center text-xs text-gray-600 dark:text-gray-300"
                  >
                    <UIcon name="i-lucide-check" class="text-green-500 mr-2 flex-shrink-0 w-3 h-3" />
                    {{ feature }}
                  </li>
                  <li v-if="service.features.length > 4" class="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    +{{ service.features.length - 4 }} more features
                  </li>
                </ul>
              </div>
            </div>

            <template #footer>
              <div class="flex items-center justify-between">
                <UButton
                  variant="ghost"
                  color="primary"
                  :to="service.link"
                  class="group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                  {{ `Learn More About ${service.title}` }}
                  <template #trailing>
                    <UIcon name="i-lucide-arrow-right" class="group-hover:translate-x-1 transition-transform duration-300" />
                  </template>
                </UButton>

                <UBadge
                  color="primary"
                  variant="soft"
                  size="sm"
                >
                  {{ service.color }}
                </UBadge>
              </div>
            </template>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose BSB Transport?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We deliver exceptional container transport services with unmatched reliability and professionalism
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-shield-check" class="text-3xl text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Safety First</h3>
            <p class="text-gray-600 dark:text-gray-300">Comprehensive safety protocols and fully insured operations</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-clock" class="text-3xl text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">On-Time Delivery</h3>
            <p class="text-gray-600 dark:text-gray-300">Reliable scheduling and real-time tracking for peace of mind</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-users" class="text-3xl text-purple-600 dark:text-purple-400" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert Team</h3>
            <p class="text-gray-600 dark:text-gray-300">Professional drivers and logistics experts at your service</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-4">
            Ready to Transport Your Containers?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Get a professional quote for your container transport needs today
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
