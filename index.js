function receivesAFunction(callback) {
    callback ();
}

function returnsANamedFunction() {
    return function namedFn() {
        console.log(`a named function`);
    };
}

function returnsAnAnonymousFunction() {
    return () => console.log (`anonymous function`);
}