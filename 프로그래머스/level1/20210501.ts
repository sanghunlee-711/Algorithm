//프로그래머스-js-lv.1-행렬의 덧셈
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210501
{
  function solution(arr1: number[][], arr2: number[][]) {
    return arr1.map((a, i) => {
      return a.map((b, j) => {
        return b + arr2[i][j];
      });
    });
  }
}

export default {};
