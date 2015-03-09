var Person = (function () {
	function Person(options) {
		babelHelpers.classCallCheck(this, Person);

		this.options = options;
	}

	babelHelpers.createClass(Person, {
		greet: {
			value: function greet() {
				alert("Hi, my name is " + this.options.name + ".");
			}
		}
	});
	return Person;
})();

export default Person;