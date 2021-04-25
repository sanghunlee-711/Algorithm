//알고리즘-2021/03/31-프로그래머스-js-lv1-3진법 뒤집기

//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210331

{
  function solution(n: number): number {
    let answer = 0;
    //10진법 숫자 -> 3진법 문자
    const tenToThree = n.toString(3);
    //3진법 반대로 뒤집기
    let reverseString = "";
    for (let i = tenToThree.length - 1; i >= 0; i--) {
      reverseString += tenToThree[i];
    }
    //뒤집은 3진법 문자 10진법으로 변경
    answer = Number.parseInt(reverseString, 3);
    return answer;
  }
}

export default {};
