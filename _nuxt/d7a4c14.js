(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{531:function(t,e,n){var content=n(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("156f4092",content,!0,{sourceMap:!1})},566:function(t,e,n){"use strict";n(531)},567:function(t,e,n){var d=n(36)(!1);d.push([t.i,".scale-enter[data-v-b2d45d16],.scale-leave-to[data-v-b2d45d16]{transform:scale(0) translate(-50%,110%)!important;opacity:0}.scale-enter-active[data-v-b2d45d16],.scale-leave-active[data-v-b2d45d16]{transition:all .3s ease-in-out!important}.scale-enter-to[data-v-b2d45d16],.scale-leave[data-v-b2d45d16]{transform:scale(1) translate(-50%,110%)!important;opacity:1}@media screen and (max-width:600px){.dropdown-body[data-v-b2d45d16]{left:-10%!important}}.dropdown-body[data-v-b2d45d16]{display:flex;flex-direction:column;grid-gap:10px;gap:10px;border-radius:20px;padding:10px;position:absolute;bottom:0;left:50%;transform:scale(1) translate(-50%,110%);background-color:var(--projects-section);z-index:101;box-shadow:2px 2px 10px 0 rgba(0,0,0,.1)}.dropdown-btn[data-v-b2d45d16]{border:none;color:var(--text-color);background:transparent;margin:0;padding:5px 15px}.dropdown-btn[data-v-b2d45d16]:active{background-color:rgba(0,0,0,.1);border-radius:15px}",""]),t.exports=d},578:function(t,e,n){"use strict";n.r(e);var d={props:{items:Array,parent:String},data:function(){return{parentD:null}},mounted:function(){this.parentD=document.querySelector(this.parent)},methods:{clicked:function(t){this.$emit("clicked",t)},hide:function(t){this.$el.contains(t.target)||this.parentD.contains(t.target)||this.$emit("hide")}},created:function(){window.addEventListener("click",this.hide)},destroyed:function(){window.removeEventListener("click",this.hide)}},o=(n(566),n(59)),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-body"},t._l(t.items,(function(e,d){return n("button",{key:e,staticClass:"dropdown-btn",on:{click:function(e){return t.clicked(d)}}},[t._v(t._s(e))])})),0)}),[],!1,null,"b2d45d16",null);e.default=component.exports}}]);