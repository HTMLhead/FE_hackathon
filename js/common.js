const app = new Vue({
  el: '#app',
  data: {
    show: ''
  },
  methods: {
    restart() {
      window.location.href = "./index.html";
    },
    showGameRule() {
      this.show = this.show ? '' : ' show';
    }
  }
})