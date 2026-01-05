/**
 * 自动获取项目图标
 * @param {string} url 项目链接
 * @returns {string} 图标链接
 */
export const getProjectIcon = (url) => {
  if (!url || url === '/') return '/logo.png';
  
  try {
    const domain = new URL(url).hostname;
    // 使用 Google Favicon 服务获取 128px 的图标
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  } catch (e) {
    return '/logo.png';
  }
};

/**
 * 处理图片加载错误
 * @param {Event} e 错误事件
 */
export const handleIconError = (e) => {
  e.target.src = '/logo.png';
};
