(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17779f76"],{"13ec":function(t,e,a){"use strict";var o=a("da3a"),n=a.n(o);n.a},"1d1c":function(t,e,a){var o=a("23e7"),n=a("83ab"),s=a("37e8");o({target:"Object",stat:!0,forced:!n,sham:!n},{defineProperties:s})},"1dde":function(t,e,a){var o=a("d039"),n=a("b622"),s=a("60ae"),r=n("species");t.exports=function(t){return s>=51||!o((function(){var e=[],a=e.constructor={};return a[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,a){"use strict";var o=a("23e7"),n=a("b727").filter,s=a("d039"),r=a("1dde"),i=r("filter"),c=i&&!s((function(){[].filter.call({length:-1,0:1},(function(t){throw t}))}));o({target:"Array",proto:!0,forced:!i||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"7a82":function(t,e,a){var o=a("23e7"),n=a("83ab"),s=a("9bf2");o({target:"Object",stat:!0,forced:!n,sham:!n},{defineProperty:s.f})},"99af":function(t,e,a){"use strict";var o=a("23e7"),n=a("d039"),s=a("e8b5"),r=a("861d"),i=a("7b0b"),c=a("50c4"),d=a("8418"),f=a("65f0"),u=a("1dde"),l=a("b622"),v=a("60ae"),_=l("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",g=v>=51||!n((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),b=u("concat"),m=function(t){if(!r(t))return!1;var e=t[_];return void 0!==e?!!e:s(t)},w=!g||!b;o({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,o,n,s,r=i(this),u=f(r,0),l=0;for(e=-1,o=arguments.length;e<o;e++)if(s=-1===e?r:arguments[e],m(s)){if(n=c(s.length),l+n>p)throw TypeError(h);for(a=0;a<n;a++,l++)a in s&&d(u,l,s[a])}else{if(l>=p)throw TypeError(h);d(u,l++,s)}return u.length=l,u}})},b0c0:function(t,e,a){var o=a("83ab"),n=a("9bf2").f,s=Function.prototype,r=s.toString,i=/^\s*function ([^ (]*)/,c="name";!o||c in s||n(s,c,{configurable:!0,get:function(){try{return r.call(this).match(i)[1]}catch(t){return""}}})},b477:function(t,e,a){t.exports=a.p+"img/d2s1hdsm.75dcd884.png"},b64b:function(t,e,a){var o=a("23e7"),n=a("7b0b"),s=a("df75"),r=a("d039"),i=r((function(){s(1)}));o({target:"Object",stat:!0,forced:i},{keys:function(t){return s(n(t))}})},c4be:function(t,e,a){},da3a:function(t,e,a){},dbb4:function(t,e,a){var o=a("23e7"),n=a("83ab"),s=a("56ef"),r=a("fc6a"),i=a("06cf"),c=a("8418");o({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,a,o=r(t),n=i.f,d=s(o),f={},u=0;while(d.length>u)a=n(o,e=d[u++]),void 0!==a&&c(f,e,a);return f}})},e439:function(t,e,a){var o=a("23e7"),n=a("d039"),s=a("fc6a"),r=a("06cf").f,i=a("83ab"),c=n((function(){r(1)})),d=!i||c;o({target:"Object",stat:!0,forced:d,sham:!i},{getOwnPropertyDescriptor:function(t,e){return r(s(t),e)}})},e621:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.datas.goods_info?o("div",{staticClass:"goodsinfo"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"back"},[o("a",{attrs:{href:"javascript:history.go(-1)"}}),o("h3",[t._v(t._s(t.datas.goods_info.goods_name))])]),o("div",{staticClass:"backheight"}),o("img",{staticClass:"good_img",attrs:{src:t.datas.goods_image,alt:""}}),o("div",{staticClass:"title"},[o("h3",[t._v(t._s(t.datas.goods_info.goods_name))]),o("span",{staticClass:"price"},[t._v(t._s(t.datas.goods_info.goods_price)+"/年 【全年/12期】")])]),t._m(0),o("ul",{staticClass:"detail"},[o("li",[o("span",[t._v("杂志名称：")]),o("p",[t._v(t._s(t.datas.goods_info.zazhi_name))])]),o("li",[o("span",[t._v("发刊周期：")]),o("p",[t._v(t._s(t.datas.goods_info.zazhi_cycle))])]),o("li",[o("span",[t._v("全年期数：")]),o("p",[t._v(t._s(t.datas.goods_info.zazhi_items))])]),o("li",[o("span",[t._v("出版社：")]),o("p",[t._v(t._s(t.datas.goods_info.zazhi_public))])]),o("li",[o("span",[t._v("刊号：")]),o("p",[t._v(t._s(t.datas.goods_info.zazhi_ser))])]),o("li",[o("span",[t._v("配送次数：")]),o("p",[t._v(t._s(t.datas.goods_info.zazhi_times))])])]),o("img",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{src:a("b477"),alt:""}}),o("h3",{staticClass:"introduce"},[t._v("商品介绍")]),t._m(1),o("Add",{nativeOn:{click:function(e){return t.showPopup(e)}}}),o("van-popup",{staticStyle:{height:"80%"},attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("div",{staticClass:"top"},[o("img",{attrs:{src:t.datas.goods_image}}),o("div",{staticClass:"top-detail"},[o("h3",[t._v(t._s(t.datas.goods_info.goods_name))]),o("span",[t._v("¥"+t._s(t.datas.goods_info.goods_price))])])]),o("div",{staticClass:"center"},[o("ul",[o("li",[o("span",[t._v("起刊：")]),t._l(t.datas.goods_info.goodsqikailist,(function(e,a){return o("a",{key:a,ref:"active",refInFor:!0,attrs:{href:"javascript:;"},on:{click:function(e){return t.secStart(a)}}},[t._v(t._s(e))])}))],2),o("li",[o("span",[t._v("订数：")]),t._l(3,(function(e,a){return o("a",{key:a,ref:"active2",refInFor:!0,attrs:{href:"javascript:;"},on:{click:function(e){return t.secYear(a)}}},[t._v(t._s(e)+"年")])}))],2)])]),o("div",{staticClass:"buycount"},[o("span",[t._v("购买数量：")]),o("van-stepper",{attrs:{min:"1",integer:"","input-width":"100px","button-size":"25px"},model:{value:t.CarGoodInfo.buyCount,callback:function(e){t.$set(t.CarGoodInfo,"buyCount",e)},expression:"CarGoodInfo.buyCount"}})],1),o("ul",{staticClass:"add"},[o("li",[o("i"),o("span",[t._v("客服")])]),o("li",[o("a",{attrs:{href:"javascript:;"},on:{click:function(e){return e.stopPropagation(),t.addCarInfo(t.CarGoodInfo)}}},[t._v("加入购物车")])]),o("li",[o("i",[o("em",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.count>0,expression:"this.$store.state.count > 0 ? true : false"}]},[t._v(t._s(this.$store.state.count))])]),o("span",[t._v("购物车")])])])])],1):t._e()},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"discount"},[a("span",[t._v("促销")]),a("i",[t._v("满送")]),a("p",[t._v("领888元优惠券+满包邮=双重优惠")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"introduction"},[a("h3",[t._v("杂志简介")]),a("p",[t._v("《HBRC哈佛商业评论中文版》哈佛商学院标志性刊物，传播工商管理领域中最前沿的思想理论。( Harvard Business Review，简称 HBR )创建于1922年，是哈佛商学院的标志性杂志。建立之初，它的使命就是致力于改进管理实践。发展90年后，HBR已经成为先进管理理念的发源地，致力于给全世界的专业人士提供缜密的管理见解和最好的管理实践，并对他们及其机构产生积极的影响。目前，HBR在全世界有10种语言的11个授权版本,包括在台湾地区发行的繁体字版和2012年7月起在大陆地区出版的简体中文版。")]),a("h3",[t._v("杂志社简介")]),a("p",[t._v("作为哈佛大学商学院的附属机构，哈佛商学院出版社更是具有相当强的使命感，从某种程度上来说，哈佛商学院出版社兼具了部分学校的职能作为知识力量的载体，它旨在给最多的人带去最优秀、最前沿的管理理念，让全世界更多无法在哈佛课堂中学习的读者能直接接触哈佛深邃、先进的管理理念和管理知识。")])])}];a("a4d3"),a("99af"),a("4de4"),a("4160"),a("b0c0"),a("1d1c"),a("7a82"),a("e439"),a("dbb4"),a("b64b"),a("159b");function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addcar"},[a("ul",{staticClass:"add"},[t._m(0),t._m(1),a("li",[a("i",[a("em",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.count>0,expression:"this.$store.state.count > 0 ? true : false"}]},[t._v(t._s(this.$store.state.count))])]),a("span",[t._v("购物车")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("i"),a("span",[t._v("客服")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("加入购物车")])])}],c={name:"addcar",data:function(){return{}},methods:{}},d=c,f=(a("13ec"),a("2877")),u=Object(f["a"])(d,r,i,!1,null,"27f927fd",null),l=u.exports,v=a("2f62");function _(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h={name:"goodsinfo",data:function(){return{datas:"",isShow:!0,scrollH:"",show:!1,CarGoodInfo:{user:"",id:"",name:"",img:"",price:0,startDate:"",orderYearCount:"",buyCount:1,sec:!0}}},methods:p({showPopup:function(){this.show=!0},secStart:function(t){this.$refs.active.forEach((function(t){return t.className=""})),this.$refs.active[t].className="active",this.CarGoodInfo.startDate=this.$refs.active[t].innerHTML},secYear:function(t){this.$refs.active2.forEach((function(t){return t.className=""})),this.$refs.active2[t].className="active",this.CarGoodInfo.orderYearCount=this.$refs.active2[t].innerHTML}},Object(v["b"])(["addCarInfo"])),components:{Add:l},beforeMount:function(){},mounted:function(){var t=this;window.onscroll=function(){t.scrollH=document.documentElement.scrollTop},this.good_id=this.$route.params.id||localStorage.getItem("goodId"),this.$axios({url:"".concat(baseUrl,"/api/goodsinfo?id=").concat(this.good_id)}).then((function(e){t.CarGoodInfo.id=e.data.goods_id,t.CarGoodInfo.img=e.data.datas.goods_image,t.datas=e.data.datas,t.CarGoodInfo.name=e.data.datas.goods_info.goods_name,t.CarGoodInfo.price=e.data.datas.goods_info.goods_price})),this.CarGoodInfo.user=localStorage.getItem("username")},watch:{scrollH:function(t,e){this.isShow=t>100}}},g=h,b=(a("f49e"),Object(f["a"])(g,o,n,!1,null,"3753e794",null));e["default"]=b.exports},f49e:function(t,e,a){"use strict";var o=a("c4be"),n=a.n(o);n.a}}]);
//# sourceMappingURL=chunk-17779f76.52a81b99.js.map