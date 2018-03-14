import d from "../../src/d";
import Button from "./Button";

export default ({ active, store, data = [] }) => {
  return (
    <main>
      <header>
        <h1>DAVI</h1>
        <p>Dave's Alternative View Interpretation</p>
        <Button
          active={active}
          store={store}
          onClick={() =>
            !active &&
            fetch("https://jsonplaceholder.typicode.com/posts")
              .then(response => response.json())
              .then(data => store.set({ data, active: true }))
          }
        >
          Fetch posts
        </Button>
      </header>
      <article>{data && data.map(datum => <div>{datum.title}</div>)}</article>
    </main>
  );
};
