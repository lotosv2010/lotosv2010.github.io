(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{455:function(n,s,a){"use strict";a.r(s);var e=a(2),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"知识点一-预解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识点一-预解释"}},[n._v("#")]),n._v(" 知识点一 预解释")]),n._v(" "),s("h3",{attrs:{id:"预解释-变量提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预解释-变量提升"}},[n._v("#")]),n._v(" 预解释(变量提升)")]),n._v(" "),s("ul",[s("li",[s("p",[n._v("当浏览器加载HTML页面的时候，首先会提供一个共全局JS代码执行的环境--\x3e全局作用域( "),s("code",[n._v("global/window")]),n._v(")")])]),n._v(" "),s("li",[s("p",[n._v("预解释：在当前的作用域中，JS代码执行之前，浏览器首先会默认的把所有带 "),s("code",[n._v("var")]),n._v("  和 "),s("code",[n._v("function")]),n._v(" 的进行提前声明( "),s("code",[n._v("declare")]),n._v(")或定义( "),s("code",[n._v("defined")]),n._v(")")])])]),n._v(" "),s("ol",[s("li",[s("ol",[s("li",[n._v("声明：告诉浏览器在全局作用域中有一个 "),s("code",[n._v("xxx")]),n._v(" 变量了，例： "),s("code",[n._v("var xxx")]),n._v(" ，如果一个变量只是声明了但是没有赋值，默认的值为 "),s("code",[n._v("undefined")])]),n._v(" "),s("li",[n._v("定义：给我们的变量进行赋值，例： "),s("code",[n._v("xxx = 12")])]),n._v(" "),s("li",[s("code",[n._v("var")]),n._v("：在预解释的时候只是提前的声明")]),n._v(" "),s("li",[s("code",[n._v("function")]),n._v("：在预解释的时候提前的声明+定义都完成了")])])])]),n._v(" "),s("ul",[s("li",[s("p",[n._v("预解释只发生在当前作用域下，例如：开始只对window下的进行预解释，只有函数执行的时候才会对函数中的进行预解释")])]),n._v(" "),s("li",[s("p",[n._v("JS中内存分类")])])]),n._v(" "),s("ol",[s("li",[s("ol",[s("li",[n._v("栈内存：用来提供一个供JS代码执行的环境--\x3e作用域(全局作用域/私有作用域)")]),n._v(" "),s("li",[n._v("堆内存：用来存储引用数据类型的值 --\x3e对象存储的是属性名和属性值，函数存储的是代码字符串")])])])]),n._v(" "),s("ul",[s("li",[n._v("预解释的时候不管条件是否成立，都要把带 "),s("code",[n._v("var")]),n._v(" 的进行提前声明，例如")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("if (!('num' in window)) {\n  var num = 12\n}\nconsole.log(num) // ---\x3e undefined\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br")])]),s("ul",[s("li",[s("p",[n._v('预解释的时候只预解释 "=" 左边的，右边的是值，不参与预解释')])]),n._v(" "),s("li",[s("p",[n._v("匿名函数之函数表达式：把函数定义的部分当做一个值赋值给我们的变量/元素的某一个事件")])])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// 案例一\nfn() // ---\x3e ok\nfunction fn () {\n  console.log('ok')\n}\nfn() // ---\x3e ok\n\n// 案例二\n// fn2() // ---\x3e Uncaught TypeError: fn2 is not a function\nvar fn2 = function () {\n  console.log('ok')\n}\nfn2() // ---\x3e ok\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br")])]),s("ul",[s("li",[n._v("自执行函数：自执行函数定义的那个function在全局作用域下不进行预解释，当代码执行到这个位置的时候定义和执行一起完成")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("(function(num){})(100)\n~function(num){}(100)\n+function(num){}(100)\n-function(num){}(100)\n!function(num){}(100)\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("ul",[s("li",[n._v("函数体中 "),s("code",[n._v("return")]),n._v(" 下面的代码虽然不再执行了，但是需要进行预解释；"),s("code",[n._v("return")]),n._v(" 后面跟着的都是我们返回的值，所以不进行预解释")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("function fn() {\n  // 预解释：var num\n    console.log(num) // ---\x3e undefined\n  return function() {}\n  var num = 100\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br")])]),s("ul",[s("li",[n._v("在预解释的时候，如果名字已经声明过了，不需要重新的声明，但是需要重新赋值；JS中如果变量的名字和函数的名字重复了，也算冲突")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("fn() // --\x3e 2\nfunction fn() {\n  console.log('1') \n}\nfn() // --\x3e 2\nvar fn = 10 // --\x3e fn = 10\nfn() // --\x3e Uncaught TypeError: fn is not a function\nfunction fn() {\n  console.log('2') \n}\nfn() // 不执行\n\n// 分析：\n//  window预解释：\n//      声明+定义 fn = xxxfff111\n//      声明 var fn;(不需要重新声明)\n//      声明(不需要重新声明)+定义 fn = xxxfff222\n//      --\x3e fn = xxxfff222\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("h2",{attrs:{id:"案例分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例分析"}},[n._v("#")]),n._v(" 案例分析")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("console.log(total)\nvar total = 0\n\nfunction fn(num1, num2) {\n  console.log(total)\n  var total = num1 + num2\n  console.log(total)\n}\n\nfn(100, 200)\nconsole.log(total)\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br")])]),s("p",[n._v("分析上面代码的执行情况：")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/738210/1597108506961-73310d03-5fed-4411-93aa-cd501eef72b5.png?x-oss-process=image%2Fresize%2Cw_1500",alt:"image.png"}})])])}),[],!1,null,null,null);s.default=t.exports}}]);