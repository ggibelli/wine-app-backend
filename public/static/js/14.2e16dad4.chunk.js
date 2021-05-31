(this["webpackJsonpwine-app-frontend"]=this["webpackJsonpwine-app-frontend"]||[]).push([[14],{541:function(e,n,r){"use strict";r.r(n);var t=r(3),a=r(47),l=r.n(a),i=r(71),o=r(21),s=(r(1),r(23)),d=r(107),c=r(194),u=r(222),b=r(124),m=r(217),j=r(409),x=r(468),p=r(141),h=r(482),O=r(458),C=r(216),v=r.n(C),f=r(88),g=r(220),T=r(221),y=r(218),w=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(2)},submit:{margin:e.spacing(3,0,2)},input:{color:"#6d1331"},underline:{color:"#6d1331","&:before":{borderBottom:"1px solid #6d1331"},"&&&&:hover:before":{borderBottom:"2px solid #6d1331"},"&:after":{borderBottom:"3px solid #6d1331"},disabled:{},focused:{},error:{}}}})),N={email:"",reEmail:"",password:"",rePassword:"",firstName:"",lastName:"",address:{via:"",comune:"",provincia:"",regione:"",CAP:"12345"},pIva:"",phoneNumber:"",hideContact:!1},P=function(e){var n=e.onSubmit,r=w();return Object(t.jsx)(s.c,{initialValues:N,validationSchema:b.c,onSubmit:n,children:function(e){var n=e.isValid,a=e.dirty,l=e.setFieldValue;return Object(t.jsxs)("div",{className:r.paper,children:[Object(t.jsx)(h.a,{className:r.avatar,children:Object(t.jsx)(v.a,{})}),Object(t.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(t.jsxs)(s.b,{className:r.form,children:[Object(t.jsxs)(x.a,{container:!0,spacing:2,children:[Object(t.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(t.jsx)(d.a,{name:"firstName",type:"text",label:"Nome",placeholder:"Nome",underlineColor:r.underline,labelTextColor:"#6d1331",inputTextColor:r.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(t.jsx)(d.a,{name:"lastName",type:"text",label:"Cognome",placeholder:"Cognome",underlineColor:r.underline,labelTextColor:"#6d1331",inputTextColor:r.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(d.a,{name:"email",type:"email",label:"Email",placeholder:"Email address",underlineColor:r.underline,labelTextColor:"#6d1331",inputTextColor:r.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(d.a,{name:"reEmail",type:"email",label:"Reinsert Email",placeholder:"Reinsert Email address",underlineColor:r.underline,labelTextColor:"#6d1331",inputTextColor:r.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(c.a,{name:"password",underlineColor:r.underline})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(c.a,{name:"rePassword",underlineColor:r.underline})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(d.a,{name:"pIva",type:"text",label:"Partita Iva",placeholder:"Partita Iva",underlineColor:r.underline,labelTextColor:"#6d1331",inputTextColor:r.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(d.a,{name:"phoneNumber",type:"text",label:"Numero di telefono",placeholder:"Numero di telefono",underlineColor:r.underline,labelTextColor:"#6d1331",inputTextColor:r.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(g.a,{setFieldValue:l,name:"address.regione",label:"Regione",items:u.a,labelTextColor:"#6d1331",underlineColor:r.underline})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(T.a,{setFieldValue:l,name:"address.provincia",label:"Provincia",labelTextColor:"#6d1331",underlineColor:r.underline})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(y.a,{setFieldValue:l,name:"address.comune",label:"Comune",labelTextColor:"#6d1331",underlineColor:r.underline})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(d.a,{name:"address.via",type:"text",label:"Via",placeholder:"Via",underlineColor:r.underline,labelTextColor:"#6d1331",inputTextColor:r.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(d.a,{name:"address.CAP",type:"number",max:"99999",label:"CAP",placeholder:"CAP",underlineColor:r.underline,labelTextColor:"#6d1331",inputTextColor:r.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(m.a,{name:"hideContact",label:"Nascondi info personali"})})]}),Object(t.jsx)(j.a,{fullWidth:!0,type:"submit",disabled:!a||!n,children:"Submit"}),Object(t.jsx)(x.a,{container:!0,justify:"flex-end",children:Object(t.jsx)(x.a,{item:!0,children:Object(t.jsx)(O.a,{href:"#",variant:"body2",children:"Already have an account? Sign in"})})})]})]})}})},S=r(0),E=r(20),I=r(32),V=r(29),A=r.n(V),k=r(466),F=r(467);n.default=function(){var e=Object(S.u)({onError:function(e){return Object(E.d)({type:"error",message:e.message})},onCompleted:function(e){var n,r=e.createUser;if(null===r||void 0===r||null===(n=r.errors)||void 0===n?void 0:n.length){var t=r.errors.map((function(e){return null===e||void 0===e?void 0:e.text}));Object(E.d)({type:"error",message:t.toString()})}else{var a,l;localStorage.setItem("wineapp-user-token",null===r||void 0===r||null===(a=r.response)||void 0===a?void 0:a.token),localStorage.setItem("wineapp-user-id",null===r||void 0===r||null===(l=r.response)||void 0===l?void 0:l.user._id),Object(E.b)(!0),Object(E.d)({type:"success",message:"welcome"}),Object(I.c)("/")}}}),n=Object(o.a)(e,1)[0],r=function(){var e=Object(i.a)(l.a.mark((function e(r){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete(t=A.a.cloneDeep(r)).reEmail,delete t.rePassword,t.address.CAP=t.address.CAP.toString(),e.next=6,n({variables:{userInput:t}});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(t.jsxs)(k.a,{component:"main",maxWidth:"xs",children:[Object(t.jsx)(P,{onSubmit:r}),";",Object(t.jsx)(F.a,{})]})}}}]);
//# sourceMappingURL=14.2e16dad4.chunk.js.map