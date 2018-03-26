# 👦🏻 davey-server

**davey's server methods**

[![CircleCI](https://circleci.com/gh/ifyoumakeit/davey.svg?style=shield)](https://circleci.com/gh/ifyoumakeit/davey)
[![codecov](https://codecov.io/gh/ifyoumakeit/davey/branch/master/graph/badge.svg)](https://codecov.io/gh/ifyoumakeit/davey)
![npm (scoped)](https://img.shields.io/npm/v/davey-server.svg)

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
