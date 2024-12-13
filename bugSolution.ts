function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

// Solution 1: Access the array element
console.log(greeter(user[0]));

// Solution 2: Modify the function to accept an array of strings
function greeterArray(people: string[]) {
  return "Hello, " + people.join(', ');
}

console.log(greeterArray(user));

// Solution 3:  Use a type guard (for more complex scenarios)
function isString(value: any): value is string {
  return typeof value === 'string';
}

function greeterSafe(person: any) {
  if (isString(person)) {
    return "Hello, " + person;
  } else {
    return "Hello, there!"; // Or handle the error appropriately
  }
}

console.log(greeterSafe(user)); //Handles the array gracefully
console.log(greeterSafe(user[0])); //Correctly handles a string