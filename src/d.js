/**
 * OBJECT LOOPING
 */

const forEachObj = (obj, handler) => {
  const keys = Object.keys(obj);
  for (const i = 0; i < keys.length; i++) {
    handler(obj[keys[i]], keys[i], obj);
  }
};

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
  forEachObj(styles, (val, key) => (el.style[key] = val));
};

const getNode = el => {
  return el instanceof Element ? el : document.createTextNode(el);
};

const ensureArray = val => {
  return Array.isArray(val) ? val : [val];
};

const appendChildren = (el, children) => {
  ensureArray(children).forEach(child => el.appendChild(getNode(child)));
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

const attachAttrs = (el, _props) => {
  const props = _props || {};
  forEachObj(props, (val, key) => getAttrFn(key)(el, val, key));
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
