function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult // Error type
// combineValues = 5 // !! ERROR TYPE !!

printResult(add(1, 4));

console.log(combineValues(8, 8));

addAndHandle(20, 3, (result) => {
  console.log(result);
});
