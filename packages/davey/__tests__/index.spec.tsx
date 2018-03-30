import { davey } from "davey";

describe("Basic single element", () => {
  const ComponentJsx = <h1>hello</h1>;
  const ComponentProps = <h1 children="hello" />;
  const ComponentFn = davey("h1", null, "hello");

  test("jsx === function", () => {
    expect(ComponentJsx).toEqual(ComponentFn);
  });

  test("jsx === props", () => {
    expect(ComponentJsx).toEqual(ComponentProps);
  });

  [ComponentJsx, ComponentFn, ComponentProps].forEach(Component => {
    test("match snapshot", () => {
      expect(Component).toMatchSnapshot();
    });
    test("returns object", () => {
      expect(Component instanceof Object).toBe(true);
    });
    test("tag key is HTML tag", () => {
      expect(Component.tag).toBe("h1");
    });
    test("props key is props object", () => {
      expect(Component.props instanceof Object).toBe(true);
    });
    test("props key to have children", () => {
      expect(Component.props).toHaveProperty("children");
    });
    test("props.children is an array", () => {
      expect(Array.isArray(Component.props.children)).toBe(true);
    });
    test("children contain correct text string", () => {
      expect(Component.props.children[0]).toBe("hello");
    });
  });
});

describe("2-level deep nested element", () => {
  const Component = (
    <main>
      <header>
        <h1>hello</h1>
        <h2>world</h2>
      </header>
    </main>
  );
  test("match snapshot", () => {
    expect(Component).toMatchSnapshot();
  });
  test("returns object", () => {
    expect(Component instanceof Object).toBe(true);
  });
  test("tag key is HTML tag", () => {
    expect(Component.tag).toBe("main");
  });
  test("props key is props object", () => {
    expect(typeof Component.props).toBe("object");
  });
  test("props object has key children", () => {
    expect(Component.props).toHaveProperty("children");
  });
  test("children are an array", () => {
    expect(Array.isArray(Component.props.children)).toBe(true);
  });
  test("children contain next child node", () => {
    expect(Component.props.children[0].tag).toBe("header");
  });
  test("hello world be present", () => {
    expect(Component.props.children[0].props.children[0].props.children[0]).toBe(
      "hello"
    );
    expect(Component.props.children[0].props.children[1].props.children[0]).toBe(
      "world"
    );
  });

  describe("Resolves text nodes", () => {
    const Component = (
      <h1>
        hello <span>my</span>
        <h2>world</h2>
        friend
      </h1>
    );
    test("match snapshot", () => {
      expect(Component).toMatchSnapshot();
    });
  });

  describe("Resolves array of nodes", () => {
    const Component = <div>{[1, 2, 3].map(val => val)}</div>;
    test("match snapshot", () => {
      expect(Component).toMatchSnapshot();
    });
  });
});
