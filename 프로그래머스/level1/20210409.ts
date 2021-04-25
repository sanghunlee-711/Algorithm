//프로그래머스-js-lv.1-가운데 글자 찾기

//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210409

{
  function solution(s: string): string {
    let answer: string = "";
    //짝수 일때 /2의 몫의 인덱스
    // 홀수 일때 Math.floor한 몫 +1?
    //length 1 일때 그냥 반환 ㄱ
    const len: number = s.length;
    let stringIdx: number = 0;

    if (len <= 1) {
      return (answer = s);
    }

    if (len % 2 === 0) {
      stringIdx = len / 2;
      answer = s.substring(stringIdx - 1, stringIdx + 1);
    } else {
      stringIdx = Math.floor(len / 2);
      answer = s[stringIdx];
    }

    return answer;
  }

  //under for test
  console.log(solution("abcde"));
  console.log(solution("qwer"));
}
export default {};
