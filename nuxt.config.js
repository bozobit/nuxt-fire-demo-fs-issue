const pkg = require('./package')

export default () => {
  return {
    /*
     ** Headers of the page
     */
    head: {
      title: 'nuxt-community/firebase | Demo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: pkg.description }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: [],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/github-buttons.js'],

    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/pwa','@nuxtjs/firebase'],

    buildModules: ['@nuxtjs/vuetify', '@nuxt/typescript-build'],

    vuetify: {
      // treeShake: false,
      // customVariables: ['~/assets/style/variables.scss'],
      defaultAssets: {
        icons: false
      },
      theme: {
        dark: false,
        themes: {
          light: {
            primary: '#3b8070',
            secondary: '#35495e'
          }
        }
      }
    },

    /*
     ** Nuxt.js Middleware
     */
    router: {
      middleware: ['testMiddleware']
    },

    //Nuxt-Fire Module Options
    firebase: {
      config: {
        apiKey: "AIzaSyDc1ee_Q3qk0iI0TY_ekVYkVvnNi13uPMQ",
        authDomain: "nuxt-fire-demo-44331.firebaseapp.com",
        databaseURL: "https://nuxt-fire-demo-44331.firebaseio.com",
        projectId: "nuxt-fire-demo-44331",
        storageBucket: "nuxt-fire-demo-44331.appspot.com",
        messagingSenderId: "386042527414",
        appId: "1:386042527414:web:8eb04f96a1f6d992407017"
      },
      onFirebaseHosting: false,
      services: {
        auth: {
          initialize: {
            onAuthStateChangedAction: 'onAuthStateChanged'
          },
          ssr: true
        },
        firestore: {
          memoryOnly: false,
          static: false,
        },
        functions: true,
        storage: true,
        realtimeDb: true,
        performance: true,
        analytics: true,
        remoteConfig: {
          settings: {
            fetchTimeoutMillis: 60000,
            minimumFetchIntervalMillis: 43200000
          },
          defaultConfig: {
            welcome_message: 'Welcome'
          }
        },
        messaging: {
          createServiceWorker: true,
          actions: [
            {
              action: 'goToUrl',
              url: "https://github.com/lupas"
            }
          ]
        },
      }
    },

    pwa: {
      workbox: {
        importScripts: [
          '/firebase-auth-sw.js'
        ],
        // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
        // only set this true for testing and remember to always clear your browser cache in development
        dev: process.env.NODE_ENV === 'development'
      }
    },

    // Fixes issues with settinmg firestore.settings()
    // render: {
    //   bundleRenderer: {
    //     runInNewContext: false
    //   }
    // },

    /*
     ** Build configuration
     */
    build: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {}
    }
  }
}
