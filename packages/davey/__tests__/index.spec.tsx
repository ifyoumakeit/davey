import { davey } from "../lib";

describe("Basic single elemnt", () => {
  const Component = <h1>hello</h1>;
  test("match snapshot", () => {
    expect(Component).toMatchSnapshot();
  });
  test("returns tuple", () => {
    expect(Array.isArray(Component)).toBe(true);
  });
  test("first element of tuple is tag", () => {
    expect(Component[0]).toBe("h1");
  });
  test("second element of tuple is props object", () => {
    expect(typeof Component[1]).toBe("object");
  });
  test("second element of tuple has children", () => {
    expect(Component[1]).toHaveProperty("children");
  });
  test("children are an array", () => {
    expect(Array.isArray(Component[1].children)).toBe(true);
  });
  test("children contain correct text string", () => {
    expect(Component[1].children[0]).toBe("hello");
  });
});
