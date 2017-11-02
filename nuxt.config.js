module.exports = {
  cache: true,
  /*
  ** Headers of the page
  */
  head: {
    title: '安厨官网-县域农业电商公共服务专家,农产品上行,优选农产品采购批发',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '农产品上行,农业电商,安厨微店,安厨供应链,农产品配送,县域农业电商公共服务,优选,批发,土特产' },
      { hid: 'description', name: 'description', content: '安厨是一家专注于农业电商领域的互联网科技公司，公司秉承“安全S 优质Q 特色F 生态E”的核心理念，潜心致力于解决县域农产品上行难题，不遗余力推进现代农业发展。'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  css:[
    'assets/main.css',
    'assets/font/iconfont.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color:'#129E83'
  },
  // plugins: ['~plugins/echarts'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  generate: {
    routes: [
      '/anchu/story/storyDetail/1',
      '/anchu/story/storyDetail/2',
      '/anchu/story/storyDetail/3',
      '/anchu/story/storyDetail/4'
    ]
  }
}
