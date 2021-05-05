//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210504
//프로그래머스-js-lv.1-다트게임
//첫번째 시도 : 테스트케이스 실패
{
  function solution(dartResult: string): number {
    let answer = 0;
    let splitArr = dartResult.split("");
    let doSDTArr = [];
    let doStarArr = [];
    if (dartResult.includes("10")) {
      let tenIdx = dartResult.indexOf("10");
      splitArr = [
        ...splitArr.slice(0, tenIdx),
        "10",
        ...splitArr.slice(tenIdx + 2, splitArr.length + 1),
      ];
    }

    //1. SDT처리
    // console.log(splitArr);
    splitArr.forEach((el: string, index) => {
      if (el === "S") {
        return (doSDTArr[index - 1] = Number(splitArr[index - 1]) ** 1);
      } else if (el === "D") {
        return (doSDTArr[index - 1] = Number(splitArr[index - 1]) ** 2);
      } else if (el === "T") {
        return (doSDTArr[index - 1] = Number(splitArr[index - 1]) ** 3);
      } else {
        return (doSDTArr[index] = el);
      }
    });

    doSDTArr = doSDTArr.filter((el) => el);
    // console.log(doSDTArr);
    //2. # 처리
    let starArr = [];
    let NotStarIdxArr = [];
    doSDTArr.forEach((el, index) => {
      if (el === "#") {
        doStarArr[index] = 0;
        return (doStarArr[index - 1] = Number(doSDTArr[index - 1]) * -1);
      } else if (el !== "*") {
        return (doStarArr[index] = Number(el));
      } else {
        return (doStarArr[index] = el);
      }
    });

    //3. * 인덱스를 활용하여 앞으로 숫자 두개만 2곱하기 진행
    console.log(doStarArr);
    for (let i = 0; i < doStarArr.length; i++) {
      let count = 0;
      for (let j = i; j >= 0; j--) {
        if (doStarArr[i] === "*") {
          if (doStarArr[j] !== "*" && doStarArr[j] !== 0) {
            doStarArr[j] *= 2;
            count += 1;
          }
        }
        if (count >= 2) break;
      }
    }

    //총합
    let filterStarArr = doStarArr.filter((el) => el !== "*");
    console.log(filterStarArr);
    answer = doStarArr.filter((el) => el !== "*").reduce((a, b) => a + b);

    return answer;
  }
  console.log(solution("1S*2T*3S")); //23
  // console.log(solution('1S2D*3T')); //37
  console.log(solution("1D#2S*3S")); //5
  console.log(solution("1D2S3T*")); //59
  // console.log(solution("1T2D3D#"));
  console.log(solution("1D2S#10S")); //9
}

//두번째 시도 : 성공
{
  function solution(dartResult: string): number {
    let answer = 0;
    let splitArr = [];
    let stack = [];
    //스택은 위에서쌓고 빼면 제일위에것임
    //따라서 concat(push는 배열순서바뀌니께)과 pop으로 조절할 수 가 있게된다.
    dartResult.split("").forEach((el: string, index: number) => {
      if (
        !isNaN(Number(dartResult[index - 1])) &&
        !isNaN(Number(dartResult[index]))
      ) {
        console.log("find 10!");
        splitArr.pop();
        splitArr = splitArr.concat("10");
      } else {
        splitArr = splitArr.concat(el);
      }
    });

    splitArr.forEach((el: string) => {
      if (!isNaN(Number(el))) {
        stack = stack.concat(el);
      } else if (["S", "D", "T"].includes(el)) {
        if (el === "S") {
          let newEl = Number(stack.pop() ** 1);
          stack = stack.concat(newEl);
        } else if (el === "D") {
          let newEl = Number(stack.pop() ** 2);
          stack = stack.concat(newEl);
        } else if (el === "T") {
          let newEl = Number(stack.pop() ** 3);
          stack = stack.concat(newEl);
        }
      } else if (["*"].includes(el)) {
        //앞의 숫자 2개까지 곱하기 2 한다고 하였으니!
        // let newEl =  Number(stack.pop()*2)

        let newEl = stack.pop() * 2;
        let secondEl = stack.pop() * 2;
        if (secondEl) {
          stack = stack.concat(secondEl, newEl);
        } else {
          stack = stack.concat(newEl);
        }
      } else if (["#"].includes(el)) {
        let newEl = Number(stack.pop() * -1);
        stack = stack.concat(newEl);
      }
    });
    console.log(stack);

    return stack.reduce((a, b) => a + b);
  }
  console.log(solution("1S*2T*3S")); //23
  console.log(solution("1D#2S*3S")); //5
  console.log(solution("1D2S3T*")); //59
  console.log(solution("1D2S#10S")); //9
}
export default {};
