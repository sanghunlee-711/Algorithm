const n: number = 1260;
let count: number = 0;
let coin_types: number[] = [500, 100, 50, 10];

const countRest = (n: number, count: number, coin_types: number[]): number => {
  coin_types.forEach((el) => {
    count += Math.floor(n / el);
    n = n % el;
  });
  return count;
};

const result: number = countRest(n, count, coin_types);

console.log(result);
