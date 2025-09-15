<script setup lang="ts">
// 多语言切换组件
const currentLocale = ref('en-AU')

const locales = [
  { code: 'en-AU', name: 'English', flag: '🇦🇺' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' }
]

const switchLocale = (locale: string) => {
  currentLocale.value = locale
  console.log('Switching to:', locale)
}

const currentLocaleInfo = computed(() => {
  return locales.find(locale => locale.code === currentLocale.value) || locales[0]
})
</script>

<template>
  <div class="relative">
    <UDropdown 
      :items="[
        [
          {
            label: '🇦🇺 English',
            click: () => switchLocale('en-AU')
          },
          {
            label: '🇨🇳 中文',
            click: () => switchLocale('zh-CN')
          }
        ]
      ]"
      :popper="{ placement: 'bottom-end' }"
    >
      <UButton
        variant="ghost"
        color="neutral"
        size="lg"
        class="flex items-center gap-2 px-3 py-2 min-w-[90px]"
      >
        <span class="text-lg">{{ currentLocaleInfo?.flag }}</span>
        <span class="text-sm font-semibold">{{ currentLocaleInfo?.name }}</span>
        <UIcon 
          name="i-lucide-chevron-down" 
          class="w-4 h-4 ml-auto"
        />
      </UButton>
    </UDropdown>
  </div>
</template>
