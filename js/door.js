const app = new Vue({
  el: '#app',
  data: {
    showChat: false,
    hasKey: false,
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
    getKey() {
      this.activeChat("밤코카드를 획득했다.");
      setTimeout(() => {
        this.hasKey = true;
      }, 1000)
    },
    openDoor() {
      if (this.hasKey) {
        this.activeChat("삑. 문이 열렸다.");
        setTimeout(() => {
          window.location.href = "/crong.html";
        }, 3000)
      } else {
        this.activeChat("경비를 해제해야할 것 같다.");
      }
    },
    closeChat(self) {
      setTimeout(() => {
        this.showChat = false;
        const chatText = document.querySelector('.chat-text');
        chatText.innerText = '';
      }, 700)
    }
  },
  mounted() {
  }
})
