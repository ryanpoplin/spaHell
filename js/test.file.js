// same functionality, different code...
var globGlob = (function () {
	var something;
	something = function () {
		console.log('Tester...');
	};
	return { something: something };
}());
globGlob.something();	
var anotherSomething = (function () {
	var testerObject;
	testerObject = {
		prop: function propa () {
			console.log('Just testing in here, also...');
		}
	};
	return testerObject;
}());
anotherSomething.prop();
// anon function testing template...
(function (param) {
	return (function (param) {
		return (function (param) {
			console.log(param+param+param);
		}('asdf'));
	}('asdf'));
}('asdf'));