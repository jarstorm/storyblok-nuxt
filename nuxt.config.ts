// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Cardano Vue POC',
      // link: [
      //   {
      //     rel: 'preconnect',
      //     href: 'https://fonts.googleapis.com'
      //   },
      //   {
      //     rel: 'stylesheet',
      //     href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      //     crossorigin: ''
      //   }
      // ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    apiSecret: process.env.INTERNAL_API_OAUTH_TOKEN
  },
  css: [
    '@/assets/css/global.css'
  ],
  components: {
    dirs: [
      '~/components'
    ]
  },
  modules: [
    ["@storyblok/nuxt", {accessToken: process.env.STORYBLOK_TOKEN}],
    '@nuxt/image-edge', '@nuxtjs/tailwindcss'
  ],
  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
})
