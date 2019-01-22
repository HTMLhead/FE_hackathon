let catchaCount = 0;
const app = new Vue({
  el: '#app',
  data: {
    showChat: false,
    hasKey: false,
    itemGetSound: new Audio('./sound/clickSound.mp3'),
    doorOpenSound: new Audio('./sound/beepOpen.mp3'),
  },
  methods: {
    activeChat(text) {
      const vm = this;
      vm.showChat = true;
      const typed = new Typed('.chat-text', {
        strings: [text],
        typeSpeed: 40,
        startDelay: 200,
        backDelay: 500,
        fadeOut: true,
        onComplete: (self) => { vm.closeChat(self) },
      });
    },
    lockDoor() {
      this.activeChat("문이 잠겨있다.");
    },
    getKey() {
      this.itemGetSound.play();
      this.activeChat("밤코카드를 획득했다.");
      setTimeout(() => {
        this.hasKey = true;
      }, 1000)
    },
    openDoor() {
      if (this.hasKey) {
        this.doorOpenSound.play();
        this.activeChat("삑. 문이 열렸다.");
        setTimeout(() => {
          window.location.href = "./front.html";
        }, 3000)
      } else {
        this.activeChat("경비를 해제해야 할 것 같다.");
      }
    },
    catcha() {
      catchaCount++;
      if (catchaCount !== 2) {
        this.activeChat("열어. 라고 슬랙에 입력했지만 아무런 반응이 없다.");
      } else {
        this.activeChat('열어. 라고 슬랙에 다시 한번 입력하자 사이렌이 울렸다!')
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