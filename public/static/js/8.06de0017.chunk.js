(this["webpackJsonpwine-app-frontend"]=this["webpackJsonpwine-app-frontend"]||[]).push([[8],{453:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(4),i=r(439),a=(r(0),r(41)),o=r(454),c=r.n(o),s=function(){return Object(n.jsx)(i.a,{"aria-label":"previous-page",color:"primary",size:"large",startIcon:Object(n.jsx)(c.a,{}),onClick:function(){return Object(a.c)(-1)},children:"Torna indietro"})}},454:function(e,t,r){"use strict";var n=r(46),i=r(47);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(0)),o=(0,n(r(48)).default)(a.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");t.default=o},455:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(4),i=(r(0),r(448)),a=r(15),o=function(e){var t=e.notActive?"#b2b2b2":"white",r=e.notActive?"#8a425a":"primary.main";return Object(n.jsx)(i.a,{boxShadow:3,p:2,m:2,mt:2,px:2,pt:2,width:e.width,color:e.typeAd===a.k.Sell?"primary.main":"white",borderColor:e.typeAd===a.k.Sell?"white":"primary.main",bgcolor:e.typeAd===a.k.Sell?t:r,borderRadius:16,children:e.children})}},456:function(e,t,r){"use strict";var n=r(46),i=r(47);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(0)),o=(0,n(r(48)).default)(a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=o},457:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var n=r(4),i=r(26),a=r(41),o=r(0),c=r(456),s=r.n(c),l=r(131),d=r(232),u=r(384),v=Object(l.a)((function(){return Object(d.a)({root:{display:"flex",flexDirection:"column",alignItems:"center"}})})),j=function(e){var t=v(),r="messaggi"===Object(a.d)().pathname.split("/")[1],c=function(e){var t=e.root,r=void 0===t?null:t,n=e.rootMargin,a=void 0===n?"0px":n,c=e.threshold,s=void 0===c?0:c,l=o.useState(null),d=Object(i.a)(l,2),u=d[0],v=d[1],j=o.useState(null),f=Object(i.a)(j,2),b=f[0],h=f[1],p=o.useRef(null);return o.useEffect((function(){p.current&&p.current.disconnect(),p.current=new window.IntersectionObserver((function(e){var t=Object(i.a)(e,1)[0];return v(t)}),{root:r,rootMargin:a,threshold:s});var e=p.current;return b&&e.observe(b),function(){return e.disconnect()}}),[b,r,a,s]),[h,u]}({threshold:0}),l=Object(i.a)(c,2),d=l[0],j=l[1],f=o.useState(!0),b=Object(i.a)(f,2),h=b[0],p=b[1];return o.useEffect((function(){j&&(null===j||void 0===j?void 0:j.intersectionRatio)>=.5&&h?(e.fetchMore(),e.setIsLoading&&e.setIsLoading(!0),p(!1)):0!==(null===j||void 0===j?void 0:j.intersectionRatio)||h||(p(!0),e.setIsLoading&&e.setIsLoading(!1))}),[null===j||void 0===j?void 0:j.intersectionRatio]),r?Object(n.jsxs)(n.Fragment,{children:[e.isVisible?Object(n.jsxs)("div",{className:t.root,id:"page-bottom-boundary",ref:d,children:[" ",Object(n.jsx)(s.a,{})]}):null,e.children]}):Object(n.jsxs)("div",{className:t.root,children:[e.children,e.isVisible?e.isLoading?Object(n.jsx)(u.a,{}):Object(n.jsxs)("div",{id:"page-bottom-boundary",ref:d,style:{height:30},children:[" ",Object(n.jsx)(s.a,{})]}):null]})}},458:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(4),i=(r(0),r(386)),a=r(230),o=r(234),c=r(15),s=function(e){return Object(n.jsxs)(a.a,{fullWidth:!0,children:[Object(n.jsx)(o.a,{style:{color:"black"},htmlFor:"order",children:"Ordine risultati"}),Object(n.jsxs)(i.a,{native:!0,value:e.order,onChange:function(t){e.setOrder(t.target.value)},inputProps:{name:"order",id:"order"},children:[Object(n.jsx)("option",{"aria-label":"None",value:""}),Object(n.jsx)("option",{value:c.i.CreatedAtDesc,children:"Dal piu recente"}),Object(n.jsx)("option",{value:c.i.CreatedAtAsc,children:"Dal meno recente"}),e.isAds?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("option",{value:c.i.PriceDesc,children:"Dal piu caro"}),Object(n.jsx)("option",{value:c.i.PriceAsc,children:"Dal meno caro"})]}):null]})]})}},478:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1),i=r(0),a=r(225),o=r(428);function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(a.a)(),c=Object(o.a)({theme:r,name:"MuiUseMediaQuery",props:{}});var s="function"===typeof e?e(r):e;s=s.replace(/^@media( ?)/m,"");var l="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,d=Object(n.a)({},c,t),u=d.defaultMatches,v=void 0!==u&&u,j=d.matchMedia,f=void 0===j?l?window.matchMedia:null:j,b=d.noSsr,h=void 0!==b&&b,p=d.ssrMatchMedia,O=void 0===p?null:p,m=i.useState((function(){return h&&l?f(s).matches:O?O(s).matches:v})),x=m[0],g=m[1];return i.useEffect((function(){var e=!0;if(l){var t=f(s),r=function(){e&&g(t.matches)};return r(),t.addListener(r),function(){e=!1,t.removeListener(r)}}}),[s,f,l]),x}},515:function(e,t,r){"use strict";r.r(t);var n=r(4),i=r(81),a=r.n(i),o=r(104),c=r(26),s=r(0),l=r(90),d=r(438),u=r(437),v=r(15),j=r(453),f=r(458),b=r(457),h=r(455),p=r(35),O=r(478),m=r(23),x=r(389),g=function(e){var t=e.review,r=Object(m.c)(),i=Object(p.a)(),a=Object(O.a)(i.breakpoints.up("sm"))?400:250,o=(null===t||void 0===t?void 0:t.type)===v.k.Buy,c=(null===t||void 0===t?void 0:t.createdBy._id)===(null===r||void 0===r?void 0:r._id);return t?Object(n.jsxs)(h.a,{width:a,typeAd:t.type,children:[Object(n.jsx)(x.a,{name:"read-only",value:t.rating,readOnly:!0,precision:.1}),Object(n.jsxs)(l.a,{align:"left",variant:"h6",color:o?"textSecondary":"primary",children:[c?"Cosa hai detto riguardante la cantina ".concat(t.forUser.firstName):"La cantina ".concat(t.createdBy.firstName," dice di te"),":"]}),Object(n.jsx)("br",{}),Object(n.jsx)(l.a,{align:"left",variant:"body1",color:o?"textSecondary":"primary",children:t.content})]}):null},y=r(227),w=r(384),M=r(132);t.default=function(){var e=s.useState([]),t=Object(c.a)(e,2),r=t[0],i=t[1],h=s.useState(v.i.CreatedAtDesc),p=Object(c.a)(h,2),O=p[0],m=p[1],x=Object(v.J)({variables:{offset:0,limit:4,orderBy:v.i.CreatedAtDesc},onError:function(e){return console.log(e)}}),k=x.data,A=x.error,L=x.loading,S=x.fetchMore,C=Object(M.c)();if(s.useEffect((function(){var e;(null===k||void 0===k||null===(e=k.reviews)||void 0===e?void 0:e.reviews)&&i(k.reviews.reviews)}),[k]),s.useEffect((function(){r&&r.length&&S&&S({variables:{orderBy:O,limit:r.length}}).catch((function(e){return console.log(e)}))}),[O]),0===(null===r||void 0===r?void 0:r.length))return Object(n.jsx)("div",{children:"Non hai ancora recensioni"});if(A)return Object(n.jsx)("div",{children:"error"});if(L)return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(y.a,{"data-testid":"loading",className:C.backdrop,open:L,children:Object(n.jsx)(w.a,{color:"inherit"})})});if(null===r||void 0===r?void 0:r.length){var D,E=function(){var e=Object(o.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S){e.next=9;break}return e.prev=1,e.next=4,S({variables:{offset:null===k||void 0===k||null===(t=k.reviews)||void 0===t||null===(r=t.reviews)||void 0===r?void 0:r.length,orderBy:O}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(u.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(d.a,{}),Object(n.jsx)(j.a,{}),Object(n.jsx)("br",{}),Object(n.jsx)(l.a,{color:"primary",component:"h3",variant:"h5",children:"Le tue recensioni"}),Object(n.jsx)("br",{}),Object(n.jsx)(f.a,{setOrder:m,order:O}),Object(n.jsxs)(b.a,{fetchMore:E,isVisible:r.length!==(null===k||void 0===k||null===(D=k.reviews)||void 0===D?void 0:D.pageCount),isLoading:L,children:[" ",r&&r.map((function(e){return Object(n.jsx)(g,{review:e},e&&e._id)}))]})]})}return Object(n.jsx)("div",{children:"grave errore"})}}}]);
//# sourceMappingURL=8.06de0017.chunk.js.map