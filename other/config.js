module.exports = {
  title: '@mhfwork/yt-ui组件库文档',
  description: 'VuePress GitHub Actions',
  base: '/ytUi-doc/',
  repo: 'https://programmermao-001.github.io/ytUi-doc/',
  plugins: [
	'vuepress-plugin-mermaidjs'
  ],
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      {
        title: '开始',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/', '介绍'],
          ['/indexPage/quickStart.md', '快速上手'],
        ]
      },
	  {
        title: '组件',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/components/ytRealCanvas/ytRealCanvas.md', 'ytRealCanvas实时canvas组件'],
          ['/components/ytFileUpload/ytFileUpload.md', 'ytFileUpload文件上传组件'],
          ['/components/ytForm/ytForm.md', 'ytForm搜索表单组件'],
          ['/components/ytTableBtn/ytTableBtn.md', 'ytTableBtn自定义文字按钮组件'],
          ['/components/ytIsShowForm/ytIsShowForm.md', 'ytIsShowForm显示隐藏筛选框组件'],
        ]
      },
      {
        title: '公共方法',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/publicFun/isEmptyObject.md', '判断是否是空对象'],
        ]
      },
    ],
    nav: [
      {text: '首页', link: '/' }
    ]
  }
}
