//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210325
//알고리즘-2021/03/25-lv1-js-두개뽑아서더하기
{
  function solution(numbers: number[]): number[] {
    //이중포문을 해야하나 //for문한번씩 돌면서 시작 index를 올리면
    //어차피 중복되니까 1번째 숫자랑 다 더한거 넣으면 되네
    //sort 오름차순 정렬 ㄱ

    let answer: number[] = [];

    const arrLen: number = numbers.length; //5
    let fix = 0;

    while (fix < arrLen - 1) {
      let firstNum = numbers[fix];
      for (let i = fix + 1; i < arrLen; i++) {
        answer.push(firstNum + numbers[i]);
      }
      fix += 1;
    }

    answer = answer.sort((a, b) => a - b);
    let set = new Set(answer);
    let newArr = [...set];
    answer = newArr;
    return answer;
  }
}

export default {};
