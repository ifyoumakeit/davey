# 👦🏻 davey-store

**davey's store interpretation**

[![CircleCI](https://circleci.com/gh/ifyoumakeit/davey.svg?style=shield)](https://circleci.com/gh/ifyoumakeit/davey)
[![codecov](https://codecov.io/gh/ifyoumakeit/davey/branch/master/graph/badge.svg)](https://codecov.io/gh/ifyoumakeit/davey)
![npm (scoped)](https://img.shields.io/npm/v/davey-store.svg)

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
