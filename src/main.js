import Vue from 'vue'
import navbar from './components/navbar'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
  <div>
    <navbar />
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
  `,
  router,
  components: {
    navbar
  }
})
