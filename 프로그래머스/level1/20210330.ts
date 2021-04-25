//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210330
//알고리즘-2021/03/30-프로그래머스-js-lv1-체육복

//n: 전체 학생수, lost: 도난당한 학생들의 배열, reserve:여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
//return:체육수업을 들을 수 있는 학생의 최댓값
//인접한 배열에게만 체육복 빌려주기가능

//n만큼 반복문 돌면 될 것 같고
//n만큼 map을 만들자 -> 기본 1로가고 lost인경우 0
//그리고 reserve를 통해서 +1or -1키에 해당하는 곳이 0이면 +1하자
{
  function solution(n: number, lost: number[], reserve: number[]) {
    var answer = 0;
    let map = {};

    //전체 학생 수 만큼 mapping을 위한 객체 생성
    for (let i = 0; i < n; i++) {
      map[`${i + 1}`] = 1;
    }
    //잃어버림에 해당하는 곳에 -1을 연산
    lost.forEach((el, index) => {
      map[`${el}`] -= 1;
    });
    //reserve에 해당 키 존재시 +1 하고
    reserve.forEach((el) => {
      map[`${el}`] += 1;
    });
    //lost로 회문을 돌려 앞 뒤에 존재하는 키의 값이 1 초과 시 가져오는 방향
    lost.forEach((el, index) => {
      if (map[`${el + 1}`] > 1 && map[`${el}`] < 1) {
        map[`${el + 1}`] -= 1;
        map[`${el}`] += 1;
      }
      if (map[`${el - 1}`] > 1 && map[`${el}`] < 1) {
        map[`${el - 1}`] -= 1;
        map[`${el}`] += 1;
      }
    });
    //값들을 모아 놓은 배열을 만들어 1이상이 된다면 answer카운트 증가
    let mapValue = (<any>Object).values(map);
    mapValue.forEach((el: number) => {
      if (el >= 1) answer += 1;
    });
    return answer;
  }
}

export default {};
