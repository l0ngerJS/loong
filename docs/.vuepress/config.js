module.exports = {
  title: 'loong-js',
  description: '一个通用前端工具库',
  base: '/loong/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '指南', link: '/zh/guide/' },
      { text: '使用文档', link: '/zh/doc/array/range' },
      { text: 'Github', link: 'https://github.com/l0ngerJS/loong' },
      { text: 'Gitee', link: 'https://gitee.com/ChenL0ng/loong' },
    ],
    sidebar: {
      '/zh/guide/': ['', 'TODO'],
      '/zh/doc/': [
        {
          title: 'array',
          collapsable: true,
          sidebarDepth: 0,
          children: [
            ['array/range', 'range'],
            ['array/arrayToTree', 'arrayToTree'],
            ['array/pickTreeItem', 'pickTreeItem'],
            ['array/treeToArray', 'treeToArray'],
          ],
        },
        {
          title: 'function',
          collapsable: true,
          sidebarDepth: 0,
          children: [
            ['function/debounce', 'debounce'],
            ['function/throttle', 'throttle'],
          ],
        },
        {
          title: 'object',
          collapsable: true,
          sidebarDepth: 0,
          children: [
            ['object/pick', 'pick'],
            ['object/type', 'type'],
          ],
        },
        {
          title: 'string',
          collapsable: true,
          sidebarDepth: 0,
          children: [
            ['string/getParam', 'getParam'],
            ['string/truncate', 'truncate'],
          ],
        },
        {
          title: 'regex',
          collapsable: true,
          sidebarDepth: 0,
          children: [
            ['regex/isBankCard', 'isBankCard'],
            ['regex/isEmail', 'isEmail'],
            ['regex/isHanzi', 'isHanzi'],
            ['regex/isIDCard', 'isIDCard'],
            ['regex/isIP', 'isIP'],
            ['regex/isIpMask', 'isIpMask'],
            ['regex/isMobile', 'isMobile'],
            ['regex/isPlateNum', 'isPlateNum'],
            ['regex/isPostcode', 'isPostcode'],
            ['regex/isTelephone', 'isTelephone'],
          ],
        },
      ],
    },
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
  },
};
