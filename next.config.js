// const withLess = require('@zeit/next-less');
// const withCSS = require('@zeit/next-css');
// module.exports = withCSS({
//     webpack :function (config) {
//         return config;
//     }
// });


const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

module.exports = withLess(withCSS({
    webpack :function (config) {
        return config;
    }
}));
