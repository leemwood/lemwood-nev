import type { Project, ProjectCategory } from './types'

/** MC 插件与工具项目 */
export const mcProjects: Project[] = [
  {
    title: 'MC-Nav',
    description: '个人主页和项目导航网站，采用现代化设计风格，支持深色模式和响应式布局。',
    color: 'shadow-blue-500/20',
    tags: [
      { name: 'Vue3', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Navigation', class: 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' },
    ],
    links: { code: 'https://github.com/leemwood/mc-nav', live: 'https://lemwood.cn' },
  },
  {
    title: 'Leaves 整合包',
    description: '原涌翠互通端。精心调优的 Leaves 服务端整合包，包含常用的基础插件和性能优化配置。',
    color: 'shadow-emerald-500/20',
    tags: [
      { name: 'Leaves', class: 'bg-green-100/50 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
      { name: 'Optimization', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    ],
    links: { live: 'https://wiki.lemwood.cn/docs/leaves/' },
  },
  {
    title: 'Doubledoor',
    description: '一个实用的 Minecraft 插件，实现了双开门等便捷的建筑交互功能。',
    color: 'shadow-amber-500/20',
    tags: [
      { name: 'Spigot', class: 'bg-amber-100/50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
      { name: 'Interaction', class: 'bg-orange-100/50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
    ],
    links: { live: 'https://wiki.lemwood.cn/docs/doubledoor/' },
  },
  {
    title: '柠枺镜像',
    description: '一个自动化的启动器镜像系统，旨在自动从 GitHub 获取指定项目的最新 Release，并同步至本地服务器提供高速下载。',
    color: 'shadow-blue-500/20',
    tags: [
      { name: 'Mirror', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Public', class: 'bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' },
    ],
    links: { live: 'https://wiki.lemwood.cn/docs/lemwood-mirror/' },
  },
  {
    title: '控件转换器 (FCL to ZL2)',
    description: '现代化的 Web 应用，解决 Minecraft 启动器 FCL 与 ZL2 之间控件配置不兼容的问题，支持全自动、类型安全的转换流程。',
    color: 'shadow-purple-500/20',
    tags: [
      { name: 'Tool', class: 'bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
      { name: 'Dev', class: 'bg-slate-100/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400' },
    ],
    links: { live: 'https://wiki.lemwood.cn/docs/fcl-to-zl2/' },
  },
  {
    title: 'HuskHomesForm',
    description: '为 HuskHomes 插件提供的 GUI 界面，让玩家更方便地管理家园和传送点。',
    color: 'shadow-orange-500/20',
    tags: [
      { name: 'Spigot', class: 'bg-amber-100/50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
      { name: 'GUI', class: 'bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' },
    ],
    links: { code: 'https://github.com/leemwood/HuskHomesForm' },
  },
  {
    title: 'TpaGUI',
    description: '简化玩家传送请求的 GUI 插件，提供直观的界面来管理传送请求。',
    color: 'shadow-purple-500/20',
    tags: [
      { name: 'Spigot', class: 'bg-amber-100/50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
      { name: 'TPA', class: 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' },
    ],
    links: { code: 'https://github.com/leemwood/TpaGUI' },
  },
  {
    title: 'WorldAlias',
    description: '为 Minecraft 服务器提供世界别名变量功能，简化多世界管理。',
    color: 'shadow-indigo-500/20',
    tags: [
      { name: 'Spigot', class: 'bg-amber-100/50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
      { name: 'Utility', class: 'bg-slate-100/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400' },
    ],
    links: { code: 'https://github.com/leemwood/WorldAliasVariables' },
  },
  {
    title: 'FileManager MCP Server',
    description: '一个功能强大的文件管理 MCP 服务器，提供完整的文件和目录操作功能，支持高级编辑、模板创建和项目结构生成。',
    color: 'shadow-blue-500/20',
    tags: [
      { name: 'Node.js', class: 'bg-green-100/50 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
      { name: 'MCP', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Utility', class: 'bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
    ],
    links: { code: 'https://github.com/leemwood/filemanager-mcp-server' },
  },
  {
    title: 'Lemwood Plugin',
    description: '一个功能丰富的 Minecraft Paper 插件，提供玩家欢迎系统、离开广播、命令管理及 IP 位置查询功能。',
    color: 'shadow-indigo-500/20',
    tags: [
      { name: 'Paper', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Java', class: 'bg-orange-100/50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
      { name: 'Utility', class: 'bg-slate-100/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400' },
    ],
    links: { code: 'https://github.com/leemwood/lemwood_plugin' },
  },
  {
    title: 'ServerSee',
    description: '通过 MC 插件提供轻量级服务器性能信息 API，支持实时 TPS、MSPT、CPU 及内存数据监控，支持 Android 客户端。',
    color: 'shadow-emerald-500/20',
    tags: [
      { name: 'Java', class: 'bg-orange-100/50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
      { name: 'Android', class: 'bg-green-100/50 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
      { name: 'API', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    ],
    links: { code: 'https://github.com/serverseemc' },
  },
  {
    title: 'GeyserMenu',
    description: '一个轻量化且简单的基岩版自定义表单插件，专为基岩版玩家设计，支持 PlaceholderAPI。',
    color: 'shadow-blue-500/20',
    tags: [
      { name: 'Spigot', class: 'bg-amber-100/50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
      { name: 'Bedrock', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    ],
    links: { code: 'https://github.com/leemwood/GeyserMenu', live: 'https://wiki.lemwood.cn/docs/geysermenu/' },
  },
  {
    title: 'BellCommand',
    description: '功能强大的 Minecraft 插件，允许创建可执行命令的自定义物品，支持模块化配置、热重载及高并发处理。',
    color: 'shadow-yellow-500/20',
    tags: [
      { name: 'Java', class: 'bg-orange-100/50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
      { name: 'System', class: 'bg-slate-100/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400' },
    ],
    links: { code: 'https://github.com/leemwood/BellCommand', live: 'https://wiki.lemwood.cn/docs/bellcommand/' },
  },
]

/** 网站作品 */
export const webProjects: Project[] = [
  {
    title: 'YSM 模型站',
    description: '一个免费下载 Minecraft Yes Steve Model (YSM) 模型的社区平台，支持模型浏览、上传及下载。',
    color: 'shadow-orange-500/20',
    buttonText: 'Explore Models',
    tags: [
      { name: 'Model', class: 'bg-orange-100/50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
      { name: 'Community', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Platform', class: 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' },
    ],
    links: { live: 'https://ysmmc.cn' },
  },
  {
    title: 'FCL 教程',
    description: '专注于 Minecraft Java Edition for Android 的启动器文档，提供 FCL 启动器、插件及 Vulkan 等技术指南。',
    color: 'shadow-emerald-500/20',
    buttonText: 'Read Docs',
    tags: [
      { name: 'Docs', class: 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' },
      { name: 'Android', class: 'bg-green-100/50 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
      { name: 'Docusaurus', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    ],
    links: { live: 'https://docs.lemwood.cn' },
  },
  {
    title: '个人 Wiki',
    description: '个人知识库和文档站点，记录学习笔记和项目文档，沉淀技术成长。',
    color: 'shadow-emerald-500/20',
    buttonText: 'Explore Wiki',
    tags: [
      { name: 'MediaWiki', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Docs', class: 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' },
    ],
    links: { live: 'https://wiki.lemwood.cn' },
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
      { name: 'Tailwind', class: 'bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
    ],
    links: { live: '/' },
  },
  {
    title: 'ZalithLauncher',
    description: '现代化游戏启动器官网，提供 ZalithLauncher 启动器的下载与技术支持。',
    color: 'shadow-purple-500/20',
    buttonText: 'Visit Site',
    tags: [
      { name: 'Vue3', class: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
      { name: 'Website', class: 'bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
    ],
    links: { live: 'https://www.zalithlauncher.cn' },
  },
]

/** 分类汇总 */
export const categories: ProjectCategory[] = [
  { id: 'mc', name: '开源项目', icon: '📦', color: 'blue', projects: mcProjects },
  { id: 'web', name: '网站作品', icon: '🌐', color: 'emerald', projects: webProjects },
]
