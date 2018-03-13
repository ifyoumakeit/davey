/**
 * DOM HELPERS
 */

const addEventListener = (el, eventType, handler) => {
  el.addEventListener(eventType, handler);
};

const setAttribute = (el, key, val) => {
  el.setAttribute(key, val);
};

const appendStyles = (el, styles) => {
  for (const key in styles) {
    el.style[key] = styles[key];
  }
};

const getNode = el => {
  return el instanceof Element ? el : document.createTextNode(el);
};

const appendChildren = (el, children = []) => {
  for (const index in children) {
    el.appendChild(getNode(children[index]));
  }

  return el;
};

/**
 * ATTRIBUTES
 */

const ATTR_FNS_MAP = {
  onClick: (el, val) => addEventListener(el, "click", val),
  onBlur: (el, val) => addEventListener(el, "blur", val),
  style: (el, val) => appendStyles(el, val),
  children: (el, val) => appendChildren(el, val),
  __fallback__: (el, val, key) => setAttribute(el, key, val),
};

const getAttrFn = key => {
  return ATTR_FNS_MAP[key] || ATTR_FNS_MAP.__fallback__;
};

const attachAttrs = (el, props = {}) => {
  if (!props) return el;

  for (const key in props) {
    getAttrFn(key)(el, props[key], key);
  }

  return el;
};

/**
 * TAG RESOLUTION
 */

export default (tag = "", _props, ..._children) => {
  const props = _props || {};
  const children = _children.length ? _children : props.children;

  return typeof tag === "function"
    ? tag({ ...props, children })
    : attachAttrs(document.createElement(tag), { ...props, children });
};
