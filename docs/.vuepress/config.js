module.exports = {
  title: 'loong-js',
  description: '一个通用前端工具库',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '使用文档', link: '/doc/' },
      { text: 'Gitee', link: 'https://gitee.com/ChenL0ng/loong' },
    ],
  },
};
