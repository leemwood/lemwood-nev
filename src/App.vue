<template>
  <div 
    :class="[
      'min-h-screen transition-all duration-500 gpu-accelerated text-smooth',
      getThemeClasses(),
      { 
        'minimal-light-mode': isMinimalMode && !isDarkMode,
        'minimal-dark-mode': isMinimalMode && isDarkMode
      }
    ]"
    :style="getBackgroundStyle()"
  >
    <!-- 背景装饰 -->
    <div v-if="isMinimalMode" class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-900/10 blur-[100px] rounded-full"></div>
      <div class="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-900/10 blur-[100px] rounded-full"></div>
    </div>

    <!-- 统一顶栏 -->
    <header class="fixed top-0 left-0 right-0 z-50 p-4 md:p-6">
      <div class="glass-card mx-auto max-w-[1400px]">
        <div class="flex items-center justify-between px-4 py-2 md:py-3">
          <!-- 左侧：Logo 和标题 -->
          <router-link to="/" class="flex items-center space-x-3 link-hover group">
            <div class="relative">
              <img 
                src="/logo.png" 
                alt="Logo" 
                class="w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-white/20 dark:ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300"
              >
              <div class="absolute inset-0 rounded-full bg-blue-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 class="text-lg md:text-xl font-bold gradient-text">柠枺</h1>
              <p class="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 hidden md:block font-medium">宁静致远 · 枺色微凉</p>
            </div>
          </router-link>

          <!-- 右侧：功能按钮组 -->
          <div class="flex items-center space-x-2 md:space-x-3">
            <!-- 桌面端主页/项目 -->
            <nav class="hidden sm:flex items-center bg-white/10 dark:bg-black/20 rounded-xl p-1 border border-white/20 dark:border-white/10">
              <router-link
                to="/"
                class="px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300"
                :class="$route.path === '/' ? 'bg-white/90 dark:bg-white/10 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'"
              >
                主页
              </router-link>
              <router-link
                to="/projects"
                class="px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300"
                :class="$route.path === '/projects' ? 'bg-white/90 dark:bg-white/10 text-purple-600 dark:text-purple-400 shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'"
              >
                项目
              </router-link>
            </nav>

            <div class="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1 hidden sm:block"></div>

            <!-- 主题设置组 -->
            <div class="flex items-center bg-white/10 dark:bg-black/20 rounded-xl p-1 border border-white/20 dark:border-white/10">
              <!-- 无图模式切换 -->
              <button
                @click="toggleBackgroundMode"
                class="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group relative"
                :title="getBackgroundModeTooltip()"
              >
                <svg v-if="!isMinimalMode" class="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <svg v-else class="w-5 h-5 text-gray-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </button>

              <!-- 暗色模式切换 -->
              <button
                @click="toggleDarkMode"
                class="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
                :title="getDarkModeTooltip()"
              >
                <svg v-if="!isDarkMode" class="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                </svg>
                <svg v-else class="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
            </div>

            <!-- 移动端汉堡菜单 -->
            <div class="relative sm:hidden mobile-menu-container">
              <button
                @click="toggleMobileMenu"
                class="p-2.5 glass-card link-hover flex items-center justify-center"
              >
                <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path v-if="!showMobileMenu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              
              <!-- 移动端下拉菜单 -->
              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <div 
                  v-show="showMobileMenu"
                  class="absolute right-0 top-full mt-2 w-56 glass-card border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl z-50 backdrop-blur-2xl bg-white/90 dark:bg-gray-900/90"
                >
                  <div class="p-3 space-y-2">
                    <router-link
                      to="/"
                      @click="closeMobileMenu"
                      class="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-blue-500/10 transition-colors"
                      :class="{ 'bg-blue-500/20 text-blue-600 dark:text-blue-400': $route.path === '/' }"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                      <span class="font-medium">主页</span>
                    </router-link>
                    <router-link
                      to="/projects"
                      @click="closeMobileMenu"
                      class="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-purple-500/10 transition-colors"
                      :class="{ 'bg-purple-500/20 text-purple-600 dark:text-purple-400': $route.path === '/projects' }"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                      <span class="font-medium">项目展示</span>
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="flex-1 container max-w-[1400px] mx-auto px-4 py-8 pt-24 md:pt-32">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚 -->
    <footer class="text-center py-12 mt-16 px-4">
      <div class="glass-card max-w-[1400px] mx-auto p-8 md:p-10 relative overflow-hidden group">
        <!-- 背景修饰 -->
        <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
        
        <!-- 友情链接 -->
        <div class="mb-8 pb-8 border-b border-gray-300/20 dark:border-gray-600/20 relative z-10">
          <h3 class="text-sm font-bold text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-widest">友情链接</h3>
          <div class="flex justify-center flex-wrap gap-3 md:gap-4">
            <a href="https://zeinklab.com" target="_blank" rel="noopener noreferrer"
               class="flex items-center px-4 py-2 text-sm font-medium glass-card hover:bg-blue-500/10 dark:hover:bg-blue-900/20 transition-all duration-300 hover:-translate-y-1">
              <img src="https://cdn.zeart.ink/gh/YShenZe/Blog-Static-Resource@main/images/202508091754715429589-27c40fedf962afbafbf31a7a06cd137b.jpg" 
                   alt="梦泽" class="w-6 h-6 rounded-full mr-2.5 shadow-sm" loading="lazy">
              <span class="text-gray-700 dark:text-gray-300">梦泽</span>
            </a>
            <a href="https://lovekogasa.lapis-net.top" target="_blank" rel="noopener noreferrer"
               class="flex items-center px-4 py-2 text-sm font-medium glass-card hover:bg-pink-500/10 dark:hover:bg-pink-900/20 transition-all duration-300 hover:-translate-y-1">
              <img src="https://lovekogasa.lapis-net.top/avatar/avatar.jpg" 
                   alt="Love-kogasa" class="w-6 h-6 rounded-full mr-2.5 shadow-sm" loading="lazy">
              <span class="text-gray-700 dark:text-gray-300">Love-kogasa</span>
            </a>
            <a href="https://github.com/XiaoluoFoxington" target="_blank" rel="noopener noreferrer"
               class="flex items-center px-4 py-2 text-sm font-medium glass-card hover:bg-orange-500/10 dark:hover:bg-orange-900/20 transition-all duration-300 hover:-translate-y-1">
              <img src="https://cdn.mengze.vip/gh/XiaoluoFoxington/FCL.website.mdui/file/avatar/XiaoluoFoxington.webp" 
                   alt="洛狐" class="w-6 h-6 rounded-full mr-2.5 shadow-sm" loading="lazy">
              <span class="text-gray-700 dark:text-gray-300">洛狐</span>
            </a>
            <a href="https://mcisee.top/" target="_blank" rel="noopener noreferrer"
               class="flex items-center px-4 py-2 text-sm font-medium glass-card hover:bg-green-500/10 dark:hover:bg-green-900/20 transition-all duration-300 hover:-translate-y-1">
              <img src="/icons/mcisee.png" 
                   alt="mcisee" class="w-6 h-6 rounded-full mr-2.5 shadow-sm" loading="lazy">
              <span class="text-gray-700 dark:text-gray-300">mcisee</span>
            </a>
          </div>
        </div>
        
        <div class="relative z-10 space-y-4">
          <p class="text-gray-600 dark:text-gray-400 font-medium tracking-wide">
            © 2025 <span class="gradient-text font-bold">柠枺</span> · 个人主页
          </p>
          <div class="flex items-center justify-center space-x-4 text-xs font-medium text-gray-500 dark:text-gray-500">
            <span class="flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-blue-500"></span>
              Made with ❤️ and AI
            </span>
            <span class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" class="hover:text-blue-500 transition-colors flex items-center gap-1.5">
              新ICP备2024015133号-3
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 分离的主题状态：无图模式和暗色模式
const isMinimalMode = ref(true) // 默认为无图模式
const isDarkMode = ref(false)   // 默认为亮色
const showMobileMenu = ref(false) // 移动端菜单状态

