(window.webpackJsonp=window.webpackJsonp||[]).push([[46,25,40],{510:function(t,e,r){"use strict";var n=r(12),o=r(1),c=r(4),l=r(123),d=r(21),f=r(16),h=r(258),m=r(53),x=r(122),v=r(257),I=r(5),w=r(87).f,y=r(41).f,C=r(18).f,O=r(511),N=r(512).trim,j="Number",T=o.Number,_=T.prototype,k=o.TypeError,E=c("".slice),S=c("".charCodeAt),V=function(t){var e=v(t,"number");return"bigint"==typeof e?e:L(e)},L=function(t){var e,r,n,o,c,l,d,code,f=v(t,"number");if(x(f))throw k("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=N(f),43===(e=S(f,0))||45===e){if(88===(r=S(f,2))||120===r)return NaN}else if(48===e){switch(S(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=E(f,2)).length,d=0;d<l;d++)if((code=S(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(l(j,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var F,P=function(t){var e=arguments.length<1?0:T(V(t)),r=this;return m(_,r)&&I((function(){O(r)}))?h(Object(e),r,P):e},R=n?w(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),A=0;R.length>A;A++)f(T,F=R[A])&&!f(P,F)&&C(P,F,y(T,F));P.prototype=_,_.constructor=P,d(o,j,P)}},511:function(t,e,r){var n=r(4);t.exports=n(1..valueOf)},512:function(t,e,r){var n=r(4),o=r(24),c=r(13),l=r(513),d=n("".replace),f="["+l+"]",h=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),x=function(t){return function(e){var r=c(o(e));return 1&t&&(r=d(r,h,"")),2&t&&(r=d(r,m,"")),r}};t.exports={start:x(1),end:x(2),trim:x(3)}},513:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},515:function(t,e,r){"use strict";r(51),r(29),r(71),r(40),r(72);var n=r(30),o=(r(50),r(9),r(52),r(60),r(73));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={methods:l(l({},Object(o.b)(["countTheme","setAllIndex"])),{},{getVideoInfoFromId:function(t){return this.allVideos.filter((function(video){return video.id==t}))[0]}}),computed:l(l({},Object(o.c)(["allThemes","getSearch","allIndex","allVideos"])),{},{getThemeFromIndex:function(){var t=this;return this.allThemes.filter((function(e){return e.parentId==t.indexMenu&&e.uz.toLowerCase().includes(t.getSearch.toLowerCase())}))},checkChildren:function(){var t=this;return this.allThemes.filter((function(e){return e.id==t.currentIndex&&null!=e.children})).length>0},checkGrandChildren:function(){var t=this;return this.allThemes[this.currentIndex-1].children.filter((function(e){return e.id==t.currentChildrenIndex&&null!=e.children})).length>0},getChildrenFromIndex:function(){var t=this;return this.currentIndex>-1?this.allThemes[this.currentIndex-1].children.filter((function(e){return e.uz.toLowerCase().includes(t.getSearch.toLowerCase())})):[]},getGrandChildrenFromIndex:function(){var t=this;return this.currentChildrenIndex>-1?this.allThemes[this.currentIndex-1].children[this.currentChildrenIndex-1].children.filter((function(e){return e.uz.toLowerCase().includes(t.getSearch.toLowerCase())})):[]},getVideosFromIndex:function(){var t=this;return this.allVideos.filter((function(video){return video.parentid==t.allIndex&&video.title.toLowerCase().includes(t.getSearch.toLowerCase())}))},getRecentlyVideos:function(){var t=this;return this.allVideos.filter((function(video){return("completed"==video.status||"recently"==video.status)&&video.title.toLowerCase().includes(t.getSearch.toLowerCase())}))}})}},516:function(t,e,r){var content=r(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("340f1b15",content,!0,{sourceMap:!1})},535:function(t,e,r){"use strict";r.r(e);r(510),r(38);var n={mixins:[r(515).a],data:function(){return{videoInfo:null,pathVideo:""}},props:{index:Number,isRestart:{type:Boolean,default:!1}},computed:{isIntro:function(){return this.$store.getters.currentStep>=39&&this.$store.getters.currentStep<=41}},mounted:function(){var t=this;this.videoInfo=this.getVideoInfoFromId(this.index),this.pathVideo=this.isRestart?this.videoInfo.restartpath:this.videoInfo.path,setTimeout((function(){t.$refs.vid.classList.remove("not-loaded")}),200),this.$store.dispatch("isShowNextVideo",{show:!1,videoId:-1})},methods:{close:function(){var t=this;this.$refs.vid.classList.add("not-loaded"),setTimeout((function(){t.isRestart?t.$emit("closeRestart"):t.$store.dispatch("showVideoContent",{show:!1,index:-1})}),300)}}},o=(r(537),r(59)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal",style:t.isIntro?"z-index: 1000;":"",on:{click:function(e){return e.target!==e.currentTarget?null:t.close.apply(null,arguments)}}},[r("div",{ref:"vid",staticClass:"modal-cnt not-loaded"},[r("button",{staticClass:"close-btn",attrs:{type:"button"},on:{click:t.close}},[r("i",{staticClass:"fas fa-times fa-xl"})]),t._v(" "),r("video",{staticClass:"video-modal",attrs:{oncontextmenu:"return false;",controls:"",controlsList:"nodownload",src:""==t.pathVideo?"":t.$config.API_URL+t.pathVideo}}),t._v(" "),t.isRestart?t._e():r("div",{staticClass:"btn-group"},[r("button",{staticClass:"training-btn prim disabled-btn"},[t._v("Mashq qilish")]),t._v(" "),r("nuxt-link",{staticClass:"exams-btn prim",attrs:{to:{name:"quiz",query:{id:t.index,gameType:"solo",shop:!0,quizItems:!0}}}},[t._v("Test bajarish")])],1)])])}),[],!1,null,null,null);e.default=component.exports},537:function(t,e,r){"use strict";r(516)},538:function(t,e,r){var n=r(36)(!1);n.push([t.i,".modal{z-index:998;display:flex;justify-content:center;align-items:center;background-color:rgba(17,17,19,.8);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}.close-btn{z-index:999;color:var(--main-color);border:none;background:transparent;width:95%;text-align:right;width:90px;height:90px;position:absolute;top:-25px;right:-25px;border-radius:50%}.close-btn i{position:absolute;top:60%;left:40%;transform:translate(-50%,-50%)}.video-modal{max-width:1000px;border-radius:10px;width:95%}.modal-cnt{display:flex;grid-gap:10px;gap:10px;flex-direction:column;justify-content:center;align-items:center;position:relative;transition:all .2s ease-in!important;opacity:1;width:100%;background:var(--projects-section);padding-bottom:20px;padding-top:50px;border-radius:var(--global-radius);width:90%;overflow:hidden}.modal-cnt.not-loaded{opacity:0;transform:translateY(-50px)}.modal-cnt .prim{border-radius:8px;padding:10px 50px;font-size:20px;margin:20px 40px;border:1px solid var(--bs-gray-500);box-shadow:0 4px 0 -1px var(--bs-gray-300)}.modal-cnt .prim:active{transform:translateY(4px);box-shadow:none}.modal-cnt .training-btn{background:#fff;color:#000;transition:all .2s}.modal-cnt .exams-btn{background:#1f1c2e;box-shadow:0 4px 0 -1px var(--bs-gray-500);color:#fff;transition:all .2s}@media screen and (max-width:720px){.modal-cnt .btn-group{display:contents}.modal-cnt .prim{margin:10px 0}}",""]),t.exports=n}}]);