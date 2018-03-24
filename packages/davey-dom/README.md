# 👦🏻 davey-dom

**davey's dom methods**

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
