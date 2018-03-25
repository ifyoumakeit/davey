import { davey } from "davey";
import { renderToStaticMarkup } from "davey-server";

describe("Basic single element", () => {
  test("match snapshot", () => {
    expect(renderToStaticMarkup(<h1>hello</h1>)).toMatchSnapshot();
  });
});

describe("2-level deep nested element", () => {
  test("match snapshot", () => {
    expect(
      renderToStaticMarkup(
        <main>
          <header>
            <h1>hello</h1>
            <h2>world</h2>
          </header>
        </main>
      )
    ).toMatchSnapshot();
  });
});
