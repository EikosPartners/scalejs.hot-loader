module.exports = function (l) {
    let loader = l;

    loader = "var hotNotify = require('hotRender').hotNotify;" + loader;

    loader += '\n ; if (module.hot) { \nmodule.hot.accept(); \n hotNotify("hot-render"); }';

    return loader;
};