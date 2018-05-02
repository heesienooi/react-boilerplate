Todos
=====

- sourcemap?
- code splitting


Features:
=========
- Webpack v4
- Babel
- Hot Module Replacement (HMR)
- React Hot Loader v4 (React HMR)

Future features (inspired by create-react-app):
- unit testing
- lint
- Polyfills
- Auto code formatting (husky, prettier)
- Dynamic import
- PWA
- XSS protect server_data inject

Getting start
=============

npm start

When ready to deploy
npm run build


`.babelrc`
----------

Support language features:
- ES2017, ES2016 and ES2015 (default preset-env)
- JSX
- Class fields and Static properties (stage 2)
- Dynamic import (stage 2)
- Object rest/spread operator (stage 3)
- Async/await (ES2017)
- Exponentiation Operator (ES2016)

`"plugins": ["react-hot-loader/babel"]` is mandatory for React Hot Loader to work. Without it children component will not have hot reload. This also removes the need to include `react-hot-loader/patch` in webpack.config.js which you may seen in some old example.

`babel-preset-env` automatically determines the Babel plugins you need based on your support environments. By default it is the same as babel-preset-latest (or babel-preset-es2015, babel-preset-es2016 and babel-preset-es2017 together). To specify the browsers, see https://babeljs.io/docs/plugins/preset-env/

`babel-preset-react` transform JSX into createElement calls.

`babel-preset-stage2` stage 2 plugins and greater (stage 3 and stage 4).


`app.js`
--------

This is the root component. It must export as hot-exported or else hot-loading not function well and may lost its state during patches:

```javascript
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
class App extends Component {
  //...
}
export hot(module)(App);
```
