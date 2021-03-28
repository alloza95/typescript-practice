function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" // This is literal type. Only accepts one of these strings.
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(26, 30, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("26", "30", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Arnau", "Clara", "as-text");
console.log(combinedNames);
