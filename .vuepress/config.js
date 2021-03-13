module.exports = {
  title: "lodash 源码解析",
  description: "lodash 源码解析，深入研究源码设计",
  host: "0.0.0.0",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base: "/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "源码解析", link: "/introduce/" },
      {
        text: '查看更多',
        ariaLabel: 'see more',
        items: [
          { text: '在线课程表', link: 'http://xxle.lcs.show/', target:'_blank' },
          { text: '开心消消乐', link: 'http://schedule.lcs.show/', target:'_blank' }
        ]
      },
    ],
    repo: 'https://github.com/jacob-lcs/lodash-source-code-analysis',
    repoLabel: '查看源码',
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    editLinkText: '帮助我们改善此页面！',
    editLinks: true,
    sidebar: [
      ['/introduce/', '简介'],
      {
        title: '数组',   // 必要的
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/array/chunk', '_.chunk'],
          ['/array/slice', '_.slice']
        ]
      },
    ],
    docsBranch: 'main'
  },
  evergreen: true,
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress', '@vuepress/active-header-links']
};
