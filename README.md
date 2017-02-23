[![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/christian-fei/husky-template.svg?style=flat
[travis-url]: https://travis-ci.org/christian-fei/husky-template
[npm-image]: https://img.shields.io/npm/v/husky-template.svg?style=flat
[npm-url]: https://npmjs.org/package/husky-template
[downloads-image]: https://img.shields.io/npm/dm/husky-template.svg?style=flat
[downloads-url]: https://npmjs.org/package/husky-template

# installation

```
npm install --save husky-template
```

```javascript
const huskyTemplate = require('husky-template')
let template = huskyTemplate('lorem {ipsum} {dolor.sit.amet}')

const ipsum = 'ipsum'
template = template({ipsum}) // lorem ipsum {dolor.sit.amet}
const amet = 'dolor sit amet'
template = template({dolor:{sit:{amet}}}) // lorem ipsum dolor sit amet
```

[See usage-section](#usage) for more examples.


# usage

create an instance of husky by passing it a string with placeholders for you values.

like this:

```javascript
const text = 'lorem {ipsum} {amet}'
const template = huskyTemplate(text)

const curriedTemplate = template({ipsum})
equal('lorem ipsum {amet}', curriedTemplate)
equal('lorem ipsum amet', curriedTemplate({amet}))
```

### Features

##### curried templates

use to power of partial application on your templates! [See usage-section](#usage).

##### deep object property support

in other words:

```javascript
const template = huskyTemplate('lorem ipsum {deep.amet}')
const amet = 'amet'
equal('lorem ipsum amet', template({deep: {amet}}))
```

##### map over object properties

[see test](./test/index.js#L34)

```javascript
test('maps over object property', () => {
  const ipsum = 'ipsum'.split('')
  let template = huskyTemplate(`lorem {this.ipsum.map(i => i + '_').join('')}`)
  template = template({ipsum})
  equal(template.toString(), 'lorem i_p_s_u_m_')
})
```

## tests

please feel free to submit pull-requests, backed by tests!

```bash
npm i
npm t [-- --watch]
```

[see tests](./test)
