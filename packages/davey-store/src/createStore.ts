export interface Data {
  [key: string]: any;
}

export default (store: Data) => {
  let listeners = [];

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
      listeners = [...listeners.slice(0, index), ...listeners.slice(index + 1)];
    };
  };

  return {
    listeners,
    subscribe,
    set,
    get,
  };
};
