(window.webpackJsonp=window.webpackJsonp||[]).push([[31,25,40],{510:function(t,e,r){"use strict";var n=r(12),o=r(1),c=r(4),l=r(123),f=r(21),d=r(16),h=r(258),v=r(53),y=r(122),x=r(257),I=r(5),_=r(87).f,m=r(41).f,O=r(18).f,N=r(511),w=r(512).trim,j="Number",E=o.Number,k=E.prototype,C=o.TypeError,S=c("".slice),P=c("".charCodeAt),A=function(t){var e=x(t,"number");return"bigint"==typeof e?e:V(e)},V=function(t){var e,r,n,o,c,l,f,code,d=x(t,"number");if(y(d))throw C("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=w(d),43===(e=P(d,0))||45===e){if(88===(r=P(d,2))||120===r)return NaN}else if(48===e){switch(P(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=S(d,2)).length,f=0;f<l;f++)if((code=P(c,f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(l(j,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var T,F=function(t){var e=arguments.length<1?0:E(A(t)),r=this;return v(k,r)&&I((function(){N(r)}))?h(Object(e),r,F):e},$=n?_(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;$.length>M;M++)d(E,T=$[M])&&!d(F,T)&&O(F,T,m(E,T));F.prototype=k,k.constructor=F,f(o,j,F)}},511:function(t,e,r){var n=r(4);t.exports=n(1..valueOf)},512:function(t,e,r){var n=r(4),o=r(24),c=r(13),l=r(513),f=n("".replace),d="["+l+"]",h=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),y=function(t){return function(e){var r=c(o(e));return 1&t&&(r=f(r,h,"")),2&t&&(r=f(r,v,"")),r}};t.exports={start:y(1),end:y(2),trim:y(3)}},513:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},651:function(t,e,r){"use strict";r.r(e);r(51),r(29),r(71),r(40),r(72);var n=r(30),o=(r(50),r(9),r(510),r(38),r(73));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={computed:l(l({},Object(o.c)(["allVideos","allIndex","showNextVideo","colors"])),{},{getPercentage:function(){var t=this,e=100*this.allVideos.filter((function(e){return e.parentid[0]==t.pkey&&"completed"==e.status})).length/this.allVideos.filter((function(e){return e.parentid[0]==t.pkey})).length;return e?Math.round(e):0}}),props:{pkey:{type:Number},title:{type:String},theme:{type:String},colorIndex:{type:Number,default:0}},data:function(){return{percent:0}},methods:{sign:function(t){this.$store.dispatch("setAllIndex",this.pkey+"."),this.$emit("showSecondBox",[t,this.colorIndex])},signAuto:function(t){this.$emit("showSecondBox",[t,this.colorIndex])}},mounted:function(){var t=this;if(this.showNextVideo.show&&this.allIndex[0]==this.pkey)this.signAuto(this.pkey);else{this.percent=this.getPercentage;var e=this;setTimeout((function(){e.$refs.progress.style.width=t.percent+"%"}),0)}}},d=r(59),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-box-wrapper",attrs:{id:"theme-"+t.pkey}},[r("div",{staticClass:"project-box",style:"background-color: "+t.colors[t.colorIndex].first+";"},[r("div",{staticClass:"project-box-header"},[r("span",[t._v(t._s(t.pkey))])]),t._v(" "),r("div",{staticClass:"project-box-content-header"},[r("p",{staticClass:"box-content-header"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"box-content-subheader"},[t._v(t._s(t.theme))])]),t._v(" "),r("div",{staticClass:"box-progress-wrapper"},[r("p",{staticClass:"box-progress-header"},[t._v("Jarayon")]),t._v(" "),r("div",{staticClass:"box-progress-bar"},[r("span",{ref:"progress",staticClass:"box-progress",style:"background-color: "+t.colors[t.colorIndex].second+";"})]),t._v(" "),r("p",{staticClass:"box-progress-percentage"},[t._v(t._s(t.percent)+"%")])]),t._v(" "),r("div",{staticClass:"project-box-footer"},[r("button",{staticClass:"days-left",style:"color: "+t.colors[t.colorIndex].second+";",on:{click:function(e){return t.sign(t.pkey)}}},[t._v("\n        Ochish\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);