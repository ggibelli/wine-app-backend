(this["webpackJsonpwine-app-frontend"]=this["webpackJsonpwine-app-frontend"]||[]).push([[10],{454:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(4),r=n(439),o=(n(0),n(41)),a=n(455),c=n.n(a),l=function(){return Object(i.jsx)(r.a,{"aria-label":"previous-page",color:"primary",size:"large",startIcon:Object(i.jsx)(c.a,{}),onClick:function(){return Object(o.c)(-1)},children:"Torna indietro"})}},456:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(4),r=(n(0),n(449)),o=n(14),a=function(e){var t=e.notActive?"#b2b2b2":"white",n=e.notActive?"#8a425a":"primary.main";return Object(i.jsx)(r.a,{boxShadow:3,p:2,m:2,mt:2,px:2,pt:2,width:e.width,color:e.typeAd===o.l.Sell?"primary.main":"white",borderColor:e.typeAd===o.l.Sell?"white":"primary.main",bgcolor:e.typeAd===o.l.Sell?t:n,borderRadius:16,children:e.children})}},458:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var i=n(4),r=n(28),o=n(41),a=n(0),c=n(457),l=n.n(c),s=n(131),d=n(233),u=n(384),v=Object(s.a)((function(){return Object(d.a)({root:{display:"flex",flexDirection:"column",alignItems:"center"}})})),j=function(e){var t=v(),n="messaggi"===Object(o.d)().pathname.split("/")[1],c=function(e){var t=e.root,n=void 0===t?null:t,i=e.rootMargin,o=void 0===i?"0px":i,c=e.threshold,l=void 0===c?0:c,s=a.useState(null),d=Object(r.a)(s,2),u=d[0],v=d[1],j=a.useState(null),b=Object(r.a)(j,2),f=b[0],O=b[1],h=a.useRef(null);return a.useEffect((function(){h.current&&h.current.disconnect(),h.current=new window.IntersectionObserver((function(e){var t=Object(r.a)(e,1)[0];return v(t)}),{root:n,rootMargin:o,threshold:l});var e=h.current;return f&&e.observe(f),function(){return e.disconnect()}}),[f,n,o,l]),[O,u]}({threshold:0}),s=Object(r.a)(c,2),d=s[0],j=s[1],b=a.useState(!0),f=Object(r.a)(b,2),O=f[0],h=f[1];return a.useEffect((function(){j&&(null===j||void 0===j?void 0:j.intersectionRatio)>0&&O?(e.fetchMore(),e.setIsLoading&&e.setIsLoading(!0),h(!1)):0!==(null===j||void 0===j?void 0:j.intersectionRatio)||O||(h(!0),e.setIsLoading&&e.setIsLoading(!1))}),[null===j||void 0===j?void 0:j.intersectionRatio]),n?Object(i.jsxs)(i.Fragment,{children:[e.isVisible?e.isLoading?Object(i.jsx)("div",{className:t.root,children:Object(i.jsx)(u.a,{})}):Object(i.jsxs)("div",{className:t.root,id:"page-bottom-boundary",ref:d,children:[" ",Object(i.jsx)(l.a,{})]}):null,e.children]}):Object(i.jsxs)("div",{className:t.root,children:[e.children,e.isVisible?e.isLoading?Object(i.jsx)(u.a,{}):Object(i.jsxs)("div",{id:"page-bottom-boundary",ref:d,style:{height:30},children:[" ",Object(i.jsx)(l.a,{})]}):null]})}},459:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(4),r=(n(0),n(386)),o=n(231),a=n(235),c=n(14),l=function(e){return Object(i.jsxs)(o.a,{fullWidth:!0,children:[Object(i.jsx)(a.a,{style:{color:"black"},htmlFor:"order",children:"Ordine risultati"}),Object(i.jsxs)(r.a,{native:!0,value:e.order,onChange:function(t){e.setOrder(t.target.value)},inputProps:{name:"order",id:"order"},children:[Object(i.jsx)("option",{value:c.j.CreatedAtDesc,children:"Dal piu recente"}),Object(i.jsx)("option",{value:c.j.CreatedAtAsc,children:"Dal meno recente"}),e.isAds?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("option",{value:c.j.PriceDesc,children:"Dal piu caro"}),Object(i.jsx)("option",{value:c.j.PriceAsc,children:"Dal meno caro"})]}):null]})]})}},463:function(e,t,n){"use strict";var i=n(53),r=n(54);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=(0,i(n(55)).default)(o.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");t.default=a},464:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var i=n(4),r=n(0),o=n(456),a=n(91),c=n(161),l=n.n(c),s=n(429),d=n(41),u=n(14),v=n(35),j=n(482),b=n(440),f=n(435),O=n.n(f),h=n(28),p=n(463),x=n.n(p),m=n(380),g=n(160),y=n.n(g),A=n(93),S=function(e){var t,n,o=e.id,a=e.fontSize,c=void 0===a?"default":a,l=Object(u.E)().data,s=Object(u.N)({variables:{id:o},onCompleted:function(){S(!g)},onError:function(e){return console.log(e)},update:function(e,t){var n,i=t.data;Object(A.f)(e,null===i||void 0===i||null===(n=i.saveAd)||void 0===n?void 0:n.response)}}),d=Object(h.a)(s,1)[0],v=r.useState(!1),j=Object(h.a)(v,2),b=j[0],f=j[1],O=r.useState((null===l||void 0===l||null===(t=l.myInfo)||void 0===t||null===(n=t.savedAds)||void 0===n?void 0:n.map((function(e){return e._id})).includes(o))||!1),p=Object(h.a)(O,2),g=p[0],S=p[1];return r.useEffect((function(){var e,t,n;(null===l||void 0===l||null===(e=l.myInfo)||void 0===e?void 0:e.savedAds)&&!b&&(S((null===l||void 0===l||null===(t=l.myInfo)||void 0===t||null===(n=t.savedAds)||void 0===n?void 0:n.map((function(e){return e._id})).includes(o))||!1),f(!0))}),[l]),console.log(l),Object(i.jsx)(m.a,{"aria-label":"save",onClick:function(){return d()},children:g?Object(i.jsx)(y.a,{fontSize:c}):Object(i.jsx)(x.a,{fontSize:c})})},C=function(e){var t=e.ad,n=Object(v.a)(),r=Object(j.a)(n.breakpoints.up("sm"))?400:250,c=(null===t||void 0===t?void 0:t.typeAd)===u.l.Buy,f=(null===t||void 0===t?void 0:t.isActive)?"auto":"none";return t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a,{"data-testid":"card-wine",width:r,typeAd:t.typeAd,notActive:!t.isActive,children:Object(i.jsxs)(s.a,{"aria-label":"link-ad",style:{pointerEvents:f,display:"block"},component:d.a,to:"/annunci/".concat(t._id),underline:"none",children:[Object(i.jsxs)(a.a,{component:"h5",variant:"h6",color:c?"textSecondary":"primary",children:[c?"Compro":"Vendo"," ",t.wineName," "]}),Object(i.jsxs)(a.a,{align:"left",variant:"body1",color:c?"textSecondary":"primary",children:["Annata: ",t.harvest,Object(i.jsx)("br",{}),"Gradazione: ",t.abv," % Vol",Object(i.jsx)("br",{}),"Quantit\xe0: ",t.litersTo," l",Object(i.jsx)("br",{}),"Prezzo: ",t.priceFrom," \u20ac/l"]}),Object(i.jsx)("br",{}),Object(i.jsxs)(a.a,{align:"right",variant:"caption",color:c?"textSecondary":"primary",children:["pubblicato il ",t.datePosted]})]})}),Object(i.jsxs)(b.a,{container:!0,justify:"space-between",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(l.a,{fontSize:"small"}),null===t||void 0===t?void 0:t.numberViews,Object(i.jsx)(O.a,{fontSize:"small"}),null===t||void 0===t?void 0:t.activeNegotiations,Object(i.jsx)(S,{id:t._id,fontSize:"small"}),(null===t||void 0===t?void 0:t.savedTimes)||0]}),Object(i.jsx)(a.a,{align:"right",variant:"caption"})]})]}):null}},465:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return p}));var i=n(4),r=n(28),o=n(24),a=n(0),c=n(439),l=n(492),s=n(473),d=n.n(s),u=n(430),v=n(490),j=n(541),b=n(8),f=n(530),O=n(21);var h=Object(b.a)({root:{color:f.a[400],"&$checked":{color:f.a[600]}},checked:{}})((function(e){return Object(i.jsx)(j.a,Object(o.a)({color:"default"},e))})),p=function(e){var t=Object(O.e)(),n=a.useState(!1),o=Object(r.a)(n,2),s=o[0],j=o[1],b=a.useState(!1),f=Object(r.a)(b,2),p=f[0],x=f[1],m=a.useState({priceTo:function(e){return e<=(null===t||void 0===t?void 0:t.priceTo)},abv:function(e){return e>=(null===t||void 0===t?void 0:t.abv)-.5||e<=(null===t||void 0===t?void 0:t.abv)+.5},harvest:function(e){return e===(null===t||void 0===t?void 0:t.harvest)||e-1===(null===t||void 0===t?void 0:t.harvest)},litersTo:function(e){return e>=(null===t||void 0===t?void 0:t.litersTo)}}),g=Object(r.a)(m,2),y=g[0],A=g[1];a.useEffect((function(){if(e.list.length>0){var t=function(e,t){var n=Object.keys(t);return e.filter((function(e){return n.every((function(n){return"function"!==typeof t[n]||t[n](e[n])}))}))}(e.list,y);e.setFilteredList(t)}}),[y,e.list]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.a,{onClick:function(){return x(!p)},"aria-label":"filter",color:"primary",size:"large",startIcon:Object(i.jsx)(d.a,{}),children:"Filtri"}),Object(i.jsxs)(l.a,{in:p,children:[e.children,Object(i.jsx)(u.a,{}),Object(i.jsx)(v.a,{control:Object(i.jsx)(h,{checked:s,onChange:function(){A(s?{priceTo:function(e){return e<=(null===t||void 0===t?void 0:t.priceTo)},abv:function(e){return e>=(null===t||void 0===t?void 0:t.abv)-.5||e<=(null===t||void 0===t?void 0:t.abv)+.5},harvest:function(e){return e===(null===t||void 0===t?void 0:t.harvest)||e-1===(null===t||void 0===t?void 0:t.harvest)},litersTo:function(e){return e>=(null===t||void 0===t?void 0:t.litersTo)}}:{priceTo:function(){return!0},harvest:function(){return!0},abv:function(){return!0},litersTo:function(){return!0}}),j(!s)},name:"showAll"}),label:"Mostra tutti gli annunci per questo vino"})]})]})}},531:function(e,t,n){"use strict";n.r(t);var i=n(4),r=n(56),o=n.n(r),a=n(82),c=n(28),l=n(0),s=n(91),d=n(438),u=n(437),v=n(14),j=n(454),b=n(459),f=n(458),O=n(21),h=n(464),p=n(490),x=n(430),m=n(465),g=n(155);t.default=function(){var e,t,n,r,y,A=Object(O.c)(),S=l.useState(v.j.CreatedAtDesc),C=Object(c.a)(S,2),w=C[0],F=C[1],k=l.useState(0),z=Object(c.a)(k,2),T=z[0],U=z[1],E=Object(v.p)({variables:{offset:0,limit:4,orderBy:v.j.CreatedAtDesc,user:null===A||void 0===A?void 0:A._id,isActive:void 0},onError:function(e){return console.log(e)},onCompleted:function(e){var t=e.adsForUser;U(null===t||void 0===t?void 0:t.pageCount),console.log(Object(O.c)())}}),I=E.data,D=E.loading,L=E.error,_=E.fetchMore,M=l.useState([]),N=Object(c.a)(M,2),P=N[0],V=N[1],B=l.useState(!1),R=Object(c.a)(B,2),G=R[0],J=R[1],W=l.useState(!1),q=Object(c.a)(W,2),Q=q[0],$=q[1],H=l.useState(!1),K=Object(c.a)(H,2),X=K[0],Y=K[1];if(l.useEffect((function(){var e;V(G?null===P||void 0===P?void 0:P.filter((function(e){return null===e||void 0===e?void 0:e.isActive})):null===I||void 0===I||null===(e=I.adsForUser)||void 0===e?void 0:e.ads)}),[null===I||void 0===I||null===(e=I.adsForUser)||void 0===e?void 0:e.ads,G]),l.useEffect((function(){var e,t,n,i;(null===I||void 0===I||null===(e=I.adsForUser)||void 0===e||null===(t=e.ads)||void 0===t?void 0:t.length)&&_&&(Y(!0),_({variables:{orderBy:w,limit:null===I||void 0===I||null===(n=I.adsForUser)||void 0===n||null===(i=n.ads)||void 0===i?void 0:i.length,isActive:G}}).then((function(e){var t,n,i=e.data;Y(!1),(null===(t=i.adsForUser)||void 0===t?void 0:t.pageCount)!==T&&U(null===(n=i.adsForUser)||void 0===n?void 0:n.pageCount)})).catch((function(e){Y(!1),console.log(e)})))}),[w]),D)return Object(i.jsx)(g.a,{});if(!(null===A||void 0===A?void 0:A._id)||L)return Object(i.jsx)("div",{children:"error"});if(0===(null===I||void 0===I||null===(t=I.adsForUser)||void 0===t||null===(n=t.ads)||void 0===n?void 0:n.length))return Object(i.jsx)("div",{children:"Non hai ancora creato annunci"});if(null===I||void 0===I||null===(r=I.adsForUser)||void 0===r||null===(y=r.ads)||void 0===y?void 0:y.length){var Z,ee,te=function(){var e=Object(a.a)(o.a.mark((function e(){var t,n,i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($(!0),!_){e.next=13;break}return e.prev=2,e.next=5,_({variables:{offset:null===I||void 0===I||null===(t=I.adsForUser)||void 0===t||null===(n=t.ads)||void 0===n?void 0:n.length,orderBy:w,isActive:G}});case 5:$(!1),(null===(i=I.adsForUser)||void 0===i?void 0:i.pageCount)!==T&&U(null===(r=I.adsForUser)||void 0===r?void 0:r.pageCount),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),$(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)(u.a,{component:"main",maxWidth:"xs",children:[Object(i.jsx)(d.a,{}),Object(i.jsx)(j.a,{}),Object(i.jsx)("br",{}),Object(i.jsx)(s.a,{color:"primary",component:"h3",variant:"h5",children:"Gli annunci che hai creato"}),Object(i.jsx)("br",{}),Object(i.jsx)(b.a,{setOrder:F,order:w}),Object(i.jsx)(x.a,{}),Object(i.jsx)(p.a,{control:Object(i.jsx)(m.b,{checked:G,onChange:function(){J(!G)},name:"showAll"}),label:"Nascondi gli annunci inattivi"}),X?Object(i.jsx)(g.a,{}):Object(i.jsxs)(f.a,{fetchMore:te,isVisible:(null===I||void 0===I||null===(Z=I.adsForUser)||void 0===Z||null===(ee=Z.ads)||void 0===ee?void 0:ee.length)<T,isLoading:Q,children:[" ",null===P||void 0===P?void 0:P.map((function(e){return Object(i.jsx)(h.a,{ad:e},e&&e._id)}))]})]})}return Object(i.jsx)("div",{children:"gravissimo errore"})}}}]);
//# sourceMappingURL=10.f0f1a53f.chunk.js.map