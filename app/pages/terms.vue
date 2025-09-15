<script setup lang="ts">
// Terms页面SEO配置
useSeoMeta({
  title: 'Terms of Service | BSB Transport Australia | Service Terms & Conditions',
  description: 'BSB Transport Australia terms of service and conditions. Read our service terms, conditions, and legal requirements for container transport services.',
  keywords: 'terms of service, service conditions, BSB transport terms, transport service agreement, legal terms',
  ogImage: 'https://www.bsbtransport.com.au/images/terms/terms-hero.jpg',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Terms of Service', to: '/terms' }
]

// 服务条款内容
const termsSections = [
  {
    title: 'Service Agreement',
    content: 'By using BSB Transport Australia services, you agree to be bound by these terms and conditions. These terms constitute a legally binding agreement between you and BSB Transport Australia Pty Ltd.',
    items: [
      'Acceptance of terms and conditions',
      'Service scope and limitations',
      'Customer obligations and responsibilities',
      'BSB Transport rights and obligations',
      'Modification of terms'
    ]
  },
  {
    title: 'Service Description',
    content: 'BSB Transport Australia provides professional container transport services including container trucking, sideloader services, import-export logistics, and wharf cartage.',
    items: [
      'Container transport and logistics services',
      'Port pickup and delivery services',
      'Customs clearance and documentation',
      'Container storage and handling',
      'Emergency and specialized services'
    ]
  },
  {
    title: 'Booking and Payment',
    content: 'All services must be booked in advance and payment terms are specified in individual service agreements.',
    items: [
      'Advance booking requirements',
      'Payment terms and methods',
      'Cancellation and refund policies',
      'Additional charges and surcharges',
      'Credit terms and conditions'
    ]
  },
  {
    title: 'Liability and Insurance',
    content: 'BSB Transport Australia maintains comprehensive insurance coverage and liability limitations as specified in our insurance policies.',
    items: [
      'Comprehensive cargo insurance coverage',
      'Public liability insurance',
      'Liability limitations and exclusions',
      'Customer insurance requirements',
      'Claims process and procedures'
    ]
  },
  {
    title: 'Safety and Compliance',
    content: 'All services are provided in compliance with Australian transport regulations, safety standards, and industry best practices.',
    items: [
      'Compliance with transport regulations',
      'Safety protocols and procedures',
      'Driver qualifications and training',
      'Vehicle maintenance and inspection',
      'Environmental compliance'
    ]
  },
  {
    title: 'Force Majeure',
    content: 'BSB Transport Australia is not liable for delays or failures caused by circumstances beyond our reasonable control.',
    items: [
      'Natural disasters and weather conditions',
      'Government regulations and restrictions',
      'Port closures and industrial action',
      'Equipment failures and breakdowns',
      'Other unforeseeable circumstances'
    ]
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
    <section class="relative py-20 bg-gradient-to-br from-gray-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation Placeholder -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-gray-200 to-indigo-200 dark:from-gray-800 dark:to-indigo-800 h-full w-full"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Terms of Service
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            These terms and conditions govern the use of BSB Transport Australia services. 
            Please read them carefully before using our services.
          </p>
          
          <!-- Last Updated -->
          <div class="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
            <UIcon name="i-lucide-calendar" class="mr-2 text-indigo-600 dark:text-indigo-400" />
            <span class="text-indigo-800 dark:text-indigo-200 font-medium">Last Updated: January 15, 2025</span>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Terms Content -->
    <section class="py-20">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <!-- Introduction -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Introduction
            </h2>
            <div class="prose prose-lg dark:prose-invert">
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Welcome to BSB Transport Australia. These Terms of Service ("Terms") govern your use of our 
                container transport services and website. By accessing or using our services, you agree to 
                be bound by these Terms.
              </p>
              <p class="text-gray-600 dark:text-gray-300">
                If you do not agree to these Terms, please do not use our services. We reserve the right 
                to modify these Terms at any time, and your continued use of our services constitutes 
                acceptance of any changes.
              </p>
            </div>
          </div>

          <!-- Terms Sections -->
          <div class="space-y-12">
            <div
              v-for="section in termsSections"
              :key="section.title"
              class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm"
            >
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {{ section.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                {{ section.content }}
              </p>
              
              <ul class="space-y-2">
                <li
                  v-for="item in section.items"
                  :key="item"
                  class="flex items-start"
                >
                  <UIcon name="i-lucide-check" class="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-gray-600 dark:text-gray-300">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Additional Terms -->
          <div class="mt-16 space-y-8">
            <div class="bg-yellow-50 dark:bg-yellow-900 rounded-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <UIcon name="i-lucide-alert-triangle" class="mr-2 text-yellow-600 dark:text-yellow-400" />
                Important Notice
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                These terms are subject to Australian law and jurisdiction. Any disputes will be resolved 
                in accordance with Australian legal procedures. For specific service agreements, please 
                refer to individual contracts and service level agreements.
              </p>
            </div>

            <div class="bg-green-50 dark:bg-green-900 rounded-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <UIcon name="i-lucide-shield-check" class="mr-2 text-green-600 dark:text-green-400" />
                Compliance
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                BSB Transport Australia operates in full compliance with Australian transport regulations, 
                including Chain of Responsibility (CoR) legislation, MSIC requirements, and industry safety standards.
              </p>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="mt-16 bg-blue-50 dark:bg-blue-900 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Questions About Terms?
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              If you have any questions about these Terms of Service, need clarification on any provisions, 
              or wish to discuss service agreements, please contact our Legal Department:
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-start">
                <UIcon name="i-lucide-mail" class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">Email</p>
                  <a href="mailto:admin@bsbtransport.com.au" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors">
                    admin@bsbtransport.com.au
                  </a>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">For legal inquiries and terms clarification</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <UIcon name="i-lucide-phone" class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <a href="tel:+61456881666" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors">
                    +61 456 881 666
                  </a>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Available during business hours</p>
                </div>
              </div>
              
              <div class="flex items-start md:col-span-2">
                <UIcon name="i-lucide-map-pin" class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">Registered Office</p>
                  <p class="text-gray-600 dark:text-gray-300">
                    7 Hume Highway<br>
                    Warwick Farm NSW 2170<br>
                    Australia
                  </p>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Legal correspondence and service of process</p>
                </div>
              </div>
            </div>
            
            <!-- Legal Notice -->
            <div class="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-blue-500">
              <div class="flex items-start">
                <UIcon name="i-lucide-scale" class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white mb-2">Legal Notice</p>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">
                    All legal notices, service of process, and formal correspondence should be sent to our 
                    registered office address above. We will respond to all legal inquiries within 7 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Terms Updates -->
          <div class="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Terms Updates
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              We may update these Terms of Service from time to time to reflect changes in our services 
              or applicable laws. We will notify you of any material changes by posting the updated 
              terms on our website and updating the "Last Updated" date.
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
            Ready to Use Our Services?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Contact us today to discuss your container transport needs and get a professional quote
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="white" variant="solid" to="/quote">
              Get Quote
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="xl" color="white" variant="outline" to="/contact">
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
