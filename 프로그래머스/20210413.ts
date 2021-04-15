//프로그래머스-js-lv.1-문자열다루기기본
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210413
{
  function solution(s: string) {
    let answer = true;
    const len = s.length;
    const numMap = "0123456789";

    "46".includes(String(len)) ? (answer = true) : (answer = false);
    s.split("").forEach((el) => {
      if (!numMap.includes(el)) answer = false;
    });
    return answer;
  }
}

export default {};
