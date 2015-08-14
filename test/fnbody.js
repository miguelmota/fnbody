var test = require('tape');
var fnbody = require('../fnbody');

test('fnbody', function (t) {
  'use strict';

  t.plan(7);

  t.equal(fnbody(), undefined);
  t.equal(fnbody({}), undefined);
  t.equal(fnbody(''), undefined);
  t.equal(fnbody(2), undefined);
  t.equal(fnbody(function() { return 1 + 2; }), ' return 1 + 2; ');
  t.equal(fnbody(function() {
    var foo = 'bar';
    return foo;
  }), "    var foo = 'bar';\n    return foo;\n  ");

function foo() {
  var foo = 'bar';
  return function(qux) {
    return foo + qux;
  };
}

  t.equal(fnbody(foo), "  var foo = \'bar\';\n  return function(qux) {\n    return foo + qux;\n  };");
});
