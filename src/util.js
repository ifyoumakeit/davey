export const EVENTS = {
  onClick: "click",
  onBlur: "blur",
  onMouseDown: "mousedown",
  onMouseUp: "mouseup",
};

export const isEvent = val => Object.keys(EVENTS).indexOf(val) > -1;
