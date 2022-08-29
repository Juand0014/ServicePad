type Word = {[key: string]: number}

export const wordDetectRepetition = (text: string): Word => {
	let textWithoutCharacter = text.replaceAll(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')	
	let words: string[] = textWithoutCharacter.toLowerCase().split(" ");
		let wordCount: Word = {};
		let word: typeof words[number];
		for (word of words) {
			if (wordCount[word]) {
					wordCount[word]++;
			} else {
					wordCount[word] = 1;
			}
		}
		return wordCount;
}