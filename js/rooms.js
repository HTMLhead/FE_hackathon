const app = new Vue({
  el: '#app',
  data: {
    showChat: false,
  },
  methods: {
    activeChat(text) {
      const vm = this;
      vm.showChat = true;
      const typed = new Typed('.chat-text', {
        strings: ["", text],
        typeSpeed: 40,
        backDelay: 500,
        fadeOut: true,
        onComplete: (self) => {vm.closeChat(self)},
      });
    },
    closeChat(self) {
      setTimeout(() => {
        this.showChat = false;
        const chatText = document.querySelector('.chat-text');
        chatText.innerText = '';
      }, 1000)
    }
  },
  mounted() {
  }
})
