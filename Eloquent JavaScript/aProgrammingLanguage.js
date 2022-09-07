/*
do(define(x, 10),
	 if(>(x,5),
			print("large"),
			print("small")))

TYPES:
value: (5, 10, "hello world")
	type: "value", value: 5
word: (foo, bar)
	type: word, name: "foo"
apply: (>(arg1, 2))
	type: "apply", 
	operator: { type: "word", name: ">", }, 
	args: [ 
		{ type: "word", name "arg1", }, 
		{ type: "value", value: 2, },
	]
*/

// declare a function to parse the source code
function parseExpression(programIn) {
	// console.log(`parsing expression: ${programIn}`)
	// remove spaces from input
	const program = programIn.trimStart();
	// declare "match" and "expr" variables
	let match;
	let expr;
	// assign (match) the value of an array containing regex results:
	/** 
	 * opening character: "
	 * followed by:
	 *   anything that is not: "
	 * ending with: "
	 */
	// if results are found:
	if (match = /^"([^"]*)"/.exec(program)) {
		// assign (expr) the value of the matching expression
		expr = { type: 'value', value: match[1], };
		// else if the regex above returns no results
		// assign (match) the value of an array containing regex results:
		/**
		 * any number of opening characters: 0-9
		 * ending with a word boundary: (space, newline, etc.)
		 */
		// if results are found:
	} else if (match = /^\d+\b/.exec(program)) {
		// assign (expr) the value of the matching expression coerced into a number
		expr = { type: 'value', value: Number(match[0]), };
		// else if the regeg above returns no results
		// assign (match) the value of an array containing regex results:
		// any string starting with opening characters that are not: (),#" or whitespace
		// if results arer found:
	} else if (match = /^[^\s(),#"]+/.exec(program)) {
		// assign (expr) the value of the matching expression
		expr = { type: 'word', name: match[0], };
		// else, if none of the above regular expressions return results
	} else {
		// throw an error
		throw new SyntaxError(`Unexpected syntax: ${program}`)
	}

	// pass (expr) and the input with the match sliced off to parseApply
	return parseApply(expr, program.slice(match[0].length));
}

// declare a recursive function to check if the input is an application
function parseApply(exprIn, programIn) {
	// console.log('parsing application: ', exprIn, `, ${programIn}`)
	// remove the leading spaces from the remaining program
	let program = programIn.trimStart();
	// if the remaining input does not start with an opening paren
	if (program[0] !== '(') {
		// return an object containing the expression and the rest of the input
		return { expr: exprIn, rest: program, };
	}

	// else, slice off the opening paren
	program = program.slice(1).trimStart();

	// create an output object
	const expr = {
		type: 'apply',
		operator: exprIn,
		args: [],
	};

	// repeat the following until the closing paren is reached 
	while (program[0] !== ')') {
		// run parseExpression on the remaining input
		const arg = parseExpression(program);
		// push the resulting expression into expression's args
		expr.args.push(arg.expr)
		// reassign program to have the value of the remaining commands
		program = arg.rest.trimStart();
		// if the first character is a comma
		if (program[0] === ',') {
			// remove it
			program = program.slice(1).trimStart();
		// else, if the first character is not a closing paren
		} else if (program[0] !== ')') {
			// throw an error
			throw new SyntaxError('Expected \',\' or \')\'');
		}
	}

	// recurse, passing in the expression and the program sliced at the opening
	return parseApply(expr, program.slice(1));
}

// declare a function to tie parseExpression and parseApply together
function parse(program) {
	// assign the results of parseExpression on the input to two variables
	let { expr, rest } = parseExpression(program);
	// if rest has any characters left
	if (rest.trimStart().length > 0) {
		// throw an error
		throw new SyntaxError('Unexpected text after program');
	}
	// return the expression
	return expr;
}

// initialize an empty object to store special forms
const specialForms = {};

