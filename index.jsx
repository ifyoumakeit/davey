import d from "./src/d";
import render from "./src/render";
import createStore from "./src/store";

const store = createStore({ active: false });

const Button = ({ children, store, active }) => {
  return (
    <button
      children={`${children} (${active ? "on" : "off"})`}
      onClick={() => store.set({ active: !active })}
      style={{
        backgroundColor: active ? "red" : "black",
        padding: "24px",
        fontSize: "20px",
        color: "#fff",
      }}
    />
  );
};

store.subscribe(data =>
  render(
    <main>
      <header>
        <h1>DAVI</h1>
        <p>Dave's Alternative View Interpretation</p>
      </header>
      <article>
        <Button {...data} store={store}>
          Click me
        </Button>
      </article>
    </main>,
    document.querySelector("#root")
  )
);
