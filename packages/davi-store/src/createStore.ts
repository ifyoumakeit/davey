export default (store = {}) => {
  const listeners = [];

  const get = () => store;

  const set = val => {
    store = { ...store, ...val };

    // Update each handler.
    listeners.forEach(handler => handler(store));
  };

  const subscribe = handler => {
    listeners.push(handler);

    // Set store to trigger
    // first render.
    set(store);

    return () => {
      // Return handler removal function.
      const index = listeners.indexOf(handler);
      return [...listeners.slice(0, index), ...listeners.slice(index + 1)];
    };
  };

  return {
    subscribe,
    set,
    get,
  };
};
