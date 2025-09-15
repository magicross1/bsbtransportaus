<script setup lang="ts">
// Logistics Automation页面SEO配置
useSeoMeta({
  title: 'Logistics Automation Development Australia | Custom System Integration & API Development | BSB Transport',
  description: 'Cutting-edge logistics automation solutions including custom system development, 1-Stop integration, API connections, and seamless system-to-system communication.',
  keywords: 'logistics automation australia, custom system development, 1-stop integration, API development, system integration, workflow optimization, BSB transport',
  ogImage: 'https://www.bsbtransport.com.au/images/services/index/sys.png',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Logistics Automation', to: '/services/logistics-automation' }
]

// 服务特性数据
const features = [
  {
    icon: 'i-lucide-code-2',
    title: 'Custom System Development',
    description: 'Tailored logistics management systems designed specifically for your business requirements and workflows.'
  },
  {
    icon: 'i-lucide-link',
    title: '1-Stop Platform Integration',
    description: 'Seamless integration with 1-Stop platform for automated data retrieval and streamlined operations.'
  },
  {
    icon: 'i-lucide-plug',
    title: 'API Development & Connection',
    description: 'Custom API development and integration services for connecting your systems with external platforms.'
  },
  {
    icon: 'i-lucide-network',
    title: 'System-to-System Integration',
    description: 'Advanced integration solutions for seamless communication between different business systems.'
  },
  {
    icon: 'lucide:zap',
    title: 'Real-Time Data Automation',
    description: 'Automated data processing and real-time updates across all connected systems and platforms.'
  },
  {
    icon: 'i-lucide-settings',
    title: 'Workflow Optimization',
    description: 'Process optimization and automation to improve efficiency and reduce manual operations.'
  }
]

// 技术解决方案
const solutions = [
  {
    title: 'Custom Logistics Platform',
    description: 'Complete logistics management system tailored to your specific needs',
    icon: 'i-lucide-monitor',
    features: ['Real-time tracking', 'Automated scheduling', 'Custom reporting', 'Mobile access']
  },
  {
    title: 'API Integration Services',
    description: 'Connect your systems with external platforms and services',
    icon: 'i-lucide-plug',
    features: ['RESTful APIs', 'Webhook integration', 'Data synchronization', 'Error handling']
  },
  {
    title: '1-Stop Automation',
    description: 'Automated data retrieval and processing from 1-Stop platform',
    icon: 'i-lucide-download',
    features: ['Automated imports', 'Data validation', 'Real-time updates', 'Custom mapping']
  },
  {
    title: 'System Integration',
    description: 'Seamless integration between your existing business systems',
    icon: 'i-lucide-network',
    features: ['ERP integration', 'CRM connectivity', 'Database sync', 'Workflow automation']
  }
]

// 开发流程
const developmentProcess = [
  {
    step: 1,
    title: 'Requirements Analysis',
    description: 'Comprehensive analysis of your current systems and automation requirements.',
    icon: 'i-lucide-search'
  },
  {
    step: 2,
    title: 'System Design',
    description: 'Custom system architecture design and integration planning.',
    icon: 'i-lucide-layout'
  },
  {
    step: 3,
    title: 'Development & Testing',
    description: 'Agile development process with continuous testing and quality assurance.',
    icon: 'i-lucide-code'
  },
  {
    step: 4,
    title: 'Deployment & Support',
    description: 'Professional deployment with ongoing support and maintenance services.',
    icon: 'i-lucide-rocket'
  }
]

// 技术优势
const advantages = [
  {
    title: 'Scalable Solutions',
    description: 'Systems designed to grow with your business and handle increasing complexity',
    icon: 'i-lucide-trending-up'
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security measures to protect your data and operations',
    icon: 'i-lucide-shield-check'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services',
    icon: 'i-lucide-headphones'
  },
  {
    title: 'Future-Proof',
    description: 'Modern technologies and architectures designed for long-term sustainability',
    icon: 'i-lucide-cpu'
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
    <section class="relative py-20 bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-800 dark:to-blue-800 h-full w-full"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Logistics Automation Development
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Cutting-edge logistics automation solutions including custom system development, 1-Stop integration, 
              API connections, and seamless system-to-system communication. Transform your operations with technology.
            </p>
            
            <!-- CTA Button -->
            <div class="flex justify-center sm:justify-start">
              <UButton size="xl" color="primary" to="/contact">
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
                <source src="/videos/sys.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <!-- Floating Animation Elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full animate-bounce"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Automation Development Capabilities
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced automation solutions designed to streamline your logistics operations
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
                <div class="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="feature.icon" class="text-2xl text-cyan-600 dark:text-cyan-400" />
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

    <!-- Solutions Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Solutions
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive automation solutions tailored to your specific business needs
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UCard
            v-for="solution in solutions"
            :key="solution.title"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="text-center">
                <div class="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="solution.icon" class="text-2xl text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ solution.title }}
                </h3>
              </div>
            </template>

            <div class="space-y-4">
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                {{ solution.description }}
              </p>
              
              <div class="space-y-2">
                <h4 class="font-semibold text-gray-900 dark:text-white text-sm">Key Features:</h4>
                <ul class="space-y-1">
                  <li
                    v-for="feature in solution.features"
                    :key="feature"
                    class="flex items-center text-xs text-gray-600 dark:text-gray-300"
                  >
                    <UIcon name="i-lucide-check" class="text-cyan-500 mr-2 flex-shrink-0 w-3 h-3" />
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Development Process Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Development Process
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional development methodology ensuring quality and timely delivery
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="step in developmentProcess"
            :key="step.step"
            class="text-center relative"
          >
            <!-- Connection Line -->
            <div
              v-if="step.step < developmentProcess.length"
              class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent z-0"
              :style="{ width: 'calc(100% - 2rem)' }"
            ></div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon :name="step.icon" class="text-2xl text-cyan-600 dark:text-cyan-400" />
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
            Why Choose Our Automation Services?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional automation solutions with cutting-edge technology and expert support
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="advantage in advantages"
            :key="advantage.title"
            class="text-center group"
          >
            <div class="w-20 h-20 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <UIcon :name="advantage.icon" class="text-3xl text-cyan-600 dark:text-cyan-400" />
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
    <section class="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-4">
            Ready to Automate Your Logistics?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Get a quote for our logistics automation services and transform your operations
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="primary" variant="solid" to="/quote" class="bg-white text-cyan-600 hover:bg-gray-100">
              Get Quote Now
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="xl" color="primary" variant="outline" to="/contact" class="border-white text-white hover:bg-white hover:text-cyan-600">
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
