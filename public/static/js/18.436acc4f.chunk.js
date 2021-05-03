(this["webpackJsonpwine-app-frontend"]=this["webpackJsonpwine-app-frontend"]||[]).push([[18],{544:function(e,n,r){"use strict";r.r(n);var t=r(4),a=r(56),l=r.n(a),i=r(82),o=r(28),s=(r(0),r(71)),d=r(162),c=r(180),u=r(476),b=r(474),m=r(478),j=r(439),x=r(440),p=r(131),h=r(452),O=r(429),C=r(202),v=r.n(C),f=r(91),g=r(479),T=r(480),y=r(481),w=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(2)},submit:{margin:e.spacing(3,0,2)},input:{color:"#6d1331"},underline:{color:"#6d1331","&:before":{borderBottom:"1px solid #6d1331"},"&&&&:hover:before":{borderBottom:"2px solid #6d1331"},"&:after":{borderBottom:"3px solid #6d1331"},disabled:{},focused:{},error:{}}}})),N={email:"",reEmail:"",password:"",rePassword:"",firstName:"",lastName:"",address:{via:"",comune:"",provincia:"",regione:"",CAP:"12345"},pIva:"",phoneNumber:"",hideContact:!1},P=function(e){var n=e.onSubmit;return Object(t.jsx)(s.c,{initialValues:N,validationSchema:b.c,onSubmit:n,children:function(e){var n=e.isValid,r=e.dirty,a=e.setFieldValue,l=w();return Object(t.jsxs)("div",{className:l.paper,children:[Object(t.jsx)(h.a,{className:l.avatar,children:Object(t.jsx)(v.a,{})}),Object(t.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(t.jsxs)(s.b,{className:l.form,children:[Object(t.jsxs)(x.a,{container:!0,spacing:2,children:[Object(t.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(t.jsx)(d.a,{name:"firstName",type:"text",label:"Nome",placeholder:"Nome",underlineColor:l.underline,labelTextColor:"#6d1331",inputTextColor:l.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(t.jsx)(d.a,{name:"lastName",type:"text",label:"Cognome",placeholder:"Cognome",underlineColor:l.underline,labelTextColor:"#6d1331",inputTextColor:l.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(d.a,{name:"email",type:"email",label:"Email",placeholder:"Email address",underlineColor:l.underline,labelTextColor:"#6d1331",inputTextColor:l.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(d.a,{name:"reEmail",type:"email",label:"Reinsert Email",placeholder:"Reinsert Email address",underlineColor:l.underline,labelTextColor:"#6d1331",inputTextColor:l.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(c.a,{name:"password",underlineColor:l.underline})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(c.a,{name:"rePassword",underlineColor:l.underline})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(d.a,{name:"pIva",type:"text",label:"Partita Iva",placeholder:"Partita Iva",underlineColor:l.underline,labelTextColor:"#6d1331",inputTextColor:l.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(d.a,{name:"phoneNumber",type:"text",label:"Numero di telefono",placeholder:"Numero di telefono",underlineColor:l.underline,labelTextColor:"#6d1331",inputTextColor:l.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(g.a,{setFieldValue:a,name:"address.regione",label:"Regione",items:u.a,labelTextColor:"#6d1331",underlineColor:l.underline})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(T.a,{setFieldValue:a,name:"address.provincia",label:"Provincia",labelTextColor:"#6d1331",underlineColor:l.underline})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(y.a,{setFieldValue:a,name:"address.comune",label:"Comune",labelTextColor:"#6d1331",underlineColor:l.underline})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(d.a,{name:"address.via",type:"text",label:"Via",placeholder:"Via",underlineColor:l.underline,labelTextColor:"#6d1331",inputTextColor:l.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(d.a,{name:"address.CAP",type:"number",max:"99999",label:"CAP",placeholder:"CAP",underlineColor:l.underline,labelTextColor:"#6d1331",inputTextColor:l.input})}),Object(t.jsx)(x.a,{item:!0,xs:12,children:Object(t.jsx)(m.a,{name:"hideContact",label:"Nascondi info personali"})})]}),Object(t.jsx)(j.a,{fullWidth:!0,type:"submit",disabled:!r||!n,children:"Submit"}),Object(t.jsx)(x.a,{container:!0,justify:"flex-end",children:Object(t.jsx)(x.a,{item:!0,children:Object(t.jsx)(O.a,{href:"#",variant:"body2",children:"Already have an account? Sign in"})})})]})]})}})},S=r(14),E=r(21),I=r(41),V=r(25),A=r.n(V),k=r(437),F=r(438);n.default=function(){var e=Object(S.v)({onError:function(e){return Object(E.d)({type:"error",message:e.message})},onCompleted:function(e){var n,r=e.createUser;if(null===r||void 0===r||null===(n=r.errors)||void 0===n?void 0:n.length){var t=r.errors.map((function(e){return null===e||void 0===e?void 0:e.text}));Object(E.d)({type:"error",message:t.toString()})}else{var a,l;localStorage.setItem("wineapp-user-token",null===r||void 0===r||null===(a=r.response)||void 0===a?void 0:a.token),localStorage.setItem("wineapp-user-id",null===r||void 0===r||null===(l=r.response)||void 0===l?void 0:l.user._id),Object(E.b)(!0),Object(E.d)({type:"success",message:"welcome"}),Object(I.c)("/")}}}),n=Object(o.a)(e,1)[0],r=function(){var e=Object(i.a)(l.a.mark((function e(r){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete(t=A.a.cloneDeep(r)).reEmail,delete t.rePassword,t.address.CAP=t.address.CAP.toString(),e.next=6,n({variables:{userInput:t}});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(t.jsxs)(k.a,{component:"main",maxWidth:"xs",children:[Object(t.jsx)(P,{onSubmit:r}),";",Object(t.jsx)(F.a,{})]})}}}]);
//# sourceMappingURL=18.436acc4f.chunk.js.map