// 移动端菜单控制
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

// 点击空白处关闭菜单
const handleClickOutside = (event) => {
  const mobileMenuButton = event.target.closest('.mobile-menu-container')
  if (!mobileMenuButton && showMobileMenu.value) {
    closeMobileMenu()
  }
}

// 背景模式切换
const toggleBackgroundMode = () => {
  isMinimalMode.value = !isMinimalMode.value
  saveThemeSettings()
}

// 暗色模式切换
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  saveThemeSettings()
}

// 保存主题设置到本地存储
const saveThemeSettings = () => {
  localStorage.setItem('isMinimalMode', isMinimalMode.value.toString())
  localStorage.setItem('isDarkMode', isDarkMode.value.toString())
}

// 获取主题CSS类
const getThemeClasses = () => {
  if (isMinimalMode.value) {
    // 无图模式
    return isDarkMode.value ? 'dark bg-gray-900' : 'bg-gray-50'
  } else {
    // 有背景图模式
    return isDarkMode.value 
      ? 'dark bg-dark-bg bg-cover bg-center bg-fixed'
      : 'bg-light-bg bg-cover bg-center bg-fixed'
  }
}

// 获取背景样式
const getBackgroundStyle = () => {
  return {}
}

// 获取背景模式提示文字
const getBackgroundModeTooltip = () => {
  return isMinimalMode.value 
    ? '当前：无图模式 → 点击切换到背景图模式'
    : '当前：背景图模式 → 点击切换到无图模式'
}

// 获取暗色模式提示文字
const getDarkModeTooltip = () => {
  return isDarkMode.value 
    ? '当前：暗色主题 → 点击切换到亮色主题'
    : '当前：亮色主题 → 点击切换到暗色主题'
}

onMounted(() => {
  // 从本地存储加载主题设置
  const savedMinimalMode = localStorage.getItem('isMinimalMode')
  const savedDarkMode = localStorage.getItem('isDarkMode')
  
  if (savedMinimalMode !== null) {
    isMinimalMode.value = savedMinimalMode === 'true'
  }
  
  if (savedDarkMode !== null) {
    isDarkMode.value = savedDarkMode === 'true'
  }
  
  
  // 如果没有保存的设置，使用默认值（无图白色模式）
  if (savedMinimalMode === null && savedDarkMode === null) {
    saveThemeSettings()
  }
  
  // 添加点击空白处关闭菜单的事件监听器
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  // 清理事件监听器
  document.removeEventListener('click', handleClickOutside)
})
</script>