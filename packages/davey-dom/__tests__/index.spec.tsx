import { davey } from "davey";
import { render } from "davey-dom";

describe("Basic single element", () => {
  beforeAll(() => {
    render(<h1>hello</h1>, document.body);
  });

  test("match snapshot", () => {
    render(<h1>hello</h1>, document.body);
    expect(document.body).toMatchSnapshot();
  });
});

describe("Array of intergers", () => {
  beforeAll(() => {
    render(<h1>hello</h1>, document.body);
  });

  test("match snapshot", () => {
    render(<h1>{[1,2,3].map(v => v % 2 ? <span>{v}</span> : v)}</h1>, document.body);
    expect(document.body).toMatchSnapshot();
  });
});

describe("2-level deep nested element", () => {
  beforeAll(() => {
    render(
      <main>
        <header>
          <h1>hello</h1>
          <h2>world</h2>
        </header>
      </main>,
      document.body
    );
  });

  test("match snapshot", () => {
    expect(document.body).toMatchSnapshot();
  });

  test("have hello", () => {
    expect(document.body.querySelector("h1").textContent).toEqual("hello");
  });
});

describe("Resolves text nodes", () => {
  beforeAll(() => {
    render(
      <h1>
        hello <span>my</span>
        <h2>world</h2>
        friend
      </h1>,
      document.body
    );
  });

  test("match snapshot", () => {
    expect(document.body).toMatchSnapshot();
  });

  test("have hello", () => {
    expect(document.body.querySelector("span").textContent).toEqual("my");
  });
});

describe("Appends attributes", () => {
  beforeAll(() => {
    render(
      <button
        onClick={() => expect(true).toEqual(true)}
        onBlur={() => expect(true).toEqual(true)}
        style={{ backgroundColor: "blue" }}
      >
        hello
      </button>,
      document.body
    );
  });
  test("onClick works", () => {
    document.body.querySelector("button").click();
  });

  test("onBlur works", () => {
    document.body.querySelector("button").blur();
  });

  test("style works", () => {
    expect(
      document.body.querySelector("button").style["background-color"]
    ).toBe("blue");
  });
});
