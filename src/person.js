export default class Person {
	constructor( options ) {
		this.options = options;
	}

	greet() {
		alert( `Hi, my name is ${this.options.name}.` );
	}
}
