let r: number = 3;
let c: number = 3;
let data: Array<number[]> = [
  [3, 1, 2],
  [4, 1, 4],
  [2, 2, 2],
];
type TextType = "min" | "max";

const findMinOrMax = (arr: number[], text: TextType): number => {
  //들어오는 texttype(min or max)에 따라 최소 또는 최대값을 반환해주는 함수
  let num: number;

  num = arr.reduce((prev, curr) => {
    if (text === "max") {
      return prev > curr ? prev : curr;
    } else if (text === "min") {
      return prev < curr ? prev : curr;
    }
  });

  return num;
};

const numberCardGame = (data: number[][]): number => {
  let resultArr: number[] = [];
  let result: number;

  data.forEach((el) => {
    //각 행 마다 최소값을 구하여 새로운 배열에 넣는다.
    resultArr.push(findMinOrMax(el, "min"));
  });
  //그 배열에서의 최대값을 반환하여 답을 찾는다.
  result = findMinOrMax(resultArr, "max");
  return result;
};

let answer = numberCardGame(data);

console.log(answer);
