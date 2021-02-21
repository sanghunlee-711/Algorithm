{
  const makeTable = (longString: string): number[] => {
    let table: number[] = [0];
    let prefix: number = 0;
    let suffix: number = 1;

    while (suffix < longString.length) {
      if (longString[prefix] === longString[suffix]) {
        table[suffix] = prefix + 1;
        prefix++;
        suffix++;
      } else if (prefix === 0) {
        table[suffix] = 0;
        suffix++;
      } else {
        prefix = table[prefix - 1];
      }
    }

    return table;
  };
  console.log(makeTable("abcabc"));

  const doKmp = (longString: string, shortString: string): number => {
    if (shortString.length < 1) {
      return -1;
    }

    //인덱스를 반환할것 임
    let longIndex: number = 0;
    let shortIndex: number = 0;
    let madeTable: number[] = makeTable(longString);

    while (longIndex < longString.length) {
      if (longString[longIndex] === shortString[shortIndex]) {
        if (shortIndex === shortString.length - 1) {
          return longIndex - shortString.length + 1;
        } else {
          shortIndex++;
          longIndex++;
        }
      } else if (shortIndex > 0) {
        //do Jump
        shortIndex = madeTable[shortIndex - 1];
      } else {
        shortIndex = 0;
        longIndex++;
      }
    }
    return -1;
  };

  console.log(doKmp("abcabc", "ca"));

  const bruteFunction = (longString: string, shortString: string) => {
    let longIndex: number = 0;
    let shortIndex: number = 0;

    while (longString[longIndex] !== undefined) {
      if (longString[longIndex] === shortString[shortIndex]) {
        let currentIndex = longIndex;
        while (longString[longIndex] === shortString[shortIndex]) {
          if (shortIndex === shortString.length - 1) {
            return currentIndex;
          } else {
            longIndex++;
            shortIndex++;
          }
        }
      } else {
        shortIndex = 0;
        longIndex++;
      }
    }
    return -1;
  };

  console.log(bruteFunction("abcabc", "ca"));

  const solve = (longString: string, shortStrings: string[]): boolean[] => {
    let longStringLen = longString.length;
    let result: boolean[] = [];
    for (let i = 0; i < shortStrings.length; i++) {
      let eachShortString: string = shortStrings[i];
      let kmpIndex: number = doKmp(longString, eachShortString);

      if (
        eachShortString.length > longStringLen ||
        eachShortString.length < 1
      ) {
        result.push(false);
      } else if (kmpIndex <= -1 || kmpIndex > longStringLen) {
        result.push(false);
      } else {
        result.push(true);
      }
    }
    return result;
  };

  let largeString = "asdqbvibsdfocxvkjnvknsdvn";
  let smallStrings = ["asd", "asdm", "qvb", "foc", "n", "jnv"];

  let largeString2 = "Lorem Ipsum is simply dummy text";
  let smallStrings2 = ["Lorem", "mit", "is", "text", "type"];

  let largeString3 =
    "abcabcashdskhfliahwiehfldksfdlkshiveliwfskldfniLewhflkdjfdksfjiwehfjlkdsjfsfjiwehfjlkdsjfsfjiwehfjlkdsjafasdasafsadasdasdqwqcxcqlsckopqkwpdksa";
  let smallStrings3 = ["xcqlsw", "xcs", "xcqls"];

  console.log(solve(largeString, smallStrings));
  console.log(solve(largeString2, smallStrings2));
  console.log(solve(largeString3, smallStrings3));

  const findAnswer = (a: number, b: number, c: number): string => {
    const judge: number = b ** 2 - 4 * a * c;
    const answer1: number = (-b + judge ** (1 / 2)) / (2 * a);
    const answer2: number = (-b - judge ** (1 / 2)) / (2 * a);

    if (judge === 0) {
      return `중근입니다 값은 ${answer1}`;
    } else if (judge > 0) {
      return `두개의 근이 있습니다 값은 ${answer1} 과 ${answer2} 입니다`;
    } else if (judge < 0) {
      return `허근입니다.`;
    } else {
      throw new Error("Can't find Answer in this way");
    }
  };
  console.log(findAnswer(2, 3, 4));
  console.log(findAnswer(1, 2, 1));
  console.log(findAnswer(1, -2, 1));
  console.log(findAnswer(1, 3, 2));

  const findAnswer1 = (a: number, b: number) => {
    let answer = -1 * (b / a);

    return answer;
  };
  console.log(findAnswer1(1, 1));
}
