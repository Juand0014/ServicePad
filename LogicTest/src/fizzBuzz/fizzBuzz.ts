export const fizzBuzz = (num: number = 100) => {
	const fizzBuzz = [];
	for (let n = 1; n <= num; n++) {
		let output = "";
		if (n % 3 == 0) output += "Fizz";
		if (n % 5 == 0) output += "Buzz";
		fizzBuzz.push(output || n);
	}
	return fizzBuzz;
}

console.log(fizzBuzz(5));