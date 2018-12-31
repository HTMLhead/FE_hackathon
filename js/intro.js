const app = new Vue({
  el: '#app',
  data: {
    stories: [
      {
        imageUrl: 'intro1',
        text: ["", "매달 마지막 주 목요일에 프론트엔드 클래스는 쪽지시험을 본다.", "지난 시험에 10점을 맞은 H 군은 이번 시험은 잘 보기 위해 시험지를 훔치러 늦은 밤 코드스쿼드에 잠입하기로 결심했다."],
      },
      {
        imageUrl: 'intro2',
        text: ["", "문은 잠겨있다.", "옆 24시 감자탕집을 통해 들어간다."],
      },
      {
        imageUrl: 'intro3',
        text: ["", "엘리베이터를 타고 올라간다."],
      },
      {
        imageUrl: 'intro5',
        text: ["", "4층을 누른다."],
      },
      {
        imageUrl: 'intro6',
        text: ["", "코드스쿼드에 도착했다.", "시험지를 훔치러 들어가 볼까?"],
      },
    ],
    activeIndex: 0,
    isLoaded: false,
  },
  methods: {
    addIndex() {
      if (this.isLoaded && this.activeIndex < 4) {
        this.activeIndex++;
        this.activeChat();
      } else if (this.isLoaded && this.activeIndex === 4) {
        window.location.href = "./door.html";
      }
    },
    activeChat() {
      const vm = this;
      vm.isLoaded = false;
      const typed = new Typed('.chat-text', {
        strings: vm.stories[vm.activeIndex].text,
        typeSpeed: 40,
        backDelay: 500,
        fadeOut: true,
        onComplete: () => { vm.doneLoading() },
      });
    },
    skipIntro() {
      window.location.href = "./door.html";
    },
    doneLoading() {
      this.isLoaded = true;
    }
  },
  mounted() {
    this.activeChat();
  }
})