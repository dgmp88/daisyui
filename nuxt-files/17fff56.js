(window.webpackJsonp=window.webpackJsonp||[]).push([[84,6,9,11,36,44],{406:function(t,e,n){var l=n(18),c="["+n(407)+"]",r=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),d=function(t){return function(e){var n=String(l(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},407:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},408:function(t,e,n){"use strict";n.r(e);var l={props:{classes:String}},c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(408).default})},409:function(t,e,n){"use strict";var l=n(10),c=n(4),r=n(82),o=n(14),d=n(12),v=n(36),f=n(163),h=n(61),_=n(5),C=n(63),m=n(62).f,w=n(26).f,y=n(13).f,x=n(406).trim,S="Number",T=c.Number,k=T.prototype,E=v(C(k))==S,N=function(t){var e,n,l,c,r,o,d,code,v=h(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=x(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:l=2,c=49;break;case 79:case 111:l=8,c=55;break;default:return+v}for(o=(r=v.slice(2)).length,d=0;d<o;d++)if((code=r.charCodeAt(d))<48||code>c)return NaN;return parseInt(r,l)}return+v};if(r(S,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var I,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(E?_((function(){k.valueOf.call(n)})):v(n)!=S)?f(new T(N(e)),n,O):N(e)},A=l?m(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;A.length>D;D++)d(T,I=A[D])&&!d(O,I)&&y(O,I,w(T,I));O.prototype=k,k.constructor=O,o(c,S,O)}},410:function(t,e,n){"use strict";n.r(e);n(40),n(409),n(22),n(39),n(64),n(114),n(37),n(38),n(164),n(48),n(162),n(83),n(49);var l={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},411:function(t,e,n){n(412)},412:function(t,e,n){"use strict";var l=n(2),c=n(18),r=n(84),o=n(85),d=n(165),v=n(3),f=n(23),h=v("replace"),_=RegExp.prototype,C=Math.max,m=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};l({target:"String",proto:!0},{replaceAll:function(t,e){var n,l,v,w,y,x,S,T,k=c(this),E=0,N=0,I="";if(null!=t){if((n=r(t))&&!~String(c("flags"in _?t.flags:o.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(l=t[h]))return l.call(t,k,e);if(f&&n)return String(k).replace(t,e)}for(v=String(k),w=String(t),(y="function"==typeof e)||(e=String(e)),x=w.length,S=C(1,x),E=m(v,w,0);-1!==E;)T=y?String(e(w,E,v)):d(w,v,E,[],void 0,e),I+=v.slice(N,E)+T,N=E+x,E=m(v,w,E+S);return N<v.length&&(I+=v.slice(N)),I}})},413:function(t,e,n){"use strict";var l=n(2),c=n(406).trim;l({target:"String",proto:!0,forced:n(414)("trim")},{trim:function(){return c(this)}})},414:function(t,e,n){var l=n(5),c=n(407);t.exports=function(t){return l((function(){return!!c[t]()||"​᠎"!="​᠎"[t]()||c[t].name!==t}))}},415:function(t,e,n){"use strict";n.r(e);n(411),n(413),n(114);var l={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var l,c=new Array(1+n++).join("  "),r=new Array(n-1).join("  "),i=0;i<e.children.length;i++)l=document.createTextNode("\n"+c),e.insertBefore(l,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(l=document.createTextNode("\n"+r),e.appendChild(l));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html",staticStyle:{display:"block","overflow-x":"auto",padding:"0.5em",color:"#abb2bf",background:"#282c34"}})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(410).default})},416:function(t,e,n){"use strict";n.r(e);var l={props:["data"]},c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"mt-6 overflow-x-auto"},[n("table",{staticClass:"table w-full table-compact"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,l){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"font-mono lowercase"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"w-20 badge badge-sm badge-success"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,l){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"font-mono lowercase"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"w-20 badge badge-sm badge-info"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.responsive,(function(e,l){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"font-mono lowercase"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"w-20 badge badge-sm badge-info"},[t._v("Responsive")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"mt-6 text-xl font-bold"},[t._v("Examples")]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hidden mt-2 mb-10 text-center xl:block"},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"728px",height:"90px"},attrs:{"data-ad-client":"ca-pub-4812562253949561","data-ad-slot":"1141251424"}}),t._v(" "),n("script",[t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2 mb-10 text-center xl:hidden"},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"300px",height:"100px"},attrs:{"data-ad-client":"ca-pub-4812562253949561","data-ad-slot":"6427020085"}}),t._v(" "),n("script",[t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])}],!1,null,null,null);e.default=component.exports},418:function(t,e,n){"use strict";n.r(e);var l=n(6),component=Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("progress",{staticClass:"progress"})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Progress:n(418).default})},494:function(t,e,n){"use strict";n.r(e);var l={head:function(){return{title:"daisyUI — Tailwind CSS stats component",meta:[{hid:"description",name:"description",content:"Tailwind CSS stats component - Tailwind CSS stats examples"}]}}},c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"stats",desc:"Conainer ot multiple stat items"},{class:"stat",desc:"One stat item"},{class:"stat-title",desc:"Title text"},{class:"stat-value",desc:"Value text"},{class:"stat-desc",desc:"Description text"},{class:"stat-figure",desc:"For icon, image, etc"}]}}}),t._v(" "),n("Wrapper",{attrs:{title:"single stat"}},[n("div",{staticClass:"shadow stats"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-title"},[t._v("Total Page Views")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("89,400")]),t._v(" "),n("div",{staticClass:"stat-desc"},[t._v("21% more than last month")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"with figure"}},[n("div",{staticClass:"w-full shadow stats"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-primary"},[n("Icon",{staticClass:"inline-block w-8 h-8 stroke-current",attrs:{glyph:"heart"}})],1),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("Total Likes")]),t._v(" "),n("div",{staticClass:"stat-value text-primary"},[t._v("25.6K")]),t._v(" "),n("div",{staticClass:"stat-desc"},[t._v("21% more than last month")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-info"},[n("Icon",{staticClass:"inline-block w-8 h-8 stroke-current",attrs:{glyph:"lightning-bolt"}})],1),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("Page Views")]),t._v(" "),n("div",{staticClass:"stat-value text-info"},[t._v("2.6M")]),t._v(" "),n("div",{staticClass:"stat-desc"},[t._v("21% more than last month")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-info"},[n("div",{staticClass:"avatar online"},[n("div",{staticClass:"w-16 h-16 p-1 mask mask-squircle bg-base-100"},[n("img",{staticClass:"mask mask-squircle",attrs:{src:"/tailwind-css-component-profile-5@56w.png",alt:"Avatar Tailwind CSS Component"}})])])]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("86%")]),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("Tasks done")]),t._v(" "),n("div",{staticClass:"stat-desc text-info"},[t._v("31 tasks remaining")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"stats row"}},[n("div",{staticClass:"w-full shadow stats"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-secondary"},[n("Icon",{staticClass:"inline-block w-8 h-8 stroke-current",attrs:{glyph:"info"}})],1),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("Downloads")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("310M")]),t._v(" "),n("div",{staticClass:"stat-desc"},[t._v("Jan 1st - Feb 1st")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-secondary"},[n("Icon",{staticClass:"inline-block w-8 h-8 stroke-current",attrs:{glyph:"adjustments"}})],1),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("New Users")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("4,200")]),t._v(" "),n("div",{staticClass:"stat-desc text-success"},[t._v("↗︎ 400 (22%)")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-secondary"},[n("Icon",{staticClass:"inline-block w-8 h-8 stroke-current",attrs:{glyph:"archive"}})],1),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("New Registers")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("1,200")]),t._v(" "),n("div",{staticClass:"stat-desc text-error"},[t._v("↘︎ 90 (14%)")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"stats row items-center"}},[n("div",{staticClass:"w-full shadow stats"},[n("div",{staticClass:"stat place-items-center place-content-center"},[n("div",{staticClass:"stat-title"},[t._v("Downloads")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("310M")]),t._v(" "),n("div",{staticClass:"stat-desc"},[t._v("Jan 1st - Feb 1st")])]),t._v(" "),n("div",{staticClass:"stat place-items-center place-content-center"},[n("div",{staticClass:"stat-title"},[t._v("New Users")]),t._v(" "),n("div",{staticClass:"stat-value text-success"},[t._v("4,200")]),t._v(" "),n("div",{staticClass:"stat-desc text-success"},[t._v("↗︎ 400 (22%)")])]),t._v(" "),n("div",{staticClass:"stat place-items-center place-content-center"},[n("div",{staticClass:"stat-title"},[t._v("New Registers")]),t._v(" "),n("div",{staticClass:"stat-value text-error"},[t._v("1,200")]),t._v(" "),n("div",{staticClass:"stat-desc text-error"},[t._v("↘︎ 90 (14%)")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"stats grid-flow-row"}},[n("div",{staticClass:"grid-flow-row shadow stats"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-title"},[t._v("Downloads")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("310M")]),t._v(" "),n("div",{staticClass:"stat-desc"},[t._v("Jan 1st - Feb 1st")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-title"},[t._v("New Users")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("4,200")]),t._v(" "),n("div",{staticClass:"stat-desc text-success"},[t._v("↗︎ 400 (22%)")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-title"},[t._v("New Registers")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("1,200")]),t._v(" "),n("div",{staticClass:"stat-desc text-error"},[t._v("↘︎ 90 (14%)")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"with buttons, colors and more"}},[n("div",{staticClass:"border stats border-base-300"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-title"},[t._v("Account balance")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("$89,400")]),t._v(" "),n("div",{staticClass:"stat-actions"},[n("button",{staticClass:"btn btn-sm btn-success"},[t._v("Add funds")])])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-title"},[t._v("Current balance")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("$89,400")]),t._v(" "),n("div",{staticClass:"stat-actions"},[n("button",{staticClass:"btn btn-sm btn-primary"},[t._v("Withdrawal")]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-primary"},[t._v("deposit")])])])]),t._v(" "),n("div",{staticClass:"w-full mt-2 border stats border-base-300"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-primary"},[n("button",{staticClass:"btn loading btn-circle btn-lg bg-base-200 btn-ghost"})]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("4,900/7,300")]),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("Files transfered")]),t._v(" "),n("div",{staticClass:"stat-desc"},[n("progress",{staticClass:"progress progress-secondary",attrs:{value:"60",max:"100"}})])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(416).default,Wrapper:n(415).default,Icon:n(115).default,Button:n(408).default,Progress:n(418).default})}}]);