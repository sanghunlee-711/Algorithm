//프로그래머스-js-lv.1-수박수박수박수?
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210415

{
  function solution(n: number) {
    let answer = "";
    //2n이면 짝수
    //2n-1이면 홀 수
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) answer += "수";
      if (i % 2 === 1) answer += "박";
    }
    return answer;
  }
}

export default {};
