
## kanban board

this is a test task

## main stack

`webpack` `babel`

`react` `redux` `immer` `reselect`

`postcss` `classnames`

`lodash` `ramda`

## code style

`snake_case` is used instead of `camelCase`

## name prefixes

prefix|description|example
---|---|---
`p__`|imported package|`import * as p__lodash from 'lodash'`
`i__`|default imported from package|`import r__react from 'react'`
`m__`|imported module|`import * as m__selectors from './selectors'`
`d__`|default imported from module|`import d__component from './component'`
`s__`|default imported style|`import s__styles from './styles.pcss'`
`r__`|required |`const r__styles = require('./styles')`

## firebase

[firebase](https://firebase.google.com/) is used as a hosting

## prerequisites

`node` `&` `npx`
<br>
`yarn` `|` `npm`

## management commands

[node-package-script](https://www.npmjs.com/package/nps) is used

see all commands in [package-scripts.js](../package-scripts.js)

## installing

install dependencies

```
yarn
```

or

```
npm i
```

## start

start develop

```
npx nps d
```

`=` `nps develop` `=` `series('serve.develop')`

`&` `nps serve.develop` `=` `webpack-dev-server --develop --hot`

## linting

run lint

```
npx nps l
```

`=` `nps lint` `=` `concurrent('eslint', 'stylelint')`

`|` `nps eslint` `=` `eslint webpack source`
<br>
`|` `nps stylelint` `=` `stylelint styles source/**/*.pcss`

## testing

run test

```
npx nps t
```

`=` `nps test` `=` `series('jest')`

`&` `nps jest` `=` `jest source`
