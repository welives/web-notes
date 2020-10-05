# 快速搭建

## 安装

[vuepress 官网](https://v1.vuepress.vuejs.org/zh/)

1. 创建并进入一个新目录

```sh
mkdir vuepress-demo && cd vuepress-demo
```

2. 使用你喜欢的包管理器进行初始化

```sh
yarn init -y
或
npm init -y
```

3. 将 VuePress 安装为本地依赖

```sh
yarn add -D vuepress
或
npm install -D vuepress
```

4. 创建你的第一篇文档

```sh
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

5. 配置 package.json 文件

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

6. 在本地启动服务器

```sh
yarn docs:dev
或
npm run docs:dev
```

7. 本地开发模式，编译代码时浏览器自动更新

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs --temp .temp"
  }
}
```

## 目录结构

VuePress 遵循 “约定优于配置” 的原则，推荐的目录结构如下：

```
.
├── docs
│ ├── .vuepress (可选的)
│ │ ├── components (可选的)
│ │ ├── theme (可选的)
│ │ │ └── Layout.vue
│ │ ├── public (可选的)
│ │ ├── styles (可选的)
│ │ │ ├── index.styl
│ │ │ └── palette.styl
│ │ ├── templates (可选的, 谨慎配置)
│ │ │ ├── dev.html
│ │ │ └── ssr.html
│ │ ├── config.js (可选的)
│ │ └── enhanceApp.js (可选的)
│ │
│ ├── README.md
│ ├── guide
│ │ └── README.md
│ └── config.md
│
└── package.json
```

## 基本配置

- `.vuepress/config.js`

```js
module.exports = {
  title: '前端开发笔记', // 设置网站标题
  description: '煎蛋的博客', // 设置网站的描述
  head: [
    ['link', { ref: 'icon', href: '/img/favicon.ico' }], //自定义的 favicon
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }], //移动端优化
  ],
  // 主题
  themeConfig: {
    nav: require('./navConfig'), // 导航栏配置
    sidebar: require('./sidebarConfig'), // 侧边栏配置
  },
  markdown: {
    lineNumbers: true, //显示行号
  },
}
```

- `.vuepress/navConfig.js` 把导航栏单独提出来

```js
module.exports = [
  { text: 'Home', link: '/' },
  { text: '指南', link: '/guide/' },
  {
    text: '前端相关',
    items: [
      { text: '前端学习路线', link: '/guide/前端学习路线' },
      { text: 'CSS学习笔记', link: '/frontend/css-notes/' },
      { text: 'JS学习笔记', link: '/frontend/js-notes/前端开发初识' },
    ],
  },
  { text: '后端相关', link: '/backend/' },
  {
    text: 'Github',
    items: [
      { text: 'Github', link: 'https://github.com/welives' },
      { text: 'Gitee', link: 'https://gitee.com/welives' },
    ],
  },
]
```

- `.vuepress/sidebarConfig.js` 把侧边栏单独提出来

```js
module.exports = {
  '/frontend/vuepress': [
    {
      title: 'vuepress 入门',
      collapsable: false,
      children: [
        ['/frontend/vuepress/', '快速搭建'],
        ['/frontend/vuepress/markdown详解', 'markdown 详解'],
      ],
    },
  ],
}
```
