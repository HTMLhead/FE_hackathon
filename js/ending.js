var app = new Vue({
  el: '#app',
  data: {
    stories: [
      {
        imageUrl: 'ending',
        text: ["", "급하게 종이를 챙겨들고 학원을 빠져나왔다."]
      },
      {
        imageUrl: 'ending',
        text: ["","…"]
      },
      {
        imageUrl: 'ending',
        text: ["","…"]
      },
      {
        imageUrl: 'ending',
        text: ["","이불 안에서 눈을 떴다. 깜빡 잠들었나보다."]
      },
      {
        imageUrl: 'ending',
        text: ["","매달 마지막 주 목요일에 프론트엔드 클래스는 쪽지시험을 본다."]
      },
      {
        imageUrl: 'ending',
        text: ["","지난 시험에 10점을 맞은 H군은 이번 시험은 잘 보기 위해 시험지를 훔치러 늦은 밤 코드스쿼드에 잠입하기로 결심했다"]
      },
    ],
    activeIndex: 0,
    isLoaded: false,
  },
  methods: {
    addIndex() {
      if(this.isLoaded && this.activeIndex < 5) {
        this.activeIndex++
        this.activeChat();
      } else if (this.activeIndex === 5) {
        window.location.href = "./end.html";
      }
      if (this.activeIndex === 3) {
        var Alarm = new Audio('./sound/alarm.mp3')
        Alarm.play();
      }
    },
    activeChat() {
      const vm = this;
      vm.isLoaded = false;
      const typed = new Typed('.chat-text', {
        strings: this.stories[this.activeIndex].text,
        typeSpeed: 40,
        backDelay: 500,
        fadeOut: true,
        onComplete: () => {vm.doneLoading()},
      });
    },
    doneLoading() {
      this.isLoaded = true;
    }
  },
  mounted() {
    this.activeChat();
  }
})

// import chatComponent from './chatComponent.js';
//
// document.addEventListener("DOMContentLoaded", () => {
//   const data = {
//     stories: [
//       {
//         imageUrl: 'intro1',
//         text: ["매달 마지막 주 목요일에 프론트엔드 반은 쪽지시험을 본다.", "지난 시험에 10점을 맞은 H군은 이번 시험은 잘 보기 위해 시험지를 훔치러 늦은 밤 코드스쿼드에 잠입하기로 결심했다."],
//       },
//       {
//         imageUrl: 'intro2',
//         text: ["문은 잠겨있다.", "옆 24시 감자탕 집을 통해 들어간다."],
//       },
//       {
//         imageUrl: 'intro3',
//         text: ["엘리베이터를 타고 올라간다."],
//       },
//       {
//         imageUrl: 'intro5',
//         text: ["4층을 누른다."],
//       },
//       {
//         imageUrl: 'intro6',
//         text: ["게임설명"],
//       },
//       {
//         imageUrl: 'intro7',
//         text: ["게임설명2"],
//       },
//     ],
//     axtiveIndex: 0
//   }
//   const chat = new chatComponent();
//   chat.init();
// });
