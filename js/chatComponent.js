export default class chatComponent {
  constructor() {

  }
  init() {
    const typed = new Typed('.element', {
      strings: ["", "매달 마지막 주 목요일에 프론트엔드 반은 쪽지시험을 본다.", "지난 시험에 10점을 맞은 H군은 이번 시험은 잘 보기 위해 시험지를 훔치러 늦은 밤 코드스쿼드에 잠입하기로 결심했다."],
      typeSpeed: 40,
      backDelay: 500,
      fadeOut: true,
      startDelay: 1000,
    });
  }
}
