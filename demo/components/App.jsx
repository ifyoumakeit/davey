import d from "../../src/d";
import Button from "./Button";

export default ({ active, store, data = [], fetchData, fetchPost }) => {
  return (
    <main
      style={{
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <header>
        <h1>DAVI</h1>
        <p>Dave's Alternative View Interpretation</p>
        <Button
          active={active}
          store={store}
          onClick={() => !active && fetchData()}
        >
          {active ? `You're done` : `Fetch posts`}
        </Button>
      </header>
      <section
        style={{
          display: "grid",
          gridGap: "12px",
        }}
      >
        {data &&
          data.map(datum => (
            <article
              style={{
                border: "1px black solid",
                padding: "12px 18px",
              }}
            >
              <h1>{datum.title}</h1>
              <p>{datum.body}</p>
              <button onClick={() => fetchPost(datum.id)}>Read more</button>
            </article>
          ))}
      </section>
    </main>
  );
};
