import { merge } from "./index";

test("general case", () => {
	const collection_1: Array<number> = [1, 3, 5, 7];
	const collection_2: Array<number> = [2, 4, 5, 8, 9];
	const result = [...collection_1, ...collection_2].sort();
	expect(merge(collection_1, collection_2)).toStrictEqual(result);
});

test("first collection empty", () => {
	const collection_1: Array<number> = [];
	const collection_2: Array<number> = [1, 2, 5, 8, 12];
	const result = collection_2.sort();
	expect(merge(collection_1, collection_2)).toStrictEqual(result);
});

test("second collection empty", () => {
	const collection_1: Array<number> = [3, 4, 8];
	const collection_2: Array<number> = [];
	const result = collection_1.sort();
	expect(merge(collection_1, collection_2)).toStrictEqual(result);
});

test("first collection undefined", () => {
	const collection_1 = undefined;
	const collection_2: Array<number> = [1, 2];
	const result = collection_2;
	expect(merge(collection_1, collection_2)).toStrictEqual(result);
});

test("second collection undefined", () => {
	const collection_1: Array<number> = [4];
	const collection_2 = undefined;
	const result = collection_1;
	expect(merge(collection_1, collection_2)).toStrictEqual(result);
});

test("both collection undefined", () => {
	const collection_1 = undefined;
	const collection_2 = undefined;
	const result = undefined;
	expect(merge(collection_1, collection_2)).toStrictEqual(result);
});

test("first collection null", () => {
	const collection_1 = null;
	const collection_2: Array<number> = [3, 8, 12];
	const result = collection_2;
	expect(merge(collection_1, collection_2)).toStrictEqual(result);
});

test("second collection null", () => {
	const collection_1: Array<number> = [];
	const collection_2 = null;
	const result = collection_1;
	expect(merge(collection_1, collection_2)).toStrictEqual(result);
});

test("both collection null", () => {
	const collection_1 = null;
	const collection_2 = null;
	const result = undefined;
	expect(merge(collection_1, collection_2)).toStrictEqual(result);
});

test("randomly generated case", () => {
	const getRandomInt = (min: number, max: number): number => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
	const generateRandomSortedSequence = () => {
		const seq = [];
		const len = getRandomInt(1, 100);
		for (let i = 0; i < len; i++) {
			seq.push(getRandomInt(0, 100));
		}
		seq.sort((a, b) => a - b);
		return seq;
	};
	const collection_1: Array<number> = generateRandomSortedSequence();
	const collection_2: Array<number> = generateRandomSortedSequence();
	const result = [...collection_1, ...collection_2].sort((a, b) => a - b);
	expect(merge(collection_1, collection_2)).toStrictEqual(result);
});
