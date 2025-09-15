<script setup lang="ts">
import { 
  calculateQuote, 
  getServiceTypeOptions, 
  getContainerSizeOptions,
  getAllSpecialFees,
  getAdditionalFeesByServiceType,
  type ServiceType,
  type ContainerSize,
  type DepotType
} from '~/data/pricing-manager-optimized'
import { getCitiesByDepot } from '~/data/transport-zones'

// Quote页面SEO配置
useSeoMeta({
  title: 'Get Quote | Container Transport Quote Australia | BSB Transport',
  description: 'Get a professional quote for container transport services. Easy online quote form for container trucking, sideloader, import-export, and wharf cartage services.',
  keywords: 'container transport quote australia, get quote, transport pricing, container services quote, BSB transport',
  ogImage: 'https://www.bsbtransport.com.au/images/services/index/quote.png',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Get Quote', to: '/quote' }
]

// 表单数据
const formData = ref({
  depot: '',
  city: '',
  containerSize: '20' as ContainerSize,
  serviceType: 'STD' as ServiceType,
  specialFees: [] as string[]
})

// 计算结果
const quoteResult = ref<any>(null)
const isLoading = ref(false)
const showContactSupport = ref(false)
const contactReason = ref('')

// 选项数据
const serviceTypeOptions = getServiceTypeOptions()
const containerSizeOptions = getContainerSizeOptions()

// 城市联想功能
const citySuggestions = ref<string[]>([])
const showCitySuggestions = ref(false)

// 获取城市建议
const getCitySuggestions = (query: string) => {
  if (!query || query.length < 2) {
    citySuggestions.value = []
    showCitySuggestions.value = false
    return
  }

  // 如果没有选择 Depot，尝试从两个州获取城市
  let allCities: string[] = []
  if (formData.value.depot) {
    allCities = getCitiesByDepot(formData.value.depot as DepotType)
  } else {
    // 如果没有选择 Depot，显示所有城市的建议
    const nswCities = getCitiesByDepot('NSW')
    const vicCities = getCitiesByDepot('VIC')
    allCities = [...nswCities, ...vicCities]
  }

  citySuggestions.value = allCities
    .filter((city: string) => city.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 8) // 限制显示8个建议

  showCitySuggestions.value = citySuggestions.value.length > 0
}

// 选择城市建议
const selectCitySuggestion = (city: string) => {
  formData.value.city = city
  citySuggestions.value = []
  showCitySuggestions.value = false
}

// 监听城市输入变化
watch(() => formData.value.city, (newCity) => {
  if (newCity) {
    getCitySuggestions(newCity)
  }
})

// 监听 Depot 变化，清空城市建议
watch(() => formData.value.depot, () => {
  citySuggestions.value = []
  showCitySuggestions.value = false
  // 如果已经有城市输入，重新获取建议
  if (formData.value.city) {
    getCitySuggestions(formData.value.city)
  }
})

// 监听 Depot 变化，更新特殊费用选项
const specialFeeOptions = computed(() => {
  if (!formData.value.depot || !isValidDepot(formData.value.depot)) {
    return []
  }
  return getAllSpecialFees(formData.value.depot as DepotType)
})

// 根据运输方式获取附加费用
const additionalFees = computed(() => {
  if (!formData.value.depot || !formData.value.serviceType || !isValidDepot(formData.value.depot)) {
    return []
  }
  return getAdditionalFeesByServiceType(formData.value.serviceType, formData.value.depot as DepotType)
})

// 验证 Depot 是否有效
const isValidDepot = (depot: string): depot is DepotType => {
  return depot === 'NSW' || depot === 'VIC'
}

// 计算报价
const calculateQuotePrice = async () => {
  if (!formData.value.depot || !formData.value.city) {
    return
  }

  isLoading.value = true
  showContactSupport.value = false
  
  try {
    const result = calculateQuote(
      formData.value.depot,
      formData.value.city,
      formData.value.containerSize,
      formData.value.serviceType,
      formData.value.specialFees
    )

    if (result.success) {
      quoteResult.value = result.data
    } else {
      showContactSupport.value = true
      contactReason.value = result.error?.reason || 'Please contact support for assistance.'
    }
  } catch (error) {
    console.error('Quote calculation error:', error)
    showContactSupport.value = true
    contactReason.value = 'An error occurred. Please contact support for assistance.'
  } finally {
    isLoading.value = false
  }
}

// 重置表单
const resetForm = () => {
  formData.value = {
    depot: '',
    city: '',
    containerSize: '20',
    serviceType: 'STD',
    specialFees: []
  }
  quoteResult.value = null
  showContactSupport.value = false
  contactReason.value = ''
}

// 格式化货币
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD'
  }).format(amount)
}

