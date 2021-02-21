// 주어진 문자열의 접두사 접미사 공통길이 표(table)
{
  function makeTable(word: string): Array<number> {
    //input: word: 접두사 접미사의 공통길이를 구할 문자열
    //output:  접두사 접미사 공통길이 표
    //ex) "aaaabcab" -> [0,1,2,3,0,0,1,0]

    const table: Array<number> = [0];
    let prefix: number = 0;
    let suffix: number = 1;

    while (suffix < word.length) {
      if (word[prefix] === word[suffix]) {
        //접두사와 접미사가 동일한 경우
        table[suffix] = prefix + 1;
        //공통길이표에 중복이 된 것을 나타내는 숫자 기입(aab -> 010)
        suffix++;
        prefix++;
      } else if (prefix === 0) {
        //동일하지 않은 것이 나온 다음의 경우 공통길이표에 0 을 할당하며 접미사의 인덱스 추가하여 탐색
        table[suffix] = 0;
        suffix++;
      } else {
        //동일한 것이 나온 뒤 prefix의 값은 table내의 해당 prefix-1의 인덱스에 해당하는 값을 할당해 줌.
        prefix = table[prefix - 1];
      }
    }
    return table;
  }
  const test = makeTable("abcacabc");
  console.log(test);
  //KMP: 접두사와 접미사를 이용해 현재 탐색중인 부분에서 접미사와 접두사가 일치하는 부분으로 점프해서 넘어가는 식으로 탐색
  function KMP(inputText: string, word: string): number {
    //input: inputText: 문자열 word가 포함하고 있는 지 확인할 긴 문자열
    //output:  inputText의 word포함시 해당 index, 비포함시 -1
    //시간복잡도: O(n+m) *n: input text길이 , *m: word길이

    if (word.length === 0) {
      //빈 문자열일 때 -1 반환
      return -1;
    }

    let inputIndex = 0;
    let wordIndex = 0;
    //inputIndex: 들어온 텍스트의 현재 비교위치를 나타내기 위한 변수
    //wordIndex: 패턴의 현재 비교위치를 나타내기 위한 변수

    const kmpTable = makeTable(inputText);
    //makeTable 함수를 이용하여 주어진 긴 문자열의 접두사 접미사 공통길이 표(table) 생성
    while (inputIndex < inputText.length) {
      //들어온 긴 문자열의 길이만큼 반복
      if (inputText[inputIndex] === word[wordIndex]) {
        //긴문자열의 현재위치와 비교할 짧은문자열의 현재위치 값이 동일할 때
        if (wordIndex === word.length - 1) {
          // 짧은문자열을 모두 포함하면
          return inputIndex - word.length + 1;
          //긴문자열에서 짧은문자열의 index를 반환.
        } else {
          wordIndex++;
          inputIndex++;
          //짧은문자열의 현재 비교위치가 제일 마지막이 아니라면 다음index를 탐색
        }
      } else if (wordIndex > 0) {
        //짧은문자열 비교 중 처음이 아닌 곳에서 동일하지 않은 경우
        wordIndex = kmpTable[wordIndex - 1];
        //짧은문자열의 비교위치를 처음이 아닌 공통길이만큼 jump 한 위치부터 시작
      } else {
        //짧은문자열 처음부터 탐색 시작
        wordIndex = 0;
        inputIndex++;
      }
    }

    return -1;
    //끝까지 탐색 후 못찾은 경우
  }

  function solve(largeString: string, smallStrings: string[]) {
    let result: Array<boolean> = [];
    let largeStringLen: number = largeString.length;

    for (let index: number = 0; index < smallStrings.length; index++) {
      let smallString = smallStrings[index];
      let smallStringLen = smallString.length;

      if (smallStringLen <= 0 || smallStringLen > largeStringLen) {
        //빈 문자열이거나 작은문자열이 긴문자열보다 긴 경우 kmp함수 사용 불필요 함
        result.push(false);
      } else {
        //탐색 비교 시작
        let kmpIndex = KMP(largeString, smallString);

        if (kmpIndex <= -1 || kmpIndex >= largeStringLen) {
          //포함하지 않는 경우
          result.push(false);
        } else {
          //포함하는 경우
          result.push(true);
        }
      }
    }
    return result;
  }

  //Test Case

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
}
