const app = new Vue({
  el: '#app',
  methods: {
    restart() {
      window.location.href = "./index.html";
    }
  }
})