//// [tests/cases/conformance/parser/ecmascript5/Statements/parserES5ForOfStatement6.ts] ////

//// [parserES5ForOfStatement6.ts]
for (var a = 1, b = 2 of X) {
}

//// [parserES5ForOfStatement6.js]
for (var _i = 0, X_1 = X; _i < X_1.length; _i++) {
    var a = X_1[_i];
}
