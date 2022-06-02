import assert from 'assert'
import koans from '../support/koans.js'

const { test } = koans


function run(){
    test("ok", () => {
        assert.ok(true === true, 'what will satisfy the ok assertion?');
    })
    
    test("not ok", () => {
        assert.ok(false === false, 'what is a false value?');
    })
    
    test("ok", () => {
        assert.equal(2, 1 + 1, 'what will satisfy the equal assertion?');
    })
}
export default{
    run
}