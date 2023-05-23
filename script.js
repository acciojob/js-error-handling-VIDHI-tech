class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should only consist of integers and +-/* characters and not <arg>";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should not have an invalid combination of operators";
  }
}

function evalString(expression) {
  try {
    if (/([+/*-])\1/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[+/*]/.test(expression)) {
      throw new SyntaxError("Expression should not start with an invalid operator");
    }

    if (/[+/*-]$/.test(expression)) {
      throw new SyntaxError("Expression should not end with an invalid operator");
    }

    // Perform evaluation logic here
    // ...

    return "Valid expression: " + expression; // Placeholder return value

  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      throw error;
    } else {
      throw new OutOfRangeError();
    }
  }
}

// Example usage:
try {
  const expression1 = "2 + 3";
  console.log(evalString(expression1)); // Valid expression: 2 + 3

  const expression2 = "5 * / 2";
  console.log(evalString(expression2)); // Throws InvalidExprError

  const expression3 = "/ 5 + 2";
  console.log(evalString(expression3)); // Throws SyntaxError

  const expression4 = "4 - 7 /";
  console.log(evalString(expression4)); // Throws SyntaxError

} catch (error) {
  console.log(error.name + ": " + error.message);
}
