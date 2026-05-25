/** GitHub 仓库信息 */
export interface GitHubRepoInfo {
  stars: number
  language: string
  languageColor: string
  updatedAt: string
}

/** 语言 -> 颜色映射（部分） */
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  Kotlin: '#A97BFF',
  Go: '#00ADD8',
  Rust: '#dea584',
  'C++': '#f34b7d',
  C: '#555555',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Vue: '#41b883',
  Shell: '#89e051',
  Dockerfile: '#384d54',
}

const CACHE_PREFIX = 'gh_repo_'
const CACHE_TTL = 5 * 60 * 1000 // 5 分钟

/**
 * 获取 GitHub 仓库信息（带 localStorage 缓存）
 */
export async function fetchGitHubRepoInfo(owner: string, repo: string): Promise<GitHubRepoInfo | null> {
  const cacheKey = CACHE_PREFIX + `${owner}/${repo}`
  const cached = localStorage.getItem(cacheKey)
  if (cached) {
    try {
      const { data, ts } = JSON.parse(cached)
      if (Date.now() - ts < CACHE_TTL) return data
    } catch { /* 缓存损坏忽略 */ }
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
    if (!res.ok) return null
    const json = await res.json()
    const info: GitHubRepoInfo = {
      stars: json.stargazers_count ?? 0,
      language: json.language ?? '',
      languageColor: LANGUAGE_COLORS[json.language] || '#6b7280',
      updatedAt: json.pushed_at || '',
    }
    localStorage.setItem(cacheKey, JSON.stringify({ data: info, ts: Date.now() }))
    return info
  } catch {
    return null
  }
}

/**
 * 从项目链接批量获取 GitHub 信息
 */
export async function fetchAllGitHubRepos(
  repos: { owner: string; repo: string }[]
): Promise<Map<string, GitHubRepoInfo>> {
  const map = new Map<string, GitHubRepoInfo>()
  const results = await Promise.allSettled(
    repos.map((r) => fetchGitHubRepoInfo(r.owner, r.repo).then((info) => ({ key: `${r.owner}/${r.repo}`, info })))
  )
  for (const result of results) {
    if (result.status === 'fulfilled' && result.value.info) {
      map.set(result.value.key, result.value.info)
    }
  }
  return map
}
