import { expect, test } from 'vitest'
import { plus } from '../src/add'

test('adds 1 + 2 to equal 3', () => {
	expect(plus(1, 2)).toBe(3)
})
