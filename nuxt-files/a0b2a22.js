(window.webpackJsonp=window.webpackJsonp||[]).push([[90,11,44],{404:function(t,e,n){var r=n(18),o="["+n(405)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},405:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},407:function(t,e,n){"use strict";var r=n(10),o=n(4),l=n(82),c=n(14),d=n(12),h=n(36),f=n(163),v=n(60),m=n(5),y=n(62),_=n(61).f,C=n(26).f,w=n(13).f,x=n(404).trim,S="Number",T=o.Number,E=T.prototype,N=h(y(E))==S,k=function(t){var e,n,r,o,l,c,d,code,h=v(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=x(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+h}for(c=(l=h.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+h};if(l(S,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var I,L=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof L&&(N?m((function(){E.valueOf.call(n)})):h(n)!=S)?f(new T(k(e)),n,L):k(e)},A=r?_(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;A.length>O;O++)d(T,I=A[O])&&!d(L,I)&&w(L,I,C(T,I));L.prototype=E,E.constructor=L,c(o,S,L)}},408:function(t,e,n){"use strict";n.r(e);n(40),n(407),n(22),n(39),n(63),n(114),n(37),n(38),n(164),n(47),n(162),n(83),n(48);var r={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){n(410)},410:function(t,e,n){"use strict";var r=n(2),o=n(18),l=n(84),c=n(85),d=n(165),h=n(3),f=n(23),v=h("replace"),m=RegExp.prototype,y=Math.max,_=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,h,C,w,x,S,T,E=o(this),N=0,k=0,I="";if(null!=t){if((n=l(t))&&!~String(o("flags"in m?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=t[v]))return r.call(t,E,e);if(f&&n)return String(E).replace(t,e)}for(h=String(E),C=String(t),(w="function"==typeof e)||(e=String(e)),x=C.length,S=y(1,x),N=_(h,C,0);-1!==N;)T=w?String(e(C,N,h)):d(C,h,N,[],void 0,e),I+=h.slice(k,N)+T,k=N+x,N=_(h,C,N+S);return k<h.length&&(I+=h.slice(k)),I}})},411:function(t,e,n){"use strict";var r=n(2),o=n(404).trim;r({target:"String",proto:!0,forced:n(412)("trim")},{trim:function(){return o(this)}})},412:function(t,e,n){var r=n(5),o=n(405);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},413:function(t,e,n){"use strict";n.r(e);n(409),n(411),n(114);var r={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var r,o=new Array(1+n++).join("  "),l=new Array(n-1).join("  "),i=0;i<e.children.length;i++)r=document.createTextNode("\n"+o),e.insertBefore(r,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(r=document.createTextNode("\n"+l),e.appendChild(r));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(408).default})},498:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"daisyUI — Layout",meta:[{hid:"description",name:"description",content:"daisyUI CSS Layout - Tailwind CSS Layout"}]}}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mb-10 tabs"},[n("NuxtLink",{staticClass:"tab tab-lifted tab-lg tab-active",attrs:{to:"/core/layout"}},[n("Icon",{staticClass:"inline-block w-4 h-4 mr-2 stroke-current lg:w-6 lg:h-6",attrs:{glyph:"template"}}),t._v("Layout")],1),t._v(" "),n("NuxtLink",{staticClass:"tab tab-lifted tab-lg",attrs:{to:"/core/typography"}},[n("Icon",{staticClass:"inline-block w-4 h-4 mr-2 fill-current lg:w-6 lg:h-6",attrs:{glyph:"text"}}),t._v("Typography")],1),t._v(" "),n("span",{staticClass:"flex-grow hidden cursor-default tab tab-lifted tab-lg sm:block"})],1),t._v(" "),t._m(0),t._v(" "),n("Wrapper",{staticClass:"prose text-base-content",attrs:{nocode:""}},[n("p",[t._v("Layout, sizing, grids, spacing, etc... all will be handled by Tailwind CSS's utility classes")]),t._v(" "),n("p",[t._v("\n      Read more about:\n      "),n("ul",[n("li",[n("a",{attrs:{target:"_blank",href:"https://tailwindcss.com/docs/container"}},[t._v("Layout")])]),t._v(" "),n("li",[n("a",{attrs:{target:"_blank",href:"https://tailwindcss.com/docs/width"}},[t._v("Sizing")])]),t._v(" "),n("li",[n("a",{attrs:{target:"_blank",href:"https://tailwindcss.com/docs/flex"}},[t._v("Flexbox")])]),t._v(" "),n("li",[n("a",{attrs:{target:"_blank",href:"https://tailwindcss.com/docs/grid-template-columns"}},[t._v("Grid")])]),t._v(" "),n("li",[n("a",{attrs:{target:"_blank",href:"https://tailwindcss.com/docs/justify-content"}},[t._v("Box alignment")])]),t._v(" "),n("li",[n("a",{attrs:{target:"_blank",href:"https://tailwindcss.com/docs/padding"}},[t._v("Spacing")])])])])]),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200"},[n("NuxtLink",{staticClass:"text-xs btn-lg btn lg:text-lg",attrs:{to:"/core/typography"}},[t._v("\n      Next: typography\n      "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Layout")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(115).default,Wrapper:n(413).default})}}]);