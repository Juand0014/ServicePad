import { describe, test, expect } from '@jest/globals';
import { wordDetectRepetition } from '../'

describe('detect repetition', ()=>{
	test('should count repetition of each word', ()=>{
		expect(wordDetectRepetition("hola, Juan matos, matos eres tu")).toEqual({ hola: 1, juan: 1, matos: 2, eres: 1, tu: 1 })
	})
})