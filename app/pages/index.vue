<script setup lang="ts">
// Hero内容 - 直接使用英文内容
const heroTitle = 'Professional Container Transport Services Across Australia'
const heroDescription = 'BSB Transport Australia delivers reliable container transport solutions with specialized trailers, sideloaders, and professional logistics services. Safe, on-time, and professional delivery across Australia.'

const { data: page } = await useAsyncData('index', () => queryCollection('content').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: 'BSB Transport Australia | Professional Container Transport Services',
  ogTitle: 'BSB Transport Australia | Professional Container Transport Services',
  description: 'BSB Transport Australia delivers reliable container transport solutions with specialized trailers, sideloaders, and professional logistics services. Safe, on-time delivery across Australia.',
  ogDescription: 'BSB Transport Australia delivers reliable container transport solutions with specialized trailers, sideloaders, and professional logistics services. Safe, on-time delivery across Australia.',
  keywords: 'BSB Transport Australia, container transport australia, trailer transport, sideloader transport, container storage, freight transport, logistics australia, professional transport services',
  ogImage: 'https://www.bsbtransport.com.au/images/index.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://www.bsbtransport.com.au/images/index.png',
  robots: 'index, follow',
  author: 'BSB Transport Australia',
  publisher: 'BSB Transport Australia'
})

// 添加结构化数据
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'BSB Transport Australia',
        legalName: 'BSB Transport Australia Pty Ltd',
        url: 'https://www.bsbtransport.com.au',
        logo: 'https://www.bsbtransport.com.au/logo.png',
        description: 'Professional container transport services across Australia. Specialized in trailer, sideloader, and container transport with safe, reliable, and on-time delivery.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '7 Hume Highway',
          addressLocality: 'Warwick Farm',
          addressRegion: 'NSW',
          postalCode: '2170',
          addressCountry: 'AU'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+61-456-881-666',
          contactType: 'customer service',
          availableLanguage: ['English', 'Chinese']
        },
        sameAs: [
          'https://www.facebook.com/bsbtransportaus',
          'https://www.linkedin.com/company/bsb-transport-australia',
          'https://www.instagram.com/bsbtransportaus'
        ],
        serviceArea: {
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
                name: 'Container Transport',
                description: 'Professional container transport services with specialized equipment'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Trailer Transport',
                description: 'Specialized trailer transport services across Australia'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Sideloader Transport',
                description: 'Sideloader transport services for efficient container handling'
              }
            }
          ]
        }
      })
    }
  ]
})
</script>

