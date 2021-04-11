//프로그래머스-js-lv.1-문자열 내마음대로 정렬하기
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210411

function solution(strings: string[], n: number) {
  //sort method callback함수로 기준을 두고 비교해주면 될듯
  //문자를 서로 비교해서 boolean(1,0,-1)을 내는게 필요한데 그게 localeCompare임

  let answer: string[] = [];
  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    } else {
      return a[n].localeCompare(b[n]);
    }
  });

  return strings;
}

//underforTest
console.log(solution(["sun", "bed", "car"], 1)); //[ 'car', 'bed', 'sun' ]
console.log(solution(["abce", "abcd", "cdx"], 2)); //[ 'abcd', 'abce', 'cdx' ]
