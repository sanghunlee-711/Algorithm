//프로그래머스-js-lv.1-소수찾기
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210414

function solution(n: number): number {
  //true = 소수
  //각 인덱스가 해당 숫자의 소수여부를 나타냄
  //ex) newArr[7] = true 는 숫자 7이 소수임을 나타낸다
  let answer = 0;
  let newArr: (boolean | number)[] = [];

  //0부터 해당숫자까지 배열에 true로 주입하여 배열생성
  for (let i = 0; i < n + 1; i += 1) {
    newArr.push(true);
  }

  //에라토스테네스의 체 이론
  for (let i = 2; i * i <= n; i += 1) {
    if (newArr[i]) {
      for (let j = i * i; j <= n; j += i) {
        newArr[j] = false;
      }
    }
  }

  //숫자 0 은 아무값도 아니므로 0으로 지정
  newArr[0] = 0;
  //숫자 1은 소수가 아니므로 false로 지정
  newArr[1] = false;

  answer = newArr.filter((el) => {
    return el === true;
  }).length;

  return answer;
}
