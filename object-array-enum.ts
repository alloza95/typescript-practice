// A helpful addition to the standard set of datatypes from JavaScript is the enum. 
// As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
  name: "Arnau",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person);

if (person.role === Role.ADMIN) {
    console.log('is Admin');    
}
