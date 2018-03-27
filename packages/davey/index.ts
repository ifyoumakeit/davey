export interface Props {
  children: String | String[];
}

export type Tag = Function | String;

const flatten = val => {
  // First children can come down as arrays, strings or arrays of arrays.
  // TODO: Clean this up.
  return val ? (Array.isArray(val) && val.length > 2 ? [...val] : [val]) : [];
};

export const davey = (tag: Tag, _props: Props, first, ...rest) => {
  const children = first
    ? flatten(first).concat(rest)
    : _props && _props.children ? flatten(_props.children) : [];

  const props = {
    ..._props,
    children,
  };

  return typeof tag === "function" ? tag(props) : [tag, props];
};
