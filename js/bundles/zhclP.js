var pageComponent=webpackJsonppageComponent([47],{851:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=o(i),c=n(0),p=o(c);n(18),n(19),n(20),n(4),n(10),n(13),n(21),n(5),n(22),n(9),n(23),n(7),n(2),n(8),n(3),n(14),n(17),n(24),n(25),n(11),n(16),n(12),n(26),n(6),n(15),n(27),n(28),n(29),n(30),n(31),n(32),n(33);var s=n(852),f=o(s),d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(u.default);p.default.register(d,f.default),t.default=d},852:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.zhclP=void 0;var i,u=n(1),c=o(u),p=n(0),s=o(p);goog.loadModule(function(e){function t(e,t,o){var i=function(){r("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&l(t),a("h6"),r("article",null,null,"id","1"),r("p"),u({data:[{id:"data1",data:[87.4]}]},null,o),a("p"),c({code:"{call ClayGaugeChart.render}\n    {param data: [\n        [\n            'id': 'data1',\n            'data': [87.4]\n        ]\n    ] /}\n{/call}",mode:"soy"},null,o),c({code:"<GaugeChart\n    data={[\n        {\n            id: 'data1',\n            data: [87.4]\n        }\n    ]}\n/>",mode:"jsx"},null,o),a("article"),r("input",null,null,"type","hidden","value",e.page.title),a("input"),r("input",null,null,"type","hidden","value",e.site.title),a("input")};p(n.$$assignDefaults({content:i},e),null,o)}goog.module("zhclP.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,a=o.elementClose,l=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),u=(o.attr,s.default.getTemplate("ClayGaugeChart.incrementaldom","render")),c=s.default.getTemplate("ElectricCode.incrementaldom","render"),p=s.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="zhclP.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(c.default);s.default.register(f,i),t.zhclP=f,t.templates=i,t.default=i}},[851]);