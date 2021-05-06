{
  const solution = (numbers: number[], hand: string) => {
    let answer = "";
    const handObj = {
      "1": [0, 0],
      "2": [1, 0],
      "3": [2, 0],
      "4": [0, 1],
      "5": [1, 1],
      "6": [2, 1],
      "7": [0, 2],
      "8": [1, 2],
      "9": [2, 2],
      "*": [0, 3],
      "0": [1, 3],
      "#": [2, 3],
    };

    const leftInclude = [1, 4, 7];
    const rightInclude = [3, 6, 9];
    const centerInclude = [2, 5, 8, 0];

    let leftStatus = "*";
    let rightStatus = "#";
    for (let i = 0; i < numbers.length; i++) {
      if (leftInclude.includes(numbers[i])) {
        //1,4,7에 해당하는 경우 L을 더함
        answer += "L";
        leftStatus = String(numbers[i]);
      } else if (rightInclude.includes(numbers[i])) {
        //3,6,9에 해당하는 경우 R을 더함
        answer += "R";
        rightStatus = String(numbers[i]);
      } else if (centerInclude.includes(numbers[i])) {
        const num = numbers[i];
        const left = leftStatus;
        const leftX = Math.abs(handObj[num][0] - handObj[left][0]);
        const leftY = Math.abs(handObj[num][1] - handObj[left][1]);
        const leftLen = leftX + leftY;

        const right = rightStatus;
        const rightX = Math.abs(handObj[num][0] - handObj[right][0]);
        const rightY = Math.abs(handObj[num][1] - handObj[right][1]);
        const rightLen = rightX + rightY;

        if (leftLen === rightLen) {
          if (hand === "right") {
            answer += "R";
            rightStatus = String(numbers[i]);
          } else if (hand === "left") {
            answer += "L";
            leftStatus = String(numbers[i]);
          }
        } else if (leftLen > rightLen) {
          answer += "R";
          rightStatus = String(numbers[i]);
        } else if (leftLen < rightLen) {
          answer += "L";
          leftStatus = String(numbers[i]);
        }
      }
    }
    return answer;
  };

  //"LRLLLRLLRRL" -> 답
  console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
  //LRLLRRLLLRR
  console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
}

export default {};
