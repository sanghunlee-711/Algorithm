//프로그래머스-js-lv.1-콜라츠추측
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210426
{
  function solution(num: number) {
    let count = 0;
    let newNum = num;

    while (newNum !== 1) {
      if (count >= 500) return (count = -1);

      if (newNum % 2 === 0) {
        newNum = newNum / 2;
      } else if (newNum % 2 === 1) {
        newNum = newNum * 3 + 1;
      }
      count += 1;
    }

    return count;
  }
}
export default {};
