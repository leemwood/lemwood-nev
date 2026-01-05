<template>
  <div class="min-h-screen pt-24 pb-20 px-4 md:px-8">
    <!-- 头部区域 -->
    <header class="max-w-6xl mx-auto text-center mb-20 animate-fade-in">
      <h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tight">
        项目 <span class="gradient-text">陈列室</span>
      </h1>
      <p class="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        这里记录了我的一些开源尝试和技术实践，涵盖 Minecraft 插件、网页开发及 AI 辅助工具。
      </p>
    </header>

    <!-- Minecraft 插件与工具 -->
    <section class="max-w-7xl mx-auto mb-32">
      <div class="flex items-center justify-between mb-12 px-2">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center">
          <span class="w-2 h-8 bg-blue-500 rounded-full mr-4"></span>
          开源项目
        </h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in mcProjects" :key="project.title" 
             class="project-card group p-8 flex flex-col h-full relative overflow-hidden">
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg class="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          
          <div class="relative z-10 flex flex-col h-full">
            <div class="flex items-center mb-6">
              <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:rotate-6 transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800', project.color]">
                <img 
                  :src="getIcon(project)" 
                  :alt="project.title"
                  class="w-full h-full object-cover p-2"
                  @error="handleIconError"
                  loading="lazy"
                >
              </div>
              <div>
                <h3 class="font-bold text-gray-800 dark:text-white text-lg">{{ project.title }}</h3>
                <div class="flex flex-wrap gap-2 mt-1.5">
                  <span v-for="tag in project.tags" :key="tag.name" 
                        :class="['px-2.5 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-wider', tag.class]">
                    {{ tag.name }}
                  </span>
                </div>
              </div>
            </div>
            
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
              {{ project.description }}
            </p>
            
            <div class="flex gap-4 mt-auto">
              <a v-if="project.links.code" :href="project.links.code" target="_blank" 
                 class="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm font-bold text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a v-if="project.links.live" :href="project.links.live" target="_blank" 
                 class="flex-1 px-4 py-2.5 rounded-xl bg-blue-500 text-white text-sm font-bold text-center hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 网页作品 -->
    <section class="max-w-7xl mx-auto mb-32">
      <div class="flex items-center justify-between mb-12 px-2">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center">
          <span class="w-2 h-8 bg-emerald-500 rounded-full mr-4"></span>
          网站作品
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div v-for="project in webProjects" :key="project.title" 
             :class="['project-card group p-10 relative overflow-hidden border-2 border-transparent transition-all duration-500', project.extraClass || '']">
          <div class="flex items-center mb-6">
            <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:rotate-6 transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800', project.color]">
              <img 
                :src="getIcon(project)" 
                :alt="project.title"
                class="w-full h-full object-cover p-2"
                @error="handleIconError"
                loading="lazy"
              >
            </div>
            <div>
              <h3 class="font-bold text-gray-800 dark:text-white text-lg">{{ project.title }}</h3>
              <div class="flex flex-wrap gap-2 mt-1.5">
                <span v-for="tag in project.tags" :key="tag.name" 
                      :class="['px-2.5 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-wider', tag.class]">
                  {{ tag.name }}
                </span>
              </div>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
            {{ project.description }}
          </p>
          <div class="flex">
            <template v-if="project.isRouter">
              <router-link :to="project.links.live" class="w-full btn-primary py-2 text-sm font-bold text-center">
                {{ project.buttonText }}
              </router-link>
            </template>
            <a v-else :href="project.links.live" target="_blank" class="w-full btn-primary py-2 text-sm font-bold text-center">
              {{ project.buttonText }}
            </a>
          </div>
        </div>

        <!-- 更多创意 -->
        <div class="project-card opacity-50 border-dashed border-2 flex flex-col items-center justify-center p-8 text-center">
          <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <h3 class="font-bold text-gray-500 dark:text-gray-400 mb-2">更多创意</h3>
          <p class="text-xs text-gray-400 dark:text-gray-500">
            更多项目正在打磨中...
          </p>
        </div>
      </div>
    </section>

    <!-- 项目统计 -->
    <section class="max-w-6xl mx-auto animate-slide-up" style="animation-delay: 0.3s">
      <div class="glass-card p-10 md:p-14 relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
        <h2 class="text-3xl font-bold mb-12 text-gray-800 dark:text-white text-center relative z-10">
          成长足迹
        </h2>
        
        <div class="grid md:grid-cols-3 gap-10 text-center relative z-10">
          <div class="space-y-3 group-hover:-translate-y-1 transition-transform duration-500">
            <div class="text-5xl font-black gradient-text">16+</div>
            <div class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">开源项目</div>
          </div>
          
          <div class="space-y-3 group-hover:-translate-y-1 transition-transform duration-500" style="transition-delay: 0.1s">
            <div class="text-5xl font-black gradient-text">5+</div>
            <div class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">网站作品</div>
          </div>
          
          <div class="space-y-3 group-hover:-translate-y-1 transition-transform duration-500" style="transition-delay: 0.2s">
            <div class="text-5xl font-black gradient-text">∞</div>
            <div class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">无限可能</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getProjectIcon, handleIconError } from '../utils/icon';

