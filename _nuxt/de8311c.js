(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{551:function(e,t,n){var content=n(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("19c6e734",content,!0,{sourceMap:!1})},590:function(e,t,n){"use strict";n(551)},591:function(e,t,n){var o=n(36)(!1);o.push([e.i,".point-count{position:absolute;right:20px;font-size:20px;color:var(--text-color);display:table;height:100%}.point-count p{margin:0;display:table-cell;vertical-align:middle}.question-index-wrap{border-radius:8px;background:var(--more-list-bg);color:var(--text-color);padding:0 15px;display:flex;align-items:center}.question-index-wrap p{margin:0}.header-container{z-index:101;padding:8px;color:var(--main-color);background-color:var(--app-container);font-size:16px;transition:transform .5s ease-in-out}.actions-wrapper{justify-content:space-between;align-items:center;transition:margin .3s ease-in}.actions-container,.actions-wrapper{display:flex}.actions-container{grid-gap:20px;gap:20px;flex:1;position:relative}.game-header-btn{text-align:center;width:45px;height:45px;font-size:20px;flex-shrink:0;border:none;color:#fff;background-color:var(--header-btn);border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:background-color .2s ease-out}.game-header-btn:hover{background-color:var(--link-color-hover)}.game-header-btn i{color:var(--link-color)}@media screen and (max-width:576px){.header-container{padding:12px 8px}}",""]),e.exports=o},637:function(e,t,n){"use strict";n.r(t);n(51),n(29),n(50),n(9),n(71),n(40),n(72);var o=n(30),r=(n(38),n(73));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={props:{showEndBlock:Boolean,pauseIcon:Boolean},watch:{resultPoint:function(){var e=this;this.showPoint=!0,this.point=this.currentPoint,setTimeout((function(){e.showPoint=!1}),2e3)}},data:function(){return{full:!1,isPause:!1,showPoint:!1,point:0}},methods:{fullscreen:function(){this.full=!this.full,document.fullScreenElement&&null!==document.fullScreenElement||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()},pause:function(){this.isPause=!0,this.$emit("pauseClick")},proceed:function(){this.isPause=!1,this.$emit("proceedClick")}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.c)(["startGameInfo","isBattleQuiz","quizInfo","isPresentation","currentPoint","resultPoint"]))},d=l,m=(n(590),n(59)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-container"},[n("div",{staticClass:"actions-wrapper"},[!e.startGameInfo.start||e.showEndBlock?n("div",{staticClass:"actions-container"},[n("nuxt-link",{staticClass:"pause-icon-container game-header-btn",attrs:{to:"/"}},[n("i",{staticClass:"fas fa-times"})])],1):n("div",{staticClass:"actions-container"},[e.isPause&&e.pauseIcon?n("button",{staticClass:"pause-icon-container game-header-btn",on:{click:e.proceed}},[n("i",{staticClass:"fas fa-play"})]):n("button",{staticClass:"pause-icon-container game-header-btn",on:{click:e.pause}},[n("i",{staticClass:"fas fa-pause"})]),e._v(" "),n("transition",{attrs:{tag:"div",name:"fade"}},[e.isPresentation?e._e():n("div",{key:"question-board",staticClass:"question-index-wrap"},[n("p",[e._v(e._s(e.quizInfo.currentIndex+1+" / "+e.quizInfo.indexes.length))])])]),e._v(" "),n("transition",{attrs:{name:"fadeInLeft"}},[e.showPoint?n("div",{staticClass:"point-count"},[n("p",[e._v("+"+e._s(e.point))])]):e._e()])],1),e._v(" "),n("div",{staticClass:"fullscreen-btn-container"},[n("button",{staticClass:"fullscreen-btn game-header-btn",attrs:{title:"Fullscreen"},on:{click:e.fullscreen}},[n("i",{class:"fas fa-"+(e.full?"compress":"expand")})])])])])}),[],!1,null,null,null);t.default=component.exports}}]);