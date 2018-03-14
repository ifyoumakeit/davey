const ensureArray = val => {
  return Array.isArray(val) ? val : [val];
};

export default (tag = "", _props, ..._children) => {
  const props = {
    ..._props,
    children: ensureArray(
      _children.length ? _children : _props && _props.children
    ),
  };

  return typeof tag === "function" ? tag(props) : [tag, props];
};
