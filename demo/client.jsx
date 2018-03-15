import d from "../src/d";
import render from "../src/render";
import createStore from "../src/store";
import App from "./components/App";
import STATES from "./constants";

const store = createStore({ active: false });

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => store.set({ data, active: true, state: STATE.POSTS }));
};

const fetchPost = id => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => store.set({ data, active: true, state: STATE.POST }));
};

store.subscribe(data => {
  render(
    <App {...data} store={store} fetchData={fetchData} fetchPost={fetchPost} />,
    document.querySelector("#root")
  );
});