// 滚动到邮件组件
const scrollToEmailSection = () => {
  const emailSection = document.querySelector('#email-section')
  if (emailSection) {
    emailSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// 监听表单变化，自动计算
// watch([() => formData.value.depot, () => formData.value.city, () => formData.value.containerSize, () => formData.value.serviceType], () => {
//   if (formData.value.depot && formData.value.city) {
//     calculateQuotePrice()
//   }
// }, { deep: true })

</script>

<template>
  <div class="min-h-screen">
    <!-- Breadcrumb Navigation -->
    <UContainer class="py-4">
      <UBreadcrumb :links="breadcrumbs" />
    </UContainer>

    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation Placeholder -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-800 dark:to-indigo-800 h-full w-full"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get Your Container Transport Quote
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Professional container transport services with transparent pricing. 
            Get a detailed quote for your specific transport requirements.
          </p>
          
          <!-- Quick Benefits -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div class="text-center">
              <UIcon name="i-lucide-clock" class="text-3xl text-blue-600 dark:text-blue-400 mb-2" />
              <div class="font-semibold text-gray-900 dark:text-white">Quick Response</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">Within 2 hours</div>
            </div>
            <div class="text-center">
              <UIcon name="i-lucide-shield-check" class="text-3xl text-green-600 dark:text-green-400 mb-2" />
              <div class="font-semibold text-gray-900 dark:text-white">Transparent Pricing</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">No hidden fees</div>
            </div>
            <div class="text-center">
              <UIcon name="i-lucide-users" class="text-3xl text-purple-600 dark:text-purple-400 mb-2" />
              <div class="font-semibold text-gray-900 dark:text-white">Expert Support</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">Professional service</div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Smart Quote Calculator Section -->
    <section class="py-20 relative overflow-hidden">
      <!-- Tech Background Effects -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent dark:from-blue-500/10"></div>
      
      <!-- Animated Grid Pattern -->
      <div class="absolute inset-0 opacity-20 dark:opacity-10">
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-pulse">
              Smart Quote Calculator
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300">
              Get an instant quote for your container transport needs
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <!-- Quote Form -->
            <UCard class="shadow-2xl border-0 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <!-- Tech Border Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute inset-[1px] bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg"></div>
            <template #header>
                <div class="text-center pb-4 border-b border-gray-200/50 dark:border-gray-700/50 relative z-10">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full mb-4 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                    <UIcon name="lucide:calculator" class="text-2xl text-white" />
                  </div>
                  <h3 class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                    Transport Details
                  </h3>
                <p class="text-gray-600 dark:text-gray-300">
                    Enter your transport requirements to get an instant quote
                </p>
              </div>
            </template>

              <div class="space-y-6 relative z-10">
                <!-- Depot and City Row -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- Depot Selection -->
                  <UFormGroup label="Depot" required>
                    <div class="relative">
                      <select 
                        v-model="formData.depot" 
                        class="w-full px-4 py-3 border-2 border-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-lg bg-gradient-to-br from-white/90 to-blue-50/30 dark:from-gray-800/90 dark:to-blue-900/20 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:shadow-2xl focus:shadow-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:border-blue-400 hover:shadow-blue-400/20 appearance-none cursor-pointer relative z-10 group"
                        style="border-image: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)) 1;"
                      >
                        <option value="">Select Depot</option>
                        <option value="NSW">NSW (New South Wales)</option>
                        <option value="VIC">VIC (Victoria)</option>
                      </select>
                      <UIcon name="i-lucide-chevron-down" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </UFormGroup>
                  
                  <!-- City Input with Autocomplete -->
                  <UFormGroup label="City" required>
                    <div class="relative">
                      <input 
                        v-model="formData.city" 
                        placeholder="Enter city name (e.g., Prestons, Melbourne)"
                        @focus="getCitySuggestions(formData.city)"
                        @input="getCitySuggestions(formData.city)"
                        class="w-full px-4 py-3 border-2 border-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-lg bg-gradient-to-br from-white/90 to-blue-50/30 dark:from-gray-800/90 dark:to-blue-900/20 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:shadow-2xl focus:shadow-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:border-blue-400 hover:shadow-blue-400/20 relative z-10 group"
                        style="border-image: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)) 1;"
                      />
                      
                      <!-- City Suggestions Dropdown -->
                      <div 
                        v-if="showCitySuggestions && citySuggestions.length > 0"
                        class="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl max-h-60 overflow-y-auto"
                      >
                        <div 
                          v-for="city in citySuggestions" 
                          :key="city"
                          @click="selectCitySuggestion(city)"
                          class="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600 last:border-b-0 transition-colors duration-150"
                        >
                          <div class="flex items-center">
                            <UIcon name="lucide:map-pin" class="text-blue-500 mr-3" />
                            <span class="font-medium">{{ city }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </UFormGroup>
              </div>

                <!-- Container Size and Service Type Row -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- Container Size -->
                  <UFormGroup label="Container Size" required>
                    <div class="relative">
                      <select 
                      v-model="formData.containerSize" 
                        class="w-full px-4 py-3 border-2 border-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-lg bg-gradient-to-br from-white/90 to-blue-50/30 dark:from-gray-800/90 dark:to-blue-900/20 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:shadow-2xl focus:shadow-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:border-blue-400 hover:shadow-blue-400/20 appearance-none cursor-pointer relative z-10 group"
                        style="border-image: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)) 1;"
                      >
                        <option value="">Select container size</option>
                        <option value="20">20ft Container</option>
                        <option value="40">40ft Container</option>
                      </select>
                      <UIcon name="i-lucide-chevron-down" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </UFormGroup>
                  
                  <!-- Service Type -->
                  <UFormGroup label="Service Type" required>
                    <div class="relative">
                      <select 
                      v-model="formData.serviceType" 
                        class="w-full px-4 py-3 border-2 border-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-lg bg-gradient-to-br from-white/90 to-blue-50/30 dark:from-gray-800/90 dark:to-blue-900/20 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:shadow-2xl focus:shadow-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:border-blue-400 hover:shadow-blue-400/20 appearance-none cursor-pointer relative z-10 group"
                        style="border-image: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)) 1;"
                      >
                        <option value="">Select service type</option>
                        <option value="STD">Standard Trailer</option>
                        <option value="SDL">Sideloader</option>
                        <option value="DROP">Drop Trailer</option>
                      </select>
                      <UIcon name="i-lucide-chevron-down" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </UFormGroup>
              </div>

                <!-- Additional Services -->
                <UFormGroup label="Additional Services (Optional)">
                  <div class="relative">
                    <USelectMenu 
                      v-model="formData.specialFees" 
                      :options="specialFeeOptions.map(fee => ({ value: fee.code, label: `${fee.description} - ${formatCurrency(fee.fee)}` }))"
                      placeholder="Select additional services"
                      multiple
                      class="w-full border-2 border-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-lg bg-gradient-to-br from-white/90 to-blue-50/30 dark:from-gray-800/90 dark:to-blue-900/20 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:shadow-2xl focus:shadow-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:border-blue-400 hover:shadow-blue-400/20"
                    />
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Choose any additional services you may need for your transport
                  </div>
                  </UFormGroup>
                  
                <!-- Important Notice -->
                <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div class="flex items-start">
                    <UIcon name="lucide:info" class="text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p class="text-sm text-blue-800 dark:text-blue-200 font-medium mb-1">
                        Important: Please click "Calculate Quote" after making any changes
                      </p>
                      <p class="text-xs text-blue-700 dark:text-blue-300">
                        Any modifications to transport details require clicking the Calculate Quote button to update the pricing
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-between relative z-20">
                  <UButton 
                    variant="outline" 
                    size="lg"
                    @click="resetForm"
                    :disabled="isLoading"
                    class="flex-1 sm:flex-none relative z-20"
                  >
                    <template #leading>
                      <UIcon name="i-lucide-refresh-cw" />
                    </template>
                    Reset Form
                  </UButton>
                  <UButton 
                    color="primary" 
                    size="lg"
                    @click="calculateQuotePrice"
                    :disabled="isLoading || !formData.depot || !formData.city"
                    class="flex-1 sm:flex-none bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 relative z-20 group"
                  >
                    <template #leading>
                      <UIcon name="lucide:calculator" v-if="!isLoading" class="group-hover:animate-pulse" />
                      <UIcon name="i-lucide-loader-2" v-else class="animate-spin" />
                    </template>
                    {{ isLoading ? 'Calculating...' : 'Calculate Quote' }}
                  </UButton>
                </div>
              </div>
            </UCard>

            <!-- Quote Results -->
            <div class="space-y-4">
              <!-- Loading State -->
              <UCard v-if="isLoading" class="shadow-2xl border-0 bg-gradient-to-br from-blue-50/90 to-indigo-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                <!-- Tech Border Effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-lg opacity-50"></div>
                <div class="absolute inset-[1px] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg"></div>
                <div class="text-center py-8">
                  <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
                    <UIcon name="i-lucide-loader-2" class="text-xl text-white animate-spin" />
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Calculating Your Quote</h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Please wait while we process your request...</p>
                </div>
              </UCard>

              <!-- Contact Support -->
              <UCard v-else-if="showContactSupport" class="shadow-xl border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
                <template #header>
                  <div class="text-center pb-3 border-b border-gray-200 dark:border-gray-700">
                    <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-3">
                      <UIcon name="lucide:help-circle" class="text-xl text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-orange-900 dark:text-orange-100">
                      Contact Support Required
                    </h3>
                  </div>
                </template>
                <div class="text-center py-4">
                  <p class="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    {{ contactReason }}
                  </p>
                  <UButton 
                    color="warning" 
                    size="md"
                    @click="scrollToEmailSection"
                    class="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <template #leading>
                      <UIcon name="lucide:help-circle" />
                    </template>
                    Contact Our Team
                    <template #trailing>
                      <UIcon name="i-lucide-arrow-down" />
                    </template>
                  </UButton>
                </div>
              </UCard>

              <!-- Quote Results -->
              <UCard v-else-if="quoteResult" class="shadow-2xl border-0 bg-gradient-to-br from-green-50/90 to-blue-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                <!-- Tech Border Effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute inset-[1px] bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-lg"></div>
                <template #header>
                  <div class="text-center pb-3 border-b border-gray-200/50 dark:border-gray-700/50 relative z-10">
                    <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-3 shadow-lg shadow-green-500/25">
                      <UIcon name="i-lucide-check-circle" class="text-xl text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                      Your Quote
                    </h3>
                    <p class="text-xs text-gray-600 dark:text-gray-300">
                      {{ quoteResult.city }}, {{ quoteResult.depot }} - Zone {{ quoteResult.zone }}
                    </p>
                  </div>
                </template>

                <div class="space-y-3 relative z-10">
                  <!-- Base Fees -->
                  <div class="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center text-sm">
                      <UIcon name="i-lucide-receipt" class="text-blue-500 mr-2" />
                      Base Fees
                    </h4>
                    <div class="space-y-2">
                      <div class="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                        <span class="text-gray-700 dark:text-gray-300 text-xs">Cartage Fee:</span>
                        <span class="font-semibold text-gray-900 dark:text-white text-xs">{{ formatCurrency(quoteResult.baseFees.cartageFee) }}</span>
                      </div>
                      <div class="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                        <span class="text-gray-700 dark:text-gray-300 text-xs">Fuel Surcharge:</span>
                        <span class="font-semibold text-gray-900 dark:text-white text-xs">{{ formatCurrency(quoteResult.baseFees.fuelSurcharge) }}</span>
                      </div>
                      <div class="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                        <span class="text-gray-700 dark:text-gray-300 text-xs">Timeslot Fee:</span>
                        <span class="font-semibold text-gray-900 dark:text-white text-xs">{{ formatCurrency(quoteResult.baseFees.timeslotFee) }}</span>
                      </div>
                      <div class="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                        <span class="text-gray-700 dark:text-gray-300 text-xs">Infrastructure Fee:</span>
                        <span class="font-semibold text-gray-900 dark:text-white text-xs">{{ formatCurrency(quoteResult.baseFees.infrastructureFee) }}</span>
                      </div>
                      <div class="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700" v-if="quoteResult.baseFees.sideloaderFee > 0">
                        <span class="text-gray-700 dark:text-gray-300 text-xs">Sideloader Fee:</span>
                        <span class="font-semibold text-gray-900 dark:text-white text-xs">{{ formatCurrency(quoteResult.baseFees.sideloaderFee) }}</span>
                      </div>
                      <div class="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                        <span class="text-gray-700 dark:text-gray-300 text-xs">Empty De-hire Fee:</span>
                        <span class="font-semibold text-gray-900 dark:text-white text-xs">{{ formatCurrency(quoteResult.baseFees.emptyDehireFee) }}</span>
                      </div>
                      <div class="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700">
                        <span class="text-gray-700 dark:text-gray-300 text-xs">Toll Surcharge:</span>
                        <span class="font-semibold text-gray-900 dark:text-white text-xs">{{ formatCurrency(quoteResult.baseFees.tollSurcharge) }}</span>
                      </div>
                      <div class="flex justify-between items-center py-1" v-if="quoteResult.baseFees.viaTailgateFee > 0">
                        <span class="text-gray-700 dark:text-gray-300 text-xs">Via Tailgate:</span>
                        <span class="font-semibold text-gray-900 dark:text-white text-xs">{{ formatCurrency(quoteResult.baseFees.viaTailgateFee) }}</span>
                      </div>
                    </div>
                    <div class="mt-3 pt-2 border-t-2 border-gray-200 dark:border-gray-600">
                      <div class="flex justify-between items-center text-sm font-bold text-blue-600 dark:text-blue-400">
                        <span>Base Total:</span>
                        <span>{{ formatCurrency(quoteResult.baseFees.total) }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Special Fees -->
                  <div v-if="quoteResult.specialFees.length > 0" class="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center text-sm">
                      <UIcon name="i-lucide-plus-circle" class="text-green-500 mr-2" />
                      Additional Services
                    </h4>
                    <div class="space-y-2">
                      <div 
                        v-for="fee in quoteResult.specialFees" 
                        :key="fee.code"
                        class="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      >
                        <span class="text-gray-700 dark:text-gray-300 text-xs">{{ fee.description }}:</span>
                        <span class="font-semibold text-gray-900 dark:text-white text-xs">{{ formatCurrency(fee.fee) }}</span>
                      </div>
                    </div>
                    <div class="mt-3 pt-2 border-t-2 border-gray-200 dark:border-gray-600">
                      <div class="flex justify-between items-center text-sm font-bold text-green-600 dark:text-green-400">
                        <span>Additional Total:</span>
                        <span>{{ formatCurrency(quoteResult.specialFees.reduce((sum: number, fee: any) => sum + fee.fee, 0)) }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Grand Total -->
                  <div class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-4 border-2 border-green-200 dark:border-green-600">
                    <div class="flex justify-between items-center text-lg font-bold text-green-600 dark:text-green-400">
                      <span class="flex items-center">
                        <UIcon name="i-lucide-dollar-sign" class="mr-2" />
                        Total Quote:
                      </span>
                      <span class="text-xl">{{ formatCurrency(quoteResult.total) }}</span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1 text-center">
                      All fees included • Valid for 30 days
                    </p>
                  </div>

                  <!-- Contact Button -->
                  <div class="pt-2">
                    <UButton 
                      color="primary" 
                      size="md" 
                      block
                      @click="scrollToEmailSection"
                      class="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <template #leading>
                        <UIcon name="lucide:mail" />
                      </template>
                      Confirm This Quote
                      <template #trailing>
                        <UIcon name="i-lucide-arrow-right" />
                      </template>
                    </UButton>
                  </div>
                </div>
              </UCard>

              <!-- Initial State -->
              <UCard v-else class="shadow-xl border-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
                <div class="text-center py-8">
                  <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-400 to-blue-500 rounded-full mb-4">
                    <UIcon name="lucide:calculator" class="text-xl text-white" />
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Ready to Calculate</h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">
                    Enter your transport details and click "Calculate Quote" to get pricing
                  </p>
                </div>
              </UCard>
            </div>

            <!-- Additional Fees Panel -->
            <UCard class="shadow-2xl border-0 bg-gradient-to-br from-purple-50/90 to-pink-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <!-- Tech Border Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute inset-[1px] bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-lg"></div>
              <template #header>
                <div class="text-center pb-3 border-b border-gray-200/50 dark:border-gray-700/50 relative z-10">
                  <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-3 shadow-lg shadow-purple-500/25">
                    <UIcon name="i-lucide-plus-circle" class="text-xl text-white" />
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Additional Fees
                  </h3>
                  <p class="text-xs text-gray-600 dark:text-gray-300">
                    Available for {{ formData.serviceType || 'selected service' }} • Click "Calculate Quote" to update pricing
                  </p>
                </div>
              </template>

              <div class="space-y-3 relative z-10">
                <div v-if="additionalFees.length > 0" class="space-y-2">
                  <div 
                    v-for="fee in additionalFees" 
                    :key="fee.code"
                    class="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                  >
                    <div class="flex-1">
                      <div class="font-medium text-gray-900 dark:text-white text-xs">
                        {{ fee.description }}
                      </div>
                      <div v-if="fee.unit" class="text-xs text-gray-500 dark:text-gray-400">
                        {{ fee.unit }}
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="font-bold text-gray-900 dark:text-white text-xs">
                        {{ formatCurrency(fee.fee) }}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div v-else class="text-center py-6">
                  <UIcon name="lucide:info" class="text-2xl text-gray-400 dark:text-gray-500 mb-2" />
                  <p class="text-gray-600 dark:text-gray-300 text-xs">
                    Select a service type to see available additional fees
                  </p>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Quote Contact Section -->
    <section id="email-section" class="py-20">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <UCard class="shadow-xl">
            <template #header>
              <div class="text-center">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Transport Quote Request
                </h2>
                <p class="text-gray-600 dark:text-gray-300">
                  Get a detailed quote for your container transport needs
                </p>
              </div>
            </template>

            <div class="space-y-8">
              <!-- Contact Information -->
              <div class="text-center">
                <div class="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
                  <UIcon name="lucide:mail" class="text-3xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  ops@bsbtransport.com.au
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  Our operations team is ready to assist you
                </p>
                
                <UButton 
                  size="xl" 
                  color="primary"
                  :to="`mailto:ops@bsbtransport.com.au?subject=Container Transport Quote Request&body=Hi,%0D%0A%0D%0AI need a quote for container transport.%0D%0A%0D%0AContact Information:%0D%0AName: [Your Name]%0D%0ACompany: [Your Company]%0D%0AEmail: [Your Email]%0D%0APhone: [Your Phone]%0D%0A%0D%0ATransport Details:%0D%0AContainer Number: [Container Number]%0D%0AContainer Size: [20ft/40ft/45ft]%0D%0AContainer Type: [Dry/Reefer/Flat Rack/Open Top/Tank]%0D%0AService Type: [Container Trucking/Sideloader/Import Export/Wharf Cartage]%0D%0APickup Location: [Origin]%0D%0ADelivery Location: [Destination]%0D%0APreferred Pickup Date: [Date]%0D%0APreferred Delivery Date: [Date]%0D%0A%0D%0AService Requirements:%0D%0ASideloader Required: [Yes/No]%0D%0AAdditional Services: [Weekend Delivery/After Hours/Express/Storage/Insurance/Documentation]%0D%0ASpecial Requirements: [Any special notes or requirements]%0D%0A%0D%0APlease provide pricing and availability.%0D%0A%0D%0AThank you!`"
                  class="px-8"
                >
                  Open Email Client
                  <template #trailing>
                    <UIcon name="lucide:external-link" />
                  </template>
                </UButton>
              </div>

              <!-- Smart Email Templates -->
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <UIcon name="i-lucide-file-text" class="mr-2" />
                  Smart Email Templates
                </h3>
                
                <div class="space-y-6">
                  <!-- Quote Confirmation Template -->
                  <UCard v-if="quoteResult" class="border border-green-200 dark:border-green-700 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                    <template #header>
                      <div class="flex items-center">
                        <UIcon name="i-lucide-check-circle" class="text-green-600 dark:text-green-400 mr-2" />
                        <h4 class="font-semibold text-gray-900 dark:text-white">Confirm This Quote:</h4>
                      </div>
                    </template>
                    <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg">
                      <p class="text-sm text-gray-700 dark:text-gray-300 font-mono mb-3">
                        "Hi BSB Transport Team,<br><br>
                        I would like to confirm the quote for container transport:<br><br>
                        <strong>Transport Details:</strong><br>
                        • Depot: {{ quoteResult.depot }}<br>
                        • Destination: {{ quoteResult.city }} (Zone {{ quoteResult.zone }})<br>
                        • Container Size: {{ formData.containerSize }}ft<br>
                        • Service Type: {{ formData.serviceType }}<br>
                        • Estimated Total: {{ formatCurrency(quoteResult.total) }}<br><br>
                        <strong>Contact Information:</strong><br>
                        • Name: [Your Name]<br>
                        • Company: [Your Company]<br>
                        • Email: [Your Email]<br>
                        • Phone: [Your Phone]<br><br>
                        Please confirm availability and provide booking details.<br><br>
                        Thank you!"
                      </p>
                    </div>
                    <template #footer>
                      <UButton 
                        size="sm" 
                        color="success"
                        :to="`mailto:ops@bsbtransport.com.au?subject=Quote Confirmation - ${quoteResult.city} ${formData.containerSize}ft ${formData.serviceType}&body=Hi BSB Transport Team,%0D%0A%0D%0AI would like to confirm the quote for container transport:%0D%0A%0D%0ATransport Details:%0D%0A• Depot: ${quoteResult.depot}%0D%0A• Destination: ${quoteResult.city} (Zone ${quoteResult.zone})%0D%0A• Container Size: ${formData.containerSize}ft%0D%0A• Service Type: ${formData.serviceType}%0D%0A• Estimated Total: ${formatCurrency(quoteResult.total)}%0D%0A%0D%0AContact Information:%0D%0A• Name: [Your Name]%0D%0A• Company: [Your Company]%0D%0A• Email: [Your Email]%0D%0A• Phone: [Your Phone]%0D%0A%0D%0APlease confirm availability and provide booking details.%0D%0A%0D%0AThank you!`"
                      >
                        <template #leading>
                          <UIcon name="i-lucide-check" />
                        </template>
                        Confirm This Quote
                      </UButton>
                    </template>
                  </UCard>

                  <!-- Detailed Quote Request Template -->
                  <UCard class="border border-blue-200 dark:border-blue-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                    <template #header>
                      <div class="flex items-center">
                        <UIcon name="i-lucide-file-text" class="text-blue-600 dark:text-blue-400 mr-2" />
                        <h4 class="font-semibold text-gray-900 dark:text-white">Detailed Quote Request:</h4>
                      </div>
                    </template>
                    <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg">
                      <p class="text-sm text-gray-700 dark:text-gray-300 font-mono mb-3">
                        "Hi BSB Transport Team,<br><br>
                        I need a detailed quote for container transport services:<br><br>
                        <strong>Transport Requirements:</strong><br>
                        • Container Number: [Container Number]<br>
                        • Container Size: [20ft/40ft/45ft]<br>
                        • Container Type: [Dry/Reefer/Flat Rack/Open Top/Tank]<br>
                        • Service Type: [Standard Trailer/Sideloader/Drop Trailer]<br>
                        • Pickup Location: [Origin Address]<br>
                        • Delivery Location: [Destination Address]<br>
                        • Preferred Pickup Date: [Date]<br>
                        • Preferred Delivery Date: [Date]<br><br>
                        <strong>Additional Services:</strong><br>
                        • Weekend Delivery: [Yes/No]<br>
                        • After Hours Service: [Yes/No]<br>
                        • Express Service: [Yes/No]<br>
                        • Storage Required: [Yes/No]<br>
                        • Insurance Coverage: [Yes/No]<br><br>
                        <strong>Contact Information:</strong><br>
                        • Name: [Your Name]<br>
                        • Company: [Your Company]<br>
                        • Email: [Your Email]<br>
                        • Phone: [Your Phone]<br><br>
                        Please provide detailed pricing and availability.<br><br>
                        Thank you!"
                      </p>
                    </div>
                    <template #footer>
                      <UButton 
                        size="sm" 
                        color="primary"
                        :to="`mailto:ops@bsbtransport.com.au?subject=Detailed Container Transport Quote Request&body=Hi BSB Transport Team,%0D%0A%0D%0AI need a detailed quote for container transport services:%0D%0A%0D%0ATransport Requirements:%0D%0A• Container Number: [Container Number]%0D%0A• Container Size: [20ft/40ft/45ft]%0D%0A• Container Type: [Dry/Reefer/Flat Rack/Open Top/Tank]%0D%0A• Service Type: [Standard Trailer/Sideloader/Drop Trailer]%0D%0A• Pickup Location: [Origin Address]%0D%0A• Delivery Location: [Destination Address]%0D%0A• Preferred Pickup Date: [Date]%0D%0A• Preferred Delivery Date: [Date]%0D%0A%0D%0AAdditional Services:%0D%0A• Weekend Delivery: [Yes/No]%0D%0A• After Hours Service: [Yes/No]%0D%0A• Express Service: [Yes/No]%0D%0A• Storage Required: [Yes/No]%0D%0A• Insurance Coverage: [Yes/No]%0D%0A%0D%0AContact Information:%0D%0A• Name: [Your Name]%0D%0A• Company: [Your Company]%0D%0A• Email: [Your Email]%0D%0A• Phone: [Your Phone]%0D%0A%0D%0APlease provide detailed pricing and availability.%0D%0A%0D%0AThank you!`"
                      >
                        <template #leading>
                          <UIcon name="i-lucide-file-text" />
                        </template>
                        Use Detailed Template
                      </UButton>
                    </template>
                  </UCard>

                  <!-- Service Inquiry Template -->
                  <UCard class="border border-purple-200 dark:border-purple-700 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                    <template #header>
                      <div class="flex items-center">
                        <UIcon name="lucide:info" class="text-purple-600 dark:text-purple-400 mr-2" />
                        <h4 class="font-semibold text-gray-900 dark:text-white">Service Inquiry:</h4>
                      </div>
                    </template>
                    <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg">
                      <p class="text-sm text-gray-700 dark:text-gray-300 font-mono mb-3">
                        "Hello BSB Transport Team,<br><br>
                        I'm interested in learning more about your container transport services:<br><br>
                        <strong>Services of Interest:</strong><br>
                        • Standard Trailer Services<br>
                        • Sideloader Services<br>
                        • Drop Trailer Services<br>
                        • Container Storage<br>
                        • Import/Export Services<br><br>
                        <strong>Questions:</strong><br>
                        • What are your service areas?<br>
                        • Do you provide 24/7 emergency services?<br>
                        • What insurance coverage do you offer?<br>
                        • Can you handle specialized containers?<br><br>
                        <strong>Contact Information:</strong><br>
                        • Name: [Your Name]<br>
                        • Company: [Your Company]<br>
                        • Email: [Your Email]<br>
                        • Phone: [Your Phone]<br><br>
                        Please provide more information about your capabilities.<br><br>
                        Thank you!"
                      </p>
                    </div>
                    <template #footer>
                      <UButton 
                        size="sm" 
                        color="secondary"
                        :to="`mailto:ops@bsbtransport.com.au?subject=Service Inquiry - Container Transport Services&body=Hello BSB Transport Team,%0D%0A%0D%0AI'm interested in learning more about your container transport services:%0D%0A%0D%0AServices of Interest:%0D%0A• Standard Trailer Services%0D%0A• Sideloader Services%0D%0A• Drop Trailer Services%0D%0A• Container Storage%0D%0A• Import/Export Services%0D%0A%0D%0AQuestions:%0D%0A• What are your service areas?%0D%0A• Do you provide 24/7 emergency services?%0D%0A• What insurance coverage do you offer?%0D%0A• Can you handle specialized containers?%0D%0A%0D%0AContact Information:%0D%0A• Name: [Your Name]%0D%0A• Company: [Your Company]%0D%0A• Email: [Your Email]%0D%0A• Phone: [Your Phone]%0D%0A%0D%0APlease provide more information about your capabilities.%0D%0A%0D%0AThank you!`"
                      >
                        <template #leading>
                          <UIcon name="lucide:info" />
                        </template>
                        Service Inquiry
                      </UButton>
                    </template>
                  </UCard>

                  <!-- Emergency Request Template -->
                  <UCard class="border border-orange-200 dark:border-orange-700 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                    <template #header>
                      <div class="flex items-center">
                        <UIcon name="i-lucide-alert-triangle" class="text-orange-600 dark:text-orange-400 mr-2" />
                        <h4 class="font-semibold text-gray-900 dark:text-white">Emergency Request:</h4>
                      </div>
                    </template>
                    <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg">
                      <p class="text-sm text-gray-700 dark:text-gray-300 font-mono mb-3">
                        "URGENT - BSB Transport Team,<br><br>
                        I need immediate assistance with container transport:<br><br>
                        <strong>Emergency Details:</strong><br>
                        • Container Number: [Container Number]<br>
                        • Container Size: [20ft/40ft]<br>
                        • Service Type: [Standard Trailer/Sideloader/Drop Trailer]<br>
                        • Pickup Location: [Origin Address]<br>
                        • Delivery Location: [Destination Address]<br>
                        • Required Time: [ASAP/Today/Specific Time]<br>
                        • Reason for Urgency: [Brief Description]<br><br>
                        <strong>Contact Information:</strong><br>
                        • Name: [Your Name]<br>
                        • Company: [Your Company]<br>
                        • Email: [Your Email]<br>
                        • Phone: [Your Phone] - CALL ME<br><br>
                        Please contact me immediately to discuss availability and pricing.<br><br>
                        Thank you!"
                      </p>
                    </div>
                    <template #footer>
                      <UButton 
                        size="sm" 
                        color="warning"
                        :to="`mailto:ops@bsbtransport.com.au?subject=URGENT - Emergency Container Transport Request&body=URGENT - BSB Transport Team,%0D%0A%0D%0AI need immediate assistance with container transport:%0D%0A%0D%0AEmergency Details:%0D%0A• Container Number: [Container Number]%0D%0A• Container Size: [20ft/40ft]%0D%0A• Service Type: [Standard Trailer/Sideloader/Drop Trailer]%0D%0A• Pickup Location: [Origin Address]%0D%0A• Delivery Location: [Destination Address]%0D%0A• Required Time: [ASAP/Today/Specific Time]%0D%0A• Reason for Urgency: [Brief Description]%0D%0A%0D%0AContact Information:%0D%0A• Name: [Your Name]%0D%0A• Company: [Your Company]%0D%0A• Email: [Your Email]%0D%0A• Phone: [Your Phone] - CALL ME%0D%0A%0D%0APlease contact me immediately to discuss availability and pricing.%0D%0A%0D%0AThank you!`"
                      >
                        <template #leading>
                          <UIcon name="i-lucide-phone" />
                        </template>
                        Emergency Request
                      </UButton>
                    </template>
                  </UCard>
                </div>
              </div>

              <!-- Response Time -->
              <div class="text-center bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <UIcon name="i-lucide-clock" class="text-2xl text-blue-600 dark:text-blue-400 mb-2" />
                <p class="text-gray-700 dark:text-gray-300 font-medium">
                  We'll respond within 2 hours during business hours
                </p>
              </div>

              <!-- Security & Contact Info -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <UIcon name="i-lucide-shield-check" class="text-2xl text-green-600 dark:text-green-400 mb-2" />
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Secure & Confidential</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Your information is protected</p>
                </div>
                
                <div class="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <UIcon name="i-lucide-phone" class="text-2xl text-orange-600 dark:text-orange-400 mb-2" />
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Phone: +61 456 881 666</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">24/7 Emergency</p>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose BSB Transport?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional container transport services with unmatched reliability and customer service
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-shield-check" class="text-3xl text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Safe & Secure</h3>
            <p class="text-gray-600 dark:text-gray-300">Comprehensive safety protocols and fully insured operations</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-clock" class="text-3xl text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">On-Time Delivery</h3>
            <p class="text-gray-600 dark:text-gray-300">Reliable scheduling and real-time tracking for peace of mind</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-users" class="text-3xl text-purple-600 dark:text-purple-400" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert Team</h3>
            <p class="text-gray-600 dark:text-gray-300">Professional drivers and logistics experts at your service</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Call us directly for urgent transport requirements or complex logistics needs
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="primary" variant="solid" to="/contact">
              Contact Us Now
              <template #trailing>
                <UIcon name="i-lucide-phone" />
              </template>
            </UButton>
            <UButton size="xl" color="primary" variant="outline" to="/services">
              View Services
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
