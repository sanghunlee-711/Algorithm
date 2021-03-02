{
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
            smallIndex++;
            largeIndex++;
          }
        }
      } else {
        smallIndex = 0;
        largeIndex++;
      }
    }
    return -1;
  };

  console.log(
    bruteForce(
      "alk;fj;klsadfjklsadjkladsfjklsdafjsdkalfjsadhfjlsdkjlkdjasflk",
      "jlkdja"
    ) //51
  );
}
