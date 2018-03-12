export default (store = {}) => {
  const listeners = [];

  return {
    subscribe: handler => {
      listeners.push(handler);
      return () => {
        const index = listeners.indexOf(handler);
        return [ ...listeners.slice(0, index), ...listeners.slice(index + 1) ];
      };
    },
    set: val => {
      store = { ...store, ...val };
      listeners.forEach(handler => handler(store));
    },
    get: () => store,
  };
};
