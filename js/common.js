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

let fontLoadChecker = setInterval(() => {
  if(document.fonts.status === 'loaded') {
    clearInterval(fontLoadChecker);
    spinner.classList.add('display');
    container.classList.remove('display');
  }
},100)