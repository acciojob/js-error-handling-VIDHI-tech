class OutOfRangeError extends Error {
      constructor() {
        super();
        this.name = this.constructor.name;
        this.message = 'Expression should only consist of integers and +-/* characters';
      }
    }

    class InvalidExprError extends Error {
      constructor() {
        super();
        this.name = this.constructor.name;
        this.message = 'Expression should not have an invalid combination of operators';
      }
    }

    function evalString(expression) {
      try {
        if (/[\+\-\*\/]{2,}/.test(expression)) {
          throw new InvalidExprError();
        }
      
        if (/^[\+\*\/]/.test(expression)) {
          throw new SyntaxError('Expression should not start with an invalid operator');
        }
      
        if (/[\+\*\/\-]$/.test(expression)) {
          throw new SyntaxError('Expression should not end with an invalid operator');
        }
      
        if (!/^[\d\s\+\-\*\/]+$/.test(expression)) {
          throw new OutOfRangeError();
        }
      
        // Perform the evaluation logic here if the expression is valid
        // For this example, let's just log the result
        const result = eval(expression);
        console.log('Result:', result);
        alert('Result: ' + result);
      } catch (error) {
        console.error('Error:', error.name, '-', error.message);
        alert('Error: ' + error.name + ' - ' + error.message);
      }
    }

    function evaluateExpression() {
      const expression = document.getElementById('expression').value;
      evalString(expression);
    }