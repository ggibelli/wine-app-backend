(this["webpackJsonpwine-app-frontend"]=this["webpackJsonpwine-app-frontend"]||[]).push([[7],{480:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(458),o=(n(0),n(42)),r=n(481),a=n.n(r),c=n(3),l=function(){return Object(c.jsx)(i.a,{"aria-label":"previous-page",color:"primary",size:"large",startIcon:Object(c.jsx)(a.a,{}),onClick:function(){return Object(o.c)(-1)},children:"Torna indietro"})}},482:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(0);var i=n(473),o=n(12),r=n(3),a=function(e){var t=e.notActive?"#b2b2b2":"white",n=e.notActive?"#8a425a":"primary.main";return Object(r.jsx)(i.a,{boxShadow:3,p:2,m:0,mt:2,px:2,pt:2,width:e.width,color:e.typeAd===o.j.Sell?"primary.main":"white",borderColor:e.typeAd===o.j.Sell?"white":"primary.main",bgcolor:e.typeAd===o.j.Sell?t:n,borderRadius:16,children:e.children})}},484:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var i=n(31),o=n(42),r=n(0),a=n(483),c=n.n(a),l=n(138),d=n(243),s=n(399),u=n(3),v=Object(l.a)((function(){return Object(d.a)({root:{display:"flex",flexDirection:"column",alignItems:"center"}})})),j=function(e){var t=v(),n="messaggi"===Object(o.d)().pathname.split("/")[1],a=function(e){var t=e.root,n=void 0===t?null:t,o=e.rootMargin,a=void 0===o?"0px":o,c=e.threshold,l=void 0===c?0:c,d=r.useState(null),s=Object(i.a)(d,2),u=s[0],v=s[1],j=r.useState(null),b=Object(i.a)(j,2),f=b[0],O=b[1],h=r.useRef(null);return r.useEffect((function(){h.current&&h.current.disconnect(),h.current=new window.IntersectionObserver((function(e){var t=Object(i.a)(e,1)[0];return v(t)}),{root:n,rootMargin:a,threshold:l});var e=h.current;return f&&e.observe(f),function(){return e.disconnect()}}),[f,n,a,l]),[O,u]}({threshold:0}),l=Object(i.a)(a,2),d=l[0],j=l[1],b=r.useState(!0),f=Object(i.a)(b,2),O=f[0],h=f[1];return r.useEffect((function(){j&&(null===j||void 0===j?void 0:j.intersectionRatio)>0&&O?(e.fetchMore(),e.setIsLoading&&e.setIsLoading(!0),h(!1)):0!==(null===j||void 0===j?void 0:j.intersectionRatio)||O||(h(!0),e.setIsLoading&&e.setIsLoading(!1))}),[null===j||void 0===j?void 0:j.intersectionRatio]),n?Object(u.jsxs)(u.Fragment,{children:[e.isVisible?e.isLoading?Object(u.jsx)("div",{className:t.root,children:Object(u.jsx)(s.a,{})}):Object(u.jsxs)("div",{className:t.root,id:"page-bottom-boundary",ref:d,children:[" ",Object(u.jsx)(c.a,{})]}):null,e.children]}):Object(u.jsxs)("div",{className:t.root,children:[e.children,e.isVisible?e.isLoading?Object(u.jsx)(s.a,{}):Object(u.jsxs)("div",{id:"page-bottom-boundary",ref:d,style:{height:30},children:[" ",Object(u.jsx)(c.a,{})]}):null]})}},485:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(0);var i=n(405),o=n(241),r=n(245),a=n(12),c=n(3),l=function(e){return Object(c.jsxs)(o.a,{fullWidth:!0,children:[Object(c.jsx)(r.a,{style:{color:"black"},htmlFor:"order",children:"Ordine risultati"}),Object(c.jsxs)(i.a,{native:!0,value:e.order,onChange:function(t){e.setOrder(t.target.value)},inputProps:{name:"order",id:"order"},children:[Object(c.jsx)("option",{value:a.i.CreatedAtDesc,children:"Dal piu recente"}),Object(c.jsx)("option",{value:a.i.CreatedAtAsc,children:"Dal meno recente"}),e.isAds?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("option",{value:a.i.PriceDesc,children:"Dal piu caro"}),Object(c.jsx)("option",{value:a.i.PriceAsc,children:"Dal meno caro"})]}):null]})]})}},486:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(31),o=n(0),r=n(487),a=n.n(r),c=n(400),l=n(168),d=n.n(l),s=n(12),u=n(97),v=n(42),j=n(3),b=function(e){var t,n,r=e.id,l=e.fontSize,b=void 0===l?"default":l,f=e.timesFavorite,O=Object(v.d)().pathname,h=Object(s.D)().data,p=Object(s.M)({variables:{id:r},onCompleted:function(){k(!C)},onError:function(e){return console.error(e)},update:function(e,t){var n,i=t.data;"/salvati"===O?setTimeout((function(){var t;return Object(u.f)(e,null===i||void 0===i||null===(t=i.saveAd)||void 0===t?void 0:t.response)}),500):Object(u.f)(e,null===i||void 0===i||null===(n=i.saveAd)||void 0===n?void 0:n.response)}}),x=Object(i.a)(p,1)[0],m=o.useState(!1),y=Object(i.a)(m,2),g=y[0],A=y[1],w=o.useState((null===h||void 0===h||null===(t=h.myInfo)||void 0===t||null===(n=t.savedAds)||void 0===n?void 0:n.map((function(e){return e._id})).includes(r))||!1),S=Object(i.a)(w,2),C=S[0],k=S[1];return o.useEffect((function(){var e,t,n;(null===h||void 0===h||null===(e=h.myInfo)||void 0===e?void 0:e.savedAds)&&!g&&(k((null===h||void 0===h||null===(t=h.myInfo)||void 0===t||null===(n=t.savedAds)||void 0===n?void 0:n.map((function(e){return e._id})).includes(r))||!1),A(!0))}),[h]),Object(j.jsxs)(c.a,{"aria-label":"save",onClick:function(){return x()},size:"small",children:[C?Object(j.jsx)(d.a,{fontSize:b}):Object(j.jsx)(a.a,{fontSize:b}),f]})}},487:function(e,t,n){"use strict";var i=n(52),o=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=(0,i(n(54)).default)(r.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");t.default=a},492:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(22),o=(n(0),n(482)),r=n(94),a=n(171),c=n.n(a),l=n(461),d=n(42),s=n(12),u=n(37),v=n(499),j=n(471),b=n(170),f=n.n(b),O=n(486),h=n(458),p=n(17),x=n(3),m=function(e){var t,n=e.ad,a=Object(u.a)(),b=Object(v.a)(a.breakpoints.up("sm"))?400:250,m=(null===n||void 0===n?void 0:n.typeAd)===s.j.Buy,y=(null===n||void 0===n?void 0:n.isActive)?"auto":"none",g=Object(p.c)(),A=null===g||void 0===g||null===(t=g.ads)||void 0===t?void 0:t.map((function(e){return e._id})).includes(n._id);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(o.a,{"data-testid":"card-wine",width:b,typeAd:n.typeAd,notActive:!n.isActive,children:[Object(x.jsxs)(l.a,{"aria-label":"link-ad",style:{pointerEvents:y,display:"block"},component:d.a,to:"/annunci/".concat(n._id),underline:"none",children:[Object(x.jsxs)(r.a,{component:"h5",variant:"h6",color:m?"textSecondary":"primary",children:[m?"Compro":"Vendo"," ",n.wineName," "]}),Object(x.jsxs)(r.a,{align:"left",variant:"body1",color:m?"textSecondary":"primary",children:["Annata: ",n.harvest,Object(x.jsx)("br",{}),"Gradazione: ",n.abv," % Vol",Object(x.jsx)("br",{}),"Quantit\xe0: ",n.litersTo," l",Object(x.jsx)("br",{}),"Prezzo: ",n.priceFrom," \u20ac/l"]})]}),Object(x.jsx)("br",{}),Object(x.jsxs)(j.a,{container:!0,justify:"space-between",children:[" ",Object(x.jsxs)(r.a,{"data-testid":"published",align:"right",variant:"caption",color:m?"textSecondary":"primary",children:["pubblicato il ",n.datePosted]}),Object(x.jsxs)("div",{style:{color:"secondary"},children:[Object(x.jsx)(c.a,{fontSize:"small"}),null===n||void 0===n?void 0:n.numberViews,Object(x.jsx)(f.a,{fontSize:"small"}),null===n||void 0===n?void 0:n.activeNegotiations]})]})]}),Object(x.jsxs)(j.a,{container:!0,justify:"space-between",children:[Object(x.jsx)("div",{children:A?Object(x.jsx)(h.a,{onClick:function(){Object(p.e)(Object(i.a)(Object(i.a)({},n),{},{typeProduct:s.k.AdWine,wine:void 0})),Object(d.c)("/annunci")},children:"Cerca di nuovo"}):null}),Object(x.jsx)("div",{children:Object(x.jsx)(O.a,{id:n._id,fontSize:"small",timesFavorite:(null===n||void 0===n?void 0:n.savedTimes)||0})})]})]})}},493:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return p}));var i=n(31),o=n(22),r=n(0),a=n(458),c=n(517),l=n(501),d=n.n(l),s=n(462),u=n(516),v=n(564),j=n(6),b=n(551),f=n(17);var O=n(3),h=Object(j.a)({root:{color:b.a[400],"&$checked":{color:b.a[600]}},checked:{}})((function(e){return Object(O.jsx)(v.a,Object(o.a)({color:"default"},e))})),p=function(e){var t=Object(f.e)(),n=r.useState(!1),o=Object(i.a)(n,2),l=o[0],v=o[1],j=r.useState(!1),b=Object(i.a)(j,2),p=b[0],x=b[1],m=r.useState({priceTo:function(e){return e<=(null===t||void 0===t?void 0:t.priceTo)},abv:function(e){return e>=(null===t||void 0===t?void 0:t.abv)-.5||e<=(null===t||void 0===t?void 0:t.abv)+.5},harvest:function(e){return e===(null===t||void 0===t?void 0:t.harvest)||e-1===(null===t||void 0===t?void 0:t.harvest)},litersTo:function(e){return e>=(null===t||void 0===t?void 0:t.litersTo)}}),y=Object(i.a)(m,2),g=y[0],A=y[1];r.useEffect((function(){if(e.list.length>0){var t=function(e,t){var n=Object.keys(t);return e.filter((function(e){return n.every((function(n){return"function"!==typeof t[n]||t[n](e[n])}))}))}(e.list,g);e.setFilteredList(t)}}),[g,e.list]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(a.a,{onClick:function(){return x(!p)},"aria-label":"filter",color:"primary",size:"large",startIcon:Object(O.jsx)(d.a,{}),children:"Filtri"}),Object(O.jsxs)(c.a,{in:p,children:[e.children,Object(O.jsx)(s.a,{}),Object(O.jsx)(u.a,{control:Object(O.jsx)(h,{checked:l,onChange:function(){A(l?{priceTo:function(e){return e<=(null===t||void 0===t?void 0:t.priceTo)},abv:function(e){return e>=(null===t||void 0===t?void 0:t.abv)-.5||e<=(null===t||void 0===t?void 0:t.abv)+.5},harvest:function(e){return e===(null===t||void 0===t?void 0:t.harvest)||e-1===(null===t||void 0===t?void 0:t.harvest)},litersTo:function(e){return e>=(null===t||void 0===t?void 0:t.litersTo)}}:{priceTo:function(){return!0},harvest:function(){return!0},abv:function(){return!0},litersTo:function(){return!0}}),v(!l)},name:"showAll"}),label:"Mostra tutti gli annunci per questo vino"})]})]})}},550:function(e,t,n){"use strict";n.r(t);var i=n(55),o=n.n(i),r=n(81),a=n(31),c=n(0),l=n(94),d=n(455),s=n(470),u=n(42),v=n(12),j=n(17),b=n(492),f=n(480),O=n(493),h=n(37),p=n(482),x=n(499),m=n(485),y=n(484),g=n(164),A=n(3);t.default=function(){var e,t,n,i=Object(h.a)(),w=Object(x.a)(i.breakpoints.up("sm"))?400:250,S=Object(j.e)(),C=c.useState([]),k=Object(a.a)(C,2),z=k[0],T=k[1],F=c.useState(v.i.CreatedAtDesc),I=Object(a.a)(F,2),L=I[0],N=I[1],D=c.useState(!1),P=Object(a.a)(D,2),E=P[0],M=P[1],_=c.useState(!1),B=Object(a.a)(_,2),V=B[0],R=B[1],q=Object(v.o)({variables:{offset:0,limit:4,orderBy:v.i.CreatedAtDesc,wineName:null===S||void 0===S?void 0:S.wineName,typeProduct:null===S||void 0===S?void 0:S.typeProduct,typeAd:(null===S||void 0===S?void 0:S.typeAd)===v.j.Buy?v.j.Sell:v.j.Buy},onError:function(e){return Object(j.d)({type:"error",message:e.message})}}),G=q.data,Q=q.loading,W=q.fetchMore;c.useEffect((function(){var e,t,n,i;((null===S||void 0===S?void 0:S.wineName)||Object(u.c)("/"),W&&(null===G||void 0===G||null===(e=G.ads)||void 0===e||null===(t=e.ads)||void 0===t?void 0:t.length))&&(R(!0),W({variables:{orderBy:L,limit:null===G||void 0===G||null===(n=G.ads)||void 0===n||null===(i=n.ads)||void 0===i?void 0:i.length}}).then((function(){R(!1)})).catch((function(e){R(!1),console.error(e)})))}),[L]);var J=function(){return Object(A.jsx)("div",{"data-testid":"no-result",children:"Non abbiamo trovato nulla, riceverai una notifica appena troveremo un match"})};if((null===G||void 0===G?void 0:G.ads)&&0===(null===G||void 0===G||null===(e=G.ads)||void 0===e?void 0:e.pageCount))return Object(A.jsx)(J,{});var $,H,K,U=function(){var e=Object(r.a)(o.a.mark((function e(){var t,n,i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M(!0),!W||!(null===G||void 0===G||null===(t=G.ads)||void 0===t||null===(n=t.ads)||void 0===n?void 0:n.length)){e.next=12;break}return e.prev=2,e.next=5,W({variables:{offset:null===G||void 0===G||null===(i=G.ads)||void 0===i||null===(r=i.ads)||void 0===r?void 0:r.length,orderBy:L,limit:4}});case 5:M(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),M(!1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();return Q?Object(A.jsx)(g.a,{}):(null===G||void 0===G||null===(t=G.ads)||void 0===t||null===(n=t.ads)||void 0===n?void 0:n.length)?Object(A.jsxs)(s.a,{component:"main",maxWidth:"xs",children:[Object(A.jsx)(d.a,{}),Object(A.jsx)(f.a,{}),Object(A.jsx)(l.a,{color:"primary",component:"h3",variant:"h5",children:"La tua ricerca"}),Object(A.jsxs)(p.a,{typeAd:null===S||void 0===S?void 0:S.typeAd,width:w,children:[Object(A.jsxs)(l.a,{component:"h5",variant:"h6",children:[(null===S||void 0===S?void 0:S.typeAd)===v.j.Buy?"Compro ":"Vendo"," ",null===S||void 0===S?void 0:S.wineName]}),Object(A.jsxs)(l.a,{align:"left",variant:"body1",children:["Annata: ".concat(null===S||void 0===S?void 0:S.harvest),Object(A.jsx)("br",{}),"Gradazione: ".concat(null===S||void 0===S?void 0:S.abv," % Vol"),Object(A.jsx)("br",{}),"Quantit\xe0: ".concat(null===S||void 0===S?void 0:S.litersTo," l"),Object(A.jsx)("br",{}),"Prezzo: ".concat(null===S||void 0===S?void 0:S.priceTo," euro al litro")]})]}),Object(A.jsx)("br",{}),Object(A.jsx)(l.a,{color:"primary",component:"h3",variant:"h5",children:"I nostri risultati"}),Object(A.jsx)(l.a,{variant:"body2",children:z&&z.length>0?"Questi sono gli annunci che abbiamo trovato per te: sono stati pubblicati da utenti interessati all'acquisto.":"Non abbiamo trovato nulla che corrisponde ai criteri di ricerca, ma esistono annunci per questo vino, clicca su filtri e mostra tutto per vederli"}),Object(A.jsxs)(O.a,{list:null===G||void 0===G||null===($=G.ads)||void 0===$?void 0:$.ads,setFilteredList:T,children:[" ",Object(A.jsx)(m.a,{isAds:!0,setOrder:N,order:L})]}),Object(A.jsx)("br",{}),V?Object(A.jsx)(g.a,{}):Object(A.jsxs)(y.a,{fetchMore:U,isVisible:(null===(H=G.ads.ads)||void 0===H?void 0:H.length)!==(null===G||void 0===G||null===(K=G.ads)||void 0===K?void 0:K.pageCount),isLoading:E,children:[" ",null===z||void 0===z?void 0:z.map((function(e){return Object(A.jsx)(b.a,{ad:e},null===e||void 0===e?void 0:e._id)}))]})]}):Object(A.jsx)("div",{children:"Grave errore"})}}}]);