//프로그래머스-js-lv.1-문자열 내림차순으로 배치하기

//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210403

{
  function solution(s: string): string {
    let answer = s.split("").sort().reverse().join("");
    return answer;
  }

  console.log(solution("Zbcdefg")); //"gfedcbZ"
}
