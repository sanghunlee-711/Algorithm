//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210425
//프로그래머스-js-lv.1-평균 구하기
{
  function solution(arr: number[]) {
    let answer = 0;
    let len = arr.length;
    arr.forEach((el) => {
      answer += el;
    });
    return answer / len;
  }

  console.log(solution([1, 2, 3, 4]));
  console.log(solution([5]));
}

export default {};
