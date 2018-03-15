import d from "../src/d";
import renderToStaticMarkup from "../src/renderToStaticMarkup";
import App from "./components/App";
import fetch from "isomorphic-fetch";
import { STATE, INITIAL_DATA } from "./constants";

const fetchData = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => ({ data, active: true, state: STATE.POSTS }));
};

const getInitialData = data => `var ${INITIAL_DATA}=${JSON.stringify(data)}`;

export default fetchData()
  .then(data =>
    renderToStaticMarkup(<App {...data} initialData={getInitialData(data)} />)
  )
  .catch(console.error);
