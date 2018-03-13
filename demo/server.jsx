import d from "../src/d";
import renderToStaticMarkup from "../src/renderToStaticMarkup";
import createStore from "../src/store";
import App from "./components/App";

const store = createStore({ active: false });
const data = store.get();

export default renderToStaticMarkup(<App {...data} />);
