import { davey } from "davey";
import { createStore } from "davey-store";

describe("getStore", () => {
  const store = createStore({ active: false });

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
    test("call listener ", () => {
      let i = 0;
      store.subscribe(data => {
        expect(data.active).toEqual(i === 0 ? true : false);
        i++;
      });
      store.set({ active: false });
    });
  });
});
