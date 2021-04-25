//프로그래머스-js-lv.1-음양 더하기
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210419
{
  function solution(absolutes: number[], signs: boolean[]): number {
    var answer = 0;
    absolutes.forEach((el, index) => {
      if (!signs[index]) {
        answer -= el;
      } else {
        answer += el;
      }
    });
    return answer;
  }
}
export default {};
