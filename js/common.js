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
const spinner = document.querySelector('.spinner')
const container = document.querySelector('.container')
container.classList.add('display');

document.fonts.ready.then(() => {
  spinner.classList.add('display');
  container.classList.remove('display');
})
