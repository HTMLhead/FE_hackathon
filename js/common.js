let fontLoadChecker = setInterval(() => {
  console.log('nope')
  if(document.fonts.status === 'loaded') {
    clearInterval(fontLoadChecker);
    console.log('hihihihi')
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