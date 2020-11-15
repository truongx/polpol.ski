// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import VueDisqus from 'vue-disqus'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(VueDisqus)
  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      darkTheme: false
    },
    mutations: {
      setDarkTheme (state, val) {
        state.darkTheme = val
      },
      toggleTheme (state) {
        state.darkTheme = !state.darkTheme

        // This is using a script that is added in index.html
        window.__setPreferredTheme(
          state.darkTheme ? 'dark' : 'light'
        )
      },
      initTheme (state) {
        if (window.__theme == 'dark'){
          state.darkTheme = true
        }
      }
    }
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.script.push({
    src: 'https://platform.twitter.com/widgets.js'
  })
}