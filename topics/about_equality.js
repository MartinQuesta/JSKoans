import { equal, ok } from 'assert';
import koans from '../support/koans.js'

const { test } = koans


function run(){
test("numeric equality", () => {
    equal(3 + 4,  7, "");
});

test("string equality", () => {
    equal("3" + "7", "37", "concatenate the strings");
});

test("equality without type coercion", () => {
    ok(3 === 3, 'what is exactly equal to 3?');
});

test("equality with type coercion", () => {
    ok(3 == "3", 'what string is equal to 3, with type coercion?');
});

test("string literals", () => {
    equal("frankenstein", "frankenstein", "quote types are interchangable, but must match.");
    equal('frankenstein', 'frankenstein', "quote types can use both single and double quotes.");
});
}
export default{
    run
}