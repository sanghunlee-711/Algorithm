//프로그래머스-js-lv.1-크레인 인형뽑기 게임

//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210405
{
  function solution(board: number[][], moves: number[]): number {
    let answer: number = 0;
    let sampleArr: number[] = [];

    for (let i = 0; i < moves.length; i++) {
      //moves만큼 움직이는 방향
      let movesIdx: number = moves[i] - 1;
      //moves가 지정한 위치에서 배열을 순회하는 반복문
      for (let j = 0; j < board.length; j++) {
        //0이 아닌 경우 접근 가능
        if (board[j][movesIdx] !== 0) {
          //전에 이미 들어있던것이랑 넣으려고 하는 것이 같은경우 answer +2 하고 안넣고 pop하면 됨
          if (sampleArr.slice(-1)[0] === board[j][movesIdx]) {
            sampleArr.pop();
            answer += 2;
          }
          //다른 경우나 없는 경우는 걍 넣으면 됨.
          else {
            sampleArr.push(board[j][movesIdx]);
          }
          //지시에 해당하는 값을 sampleArr에 넣고
          //넣은 값을 0 으로 처리
          board[j][movesIdx] = 0;

          //인형 하나 pick할시 해당 moves 종료 다음 movesIdx로 넘어감
          break;
        }
      }
    }

    return answer;
  }
}
export default {};
