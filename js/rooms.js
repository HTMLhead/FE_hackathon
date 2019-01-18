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
    wrongAnswer: false,
    lockOpen: new Audio("./sound/lockOpen.mp3"),
    lock: new Audio("./sound/lock.mp3")
  },
  methods: {
    activeChat(text) {
      const vm = this;
      vm.showChat = true;
      const typed = new Typed(".chat-text", {
        strings: [text],
        typeSpeed: 40,
        startDelay: 200,
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
        this.lockOpen.play();
        setTimeout(() => {
          this.closeModal();
          this.successChat('자물쇠가 열렸다. 안에는 시험지가 놓여있었다.')
        }, 500);
      } else {
        this.wrongAnswer = true;
        this.lock.play();
        this.resetAnswer();
        setTimeout(() => {
          this.wrongAnswer = false;
        }, 500);
      }
    },
    successChat(text) {
      const vm = this;
      vm.showChat = true;
      const typed = new Typed(".chat-text", {
        strings: [text],
        typeSpeed: 40,
        startDelay: 200,
        backDelay: 500,
        fadeOut: true,
        onComplete: self => {
          setTimeout(() => {
            window.location.href = "./ending.html";
          }, 1000);
        }
      });
    },
  },
  mounted() { }
});
