(this["webpackJsonpwine-app-frontend"]=this["webpackJsonpwine-app-frontend"]||[]).push([[13],{453:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(4),i=n(439),o=(n(0),n(41)),r=n(454),c=n.n(r),l=function(){return Object(a.jsx)(i.a,{"aria-label":"previous-page",color:"primary",size:"large",startIcon:Object(a.jsx)(c.a,{}),onClick:function(){return Object(o.c)(-1)},children:"Torna indietro"})}},454:function(e,t,n){"use strict";var a=n(46),i=n(47);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),r=(0,a(n(48)).default)(o.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");t.default=r},459:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(4),i=n(81),o=n.n(i),r=n(104),c=n(26),l=n(439),d=(n(0),n(23)),s=n(15),u=n(132),v=function(e){var t=e.id,n=e.isBuy,i=Object(u.c)(),v=Object(s.L)({onCompleted:function(e){var t,n;if(null===(t=e.updateNegotiation)||void 0===t||null===(n=t.errors)||void 0===n?void 0:n.length){var a,i=null===(a=e.updateNegotiation)||void 0===a?void 0:a.errors.map((function(e){return null===e||void 0===e?void 0:e.text}));Object(d.d)({type:"error",message:"".concat(i.toString())})}else Object(d.d)({message:"trattativa chiusa con successo",type:"success"})},onError:function(e){return Object(d.d)({type:"error",message:e.message})}}),j=Object(c.a)(v,2),b=j[0],p=j[1].loading,m=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b({variables:{negotiation:{_id:t,isConcluded:!0}}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(l.a,{"aria-label":"close-negotiation",className:n?i.buyButton:i.sellButton,disabled:p,onClick:m,children:"Dichiara chiusa la trattativa"})}},503:function(e,t,n){"use strict";n.r(t);var a=n(4),i=(n(0),n(41)),o=n(15),r=n(23),c=n(227),l=n(384),d=n(437),s=n(438),u=n(453),v=n(439),j=n(90),b=n(459),p=n(132);t.default=function(){var e,t,n,m,O,h=Object(i.e)().id,f=Object(p.c)(),g=Object(o.E)({variables:{id:h}}),x=g.data,y=g.loading,w=g.error,B="AdWine"===(null===x||void 0===x||null===(e=x.negotiation)||void 0===e?void 0:e.ad.__typename)?null===x||void 0===x||null===(t=x.negotiation)||void 0===t?void 0:t.ad:null,N=function(){return(null===B||void 0===B?void 0:B.postedBy.hideContact)?null:Object(a.jsxs)("div",{children:["puoi contattare l utente al numero: ",null===B||void 0===B?void 0:B.postedBy.phoneNumber," o alla mail ",null===B||void 0===B?void 0:B.postedBy.email]})};return w&&!y?(Object(r.d)({type:"error",message:"".concat(w.message)}),Object(a.jsx)("div",{children:"Errore"})):y?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(c.a,{"data-testid":"loading",className:f.backdrop,open:y,children:Object(a.jsx)(l.a,{color:"inherit"})})}):Object(a.jsxs)(d.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(s.a,{}),Object(a.jsx)(u.a,{}),Object(a.jsxs)("div",{className:f.paper,children:[Object(a.jsx)(j.a,{color:"primary",component:"h3",variant:"h5",children:"Gestisci la trattativa"}),Object(a.jsx)(j.a,{color:"secondary",variant:"body1",children:"Puoi decidere se contattare l utente tramite il nostro portale o usando i suoi contatti"})]}),Object(a.jsx)(N,{}),Object(a.jsxs)(j.a,{color:"secondary",variant:"body1",children:["Questa trattativa riguarda l annuncio per ",null===B||void 0===B?void 0:B.wineName," ",null===B||void 0===B||null===(n=B.wine)||void 0===n?void 0:n.denominazioneZona]}),(null===x||void 0===x||null===(m=x.negotiation)||void 0===m?void 0:m.isConcluded)?null:Object(a.jsx)(b.a,{id:h}),Object(a.jsx)(v.a,{className:f.sellButton,component:i.a,to:"/messaggi/".concat(null===x||void 0===x||null===(O=x.negotiation)||void 0===O?void 0:O._id),children:"Vai alla chat"})]})}}}]);
//# sourceMappingURL=13.7142addd.chunk.js.map