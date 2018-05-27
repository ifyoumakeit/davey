export interface Props {
  children?: string[];
}

export type Tag = Function | string;

export const davey = (tag: Tag, _props: Props = {}, ...rest: string[]) => {
  // Get children from third argument or from props
  const _children = rest.length ? rest : (_props && _props.children) || [];

  const props = {
    ..._props,
    children: []
      .concat(_children)
      .reduce((acc, child) => acc.concat(child), []),
  };

  return typeof tag === "function" ? tag(props) : { tag, props };
};
