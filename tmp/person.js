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

export default Person;