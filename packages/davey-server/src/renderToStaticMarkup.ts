export interface Props {
  children?: String[];
  [key: string]: any;
}

export type Tuple = [String, Props];

const camelCase = str => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

const kvToAttr = (val, key) => {
  return `${key}="${val}"`;
};

const ATTR_FNS_MAP_SERVER = {
  style: styles => {
    return `style="${Object.keys(styles).reduce((memo, key) => {
      return `${memo}${camelCase(key)}:${styles[key]};`;
    }, "")}"`;
  },
  class: kvToAttr,
  id: kvToAttr,
  src: kvToAttr,
  __fallback__: () => "",
};

const getAttrFnServer = key => {
  return ATTR_FNS_MAP_SERVER[key] || ATTR_FNS_MAP_SERVER.__fallback__;
};

const getAttrsServer = (props = {}) => {
  return Object.keys(props).reduce((memo, key) => {
    const attr = getAttrFnServer(key)(props[key], key);
    return attr ? ` ${memo}${attr}` : memo;
  }, "");
};

const getIndent = index => {
  return `\n${[...Array.from({ length: index })].join("\t")}`;
};

const renderServer = (elements, prevIndex = 0) => {
  const [tag, props] = elements;
  const nextIndex = prevIndex + 1;
  const indent = getIndent(nextIndex);
  const children = Array.isArray(props.children)
    ? props.children.reduce((memo, child) => {
        return `${memo}${
          Array.isArray(child)
            ? renderServer(child, nextIndex)
            : `${indent}\t${child}`
        }`;
      }, "")
    : `${indent}\t${props.children}`;

  return `${indent}<${tag}${getAttrsServer(props)}>${children}${
    children ? indent : ""
  }</${tag}>`;
};

const renderToStaticMarkup = elements => {
  return renderServer(elements).trim();
};

export default renderToStaticMarkup;
