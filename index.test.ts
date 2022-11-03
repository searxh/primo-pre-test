import { hello } from "./index";

test("test 1", () => {
	expect(hello() === "hello world");
});
