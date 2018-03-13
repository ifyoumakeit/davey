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
 * ATTRIBUTES
 */

const ATTR_FNS_MAP = {
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

const getAttrFn = key => {
  return ATTR_FNS_MAP[key] || ATTR_FNS_MAP.__fallback__;
};

const attachAttrs = (el, _props) => {
  const props = _props || {};
  eachKey(props, (val, key) => getAttrFn(key)(el, val, key));
  return el;
};

/**
 * TAG RESOLUTION
 */

export default (tag = "", _props, ..._children) => {
  const props = _props || {};
  const children = ensureArray(_children.length ? _children : props.children);

  return typeof tag === "function"
    ? tag({ ...props, children })
    : isBrowser()
      ? attachAttrs(document.createElement(tag), { ...props, children })
      : `<${tag}>${children.join("")}</${tag}>`;
};
