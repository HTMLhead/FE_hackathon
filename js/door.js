let count = 0
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
        onComplete: (self) => { vm.closeChat(self) },
      });
    },
    getKey() {
      const ClickSound = new Audio('./sound/clickSound.mp3');
      ClickSound.play();
      this.activeChat("밤코카드를 획득했다.");
      setTimeout(() => {
        this.hasKey = true;
      }, 1000)
    },
    openDoor() {
      if (this.hasKey) {
        const Beep = new Audio('./sound/beepOpen.mp3');
        Beep.play();
        this.activeChat("삑. 문이 열렸다.");
        setTimeout(() => {
          window.location.href = "./front.html";
        }, 3000)
      } else {
        this.activeChat("경비를 해제해야 할 것 같다.");
      }
    },
    catcha() {
      count++;
      if(count !== 2) {
        this.activeChat("열어. 라고 슬랙에 입력했지만 아무런 반응이 없다.");
      } else {
        this.activeChat('열어. 라고 슬랙에 입력하자 사이렌이 울렸다.')
        setTimeout(() => {
          window.location.href = "./catcha.html";
        }, 3000)
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