import d from "../src/d";
import render from "../src/render";
import createStore from "../src/store";
import App from "./components/App";

const store = createStore({ active: false });

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => store.set({ data, active: true }));
};

store.subscribe(data => {
  render(
    <App {...data} store={store} fetchData={fetchData} />,
    document.querySelector("#root")
  );
});
