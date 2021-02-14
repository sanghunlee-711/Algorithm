//a2x + bx + c = 0;
// b^2 - 4ac ==> 판별식
// x = [-b +or- (b^2-4ac)^(1/2)]/2a
{
  const solvingFunc = (a: number, b: number, c: number): string => {
    let judge = b ** 2 - 4 * a * c;
    let answer = (-b + judge ** (1 / 2)) / (2 * a);
    let answer2 = (-b - judge ** (1 / 2)) / (2 * a);
    if (judge === 0) {
      //중근
      return `중근입니다 ${answer} === ${answer2}`;
    } else if (judge > 0) {
      //두개의 해
      return `두개의 근이 존재합니다. ${answer} ${answer2}`;
    } else if (judge < 0) {
      //허근
      return `허근입니다.`;
    }
  };

  const a = 1;
  const b = -2;
  const c = 1;

  const d = 3;
  const e = 5;
  const f = 8;

  const g = 2;
  const h = 3;
  const i = 1;

  let answer: string = solvingFunc(a, b, c);
  let answer2: string = solvingFunc(d, e, f);
  let answer3: string = solvingFunc(g, h, i);

  console.log(answer);
  console.log(answer2);
  console.log(answer3);
}
