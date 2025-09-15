<script setup lang="ts">
// 页面导航菜单
const navigationItems = [
  {
    label: 'Home',
    to: '/',
    icon: 'lucide:home'
  },
  {
    label: 'Fleet',
    to: '/fleet',
    icon: 'lucide:truck'
  },
  {
    label: 'Coverage',
    to: '/coverage',
    icon: 'lucide:map'
  },
  {
    label: 'Services',
    to: '/services',
    icon: 'lucide:truck',
    children: [
      { label: 'Standard Trailer Transport', to: '/services/standard-trailer' },
      { label: 'Drop Trailer Transport', to: '/services/drop-trailer' },
      { label: 'Sideloader Transport', to: '/services/sideloader' },
      { label: 'Container Storage', to: '/services/container-storage' },
      { label: 'Logistics Automation', to: '/services/logistics-automation' },
      { label: 'Smart Quote Calculator', to: '/services/quote-calculator' }
    ]
  },
  {
    label: 'Careers',
    to: '/careers',
    icon: 'lucide:users'
  },
  {
    label: 'Contact',
    to: '/contact',
    icon: 'lucide:phone'
  },
  {
    label: 'About',
    to: '/about',
    icon: 'lucide:building-2'
  }
]

// 多语言切换功能已移除，只支持英文

// 获取当前路由
const route = useRoute()
const isActive = (path: string) => route.path === path
</script>

<template>
  <div class="relative">
    <!-- 语言切换功能已移除，只支持英文 -->
    
    <UHeader class="border-b border-gray-200 dark:border-gray-800 min-h-[80px] px-8">
    <template #left>
      <NuxtLink to="/" class="flex items-center">
        <div class="flex items-center gap-6">
          <!-- Logo图片 -->
          <img 
            src="/logo.png" 
            alt="BSB Transport Australia" 
            class="h-16 w-auto"
          />
          <div class="hidden sm:block">
            <div class="text-xl font-bold text-gray-900 dark:text-white">
              <div>BSB Transport</div>
              <div class="text-sm text-gray-600 dark:text-gray-400 -mt-1">Australia</div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </template>

    <template #right>
      <!-- 桌面端导航菜单 -->
      <div class="hidden lg:flex items-center gap-12">
        <!-- 自定义导航菜单 -->
        <nav class="flex items-center gap-8">
          <!-- Home -->
          <NuxtLink
            to="/"
            class="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            :class="{ 'text-blue-600 dark:text-blue-400': isActive('/') }"
          >
            Home
          </NuxtLink>
          
          <!-- Fleet -->
          <NuxtLink
            to="/fleet"
            class="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            :class="{ 'text-blue-600 dark:text-blue-400': isActive('/fleet') }"
          >
            Fleet
          </NuxtLink>
          
          <!-- Coverage -->
          <NuxtLink
            to="/coverage"
            class="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            :class="{ 'text-blue-600 dark:text-blue-400': isActive('/coverage') }"
          >
            Coverage
          </NuxtLink>
          
          <!-- Services 下拉菜单 -->
          <div class="relative group">
            <button class="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1">
              Services
              <UIcon name="i-lucide-chevron-down" class="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            
            <!-- 科技感下拉菜单 -->
            <div class="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-sm">
                <!-- 科技感装饰条 -->
                <div class="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
                
                <div class="p-2">
                  <NuxtLink
                    v-for="service in navigationItems.find(item => item.label === 'Services')?.children || []"
                    :key="service.to"
                    :to="service.to"
                    class="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 rounded-lg group/item"
                    :class="{ 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20': isActive(service.to) }"
                  >
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                      <span class="font-medium">{{ service.label }}</span>
                      <UIcon name="i-lucide-arrow-right" class="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Careers -->
          <NuxtLink
            to="/careers"
            class="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            :class="{ 'text-blue-600 dark:text-blue-400': isActive('/careers') }"
          >
            Careers
          </NuxtLink>
          
          <!-- Contact -->
          <NuxtLink
            to="/contact"
            class="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            :class="{ 'text-blue-600 dark:text-blue-400': isActive('/contact') }"
          >
            Contact
          </NuxtLink>
          
          <!-- About -->
          <NuxtLink
            to="/about"
            class="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            :class="{ 'text-blue-600 dark:text-blue-400': isActive('/about') }"
          >
            About
          </NuxtLink>
        </nav>
        
        <!-- 右侧控制区域 -->
        <div class="flex items-center gap-4">
          <!-- 主题切换 -->
          <UColorModeButton size="lg" class="p-3" />
          
          <!-- CTA按钮 -->
          <UButton
            to="/quote"
            color="primary"
            size="lg"
            class="font-bold px-6 py-3 whitespace-nowrap"
          >
            Get Quote
            <template #trailing>
              <UIcon name="i-lucide-arrow-right" class="w-5 h-5" />
            </template>
          </UButton>
        </div>
      </div>

      <!-- 移动端菜单按钮 -->
      <div class="lg:hidden flex items-center gap-3">
        <UColorModeButton size="lg" class="p-3" />
        <UButton
          to="/quote"
          color="primary"
          size="lg"
          class="font-bold px-4 py-2 whitespace-nowrap"
        >
          Quote
        </UButton>
      </div>
    </template>

    <!-- 移动端菜单内容 -->
    <template #body>
      <div class="space-y-6">
        <!-- 移动端导航菜单 -->
        <div class="space-y-3">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.to"
            :to="item.to"
            class="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :class="{ 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400': isActive(item.to) }"
          >
            <UIcon :name="item.icon" class="w-6 h-6" />
            <span class="font-semibold text-lg">{{ item.label }}</span>
          </NuxtLink>
        </div>
        
        <!-- 服务子菜单 -->
        <div class="ml-8 space-y-3">
          <div class="text-base font-bold text-gray-500 dark:text-gray-400 mb-3">Services</div>
          <NuxtLink
            v-for="service in navigationItems.find(item => item.label === 'Services')?.children || []"
            :key="service.to"
            :to="service.to"
            class="block p-3 text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            {{ service.label }}
          </NuxtLink>
        </div>
        
        <!-- 移动端CTA -->
        <div class="pt-6 border-t border-gray-200 dark:border-gray-700">
          <UButton
            to="/quote"
            color="primary"
            size="xl"
            block
            class="font-bold py-4"
          >
            Get Quote Now
            <template #trailing>
              <UIcon name="i-lucide-arrow-right" class="w-5 h-5" />
            </template>
          </UButton>
        </div>
      </div>
    </template>
  </UHeader>
  </div>
</template>
