import d from "../../src/d";
import Button from "./Button";

export default props => {
  return (
    <main>
      <header>
        <h1>DAVI</h1>
        <p>Dave's Alternative View Interpretation</p>
      </header>
      <article>
        <Button {...props}>Click me</Button>
      </article>
    </main>
  );
};
