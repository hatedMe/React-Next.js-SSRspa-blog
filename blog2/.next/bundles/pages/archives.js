
          window.__NEXT_REGISTER_PAGE('/archives', function() {
            var comp = module.exports=webpackJsonp([6],{35:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(6),n=l(r),c=a(2),s=l(c),u=a(3),i=l(u),f=a(7),d=l(f),o=a(8),m=l(o),p=a(1),h=l(p),v=a(19),E=(l(v),a(48)),N=l(E),_=a(49),y=l(_),k=a(36),g=l(k),x=function(e){function t(e){return(0,s.default)(this,t),(0,d.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,m.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return h.default.createElement("div",{className:"main-center"},h.default.createElement(N.default,{title:this.props.title}),h.default.createElement(y.default,null),h.default.createElement("section",{className:"main"},h.default.createElement(g.default,{infos:this.props.infos}),this.props.children))}}]),t}(h.default.Component);t.default=x},36:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(6),n=l(r),c=a(2),s=l(c),u=a(3),i=l(u),f=a(7),d=l(f),o=a(8),m=l(o),p=a(1),h=l(p),v=function(e){function t(e){return(0,s.default)(this,t),(0,d.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,m.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return h.default.createElement("header",{className:"article-header"},h.default.createElement("h1",null,this.props.infos),h.default.createElement("p",{className:"text-muted"},"dsfdgfd"))}}]),t}(h.default.Component);t.default=v},37:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(15),n=l(r),c=a(17),s=l(c),u=a(6),i=l(u),f=a(2),d=l(f),o=a(3),m=l(o),p=a(7),h=l(p),v=a(8),E=l(v),N=a(19),_=(l(N),a(1)),y=l(_),k=function(e){function t(e){return(0,d.default)(this,t),(0,h.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e))}return(0,E.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.articleId,l=e.createTime,r=e.category,n=e.summary;l=new Date(l).toLocaleString();return y.default.createElement("article",{className:"article article-type-post"},y.default.createElement("div",{className:"article-header"},y.default.createElement("h1",null,y.default.createElement("a",{className:"article-title",href:"../article?id="+a},t),y.default.createElement("a",{className:"article-meta category"},r))),y.default.createElement("p",{className:"article-meta"},y.default.createElement("span",{className:"article-date"},y.default.createElement("i",{className:"fa fa-calendar-check-o"}),y.default.createElement("a",{href:"../article?id="+a,className:"article-date"}),y.default.createElement("time",null,l))),y.default.createElement("p",{className:"article-summary"},n),y.default.createElement("p",null,y.default.createElement("a",{className:"btn",href:"../article?id="+a},"阅读全文")))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,s.default)(n.default.mark(function e(t){t.query,t.pathname;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}},e,this)}));return e}()}]),t}(y.default.Component);t.default=k},370:function(e,t,a){e.exports=a(371)},371:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(15),n=l(r),c=a(17),s=l(c),u=a(6),i=l(u),f=a(2),d=l(f),o=a(3),m=l(o),p=a(7),h=l(p),v=a(8),E=l(v),N=a(1),_=l(N),y=a(35),k=l(y),g=a(37),x=(l(g),function(e){function t(e){(0,d.default)(this,t);var a=(0,h.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return a.state={},a}return(0,E.default)(t,e),(0,m.default)(t,[{key:"componentWillMount",value:function(){function e(){return t.apply(this,arguments)}var t=(0,s.default)(n.default.mark(function e(){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){return _.default.createElement(k.default,{infos:"归档",title:"可惜"},_.default.createElement("div",{className:"content article-list archive"},_.default.createElement("div",{className:"collection-title"},_.default.createElement("h2",{className:"archive-year"},"2017")),_.default.createElement("div",{className:"archive-post"},_.default.createElement("span",{className:"archive-post-time"},"Aug 28"),_.default.createElement("span",{className:"archive-post-title"},_.default.createElement("a",{href:"/2017/08/28/i18next/",className:"archive-post-link"},"i18next"))),_.default.createElement("div",{className:"archive-post"},_.default.createElement("span",{className:"archive-post-time"},"Jul 7"),_.default.createElement("span",{className:"archive-post-title"},_.default.createElement("a",{href:"/2017/07/07/non-root-user-config-for-ssh-key-login/",className:"archive-post-link"},"错误排查：非ROOT用户使用密钥进行ssh登录提示输入密码"))),_.default.createElement("div",{className:"archive-post"},_.default.createElement("span",{className:"archive-post-time"},"Jun 21"),_.default.createElement("span",{className:"archive-post-title"},_.default.createElement("a",{href:"/2017/06/21/use-editorconfig/",className:"archive-post-link"},"使用EditorConfig"))),_.default.createElement("div",{className:"collection-title"},_.default.createElement("h2",{className:"archive-year"},"2016")),_.default.createElement("div",{className:"archive-post"},_.default.createElement("span",{className:"archive-post-time"},"Aug 28"),_.default.createElement("span",{className:"archive-post-title"},_.default.createElement("a",{href:"/2017/08/28/i18next/",className:"archive-post-link"},"i18next"))),_.default.createElement("div",{className:"archive-post"},_.default.createElement("span",{className:"archive-post-time"},"Jul 7"),_.default.createElement("span",{className:"archive-post-title"},_.default.createElement("a",{href:"/2017/07/07/non-root-user-config-for-ssh-key-login/",className:"archive-post-link"},"错误排查：非ROOT用户使用密钥进行ssh登录提示输入密码"))),_.default.createElement("div",{className:"archive-post"},_.default.createElement("span",{className:"archive-post-time"},"Jun 21"),_.default.createElement("span",{className:"archive-post-title"},_.default.createElement("a",{href:"/2017/06/21/use-editorconfig/",className:"archive-post-link"},"使用EditorConfig")))))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,s.default)(n.default.mark(function e(t){var a=t.query;t.pathname;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{id:a});case 1:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_.default.Component));t.default=x}},[370]);
            return { page: comp.default }
          })
        