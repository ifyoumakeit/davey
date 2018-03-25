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
