(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{559:function(t,e,o){var content=o(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("8cdf3e9a",content,!0,{sourceMap:!1})},600:function(t,e,o){"use strict";o(559)},601:function(t,e,o){var r=o(36)(!1);r.push([t.i,".screen-gameover[data-v-5c02228d]{position:fixed;background-color:var(--app-container);z-index:999}.screen-gameover[data-v-5c02228d],.shutter-half[data-v-5c02228d],.shutter-wrapper[data-v-5c02228d]{width:100%;height:100%}.shutter-half[data-v-5c02228d]{position:absolute;left:0;background-color:var(--shutter-half);transition:all .5s ease-in-out}.up[data-v-5c02228d]{top:-100%}.down[data-v-5c02228d]{bottom:-100%}p[data-v-5c02228d]{font-size:50px;text-align:center;color:var(--text-color);font-family:sans-serif;position:absolute;top:50%;transform:translateY(-50%);width:100%;opacity:0;transition:opacity .2s ease}",""]),t.exports=r},643:function(t,e,o){"use strict";o.r(e);o(38);var r={mounted:function(){var t=this;this.$store.dispatch("cancelTimer"),setTimeout((function(){t.$refs.up.style.top="0%",t.$refs.down.style.bottom="0%"}),100),setTimeout((function(){t.$refs.title.style.opacity="1"}),600),setTimeout((function(){t.$refs.title.style.opacity="0",t.$refs.up.style.top="-100%",t.$refs.down.style.bottom="-100%",setTimeout((function(){t.$emit("closeOverScreen")}),500)}),1300)}},n=(o(600),o(59)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"screen-gameover"},[o("div",{staticClass:"shutter-wrapper"},[o("div",{ref:"up",staticClass:"shutter-half up"}),t._v(" "),o("p",{ref:"title"},[t._v("Yakunlandi")]),t._v(" "),o("div",{ref:"down",staticClass:"shutter-half down"})])])}),[],!1,null,"5c02228d",null);e.default=component.exports}}]);