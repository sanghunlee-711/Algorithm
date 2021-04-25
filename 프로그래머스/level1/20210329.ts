//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210329
//알고리즘-2021/03/29-lv1-모의고사

//패턴
//1번 수포자: 12345...
//2번 수포자: 21232425...
//3번 수포자: 3311224455...

{
  function solution(answers: number[]) {
    //수포자학생 별로 패턴이 반복되는 횟수 만큼 회문을 돌려주며 해결
    // indexing은 %를 이용해서 반복되게 할 것.
    //모든 패턴을 넣은 하나의 배열로 해도 되나 가독성 측면에서 이게 나을 것 같다는 생각이 들어 아래와 같이 진행

    //답으로 반환할 배열
    let answer: number[] = [];

    //첫번째 수포자 학생의 패턴
    const first = [1, 2, 3, 4, 5];
    //두번째 수포자 학생의 패턴
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    //세번째 수포자 학생의 패턴
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    //각 수포자 학생의 맞은갯수를 카운트 하기 위한 변수들
    let firstCount = 0;
    let secondCount = 0;
    let ThirdCount = 0;

    // 각 수포자 학생의 패턴에 대한 길이
    const firstLen = first.length;
    const secondLen = second.length;
    const thirdLen = third.length;

    //들어온 답변에 대한 배열을 회문하며 답변유무 체크
    answers.forEach((el, index) => {
      //각 수포자 학생의 패턴을 계속 돌 수 있게 나머지(%)연산자를 사용해서 진행
      if (el === first[index % firstLen]) {
        //답변과 수포자학생의 패턴이 동일한 경우 각 각 카운트 증가
        firstCount += 1;
      }
      if (el === second[index % secondLen]) {
        secondCount += 1;
      }
      if (el === third[index % thirdLen]) {
        ThirdCount += 1;
      }
    });

    //각 학생들의 맞은갯수를 저장하는 배열
    let answerMap = [firstCount, secondCount, ThirdCount];
    //학생들 중 맞은갯수의 최대값을 구함
    let max = Math.max(...answerMap);

    //최대값에 해당하는 수포자 학생을 답변배열에 넣어주기 위한 회문
    answerMap.forEach((el, index) => {
      if (el === max) {
        answer.push(index + 1);
      }
    });
    //오름차순 정렬을 위한 sort()메서드
    return answer.sort((a, b) => b - a);
  }

  //체크
  const result = solution([1, 2, 3, 4, 5]);
  console.log(result); // [1]
  const result2 = solution([1, 3, 2, 4, 2]);
  console.log(result2); // [1,2,3]
}

export default {};
