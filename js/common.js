//querySelector너무 길어요
function qs(value) {
  return document.querySelector(value)
}
const spinner = qs('.spinner')
const conatiner = qs('.container')
let fontLoadChecker = setInterval(() => {
  if(document.fonts.status === 'loaded') {
    clearInterval(fontLoadChecker);
    spinner.classList.add('display')
    conatiner.classList.remove('display')
  }
},100)
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