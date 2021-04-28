//프로그래머스-js-lv.1-하샤드 수
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210428
{
  function solution(x: number) {
    let sum = 0;
    let splitNum: string[] = String(x).split("");

    splitNum.forEach((el: string) => (sum += Number(el)));

    return x % sum === 0;
  }
}
export default {};
