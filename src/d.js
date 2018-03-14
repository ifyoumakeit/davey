/**
 * Children are coming down differently if passed as an array
 * TODO: Clean this up, it's gross.
 */

const flattenArray = arr => {
  return Array.isArray(arr[0]) && Array.isArray(arr[0][0]) ? arr[0] : arr;
};

const ensureArray = val => {
  return Array.isArray(val) ? val : [val];
};

export default (tag = "", _props, ...children) => {
  const props = {
    ..._props,
    children: flattenArray(
      ensureArray(children.length ? children : _props && _props.children)
    ),
  };

  return typeof tag === "function" ? tag(props) : [tag, props];
};
