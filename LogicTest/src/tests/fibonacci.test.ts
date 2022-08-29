import { describe, test, expect } from '@jest/globals';
import { fibonnacciSequence } from '../';

describe('fibonaacci', () => {
	test('adds 5 to equal [0,1,1,2,3]', () => {
		expect(fibonnacciSequence(5)).toEqual([ 0, 1, 1, 2, 3 ]);
	});
});