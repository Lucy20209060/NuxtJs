module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '安厨',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '安厨,供应链,微店,县域特色,农产品,价格公道,品质优选,生鲜,粮油,蔬果,批发,采购,一件代发' },
      { hid: 'description', name: 'description', content: '安厨是一家专注于农业电商领域的互联网科技公司，潜心致力于解决县域农产品上行难题，不遗余力推进现代农业发展；提供优质农产品，倡导优质生活；上安厨，吃点好的'}
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
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
