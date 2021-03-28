// Tuple types doesn't exists in Javascript vanilla. Is a TypeScript type.
// Tuple types allow you to express an array with a 
// fixed number of elements whose types are known, 
// but need not be the same. 

// const person: {
//     name: string,
//     age: number
// }

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Arnau",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

//  person.role = [1, 'admin', 'author'] // !! ERROR !! Has three elements when two are expected
// person.role.push('admin') // CAUTION! You can push. TypeScript doesn't detect this.
// person.role[1] = 10 // !! ERROR !! You can't assign a number to a string

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
  // console.log(hobby.map); // !! ERROR !!
}
