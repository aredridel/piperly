var piperly = require('./index.js');
var test = require('tape').test;

test('has a parse method', function (t) {
    t.plan(2);
    t.ok(piperly.parse, 'Has a parse property');
    t.ok(typeof piperly.parse == 'function', 'parse is a function');
});
