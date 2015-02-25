import Person from './person';

export default class Developer extends Person {
	greet() {
		alert( `Hi, I'm a ${this.options.language} developer.` );
	}
}
