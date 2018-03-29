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

const renderServer = ({ tag, props: _props }, prevIndex = 0) => {
  const { children, ...props } = _props;
  const nextIndex = prevIndex + 1;
  const indent = getIndent(nextIndex);

  const _children = Array.isArray(children)
    ? children.reduce((memo, child) => {
        return !child
          ? memo
          : typeof child === "string"
            ? `${memo}${child}`
            : `${memo}${renderServer(child, nextIndex)}`;
      }, "")
    : `${indent}\t${children}`;

  return `${indent}<${tag}${getAttrsServer(props)}>${_children}${
    _children.indexOf("<") > -1 ? indent : ""
  }</${tag}>`;
};

const renderToStaticMarkup = elements => {
  return renderServer(elements, 0).trim();
};

export default renderToStaticMarkup;
