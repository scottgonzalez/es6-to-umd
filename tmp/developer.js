import Person from "./person";

var Developer = (function (_Person) {
	function Developer() {
		babelHelpers.classCallCheck(this, Developer);

		if (_Person != null) {
			_Person.apply(this, arguments);
		}
	}

	babelHelpers.inherits(Developer, _Person);
	babelHelpers.createClass(Developer, {
		greet: {
			value: function greet() {
				alert("Hi, I'm a " + this.options.language + " developer.");
			}
		}
	});
	return Developer;
})(Person);

export default Developer;