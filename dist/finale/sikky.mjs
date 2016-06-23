/**
 * sikky
 * @version 1.0.0
 * @copyright (c) 2016 KFlash
 * @license MIT <https://github.com/kflash/sikky/blob/master/LICENSE>
 */
// 'a', and 'b' added here just so we can 'fake' the coverage rport, and see that
// it's working as it should!
var a = 123;
var b = function () { return a; };
var sikky = {
    a: a,
    b: b
};

export default sikky;