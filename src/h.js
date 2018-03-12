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

const attachProps = (el, props = {}) => {
  if (!props) return el;

  for (const key in props) {
    const val = props[key];
    (({
      onClick: addEventListener.bind(this, el, "click", val),
      onBlur: addEventListener.bind(this, el, "blur", val),
      style: appendStyles.bind(this, el, val),
      children: appendChildren.bind(this, el, val),
    }[key] || setAttribute.bind(this, el, key, val))());
  }
  return el;
};

const h = (tag = "", _props, ..._children) => {
  const props = _props || {};
  const children = _children.length ? _children : props.children;

  if (typeof tag === "function") {
    return tag({ ...props, children });
  }

  return attachProps(document.createElement(tag), { ...props, children });
};

export default h;
