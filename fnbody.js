(function(root) {
  'use strict';

  function fnbody(fn) {
    if (typeof fn === 'function') {
      return fn.toString()
      .replace(/^[^{]*{\n*/,'')
      .replace(/\n*}[^}]*$/,'');
    }
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = fnbody;
    }
    exports.fnbody = fnbody;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return fnbody;
    });
  } else {
    root.fnbody = fnbody;
  }

})(this);
