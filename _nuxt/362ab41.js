(window.webpackJsonp=window.webpackJsonp||[]).push([[36,22,35],{515:function(t,e,o){var content=o(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("c2a4b902",content,!0,{sourceMap:!1})},516:function(t,e,o){"use strict";o(51),o(29),o(71),o(40),o(72);var n=o(30),r=(o(50),o(9),o(52),o(60),o(73));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={methods:d(d({},Object(r.b)(["countTheme","setAllIndex"])),{},{getVideoInfoFromId:function(t){return this.allVideos.filter((function(video){return video.id==t}))[0]}}),computed:d(d({},Object(r.c)(["allThemes","getSearch","allIndex","allVideos"])),{},{getThemeFromIndex:function(){var t=this;return this.allThemes.filter((function(e){return e.parentId==t.indexMenu&&e.uz.toLowerCase().includes(t.getSearch.toLowerCase())}))},checkChildren:function(){var t=this;return this.allThemes.filter((function(e){return e.id==t.currentIndex&&null!=e.children})).length>0},checkGrandChildren:function(){var t=this;return this.allThemes[this.currentIndex-1].children.filter((function(e){return e.id==t.currentChildrenIndex&&null!=e.children})).length>0},getChildrenFromIndex:function(){var t=this;return this.currentIndex>-1?this.allThemes[this.currentIndex-1].children.filter((function(e){return e.uz.toLowerCase().includes(t.getSearch.toLowerCase())})):[]},getGrandChildrenFromIndex:function(){var t=this;return this.currentChildrenIndex>-1?this.allThemes[this.currentIndex-1].children[this.currentChildrenIndex-1].children.filter((function(e){return e.uz.toLowerCase().includes(t.getSearch.toLowerCase())})):[]},getVideosFromIndex:function(){var t=this;return this.allVideos.filter((function(video){return video.parentId==t.allIndex&&video.title.toLowerCase().includes(t.getSearch.toLowerCase())}))},getRecentlyVideos:function(){var t=this;return this.allVideos.filter((function(video){return("completed"==video.status||"recently"==video.status)&&video.title.toLowerCase().includes(t.getSearch.toLowerCase())}))}})}},517:function(t,e,o){"use strict";o.r(e);var n={components:{LottieAnim:o(122).a},props:{color:{type:String,default:"var(--projects-section);"},width:{type:String,default:"100%"}}},r=(o(524),o(59)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-loader",style:"background-color: var(--projects-section); width: "+t.width+";"},[n("LottieAnim",{staticClass:"swapping-squares-spinner",attrs:{animationData:o(518),loop:!0,autoPlay:!0}})],1)}),[],!1,null,"647df778",null);e.default=component.exports},522:function(t,e,o){var content=o(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("1d862d44",content,!0,{sourceMap:!1})},524:function(t,e,o){"use strict";o(515)},525:function(t,e,o){var n=o(36)(!1);n.push([t.i,".content-loader[data-v-647df778]{-webkit-animation:none!important;animation:none!important;height:100%;z-index:1}.swapping-squares-spinner[data-v-647df778],.swapping-squares-spinner *[data-v-647df778]{box-sizing:border-box}.swapping-squares-spinner[data-v-647df778]{height:50%;width:50%;position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.swapping-squares-spinner .square[data-v-647df778]{height:12.5px;width:12.5px;-webkit-animation-duration:1s;animation-duration:1s;border:2px solid var(--main-color);margin-right:auto;margin-left:auto;position:absolute;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.swapping-squares-spinner .square[data-v-647df778]:first-child{-webkit-animation-name:swapping-squares-animation-child-1-data-v-647df778;animation-name:swapping-squares-animation-child-1-data-v-647df778;-webkit-animation-delay:.5s;animation-delay:.5s}.swapping-squares-spinner .square[data-v-647df778]:nth-child(2){-webkit-animation-name:swapping-squares-animation-child-2-data-v-647df778;animation-name:swapping-squares-animation-child-2-data-v-647df778;-webkit-animation-delay:0ms;animation-delay:0ms}.swapping-squares-spinner .square[data-v-647df778]:nth-child(3){-webkit-animation-name:swapping-squares-animation-child-3-data-v-647df778;animation-name:swapping-squares-animation-child-3-data-v-647df778;-webkit-animation-delay:.5s;animation-delay:.5s}.swapping-squares-spinner .square[data-v-647df778]:nth-child(4){-webkit-animation-name:swapping-squares-animation-child-4-data-v-647df778;animation-name:swapping-squares-animation-child-4-data-v-647df778;-webkit-animation-delay:0ms;animation-delay:0ms}@-webkit-keyframes swapping-squares-animation-child-1-data-v-647df778{50%{transform:translate(150%,150%) scale(2)}}@keyframes swapping-squares-animation-child-1-data-v-647df778{50%{transform:translate(150%,150%) scale(2)}}@-webkit-keyframes swapping-squares-animation-child-2-data-v-647df778{50%{transform:translate(-150%,150%) scale(2)}}@keyframes swapping-squares-animation-child-2-data-v-647df778{50%{transform:translate(-150%,150%) scale(2)}}@-webkit-keyframes swapping-squares-animation-child-3-data-v-647df778{50%{transform:translate(-150%,-150%) scale(2)}}@keyframes swapping-squares-animation-child-3-data-v-647df778{50%{transform:translate(-150%,-150%) scale(2)}}@-webkit-keyframes swapping-squares-animation-child-4-data-v-647df778{50%{transform:translate(150%,-150%) scale(2)}}@keyframes swapping-squares-animation-child-4-data-v-647df778{50%{transform:translate(150%,-150%) scale(2)}}",""]),t.exports=n},541:function(t,e,o){"use strict";o.r(e);var n=o(30),r=(o(504),o(38),o(51),o(29),o(50),o(9),o(71),o(40),o(72),o(2)),c=o(73);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{LottieAnim:o(122).a},props:{cnt:Number,pkey:String,title:String,src:String,isCurrent:Boolean,request:{type:Boolean,default:!1},status:String,userId:String,price:String,bought:Boolean},data:function(){return{isLock:!0,isShowPopover:!0}},mounted:function(){var t=this;(this.bought||parseInt(this.userId)==parseInt(this.$store.getters.user.id)&&"completed"==this.status||this.isCurrent)&&(this.isLock=!1,this.$store.getters.showNextVideo.show&&this.watch()),this.request&&setTimeout((function(){t.snapshotCreated()}),500)},methods:l(l({},Object(c.b)(["showVideoContent"])),{},{watch:function(){this.isLock||this.showVideoContent({show:!0,index:parseInt(this.pkey)})},snapshotCreated:function(){this.$emit("snapshotCreated")},buyVideo:function(){parseInt(this.$store.getters.user.point)<parseInt(this.price)?r.a.$toast.open({message:"Point yetarli emas!",type:"error",position:"top"}):(this.$store.dispatch("buyVideo",{mode:"buy",userId:this.$store.getters.user.id,videoId:parseInt(this.pkey),price:parseInt(this.price)}),this.$refs.lock.play(),this.isShowPopover=!1)},unlock:function(){this.isLock=!1}})},f=(o(545),o(59)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-box-wrapper",attrs:{id:"video-"+t.cnt}},[n("div",{staticClass:"project-box video",staticStyle:{"background-color":"var(--project-box-video)"}},[n("div",{staticClass:"project-box-content-header video"},[t.bought?n("div",{staticClass:"bought-status"},[t._v("\n          Sotilgan\n        ")]):t._e(),t._v(" "),n("img",{ref:"vid",staticClass:"video-wrap",attrs:{src:o(543),oncontextmenu:"return false;",id:"video"+t.pkey}}),t._v(" "),t.isLock?n("div",{staticClass:"both-value"},[n("div",{staticClass:"locked-video"},[n("LottieAnim",{ref:"lock",staticClass:"svg-animation-unlocked",attrs:{animationData:o(523),loop:!1,autoPlay:!1},on:{complete:t.unlock}})],1),t._v(" "),n("p",{staticClass:"box-content-header video",staticStyle:{"font-size":"14px","text-align":"center",position:"initial",width:"auto",transform:"none",color:"var(--app-container)"}},[t._v(t._s(t.title))])]):n("p",{staticClass:"box-content-header video",style:"color: var(--app-container);"},[t._v(t._s(t.title))])]),t._v(" "),t.isLock?n("div",{staticClass:"project-box-footer video"},[n("v-popover",{staticClass:"buy-button-wrapper",attrs:{disabled:!t.isShowPopover,placement:"top"}},[n("button",{staticClass:"days-left buy-video-btn"},[n("div",{staticClass:"price-tag"},[n("img",{attrs:{src:"/_nuxt/assets/images/coin.png",alt:"coin"}}),t._v(" "+t._s(t.price))]),t._v(" "),n("p",[t._v("Ochish")])]),t._v(" "),n("template",{slot:"popover"},[n("p",[t._v("Xaridni tasdiqlash")]),t._v(" "),n("div",{staticClass:"flex-view popover-btns"},[n("button",{staticClass:"popover-primary",attrs:{id:"popover-buy-btn"},on:{click:t.buyVideo}},[t._v("Tasdiqlayman")]),t._v(" "),n("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"popover-secondary"},[t._v("Yopish")])])])],2)],1):n("div",{staticClass:"project-box-footer video"},[n("button",{staticClass:"days-left watch-video-btn",on:{click:t.watch}},[n("i",{staticClass:"fa-solid fa-eye"}),t._v(" Ko'rish\n          "),"completed"==t.status?n("i",{staticClass:"far fa-check-circle checkmark"}):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},545:function(t,e,o){"use strict";o(522)},546:function(t,e,o){var n=o(36),r=o(173),c=o(544),d=n(!1),l=r(c);d.push([t.i,'@font-face{font-family:"mv-boli";src:url('+l+')}.bought-status{position:absolute;top:0;width:100%;border-radius:var(--global-radius);background-color:hsla(0,0%,100%,.342);color:#fff}.popover-btns{grid-gap:10px;gap:10px}.popover-primary{color:#fff;padding:5px 10px;border:none;background-color:#47b3f1;border-radius:8px;box-shadow:0 3px 0 0 #1f6f9e;transition:all .2s}.popover-primary:active{transform:translateY(3px);box-shadow:none}.popover-secondary{color:#000;padding:5px 10px;background-color:#fff;border:1px solid #a7a7a7;border-radius:8px;box-shadow:0 3px 0 0 var(--shadow);transition:all .2s}.popover-secondary:active{transform:translateY(3px);box-shadow:none}.both-value{width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.452);display:flex;flex-direction:column;justify-content:space-evenly}.locked-video{pointer-events:none;width:100%;height:70%;position:relative}.locked-video .svg-animation-unlocked{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:#000}.buy-video-btn{position:relative;padding:6px 8px;cursor:pointer;color:var(--text-color)}.buy-video-btn p{position:absolute;left:55%;top:50%;transform:translate(-50%,-50%)}.price-tag{float:left;color:#fff;padding:2px 8px;font-size:12px;background-color:rgba(34,0,255,.50196);border-radius:var(--global-radius);margin-right:10px}.price-tag img{width:15px}.buy-button-wrapper,.buy-button-wrapper .trigger{width:100%}.video-wrap{width:100%;height:100%;overflow:hidden}.video-wrap img{width:inherit}.watch-video-btn{position:relative;color:var(--text-color)}.checkmark{float:right;position:absolute;right:10px;font-size:20px;top:2px}.project-box.video{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0;overflow:hidden}.project-box-content-header.video{margin:0;position:relative;z-index:0;font-family:"mv-boli"}.project-box-footer.video{padding:16px}.project-box-footer.video:after{width:100%;background-color:var(--app-container);left:0}.box-content-header.video{position:absolute;top:55%;font-size:18px;font-weight:100;left:50%;transform:translate(-50%,-50%);z-index:10;opacity:1;width:92%;text-overflow:ellipsis}@media screen and (max-width:520px){.buy-video-btn p{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}}.project-boxes.jsListView .project-box-footer.video{justify-content:center!important;align-items:center;padding:0 16px;margin-right:0;flex:2;width:100%}.project-boxes.jsListView .project-box-footer.video button{height:50%}.project-boxes.jsListView .project-box.video{justify-content:space-between}.project-boxes.jsListView .project-box{height:100px}.project-boxes.jsListView .project-box-content-header.video{max-width:inherit!important}.project-boxes.jsListView .project-box-content-header.video .video-wrap{height:99%;border-radius:14px}.project-boxes.jsListView .box-content-header.video{text-overflow:auto}',""]),t.exports=d},553:function(t,e,o){var content=o(621);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("a2bd8ef8",content,!0,{sourceMap:!1})},595:function(t,e,o){"use strict";o.r(e);var n=o(541),r=o(516),c={components:{VideosBoxWrapper:n.default},mixins:[r.a],data:function(){return{loader:!0}},methods:{snapshotCreated:function(){this.loader=!1}}},d=(o(620),o(59)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"recently-section projects-section"},[t.loader?o("ContentLoader",{key:"loader",attrs:{color:"var(--projects-section)"}}):t._e(),t._v(" "),o("div",{staticClass:"main-boxes history-boxes"},[o("transition-group",{directives:[{name:"show",rawName:"v-show",value:!t.loader,expression:"!loader"}],staticClass:"project-boxes jsGridView",attrs:{name:"fade",tag:"div"}},t._l(t.getRecentlyVideos,(function(video,e){return o("VideosBoxWrapper",{key:video.id,attrs:{userId:video.userId,status:video.status,request:e==t.getRecentlyVideos.length-1,isCurrent:!0,pkey:video.id,title:video.title,src:video.path},on:{snapshotCreated:t.snapshotCreated}})})),1)],1)],1)}),[],!1,null,"345d222d",null);e.default=component.exports;installComponents(component,{ContentLoader:o(517).default})},620:function(t,e,o){"use strict";o(553)},621:function(t,e,o){var n=o(36)(!1);n.push([t.i,".history-boxes[data-v-345d222d]{height:100%;padding:32px}",""]),t.exports=n}}]);