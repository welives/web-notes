module.exports = {
  title: '煎蛋', // 设置网站标题
  description: '兴趣使然的记录前端开发中的点点滴滴', // 设置网站的描述
  head: [
    ['link', { ref: 'icon', href: '/img/favicon.ico' }], //自定义的 favicon
    ['script', { src: 'https://cdn.bootcdn.net/ajax/libs/jquery/1.10.0/jquery.min.js' }], // 引入jQuery，写demo的时候需要用到
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }], //移动端优化
  ],
  // 主题
  themeConfig: {
    nav: require('./navConfig'), // 导航栏配置
    sidebar: require('./sidebarConfig'), // 侧边栏配置
    sidebarDepth: 2,
  },
  plugins: [['@vuepress/back-to-top'], ['@vuepress/last-updated']],
}
