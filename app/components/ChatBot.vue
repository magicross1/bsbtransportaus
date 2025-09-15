<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isInitialized = ref(false)
let styleObserver: MutationObserver | null = null

// 初始化聊天机器人
const initializeBot = () => {
  if (isInitialized.value) return
  
  console.log('Initializing Botpress...')
  
  // 等待Botpress API可用
  const waitForBotpress = () => {
    if (typeof window !== 'undefined' && window.botpress) {
      try {
        console.log('Botpress API found, initializing...')
        
        window.botpress.init({
          "botId": "aeab8fbd-78e5-411d-a09a-c9aaeff97073",
          "clientId": "e7f3b3ac-fc89-4258-84fc-256f173176a8",
          "configuration": {
            "version": "v2",
            "website": {},
            "email": {},
            "phone": {},
            "termsOfService": {},
            "privacyPolicy": {},
            "color": "#f97316", // 使用你的橙色主题
            "variant": "solid",
            "headerVariant": "glass",
            "themeMode": "light",
            "fontFamily": "inter",
            "radius": 4,
            "feedbackEnabled": false,
            "footer": "",
            "soundEnabled": false,
            "botName": "BSB Tranpsport AI Assistant",
            "composerPlaceholder": "Ask BSB Transport AI Assistant...",
            "showPoweredBy": false,
            "enableReset": true,
            "resetButtonText": "New Conversation"
          }
        })
        
        console.log('Botpress initialized successfully')
        isInitialized.value = true
        
        // 立即应用样式
        applyCustomStyles()
        
        // 设置样式监听器
        setupStyleObserver()
        
        // 延迟多次应用样式，确保覆盖
        setTimeout(() => applyCustomStyles(), 1000)
        setTimeout(() => applyCustomStyles(), 3000)
        setTimeout(() => applyCustomStyles(), 5000)
        
      } catch (error) {
        console.error('Failed to initialize Botpress:', error)
      }
    } else {
      console.log('Botpress API not ready, retrying...')
      setTimeout(waitForBotpress, 1000)
    }
  }
  
  waitForBotpress()
}

// 应用自定义样式 - 简化版
const applyCustomStyles = () => {
  if (typeof window === 'undefined') return
  
  console.log('Applying Botpress custom styles...')
  
  // 移除旧样式
  const oldStyle = document.getElementById('botpress-custom-styles')
  if (oldStyle) {
    oldStyle.remove()
  }
  
  // 创建新的样式元素
  const style = document.createElement('style')
  style.id = 'botpress-custom-styles'
  style.textContent = `
    /* 隐藏Powered By */
    [class*="powered-by"],
    [class*="botpress-branding"] {
      display: none !important;
    }
  `
  
  // 添加到head的最前面，确保最高优先级
  document.head.insertBefore(style, document.head.firstChild)
  
  console.log('Botpress custom styles applied successfully!')
}

// 设置样式监听器 - 简化版
const setupStyleObserver = () => {
  if (typeof window === 'undefined' || styleObserver) return
  
  styleObserver = new MutationObserver(() => {
    // 简单重试应用样式
    setTimeout(() => {
      applyCustomStyles()
    }, 1000)
  })
  
  // 开始监听
  styleObserver.observe(document.body, {
    childList: true,
    subtree: true
  })
  
  console.log('Style observer setup complete')
}

// 滚动到聊天机器人
const scrollToChat = () => {
  // 等待Botpress按钮出现
  const findChatButton = () => {
    const chatButton = document.querySelector('[class*="bp-fab"], [class*="chat-button"], [class*="webchat"]')
    if (chatButton) {
      chatButton.scrollIntoView({ behavior: 'smooth', block: 'center' })
      // 添加点击效果
      setTimeout(() => {
        if (chatButton instanceof HTMLElement) {
          chatButton.click()
        }
      }, 500)
    } else {
      // 如果找不到按钮，等待一下再试
      setTimeout(findChatButton, 1000)
    }
  }
  findChatButton()
}

onMounted(() => {
  initializeBot()
})

// 扩展window类型
declare global {
  interface Window {
    botpress: any
  }
}
</script>

<template>
  <!-- AI助手引导组件 -->
  <div class="ai-assistant-guide">
    <!-- 主引导卡片 -->
    <div class="guide-card" :class="{ 'animate-pulse': !isInitialized }">
      <!-- 背景装饰 -->
      <div class="guide-bg-decoration">
        <div class="floating-dot dot-1"></div>
        <div class="floating-dot dot-2"></div>
        <div class="floating-dot dot-3"></div>
        <div class="floating-dot dot-4"></div>
        <div class="floating-dot dot-5"></div>
        <div class="circuit-line"></div>
        <div class="scan-line"></div>
        <div class="data-stream"></div>
        <div class="glow-effect"></div>
      </div>
      
      <!-- 内容区域 -->
      <div class="guide-content">
        <!-- AI图标和标题 -->
        <div class="guide-header">
          <div class="ai-icon">
            <div class="ai-icon-bg"></div>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ai-icon-svg">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
            </svg>
            <div class="ai-icon-ring"></div>
            <div class="ai-icon-particles">
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
            </div>
          </div>
          <div class="guide-title">
            <h3>BSB Transport AI Assistant</h3>
            <p>Smart Logistics Assistant — 24/7</p>
          </div>
        </div>
        
        <!-- 功能特色 -->
        <div class="guide-features">
          <div class="feature-item">
            <div class="feature-icon">🚛</div>
            <span>Instant Quote</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📋</div>
            <span>Route Planning</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">💬</div>
            <span>Online Support</span>
          </div>
        </div>
        
        <!-- 引导按钮 -->
        <div class="guide-action">
          <button class="guide-btn" @click="scrollToChat">
            <div class="btn-bg-effect"></div>
            <span>Live Chat Now</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-arrow">
              <path d="M7 7L17 17M17 17H7M17 17V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="btn-pulse"></div>
          </button>
        </div>
      </div>
    </div>
    
    <!-- 完全移除自定义按钮，让Botpress使用默认按钮 -->
  </div>
