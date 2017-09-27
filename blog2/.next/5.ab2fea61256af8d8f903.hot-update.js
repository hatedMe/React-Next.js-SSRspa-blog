webpackHotUpdate(5,{

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(112);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(113);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(59);

var _inherits3 = _interopRequireDefault(_inherits2);

var _link = __webpack_require__(553);

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\work\\nodeblog\\blog2\\components\\article.js';


var Article = function (_React$Component) {
    (0, _inherits3.default)(Article, _React$Component);

    function Article(props) {
        (0, _classCallCheck3.default)(this, Article);

        return (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).call(this, props));
    }

    (0, _createClass3.default)(Article, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                articleId = _props.articleId,
                createTime = _props.createTime,
                category = _props.category,
                summary = _props.summary;

            //createTime = new Date(createTime).toLocaleString()
            // createTime = new Date(parseInt( createTime.valueOf())).toLocaleString().replace(/:\d{1,2}$/, '');

            //createTime = JSON.stringify(new Date( createTime.toLocaleString() )).replace(/T|"|\..*/g," ").trim()

            console.log(createTime);
            var basepath = '../article?id=';
            return _react2.default.createElement('article', { className: 'article article-type-post', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('div', { className: 'article-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('a', {
                className: 'article-title',
                href: basepath + articleId, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, title), _react2.default.createElement('a', { className: 'article-meta category', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, category))), _react2.default.createElement('p', { className: 'article-meta', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('span', { className: 'article-date', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('i', { className: 'fa fa-calendar-check-o', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }), _react2.default.createElement('a', {
                href: basepath + articleId,
                className: 'article-date', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), _react2.default.createElement('time', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, createTime))), _react2.default.createElement('p', { className: 'article-summary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, summary), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('a', { className: 'btn', href: basepath + articleId, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, '\u9605\u8BFB\u5168\u6587')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var query = _ref.query,
                    pathname = _ref.pathname;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', {});

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Article;
}(_react2.default.Component);

exports.default = Article;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGFydGljbGUuanMiXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiQXJ0aWNsZSIsInByb3BzIiwidGl0bGUiLCJhcnRpY2xlSWQiLCJjcmVhdGVUaW1lIiwiY2F0ZWdvcnkiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyIsImJhc2VwYXRoIiwicXVlcnkiLCJwYXRobmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFPOzs7Ozs7Ozs7SSxBQUVjO3FDQUNqQjs7cUJBQUEsQUFBWSxPQUFNOzRDQUFBOzt1SUFBQSxBQUNSLEFBQ1Q7Ozs7O2lDQU9RO3lCQUNrRCxLQURsRCxBQUN1RDtnQkFEdkQsQUFDQyxlQURELEFBQ0M7Z0JBREQsQUFDTyxtQkFEUCxBQUNPO2dCQURQLEFBQ2tCLG9CQURsQixBQUNrQjtnQkFEbEIsQUFDOEIsa0JBRDlCLEFBQzhCO2dCQUQ5QixBQUN1QyxpQkFEdkMsQUFDdUMsQUFFNUM7O0FBQ0E7QUFFQTs7QUFFQTs7b0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtnQkFBTSxXQUFOLEFBQWlCLEFBQ2pCO21DQUNJLGNBQUEsYUFBUyxXQUFULEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzJCQUFBLEFBQ2MsQUFDVjtzQkFBTyxXQUZYLEFBRXNCOzhCQUZ0QjtnQ0FBQSxBQUVtQztBQUZuQztBQUNJLGVBRlIsQUFDSSxBQUdBLHdCQUFBLGNBQUEsT0FBRyxXQUFILEFBQWE7OEJBQWI7Z0NBQUEsQUFBc0M7QUFBdEM7ZUFOWixBQUNJLEFBQ0ksQUFJSSxBQUdSLDZCQUFBLGNBQUEsT0FBRyxXQUFILEFBQWE7OEJBQWI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsVUFBTSxXQUFOLEFBQWdCOzhCQUFoQjtnQ0FBQSxBQUNJO0FBREo7b0RBQ08sV0FBSCxBQUFhOzhCQUFiO2dDQURKLEFBQ0ksQUFDQTtBQURBOztzQkFFVyxXQURYLEFBQ3NCLEFBQ2xCOzJCQUZKLEFBRWM7OEJBRmQ7Z0NBRkosQUFFSSxBQUlJO0FBSko7QUFDSSxnQ0FHQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQWhCaEIsQUFTSSxBQUNJLEFBTVEsQUFhWiwrQkFBQSxjQUFBLE9BQUcsV0FBSCxBQUFhOzhCQUFiO2dDQUFBLEFBQWlDO0FBQWpDO2VBN0JKLEFBNkJJLEFBRUEsMEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBRztBQUFIO0FBQUEsK0JBQUcsY0FBQSxPQUFHLFdBQUgsQUFBYSxPQUFNLE1BQU8sV0FBMUIsQUFBcUM7OEJBQXJDO2dDQUFBO0FBQUE7ZUFoQ1gsQUFDSSxBQStCSSxBQUFHLEFBS2Q7Ozs7OztvQkFyRDZCLEEsYUFBQSxBO29CQUFPLEEsZ0JBQUEsQTs7Ozs7aUUsQUFFMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFOc0IsZ0JBQU0sQTs7a0JBQXRCLEEiLCJmaWxlIjoiYXJ0aWNsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi93b3JrL25vZGVibG9nL2Jsb2cyIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\work\\nodeblog\\blog2\\components\\article.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\work\\nodeblog\\blog2\\components\\article.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hYjJmZWE2MTI1NmFmOGQ4ZjkwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcnRpY2xlLmpzP2FmN2NiYjQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7OztBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFGQTtBQUVBO0FBRkE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7Ozs7QUFyREE7QUFBQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==