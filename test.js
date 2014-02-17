var piperly = require('./index.js');
var translator = require('./translator.ometajs');
var test = require('tape').test;
var util = require('util');

test('has a parse method', function (t) {
    t.plan(2);
    t.ok(piperly.parse, 'Has a parse property');
    t.ok(typeof piperly.parse == 'function', 'parse is a function');
});

test('parses a pipe', function (t) {
    t.plan(4);
    t.ok(piperly.parse('pipe process.stdin -> process.stdout'), 'Parses a pipe');
    t.ok(piperly.parse('pipe process.stdin -> process.stdout;'), 'Parses a pipe with a semicolon');
    t.ok(piperly.parse('pipe process.stdin -> process.stdout; "hello"'), 'Parses a pipe followed by another statement');
    t.ok(piperly.parse('pipe process.stdin -> function (e) { } -> process.stdout;'), 'Parses a pipe through a function');
    console.log(util.inspect(piperly.parse('pipe process.stdin -> function (e) { } -> process.stdout;'), {depth: 10}));
    console.log(translator.dump(piperly.parse('pipe process.stdin -> process.stdout')));
});
