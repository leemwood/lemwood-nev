<template>
  <div :class="rootClasses">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-lg border-b border-stone-200/60 dark:border-stone-700/40">
      <div class="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="relative">
            <img src="/logo.png" alt="Logo" class="w-9 h-9 rounded-full ring-2 ring-stone-200 dark:ring-stone-700 group-hover:ring-brand-400/60 transition-all duration-300">
          </div>
          <div class="hidden sm:block">
            <h1 class="font-display font-bold text-lg text-stone-800 dark:text-stone-100">柠枺</h1>
          </div>
        </router-link>

        <nav class="flex items-center gap-1 md:gap-2">
          <router-link to="/" class="px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 link-accent"
                       :class="$route.path === '/' ? 'bg-stone-100 dark:bg-stone-800 text-brand-700 dark:text-brand-400' : ''">
            主页
          </router-link>
          <router-link to="/projects" class="px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 link-accent"
                       :class="$route.path === '/projects' ? 'bg-stone-100 dark:bg-stone-800 text-brand-700 dark:text-brand-400' : ''">
            项目
          </router-link>

          <div class="w-px h-5 bg-stone-200 dark:bg-stone-700 mx-1"></div>

          <!-- 背景图切换 -->
          <button @click="toggleBgImage"
                  class="p-2 rounded-lg transition-all duration-200 link-accent"
                  :title="showBgImage ? '当前：背景图模式 → 切换到纯色模式' : '当前：纯色模式 → 切换到背景图模式'">
            <svg v-if="!showBgImage" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <svg v-else class="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </button>

          <!-- 暗色切换 -->
          <button @click="toggleDark"
                  class="p-2 rounded-lg transition-all duration-200 link-accent"
                  :title="isDark ? '切换到亮色模式' : '切换到暗色模式'">
            <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </button>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="border-t border-stone-200/60 dark:border-stone-700/40 mt-24">
      <div class="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <!-- 友情链接 -->
        <div class="mb-10 pb-10 border-b border-stone-100 dark:border-stone-800">
          <h3 class="text-xs font-bold text-stone-400 dark:text-stone-500 mb-6 uppercase tracking-widest text-center">友情链接</h3>
          <div class="flex justify-center flex-wrap gap-3">
            <a href="https://zeinklab.com" target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-700/30 link-accent text-sm hover:-translate-y-0.5 transition-all duration-200">
              <img src="https://cdn.zeart.ink/gh/YShenZe/Blog-Static-Resource@main/images/202508091754715429589-27c40fedf962afbafbf31a7a06cd137b.jpg" alt="梦泽" class="w-5 h-5 rounded-full" loading="lazy">
              梦泽
            </a>
            <a href="https://lovekogasa.lapis-net.top" target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-700/30 link-accent text-sm hover:-translate-y-0.5 transition-all duration-200">
              <img src="https://lovekogasa.lapis-net.top/avatar/avatar.jpg" alt="Love-kogasa" class="w-5 h-5 rounded-full" loading="lazy">
              Love-kogasa
            </a>
            <a href="https://github.com/XiaoluoFoxington" target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-700/30 link-accent text-sm hover:-translate-y-0.5 transition-all duration-200">
              <img src="https://cdn.mengze.vip/gh/XiaoluoFoxington/FCL.website.mdui/file/avatar/XiaoluoFoxington.webp" alt="洛狐" class="w-5 h-5 rounded-full" loading="lazy">
              洛狐
            </a>
            <a href="https://mcisee.top/" target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-700/30 link-accent text-sm hover:-translate-y-0.5 transition-all duration-200">
              <img src="/icons/mcisee.png" alt="mcisee" class="w-5 h-5 rounded-full" loading="lazy">
              mcisee
            </a>
            <a href="https://serinanya.cn/" target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-700/30 link-accent text-sm hover:-translate-y-0.5 transition-all duration-200">
              <img src="https://cn.cravatar.com/avatar/764a839cacacf07906786dd9567c505e?s=300" alt="SerinaNya" class="w-5 h-5 rounded-full" loading="lazy">
              SerinaNya
            </a>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="text-center md:text-left">
            <p class="font-display font-bold text-lg text-stone-700 dark:text-stone-300">柠枺</p>
            <p class="text-sm text-stone-400 dark:text-stone-500 mt-1">宁静致远 · 枺色微凉</p>
          </div>
          <div class="flex items-center gap-6 text-sm">
            <a href="https://github.com/leemwood" target="_blank" class="link-accent flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://wiki.lemwood.cn" target="_blank" class="link-accent flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              Wiki
            </a>
            <span class="text-stone-300 dark:text-stone-600">·</span>
            <a href="https://beian.miit.gov.cn/" target="_blank" class="text-xs text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-400 transition-colors">新ICP备2024015133号-3</a>
          </div>
        </div>
        <div class="mt-6 pt-6 border-t border-stone-100 dark:border-stone-800 text-center">
          <p class="text-xs text-stone-400 dark:text-stone-600">© 2025 柠枺 · Made with ❤️</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const isDark = ref(false)
const showBgImage = ref(false)

const rootClasses = computed(() => {
  const classes: string[] = ['min-h-screen', 'flex', 'flex-col', 'transition-colors', 'duration-300']

  if (showBgImage.value) {
    classes.push(isDark.value ? 'bg-image-dark' : 'bg-image-light')
  } else {
    classes.push(isDark.value ? 'minimal-dark bg-surface-dark' : 'minimal-light bg-surface-light')
  }

  return classes
})

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const toggleBgImage = () => {
  showBgImage.value = !showBgImage.value
  localStorage.setItem('showBgImage', showBgImage.value.toString())
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  const savedBg = localStorage.getItem('showBgImage')
  if (savedBg === 'true') {
    showBgImage.value = true
  }
})
</script>
