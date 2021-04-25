{
  function solution(n: number): number[] {
    let numArr: number[] = [...String(n)].map((el) => Number(el)).reverse();

    return numArr;
  }
}
export default {};
