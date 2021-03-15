{
  let a = 4;
  let b = 6;
  //b, 자르고 남았을 때 필요한 떡의 길이

  let arr = [19, 15, 10, 17];

  const riceCake = (a: number, b: number, arr: number[]): number => {
    console.log("workd");
    let start = 0;
    let end = Math.max.apply(null, arr); //들어온 떡 길이 중 최대값
    let result = 0;
    //이분탐색 진행
    while (start <= end) {
      let total = 0;
      let mid = Math.round((start + end) / 2); //중간값 지정
      arr.forEach((el) => {
        if (el > mid) {
          total = total + el - mid;
        }
      });

      if (total < b) {
        end = mid - 1;
        console.log(`end${end}`);
      } else {
        //여기가 적어도의 개념이 들어가는 곳
        result = mid;
        start = mid + 1;
        console.log(`start${start}`);
      }
    }

    return result;
  };

  //적어도 b의 값을 반환하는 떡자르는 기기의 길이 = theResult
  let theResult = riceCake(a, b, arr);

  console.log(theResult);
}
