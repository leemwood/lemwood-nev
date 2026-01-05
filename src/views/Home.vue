<template>
  <div class="animate-fade-in">
    <!-- 头部区域 -->
    <header class="text-center mb-12 animate-fade-in">
      <div class="mb-8">
        <img 
          src="/logo.png" 
          alt="Logo" 
          class="w-24 h-24 mx-auto rounded-full shadow-2xl animate-float"
        >
      </div>
      
      <h1 class="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-slide-up">
        柠枺
      </h1>
      
      <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 animate-slide-up italic">
        "世界源于灵魂的幻想"
      </p>
    </header>

    <!-- 简介卡片 -->
    <section class="max-w-6xl mx-auto mb-12 animate-slide-up">
      <div class="glass-card p-8 md:p-12 relative overflow-hidden group">
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
        <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
          <span class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 text-sm">#</span>
          关于我
        </h2>
        <div class="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300 relative z-10">
          <p>
            大家好，我是 <span class="text-blue-500 dark:text-blue-400 font-bold">柠枺</span>，这里是我的数字花园。
          </p>
          <p>
            我是一个热衷于探索技术的开发者。虽然我常谦虚地说自己只是善于运用 AI，但我始终相信，<span class="italic text-purple-500 dark:text-purple-400">“好的工具是人类思维的延伸”</span>。
          </p>
          <p>
            目前我 20 岁，来自美丽的新疆。我喜欢简洁、优雅的设计，并致力于通过代码将创意变为现实。
          </p>
        </div>
      </div>
    </section>

    <!-- 联系方式 -->
    <section class="max-w-6xl mx-auto mb-12 animate-slide-up" style="animation-delay: 0.2s">
      <div class="glass-card p-8 md:p-12">
        <h2 class="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
          与我联络
        </h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-center space-x-4 p-5 rounded-2xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 link-hover group">
              <div class="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                <span class="text-white font-bold text-xl">QQ</span>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 dark:text-white">QQ</h3>
                <p class="text-gray-600 dark:text-gray-400 font-mono">3436464181</p>
                <p class="text-[10px] text-gray-500 dark:text-gray-500 mt-1 uppercase tracking-wider">Business & Chat</p>
              </div>
            </div>

            <a 
              href="https://github.com/leemwood" 
              target="_blank"
              class="flex items-center space-x-4 p-5 rounded-2xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 link-hover group"
            >
              <div class="w-14 h-14 bg-gray-800 dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg shadow-black/20 group-hover:rotate-12 transition-transform">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 dark:text-white">GitHub</h3>
                <p class="text-gray-600 dark:text-gray-400 font-mono">@leemwood</p>
                <p class="text-[10px] text-gray-500 dark:text-gray-500 mt-1 uppercase tracking-wider">Open Source</p>
              </div>
            </a>
          </div>

          <div class="space-y-4">
            <a 
              href="https://wiki.lemwood.cn" 
              target="_blank"
              class="flex items-center space-x-4 p-5 rounded-2xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 link-hover group"
            >
              <div class="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 dark:text-white">个人 Wiki</h3>
                <p class="text-gray-600 dark:text-gray-400 font-mono">wiki.lemwood.cn</p>
                <p class="text-[10px] text-gray-500 dark:text-gray-500 mt-1 uppercase tracking-wider">Knowledge Base</p>
              </div>
            </a>

            <div class="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/20 dark:bg-blue-900/10">
              <p class="text-sm text-blue-600 dark:text-blue-400 font-medium italic text-center">
                "期待与你在数字世界相遇"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 相关项目预览 -->
    <section class="max-w-4xl mx-auto animate-slide-up" style="animation-delay: 0.4s">
      <div class="glass-card p-8 md:p-12">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white">精选项目</h2>
          <router-link 
            to="/projects"
            class="group flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <span class="text-sm font-bold">全部项目</span>
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </router-link>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <a 
            v-for="project in featuredProjects"
            :key="project.title"
            :href="project.url" 
            target="_blank"
            class="flex items-center space-x-5 p-6 rounded-2xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 link-hover block group"
          >
            <div class="relative">
              <div class="w-16 h-16 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <img 
                  :src="getProjectIcon(project.url)" 
                  :alt="project.title" 
                  class="w-full h-full object-cover p-2"
                  @error="handleIconError"
                  loading="lazy"
                >
              </div>
              <div :class="['absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity', project.color]"></div>
            </div>
            <div>
              <h3 class="font-bold text-gray-800 dark:text-white text-lg group-hover:text-blue-500 transition-colors">{{ project.title }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">{{ project.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getProjectIcon, handleIconError } from '../utils/icon';

const featuredProjects = [
  {
    title: 'FCL 下载站',
    description: 'FoldCraftLauncher 官方资源',
    url: 'https://foldcraftlauncher.cn',
    color: 'bg-blue-500/20'
  },
  {
    title: 'ZalithLauncher',
    description: '现代化游戏启动器官网',
    url: 'https://zalithlauncher.cn',
    color: 'bg-purple-500/20'
  }
]
</script>