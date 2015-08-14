# fnbody

> Stringifies the contents of a function body.

[![NPM](https://nodei.co/npm/fnbody.png)](https://nodei.co/npm/fnbody)

# Install

```bash
npm install fnbody
```

```bash
bower install fnbody
```

# Usage

```javascript
var fnbody = require('fnbody');

function foo() {
  var foo = 'bar';
  return function(qux) {
    return foo + qux;
  };
}

console.log(fnbody(foo)); // "  var foo = \'bar\';\n  return function(qux) {\n    return foo + qux;\n  };");
```

# Test

```bash
npm test
```

# License

MIT
