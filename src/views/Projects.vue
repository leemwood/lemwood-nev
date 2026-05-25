<template>
  <div class="max-w-6xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-20">
    <!-- 头部 -->
    <header class="text-center mb-14 animate-fade-in">
      <h1 class="heading text-4xl md:text-5xl mb-4">
        项目<span class="text-brand-600 dark:text-brand-400">陈列室</span>
      </h1>
      <p class="prose-custom text-base md:text-lg max-w-xl mx-auto">
        记录了我的一些开源尝试和技术实践，涵盖 Minecraft 插件、网页开发及 AI 辅助工具。
      </p>
    </header>

    <!-- 搜索 + 筛选 -->
    <div class="card p-5 mb-12 animate-slide-up">
      <!-- 搜索框 -->
      <div class="relative mb-4">
        <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input v-model="searchQuery" type="text" placeholder="搜索项目名称或描述…"
               class="w-full pl-10 pr-4 py-2.5 rounded-lg bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 focus:border-brand-500 dark:focus:border-brand-600 outline-none transition-all text-sm">
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <button v-for="cat in categories" :key="cat.id"
                @click="activeCategory = cat.id"
                class="px-3.5 py-1.5 rounded-lg text-sm font-bold transition-all duration-200"
                :class="activeCategory === cat.id
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'">
          {{ cat.icon }} {{ cat.name }}
        </button>

        <div class="w-px h-5 bg-stone-200 dark:bg-stone-700 mx-1"></div>

        <button @click="activeTag = ''"
                class="px-2.5 py-1 rounded-md text-xs font-bold transition-all duration-200"
                :class="!activeTag
                  ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20'
                  : 'text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-400'">
          全部
        </button>
        <button v-for="tag in allTags" :key="tag.name"
                @click="activeTag = activeTag === tag.name ? '' : tag.name"
                class="px-2.5 py-1 rounded-md text-xs font-bold transition-all duration-200"
                :class="activeTag === tag.name
                  ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20'
                  : 'text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-400'">
          {{ tag.name }}
        </button>
      </div>
    </div>

    <!-- 分类区块 -->
    <div class="space-y-16">
      <section v-for="cat in filteredCategories" :key="cat.id">
        <div class="flex items-center gap-3 mb-8">
          <span class="text-2xl">{{ cat.icon }}</span>
          <h2 class="heading text-2xl">{{ cat.name }}</h2>
          <span class="text-sm text-stone-400 dark:text-stone-500">({{ cat.projects.length }})</span>
        </div>

        <!-- 无结果 -->
        <div v-if="cat.projects.length === 0" class="text-center py-16">
          <div class="text-5xl mb-4">🔍</div>
          <p class="text-stone-500 dark:text-stone-400 font-medium">没有匹配的项目</p>
          <p class="text-sm text-stone-400 dark:text-stone-500 mt-1">试试其他关键词或标签</p>
        </div>

        <!-- 开源项目：3 列 -->
        <div v-if="cat.id === 'mc'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="project in cat.projects" :key="project.title"
               class="card-hover p-6 flex flex-col group">
            <!-- 头部 -->
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl overflow-hidden bg-white dark:bg-stone-800 shadow-sm flex-shrink-0 ring-1 ring-stone-200 dark:ring-stone-700">
                <img :src="getProjectPreview(project.links.code || project.links.live)"
                     :alt="project.title" class="w-full h-full object-cover p-2"
                     @error="handleIconError" loading="lazy">
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="font-bold text-stone-800 dark:text-stone-200 truncate">{{ project.title }}</h3>
                <div class="flex flex-wrap gap-1 mt-1.5">
                  <span v-for="tag in project.tags" :key="tag.name"
                        class="tag" :class="tag.class">
                    {{ tag.name }}
                  </span>
                </div>
              </div>
            </div>

            <!-- 描述 -->
            <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed flex-grow line-clamp-3 mb-5">
              {{ project.description }}
            </p>

            <!-- GitHub meta -->
            <div v-if="project.github" class="flex items-center gap-4 mb-4 text-xs text-stone-400 dark:text-stone-500">
              <span class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                {{ project.github.stars }}
              </span>
              <span v-if="project.github.language" class="flex items-center gap-1">
                <span class="w-2.5 h-2.5 rounded-full" :style="{ background: project.github.languageColor }"></span>
                {{ project.github.language }}
              </span>
              <span v-if="project.github.updatedAt" class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                {{ timeAgo(project.github.updatedAt) }}
              </span>
              <span v-else class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                加载中
              </span>
            </div>

            <!-- 按钮 -->
            <div class="flex gap-2 mt-auto pt-2 border-t border-stone-100 dark:border-stone-700/40">
              <a v-if="project.links.code" :href="project.links.code" target="_blank"
                 class="flex-1 py-2 rounded-lg text-xs font-bold text-center
                        text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200
                        hover:bg-stone-100 dark:hover:bg-stone-800 transition-all">
                <svg class="w-3.5 h-3.5 inline mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
                源代码
              </a>
              <a v-if="project.links.live" :href="project.links.live" target="_blank"
                 class="flex-1 py-2 rounded-lg text-xs font-bold text-center
                        bg-brand-600 text-white hover:bg-brand-700 transition-all shadow-sm">
                <svg class="w-3.5 h-3.5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                Demo
              </a>
            </div>
          </div>
        </div>

        <!-- 网站作品：2 列 -->
        <div v-if="cat.id === 'web'" class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div v-for="project in cat.projects" :key="project.title"
               :class="['card-hover p-7 relative overflow-hidden', project.extraClass || '']">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl overflow-hidden bg-white dark:bg-stone-800 shadow-sm flex-shrink-0 ring-1 ring-stone-200 dark:ring-stone-700">
                <img :src="getProjectPreview(project.links.live)" :alt="project.title"
                     class="w-full h-full object-cover p-2" @error="handleIconError" loading="lazy">
              </div>
              <div>
                <h3 class="font-bold text-stone-800 dark:text-stone-200">{{ project.title }}</h3>
                <div class="flex flex-wrap gap-1 mt-1">
                  <span v-for="tag in project.tags" :key="tag.name"
                        class="tag" :class="tag.class">{{ tag.name }}</span>
                </div>
              </div>
            </div>
            <p class="text-sm text-stone-500 dark:text-stone-400 mb-5 leading-relaxed">{{ project.description }}</p>
            <template v-if="project.isRouter">
              <router-link :to="project.links.live" class="btn-primary text-xs w-full">{{ project.buttonText }}</router-link>
            </template>
            <a v-else :href="project.links.live" target="_blank" class="btn-primary text-xs w-full">{{ project.buttonText }}</a>
          </div>

          <!-- 占位 -->
          <div class="card p-7 opacity-50 border-dashed border-2 flex flex-col items-center justify-center text-center">
            <div class="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mb-3">
              <svg class="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            </div>
            <h3 class="font-bold text-stone-400 dark:text-stone-500 mb-1">更多创意</h3>
            <p class="text-xs text-stone-400 dark:text-stone-500">更多项目正在打磨中…</p>
          </div>
        </div>
      </section>
    </div>

    <!-- 统计 -->
    <section class="mt-20 animate-slide-up" style="animation-delay: 0.3s">
      <div class="card p-10 md:p-14 text-center">
        <h2 class="heading text-2xl mb-10">成长足迹</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div class="space-y-2">
            <div class="text-4xl md:text-5xl font-black text-brand-600 dark:text-brand-400">{{ mcProjects.length }}+</div>
            <div class="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-widest">开源项目</div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl md:text-5xl font-black text-brand-600 dark:text-brand-400">{{ webProjects.length }}+</div>
            <div class="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-widest">网站作品</div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl md:text-5xl font-black text-brand-600 dark:text-brand-400">∞</div>
            <div class="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-widest">无限可能</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { categories, mcProjects, webProjects } from '../data/projects'
