module.exports = {
 // Global page headers: https://go.nuxtjs.dev/config-head
 head: {
  title: 'Math',
  meta: [
   { charset: 'utf-8' },
   { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
   { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
   { hid: 'description', name: 'description', content: '' },
   { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [
   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
   { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' },
   //  { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }
   //  { rel: 'stylesheet', href: 'assets/fontawesome/css/all.css' }
  ],
 },

 // Global CSS: https://go.nuxtjs.dev/config-css
 css: [
  '@/assets/scss/app.scss',
  '@/assets/scss/ui.scss',
  '@/assets/scss/animations.scss',
  '@/assets/fontawesome/css/all.css',
  '@/assets/scss/items.scss'
 ],

 // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
 plugins: [
  '~/node_modules/lottie-web-vue',
  '~/plugins/vue-tooltip.js',
  '~/plugins/vue-toast.js',
  '~/plugins/vue-katex.js'
 ],

 // Auto import components: https://go.nuxtjs.dev/config-components
 components: true,

 // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
 buildModules: [],

 // Modules: https://go.nuxtjs.dev/config-modules
 modules: [
  // https://go.nuxtjs.dev/pwa
  '@nuxtjs/pwa',
  '@nuxtjs/axios'
 ],

 loading: { color: '#000', height: '0px' },

 axios: {
  baseURL: 'https://math-actions.herokuapp.com',
 },

 // PWA module configuration: https://go.nuxtjs.dev/pwa
 pwa: {
  manifest: {
   lang: 'en'
  }
 },
 target: 'static',
 router: {
   base: '/math-project/'
 },
 // Build Configuration: https://go.nuxtjs.dev/config-build
 build: {}
}