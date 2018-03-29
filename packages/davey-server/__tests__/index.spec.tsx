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

describe("Resolves text nodes ", () => {
  test("match snapshot", () => {
    expect(
      renderToStaticMarkup(
        <h1>
          hello <span>my</span>
          <h2>world</h2> friend
        </h1>
      )
    ).toMatchSnapshot();
  });
});

describe("Appends attributes", () => {
  let markup;

  beforeAll(() => {
    markup = renderToStaticMarkup(
      <button
        onClick={() => expect(true).toEqual(true)}
        onBlur={() => expect(true).toEqual(true)}
        style={{ backgroundColor: "blue" }}
      >
        hello
      </button>
    );
    document.body.innerHTML = markup;
  });
  test("match snapshot", () => {
    expect(markup).toMatchSnapshot();
  });

  test("onBlur isn't present", () => {
    expect(
      document.body.querySelector("button").getAttribute("onClick")
    ).toBeFalsy();
  });

  test("style works", () => {
    expect(
      document.body.querySelector("button").style["background-color"]
    ).toBe("blue");
  });
});
