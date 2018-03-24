# 👦🏻 davey-server

**davey's server methods**

## Methods

### renderToStaticMarkup
Like React's `renderToStaticMarkup`, takes a davey component and returns the resolved markup.

## Try it out

`yarn add davey davey-server`

```
import { davey } from "davey";
import { renderToStaticMarkup } from "davey-server";

renderToStaticMarkup(<h1>Hello world!</h1>);
```
