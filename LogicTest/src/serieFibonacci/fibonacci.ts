export const fibonnacciSequence = (quantity: number): number[] => {
	return Array.apply(null, Array(quantity)).reduce((acc: number[], curr: unknown, idx: number) => {
		return idx > 2 ? acc.concat(acc[idx - 1] + acc[idx - 2]) : acc
	}, [0,1,1])
}