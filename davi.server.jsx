import d from "./src/d";
import renderToString from "./src/renderToString";
import createStore from "./src/store";
import App from "./app";

const store = createStore({ active: false });
const data = store.get();

export default renderToString(<App {...data} />);
