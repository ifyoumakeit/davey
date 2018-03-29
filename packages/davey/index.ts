export interface Props {
  children?: string | string[];
}

export type Tag = Function | string;

export const davey = (tag: Tag, _props: Props = {}, ...rest: string[]) => {
  const children = rest.length ? rest : _props.children || [];
  const props = {
    ..._props,
    children: children.reduce((acc, child) => {
      return Array.isArray(child) ? acc.concat([...child]) : acc.concat(child);
    }, []),
  };

  return typeof tag === "function" ? tag(props) : { tag, props };
};
