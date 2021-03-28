let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Arnau";

// userName = userInput // !! ERROR

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: code };
}

const result = generateError("An error has occurred!", 500);

console.log(result);
