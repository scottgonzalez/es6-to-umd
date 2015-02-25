"use strict";

import Person from "./person";

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

export default Developer;