const mcProjects = [
  {
    title: 'MC-Nav',
    description: '个人主页和项目导航网站，采用现代化设计风格，支持深色模式和响应式布局。',
    color: 'shadow-blue-500/20',
    tags: [
      { name: 'Vue3', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Navigation', class: 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' }
    ],
    links: {
      code: 'https://github.com/leemwood/mc-nav',
      live: 'https://lemwood.cn'
    }
  },
  {
    title: 'Leaves 整合包',
    description: '原涌翠互通端。精心调优的 Leaves 服务端整合包，包含常用的基础插件和性能优化配置。',
    color: 'shadow-emerald-500/20',
    tags: [
      { name: 'Leaves', class: 'bg-green-100/50 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
      { name: 'Optimization', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' }
    ],
    links: {
      code: 'https://github.com/leemwood/YC-Redstone-Interoperability-Basic-Client',
      live: 'https://wiki.lemwood.cn/docs/leaves/'
    }
  },
  {
    title: 'AI 开发文档',
    description: '记录 AI 辅助开发的实践经验，包括 IDE 环境配置、Prompt 技巧及构建方案。',
    color: 'shadow-indigo-500/20',
    tags: [
      { name: 'AI', class: 'bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' },
      { name: 'Guide', class: 'bg-slate-100/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400' }
    ],
    links: {
      live: 'https://wiki.lemwood.cn/docs/ai/'
    }
  },
  {
    title: 'Doubledoor',
    description: '一个实用的 Minecraft 插件，实现了双开门等便捷的建筑交互功能。',
    color: 'shadow-amber-500/20',
    tags: [
      { name: 'Spigot', class: 'bg-amber-100/50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
      { name: 'Interaction', class: 'bg-orange-100/50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' }
    ],
    links: {
      live: 'https://wiki.lemwood.cn/docs/doubledoor/'
    }
  },
  {
    title: '柠枺镜像',
    description: '一个自动化的启动器镜像系统，旨在自动从 GitHub 获取指定项目的最新 Release，并同步至本地服务器提供高速下载。',
    color: 'shadow-blue-500/20',
    tags: [
      { name: 'Mirror', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Public', class: 'bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' }
    ],
    links: {
      live: 'https://wiki.lemwood.cn/docs/lemwood-mirror/'
    }
  },
  {
    title: '控件转换器 (FCL to ZL2)',
    description: '现代化的 Web 应用，旨在解决 Minecraft 启动器 FCL 与 ZL2 之间控件配置不兼容的问题，支持全自动、类型安全的转换流程。',
    color: 'shadow-purple-500/20',
    tags: [
      { name: 'Tool', class: 'bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
      { name: 'Dev', class: 'bg-slate-100/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400' }
    ],
    links: {
      live: 'https://wiki.lemwood.cn/docs/fcl-to-zl2/'
    }
  },
  {
    title: 'HuskHomesForm',
    description: '为 HuskHomes 插件提供的 GUI 界面，让玩家更方便地管理家园和传送点。',
    color: 'shadow-orange-500/20',
    tags: [
      { name: 'Spigot', class: 'bg-amber-100/50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
      { name: 'GUI', class: 'bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' }
    ],
    links: {
      code: 'https://github.com/leemwood/HuskHomesForm'
    }
  },
  {
    title: 'TpaGUI',
    description: '简化玩家传送请求的 GUI 插件，提供直观的界面来管理传送请求。',
    color: 'shadow-purple-500/20',
    tags: [
      { name: 'Spigot', class: 'bg-amber-100/50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
      { name: 'TPA', class: 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' }
    ],
    links: {
      code: 'https://github.com/leemwood/TpaGUI'
    }
  },
  {
    title: 'WorldAlias',
    description: '为 Minecraft 服务器提供世界别名变量功能，简化多世界管理。',
    color: 'shadow-indigo-500/20',
    tags: [
      { name: 'Spigot', class: 'bg-amber-100/50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
      { name: 'Utility', class: 'bg-slate-100/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400' }
    ],
    links: {
      code: 'https://github.com/leemwood/WorldAliasVariables'
    }
  },
  {
    title: 'FileManager MCP Server',
    description: '一个功能强大的文件管理 MCP 服务器，提供完整的文件和目录操作功能，支持高级编辑、模板创建和项目结构生成。',
    color: 'shadow-blue-500/20',
    tags: [
      { name: 'Node.js', class: 'bg-green-100/50 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
      { name: 'MCP', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Utility', class: 'bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' }
    ],
    links: {
      code: 'https://github.com/leemwood/filemanager-mcp-server'
    }
  },
  {
    title: 'Lemwood Plugin',
    description: '一个功能丰富的 Minecraft Paper 插件，提供玩家欢迎系统、离开广播、命令管理及 IP 位置查询功能。',
    color: 'shadow-indigo-500/20',
    tags: [
      { name: 'Paper', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Java', class: 'bg-orange-100/50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
      { name: 'Utility', class: 'bg-slate-100/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400' }
    ],
    links: {
      code: 'https://github.com/leemwood/lemwood_plugin'
    }
  },
  {
    title: 'ServerSee',
    description: '通过 MC 插件提供轻量级服务器性能信息 API，支持实时 TPS、MSPT、CPU 及内存数据监控，支持 Android 客户端。',
    color: 'shadow-emerald-500/20',
    tags: [
      { name: 'Java', class: 'bg-orange-100/50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
      { name: 'Android', class: 'bg-green-100/50 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
      { name: 'API', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' }
    ],
    links: {
      code: 'https://github.com/serverseemc'
    }
  },
  {
    title: 'GeyserMenu',
    description: '一个轻量化且简单的基岩版自定义表单插件，专为基岩版玩家设计，支持 PlaceholderAPI。',
    color: 'shadow-blue-500/20',
    tags: [
      { name: 'Spigot', class: 'bg-amber-100/50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
      { name: 'Bedrock', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' }
    ],
    links: {
      code: 'https://github.com/leemwood/GeyserMenu',
      live: 'https://wiki.lemwood.cn/docs/geysermenu/'
    }
  },
  {
    title: 'BellCommand',
    description: '功能强大的 Minecraft 插件，允许创建可执行命令的自定义物品，支持模块化配置、热重载及高并发处理。',
    color: 'shadow-yellow-500/20',
    tags: [
      { name: 'Java', class: 'bg-orange-100/50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
      { name: 'System', class: 'bg-slate-100/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400' }
    ],
    links: {
      code: 'https://github.com/leemwood/BellCommand',
      live: 'https://wiki.lemwood.cn/docs/bellcommand/'
    }
  }
]

const webProjects = [
  {
    title: 'YSM 模型站',
    description: '一个免费下载 Minecraft Yes Steve Model (YSM) 模型的社区平台，支持模型浏览、上传及下载。',
    color: 'shadow-orange-500/20',
    buttonText: 'Explore Models',
    tags: [
      { name: 'Model', class: 'bg-orange-100/50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
      { name: 'Community', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Platform', class: 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' }
    ],
    links: {
      live: 'https://ysmmc.cn'
    }
  },
  {
    title: 'DMTR 新手文档',
    description: '专注于 Minecraft Java Edition for Android 的启动器文档，提供 FCL 启动器、插件及 Vulkan 等技术指南。',
    color: 'shadow-emerald-500/20',
    buttonText: 'Read Docs',
    tags: [
      { name: 'Docs', class: 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' },
      { name: 'Android', class: 'bg-green-100/50 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
      { name: 'Docusaurus', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' }
    ],
    links: {
      live: 'https://docs.lemwood.cn'
    }
  },
  {
    title: 'DH for Android',
    description: '自动注入 libzstd-jni 手机版补丁，支持 aarch64 架构，为手机端 Minecraft 提供 Distant Horizons 模组支持。',
    color: 'shadow-blue-500/20',
    buttonText: 'Download Patched Mod',
    tags: [
      { name: 'Vue3', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Android', class: 'bg-green-100/50 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
      { name: 'Patch', class: 'bg-orange-100/50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' }
    ],
    links: {
      live: 'https://dh.lemwood.cn'
    }
  },
  {
    title: '个人 Wiki',
    description: '个人知识库和文档站点，记录学习笔记和项目文档，沉淀技术成长。',
    color: 'shadow-emerald-500/20',
    buttonText: 'Explore Wiki',
    tags: [
      { name: 'MediaWiki', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Docs', class: 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' }
    ],
    links: {
      live: 'https://wiki.lemwood.cn'
    }
  },
  {
    title: '个人主页',
    description: '当前网站，采用 Vue3 + Tailwind CSS 构建的现代化个人主页。',
    color: 'shadow-blue-500/20',
    buttonText: 'Home Page',
    extraClass: 'border-blue-500/30 dark:border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10',
    isRouter: true,
    tags: [
      { name: 'Vue3', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Tailwind', class: 'bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' }
    ],
    links: {
      live: '/'
    }
  }
]

// 自动获取项目图标
const getIcon = (project) => {
  const url = project.links.live && project.links.live !== '/' 
    ? project.links.live 
    : project.links.code;
  return getProjectIcon(url);
}
</script>