<template>
  <div
    v-if="page"
    class="relative"
  >
    <div class="hidden lg:block">
      <UColorModeImage
        light="/images/light/line-1.svg"
        dark="/images/dark/line-1.svg"
        class="absolute pointer-events-none pb-10 left-0 top-0 object-cover h-[650px]"
      />
    </div>

    <UPageHero
      :description="heroDescription"
      :links="page.hero.links"
      :ui="{
        container: 'md:pt-18 lg:pt-20 relative z-10',
        title: 'max-w-3xl mx-auto text-white drop-shadow-lg',
        description: 'text-white/90 drop-shadow-md',
        links: 'gap-4'
      }"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        <div class="relative animate-fade-in">
          <!-- 文字背景遮罩 -->
          <div class="absolute inset-0 bg-black/30 rounded-lg blur-sm -m-4"></div>
          <div class="relative">
            <MDC
              :value="heroTitle"
              unwrap="p"
              class="text-white font-bold drop-shadow-lg"
            />
          </div>
        </div>
      </template>

      <template #description>
        <div class="relative animate-fade-in-delay">
          <!-- 描述文字背景遮罩 -->
          <div class="absolute inset-0 bg-black/20 rounded-lg blur-sm -m-2"></div>
          <div class="relative">
            <MDC
              :value="heroDescription"
              unwrap="p"
              class="text-white/90 text-lg drop-shadow-md"
            />
          </div>
        </div>
      </template>

      <template #links>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <UButton
            v-for="link in page.hero.links"
            :key="link.label"
            :to="link.to"
            :color="link.color"
            :variant="link.variant"
            :size="link.size"
            class="font-bold px-8 py-4 shadow-lg backdrop-blur-sm"
            :class="{
              'bg-orange-500 hover:bg-orange-600 text-white border-orange-500': link.color === 'primary',
              'bg-white/20 hover:bg-white/30 text-white border-white/50 backdrop-blur-sm': link.variant === 'outline'
            }"
          >
            <template v-if="link.trailing" #trailing>
              <UIcon :name="link.icon || 'i-lucide-arrow-right'" class="w-5 h-5" />
            </template>
            <template v-if="!link.trailing && link.icon" #leading>
              <UIcon :name="link.icon" class="w-5 h-5" />
            </template>
            {{ link.label }}
          </UButton>
        </div>
      </template>
    </UPageHero>

    <UPageSection
      :description="page.section.description"
      :features="page.section.features"
      orientation="horizontal"
      :ui="{
        container: 'lg:px-0 2xl:px-20 mx-0 max-w-none md:mr-10',
        features: 'gap-0'
      }"
      reverse
    >
      <template #title>
        <MDC
          :value="page.section.title"
          class="sm:*:leading-11"
        />
      </template>
      <img
        :src="page.section.images.desktop"
        :alt="page.section.title"
        class="hidden lg:block 2xl:hidden left-0 w-full max-w-2xl"
      >
      <img
        :src="page.section.images.mobile"
        :alt="page.section.title"
        class="block lg:hidden 2xl:block 2xl:w-full 2xl:max-w-2xl"
      >
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="features"
      :description="page.features.description"
      :ui="{
        title: 'text-left @container relative flex',
        description: 'text-left'
      }"
      class="relative overflow-hidden"
    >
      <div class="absolute rounded-full -left-10 top-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
      <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
      <template #title>
        <MDC
          :value="page.features.title"
          class="*:leading-9"
        />
        <div class="hidden @min-[1020px]:block">
          <UColorModeImage
            light="/images/light/line-2.svg"
            dark="/images/dark/line-2.svg"
            class="absolute top-0 right-0 size-full transform scale-95 translate-x-[70%]"
          />
        </div>
      </template>

      <!-- 自定义2行3列布局 -->
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(feature, index) in page.features.features"
            :key="index"
            class="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-900"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div :class="feature.ui.leading">
                  <UIcon :name="feature.icon" class="w-6 h-6 text-primary" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {{ feature.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="steps"
      :description="page.steps.description"
      class="relative overflow-hidden"
    >
      <template #headline>
        <UColorModeImage
          light="/images/light/line-3.svg"
          dark="/images/dark/line-3.svg"
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
        />
      </template>
      <template #title>
        <MDC :value="page.steps.title" />
      </template>

      <!-- 时间线样式的流程 -->
      <UContainer>
        <div class="relative">
          <!-- 时间线连接线 -->
          <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(step, index) in page.steps.items"
              :key="index"
              class="relative group"
            >
              <!-- 步骤编号圆圈 -->
              <div class="flex flex-col items-center text-center">
                <div class="relative z-10 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {{ index + 1 }}
                </div>
                
                <!-- 步骤图标 -->
                <div class="mb-4">
                  <UIcon :name="step.icon" class="w-8 h-8 text-primary" />
                </div>
                
                <!-- 步骤内容 -->
                <div class="space-y-2">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {{ step.title }}
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </UPageSection>

    <!-- 服务对比区域 - 合并图片和对比卡片 -->
    <UPageSection
      id="service-comparison"
      class="mb-32"
      title="Service Comparison"
      description="Visual comparison of our two transport methods"
    >
      <UContainer>
        <!-- 图片对比区域 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <!-- Standard/Drop Trailer Transport 图片区域 -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white text-center">
              Standard / Drop Trailer Transport
            </h3>
            <div class="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/services/standard-trailer.png" 
                alt="Standard Trailer Transport - Container stays on trailer"
                class="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div class="p-4 bg-white dark:bg-gray-900">
                <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Container stays on trailer for cost-effective transport
                </p>
              </div>
            </div>
          </div>

          <!-- Sideloader Transport 图片区域 -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white text-center">
              Sideloader Transport
            </h3>
            <div class="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/services/sideloader.png" 
                alt="Sideloader Transport - Container drops to ground"
                class="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div class="p-4 bg-white dark:bg-gray-900">
                <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Container drops to ground for flexible unloading
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 服务对比卡片区域 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="(plan, index) in page.pricing.plans"
            :key="index"
            class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div class="text-center mb-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {{ plan.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-lg">
                {{ plan.description }}
              </p>
            </div>

            <div class="space-y-4 mb-8">
              <div
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-start gap-3"
              >
                <UIcon name="i-lucide-check" class="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
              </div>
            </div>

            <div class="text-center">
              <UButton
                :to="plan.button.to"
                :color="plan.button.color"
                :variant="plan.button.variant"
                size="lg"
                class="font-bold px-8 py-3"
              >
                {{ plan.button.label }}
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </UPageSection>

    <UPageSection
      id="testimonials"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :items="page.testimonials.items"
    >
      <template #headline>
        <UColorModeImage
          light="/images/light/line-5.svg"
          dark="/images/dark/line-5.svg"
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
        />
      </template>
      <template #title>
        <MDC :value="page.testimonials.title" />
      </template>

      <UContainer>
        <!-- 滚动播放的评价卡片 -->
        <div class="relative overflow-hidden">
          <!-- 滚动容器 -->
          <div class="flex animate-scroll gap-6 py-4" style="animation-duration: 30s;">
            <!-- 第一组评价 -->
            <div
              v-for="(testimonial, index) in page.testimonials.items"
              :key="`first-${index}`"
              class="flex-shrink-0 w-80"
            >
              <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <!-- 评价内容 -->
                <div class="mb-6">
                  <div class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg relative">
                    <UIcon name="i-lucide-quote" class="absolute -top-2 -left-2 w-8 h-8 text-orange-500/20" />
                    <span class="pl-6">{{ testimonial.quote }}</span>
                  </div>
                </div>
                
                <!-- 用户信息 -->
                <div class="flex items-center gap-4">
                  <img
                    :src="testimonial.user.avatar.src"
                    :alt="testimonial.user.name"
                    class="w-12 h-12 rounded-full object-cover ring-2 ring-orange-500/20"
                  >
                  <div class="flex-1">
                    <div class="font-semibold text-gray-900 dark:text-white">
                      {{ testimonial.user.name }}
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                      {{ testimonial.user.description }}
                    </div>
                    <!-- 行业标签 -->
                    <div class="mt-1">
                      <span class="inline-block px-2 py-1 text-xs font-medium bg-orange-500 text-white rounded-full">
                        {{ (testimonial.user as any).industry || 'Transport & Logistics' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 第二组评价（重复，用于无缝滚动） -->
            <div
              v-for="(testimonial, index) in page.testimonials.items"
              :key="`second-${index}`"
              class="flex-shrink-0 w-80"
            >
              <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <!-- 评价内容 -->
                <div class="mb-6">
                  <div class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg relative">
                    <UIcon name="i-lucide-quote" class="absolute -top-2 -left-2 w-8 h-8 text-orange-500/20" />
                    <span class="pl-6">{{ testimonial.quote }}</span>
                  </div>
                </div>
                
                <!-- 用户信息 -->
                <div class="flex items-center gap-4">
                  <img
                    :src="testimonial.user.avatar.src"
                    :alt="testimonial.user.name"
                    class="w-12 h-12 rounded-full object-cover ring-2 ring-orange-500/20"
                  >
                  <div class="flex-1">
                    <div class="font-semibold text-gray-900 dark:text-white">
                      {{ testimonial.user.name }}
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                      {{ testimonial.user.description }}
                    </div>
                    <!-- 行业标签 -->
                    <div class="mt-1">
                      <span class="inline-block px-2 py-1 text-xs font-medium bg-orange-500 text-white rounded-full">
                        {{ (testimonial.user as any).industry || 'Transport & Logistics' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 渐变遮罩 -->
          <div class="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
          <div class="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
        </div>
      </UContainer>
    </UPageSection>

    <USeparator />

    <UPageCTA
      :title="page.cta.title"
      :description="(page.cta as any).subtitle || page.cta.description"
      variant="naked"
      class="overflow-hidden @container"
    >
      <template #title>
        <MDC :value="page.cta.title" />

        <div class="@max-[1280px]:hidden">
          <UColorModeImage
            light="/images/light/line-6.svg"
            dark="/images/dark/line-6.svg"
            class="absolute left-10 -top-10 sm:top-0 h-full"
          />
          <UColorModeImage
            light="/images/light/line-7.svg"
            dark="/images/dark/line-7.svg"
            class="absolute right-0 bottom-0 h-full"
          />
        </div>
      </template>

      <!-- 本地化卖点 -->
      <template #description>
        <div class="text-center mb-8">
          <div class="text-lg font-semibold text-primary mb-2">
            {{ page.cta.description }}
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            {{ (page.cta as any).subtitle || page.cta.description }}
          </p>
        </div>
      </template>

      <!-- 双按钮布局 -->
      <template #links>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <UButton
            v-for="link in page.cta.links"
            :key="link.label"
            :to="link.to"
            :color="link.color"
            :variant="link.variant"
            :size="link.size"
            class="font-bold px-8 py-4"
          >
            <template v-if="(link as any).trailingIcon || link.trailing" #trailing>
              <UIcon :name="(link as any).trailingIcon || link.icon" class="w-5 h-5" />
            </template>
            <template v-if="link.icon" #leading>
              <UIcon :name="link.icon" class="w-5 h-5" />
            </template>
            {{ link.label }}
          </UButton>
        </div>
      </template>

      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-scroll {
  animation: scroll linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 0.8s ease-out 0.4s forwards;
  opacity: 0;
}
</style>
