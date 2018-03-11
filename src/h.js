import reduceProps from "./reduce_props";
import { isEvent, EVENTS } from "./util";

const appendChildren = (el, children = "") => {
  if (!children) return el;

  if (children instanceof Element) {
    el.appendChild(children);
  } else {
    el.innerHTML = children;
  }
  return el;
};

const addListenersAndAttributes = (el, props = {}) => {
  if (!props) return el;

  for (const key in props) {
    if (isEvent(key)) {
      el.addEventListener(EVENTS[key], props[key]);
    } else if (key === "style") {
      for (const k in props[key]) {
        el.style[k] = props[key][k];
      }
    } else {
      el.setAttribute(key, props[key]);
    }
  }
  return el;
};

export default (tag = "", _props, _children) => {
  const props = _props || {};
  const children = _children || props.children;

  if (typeof tag === "function") {
    return tag({ ..._props, children });
  }

  return addListenersAndAttributes(
    appendChildren(document.createElement(tag), children),
    props
  );
};
