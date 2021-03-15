const fibo = (x: number) => {
  if (x == 1 || x == 2) {
    return 1;
  }
  return fibo(x - 1) + fibo(x - 2);
};

const makeSampleArr = (n: number) => {
  let sampleArr = [];
  for (let i = 0; i <= n; i++) {
    sampleArr.push(0);
  }
  return sampleArr;
};

const fiboRepeat = (x: number): number => {
  let n = 100;
  let sampleArr = makeSampleArr(n);
  sampleArr[1] = 1;
  sampleArr[2] = 1;
  let num = n - 1; //99
  let result = 0;
  for (let i = 3; i < num + 1; i++) {
    result = sampleArr[i] = sampleArr[i - 1] + sampleArr[i - 2];
  }

  return result;
};
// ----------- Under is recursive way
let n = 100;
let sampleArr2 = makeSampleArr(n);

const fiboRecur = (x: number): number => {
  if (x == 1 || x == 2) {
    return 1;
  }
  if (sampleArr2[x] != 0) {
    return sampleArr2[x];
  }

  sampleArr2[x] = fiboRecur(x - 1) + fiboRecur(x - 2);
  return sampleArr2[x];
};

let theResult: number = fibo(4);
//이렇게 작성하면 x의 값이 커지면 커질 수록 수행시간이 기하급수적으로 늘어난다.
console.log(theResult);

let theResult2: number = fiboRepeat(4);
console.log(theResult2);

let theResult3: number = fiboRecur(4);
console.log(theResult3);
