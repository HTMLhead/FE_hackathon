const app = new Vue({
  el: "#app",
  data: {
    showChat: false,
    showModal: false,
    questions: [
      {
        question: "1. 세상에서 가장 지루한 중학교는?",
        input: "",
        answer: "로딩중"
      },
      {
        question: "2. 창문을 깼는데 피가 안 나오면?",
        input: "",
        answer: "윈도우xp"
      },
      {
        question: "3. 세상에서 가장 가난한 임금은?",
        input: "",
        answer: "최저임금"
      }
    ],
    wrongAnswer: false
  },
  methods: {
    activeChat(text) {
      const vm = this;
      vm.showChat = true;
      const typed = new Typed(".chat-text", {
        strings: ["", text],
        typeSpeed: 40,
        backDelay: 500,
        fadeOut: true,
        onComplete: self => {
          vm.closeChat(self);
        }
      });
    },
    closeChat(self) {
      setTimeout(() => {
        this.showChat = false;
        const chatText = document.querySelector(".chat-text");
        chatText.innerText = "";
      }, 1000);
    },
    resetAnswer() {
      this.questions.forEach(item => {
        item.input = "";
      });
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.resetAnswer();
    },
    submitAnswer() {
      const correctAnswers = this.questions.filter(item => {
        return item.input === item.answer;
      });
      if (correctAnswers.length === this.questions.length) {
        const LockOpen = new Audio("./sound/lockOpen.mp3");
        LockOpen.play();
        setTimeout(() => {
          window.location.href = "./ending.html";
        }, 500);
      } else {
        this.wrongAnswer = true;
        const Lock = new Audio("./sound/lock.mp3");
        Lock.play();
        this.resetAnswer();
        setTimeout(() => {
          this.wrongAnswer = false;
        }, 500);
      }
    }
  },
  mounted() { }
});