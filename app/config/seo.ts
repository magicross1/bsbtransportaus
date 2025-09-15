// 性能优化配置
export const performanceConfig = {
  // 图片优化
  imageOptimization: {
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

  // 预加载关键资源
  preloadResources: [
    '/fonts/main.woff2',
    '/css/main.css'
  ],

  // 延迟加载非关键资源
  lazyLoadResources: [
    '/js/analytics.js',
    '/js/chat-widget.js'
  ],

  // Core Web Vitals 优化
  coreWebVitals: {
    // 最大内容绘制 (LCP) 目标: < 2.5s
    lcpTarget: 2500,
    // 首次输入延迟 (FID) 目标: < 100ms
    fidTarget: 100,
    // 累积布局偏移 (CLS) 目标: < 0.1
    clsTarget: 0.1
  }
}

// SEO关键词配置
export const seoKeywords = {
  primary: [
    'container transport australia',
    'trailer transport',
    'sideloader transport',
    'container storage',
    'freight transport',
    'logistics australia',
    'BSB transport'
  ],
  secondary: [
    'container haulage',
    'intermodal transport',
    'port to door',
    'container logistics',
    'freight forwarding',
    'transportation services',
    'cargo transport'
  ],
  longTail: [
    'professional container transport services australia',
    'reliable trailer transport company',
    'specialized sideloader transport services',
    'container storage and transport solutions',
    'freight transport logistics australia'
  ]
}

// 结构化数据模板
export const structuredDataTemplates = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BSB Transport Australia',
    legalName: 'BSB Transport Australia Pty Ltd',
    url: 'https://www.bsbtransport.com.au',
    logo: 'https://www.bsbtransport.com.au/logo.png',
    description: 'Professional container transport services across Australia',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressRegion: 'Australia'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+61-XXX-XXX-XXX',
      contactType: 'customer service',
      availableLanguage: ['English', 'Chinese']
    }
  },

  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'BSB Transport Australia',
    description: 'Professional container transport services across Australia',
    url: 'https://www.bsbtransport.com.au',
    telephone: '+61-XXX-XXX-XXX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressRegion: 'Australia'
    },
    openingHours: 'Mo-Fr 08:00-18:00',
    priceRange: '$$',
    serviceArea: {
      '@type': 'Country',
      name: 'Australia'
    }
  },

  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Container Transport Services',
    description: 'Professional container transport services with specialized equipment',
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
      name: 'Container Transport Services'
    }
  }
}
