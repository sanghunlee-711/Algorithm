//프로그래머스-lv.1-js-같은숫자는싫어

//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210401

//처음에는 중복된 것 제거하면 되는 줄 알고 그냥 Set 자료형을 활용하려함
//그런데 생각해보니 앞뒤 arr의 값을 확인하고 나타내줘야한다.
// 반복문하면서 .. 다음 인덱스와 비교해서 같은거면 넣지않는 그런게 필요할듯

{
  function solution(arr: number[]): number[] {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        answer.push(arr[i]);
      }
    }
    return answer;
  }
}

//알고리즘-2021/04/01-프로그래머스-js-lv.1-두 정수사이의 합

//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210401-2l8ngjdw

{
  function solution(a: number, b: number): number {
    let answer = 0;
    if (a === b) {
      return a;
    }
    let start = a > b ? b : a;
    let end = a > b ? a : b;

    for (let i = start; i <= end; i++) {
      answer += i;
    }

    return answer;
  }

  //근의 공식 케이스
  function solution2(a: number, b: number): number {
    let answer = 0;
    if (a === b) {
      return a;
    }
    answer = ((Math.abs(b - a) + 1) * (b + a)) / 2;

    return answer;
  }
}

export default {};
