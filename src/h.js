import { isEvent, EVENTS } from "./util";

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

const appendChildren = (el, children = "") => {
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
    const val = props[key];
    (({
      onClick: addEventListener.bind(this, el, "click", val),
      onBlur: addEventListener.bind(this, el, "blur", val),
      style: appendStyles.bind(this, el, val),
    }[key] || setAttribute.bind(this, el, key, val))());
  }
  return el;
};

export default (tag = "", _props, _children) => {
  const props = _props || {};
  const children = _children || props.children;
  console.log({ tag, children });

  if (typeof tag === "function") {
    return tag({ ..._props, children });
  }

  return addListenersAndAttributes(
    appendChildren(document.createElement(tag), children),
    props
  );
};
