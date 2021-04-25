//프로그래머스-js-lv.1-시저 암호

//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210417
{
  function solution(s: string, n: number): string {
    let answer = "";

    //들어온 문자열의 길이만큼 반복
    for (let i = 0; i < s.length; i++) {
      //각 문자열의 아스키코드를 담은 변수 charUni 선언
      let charUni: number = s[i].charCodeAt(0);

      //charUni가 소문자알파벳의 아스키코드내에 존재하는 경우
      if (charUni >= "a".charCodeAt(0) && charUni <= "z".charCodeAt(0)) {
        //밀어줘야하는 n 만큼 아스키코드를 더한다.
        charUni = charUni + n;

        //만약 z를 넘어서는 아스키코드값이 생성된다면
        if (charUni > "z".charCodeAt(0)) {
          //알파벳의 개수인 26개 만큼 빼줘서 한바퀴를 돈 것과 같은 인덱스를 만들어준다.
          charUni -= 26;
        }

        //charUni가 대문자알파벳의 아스키코드내에 존재하는 경우
      } else if (charUni >= "A".charCodeAt(0) && charUni <= "Z".charCodeAt(0)) {
        //밀어줘야하는 n 만큼 아스키코드를 더한다.
        charUni = charUni + n;

        //만약 Z를 넘어서는 아스키코드값이 생성된다면
        if (charUni > "Z".charCodeAt(0)) {
          //알파벳의 개수인 26개 만큼 빼줘서 한바퀴를 돈 것과 같은 인덱스를 만들어준다.
          charUni -= 26;
        }
      }

      //fromCharCode메서드를 통해 다시 문자로 변환해주고 answer문자열에 붙여준다.
      answer += String.fromCharCode(charUni);
    }
    return answer;
  }
}

export default {};
