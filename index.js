import h from "./src/h";
import render from "./src/render";

const Bar = ({ hello, ...props }) => {
  return (
    <button
      onClick={evt => console.log(evt)}
      class="foo"
      style={{ backgroundColor: "black", color: "#fff" }}
      children={props.children}
    />
  );
};

render(
  <Bar>
    <p>Hi</p>
  </Bar>,
  document.querySelector("#root")
);
