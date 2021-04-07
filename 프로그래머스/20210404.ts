//프로그래머스-js-lv.1-서울에서 김서방 찾기
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210404

{
  function solution(seoul: string[]): string {
    let answer = "";
    seoul.forEach((el, index) => {
      if (el === "Kim") {
        return (answer = `김서방은 ${index}에 있다`);
      }
    });
    return answer;
  }
  function solution2(seoul: string[]): string {
    let answer = "";
    let index = seoul.indexOf("Kim");
    answer = `김서방은 ${index}에 있다`;
    return answer;
  }
}

export default {};
