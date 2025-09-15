<script setup lang="ts">
// Quote Calculator页面SEO配置
useSeoMeta({
  title: 'Smart Quote Calculator Australia | Instant Pricing & Service Estimation | BSB Transport',
  description: 'Advanced quote calculation system providing instant pricing estimates, service recommendations, and transparent cost breakdowns for all transport services.',
  keywords: 'quote calculator australia, instant pricing, service estimation, cost breakdown, transport pricing, BSB transport calculator',
  ogImage: 'https://www.bsbtransport.com.au/images/services/index/quote.png',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Smart Quote Calculator', to: '/services/quote-calculator' }
]

// 计算器特性
const features = [
  {
    icon: 'i-lucide-calculator',
    title: 'Instant Pricing Calculation',
    description: 'Get immediate pricing estimates for your transport requirements with real-time rate calculations.'
  },
  {
    icon: 'i-lucide-lightbulb',
    title: 'Service Recommendations',
    description: 'Intelligent recommendations for the most suitable transport service based on your specific needs.'
  },
  {
    icon: 'i-lucide-receipt',
    title: 'Transparent Cost Breakdown',
    description: 'Detailed cost breakdown showing all components including base rates, surcharges, and additional fees.'
  },
  {
    icon: 'i-lucide-bar-chart-3',
    title: 'Multiple Service Comparison',
    description: 'Compare different service options side-by-side to find the most cost-effective solution.'
  },
  {
    icon: 'i-lucide-refresh-cw',
    title: 'Real-Time Rate Updates',
    description: 'Always current pricing with automatic updates reflecting latest market rates and conditions.'
  },
  {
    icon: 'i-lucide-file-text',
    title: 'Custom Quote Generation',
    description: 'Generate professional quotes with detailed specifications and terms for your records.'
  }
]

// 计算器功能
const calculatorFeatures = [
  {
    title: 'Route Optimization',
    description: 'Automatic route calculation and optimization for the most efficient transport path',
    icon: 'i-lucide-map',
    features: ['Distance calculation', 'Route planning', 'Traffic optimization', 'Fuel efficiency']
  },
  {
    title: 'Service Selection',
    description: 'Intelligent service recommendation based on cargo type and requirements',
    icon: 'i-lucide-package',
    features: ['Cargo analysis', 'Service matching', 'Equipment selection', 'Timing optimization']
  },
  {
    title: 'Cost Analysis',
    description: 'Comprehensive cost analysis with detailed breakdown and comparison options',
    icon: 'i-lucide-dollar-sign',
    features: ['Base rates', 'Surcharges', 'Additional fees', 'Volume discounts']
  },
  {
    title: 'Quote Management',
    description: 'Professional quote generation and management system for easy tracking',
    icon: 'i-lucide-file-text',
    features: ['Quote generation', 'PDF export', 'Email delivery', 'Quote tracking']
  }
]

// 使用流程
const usageSteps = [
  {
    step: 1,
    title: 'Enter Details',
    description: 'Input your transport requirements including origin, destination, and cargo details.',
    icon: 'i-lucide-edit'
  },
  {
    step: 2,
    title: 'Service Selection',
    description: 'Choose from available service options or let our system recommend the best option.',
    icon: 'i-lucide-check-circle'
  },
  {
    step: 3,
    title: 'Instant Calculation',
    description: 'Get immediate pricing with detailed cost breakdown and service recommendations.',
    icon: 'i-lucide-calculator'
  },
  {
    step: 4,
    title: 'Quote Generation',
    description: 'Generate professional quotes and export for your records or send to stakeholders.',
    icon: 'i-lucide-download'
  }
]

// 优势
const advantages = [
  {
    title: 'Time Saving',
    description: 'Get instant quotes without waiting for manual calculations or phone calls',
    icon: 'i-lucide-clock'
  },
  {
    title: 'Accuracy',
    description: 'Precise calculations based on current rates and real-time market conditions',
    icon: 'i-lucide-target'
  },
  {
    title: 'Transparency',
    description: 'Complete visibility into pricing components with no hidden fees',
    icon: 'i-lucide-eye'
  },
  {
    title: 'Convenience',
    description: '24/7 availability with instant access to pricing and service information',
    icon: 'i-lucide-smartphone'
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
    <section class="relative py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 h-full w-full"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Smart Quote Calculator
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Advanced quote calculation system providing instant pricing estimates, service recommendations, 
              and transparent cost breakdowns for all transport services. Get accurate quotes in seconds.
            </p>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton size="xl" color="primary" to="/quote">
                Try Calculator Now
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
                <source src="/videos/cal.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <!-- Floating Animation Elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500 rounded-full animate-bounce"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Quote Calculator Capabilities
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced calculation features designed to provide accurate and comprehensive pricing information
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
                <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="feature.icon" class="text-2xl text-indigo-600 dark:text-indigo-400" />
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

    <!-- Calculator Features Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Advanced Calculator Features
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive calculation tools for accurate pricing and service optimization
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UCard
            v-for="calcFeature in calculatorFeatures"
            :key="calcFeature.title"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="text-center">
                <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="calcFeature.icon" class="text-2xl text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ calcFeature.title }}
                </h3>
              </div>
            </template>

            <div class="space-y-4">
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                {{ calcFeature.description }}
              </p>
              
              <div class="space-y-2">
                <h4 class="font-semibold text-gray-900 dark:text-white text-sm">Key Features:</h4>
                <ul class="space-y-1">
                  <li
                    v-for="feature in calcFeature.features"
                    :key="feature"
                    class="flex items-center text-xs text-gray-600 dark:text-gray-300"
                  >
                    <UIcon name="i-lucide-check" class="text-indigo-500 mr-2 flex-shrink-0 w-3 h-3" />
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Usage Process Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use the Calculator
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Simple steps to get accurate quotes and service recommendations
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="step in usageSteps"
            :key="step.step"
            class="text-center relative"
          >
            <!-- Connection Line -->
            <div
              v-if="step.step < usageSteps.length"
              class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500 to-transparent z-0"
              :style="{ width: 'calc(100% - 2rem)' }"
            ></div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon :name="step.icon" class="text-2xl text-indigo-600 dark:text-indigo-400" />
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
            Why Use Our Quote Calculator?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional calculation tools with advanced features and user-friendly interface
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="advantage in advantages"
            :key="advantage.title"
            class="text-center group"
          >
            <div class="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <UIcon :name="advantage.icon" class="text-3xl text-indigo-600 dark:text-indigo-400" />
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
    <section class="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-4">
            Ready to Get Instant Quotes?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Try our smart quote calculator and get accurate pricing for your transport needs
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="primary" variant="solid" to="/quote" class="bg-white text-indigo-600 hover:bg-gray-100">
              Try Calculator Now
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="xl" color="primary" variant="outline" to="/contact" class="border-white text-white hover:bg-white hover:text-indigo-600">
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
