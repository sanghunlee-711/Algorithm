{
  //make Table for using KMP Alhorithm

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

  console.log(makeTable("ababababcdefsa"));

  const doKmp = (largeString: string, smallString: string): number => {
    //에러 발생시 -1 반환
    if (smallString.length < 1) {
      return -1;
    }

    let smallIndex: number = 0;
    let largeIndex: number = 0;
    let madeTable: number[] = makeTable(largeString);

    while (largeIndex < largeString.length) {
      if (largeString[largeIndex] === smallString[smallIndex]) {
        if (smallIndex === smallString.length - 1) {
          return largeIndex - smallString.length + 1;
        } else {
          smallIndex++;
          largeIndex++;
        }
      } else if (smallIndex > 0) {
        //do jump
        smallIndex = madeTable[smallIndex - 1];
      } else {
        smallIndex = 0;
        largeIndex++;
      }
    }
    return -1;
  };

  console.log(doKmp("ababababcdefsa", "defs"));

  const bruteForce = (largeString: string, smallString: string): number => {
    let largeIndex: number = 0;
    let smallIndex: number = 0;
    let currentIndex: number = 0;

    while (largeString[largeIndex] !== undefined) {
      if (largeString[largeIndex] === smallString[smallIndex]) {
        currentIndex = largeIndex;
        while (largeString[largeIndex] === smallString[smallIndex]) {
          if (smallIndex === smallString.length - 1) {
            return currentIndex;
          } else {
            largeIndex++;
            smallIndex++;
          }
        }
      } else {
        smallIndex = 0;
        largeIndex++;
      }
    }
    return -1;
  };

  console.log(bruteForce("ababababcdefsa", "defs"));
}
