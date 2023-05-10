function functionThatThrowsAnError() {
  throw new Error("Custom error message")
}

function functionThatDoesNotThrowAnError() { /**/ }

export {
  functionThatThrowsAnError,
  functionThatDoesNotThrowAnError
}