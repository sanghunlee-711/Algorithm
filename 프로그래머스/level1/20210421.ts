//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210421
//프로그래머스-js-lv.1-내적
{
  function solution(a: number[], b: number[]): number {
    let answer = 0;
    a.forEach((el, index) => {
      answer += el * b[index];
    });
    return answer;
  }
}
export default {};
