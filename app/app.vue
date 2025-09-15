<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#171717' : 'white')

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://www.bsbtransport.com.au' }
  ],
  htmlAttrs: {
    lang: 'en-AU'
  },
  script: [
    {
      src: 'https://cdn.botpress.cloud/webchat/v3.2/inject.js'
    }
  ]
})

useSeoMeta({
  ogImage: 'https://www.bsbtransport.com.au/og-image.jpg',
  twitterImage: 'https://www.bsbtransport.com.au/og-image.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <SEOProvider>
    <UApp :toaster="{ expand: false }">
      <AppHeader />

      <UMain>
        <NuxtPage />
      </UMain>

      <AppFooter />
      
      <!-- Botpress聊天机器人 -->
      <ChatBot />
    </UApp>
  </SEOProvider>
</template>
