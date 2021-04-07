//프로그래머스-js-lv1-신규아이디추천

//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210406
{
  function solution(new_id: string): string {
    //이 문제는 아무리봐도 정규표현식을 쓰라는 거다.
    let answer: string = "";

    //1단계 대문자 -> 소문자
    new_id = new_id.toLowerCase();

    //2단계 특수문자 제거
    //알파벳 소문자, 빼기 ,밑줄, 마침표 제외 모두 제거
    const regExp: RegExp = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
    new_id = new_id.replace(regExp, "");

    //3단계 '.'으로 변경
    const dotreg: RegExp = /\.{2,}/gi;
    new_id = new_id.replace(dotreg, ".");

    //4단계 new_id에서 마침표가 처음이나 끝이면 제거
    const startDotReg: RegExp = /^\./gi;
    const endDotReg: RegExp = /\.$/gi;
    new_id = new_id.replace(startDotReg, "").replace(endDotReg, "");

    //5단계 빈문자열인 경우 a를 대입한다.
    new_id.length <= 0 ? (new_id += "a") : new_id;

    //6단계 길이가 16자 이상이면 15개 제외한 나머지 모두 제거
    //제거 후 마침표가 new_id의 끝에서 위치하면 마침표 제거
    new_id.length >= 16
      ? (new_id = new_id.substring(0, 15).replace(endDotReg, ""))
      : new_id;

    //7단계 아이디 길이 2자이하면 마지막문자를 길이가 3 될때까지 이어 붙이기
    if (new_id.length <= 2) {
      for (let i = new_id.length; i < 3; i++) {
        new_id += new_id[new_id.length - 1];
      }
    }

    answer = new_id;

    return answer;
  }
}

export default {};
