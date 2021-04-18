//프로그래머스-js-lv.1-이상한 문자 만들기
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210417-h1a5ks0h
{
  function solution(s: string): string {
    //각 단어의 짝 홀을 나누는거네 .. ㅂㄷㅂㄷ
    //각 단어 별로 짝홀 나뉘어서 돌리고
    //쟤네를 다시 붙여넣는 작업을 해야함
    let stringArr = s.split(" ");

    let newArr: string[][] = stringArr.map(function (element) {
      return element.split("").map(function (el, idx) {
        return idx % 2 !== 0 ? el.toLowerCase() : el.toUpperCase();
      });
    });
    let newFormArr: string[] = [];
    newFormArr = newArr.map((el) => el.join(""));

    return newFormArr.join(" ");
  }
}
export default {};
