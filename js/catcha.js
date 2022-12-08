var app = new Vue({
  el: "#app",
  data: {
    stories: [
      {
        imageUrl: "intro1",
        text: ["헐레벌떡 학원을 빠져나왔다."],
      },
      {
        imageUrl: "intro1",
        text: ["그래, 지금이라도 집으로 돌아가자."],
      },
      {
        imageUrl: "catcha",
        text: ["'잡았다 요놈!'"],
      },
      {
        imageUrl: "catcha",
        text: ["..."],
      },
      {
        imageUrl: "blank",
        text: ["화들짝 놀라며 H 군은 잠에서 깨어났다."],
      },
      {
        imageUrl: "blank",
        text: ["매달 마지막 주 목요일에 프론트엔드 클래스는 쪽지시험을 본다."],
      },
      {
        imageUrl: "blank",
        text: [
          "지난 시험에 10점을 맞은 H 군은 이번 시험은 잘 보기 위해 시험지를 훔치러 늦은 밤 코드스쿼드에 잠입하기로 결심했다...",
        ],
      },
    ],
    activeIndex: 0,
    isLoaded: false,
    catchedSound: new Audio("./sound/catcha.wav"),
  },
  methods: {
    addIndex() {
      if (this.isLoaded && this.activeIndex === 1) {
        this.catchedSound.play();
      }
      if (this.isLoaded && this.activeIndex < 6) {
        this.activeIndex++;
        this.activeChat();
      } else if (this.isLoaded && this.activeIndex === 6) {
        window.location.href = "./end.html";
      }
    },
    activeChat() {
      const vm = this;
      vm.isLoaded = false;
      const typed = new Typed(".chat-text", {
        strings: this.stories[this.activeIndex].text,
        typeSpeed: 40,
        startDelay: 200,
        backDelay: 500,
        fadeOut: true,
        onComplete: () => {
          vm.doneLoading();
        },
      });
    },
    doneLoading() {
      this.isLoaded = true;
    },
  },
  mounted() {
    this.activeChat();
  },
});
