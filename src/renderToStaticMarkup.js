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

const renderServer = ([tag, props = {}, prevIndex = 0]) => {
  const nextIndex = prevIndex + 1;
  const indent = getIndent(nextIndex);
  const children =
    typeof props.children[0] !== "string"
      ? props.children.reduce((memo, child) => {
          if (!child) return memo;
          const [tag, props] = child;

          return `${memo}${renderServer(child.concat(nextIndex))}`;
        }, "")
      : `${indent}\t${props.children[0]}`;

  return `${indent}<${tag}${getAttrsServer(props)}>${children}${
    children ? indent : ""
  }</${tag}>`;
};

const renderToStaticMarkup = elements => {
  return renderServer(elements).trim();
};

export default renderToStaticMarkup;
