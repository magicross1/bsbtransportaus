<script setup lang="ts">
// Privacy页面SEO配置
useSeoMeta({
  title: 'Privacy Policy | BSB Transport Australia | Data Protection & Privacy',
  description: 'BSB Transport Australia privacy policy. Learn how we collect, use, and protect your personal information in compliance with Australian privacy laws.',
  keywords: 'privacy policy, data protection, BSB transport privacy, Australian privacy laws, personal information',
  ogImage: 'https://www.bsbtransport.com.au/images/privacy/privacy-hero.jpg',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Privacy Policy', to: '/privacy' }
]

// 隐私政策内容
const privacySections = [
  {
    title: 'Information We Collect',
    content: 'We collect personal information that you provide to us directly, such as when you request a quote, contact us, or use our services. This may include your name, email address, phone number, company information, and transport requirements.',
    items: [
      'Contact information (name, email, phone)',
      'Company and business details',
      'Transport and logistics requirements',
      'Payment and billing information',
      'Communication preferences'
    ]
  },
  {
    title: 'How We Use Your Information',
    content: 'We use your personal information to provide our transport services, communicate with you, process payments, and improve our services.',
    items: [
      'Provide container transport services',
      'Process quotes and bookings',
      'Communicate about services',
      'Process payments and billing',
      'Improve our services and operations'
    ]
  },
  {
    title: 'Information Sharing',
    content: 'We do not sell, trade, or rent your personal information to third parties. We may share information only as necessary to provide our services or as required by law.',
    items: [
      'Service providers and contractors',
      'Legal and regulatory requirements',
      'Business transfers or mergers',
      'With your explicit consent',
      'Emergency situations'
    ]
  },
  {
    title: 'Data Security',
    content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
    items: [
      'Encrypted data transmission',
      'Secure data storage',
      'Access controls and authentication',
      'Regular security audits',
      'Staff training on data protection'
    ]
  },
  {
    title: 'Your Rights',
    content: 'You have certain rights regarding your personal information under Australian privacy laws.',
    items: [
      'Access to your personal information',
      'Correction of inaccurate information',
      'Deletion of personal information',
      'Opt-out of marketing communications',
      'Data portability'
    ]
  },
  {
    title: 'Cookies and Tracking',
    content: 'We use cookies and similar technologies to improve your experience on our website and analyze usage patterns.',
    items: [
      'Essential cookies for website functionality',
      'Analytics cookies for usage insights',
      'Marketing cookies for personalization',
      'Cookie preferences management',
      'Third-party service cookies'
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
    <section class="relative py-20 bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation Placeholder -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-gray-200 to-blue-200 dark:from-gray-800 dark:to-blue-800 h-full w-full"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Your privacy is important to us. This policy explains how BSB Transport Australia 
            collects, uses, and protects your personal information.
          </p>
          
          <!-- Last Updated -->
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <UIcon name="i-lucide-calendar" class="mr-2 text-blue-600 dark:text-blue-400" />
            <span class="text-blue-800 dark:text-blue-200 font-medium">Last Updated: January 15, 2025</span>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Privacy Policy Content -->
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
                BSB Transport Australia Pty Ltd ("we," "our," or "us") is committed to protecting your privacy 
                and personal information. This Privacy Policy explains how we collect, use, disclose, and protect 
                your information when you use our services or visit our website.
              </p>
              <p class="text-gray-600 dark:text-gray-300">
                This policy complies with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth) 
                and other applicable privacy laws in Australia.
              </p>
            </div>
          </div>

          <!-- Privacy Sections -->
          <div class="space-y-12">
            <div
              v-for="section in privacySections"
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

          <!-- Contact Information -->
          <div class="mt-16 bg-blue-50 dark:bg-blue-900 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              If you have any questions about this Privacy Policy, wish to exercise your privacy rights, 
              or need to report a privacy concern, please contact our Privacy Officer:
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-start">
                <UIcon name="i-lucide-mail" class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">Email</p>
                  <a href="mailto:admin@bsbtransport.com.au" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors">
                    admin@bsbtransport.com.au
                  </a>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">For privacy inquiries and data requests</p>
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
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Postal correspondence welcome</p>
                </div>
              </div>
            </div>
            
            <!-- Response Time Notice -->
            <div class="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-blue-500">
              <div class="flex items-start">
                <UIcon name="i-lucide-info" class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white mb-2">Response Time</p>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">
                    We aim to respond to all privacy-related inquiries within 5 business days. 
                    For urgent privacy concerns, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Policy Updates -->
          <div class="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Policy Updates
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or applicable laws. We will notify you of any material changes by posting the updated 
              policy on our website and updating the "Last Updated" date.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-4">
            Questions About Privacy?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Contact us if you have any questions about our privacy practices or your personal information
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="primary" variant="solid" to="/contact">
              Contact Us
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="xl" color="secondary" variant="outline" to="/terms">
              Terms of Service
              <template #trailing>
                <UIcon name="i-lucide-file-text" />
              </template>
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
