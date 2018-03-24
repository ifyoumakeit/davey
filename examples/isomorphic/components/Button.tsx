import { davey } from "davey";

export default ({ children, store, active, onClick }) => {
  return (
    <button
      children={children}
      onClick={onClick}
      style={{
        backgroundColor: active ? "blue" : "black",
        padding: "24px",
        fontSize: "20px",
        color: "#fff",
        marginBottom: "24px",
      }}
    />
  );
};
