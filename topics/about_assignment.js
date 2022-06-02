import { equal } from 'assert';
import koans from '../support/koans.js'

const { test } = koans

function run(){
    temp = 1

    test("local variables", () => {
        const temp = 1;
        equal(temp, 1, "Assign a value to the variable temp");
    });

    test("global variables", () => {
        temp = 1; // Not using var is an example. Always use var in practise.
        equal(global.temp, temp, 'global variables are assigned to the global object');
    });
}
export default{
    run
}