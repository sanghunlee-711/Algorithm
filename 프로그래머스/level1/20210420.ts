//프로그래머스-js-lv.1-예산
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210420
{
  function solution(d: number[], budget: number): number {
    let answer = 0;
    let budgetCount = budget;
    // sort and find num
    let sortedArr = d.sort((a, b) => a - b);

    sortedArr.forEach((el, index) => {
      if (el <= budgetCount) {
        budgetCount -= el;
        answer += 1;
      } else {
        return;
      }
    });
    return answer;
  }
}
export default {};
