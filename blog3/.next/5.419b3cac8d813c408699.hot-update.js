webpackHotUpdate(5,{

/***/ "./pages/article.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/_react@16.2.0@react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("./node_modules/_react-dom@16.2.0@react-dom/cjs/react-dom.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compontents_Header_js__ = __webpack_require__("./compontents/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compontents_Pagination_js__ = __webpack_require__("./compontents/Pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__compontents_Footer_js__ = __webpack_require__("./compontents/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__compontents_articleFooter_js__ = __webpack_require__("./compontents/articleFooter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch__ = __webpack_require__("./node_modules/_isomorphic-fetch@2.2.1@isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_moment_min__ = __webpack_require__("./lib/moment.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_moment_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__lib_moment_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_highlight_js__ = __webpack_require__("./node_modules/_highlight.js@9.12.0@highlight.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_highlight_js__);

var _jsxFileName = 'D:\\wrok\\React-Next.js-SSRspa-blog\\blog3\\pages\\article.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/_react-hot-loader@4.0.0-beta.18@react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Article = function (_React$Component) {
    _inherits(Article, _React$Component);

    function Article(props) {
        _classCallCheck(this, Article);

        return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));
    }

    _createClass(Article, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.highlightCode();
        }
    }, {
        key: 'componentDidMount',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.highlightCode();

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'highlightCode',
        value: function highlightCode() {
            var domNode = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this);
            var nodes = domNode.querySelectorAll('pre code');
            for (var i = 0; i < nodes.length; i++) {
                __WEBPACK_IMPORTED_MODULE_9_highlight_js___default.a.highlightBlock(nodes[i]);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$data = this.props.data,
                content = _props$data.content,
                title = _props$data.title,
                createTime = _props$data.createTime,
                category = _props$data.category,
                labels = _props$data.labels;

            var iNow = __WEBPACK_IMPORTED_MODULE_8__lib_moment_min___default()(createTime).format('YYYY-MM-DD');
            // console.log( this.props.data );
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: 'page', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__compontents_Header_js__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { id: 'content', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { id: 'primary', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'article',
                            { className: 'post', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 52
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'header',
                                { className: 'post-header', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 53
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'h1',
                                    { className: 'post-title', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 54
                                        }
                                    },
                                    title
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'time',
                                    { className: 'post-time', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 55
                                        }
                                    },
                                    iNow
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'post-content', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 57
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'language-name-of-snippet markdown-body', dangerouslySetInnerHTML: { __html: content }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 59
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__compontents_articleFooter_js__["a" /* default */], { labels: labels, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            })
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__compontents_Footer_js__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                })
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(_ref2) {
                var query = _ref2.query,
                    pathname = _ref2.pathname;
                var rusllut, res;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return fetch('http://api.djui.cn/api/article?id=' + query.id);

                            case 2:
                                rusllut = _context2.sent;
                                _context2.next = 5;
                                return rusllut.json();

                            case 5:
                                res = _context2.sent;
                                return _context2.abrupt('return', { data: res.data });

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Article;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Article;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/_react-hot-loader@4.0.0-beta.18@react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/_react-hot-loader@4.0.0-beta.18@react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Article, 'Article', 'D:/wrok/React-Next.js-SSRspa-blog/blog3/pages/article.js');
    reactHotLoader.register(_default, 'default', 'D:/wrok/React-Next.js-SSRspa-blog/blog3/pages/article.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/article")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/_webpack@3.10.0@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.419b3cac8d813c408699.hot-update.js.map