function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult // Error type
// combineValues = 5 // !! ERROR TYPE !!

printResult(add(1, 4));

console.log(combineValues(8, 8));
