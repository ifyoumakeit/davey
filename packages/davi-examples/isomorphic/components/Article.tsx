import * as davi from "davi";

export default ({ title, body, id, fetchPost }) => {
  return (
    <article
      style={{
        border: "1px black solid",
        padding: "12px 18px",
      }}
    >
      <h1>{title}</h1>
      <p>{body}</p>
      {fetchPost && <button onClick={() => fetchPost(id)}>Read more</button>}
    </article>
  );
};
