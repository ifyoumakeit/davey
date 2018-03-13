import d from "../src/d";
import render from "../src/render";
import createStore from "../src/store";
import App from "./components/App";

const store = createStore({ active: false });

store.subscribe(data =>
  render(<App {...data} store={store} />, document.querySelector("#root"))
);
