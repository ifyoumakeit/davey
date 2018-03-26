# 👦🏻 davey

**Dave's alternate view engine yeah!**

Using my brain to recreate React, Redux and CSS-in-JS from scratch/memory. I promise not to read any React or Redux docs or articles while creating this. This is the analog to `React`.

[![CircleCI](https://circleci.com/gh/ifyoumakeit/davey.svg?style=shield)](https://circleci.com/gh/ifyoumakeit/davey)
[![codecov](https://codecov.io/gh/ifyoumakeit/davey/branch/master/graph/badge.svg)](https://codecov.io/gh/ifyoumakeit/davey)
![npm (scoped)](https://img.shields.io/npm/v/davey.svg)

## JSX

### Use w/ Typscript

1.  Add below your **tsconfig.json**

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "davey"
  }
}
```

### Use w/ Babel

1.  `yarn add --dev transform-react-jsx`
2.  Add below your **.babelrc**

```json
{
  "plugins": [["transform-react-jsx", { "pragma": "davey" }]]
}
```
