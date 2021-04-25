//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210423
//프로그래머스-js-lv.1-제일 작은 수 제거하기
{
  function solution(arr) {
    if (arr.length <= 1) return [-1];
    //1. find min index with sortedArr
    const min = [...arr].sort((a, b) => a - b)[0];
    let minIdx = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === min) {
        minIdx = i;
      }
    }
    //2. do slice with index
    let newArr = [];
    if (minIdx === 0) {
      newArr = arr.slice(1, arr.length);
    } else {
      const front = arr.slice(0, minIdx);
      const back = arr.slice(minIdx + 1, arr.length);
      newArr = [...front, ...back];
    }
    return newArr;
  }
}
export default {};
