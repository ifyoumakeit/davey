# 👦🏻 davey-store

**davey's store interpretation**

## Methods

### createStore

Create new store with subscribe, get and set methods.

## Try it out

`yarn add davey-store`

```
import { createStore } from "davey-store";

const store = createStore({ active: false });
store.subscribe(data => console.log(data));
console.log(store.get())
store.set({ active: true })
```
