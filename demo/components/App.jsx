import d from "../../src/d";
import Button from "./Button";
import Article from "./Article";
import { STATE } from "../constants";

export default ({
  active,
  state,
  store,
  posts = [],
  post = {},
  fetchData,
  fetchPost,
}) => {
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
        {state === STATE.INITIAL && (
          <Button
            active={active}
            store={store}
            onClick={() => !active && fetchData()}
          >
            Fetch more posts
          </Button>
        )}
      </header>
      <section
        style={{
          display: "grid",
          gridGap: "12px",
        }}
      >
        {state === STATE.POSTS || state === STATE.INITIAL ? (
          posts.map(post => <Article {...post} {...{ fetchPost }} />)
        ) : state === STATE.POST ? (
          <Article {...post} />
        ) : (
          false
        )}
      </section>
    </main>
  );
};
