//프로그래머스-js-lv.1-최대공약수와 최소공배수
//https://velog.io/@cloudlee711/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-20210424
{
  const findGcd = (big, small) => {
    let restNum = big % small;
    if (restNum === 0) return small;

    return findGcd(small, restNum);
  };

  const findLcm = (gcd, big, small) => {
    return (big * small) / gcd;
  };

  function solution(n, m) {
    let answer = [];
    let bigNum = n > m ? n : m;
    let smallNum = n < m ? n : m;
    let gcd = findGcd(bigNum, smallNum); //최대공약수
    let lcm = findLcm(gcd, bigNum, smallNum); //최소공배수

    answer = [gcd, lcm];
    return answer;
  }
}

export default {};
