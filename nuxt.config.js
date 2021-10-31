import * as webpack from "webpack";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'universal',
  head: {
    title: '不见星空',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet' ,href: '/css/normailze.css'},

    ],
    script:[

    ]
  },
  // loading: '@/components/loading/Loading.vue',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'video.js/dist/video-js.css',

  ],
  loading: {
    color: '#0cf',
    height: '5px'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/element-ui', ssr: true},
    { src: '~/plugins/vue-video.js', ssr: false },
    { src: '~/plugins/Nav.js', ssr: false },
  ],
  axios:{
    proxy:true
  },
  proxy:{
    '/api/':{
      target:'http://localhost:9090',
      changeOrigin:true
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
     /*'@nuxtjs/axios',*/
     'cookie-universal-nuxt'
   ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.jQuery': 'jquery'
      }),

    ],

    vendor: ['axios','element-ui'],
  },
}
