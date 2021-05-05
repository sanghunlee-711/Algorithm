//프로그래머스-js-lv.1-소수만들기
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210505
{
  function solution(nums: number[]): number {
    let sumArr: number[] = [];
    //세가지 수를 더한 모든 경우를 담는 배열
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          sumArr = sumArr.concat(nums[i] + nums[j] + nums[k]);
        }
      }
    }

    //소수가 아닌 것들을 담는 배열
    let noPrime: number[] = [];
    console.log(sumArr);
    sumArr.forEach((el: number) => {
      for (let i = 2; i * i <= el; i++) {
        if (el % i === 0 && el !== i) {
          return noPrime.push(el);
        }
      }
    });

    return sumArr.length - noPrime.length;
  }
}
export default {};
