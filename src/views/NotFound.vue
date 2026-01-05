<template>
  <div class="min-h-[70vh] flex items-center justify-center px-4">
    <div class="glass-card p-12 md:p-16 max-w-2xl w-full text-center relative overflow-hidden group">
      <!-- 背景装饰 -->
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>
      <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-700"></div>

      <div class="relative z-10">
        <!-- 404 数字 -->
        <h1 class="text-8xl md:text-9xl font-black gradient-text mb-4 animate-float">
          404
        </h1>
        
        <!-- 标题 -->
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
          页面似乎迷失在虚空中了
        </h2>
        
        <!-- 描述 -->
        <p class="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed max-w-md mx-auto">
          抱歉，您访问的页面不存在或已被移除。您可以尝试返回主页继续探索。
        </p>
        
        <!-- 动作按钮 -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link 
            to="/" 
            class="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-blue-500 text-white font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group/btn"
          >
            <svg class="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            返回主页
          </router-link>
          
          <router-link 
            to="/projects" 
            class="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 font-bold hover:bg-white/20 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            查看项目
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 404 页面逻辑
</script>
