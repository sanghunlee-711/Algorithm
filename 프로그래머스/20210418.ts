//프로그래머스-js-lv.1-약수의 합
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210418

{
  function solution(n: number): number {
    var answer = 0;
    let newArr: number[] = [];
    for (let i = 1; i < n + 1; i++) {
      if (n % i === 0) {
        newArr.push(i);
      }
    }
    console.log(newArr);
    newArr.forEach((el) => {
      answer += el;
    });
    return answer;
  }
}

export default {};
