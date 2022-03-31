(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{422:function(t,a,s){"use strict";s.r(a);var e=s(56),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mutation相关api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutation相关api"}},[t._v("#")]),t._v(" Mutation相关API")]),t._v(" "),s("p",[t._v("用于表示一次“变更”行为")]),t._v(" "),s("h2",{attrs:{id:"创建mutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建mutation"}},[t._v("#")]),t._v(" 创建Mutation")]),t._v(" "),s("h3",{attrs:{id:"restmutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restmutation"}},[t._v("#")]),t._v(" restMutation")]),t._v(" "),s("p",[t._v("在Class模式的Model上定义一个Rest Mutation")]),t._v(" "),s("h3",{attrs:{id:"userestmutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#userestmutation"}},[t._v("#")]),t._v(" useRestMutation")]),t._v(" "),s("p",[t._v("在CompositionAPI模式的Model上定义一个Rest Mutation")]),t._v(" "),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("h3",{attrs:{id:"url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" url")]),t._v(" "),s("p",[t._v("字符串或者返回字符串的一个函数。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/live/26391'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("或")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("variables"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/live/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("variables"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果使用的是url函数，则函数中第一个参数为当前mutation定义的variables，第二个函数为当前vue-router的$route；")]),t._v(" "),s("p",[t._v("如果为Class模式的Model，则this指向为当前model。")]),t._v(" "),s("h3",{attrs:{id:"method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#method"}},[t._v("#")]),t._v(" method")]),t._v(" "),s("p",[t._v("可选参数，http请求发送的类型，类型同"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP request methods"),s("OutboundLink")],1),t._v("，默认值为"),s("code",[t._v("GET")])]),t._v(" "),s("h3",{attrs:{id:"headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[t._v("#")]),t._v(" headers")]),t._v(" "),s("p",[t._v("可选参数，http请求发送时所携带的headers。")]),t._v(" "),s("p",[t._v("其中需要关注的部分为"),s("code",[t._v("content-type")]),t._v("，请求发送时会根据"),s("code",[t._v("content-type")]),t._v("的不同值来决定如何处理"),s("code",[t._v("variables")])]),t._v(" "),s("h2",{attrs:{id:"实例属性-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例属性-方法"}},[t._v("#")]),t._v(" 实例属性/方法")]),t._v(" "),s("h3",{attrs:{id:"class模式的model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class模式的model"}},[t._v("#")]),t._v(" Class模式的model")]),t._v(" "),s("h4",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("h5",{attrs:{id:"data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" data")]),t._v(" "),s("p",[t._v("返回当前mutation的查询结果，其结果为响应式数据（经由Vue.js的reactive函数包装，解构时请注意）")]),t._v(" "),s("h5",{attrs:{id:"loading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading"}},[t._v("#")]),t._v(" loading")]),t._v(" "),s("p",[t._v("布尔值，当前mutation是否处于请求状态，其结果为响应式数据。")]),t._v(" "),s("h4",{attrs:{id:"error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[t._v("#")]),t._v(" error")]),t._v(" "),s("p",[t._v("如果当前mutation查询发生错误，返回当前mutation的查询错误信息，其结果为响应式数据；否则为null")]),t._v(" "),s("h4",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("h5",{attrs:{id:"mutate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutate"}},[t._v("#")]),t._v(" mutate")]),t._v(" "),s("p",[t._v("发起mutation请求")]),t._v(" "),s("blockquote",[s("p",[t._v("注意mutate返回值为"),s("code",[t._v("Promise<void>")]),t._v("，仅用于判断当前命令式调用的请求是否完成，具体结果需要从data/error信息中获取")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("beta")]),t._v("功能，后续可能会有改动，进行一定程度封装")])]),t._v(" "),s("h3",{attrs:{id:"compositionapi模式的model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compositionapi模式的model"}},[t._v("#")]),t._v(" CompositionAPI模式的Model")]),t._v(" "),s("h4",{attrs:{id:"属性-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性-2"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("h5",{attrs:{id:"info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[t._v("#")]),t._v(" info")]),t._v(" "),s("p",[t._v("返回当前mutation的查询结果，其结果为响应式数据（经由Vue.js的reactive函数包装，解构时请注意），其中包含三个属性：")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("data：返回当前mutation的查询结果")]),t._v(" "),s("li",[t._v("loading：布尔值，当前mutation是否处于请求状态，其结果为响应式数据。")]),t._v(" "),s("li",[t._v("error：如果当前mutation查询发生错误，返回当前mutation的查询错误信息，其结果为响应式数据；否则为null")])])]),t._v(" "),s("h4",{attrs:{id:"方法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法-2"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("h5",{attrs:{id:"mutate-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutate-2"}},[t._v("#")]),t._v(" mutate")]),t._v(" "),s("p",[t._v("发起mutation请求")]),t._v(" "),s("blockquote",[s("p",[t._v("注意mutate返回值为"),s("code",[t._v("Promise<void>")]),t._v("，仅用于判断当前命令式调用的请求是否完成，具体结果需要从data/error信息中获取")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("beta")]),t._v("功能，后续可能会有改动，进行一定程度封装")])])])}),[],!1,null,null,null);a.default=r.exports}}]);