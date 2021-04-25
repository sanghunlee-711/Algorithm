//프로그래머스-js-lv.1-k번째 수

//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210407

{
  function solution(array: number[], commands: number[][]): number[] {
    //commands가 이중 배열임
    let answer = [];
    commands.forEach((el) => {
      let start = el[0] - 1;
      let end = el[1] - 1;
      let pick = el[2] - 1;

      let slicedArr = array.slice(start, end + 1).sort((a, b) => a - b);

      answer.push(slicedArr[pick]);
    });
    return answer;
  }
}

export default {};
