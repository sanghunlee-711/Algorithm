//프로그래머스-js-lv.1-문자열 내 p와 y의 개수
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210412
{
  function solution(s: string) {
    let answer = true;
    let count = 0;
    let check: boolean = false;
    s.split("").forEach((el: string) => {
      if (el === "p" || el === "P") {
        count += 1;
        check = true;
      } else if (el === "y" || el === "Y") {
        count -= 1;
        check = true;
      }
    });

    count === 0 && check === (true as boolean)
      ? (answer = true)
      : (answer = false);

    return answer;
  }
}
export default {};
