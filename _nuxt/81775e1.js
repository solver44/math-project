(window.webpackJsonp=window.webpackJsonp||[]).push([[21,29],{517:function(t,e,n){var content=n(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("e529cf22",content,!0,{sourceMap:!1})},527:function(t,e,n){"use strict";n.r(e);n(51),n(29),n(50),n(9),n(71),n(40),n(72);var o=n(30),r=(n(38),n(73));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{},data:function(){return{toggle:-1}},mounted:function(){var t=this;setTimeout((function(){t.$store.getters.showNextVideo.show&&t.showSub(0)}),1e3)},methods:l(l({},Object(r.b)(["showMenu"])),{},{showSub:function(t){var e=this;this.toggle=t,this.$emit("menuClick",t),setTimeout((function(){e.showMenu(!1)}),200)}})},h=(n(539),n(59)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("div",{staticClass:"menu-panel"},[n("transition",{attrs:{name:"fade"}},[n("div",{key:"1",staticClass:"top-menu"},[n("button",{class:"menu-sub-button "+(0==t.toggle?"active":""),attrs:{id:"first-sub-menu",type:"button"},on:{click:function(e){return t.showSub(0)}}},[t._v("Algebra")]),t._v(" "),n("button",{class:"menu-sub-button "+(1==t.toggle?"active":""),attrs:{id:"second-sub-menu",type:"button"},on:{click:function(e){return t.showSub(1)}}},[t._v("Geometriya")])])])],1)])}),[],!1,null,null,null);e.default=component.exports},539:function(t,e,n){"use strict";n(517)},540:function(t,e,n){var o=n(36)(!1);o.push([t.i,'#header{position:fixed;height:110px;width:100%;left:0;top:0;z-index:10}.header-menu input{font-size:16px;border:none;text-align:center;width:100%}.header-menu{height:50px;position:relative;-webkit-overflow-scrolling:touch;padding:0;width:auto;white-space:nowrap}.menu-header{z-index:10;border-bottom:1px solid #e4e5e6;width:100%;background-color:#fff;box-shadow:0 2px 2px 0 rgba(50,50,50,.1)}.top-menu{display:flex;flex-direction:column;height:100%;width:100%}.menu-sub-button{width:100%;height:inherit;background:transparent;border:none;text-decoration:none;font-size:30px;color:var(--main-color);border-top:1px solid var(--message-box-border);font-family:"DM Sans";transition:padding .1s ease}.menu-sub-button:hover{background-color:var(--message-box-hover)!important;border-top-color:var(--link-color-hover)!important}.menu-sub-button.active,.menu-sub-button:hover+.menu-sub-button{border-top-color:var(--link-color-hover)}.menu-sub-button.active{padding-right:50px;text-decoration:underline;color:var(--light-font);background-color:var(--message-box-hover)}.menu-sub-button.active+.menu-sub-button{border-top-color:var(--link-color-hover)}.menu{height:100%;display:flex;flex-direction:column;overflow-y:auto}.menu-panel{height:100%;width:100%}.sub-menu{list-style-type:none;margin:0;padding:0}.sub-menu li{cursor:pointer;padding:20px 40px;font-size:16px;text-align:center;background-color:var(--sub-button-hover)}.sub-menu li:first-child{padding:10px;background-color:rgba(255,241,119,.123)}',""]),t.exports=o},581:function(t,e,n){"use strict";n.r(e);n(51),n(29),n(50),n(9),n(71),n(40),n(72);var o=n(30),r=n(527),c=n(73);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{}},components:{Menu:r.default},methods:d(d({},Object(c.b)(["showMenu"])),{},{clickMenu:function(t){this.$emit("clickMenu",t),this.isIntro&&13==this.currentStep&&this.$store.dispatch("nextStep")},close:function(){this.showMenu(!1)}}),computed:d(d({},Object(c.c)(["isShowMenu","currentStep"])),{},{isIntro:function(){return this.currentStep>=12&&this.currentStep<14}})},f=n(59),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"menu-section "+(t.isShowMenu?"show":""),style:t.isIntro?"z-index: 1000;":""},[n("button",{staticClass:"menu-close",on:{click:t.close}},[n("svg",{staticClass:"feather feather-x-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),t._v(" "),n("line",{attrs:{x1:"15",y1:"9",x2:"9",y2:"15"}}),t._v(" "),n("line",{attrs:{x1:"9",y1:"9",x2:"15",y2:"15"}})])]),t._v(" "),t._m(0),t._v(" "),n("Menu",{on:{menuClick:t.clickMenu}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects-section-header"},[n("p",[t._v("Bo'limlar")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Menu:n(527).default})}}]);