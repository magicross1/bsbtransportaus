<script setup lang="ts">
// 全局SEO配置
const seoConfig = {
  siteName: 'BSB Transport Australia',
  siteUrl: 'https://www.bsbtransport.com.au',
  defaultDescription: 'Professional container transport services across Australia. Specialized in trailer, sideloader, and container transport with safe, reliable, and on-time delivery.',
  defaultKeywords: 'container transport australia, trailer transport, sideloader transport, container storage, freight transport, logistics australia, BSB transport',
  ogImage: 'https://www.bsbtransport.com.au/og-image.jpg',
  twitterHandle: '@bsbtransportaus'
}

// 设置全局SEO
useSeoMeta({
  robots: 'index, follow',
  author: seoConfig.siteName,
  publisher: seoConfig.siteName,
  language: 'en-AU',
  geo: {
    region: 'AU',
    country: 'Australia'
  },
  ogSiteName: seoConfig.siteName,
  twitterSite: seoConfig.twitterHandle,
  twitterCreator: seoConfig.twitterHandle
})

// 设置全局结构化数据
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: seoConfig.siteName,
        url: seoConfig.siteUrl,
        description: seoConfig.defaultDescription,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      })
    }
  ]
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
