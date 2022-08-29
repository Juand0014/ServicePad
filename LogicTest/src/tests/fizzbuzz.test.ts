import { describe, test, expect } from '@jest/globals';
import { fizzBuzz } from "../fizzBuzz";

describe('fizzBuzz', () => {
	test('add 5 print in console', () => {
		expect(fizzBuzz(5)).toEqual([ 1, 2, 'Fizz', 4, 'Buzz' ]);
	});
});