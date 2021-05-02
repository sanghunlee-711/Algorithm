//프로그래머스-js-lv.1-x만큼 간격이 있는 n개의 숫자
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210429

{
  function solution(x: number, n: number): number[] {
    var answer = [];
    for (let i = 1; i < n + 1; i++) {
      let madeNum = x * i;
      answer.push(madeNum);
    }
    return answer;
  }
}
export default {};
