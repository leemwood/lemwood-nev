<template>
  <div class="max-w-4xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-20">
    <!-- Hero -->
    <section class="text-center mb-20 animate-fade-in">
      <div class="mb-8">
        <img src="/logo.png" alt="Logo"
             class="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full shadow-lg ring-4 ring-white dark:ring-stone-700 animate-float">
      </div>
      <h1 class="heading text-5xl md:text-7xl mb-4">柠枺</h1>
      <p class="text-lg md:text-xl text-stone-500 dark:text-stone-400 italic font-display">
        "世界源于灵魂的幻想"
      </p>
      <div class="mt-6 flex items-center justify-center gap-4">
        <router-link to="/projects" class="btn-primary">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
          浏览项目
        </router-link>
        <a href="https://github.com/leemwood" target="_blank" class="btn-ghost">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </section>

    <!-- 关于我 -->
    <section class="mb-20 animate-slide-up">
      <div class="card p-8 md:p-10">
        <h2 class="heading text-2xl mb-6 flex items-center gap-3">
          <span class="w-6 h-6 rounded-md bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 text-xs font-bold">#</span>
          关于我
        </h2>
        <div class="space-y-4 prose-custom text-base md:text-lg">
          <p>大家好，我是 <span class="font-bold text-brand-600 dark:text-brand-400">柠枺</span>，这里是我的数字花园。</p>
          <p>我是一个热衷于探索技术的开发者。虽然我常谦虚地说自己只是善于运用 AI，但我始终相信，<span class="italic text-stone-500 dark:text-stone-400">"好的工具是人类思维的延伸"</span>。</p>
          <p>目前我 21 岁，来自美丽的新疆。拥有 3 年 AI 辅助编程经验，喜欢简洁、优雅的设计，并致力于通过代码将创意变为现实。</p>
        </div>
      </div>
    </section>

    <!-- 联络 -->
    <section class="mb-20 animate-slide-up" style="animation-delay: 0.15s">
      <div class="card p-8 md:p-10">
        <h2 class="heading text-2xl mb-8 text-center">与我联络</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-center gap-4 p-5 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-700/30">
            <div class="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
              <span class="font-bold text-brand-600 dark:text-brand-400">QQ</span>
            </div>
            <div>
              <p class="font-bold text-stone-800 dark:text-stone-200">QQ</p>
              <p class="text-sm text-stone-500 dark:text-stone-400 font-mono">3436464181</p>
            </div>
          </div>
          <a href="https://github.com/leemwood" target="_blank"
             class="flex items-center gap-4 p-5 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-700/30 link-accent">
            <div class="w-12 h-12 rounded-xl bg-stone-800 dark:bg-stone-700 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </div>
            <div>
              <p class="font-bold text-stone-800 dark:text-stone-200">GitHub</p>
              <p class="text-sm text-stone-500 dark:text-stone-400 font-mono">@leemwood</p>
            </div>
          </a>
          <a href="https://wiki.lemwood.cn" target="_blank"
             class="flex items-center gap-4 p-5 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-700/30 link-accent">
            <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <div>
              <p class="font-bold text-stone-800 dark:text-stone-200">个人 Wiki</p>
              <p class="text-sm text-stone-500 dark:text-stone-400 font-mono">wiki.lemwood.cn</p>
            </div>
          </a>
          <div class="flex items-center gap-4 p-5 rounded-xl bg-brand-50 dark:bg-brand-900/10 border border-brand-200/50 dark:border-brand-700/20">
            <div class="w-12 h-12 rounded-xl bg-brand-200/50 dark:bg-brand-800/30 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            </div>
            <div>
              <p class="text-sm text-brand-600 dark:text-brand-400 font-medium italic">
                "期待与你在数字世界相遇"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 精选项目 -->
    <section class="animate-slide-up" style="animation-delay: 0.3s">
      <div class="card p-8 md:p-10 overflow-hidden">
        <div class="flex items-center justify-between mb-8">
          <h2 class="heading text-2xl">精选项目</h2>
          <router-link to="/projects" class="btn-ghost text-sm gap-1">
            全部
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </router-link>
        </div>
        <div class="grid md:grid-cols-2 gap-4 min-w-0">
          <a v-for="project in featuredProjects" :key="project.title"
             :href="project.url" target="_blank"
             class="flex items-center gap-4 p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-700/30 link-accent group min-w-0">
            <div class="w-11 h-11 rounded-xl overflow-hidden bg-white dark:bg-stone-800 shadow-sm flex-shrink-0">
              <img :src="getProjectIcon(project.url)" :alt="project.title"
                   class="w-full h-full object-cover p-1.5" @error="handleIconError" loading="lazy">
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="font-bold text-stone-800 dark:text-stone-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors truncate">{{ project.title }}</h3>
              <p class="text-sm text-stone-500 dark:text-stone-400 truncate">{{ project.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getProjectIcon, handleIconError } from '../utils/icon'
import { mcProjects } from '../data/projects'

const featuredProjects = mcProjects
  .filter((p) => p.links.code)
  .slice(0, 4)
  .map((p) => ({
    title: p.title,
    description: p.description.length > 30 ? p.description.slice(0, 30) + '…' : p.description,
    url: p.links.code || p.links.live || 'https://github.com/leemwood',
  }))
</script>
