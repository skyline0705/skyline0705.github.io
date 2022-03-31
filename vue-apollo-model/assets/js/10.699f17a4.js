(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{423:function(t,s,e){"use strict";e.r(s);var a=e(56),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"model相关api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#model相关api"}},[t._v("#")]),t._v(" Model相关API")]),t._v(" "),e("h2",{attrs:{id:"创建model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建model"}},[t._v("#")]),t._v(" 创建Model")]),t._v(" "),e("h3",{attrs:{id:"basemodel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basemodel"}},[t._v("#")]),t._v(" BaseModel")]),t._v(" "),e("blockquote",[e("p",[t._v("Class模式定义Model")])]),t._v(" "),e("p",[t._v("每一个Model构造函数都应继承自BaseModel；")]),t._v(" "),e("p",[t._v("其中BaseModel会提供getModelInstance的protected实例方法：")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseModel")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" getModelInstance"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GetModelInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"createmodel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createmodel"}},[t._v("#")]),t._v(" createModel")]),t._v(" "),e("blockquote",[e("p",[t._v("CompositionAPI模式定义Model")])]),t._v(" "),e("p",[t._v("其中BaseModel会提供getModelInstance的protected实例方法：")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FNModelConstructor"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    getModelInstance"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GetModelInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token generic-function"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createModel")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FNModelConstructor"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FNModelCreator"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"getmodelinstance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getmodelinstance"}},[t._v("#")]),t._v(" getModelInstance")]),t._v(" "),e("p",[t._v("当你需要在一个Model中访问全局存在的另一个Model实例的时候，请使用getModelInstance。\ngetModelInstance并不会创建一个新的Model实例，而是将当前全局已实例化的Model实例返回")]),t._v(" "),e("h2",{attrs:{id:"使用model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用model"}},[t._v("#")]),t._v(" 使用Model")]),t._v(" "),e("h3",{attrs:{id:"usemodel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usemodel"}},[t._v("#")]),t._v(" useModel")]),t._v(" "),e("p",[t._v("每一个Model在组件中使用的时候，都是全局单例的存在；且Model的生命周期跟随组件生命周期保持一致。")]),t._v(" "),e("p",[t._v("当使用useModel时，vue-apollo-model会在全局store中创建一个新的Model单例，或更新Model单例的引用计数；\n当使用Model的组件销毁后，vue-apollo-model会对计数进行更新；\n当引用计数为0时，vue-apollo-model会销毁对应Model实例。")])])}),[],!1,null,null,null);s.default=r.exports}}]);