</template>

<style scoped>
/* AI助手引导组件样式 */
.ai-assistant-guide {
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 1000;
  max-width: 320px;
  pointer-events: none;
}

.guide-card {
  position: relative;
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 0 60px rgba(249, 115, 22, 0.3),
    0 0 120px rgba(59, 130, 246, 0.2);
  pointer-events: auto;
  overflow: hidden;
  animation: slideInUp 0.6s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

@keyframes slideInUp {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.guide-card.animate-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

/* 背景装饰 */
.guide-bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.floating-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: float 3s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.dot-1 {
  top: 15%;
  left: 10%;
  animation-delay: 0s;
  width: 6px;
  height: 6px;
}

.dot-2 {
  top: 25%;
  right: 15%;
  animation-delay: 0.5s;
}

.dot-3 {
  top: 70%;
  left: 20%;
  animation-delay: 1s;
}

.dot-4 {
  bottom: 20%;
  right: 25%;
  animation-delay: 1.5s;
  width: 5px;
  height: 5px;
}

.dot-5 {
  top: 50%;
  left: 5%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-10px);
    opacity: 1;
  }
}

.circuit-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%),
    linear-gradient(-45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  background-size: 20px 20px;
  animation: circuitMove 4s linear infinite;
}

@keyframes circuitMove {
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 20px 20px, -20px 20px;
  }
}

/* 扫描线效果 */
.scan-line {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: scanMove 3s linear infinite;
}

@keyframes scanMove {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* 数据流效果 */
.data-stream {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.03) 2px,
      rgba(255, 255, 255, 0.03) 4px
    );
  animation: dataFlow 2s linear infinite;
}

@keyframes dataFlow {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(20px);
  }
}

/* 发光效果 */
.glow-effect {
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: glowPulse 4s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

/* 内容区域 */
.guide-content {
  position: relative;
  z-index: 2;
}

.guide-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.ai-icon {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.ai-icon-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.ai-icon-svg {
  position: relative;
  z-index: 2;
  width: 24px;
  height: 24px;
  animation: rotate 3s linear infinite;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
}

.ai-icon-ring {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: ringPulse 2s ease-in-out infinite;
}

.ai-icon-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: particleFloat 2s ease-in-out infinite;
}

.particle:nth-child(1) {
  top: 10%;
  left: 20%;
  animation-delay: 0s;
}

.particle:nth-child(2) {
  top: 20%;
  right: 15%;
  animation-delay: 0.7s;
}

.particle:nth-child(3) {
  bottom: 15%;
  left: 30%;
  animation-delay: 1.4s;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes ringPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.6;
  }
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-8px) scale(1.2);
    opacity: 1;
  }
}

.guide-title h3 {
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 4px 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.guide-title p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  margin: 0;
  font-weight: 400;
}

/* 功能特色 */
.guide-features {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 8px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex: 1;
}

.feature-icon {
  font-size: 20px;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.feature-item span {
  color: rgba(255, 255, 255, 0.9);
  font-size: 10px;
  font-weight: 500;
  text-align: center;
}

/* 引导按钮 */
.guide-action {
  text-align: center;
}

.guide-btn {
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.btn-bg-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.guide-btn:hover .btn-bg-effect {
  left: 100%;
}

.guide-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.15),
    0 0 20px rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.guide-btn:active {
  transform: translateY(0);
}

.btn-arrow {
  width: 16px;
  height: 16px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.5));
}

.guide-btn:hover .btn-arrow {
  transform: translate(2px, -2px);
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
}

.btn-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: btnPulse 2s ease-out infinite;
}

@keyframes btnPulse {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .ai-assistant-guide {
    bottom: 80px;
    right: 16px;
    left: 16px;
    max-width: none;
  }
  
  .guide-card {
    padding: 16px;
  }
  
  .guide-title h3 {
    font-size: 14px;
  }
  
  .guide-title p {
    font-size: 11px;
  }
  
  .feature-item span {
    font-size: 9px;
  }
  
  .guide-btn {
    padding: 8px 12px;
    font-size: 13px;
  }
}

/* 确保在Botpress按钮上方 */
.ai-assistant-guide {
  z-index: 9999;
}

/* 样式已移至JavaScript中动态应用 */
</style>