import { extractGitHubRepo, getAllTags, getProjectPreview, type Project, type ProjectCategory } from '../data/types'
import { fetchAllGitHubRepos } from '../utils/github'
import { handleIconError } from '../utils/icon'

const searchQuery = ref('')
const activeCategory = ref('mc')
const activeTag = ref('')

const allTags = computed(() => getAllTags(categories))

function filterProjects(projects: Project[]): Project[] {
  return projects.filter((p) => {
    if (activeTag.value && !p.tags.some((t) => t.name === activeTag.value)) return false
    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase()
      if (!p.title.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) return false
    }
    return true
  })
}

const filteredCategories = computed<ProjectCategory[]>(() => {
  const filtered: ProjectCategory[] = []
  const cats = activeCategory.value === 'all' ? categories : categories.filter((c) => c.id === activeCategory.value)
  for (const cat of cats) {
    filtered.push({ ...cat, projects: filterProjects(cat.projects) })
  }
  return filtered
})

onMounted(async () => {
  const allProjects = [...mcProjects, ...webProjects]
  const repoEntries = allProjects
    .map((p) => extractGitHubRepo(p.links.code))
    .filter((r): r is { owner: string; repo: string } => r !== null)
  const infoMap = await fetchAllGitHubRepos(repoEntries)
  for (const p of allProjects) {
    const repo = extractGitHubRepo(p.links.code)
    if (repo) {
      const key = `${repo.owner}/${repo.repo}`
      const info = infoMap.get(key)
      if (info) p.github = info
    }
  }
})

function timeAgo(dateStr: string): string {
  const now = Date.now()
  const then = new Date(dateStr).getTime()
  const diff = Math.floor((now - then) / 1000)
  if (diff < 60) return '刚刚'
  if (diff < 3600) return `${Math.floor(diff / 60)} 分钟前`
  if (diff < 86400) return `${Math.floor(diff / 3600)} 小时前`
  if (diff < 2592000) return `${Math.floor(diff / 86400)} 天前`
  return `${Math.floor(diff / 2592000)} 月前`
}
</script>
