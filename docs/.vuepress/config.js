module.exports  =  {
  title: 'A Notebook',
  description: 'thử dùng VuePress',
  theme: 'vdoing',
//  extend: 'vuepress-theme-vdoing',
  //theme: require.resolve('/vuepress-theme-vdoing'),
  // theme: require.resolve('../../theme-vdoing'), // Use local theme package
  themeConfig: {
     sidebar: 'structuring' //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
  },
  plugins: [
    ['vuepress-plugin-mathjax',
  {
    target: 'svg',
    macros: {
      '*': '\\times',
    },
  },
]]
}
