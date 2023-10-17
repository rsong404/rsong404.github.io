(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{565:function(s,v,_){"use strict";_.r(v);var t=_(2),i=Object(t.a)({},(function(){var s=this,v=s.$createElement,_=s._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h2",{attrs:{id:"性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[s._v("#")]),s._v(" ✔️性能优化")]),s._v(" "),_("h3",{attrs:{id:"操作方面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#操作方面"}},[s._v("#")]),s._v(" ⭕️操作方面")]),s._v(" "),_("ol",[_("li",[_("p",[s._v("主要耗时用在了请求方面，如果可以，尽量减少请求。一些不常更新的资源可以缓存起来，比如放在sessionStorage,vuex等都可，每次需要的时候先尝试访问这些，如果不存在再发送请求")])]),s._v(" "),_("li",[_("p",[s._v("善用委托（利用冒泡原理），比如一些多个点击事件等可以将事件绑定再父元素身上")])]),s._v(" "),_("li",[_("p",[s._v("减少一些涉及重排重绘的 DOM 操作，比如如果需要多次修改一个元素的位置信息的话可以用过类的形似添加，多次读取位置信息时可以保持变量，不用每次都读取相同的值，动画之类的可以用transform等")])]),s._v(" "),_("li",[_("p",[s._v("善用防抖和节流（resize，scroll，input）。")])]),s._v(" "),_("li",[_("p",[s._v("使用路由懒加载，放在所有文件被打包成一个js文件。路由懒加载能分成多个按需加载")])]),s._v(" "),_("li",[_("p",[s._v("使用一些缓存，比如多使用计算属性，将一些数据不怎么变化的组件用 keep-alive 内置组件进行缓存起来")])])]),s._v(" "),_("h3",{attrs:{id:"资源方面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#资源方面"}},[s._v("#")]),s._v(" ⭕️资源方面")]),s._v(" "),_("ol",[_("li",[_("p",[s._v("一些不怎么重要的css样式不要使用内联形式，js放在body底部，如果放在头部，可以给script标签加个 defer 属性，这样就不会阻塞HTML的加载了")])]),s._v(" "),_("li",[_("p",[s._v("对代码和资源进行压缩，如css、js、图片等资源")])]),s._v(" "),_("li",[_("p",[s._v("一些小图如果能用字符图标代替的话就不要用图片")])]),s._v(" "),_("li",[_("p",[s._v("按需引入，不如一些组件库，工具库之类的不要全部引入而是按需引入")])]),s._v(" "),_("li",[_("p",[s._v("一些静态资源和外链等尽量用 CDN 加速")])]),s._v(" "),_("li",[_("p",[s._v("使用 HTTP2协议（速度更快，2解决了协议头部阻塞的问题，听说HTTP3都要来了）")])])]),s._v(" "),_("h2",{attrs:{id:"单页面首屏加载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单页面首屏加载"}},[s._v("#")]),s._v(" ✔️单页面首屏加载")]),s._v(" "),_("ol",[_("li",[_("p",[s._v("使用路由懒加载，放在所有文件被打包成一个js文件。路由懒加载能分成多个按需加载")])]),s._v(" "),_("li",[_("p",[s._v("一些不怎么重要的css样式不要使用内联形式，js放在body底部，如果放在头部，可以给script标签加个 defer 属性，这样就不会阻塞HTML的加载了")])]),s._v(" "),_("li",[_("p",[s._v("对代码和资源进行压缩，如css、js、图片等资源")])]),s._v(" "),_("li",[_("p",[s._v("一些小图如果能用字符图标代替的话就不要用图片")])]),s._v(" "),_("li",[_("p",[s._v("按需引入，不如一些组件库，工具库之类的不要全部引入而是按需引入")])]),s._v(" "),_("li",[_("p",[s._v("一些静态资源和外链等尽量用 CDN 加速")])]),s._v(" "),_("li",[_("p",[s._v("使用 HTTP2协议（速度更快，2解决了协议头部阻塞的问题，听说HTTP3都要来了）")])])])])}),[],!1,null,null,null);v.default=i.exports}}]);