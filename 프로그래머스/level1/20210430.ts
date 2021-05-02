//프로그래머스-js-lv.1-핸드폰 번호 가리기
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210430
{
  function solution(phone_number: string): string {
    let answer = [];
    let numArr: string[] = phone_number.split("");
    let len: number = numArr.length;
    //loop do count index

    answer = numArr.map((el, index) => {
      if (index >= len - 4) {
        return el;
      } else {
        return "*";
      }
    });

    return answer.join("");
  }
}

export default {};