// declare a function to evaluate a syntax tree
function evaluate(expr, scope) {
  // if the expression is a value
	if (expr.type === 'value') {
    // return its value
    return expr.value;
  // else if the expression is a word
  } else if (expr.type === 'word') {
    // if this word has a binding within the program's scope
    if (expr.name in scope) {
      // return the name of the word 
      return scope[expr.name];
    // otherwise if the name is a word but has no binding
    } else {
      // throw an error
      throw new ReferenceError(
        `Undefined binding: ${expr.name}`
      );
    }
  // else if the expression is an application
  } else if (expr.type === 'apply') {
    // view it's operator and arguments
    const {operator, args} = expr;
    // if the operator is a word and present in specialForms
    if (operator.type === 'word' 
    && operator.name in specialForms) {
      // return the invocation of that word, passing in the args and scope
      return specialForms[operator.name](expr.args, scope);
    // else if the operator is not a word present in specialForms
    } else {
      // recurse, evaluating it
      const op = evaluate(operator, scope);
      // if the evaluated result is a function
      if (typeof op === 'function') {
        // evaluate the arguments and then pass them in, invoking the function
        return op(...args.map((arg) => evaluate(arg, scope)));
      // else if the evaluated result is not a funciton
      } else {
        // throw an error
        throw new TypeError('Applying a non-function.')
      }
    }
  }
}

// add a new method 'if' to special forms
specialForms.if = (args, scope) => {
  // if there are more or less than three arguments
  if (args.length !== 3) {
    // throw an error
    throw new SyntaxError(`Wrong number of args to if`);
  // else if the first argument isn't false
  } else if (evaluate(args[0], scope) !== false) {
    // return the second argument
    return evaluate(args[1], scope);
  // else if the first argument is false
  } else {
    // return the third argument
    return evaluate(args[2], scope);
  }
};

// add a new method 'while' to special forms
specialForms.while = (args, scope) => {
  // if there are more or less than 2 arguments
  if (args.length !== 2) {
    // throw an error
    throw new SyntaxError('Wrong number of args to while');
  }
  // loop while the first argument (breaking condition) is true
  while (evaluate(args[0], scope) !== false) {
    // evaluate the second argument
    evaluate(args[1], scope)
  }
  // end the program after the loop
  return false;
}

// add a new method 'do' to special forms
specialForms.do = (args, scope) => {
  // start the value off with an initial value of false
  let value = false;
  // iterate through the arguments
  for (let arg of args) {
    // assign value the evaluated result of each argument
    value = evaluate(arg, scope);
  }
  // return value (which will be false if there were no arguments)
  return value;
}

specialForms.define = (args, scope) => {
  // if there are more or less than 2 arguments or the first argument isn't a word
  if (args.length !== 2 || args[0].type !== 'word') {
    // throw an error
    throw new SyntaxError('Incorrect use of define');
  }
  // assign value the evaluated result of the second argument
  let value = evaluate(args[1], scope);
  // update the value of the first argument within the scope to the new value
  scope[args[0].name] = value;
  // return the value
  return value;
}

const topScope = {};
topScope.true = true;
topScope.false = false;

const prog = parse(`if(true, false, true)`);
// console.log(evaluate(prog, topScope))

for (const op of ["+", "-", "*", "/", "==", "<", ">"]) {
  topScope[op] = Function('a, b', `return a ${op} b;`)
}

topScope.print = value => {
  console.log(value);
  return value;
}

function run(program) {
  return evaluate(parse(program), Object.create(topScope))
}

run(`
do(define(total, 0),
   define(count, 1),
   while(<(count, 11),
         do(define(total, +(total, count)),
            define(count, +(count, 1)))),
   print(total))
`);

// add a new method 'fun' to special forms
specialForms.fun = (args, scope) => {
  // if there are no arguments
  if (!args.length) {
    // throw an error
    throw new SyntaxError('Functions need a body');
  }
  // assign the last argument to the variable 'body'
  let body = args[args.length - 1];
  // assign the names of the rest of the arguments to be the parametrs
  let params = args.slice(0, args.length - 1).map(expr => {
    // if the argument is not a word
    if (expr.type !== 'word') {
      // throw an error
      throw new SyntaxError('Parameter names must be words');
    }
    return expr.name;
  })

  // return an anonymous function
  return function() {
    // if there is an incorrect number of arguments
    if (arguments.length !== params.length) {
      // throw an error
      throw new TypeError('Wrong number of arguments');
    }
    // define a local scope
    let localScope = Object.create(scope);
    // iterate through the arguments
    for (let i = 0; i < arguments.length; i++) {
      // assign the arguments to the local scope's parameters
      localScope[params[i]] = arguments[i];
    }
    // return the evaluated result of the function
    return evaluate(body, localScope);
  };
};

run(`
do(define(plusOne, fun(a, +(a, 1))),
   print(plusOne(10)))
`);
// → 11

run(`
do(define(pow, fun(base, exp,
     if(==(exp, 0),
        1,
        *(base, pow(base, -(exp, 1)))))),
   print(pow(2, 10)))
`);
// → 1024
