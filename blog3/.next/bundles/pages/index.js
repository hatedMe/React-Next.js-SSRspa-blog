module.exports=__NEXT_REGISTER_PAGE("/",function(){var e=webpackJsonp([2],{391:function(e,t,r){e.exports=r(392)},392:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(22);var a=r.n(n);var o=r(1);var c=r.n(o);var i=r(33);var l=r.n(i);var u=r(102);var s=r.n(u);var f=r(103);var p=r.n(f);var v=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=function(e){y(t,e);function t(e){h(this,t);return m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}v(t,[{key:"render",value:function e(){var t=this.props,r=t.createTime,n=t.articleId,a=t.title,o=t.labels;var i=p()(r).format("MMM Do");return c.a.createElement("div",{className:"archive-post"},c.a.createElement("span",{className:"archive-post-time"},i),c.a.createElement("span",{className:"archive-post-title"},c.a.createElement(l.a,{as:"/article/"+n,href:"/article?id="+n},c.a.createElement("a",{className:"archive-post-link"},a))))}}]);return t}(c.a.Component);var d=b;var E=r(66);var w=r(67);var _=r(68);var O=r(101);var j=r.n(O);var g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var P=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function N(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var c=t[a](o);var i=c.value}catch(e){r(e);return}if(!c.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function T(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var C=function(e){T(t,e);function t(e){k(this,t);return x(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}P(t,[{key:"render",value:function e(){var t=this.props.data.data;return c.a.createElement("div",{className:"page"},c.a.createElement(E["a"],null),c.a.createElement("div",{id:"content"},c.a.createElement("div",{id:"primary"},c.a.createElement("section",{id:"archive",className:"archive"},c.a.createElement("div",{className:"main"},c.a.createElement("header",{className:"article-header"},c.a.createElement("h1",null)),c.a.createElement("div",{className:"content article-list archive"},c.a.createElement("div",{className:"collection-title"},c.a.createElement("h2",{className:"archive-year"},"2017")),this.props.data.map(function(e,t){console.log(e,t);return c.a.createElement(d,g({key:t},e))}))))),c.a.createElement(w["a"],null)),c.a.createElement(_["a"],null))}}],[{key:"getInitialProps",value:function(){var e=N(a.a.mark(function e(t){var r=t.query,n=t.pathname;var o,c;return a.a.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:t.next=2;return fetch("http://localhost:4040/api/getAllArticle");case 2:o=t.sent;t.next=5;return o.json();case 5:c=t.sent;return t.abrupt("return",{data:c.data});case 7:case"end":return t.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]);return t}(c.a.Component);var M=t["default"]=C}},[391]);return{page:e.default}});