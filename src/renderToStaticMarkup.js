const camelCase = str => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

const ATTR_FNS_MAP_SERVER = {
  style: styles => {
    return `style="${Object.keys(styles).reduce((memo, key) => {
      return `${memo}${camelCase(key)}:${styles[key]};`;
    }, "")}"`;
  },
  class: (val, key) => {
    return `${key}="${val}"`;
  },
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

const renderServer = ([tag, props = {}]) => {
  return Array.isArray(props.children)
    ? `<${tag}${getAttrsServer(props)}>${
        typeof props.children[0] !== "string"
          ? props.children.map(renderServer).join("")
          : props.children[0]
      }</${tag}>`
    : "";
};

const renderToStaticMarkup = ([tag, props]) => {
  const result = renderServer([tag, props]);
  console.log(result);
  return result;
};

export default renderToStaticMarkup;
