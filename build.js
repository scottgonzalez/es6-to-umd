var fs = require( "fs" );
var esperanto = require( "esperanto" );
var babel = require( "babel" );

try {
	fs.mkdirSync( "tmp" );
	fs.mkdirSync( "dist" );
} catch( error ) {
	// Just assume the directory exists
}

// Transpile each source file through Babel
var helpers = {};
fs.readdirSync( "src" ).forEach(function( file ) {
	var code = fs.readFileSync( "src/" + file );
	var transformed = babel.transform( code, {

		// Don't transpile modules, we'll let esperanto do that
		blacklist: [
			"es6.modules"
		],

		// Babel normally sticks all the required helpers at the top of the module.
		// This could result in a lot of duplication since we're transpiling
		// individual source files. So we tell Babel to use extenral helpers and
		// to return the list of helpers that each module uses.
		externalHelpers: true,
		returnUsedHelpers: true
	});

	// We then merge the list of helpers from each source file. We'll use this
	// list later to generate the helpers once for the full build.
	transformed.usedHelpers.forEach(function( helper ) {
		helpers[ helper ] = true;
	});

	// Store the tranpsiled modules in the tmp directory
	fs.writeFileSync( "tmp/" + file, transformed.code );
});

// Bundle all the transpiled modules using esperanto
esperanto.bundle({
	base: "tmp",
	entry: "app.js",
	transform: function( source, file ) {

		// We use a transform on an empty file to dynamically generate the
		// Babel helpers that our modules need.
		if ( file.match( /babel-helpers.js$/ ) ) {
			source = babel.buildExternalHelpers( Object.keys( helpers ) );
		}

		return source;
	}
})
	.then(function (bundle) {

		// Then we generate the UMD bundle, `name` is the name of the module
		// that we're bundling (the global variable that gets created) when
		// using <script>.
		var umd = bundle.toUmd({
			name: "test"
		});

		// Save the generated bundle in the dist directory
		fs.writeFileSync( "dist/test.js", umd.code );
	})
	.catch(console.error);
