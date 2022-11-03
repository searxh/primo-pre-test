export const merge = (
	collection_1: Array<number> | null | undefined,
	collection_2: Array<number> | null | undefined
): Array<number> | undefined => {
	//guard against undefined and null ( assuming null and undefined are accepted )
	if (collection_1 === null || collection_1 === undefined) {
		if (collection_2) return collection_2;
		else return undefined;
	}
	if (collection_2 === null || collection_2 === undefined) {
		if (collection_1) return collection_1;
		else return undefined;
	}

	//initialize variables
	const length = collection_1.length + collection_2.length;
	const merged = [];
	let pointer1 = 0;
	let pointer2 = 0;

	//sorting by comparison since collection_1 and collection_2 are already sorted
	for (let i = 0; i < length; i++) {
		if (collection_1[pointer1] >= collection_2[pointer2]) {
			if (collection_2[pointer2] || collection_2[pointer2] === 0)
				merged.push(collection_2[pointer2]);
			pointer2++;
		} else if (collection_1[pointer1] < collection_2[pointer2]) {
			if (collection_1[pointer1] || collection_1[pointer1] === 0)
				merged.push(collection_1[pointer1]);
			pointer1++;
		}
	}
	//flush leftover values
	for (let i = pointer1; i < collection_1.length; i++) {
		merged.push(collection_1[i]);
	}
	for (let i = pointer2; i < collection_2.length; i++) {
		merged.push(collection_2[i]);
	}
	return merged;
};
