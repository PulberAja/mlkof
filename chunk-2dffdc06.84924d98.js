(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dffdc06"],{"62ca":function(t,s,a){},"834e":function(t,s,a){"use strict";var e=a("62ca"),i=a.n(e);i.a},ca19:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Mmask",{on:{close:t.close}},[e("div",{staticClass:"alert-title"},[t._v(t._s(t.$t("message.strid16")))]),e("div",{staticClass:"share-box"},t._l(t.list,(function(s,i){return e("div",{key:i,staticClass:"share-item"},[e("div",{staticClass:"share-name"},[t._v(t._s(s.title))]),e("div",{staticClass:"share-steps"},[2==s.reward_step?e("div",{staticClass:"share-step-icon-box"},[e("img",{staticClass:"share-step-icon",attrs:{src:a("cc2b"),alt:""}}),e("img",{staticClass:"share-step-icon",attrs:{src:a("cc2b"),alt:""}})]):1==s.reward_step?e("img",{staticClass:"share-step-icon",attrs:{src:a("cc2b"),alt:""}}):t._e(),e("p",{staticClass:"share-step-limit"},[t._v(t._s(s.tip))])])])})),0),e("div",{staticClass:"socail-share-box"},[e("a",{staticClass:"socail-item fb",attrs:{href:"https://www.facebook.com/sharer/sharer.php?u="+t.facebook,target:"_blank"},on:{click:function(s){return t.shareFn("facebook")}}}),e("a",{staticClass:"socail-item ws",attrs:{href:"https://api.whatsapp.com/send?text="+t.whatsapp,target:"_blank"},on:{click:function(s){return t.shareFn("whatsapp")}}}),e("a",{staticClass:"socail-item tw",attrs:{href:"https://twitter.com/share?text=&url="+t.twitter,target:"_blank"},on:{click:function(s){return t.shareFn("twitter")}}}),e("div",{staticClass:"socail-item copy"},[e("button",{staticClass:"shareBtn_btn",attrs:{type:"button","data-clipboard-text":t.link},on:{click:function(s){return t.shareFn("link")}}})])])])},i=[],r=(a("5319"),a("1276"),a("227f")),c={props:["code","list"],components:{Mmask:r["a"]},data(){return{url:window.location.href.split("?")[0],facebook:"",twitter:"",whatsapp:"",link:""}},created(){this.setUrl("facebook"),this.setUrl("twitter"),this.setUrl("whatsapp"),this.setUrl("link")},methods:{pre(){},close(){this.$emit("close","showShare")},shareFn(t){this.$emit("share",t)},setUrl(t){var s="c="+this.code+"&o="+t;this[t]=window.location.href.split("?")[0]+"?"+this.b64EncodeUnicode(s).replace(/=/g,"%3D")},b64EncodeUnicode:function(t){return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,(function(t,s){return String.fromCharCode("0x"+s)})))}}},n=c,o=(a("834e"),a("2877")),l=Object(o["a"])(n,e,i,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2dffdc06.84924d98.js.map
