(window.webpackJsonp=window.webpackJsonp||[]).push([[36,25,40,46],{510:function(t,e,r){"use strict";var n=r(12),o=r(1),c=r(4),l=r(123),d=r(21),f=r(16),h=r(258),v=r(53),x=r(122),m=r(257),y=r(5),w=r(87).f,C=r(41).f,I=r(18).f,_=r(511),k=r(512).trim,O="Number",j=o.Number,P=j.prototype,L=o.TypeError,z=c("".slice),S=c("".charCodeAt),V=function(t){var e=m(t,"number");return"bigint"==typeof e?e:N(e)},N=function(t){var e,r,n,o,c,l,d,code,f=m(t,"number");if(x(f))throw L("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(e=S(f,0))||45===e){if(88===(r=S(f,2))||120===r)return NaN}else if(48===e){switch(S(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=z(f,2)).length,d=0;d<l;d++)if((code=S(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(l(O,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var R,T=function(t){var e=arguments.length<1?0:j(V(t)),r=this;return v(P,r)&&y((function(){_(r)}))?h(Object(e),r,T):e},$=n?w(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;$.length>E;E++)f(j,R=$[E])&&!f(T,R)&&I(T,R,C(j,R));T.prototype=P,P.constructor=T,d(o,O,T)}},511:function(t,e,r){var n=r(4);t.exports=n(1..valueOf)},512:function(t,e,r){var n=r(4),o=r(24),c=r(13),l=r(513),d=n("".replace),f="["+l+"]",h=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),x=function(t){return function(e){var r=c(o(e));return 1&t&&(r=d(r,h,"")),2&t&&(r=d(r,v,"")),r}};t.exports={start:x(1),end:x(2),trim:x(3)}},513:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},515:function(t,e,r){"use strict";r(51),r(29),r(71),r(40),r(72);var n=r(30),o=(r(50),r(9),r(52),r(60),r(73));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={methods:l(l({},Object(o.b)(["countTheme","setAllIndex"])),{},{getVideoInfoFromId:function(t){return this.allVideos.filter((function(video){return video.id==t}))[0]}}),computed:l(l({},Object(o.c)(["allThemes","getSearch","allIndex","allVideos"])),{},{getThemeFromIndex:function(){var t=this;return this.allThemes.filter((function(e){return e.parentId==t.indexMenu&&e.uz.toLowerCase().includes(t.getSearch.toLowerCase())}))},checkChildren:function(){var t=this;return this.allThemes.filter((function(e){return e.id==t.currentIndex&&null!=e.children})).length>0},checkGrandChildren:function(){var t=this;return this.allThemes[this.currentIndex-1].children.filter((function(e){return e.id==t.currentChildrenIndex&&null!=e.children})).length>0},getChildrenFromIndex:function(){var t=this;return this.currentIndex>-1?this.allThemes[this.currentIndex-1].children.filter((function(e){return e.uz.toLowerCase().includes(t.getSearch.toLowerCase())})):[]},getGrandChildrenFromIndex:function(){var t=this;return this.currentChildrenIndex>-1?this.allThemes[this.currentIndex-1].children[this.currentChildrenIndex-1].children.filter((function(e){return e.uz.toLowerCase().includes(t.getSearch.toLowerCase())})):[]},getVideosFromIndex:function(){var t=this;return this.allVideos.filter((function(video){return video.parentid==t.allIndex&&video.title.toLowerCase().includes(t.getSearch.toLowerCase())}))},getRecentlyVideos:function(){var t=this;return this.allVideos.filter((function(video){return("completed"==video.status||"recently"==video.status)&&video.title.toLowerCase().includes(t.getSearch.toLowerCase())}))}})}},516:function(t,e,r){var content=r(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("340f1b15",content,!0,{sourceMap:!1})},535:function(t,e,r){"use strict";r.r(e);r(510),r(38);var n={mixins:[r(515).a],data:function(){return{videoInfo:null,pathVideo:""}},props:{index:Number,isRestart:{type:Boolean,default:!1}},computed:{isIntro:function(){return this.$store.getters.currentStep>=39&&this.$store.getters.currentStep<=41}},mounted:function(){var t=this;this.videoInfo=this.getVideoInfoFromId(this.index),this.pathVideo=this.isRestart?this.videoInfo.restartpath:this.videoInfo.path,setTimeout((function(){t.$refs.vid.classList.remove("not-loaded")}),200),this.$store.dispatch("isShowNextVideo",{show:!1,videoId:-1})},methods:{close:function(){var t=this;this.$refs.vid.classList.add("not-loaded"),setTimeout((function(){t.isRestart?t.$emit("closeRestart"):t.$store.dispatch("showVideoContent",{show:!1,index:-1})}),300)}}},o=(r(537),r(59)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal",style:t.isIntro?"z-index: 1000;":"",on:{click:function(e){return e.target!==e.currentTarget?null:t.close.apply(null,arguments)}}},[r("div",{ref:"vid",staticClass:"modal-cnt not-loaded"},[r("button",{staticClass:"close-btn",attrs:{type:"button"},on:{click:t.close}},[r("i",{staticClass:"fas fa-times fa-xl"})]),t._v(" "),r("video",{staticClass:"video-modal",attrs:{oncontextmenu:"return false;",controls:"",controlsList:"nodownload",src:""==t.pathVideo?"":t.$config.API_URL+t.pathVideo}}),t._v(" "),t.isRestart?t._e():r("div",{staticClass:"btn-group"},[r("button",{staticClass:"training-btn prim disabled-btn"},[t._v("Mashq qilish")]),t._v(" "),r("nuxt-link",{staticClass:"exams-btn prim",attrs:{to:{name:"quiz",query:{id:t.index,gameType:"solo",shop:!0,quizItems:!0}}}},[t._v("Test bajarish")])],1)])])}),[],!1,null,null,null);e.default=component.exports},537:function(t,e,r){"use strict";r(516)},538:function(t,e,r){var n=r(36)(!1);n.push([t.i,".modal{z-index:998;display:flex;justify-content:center;align-items:center;background-color:rgba(17,17,19,.8);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}.close-btn{z-index:999;color:var(--main-color);border:none;background:transparent;width:95%;text-align:right;width:90px;height:90px;position:absolute;top:-25px;right:-25px;border-radius:50%}.close-btn i{position:absolute;top:60%;left:40%;transform:translate(-50%,-50%)}.video-modal{max-width:1000px;border-radius:10px;width:95%}.modal-cnt{display:flex;grid-gap:10px;gap:10px;flex-direction:column;justify-content:center;align-items:center;position:relative;transition:all .2s ease-in!important;opacity:1;width:100%;background:var(--projects-section);padding-bottom:20px;padding-top:50px;border-radius:var(--global-radius);width:90%;overflow:hidden}.modal-cnt.not-loaded{opacity:0;transform:translateY(-50px)}.modal-cnt .prim{border-radius:8px;padding:10px 50px;font-size:20px;margin:20px 40px;border:1px solid var(--bs-gray-500);box-shadow:0 4px 0 -1px var(--bs-gray-300)}.modal-cnt .prim:active{transform:translateY(4px);box-shadow:none}.modal-cnt .training-btn{background:#fff;color:#000;transition:all .2s}.modal-cnt .exams-btn{background:#1f1c2e;box-shadow:0 4px 0 -1px var(--bs-gray-500);color:#fff;transition:all .2s}@media screen and (max-width:720px){.modal-cnt .btn-group{display:contents}.modal-cnt .prim{margin:10px 0}}",""]),t.exports=n},560:function(t,e,r){var content=r(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("7667b189",content,!0,{sourceMap:!1})},602:function(t,e,r){"use strict";r(560)},603:function(t,e,r){var n=r(36)(!1);n.push([t.i,'.top-status[data-v-315c62cb]{border-radius:50%;background-color:#fff;width:60px;height:60px;line-height:57px;text-align:center;position:absolute;top:0;transform:translateY(-50%)}.congratulations[data-v-315c62cb]{color:#00c985;border:3px solid #00c985}.unfortunately[data-v-315c62cb]{color:#ef3c69;border:3px solid #ef3c69}.button-section[data-v-315c62cb]{display:flex;grid-gap:24px;gap:24px;width:100%}.stats-container[data-v-315c62cb]{width:100%;color:var(--text-color);text-align:center;justify-content:space-between}.stats-container .value[data-v-315c62cb]{font-size:28px;margin:0;height:38px;z-index:10}.stats-container .label[data-v-315c62cb]{opacity:.8;font-size:15px;font-feature-settings:"smcp","c2sc";font-variant-caps:all-small-caps;font-weight:700;line-height:13px}.stat-box[data-v-315c62cb]{width:calc(33% - 16px);background-color:var(--app-container);border-radius:8px;height:72px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}.stat-box i[data-v-315c62cb]{font-size:70px;position:absolute;bottom:0;left:0;transform:translate(-10%,20%);opacity:.4}.restart-video-btn[data-v-315c62cb]{flex:1}.restart-video-btn i[data-v-315c62cb]{-webkit-animation:fadeInOut-data-v-315c62cb 1s linear;animation:fadeInOut-data-v-315c62cb 1s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes fadeInOut-data-v-315c62cb{0%{opacity:0}50%{opacity:1}to{opacity:0}}@keyframes fadeInOut-data-v-315c62cb{0%{opacity:0}50%{opacity:1}to{opacity:0}}.restart-btn[data-v-315c62cb]{flex:3;line-height:1}.correct-answers i[data-v-315c62cb]{color:#00c985}.incorrect-answers i[data-v-315c62cb]{color:#ef3c69}.spent-time i[data-v-315c62cb]{color:#8b178b}.accuracy-info-second-row .info-container[data-v-315c62cb]{width:154px;height:72px;padding:12px 16px;justify-content:space-between;align-items:center;flex-grow:1;margin-bottom:4px}.accuracy-info-section[data-v-315c62cb]{width:100%}.icon-wrapper[data-v-315c62cb]{background:linear-gradient(135deg,#f5a623,rgba(245,166,35,.69));width:32px;height:32px;border-radius:11px}.icon-wrapper i[data-v-315c62cb]{color:#fff;margin:25% auto 0}.accuracy-info-second-row[data-v-315c62cb]{color:var(--text-color);display:flex;justify-content:center;align-items:center;margin-top:18px;justify-content:space-between}.accuracy-label[data-v-315c62cb]{font-weight:500;font-size:14px;line-height:15px;color:#969696}.accuracy-bar-wrapper[data-v-315c62cb]{padding:12px 16px}.accuracy-bar-wrapper .accuracy-bar[data-v-315c62cb]{height:12px;margin-bottom:2px;position:relative;margin-top:8px}.accuracy-bar-wrapper .accuracy-success-fill[data-v-315c62cb]{left:0;border-radius:8px 0 0 8px;background-color:#00c985;position:absolute;top:0;width:0;height:16px;transition:width .2s ease-in-out}.accuracy-bar-wrapper .accuracy-danger-fill[data-v-315c62cb]{right:0;border-radius:0 8px 8px 0;background-color:#ef3c69;position:absolute;top:0;width:0;height:16px;transition:width .2s ease-in-out}.accuracy-bar-wrapper .accuracy-label-tooltip[data-v-315c62cb]{align-items:center;padding:5px 3px;position:absolute;width:36px;height:25px;top:-5px;background:var(--main-color);border-radius:8px;z-index:1}.accuracy-bar-wrapper .tooltip-text[data-v-315c62cb]{position:relative;margin:0 auto 0 1px;width:24px;height:15px;font-weight:500;font-size:14px;line-height:15px;color:var(--app-container)}.main-section[data-v-315c62cb]{margin-top:30px}.main-section p[data-v-315c62cb]{padding:0;margin:0;font-size:18px;color:var(--text-color)}.end-block[data-v-315c62cb]{height:100%;padding-top:40px}.game-panel[data-v-315c62cb]{display:flex;flex-direction:column;grid-gap:10px;gap:10px;position:relative;overflow:visible}',""]),t.exports=n},644:function(t,e,r){"use strict";r.r(e);r(51),r(29),r(71),r(40),r(72);var n=r(0),o=r(30),c=(r(15),r(50),r(9),r(73));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{VideoModal:r(535).default},data:function(){return{showRestart:!1,greenColor:"background: linear-gradient(180deg, #00c985 9%, var(--game-panel) 9%, var(--game-panel) 100%);",redColor:"background: linear-gradient(180deg, #ef3c69 9%, var(--game-panel) 9%, var(--game-panel) 100%);",timeSec:0}},methods:{restart:function(){this.$store.dispatch("restartQuiz")},showRestartVideo:function(){this.showRestart=!0},closeRestart:function(){this.showRestart=!1},toNextVideo:function(){this.$store.dispatch("isShowNextVideo",{show:!0,videoId:this.$route.query.id}),this.$router.push("/")}},beforeMount:function(){this.timeSec=this.timerSeconds},computed:d(d({},Object(c.c)(["resultPoint","isBattleQuiz","oldResults","timerSeconds","user","getTitle","quizInfo"])),{},{correctLength:function(){return this.oldResults.filter((function(t,e){return t.incorrectId<0})).length},correctLengthPercent:function(){return Math.round(100*this.correctLength/this.quizInfo.indexes.length)},incorrectLength:function(){return this.oldResults.filter((function(t,e){return t.incorrectId>-1})).length},incorrectLengthPercent:function(){return Math.round(100*this.incorrectLength/this.quizInfo.indexes.length)},isItCorrect:function(){return!!this.isBattleQuiz||this.correctLength>=Math.round(.8*this.quizInfo.indexes.length)},panelColor:function(){return this.isItCorrect?this.greenColor:this.redColor},isCompleted:function(){return!this.isBattleQuiz&&"completed"==this.getTitle.status}}),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isBattleQuiz||!t.isCompleted){e.next=4;break}return e.next=3,t.$store.dispatch("resetPoint");case 3:return e.abrupt("return");case 4:t.isBattleQuiz?t.$store.dispatch("setVideoData",{mode:"setPointOnly",userId:t.user.id,point:t.resultPoint}):t.isItCorrect?t.$store.dispatch("setVideoData",{mode:"setPoint",userId:t.user.id,videoId:t.$route.query.id,point:t.resultPoint,status:"completed"}):t.$store.dispatch("resetPoint");case 5:case"end":return e.stop()}}),e)})))()}},h=(r(602),r(59)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"end-block"},[t.showRestart?r("VideoModal",{attrs:{index:parseInt(t.$route.query.id),isRestart:!0},on:{closeRestart:t.closeRestart}}):t._e(),t._v(" "),r("div",{staticClass:"game-panel",style:t.panelColor},[t.isItCorrect?r("div",{staticClass:"congratulations top-status"},[r("i",{staticClass:"fa-solid fa-check"})]):r("div",{staticClass:"unfortunately top-status"},[r("i",{staticClass:"fa-solid fa-xmark"})]),t._v(" "),r("transition",{attrs:{appear:"",name:"fade"}},[r("div",{staticClass:"main-section"},[r("p",[t._v("Natija")])])]),t._v(" "),r("div",{staticClass:"accuracy-info-section"},[r("transition-group",{attrs:{appear:"",name:"fadeUp"}},[r("div",{key:"f1",staticClass:"accuracy-bar-wrapper"},[r("label",{staticClass:"accuracy-label"},[t._v("Aniqlik")]),t._v(" "),r("div",{staticClass:"accuracy-bar"},[r("div",{staticClass:"accuracy-success-fill",style:"width: calc("+t.correctLengthPercent+"% - 2px);"}),t._v(" "),r("div",{staticClass:"accuracy-danger-fill",style:"width: calc("+t.incorrectLengthPercent+"% - 2px);"}),t._v(" "),r("div",{staticClass:"accuracy-label-tooltip fadeInUp anim-400-duration",style:"left: calc("+t.correctLengthPercent+"% - 18px);"},[r("div",{staticClass:"tooltip-text"},[t._v(t._s(t.correctLengthPercent)+"%")])])])]),t._v(" "),r("div",{key:"f2",staticClass:"accuracy-info-second-row flex-view delay-100"},[r("div",{staticClass:"top-section info-container flex-view"},[r("div",{staticClass:"value-and-title-container flex-view flex-column"},[r("span",{staticClass:"info-title accuracy-label"},[t._v("Point")]),t._v(" "),r("span",{staticClass:"player-score"},[t._v(t._s(t.resultPoint))])]),t._v(" "),r("div",{staticClass:"icon-wrapper score flex-view all-center"},[r("i",{staticClass:"fas fa-coins"})])])])])],1),t._v(" "),r("transition",{attrs:{appear:"",name:"fade"}},[t.isItCorrect?t._e():r("div",{staticClass:"accuracy-label"},[r("p",{staticStyle:{color:"#ef3c69"}},[t._v("Qayta urinib ko'ring :(")])])]),t._v(" "),t.isBattleQuiz?r("div",{staticClass:"button-section"},[r("transition",{attrs:{appear:"",name:"fadeUp"}},[r("button",{staticClass:"primary-game-btn game-btn delay-200 restart-btn",on:{click:t.restart}},[r("i",{staticClass:"fa-solid fa-rotate-left"})])]),t._v(" "),r("transition",{attrs:{appear:"",name:"fadeUp"}},[r("button",{staticClass:"primary-game-btn game-btn delay-200 restart-btn",on:{click:function(e){return t.$router.push("/")}}},[r("i",{staticClass:"fa-solid fa-house"})])])],1):r("div",{staticClass:"button-section"},[r("transition",{attrs:{appear:"",name:"fadeUp"}},[r("button",{staticClass:"primary-game-btn game-btn delay-200 restart-btn",on:{click:t.restart}},[r("i",{staticClass:"fa-solid fa-rotate-left"})])]),t._v(" "),r("transition",{attrs:{appear:"",name:"fadeUp"}},[t.isItCorrect&&!t.isCompleted?r("button",{staticClass:"third-game-btn game-btn delay-200 restart-video-btn",on:{click:t.toNextVideo}},[r("i",{staticClass:"fa-solid fa-forward"})]):r("button",{staticClass:"secondary-game-btn game-btn delay-200 restart-video-btn",on:{click:t.showRestartVideo}},[r("i",{staticClass:"fa-solid fa-play"})])])],1)],1),t._v(" "),r("div",{staticClass:"settings-card game-panel",style:t.panelColor},[t._m(0),t._v(" "),r("transition-group",{staticClass:"stats-container flex-view delay-300",attrs:{tag:"div",appear:"",name:"bounce"}},[r("div",{key:"box1",staticClass:"correct-answers stat-box"},[r("i",{staticClass:"fas fa-check-circle"}),r("p",{staticClass:"value"},[t._v(t._s(t.correctLength))]),r("div",{staticClass:"label"},[t._v("To'g'ri javob")])]),t._v(" "),r("div",{key:"box2",staticClass:"incorrect-answers stat-box"},[r("i",{staticClass:"fas fa-times-circle"}),r("p",{staticClass:"value"},[t._v(t._s(t.incorrectLength))]),r("div",{staticClass:"label"},[t._v("Noto'g'ri javob")])]),t._v(" "),r("div",{key:"box3",staticClass:"spent-time stat-box"},[r("i",{staticClass:"fas fa-stopwatch"}),r("p",{staticClass:"value"},[t._v(t._s(Math.abs(t.timeSec-1.4*t.quizInfo.indexes.length))+" s")]),r("div",{staticClass:"label"},[t._v("Sarflangan vaqt")])])])],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-section"},[r("p",[t._v("Statistika")])])}],!1,null,"315c62cb",null);e.default=component.exports;installComponents(component,{VideoModal:r(535).default})}}]);