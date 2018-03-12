import h from "./src/h";
import render from "./src/render";
import createStore from "./src/store";

const store = createStore({ active: false });

const Button = ({ children, store, active }) => {
  return (
    <button
      onClick={() => store.set({ active: !active })}
      class="foo"
      style={{ backgroundColor: active ? "red" : "black", color: "#fff" }}
    >
      {children}
    </button>
  );
};

const renderThis = data =>
  render(
    <main>
      <header>
        <h1>DAVI</h1>
        <p>Dave's Alternative View Interpretation</p>
      </header>
      <article>
        <Button {...data} store={store}>
          Click Me
        </Button>
      </article>
    </main>,
    document.querySelector("#root")
  );

store.subscribe(renderThis);
renderThis(store.get());
