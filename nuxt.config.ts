// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@nuxt/icon'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  compatibilityDate: '2025-01-15',

  ssr: true,

  // 静态构建配置 - 修复图标问题
  nitro: {
    preset: 'static',
    compressPublicAssets: true,
    prerender: {
      routes: [
        '/',
        '/about',
        '/services',
        '/services/container-storage',
        '/services/drop-trailer',
        '/services/logistics-automation',
        '/services/quote-calculator',
        '/services/sideloader',
        '/services/standard-trailer',
        '/fleet',
        '/coverage',
        '/quote',
        '/contact',
        '/careers',
        '/privacy',
        '/terms'
      ]
    },
    experimental: {
      wasm: true
    },
    // 确保图标在静态构建时正确工作
    storage: {
      icons: {
        driver: 'fs',
        base: './.nuxt/dist/icons'
      }
    },
    // 禁用图标 API 路由
    routeRules: {
      '/api/_nuxt_icon/**': { prerender: false }
    }
  },

  site: {
    name: 'BSB Transport Australia',
    url: 'https://www.bsbtransport.com.au',
    description: 'Professional container transport services across Australia. Specialized in trailer, sideloader, and container transport with safe, reliable, and on-time delivery.',
    defaultLocale: 'en',
    identity: {
      type: 'Organization',
      legalName: 'BSB Transport Australia Pty Ltd',
      logo: 'https://www.bsbtransport.com.au/logo.png',
      sameAs: [
        'https://www.facebook.com/bsbtransportaus',
        'https://www.linkedin.com/company/bsb-transport-australia',
        'https://www.instagram.com/bsbtransportaus'
      ]
    }
  },

  seo: {
    redirectToCanonicalSiteUrl: true
  },

  experimental: {
    payloadExtraction: false
  },

  build: {
    transpile: ['@nuxt/ui']
  },

  // 多语言支持
  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English (Australia)' }
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // 图片优化
  image: {
    quality: 80,
    format: ['webp', 'avif', 'png', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // 图标配置 - 静态构建时强制内联
  icon: {
    serverBundle: 'local',
    collections: ['lucide', 'simple-icons'],
    // 关键：静态构建时强制内联所有图标
    mode: 'inline'
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
