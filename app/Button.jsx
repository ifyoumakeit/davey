import d from "../src/d";

export default ({ children, store, active }) => {
  return (
    <button
      children={`${children} (${active ? "on" : "off"})`}
      onClick={() => store.set({ active: !active })}
      style={{
        backgroundColor: active ? "red" : "black",
        padding: "24px",
        fontSize: "20px",
        color: "#fff",
      }}
    />
  );
};
