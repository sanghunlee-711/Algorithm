//2021/04/02-프로그래머스-js-lv.1-폰켓몬

//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210402

{
  function solution(nums: number[]): number {
    let answer = 0;
    const len = nums.length;
    const pickNum = len / 2;
    const sortingArr = nums.sort();
    let newArr = [];
    //분류된 Arr를 돌면서 pickNum만큼만 넣을 수 있게 배열에 넣는데 다르다는 조건을 넣으면 될 듯.

    for (let i = 0; i < len; i++) {
      if (sortingArr[i] !== sortingArr[i + 1] && newArr.length < pickNum) {
        newArr.push(sortingArr[i]);
      }
    }
    answer = newArr.length;

    return answer;
  }

  //Set자료형 활용 케이스
  function solution2(nums: number[]): number {
    let answer = 0;
    let sortingArr = [...new Set(nums)];
    let len = sortingArr.length;
    const pickNum = nums.length / 2;
    let newArr = [];
    //분류된 Arr를 돌면서 pickNum만큼만 넣을 수 있게 배열에 넣는데 다르다는 조건을 넣으면 될 듯.

    for (let i = 0; i < len; i++) {
      if (sortingArr[i] !== sortingArr[i + 1] && newArr.length < pickNum) {
        newArr.push(sortingArr[i]);
      }
    }
    answer = newArr.length;

    return answer;
  }
}

export default {};
