// "closure" is a nested function declaration that uses variables declared in an outer (but not global) scope that are kept alive after the function is returned. "closures" allow for a number of very useful programming patterns and are a common feature of the language.

function Counter(inc=1) {
	var count = 0;
	var api = {};
	api.add = function() {
		count += inc;
		console.log('Current count: ' + count);
	}
	api.sub = function() {
		count -= inc;
		console.log('Current count: ' + count);
	}
	api.reset = function() {
		count = 0;
		console.log('Current count: ' + count);
	}

	return api;
}

var counter = Counter();

counter.add();
counter.add();
counter.sub();
counter.reset();

