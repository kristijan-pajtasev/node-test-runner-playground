function functionThatThrowsAnError() {
  throw new Error("Custom error message")
}

function functionThatDoesNotThrowAnError() { /**/ }

function asyncFunctionThatRejects() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ error: "Async Reject Error"})
    }, 1000)
  });
}

export {
  functionThatThrowsAnError,
  functionThatDoesNotThrowAnError,
  asyncFunctionThatRejects
}