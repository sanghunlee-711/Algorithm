//프로그래머스-js-lv1.-로또의 최고순위와 최저순위
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-0427

  function solution(lottos: number[], win_nums: number[]):number[] {
    let answer:number[] = [];
    let lottoObj:Record<number, boolean> = {};
    let count = 0;
    let countZero = 0;
    let maxRank = 0;
    let minRank = 0;
    const rankingMap: number[] = [6, 5, 4, 3, 2, 1, 0]; //index + 1 = ranking

    //makeLottoMap
    for (let i = 1; i <= 45; i++) {
      lottoObj[i] = false;
    }
    // minwoo's lotto num check
    lottos.forEach((el:number) => {
      if (el !== 0) {
        lottoObj[el] = true;
      } else {
        //1. count Zero
        countZero += 1;
      }
    });

    // 2. count all correct and match
    win_nums.forEach((el:number) => {
      if (lottoObj[el] === true) {
        count += 1;
      }
    });

    //3. count all 0 are failed and try match
    for (let i = 0; i < 7; i++) {
      if (rankingMap[i] === count + countZero) maxRank = i + 1;
      if (rankingMap[i] === count) minRank = i + 1;
    }

    //4. make condition for treating exception
    answer = [maxRank >= 6 ? 6 : maxRank, minRank >= 6 ? 6 : minRank];
    return answer;
  }
}

export default {};
