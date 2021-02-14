// ax + b + c = 0;
// x = -c - b /a
{
  const solve = (a: number, b: number, c: number): string => {
    const judge = (-1 * (b + c)) / a;
    const answer = `정답은 ${judge.toFixed(2)} 입니다.`;
    return answer;
  };

  let d3 = 3;
  let e3 = 5;
  let f3 = 9;

  let result = solve(d3, e3, f3);
  console.log(result);
}
