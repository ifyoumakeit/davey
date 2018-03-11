export const EVENTS = { onClick: "click" };

export const isEvent = val => Object.keys(EVENTS).indexOf(val) > -1;
