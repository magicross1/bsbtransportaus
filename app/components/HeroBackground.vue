<script setup lang="ts">
const { isLoading } = useLoadingIndicator()

const appear = ref(false)
const appeared = ref(false)
const videoLoaded = ref(false)
const videoReady = ref(false)
const videoElement = ref<HTMLVideoElement>()

// 重置状态函数
const resetState = () => {
  appear.value = false
  appeared.value = false
  videoLoaded.value = false
  videoReady.value = false
}

// 初始化动画
const initAnimation = () => {
  resetState()
  setTimeout(() => {
    appear.value = true
    setTimeout(() => {
      appeared.value = true
    }, 1000)
  }, 0)
}

onMounted(() => {
  initAnimation()

  // 确保视频自动播放
  nextTick(() => {
    if (videoElement.value) {
      videoElement.value.play().catch(err => {
        console.warn('Initial video play failed:', err)
        // 如果自动播放失败，尝试用户交互后播放
        document.addEventListener('click', () => {
          videoElement.value?.play().catch(() => {})
        }, { once: true })
      })
    }
  })
})

// 监听路由变化，重新初始化状态
const route = useRoute()
watch(() => route.path, (newPath, oldPath) => {
  // 当从其他页面回到首页时，重新初始化
  if (newPath === '/' && oldPath !== '/') {
    nextTick(() => {
      initAnimation()
    })
  }
})

// 视频加载完成处理
const onVideoLoaded = () => {
  videoLoaded.value = true
  videoReady.value = true

  // 确保视频开始播放
  if (videoElement.value) {
    videoElement.value.play().catch(err => {
      console.warn('Video autoplay failed:', err)
    })
  }
}

// 视频错误处理
const onVideoError = () => {
  console.warn('Hero background video failed to load, falling back to static background')
  videoLoaded.value = false
  videoReady.value = true // 即使视频失败也要显示内容
}

// 监听i18n状态变化
const { locale } = useI18n()
watch(locale, () => {
  // 语言切换时，确保视频状态正确
  if (videoLoaded.value) {
    videoReady.value = true
  }
})

// 视频开始播放时
const onVideoPlay = () => {
  videoReady.value = true
}

// 视频暂停时尝试重新播放
const onVideoPause = () => {
  if (videoElement.value && !videoElement.value.ended) {
    videoElement.value.play().catch(err => {
      console.warn('Video resume failed:', err)
    })
  }
}
</script>

<template>
  <div class="absolute inset-0 w-full h-full overflow-hidden">
    <!-- 视频背景 -->
    <video
      ref="videoElement"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="absolute inset-0 w-full h-full object-cover opacity-80"
      @loadeddata="onVideoLoaded"
      @canplay="onVideoLoaded"
      @play="onVideoPlay"
      @pause="onVideoPause"
      @error="onVideoError"
    >
      <source src="/videos/hero-background.mp4" type="video/mp4">
      <!-- 如果视频加载失败，显示提示 -->
      您的浏览器不支持视频播放
    </video>

    <!-- 视频遮罩层 - 确保文字可读性 -->
    <div class="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

    <!-- 原有的SVG装饰层 - 作为备用和装饰 -->
    <div
      class="absolute w-full -top-px transition-all text-primary shrink-0"
      :class="[
        isLoading ? 'animate-pulse' : (appear ? '' : 'opacity-0'),
        appeared ? 'duration-[400ms]': 'duration-1000'
      ]"
    >
      <svg
        viewBox="0 0 1440 181"
        fill="none"
        xmlns="https://www.w3.org/2000/svg"
        class="pointer-events-none"
      >
        <mask
          id="path-1-inside-1_414_5526"
          fill="white"
        >
          <path d="M0 0H1440V181H0V0Z" />
        </mask>
        <path
          d="M0 0H1440V181H0V0Z"
          fill="url(#paint0_linear_414_5526)"
          fill-opacity="0.15"
        />
        <path
          d="M0 2H1440V-2H0V2Z"
          fill="url(#paint1_linear_414_5526)"
          mask="url(#path-1-inside-1_414_5526)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_414_5526"
            x1="720"
            y1="0"
            x2="720"
            y2="181"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="currentColor" />
            <stop
              offset="1"
              stop-color="currentColor"
              stop-opacity="0"
            />
          </linearGradient>
          <linearGradient
            id="paint1_linear_414_5526"
            x1="0"
            y1="90.5"
            x2="1440"
            y2="90.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              stop-color="currentColor"
              stop-opacity="0"
            />
            <stop
              offset="0.395"
              stop-color="currentColor"
            />
            <stop
              offset="1"
              stop-color="currentColor"
              stop-opacity="0"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>
