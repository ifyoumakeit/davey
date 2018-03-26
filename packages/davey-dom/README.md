# 👦🏻 davey-dom

**davey's dom methods**

[![CircleCI](https://circleci.com/gh/ifyoumakeit/davey.svg?style=shield)](https://circleci.com/gh/ifyoumakeit/davey)
[![codecov](https://codecov.io/gh/ifyoumakeit/davey/branch/master/graph/badge.svg)](https://codecov.io/gh/ifyoumakeit/davey)
![npm (scoped)](https://img.shields.io/npm/v/davey-dom.svg)

## Methods

### render
Like React's `render`, takes a davey component and DOM element for insertion.

## Try it out

`yarn add davey davey-dom`

```
import { davey } from "davey";
import { render } from "davey-dom";

render(<h1>Hello world!</h1>, document.querySelector("#root"));
```
