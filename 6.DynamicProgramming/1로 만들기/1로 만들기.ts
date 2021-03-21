//https://gent.tistory.com/296

//Under for making 2D Array
const makeTable2DArray = (rows: number, columns: number): number[][] => {
  let arr = new Array(rows);
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array(columns);
  }
  return arr;
};

//es 6 grammer
// const makeTable2: number[][] = Array.from(Array(30001), () =>
//   new Array(30001).fill(0)
// );

const makeTable1Arr = (rows): number[] => {
  let arr = new Array(rows);
  for (let i = 0; i < rows; i++) {
    arr[i] = 0;
  }
  return arr;
};

//make Table For memoization
let newTable = makeTable1Arr(1000);

// DP Bottom UP way
const makeAnswer = (inputNum: number): number => {
  for (let i = 2; i < inputNum + 1; i++) {
    newTable[i] = newTable[i - 1] + 1;

    if (i % 2 === 0) {
      newTable[i] = Math.min(newTable[i], newTable[i / 2] + 1);
    }
    if (i % 3 === 0) {
      newTable[i] = Math.min(newTable[i], newTable[i / 3] + 1);
    }
    if (i % 5 === 0) {
      newTable[i] = Math.min(newTable[i], newTable[i / 5] + 1);
    }
  }

  return newTable[inputNum];
};

const result: number = makeAnswer(6);

console.log(result);
