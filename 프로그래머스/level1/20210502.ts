//프로그래머스-js-lv.1-실패율
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210502
{
  //1차 풀이
  function solution(N: number, stages: number[]) {
    let answer = [];
    let stagesNumCount = {};

    //stage count;
    for (let i = 1; i < N + 1; i++) {
      stagesNumCount[i] = 0;
    }

    //find possibility per stage
    let sortedStages = stages.sort((a, b) => a - b);

    for (let i = 0; i < sortedStages.length; i++) {
      let stageNum = sortedStages[i];
      stagesNumCount[stageNum] += 1;
    }

    //count person who pass the eachstage
    let stagePerPerson = [];

    for (let i = 0; i < stages.length; i++) {
      if (sortedStages[i] !== sortedStages[i - 1]) {
        let personNum = stages.length - i;
        stagePerPerson.push(personNum);
      }
    }

    //calculate Failuer percentage
    let stagePerValue = Object.values(stagesNumCount);
    let percentageValue = {};

    for (let i = 0; i < N; i++) {
      let perPerson = stagePerPerson[i] ? stagePerPerson[i] : N;
      percentageValue[i + 1] =
        stagePerValue[i] / perPerson ? stagePerValue[i] / perPerson : 0;
    }

    //sorting
    let entries = Object.entries(percentageValue);
    let sorted = entries.sort((a, b) => b[1] - a[1]);
    answer = sorted.map((el) => Number(el[0]));

    return answer;
  }

  //2차 풀이
  function solution2(N: number, stages: number[]) {
    let answer = [];
    let stagesNumCount = [];

    //stage count;
    for (let i = 0; i < N; i++) {
      stagesNumCount[i] = 0;
    }

    let countedArr = stagesNumCount.map((el, index) => {
      let success = 0;
      let tryingPerson = 0;
      let stageNum = index + 1;

      for (let stage of stages) {
        if (stage > stageNum) {
          success += 1;
        }

        if (stage >= stageNum) {
          tryingPerson += 1;
        }
      }

      let failurePercentage = tryingPerson !== 0 ? success / tryingPerson : 1;
      return [1 - failurePercentage, stageNum];
    });

    //sorting
    let sorted = countedArr.sort((a, b) => b[0] - a[0]);
    answer = sorted.map((el) => Number(el[1]));

    return answer;
  }
}

export default {};
