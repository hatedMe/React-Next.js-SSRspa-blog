webpackJsonp([2],{235:function(t,e,r){function n(t){r(386)}var o=r(117)(r(369),r(401),n,"data-v-5d0323ae",null);t.exports=o.exports},237:function(t,e,r){"use strict";e.__esModule=!0;var n=r(118),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(i,a){try{var u=e[i](a),c=u.value}catch(t){return void r(t)}if(!u.done)return o.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}return n("next")})}}},238:function(t,e,r){t.exports=r(239)},239:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(240),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},240:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),u=new p(n||[]);return a._invoke=s(t,r,u),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(r,o,i,a){var u=n(t[r],t,o);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},a)}a(u.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function s(t,e,r){var o=O;return function(i,a){if(o===R)throw new Error("Generator is already running");if(o===k){if("throw"===i)throw a;return v()}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=f(u,r);if(c){if(c===P)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===O)throw o=k,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=R;var s=n(t,e,r);if("normal"===s.type){if(o=r.done?k:j,s.arg===P)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=k,r.method="throw",r.arg=s.arg)}}}function f(t,e){var r=t.iterator[e.method];if(r===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,f(t,e),"throw"===e.method))return P;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return P}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,P;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,P):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,P)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function d(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(m.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:y,done:!0}}var y,g=Object.prototype,m=g.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",_=w.asyncIterator||"@@asyncIterator",L=w.toStringTag||"@@toStringTag",b="object"==typeof t,E=e.regeneratorRuntime;if(E)return void(b&&(t.exports=E));E=e.regeneratorRuntime=b?t.exports:{},E.wrap=r;var O="suspendedStart",j="suspendedYield",R="executing",k="completed",P={},F={};F[x]=function(){return this};var N=Object.getPrototypeOf,G=N&&N(N(d([])));G&&G!==g&&m.call(G,x)&&(F=G);var S=a.prototype=o.prototype=Object.create(F);i.prototype=S.constructor=a,a.constructor=i,a[L]=i.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,L in t||(t[L]="GeneratorFunction")),t.prototype=Object.create(S),t},E.awrap=function(t){return{__await:t}},u(c.prototype),c.prototype[_]=function(){return this},E.AsyncIterator=c,E.async=function(t,e,n,o){var i=new c(r(t,e,n,o));return E.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(S),S[L]="Generator",S[x]=function(){return this},S.toString=function(){return"[object Generator]"},E.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},E.values=d,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=y),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),u=m.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,P):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),P},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),h(r),P}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;h(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:d(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=y),P}}}(function(){return this}()||Function("return this")())},369:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(238),o=r.n(n),i=r(118),a=r.n(i),u=r(237),c=r.n(u),s=r(396),f=r.n(s);e.default={components:{testChild:f.a},name:"test",beforeMount:function(){},mounted:function(){var t=this;return c()(o.a.mark(function e(){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new a.a(function(t,e){setTimeout(function(){t({test:[{name:1,age:2},{name:[{_index:"string~~~"}],age:4}]})},1e3)});case 2:r=e.sent,t.$data.msg=r,console.log(r);case 5:case"end":return e.stop()}},e,t)}))()},data:function(){return{msg:{}}}}},370:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{message:{type:null,required:!0}}}},375:function(t,e,r){e=t.exports=r(227)(!1),e.push([t.i,"",""])},378:function(t,e,r){e=t.exports=r(227)(!1),e.push([t.i,"",""])},383:function(t,e,r){var n=r(375);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(228)("607d1ec6",n,!0,{})},386:function(t,e,r){var n=r(378);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(228)("db1a96aa",n,!0,{})},396:function(t,e,r){function n(t){r(383)}var o=r(117)(r(370),r(398),n,"data-v-4171a63e",null);t.exports=o.exports},398:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v("\n        "+t._s(t.message.test instanceof Array?t.message.test[1].name[0]._index:"加载中。。。")+"\n    ")])])},staticRenderFns:[]}},401:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",[t._v("456")]),t._v(" "),r("testChild",{attrs:{message:t.msg}})],1)},staticRenderFns:[]}}});