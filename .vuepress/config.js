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
      { text: "指南", link: "/guides/" },
      {
        text: '查看更多',
        ariaLabel: 'see more',
        items: [
          { text: '在线课程表', link: 'http://xxle.lcs.show/', target:'_blank' },
          { text: '开心消消乐', link: 'http://schedule.lcs.show/', target:'_blank' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/jacob-lcs/lodash-source-code-analysis', target:'_blank' },
    ],
    repo: 'https://github.com/jacob-lcs/lodash-source-code-analysis',
    repoLabel: '查看源码',
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    editLinkText: '帮助我们改善此页面！'
  },
  evergreen: true,
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress']
};
