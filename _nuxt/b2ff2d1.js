(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{534:function(t,e,o){var content=o(590);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("e529cf22",content,!0,{sourceMap:!1})},547:function(t,e,o){"use strict";o.r(e);o(51),o(29),o(50),o(9),o(71),o(40),o(72);var n=o(30),r=(o(38),o(73));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{},data:function(){return{toggle:-1}},mounted:function(){var t=this;setTimeout((function(){t.$store.getters.showNextVideo.show&&t.showSub(0)}),1e3)},methods:l(l({},Object(r.b)(["showMenu"])),{},{showSub:function(t){var e=this;this.toggle=t,this.$emit("menuClick",t),setTimeout((function(){e.showMenu(!1)}),200)}})},h=(o(589),o(59)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu"},[o("div",{staticClass:"menu-panel"},[o("transition",{attrs:{name:"fade"}},[o("div",{key:"1",staticClass:"top-menu"},[o("button",{class:"menu-sub-button "+(0==t.toggle?"active":""),attrs:{id:"first-sub-menu",type:"button"},on:{click:function(e){return t.showSub(0)}}},[t._v("Algebra")]),t._v(" "),o("button",{class:"menu-sub-button "+(1==t.toggle?"active":""),attrs:{id:"second-sub-menu",type:"button"},on:{click:function(e){return t.showSub(1)}}},[t._v("Geometriya")])])])],1)])}),[],!1,null,null,null);e.default=component.exports},589:function(t,e,o){"use strict";o(534)},590:function(t,e,o){var n=o(36)(!1);n.push([t.i,'#header{position:fixed;height:110px;width:100%;left:0;top:0;z-index:10}.header-menu input{font-size:16px;border:none;text-align:center;width:100%}.header-menu{height:50px;position:relative;-webkit-overflow-scrolling:touch;padding:0;width:auto;white-space:nowrap}.menu-header{z-index:10;border-bottom:1px solid #e4e5e6;width:100%;background-color:#fff;box-shadow:0 2px 2px 0 rgba(50,50,50,.1)}.top-menu{display:flex;flex-direction:column;height:100%;width:100%}.menu-sub-button{width:100%;height:inherit;background:transparent;border:none;text-decoration:none;font-size:30px;color:var(--main-color);border-top:1px solid var(--message-box-border);font-family:"DM Sans";transition:padding .1s ease}.menu-sub-button:hover{background-color:var(--message-box-hover)!important;border-top-color:var(--link-color-hover)!important}.menu-sub-button.active,.menu-sub-button:hover+.menu-sub-button{border-top-color:var(--link-color-hover)}.menu-sub-button.active{padding-right:50px;text-decoration:underline;color:var(--light-font);background-color:var(--message-box-hover)}.menu-sub-button.active+.menu-sub-button{border-top-color:var(--link-color-hover)}.menu{height:100%;display:flex;flex-direction:column;overflow-y:auto}.menu-panel{height:100%;width:100%}.sub-menu{list-style-type:none;margin:0;padding:0}.sub-menu li{cursor:pointer;padding:20px 40px;font-size:16px;text-align:center;background-color:var(--sub-button-hover)}.sub-menu li:first-child{padding:10px;background-color:rgba(255,241,119,.123)}',""]),t.exports=n}}]);