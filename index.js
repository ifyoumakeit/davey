import h from "./src/h";
import render from "./src/render";

const Button = ({ children, ...props }) => {
  return (
    <button
      onClick={evt => console.log(evt)}
      class="foo"
      style={{ backgroundColor: "black", color: "#fff" }}
      children={children}
      {...props}
    />
  );
};

render(
  <main>
    <header>
      <h1>DAVI</h1>
      <p>Dave's Alternative View Interpretation</p>
    </header>
    <article>
      <Button>Click Me</Button>
    </article>
  </main>,
  document.querySelector("#root")
);
