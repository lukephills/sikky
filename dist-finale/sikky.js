/**
 * sikky
 * @version 1.0.3
 * @copyright (c) 2016 KFlash
 * @license MIT <https://github.com/kflash/sikky/blob/master/LICENSE>
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.sikky = factory());
}(this, function () {

	function sikky (x, y) { return x + y; };

	return sikky;

}));