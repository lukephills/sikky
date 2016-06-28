/**
 * sikky
 * @version 1.1.4
 * @copyright (c) 2016 KFlash
 * @license MIT <https://github.com/kflash/sikky/blob/master/LICENSE>
 */
function app (x, y) { return x + y; };
var app$1 = document.getElementById('app');
if (app$1) {
    app$1.innerHTML = '<h1>Hello World!</h1>';
}
if (module.hot) {
    module.hot.accept();
}

export default app;