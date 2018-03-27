import { davey } from "davey";
import { createStore } from "davey-store";

describe("getStore", () => {
  let store;

  beforeEach(() => {
    store = createStore({ active: false });
  });

  test("match snapshot", () => {
    expect(store).toMatchSnapshot();
  });

  describe("::get", () => {
    test("returns object", () => {
      const data = store.get();
      expect(typeof data).toBe("object");
      expect(data.active).toEqual(false);
    });
  });

  describe("::set", () => {
    test("updates store data", () => {
      store.set({ active: true });
      expect(store.get().active).toEqual(true);
    });
  });

  describe("::subscribe", () => {
    let i = 0;

    test(`call listener`, () => {
      const removeFn = store.subscribe(data => {
        expect(data.active).toEqual(i === 0 ? false : true);
        i++;
      });
      store.set({ active: true });
      
      removeFn();
      // This will break if listener isn't removed
      store.set({ active: false });
    });
  });
});
