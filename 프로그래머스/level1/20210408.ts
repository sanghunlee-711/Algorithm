{
  //Date 객체 사용하자
  function solution(a: number, b: number): string {
    let answer = "";
    //요일은 숫자로 나옴
    const day = new Date(`2016-${a}-${b}`).getDay();
    const dayMap = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    answer = dayMap[day];

    return answer;
  }

  function solution2(a: number, b: number): string {
    let answer = "";
    //2016년 월별 날짜 기입한 배열
    const monthMap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //일주일 별 요일 기입
    const dayMap = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

    //기입된 날까지의 총 날짜의 합
    let sum = 0;

    //1월 인 경우
    if (a < 2) {
      //들어온 날 - 1 로 합 설정
      sum = b - 1;
    } else {
      //전달까지 slice메서드를 통해 배열로 잡고 reduce로 날들의 총합 구함
      sum = monthMap.slice(0, a - 1).reduce((a, b) => a + b);
      //추가 해당 달의 날짜 더함
      sum = sum + b - 1;
    }

    //7로 나뉜 나머지로 요일 답으로 만듦
    answer = dayMap[(sum % 7) - 2];
    //2016년 1월 1일은 금요일

    return answer;
  }
}

export default {};
