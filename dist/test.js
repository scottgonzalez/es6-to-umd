(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.test = factory()
}(this, function () { 'use strict';

  (function (global) {
    var babelHelpers = global.babelHelpers = {};

    babelHelpers.inherits = function (subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) subClass.__proto__ = superClass;
    };

    babelHelpers.prototypeProperties = function (child, staticProps, instanceProps) {
      if (staticProps) Object.defineProperties(child, staticProps);
      if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
    };

    babelHelpers.classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  })(typeof global === "undefined" ? self : global);

  "use strict";

  var Person = (function () {
  	function Person(options) {
  		babelHelpers.classCallCheck(this, Person);

  		this.options = options;
  	}

  	babelHelpers.prototypeProperties(Person, null, {
  		greet: {
  			value: function greet() {
  				alert("Hi, my name is " + this.options.name + ".");
  			},
  			writable: true,
  			configurable: true
  		}
  	});
  	return Person;
  })();

  "use strict";

  var Developer = (function (Person) {
  	function Developer() {
  		babelHelpers.classCallCheck(this, Developer);

  		if (Person != null) {
  			Person.apply(this, arguments);
  		}
  	}

  	babelHelpers.inherits(Developer, Person);
  	babelHelpers.prototypeProperties(Developer, null, {
  		greet: {
  			value: function greet() {
  				alert("Hi, I'm a " + this.options.language + " developer.");
  			},
  			writable: true,
  			configurable: true
  		}
  	});
  	return Developer;
  })(Person);

  "use strict";

  var app = {
  	Person: Person,
  	Developer: Developer
  };

  return app;

}));