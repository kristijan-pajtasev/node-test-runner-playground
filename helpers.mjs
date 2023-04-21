function addNumbers(first, second) {
  if(typeof first !== "number") throw new Error("Invalid first parameter type");
  if(typeof second !== "number") throw new Error("Invalid second parameter type");
  return first + second;
}

export {
  addNumbers
};