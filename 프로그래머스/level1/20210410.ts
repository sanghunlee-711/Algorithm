//프로그래머스-js-lv.1-나누어 떨어지는 숫자 배열

//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210410

{
  const solution = (arr: number[], divisor: number) => {
    let answer: number[] = [];
    //divisor에 나눠지는 것만 answer배열에 주입
    arr.filter((element) =>
      element % divisor === 0 ? answer.push(element) : element
    );

    //위 조건에 부합하지 않아 answer배열에 아무것도 넣지 못한 경우 -1을 넣고 반환
    answer.length < 1 ? answer.push(-1) : answer;

    //answer배열 오름차순 정렬
    return answer.sort((a, b) => a - b);
  };

  //under for test
  console.log(solution([5, 9, 7, 10], 5));
  console.log(solution([2, 36, 1, 3], 1));
  console.log(solution([3, 2, 6], 10));
}

export default {};
