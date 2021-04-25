//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98
//알고리즘-2021/03/26-프로그래머스-lv1-js-완주하지 못한 선수
{
  function solution(participant: string[], completion: string[]) {
    //알파벳 순서대로 정렬
    //sort는 uni-code기준으로 정렬 실행
    participant.sort();
    completion.sort();

    //반복문 돌면서 중복되지 않는 것을 return
    for (let i in participant) {
      if (participant[i] !== completion[i]) return participant[i];
    }
  }
}
export default {};
