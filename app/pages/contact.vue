<script setup lang="ts">
// Contact页面SEO配置
useSeoMeta({
  title: 'Contact Us | Container Transport Australia | BSB Transport',
  description: 'Contact BSB Transport Australia for professional container transport services. Multiple contact channels, business hours, and location information across Australia.',
  keywords: 'contact BSB transport, container transport contact, transport services contact, BSB transport australia',
  ogImage: 'https://www.bsbtransport.com.au/images/index.png',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Contact Us', to: '/contact' }
]

// 联系信息
const contactInfo = {
  phone: '+61 456 881 666',
  email: 'ops@bsbtransport.com.au',
  address: '7 hume hwy, Warwick Farm NSW 2170, Australia',
  businessHours: {
    weekdays: 'Monday - Friday: 6:00 AM - 23:00 PM',
    saturday: 'Saturday: 8:00 AM - 12:00 PM',
    sunday: 'Sunday: Emergency Only (24/7)'
  }
}

// 邮件模板数据
const emailTemplates = {
  quote: "Hi, I need a quote for container transport from [Origin] to [Destination]. Container size: [20ft/40ft], Weight: [X tonnes], Timeline: [Date]. Please provide pricing and availability.",
  service: "Hello, I'm interested in your [Standard Trailer/Sideloader/Storage] services. Could you provide more information about your capabilities and service areas?",
  general: "Hi, I have questions about your transport services. Please contact me at [Your Phone] or reply to this email. Thank you!"
}

// 联系渠道
const contactChannels = [
  {
    title: 'Phone Support',
    description: 'Call us directly for immediate assistance',
    contact: '+61 456 881 666',
    icon: 'lucide:phone',
    color: 'blue',
    available: '24/7 Emergency'
  },
  {
    title: 'Email Support',
    description: 'Send us an email for detailed inquiries',
    contact: 'ops@bsbtransport.com.au',
    icon: 'lucide:mail',
    color: 'green',
    available: 'Response within 2 hours'
  },
  {
    title: 'Live Chat',
    description: 'Chat with our support team online',
    contact: 'Start Chat(update soon)',
    icon: 'lucide:message-circle',
    color: 'purple',
    available: 'Mon-Fri 8AM-6PM'
  },
  {
    title: 'Office Visit',
    description: 'Visit our office for face-to-face consultation',
    contact: '7 hume hwy, Warwick Farm NSW 2170, Australia',
    icon: 'lucide:map-pin',
    color: 'orange',
    available: 'Mon-Fri 9AM-5PM'
  }
]

// 办公室位置 - 添加坐标信息
const officeLocations = [
  {
    city: 'Sydney',
    address: '7 hume hwy, Warwick Farm NSW 2170, Australia',
    phone: '+61 456 881 666',
    email: 'ops@bsbtransport.com.au',
    hours: 'Mon-Fri: 6AM-6PM, Sat: 8AM-4PM',
    image: '/images/offices/sydney-office.jpg',
    icon: 'lucide:building',
    coordinates: {
      lat: -33.9205,
      lng: 150.8889
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.123456789!2d150.8889!3d-33.9205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a123456789ab%3A0x1234567890abcdef!2s3%20Hume%20Hwy%2C%20Warwick%20Farm%20NSW%202170%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau'
  },
  {
    city: 'Melbourne',
    address: '69 Bunting Rd,Brooklyn VIC 3012, Australia',
    phone: '+61 456 881 666',
    email: 'ops@bsbtransport.com.au',
    hours: 'Mon-Fri: 6AM-6PM, Sat: 8AM-4PM',
    image: '/images/offices/melbourne-office.jpg',
    icon: 'lucide:building',
    coordinates: {
      lat: -37.8136,
      lng: 144.9631
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.123456789!2d144.9631!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65a123456789ab%3A0x1234567890abcdef!2s69%20Bunting%20Rd%2C%20Brooklyn%20VIC%203012%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau'
  },
  {
    city: 'Brisbane',
    address: 'coming soon',
    phone: '+61 456 881 666',
    email: 'ops@bsbtransport.com.au',
    hours: 'coming soon',
    image: '/images/offices/brisbane-office.jpg',
    icon: 'lucide:building',
    coordinates: {
      lat: -27.4698,
      lng: 153.0251
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.123456789!2d153.0251!3d-27.4698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a123456789ab%3A0x1234567890abcdef!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau'
  }
]

// 生成邮件链接
const generateEmailLink = (template: string) => {
  const subject = encodeURIComponent('Transport Inquiry from BSB Transport Website')
  const body = encodeURIComponent(template)
  return `mailto:ops@bsbtransport.com.au?subject=${subject}&body=${body}`
}
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
            Contact BSB Transport Australia
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get in touch with our professional team for container transport services.
            Multiple contact channels available for your convenience.
          </p>

          <!-- Quick Contact Info -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div class="text-center">
              <UIcon name="lucide:phone" class="text-3xl text-green-600 dark:text-green-400 mb-2" />
              <div class="font-semibold text-gray-900 dark:text-white">{{ contactInfo.phone }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">24/7 Emergency</div>
            </div>
            <div class="text-center">
              <UIcon name="lucide:mail" class="text-3xl text-blue-600 dark:text-blue-400 mb-2" />
              <div class="font-semibold text-gray-900 dark:text-white">{{ contactInfo.email }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">Quick Response</div>
            </div>
            <div class="text-center">
              <UIcon name="lucide:map-pin" class="text-3xl text-purple-600 dark:text-purple-400 mb-2" />
              <div class="font-semibold text-gray-900 dark:text-white">Sydney Office</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">Visit Us</div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact Channels Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Multiple Ways to Reach Us
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the contact method that works best for you
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UCard
            v-for="channel in contactChannels"
            :key="channel.title"
            class="group hover:shadow-xl transition-all duration-300 text-center"
          >
            <template #header>
              <div class="text-center">
                <div class="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="channel.icon" class="text-2xl text-gray-600 dark:text-gray-400" />
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {{ channel.title }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  {{ channel.description }}
                </p>
              </div>
            </template>

            <div class="space-y-3">
              <div class="font-semibold text-gray-900 dark:text-white">
                {{ channel.contact }}
              </div>
              <UBadge :color="channel.color" variant="soft" size="sm">
                {{ channel.available }}
              </UBadge>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Email Contact Section -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
        <div class="absolute top-0 left-0 w-full h-full">
          <div class="grid grid-cols-12 grid-rows-8 h-full w-full">
            <div
              v-for="i in 96"
              :key="i"
              class="border border-blue-400/10 animate-pulse"
              :style="{ animationDelay: `${i * 0.05}s` }"
            ></div>
          </div>
        </div>
      </div>

      <UContainer class="relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <UIcon name="lucide:mail" class="w-8 h-8 text-white" />
            </div>
            <h2 class="text-5xl font-bold text-white mb-6">
              Send Us an Email
            </h2>
            <p class="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Connect with our professional team directly via email. We'll respond within 2 hours during business hours.
            </p>
          </div>

          <!-- Email Contact Card -->
          <div class="relative">
            <!-- Glow Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur opacity-30"></div>

            <UCard class="relative z-10 shadow-3xl border-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
              <div class="p-8">
                <!-- Email Address Display -->
                <div class="text-center mb-8">
                  <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full mb-6">
                    <UIcon name="lucide:at-sign" class="text-3xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    ops@bsbtransport.com.au
                  </h3>
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Our operations team is ready to assist you
                  </p>
                </div>

                <!-- Email Button -->
                <div class="text-center mb-8">
                  <a
                    href="mailto:ops@bsbtransport.com.au?subject=Transport Inquiry from BSB Transport Website&body=Hello BSB Transport Team,%0D%0A%0D%0AI am interested in your container transport services.%0D%0A%0D%0APlease provide me with:%0D%0A- Service details and pricing%0D%0A- Available time slots%0D%0A- Any additional information%0D%0A%0D%0AThank you!"
                    class="relative inline-block group"
                  >
                    <!-- Glow Effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <!-- Main Button -->
                    <UButton
                      size="xl"
                      color="primary"
                      class="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 border-0 px-16 py-5 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                    >
                      <div class="flex items-center space-x-4">
                        <UIcon name="lucide:mail" class="w-6 h-6" />
                        <span>Open Email Client</span>
                        <UIcon name="lucide:external-link" class="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </UButton>

                    <!-- Success Animation -->
                    <div class="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div class="w-6 h-6 bg-green-400 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                        <UIcon name="lucide:check" class="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </a>
                </div>

                <!-- Quick Email Templates -->
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
                  <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <UIcon name="lucide:zap" class="w-5 h-5 text-yellow-500 mr-2" />
                    Quick Email Templates
                  </h4>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- Quote Request Template -->
                    <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                      <div class="flex items-center mb-3">
                        <UIcon name="lucide:calculator" class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                        <h5 class="font-semibold text-gray-900 dark:text-white text-sm">Quote Request</h5>
                      </div>
                      <p class="text-xs text-gray-600 dark:text-gray-300 mb-3">
                        "Hi, I need a quote for container transport from [Origin] to [Destination]. Container: [20ft/40ft], Timeline: [Date]. Please provide pricing."
                      </p>
                      <UButton
                        size="xs"
                        color="primary"
                        variant="outline"
                        :to="generateEmailLink(emailTemplates.quote)"
                        class="w-full"
                      >
                        Use Template
                      </UButton>
                    </div>

                    <!-- Service Inquiry Template -->
                    <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                      <div class="flex items-center mb-3">
                        <UIcon name="lucide:info" class="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                        <h5 class="font-semibold text-gray-900 dark:text-white text-sm">Service Inquiry</h5>
                      </div>
                      <p class="text-xs text-gray-600 dark:text-gray-300 mb-3">
                        "Hello, I'm interested in your [Standard Trailer/Sideloader/Storage] services. Please provide more information."
                      </p>
                      <UButton
                        size="xs"
                        color="success"
                        variant="outline"
                        :to="generateEmailLink(emailTemplates.service)"
                        class="w-full"
                      >
                        Use Template
                      </UButton>
                    </div>

                    <!-- General Questions Template -->
                    <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                      <div class="flex items-center mb-3">
                        <UIcon name="lucide:help-circle" class="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                        <h5 class="font-semibold text-gray-900 dark:text-white text-sm">General Questions</h5>
                      </div>
                      <p class="text-xs text-gray-600 dark:text-gray-300 mb-3">
                        "Hi, I have questions about your transport services. Please contact me at [Your Phone]. Thank you!"
                      </p>
                      <UButton
                        size="xs"
                        color="secondary"
                        variant="outline"
                        :to="generateEmailLink(emailTemplates.general)"
                        class="w-full"
                      >
                        Use Template
                      </UButton>
                    </div>
                  </div>
                </div>

                <!-- Response Time Info -->
                <div class="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-700">
                  <div class="flex items-center justify-center space-x-2">
                    <UIcon name="lucide:clock" class="w-5 h-5 text-green-600 dark:text-green-400" />
                    <p class="text-sm font-medium text-green-800 dark:text-green-300">
                      We'll respond within
                      <span class="font-bold text-green-900 dark:text-green-200">2 hours</span>
                      during business hours
                    </p>
                  </div>
                </div>

                <!-- Additional Contact Options -->
                <div class="mt-6 flex items-center justify-center space-x-6 text-xs text-gray-500 dark:text-gray-400">
                  <div class="flex items-center space-x-1">
                    <UIcon name="lucide:shield-check" class="w-4 h-4" />
                    <span>Secure & Confidential</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <UIcon name="lucide:phone" class="w-4 h-4" />
                    <span>Phone: +61 456 881 666</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <UIcon name="lucide:clock" class="w-4 h-4" />
                    <span>24/7 Emergency</span>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Office Locations Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Office Locations
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Visit our offices across Australia for face-to-face consultation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard
            v-for="office in officeLocations"
            :key="office.city"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="relative">
                <!-- Google Maps Embed -->
                <div class="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    :src="office.mapEmbedUrl"
                    width="100%"
                    height="100%"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    class="rounded-lg"
                  ></iframe>
                </div>

                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ office.city }} Office
                </h3>
              </div>
            </template>

            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon name="lucide:map-pin" class="text-gray-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="text-gray-600 dark:text-gray-300">{{ office.address }}</p>
                </div>
              </div>

              <div class="flex items-start">
                <UIcon name="lucide:phone" class="text-gray-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="text-gray-600 dark:text-gray-300">{{ office.phone }}</p>
                </div>
              </div>

              <div class="flex items-start">
                <UIcon name="lucide:mail" class="text-gray-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="text-gray-600 dark:text-gray-300">{{ office.email }}</p>
                </div>
              </div>

              <div class="flex items-start">
                <UIcon name="lucide:clock" class="text-gray-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="text-gray-600 dark:text-gray-300">{{ office.hours }}</p>
                </div>
              </div>

              <!-- Action Button -->
              <div class="pt-4">
                <UButton
                  :to="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`"
                  target="_blank"
                  variant="outline"
                  color="primary"
                  class="w-full"
                >
                  <UIcon name="lucide:navigation" class="mr-2" />
                  Get Directions
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Business Hours Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Business Hours
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300">
              Our operating hours across all locations
            </p>
          </div>

          <UCard class="shadow-xl">
            <div class="space-y-6">
              <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div class="flex items-center">
                  <UIcon name="lucide:calendar-days" class="text-blue-600 dark:text-blue-400 mr-3" />
                  <span class="font-semibold text-gray-900 dark:text-white">Weekdays</span>
                </div>
                <span class="text-gray-600 dark:text-gray-300">{{ contactInfo.businessHours.weekdays }}</span>
              </div>

              <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div class="flex items-center">
                  <UIcon name="lucide:calendar-check" class="text-green-600 dark:text-green-400 mr-3" />
                  <span class="font-semibold text-gray-900 dark:text-white">Saturday</span>
                </div>
                <span class="text-gray-600 dark:text-gray-300">{{ contactInfo.businessHours.saturday }}</span>
              </div>

              <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div class="flex items-center">
                  <UIcon name="lucide:shield-alert" class="text-red-600 dark:text-red-400 mr-3" />
                  <span class="font-semibold text-gray-900 dark:text-white">Sunday</span>
                </div>
                <span class="text-gray-600 dark:text-gray-300">{{ contactInfo.businessHours.sunday }}</span>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Map Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Us on the Map
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Interactive map showing our office locations across Australia
          </p>
        </div>

        <!-- Interactive Google Map -->
        <div class="relative">
          <div class="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.123456789!2d150.8889!3d-33.9205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a123456789ab%3A0x1234567890abcdef!2s3%20Hume%20Hwy%2C%20Warwick%20Farm%20NSW%202170%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="rounded-xl"
            ></iframe>
          </div>

          <!-- Map Legend -->
          <div class="absolute top-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 class="font-bold text-gray-900 dark:text-white mb-3">Office Locations</h3>
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Sydney Office</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Melbourne Office</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Brisbane Office (Coming Soon)</span>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <div class="flex flex-col space-y-2">
              <UButton
                to="https://www.google.com/maps/search/?api=1&query=3+hume+hwy+Warwick+Farm+NSW+2170+Australia"
                target="_blank"
                size="sm"
                variant="outline"
                color="primary"
              >
                <UIcon name="lucide:navigation" class="mr-1" />
                Directions
              </UButton>
              <UButton
                to="tel:+61456881666"
                size="sm"
                variant="outline"
                color="green"
              >
                <UIcon name="lucide:phone" class="mr-1" />
                Call Now
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Emergency Contact Section -->
    <section class="py-20 bg-gradient-to-r from-red-600 to-orange-700 text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-4">
            Emergency Contact
          </h2>
          <p class="text-xl mb-8 opacity-90">
            For urgent transport requirements or emergency situations, call our 24/7 emergency line
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="white" variant="solid" :to="`tel:${contactInfo.phone}`">
              Call Emergency Line
              <template #trailing>
                <UIcon name="lucide:phone" />
              </template>
            </UButton>
            <UButton size="xl" color="white" variant="outline" to="/quote">
              Get Quote
              <template #trailing>
                <UIcon name="lucide:arrow-right" />
              </template>
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
