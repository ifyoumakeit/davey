import { davi } from "davi";
import { render } from "davi-dom";
import { createStore } from "davi-store";
import App from "./components/App";
import { STATE, INITIAL_DATA } from "./constants";
import * as fetch from "isomorphic-fetch";

const store = createStore({
  active: false,
  state: STATE.INITIAL,
  ...window[INITIAL_DATA],
});

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => store.set({ posts, state: STATE.POSTS }));
};

const fetchPost = id => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => store.set({ post, state: STATE.POST }));
};

store.subscribe(data => {
  render(
    <App {...data} store={store} fetchData={fetchData} fetchPost={fetchPost} />,
    document.querySelector("#root")
  );
});
