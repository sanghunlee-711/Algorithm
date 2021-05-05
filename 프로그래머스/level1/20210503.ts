//프로그래머스-js-lv.1-[1차]비밀지도
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210503
{
  function makeNumToN(n: number, str: string): string {
    if (str.length < n) {
      return "0".repeat(n - str.length) + str;
    } else {
      return str;
    }
  }

  function solution(n: number, arr1: number[], arr2: number[]): string[] {
    let sum: string[] = arr1.map((el, index) => {
      return String(Number(el.toString(2)) + Number(arr2[index].toString(2)));
    });

    return sum.map((el) => {
      return makeNumToN(n, el)
        .split("")
        .map((el) => {
          if (Number(el) >= 1) {
            return "#";
          } else {
            return " ";
          }
        })
        .join("");
    });
  }
}

export default {};
