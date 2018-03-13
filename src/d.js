/**
 * OBJECT LOOPING
 */

const eachKey = (obj, handler) => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    handler(obj[keys[i]], keys[i], obj);
  }
};

/**
 * DOM HELPERS
 */

const getNode = el => {
  return el instanceof Element ? el : document.createTextNode(el);
};

const ensureArray = val => {
  return Array.isArray(val) ? val : [val];
};

const isBrowser = () => {
  return typeof window !== "undefined" && window != null;
};

/**
 * CLIENT
 */

const ATTR_FNS_MAP_CLIENT = {
  onClick: (el, handler) => {
    return el.addEventListener("click", handler);
  },
  onBlur: (el, handler) => {
    return el.addEventListener("blur", handler);
  },
  style: (el, styles) => {
    return eachKey(styles, (val, key) => (el.style[key] = val));
  },
  children: (el, children) => {
    return children.forEach(child => el.appendChild(getNode(child)));
  },
  __fallback__: (el, val, key) => {
    return el.setAttribute(key, val);
  },
};

const getAttrFnClient = key => {
  return ATTR_FNS_MAP_CLIENT[key] || ATTR_FNS_MAP_CLIENT.__fallback__;
};

/**
 * SERVER
 */

const ATTR_FNS_MAP_SERVER = {
  style: styles => {
    return `style="${Object.keys(styles).reduce((memo, key) => {
      return `${memo}${key}:${styles[key]};`;
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

const getAttrsServer = props => {
  return Object.keys(props).reduce((memo, key) => {
    const attr = getAttrFnServer(key)(props[key], key);
    return attr ? ` ${memo}${attr}` : memo;
  }, "");
};

/**
 * ENVIRONMENT RENDERERS
 */

const renderClient = (tag, props) => {
  const el = document.createElement(tag);
  eachKey(props, (val, key) => getAttrFnClient(key)(el, val, key));
  return el;
};

const renderServer = (tag, props) => {
  return `<${tag}${getAttrsServer(props)}>${props.children.join("")}</${tag}>`;
};

/**
 * TAG RESOLUTION
 */

export default (tag = "", _props, ..._children) => {
  const props = {
    ..._props,
    children: ensureArray(
      _children.length ? _children : _props && _props.children
    ),
  };

  return typeof tag === "function"
    ? tag(props)
    : isBrowser() ? renderClient(tag, props) : renderServer(tag, props);
};
