/** 项目标签 */
export interface ProjectTag {
  name: string
  class: string
}

/** 项目链接 */
export interface ProjectLinks {
  code?: string
  live?: string
}

/** 项目数据 */
export interface Project {
  title: string
  description: string
  color: string
  tags: ProjectTag[]
  links: ProjectLinks
  /** 网站作品专属 */
  buttonText?: string
  extraClass?: string
  isRouter?: boolean
  /** 从 GitHub 获取的实时数据 */
  github?: {
    stars: number
    language: string
    languageColor: string
    updatedAt: string
  }
}

export interface ProjectCategory {
  id: string
  name: string
  icon: string
  color: string
  projects: Project[]
}

/** 从项目 URL 提取 GitHub owner/repo */
export function extractGitHubRepo(url: string | undefined): { owner: string; repo: string } | null {
  if (!url) return null
  const match = url.match(/github\.com\/([^/]+)\/([^/]+?)(?:\/|$)/)
  if (!match) return null
  return { owner: match[1], repo: match[2].replace(/\.git$/, '') }
}

/** 提取所有可用作筛选的标签 */
export function getAllTags(categories: ProjectCategory[]): { name: string; class: string }[] {
  const seen = new Set<string>()
  const tags: { name: string; class: string }[] = []
  for (const cat of categories) {
    for (const p of cat.projects) {
      for (const t of p.tags) {
        if (!seen.has(t.name)) {
          seen.add(t.name)
          tags.push(t)
        }
      }
    }
  }
  return tags
}

/** 获取项目图标 - 使用多个来源保证可靠性 */
export function getProjectPreview(url: string | undefined): string {
  if (!url || url === '/') return '/logo.png'
  try {
    const domain = new URL(url).hostname
    // 使用 DuckDuckGo 图标服务，对中国站点更友好
    return `https://icons.duckduckgo.com/ip3/${domain}.ico`
  } catch {
    return '/logo.png'
  }
}
