(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{11:function(e,a,t){e.exports={makerLightGrey:"#e8e7e6",makerPink:"pink",makerLightPink:"#ffeae8",container:"image_file_input_container__31Eod",input:"image_file_input_input__1nxq9",button:"image_file_input_button__1lCuJ",grey:"image_file_input_grey__msCnJ",pink:"image_file_input_pink__2xVMR",loading:"image_file_input_loading__1ZDuj",spin:"image_file_input_spin__16rCw"}},16:function(e,a,t){e.exports={makerMain:"#0056fb",makerWhite:"white",makerBlack:"black",makerYellow:"#FBAC3F",makerBoldGrey:"#576175",header:"header_header__xr824",logo:"header_logo__jXZX2",img:"header_img__2iPrU",text:"header_text__3Xjh2",logout:"header_logout__331k2"}},22:function(e,a,t){e.exports={makerBlack:"black",makerRed:"#f05e45",makerWhite:"white",button:"button_delete_button__3-iOv"}},23:function(e,a,t){e.exports={makerBoldGrey:"#576175",makerLightGrey:"#e8e7e6",mediaQuery:"62rem",preview:"preview_preview__1ttUR",title:"preview_title__2x8xk",cards:"preview_cards__2gD6q"}},29:function(e,a,t){e.exports={makerBoldGrey:"#576175",makerLightGrey:"#e8e7e6",mediaQuery:"62rem",editor:"editor_editor__32CkP",title:"editor_title__30bf0"}},3:function(e,a,t){e.exports={makerBlack:"black",makerWhite:"white",makerLightGrey:"#e8e7e6",makerColorful:"linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",makerPink:"pink",makerBoldYellow:"#706015",makerShadow:"1px -1px 21px 5px rgba(156,141,141,0.75)",card:"card_card__1EBvu",icon:"card_icon__2OyNT",light:"card_light__7w-8_",dark:"card_dark__Se02V",colorful:"card_colorful__1s-i4",avatar:"card_avatar__18v3H",info:"card_info__1eGO-",company:"card_company__2fKBu",number:"card_number__1k2m2",email:"card_email__279MS",message:"card_message__3splz",nameTitle:"card_nameTitle__2yauH",line:"card_line__mLVNX",name:"card_name__3AiB3",title:"card_title__22AVM"}},30:function(e,a,t){e.exports={mediaQuery:"62rem",makerWhite:"white",makerShadow:"1px -1px 21px 5px rgba(156,141,141,0.75)",maker:"maker_maker__1ZZzl",container:"maker_container__1q76v"}},37:function(e,a,t){e.exports={makerBg:"#0B90E3",makerColorful:"linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",app:"app_app__2C0tB"}},38:function(e,a,t){e.exports={makerMain:"#0056fb",makerGrey:"#d2d9eb",footer:"footer_footer__3jorh"}},4:function(e,a,t){e.exports={makerMain:"#0056fb",makerBlue:"#25437A",makerLightBlue:"#7a9ad3",makerGrey:"#d2d9eb",makerLightPink:"#ffeae8",makerWhite:"white",makerShadow:"1px -1px 21px 5px rgba(156,141,141,0.75)",login:"login_login__3Gh3R",title:"login_title__1QBae",text:"login_text__2yHLX",img:"login_img__1Kydn",container:"login_container__3XKoZ",item:"login_item__V_Ypa",button:"login_button__2LfHb",icon:"login_icon__2yZYV"}},41:function(e,a,t){e.exports={makerBlack:"black",makerBlue2:"undefined",makerWhite:"white",makerBlue:"#25437A",button:"button_add_button__7y65u"}},47:function(e,a,t){e.exports={makerGrey:"#d2d9eb",makerColorful:"linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"}},61:function(e,a,t){"use strict";t.r(a);var n=t(7),c=t(1),r=t.n(c),i=t(36),s=t.n(i),o=(t(47),t(42)),l=t(2),u=t(37),m=t.n(u),d=t(16),j=t.n(d),b=t(0),_=Object(c.memo)((function(e){var a=e.onLogout;return Object(b.jsxs)("header",{className:j.a.header,children:[a&&Object(b.jsx)("button",{className:j.a.logout,onClick:a,children:"Logout"}),Object(b.jsxs)("div",{className:j.a.logo,children:[Object(b.jsx)("img",{className:j.a.img,src:"/images/logo02.svg",alt:"\ub85c\uace0"}),Object(b.jsx)("h1",{className:j.a.text,children:"Cardmaker"})]})]})})),f=t(38),p=t.n(f),h=Object(c.memo)((function(){return Object(b.jsx)("footer",{className:p.a.footer,children:Object(b.jsx)("p",{children:"Copyright 2021. Jun"})})})),O=t(4),x=t.n(O),g=function(e){var a=e.authService,t=Object(l.f)(),n=function(e){t.push({pathname:"/maker",state:{id:e}})},r=function(e){a.login(e.currentTarget.textContent).then((function(e){return n(e.user.uid)}))};return Object(c.useEffect)((function(){a.onAuthChange((function(e){e&&n(e.uid)}))})),Object(b.jsxs)("section",{className:x.a.login,children:[Object(b.jsx)(_,{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{className:x.a.title,children:"Welcome to Cardmaker"}),Object(b.jsxs)("p",{className:x.a.text,children:["Start with your social account and Make your",Object(b.jsx)("br",{}),"own business card!"]}),Object(b.jsx)("img",{class:x.a.img,src:"/images/main_bg.png",alt:"\uba54\uc778\uc774\ubbf8\uc9c0"}),Object(b.jsxs)("ul",{className:x.a.container,children:[Object(b.jsx)("li",{className:x.a.item,children:Object(b.jsxs)("button",{className:x.a.button,onClick:r,children:[Object(b.jsx)("img",{className:x.a.icon,src:"/images/google.svg",alt:"\uad6c\uae00"}),Object(b.jsx)("p",{children:"Sign in with Google"})]})}),Object(b.jsx)("li",{className:x.a.item,children:Object(b.jsxs)("button",{className:x.a.button,onClick:r,children:[Object(b.jsx)("img",{className:x.a.icon,src:"/images/github.svg",alt:"\uae43\ud5c8\ube0c"}),Object(b.jsx)("p",{children:"Sign in with Github"})]})}),Object(b.jsx)("li",{className:x.a.item,children:Object(b.jsxs)("button",{className:x.a.button,onClick:r,disabled:"disabled",children:[Object(b.jsx)("img",{className:x.a.icon,src:"/images/facebook.svg",alt:"\ud398\uc774\uc2a4\ubd81"}),Object(b.jsx)("p",{children:"Sign in with Facebook"})]})})]})]}),Object(b.jsx)(h,{})]})},k=t(10),v=t(20),N=t(22),C=t.n(N),y=Object(c.memo)((function(e){var a=e.name,t=e.onClick;return Object(b.jsx)("button",{className:"".concat(C.a.button," ").concat(a?C.a.red:C.a.blue),onClick:t,children:a||"Add"})})),A=t(8),S=t.n(A),E=function(e){var a=e.FileInput,t=e.card,c=e.updateCard,r=e.deleteCard,i=t.name,s=t.company,o=t.title,l=t.number,u=t.email,m=t.message,d=t.theme,j=t.fileName,_=function(e){null!=e.currentTarget&&(e.preventDefault(),c(Object(n.a)(Object(n.a)({},t),{},Object(v.a)({},e.currentTarget.name,e.currentTarget.value))))};return Object(b.jsxs)("form",{className:S.a.form,children:[Object(b.jsx)("input",{className:S.a.input,type:"text",name:"name",value:i,onChange:_}),Object(b.jsx)("input",{className:S.a.input,type:"text",name:"title",value:o,onChange:_}),Object(b.jsx)("input",{className:S.a.input,type:"text",name:"company",value:s,onChange:_}),Object(b.jsx)("input",{className:S.a.input,type:"text",name:"number",value:l,onChange:_}),Object(b.jsx)("input",{className:S.a.input,type:"text",name:"email",value:u,onChange:_}),Object(b.jsxs)("select",{className:S.a.select,name:"theme",value:d,onChange:_,children:[Object(b.jsx)("option",{value:"light",children:"Light"}),Object(b.jsx)("option",{value:"dark",children:"Dark"}),Object(b.jsx)("option",{value:"colorful",children:"Colorful"})]}),Object(b.jsx)("textarea",{className:S.a.textarea,name:"message",value:m,onChange:_}),Object(b.jsx)("div",{className:S.a.fileInput,children:Object(b.jsx)(a,{name:j,onFileChange:function(e){c(Object(n.a)(Object(n.a)({},t),{},{fileName:e.name,fileURL:e.url}))}})}),Object(b.jsx)(y,{className:S.a.delete,name:"Delete",onClick:function(e){e.preventDefault(),r(t)}})]})},R=t(41),w=t.n(R),I=Object(c.memo)((function(e){var a=e.name,t=e.onClick;return Object(b.jsx)("button",{className:w.a.button,onClick:t,children:a||"Add"})})),P=t(9),B=t.n(P),T=Object(c.memo)((function(e){var a=e.FileInput,t=e.onAdd,n=Object(c.useRef)(),r=Object(c.useRef)(),i=Object(c.useRef)(),s=Object(c.useRef)(),o=Object(c.useRef)(),l=Object(c.useRef)(),u=Object(c.useRef)(),m=Object(c.useRef)(),d=Object(c.useState)({fileName:null,fileURL:null}),j=Object(k.a)(d,2),_=j[0],f=j[1];return Object(b.jsxs)("form",{ref:n,className:B.a.form,children:[Object(b.jsx)("input",{ref:r,className:B.a.input,type:"text",name:"name",placeholder:"Name"}),Object(b.jsx)("input",{ref:o,className:B.a.input,type:"text",name:"title",placeholder:"Title"}),Object(b.jsx)("input",{ref:i,className:B.a.input,type:"text",name:"company",placeholder:"Company"}),Object(b.jsx)("input",{ref:l,className:B.a.input,type:"text",name:"number",placeholder:"Phone Number"}),Object(b.jsx)("input",{ref:u,className:B.a.input,type:"text",name:"email",placeholder:"Email"}),Object(b.jsxs)("select",{ref:s,className:B.a.select,name:"theme",placeholder:"Theme",children:[Object(b.jsx)("option",{placeholder:"light",children:"light"}),Object(b.jsx)("option",{placeholder:"dark",children:"dark"}),Object(b.jsx)("option",{placeholder:"colorful",children:"colorful"})]}),Object(b.jsx)("textarea",{ref:m,className:B.a.textarea,name:"message",placeholder:"Message"}),Object(b.jsx)("div",{className:B.a.fileInput,children:Object(b.jsx)(a,{name:_.fileName,onFileChange:function(e){console.log(e),f({fileName:e.name,fileURL:e.url})}})}),Object(b.jsx)(I,{className:B.a.add,name:"Add",onClick:function(e){e.preventDefault();var a={id:Date.now(),name:r.current.value||"",company:i.current.value||"",theme:s.current.value||"",title:o.current.value||"",number:l.current.value||"",email:u.current.value||"",message:m.current.value||"",fileName:_.fileName||"",fileURL:_.fileURL||""};n.current.reset(),f({fileName:null,fileURL:null}),t(a)}})]})})),F=t(29),G=t.n(F),L=function(e){var a=e.FileInput,t=e.cards,n=e.addCard,c=e.updateCard,r=e.deleteCard;return Object(b.jsxs)("section",{className:G.a.editor,children:[Object(b.jsx)("h1",{className:G.a.title,children:"\ud83e\udd14 Input your information.."}),Object.keys(t).map((function(e){return Object(b.jsx)(E,{FileInput:a,card:t[e],updateCard:c,deleteCard:r},e)})),Object(b.jsx)(T,{FileInput:a,onAdd:n})]})},D=t(3),U=t.n(D);function M(e){switch(e){case"dark":return U.a.dark;case"light":return U.a.light;case"colorful":return U.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var W=Object(c.memo)((function(e){var a=e.card,t=a.name,n=a.company,c=a.title,r=a.number,i=a.email,s=a.message,o=a.theme,l=a.fileURL||"/images/user.svg";return Object(b.jsxs)("li",{className:"".concat(U.a.card," ").concat(M(o)),children:[Object(b.jsx)("div",{className:U.a.img,children:Object(b.jsx)("img",{className:U.a.avatar,src:l,alt:"profile"})}),Object(b.jsxs)("div",{className:U.a.info,children:[Object(b.jsxs)("div",{className:U.a.nameTitle,children:[Object(b.jsx)("h1",{className:U.a.name,children:t}),Object(b.jsx)("p",{className:U.a.title,children:c})]}),Object(b.jsx)("div",{className:U.a.line}),Object(b.jsxs)("p",{className:U.a.company,children:[Object(b.jsx)("span",{className:U.a.icon,children:Object(b.jsx)("i",{className:"fas fa-briefcase"})}),n]}),Object(b.jsxs)("p",{className:U.a.number,children:[Object(b.jsx)("span",{className:U.a.icon,children:Object(b.jsx)("i",{className:"fas fa-phone-alt"})}),r]}),Object(b.jsxs)("p",{className:U.a.email,children:[Object(b.jsx)("span",{className:U.a.icon,children:Object(b.jsx)("i",{className:"fas fa-envelope"})}),i]}),Object(b.jsx)("p",{className:U.a.message,children:s})]})]})})),K=t(23),Q=t.n(K),H=function(e){var a=e.cards;return Object(b.jsxs)("section",{className:Q.a.preview,children:[Object(b.jsx)("h1",{className:Q.a.title,children:"\ud83d\ude03 Your Business Card!"}),Object(b.jsx)("ul",{className:Q.a.cards,children:Object.keys(a).map((function(e){return Object(b.jsx)(W,{card:a[e]},e)}))})]})},V=t(30),X=t.n(V),Y=function(e){var a,t=e.FileInput,r=e.authService,i=e.cardRepository,s=Object(l.f)(),o=null===s||void 0===s||null===(a=s.location)||void 0===a?void 0:a.state,u=Object(c.useState)({}),m=Object(k.a)(u,2),d=m[0],j=m[1],f=Object(c.useState)(o&&o.id),p=Object(k.a)(f,2),O=p[0],x=p[1],g=Object(c.useCallback)((function(){r.logout()}),[r]);Object(c.useEffect)((function(){if(O){var e=i.syncCards(O,(function(e){j(e)}));return function(){return e()}}}),[O,i]),Object(c.useEffect)((function(){r.onAuthChange((function(e){e?x(e.uid):s.push("/")}))}),[s,r]);var v=function(e){j((function(a){var t=Object(n.a)({},a);return t[e.id]=e,t})),i.saveCard(O,e)};return Object(b.jsxs)("section",{className:X.a.maker,children:[Object(b.jsx)(_,{onLogout:g}),Object(b.jsxs)("div",{className:X.a.container,children:[Object(b.jsx)(L,{FileInput:t,cards:d,addCard:v,updateCard:v,deleteCard:function(e){j((function(a){var t=Object(n.a)({},a);return delete t[e.id],t})),i.removeCard(O,e)}}),Object(b.jsx)(H,{cards:d})]}),Object(b.jsx)(h,{})]})};var Z=function(e){var a=e.FileInput,t=e.authService,n=e.cardRepository;return Object(b.jsx)("div",{className:m.a.app,children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(g,{authService:t})}),Object(b.jsx)(l.a,{path:"/Maker",children:Object(b.jsx)(Y,{FileInput:a,authService:t,cardRepository:n})})]})})})},q=t(13),J=t(14),z=t(18),$=t.n(z),ee=(t(53),t(55),{apiKey:"AIzaSyDwLm1XhvFljsAOQUlF34tTvRSbg3dqysI",authDomain:"business-card-maker-60514.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/business-card-maker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDwLm1XhvFljsAOQUlF34tTvRSbg3dqysI",REACT_APP_FIREBASE_APP_ID:"1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",REACT_APP_FIREBASE_AUTH_DOMAIN:"business-card-maker-60514.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://business-card-maker-60514-default-rtdb.firebaseio.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-8GSGZQ44ST",REACT_APP_FIREBASE_MESSAGGING_SENDER_ID:"65211879809",REACT_APP_FIREBASE_PROJECT_ID:"business-card-maker-60514",REACT_APP_FIREBASE_STORAGE_BUCKET:"myapp-project-123.appspot.com"}).REACT_APP_FIREBASE_DB_URL,projectId:"business-card-maker-60514",storageBucket:"myapp-project-123.appspot.com",messagingSenderId:"65211879809",appId:"1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",measurementId:"G-8GSGZQ44ST"}),ae=$.a.initializeApp(ee),te=ae.auth(),ne=ae.database(),ce=new $.a.auth.GoogleAuthProvider,re=new $.a.auth.FacebookAuthProvider,ie=new $.a.auth.GithubAuthProvider,se=function(){function e(){Object(q.a)(this,e)}return Object(J.a)(e,[{key:"login",value:function(e){var a=this.getProvider(e);return te.signInWithPopup(a)}},{key:"logout",value:function(){te.signOut()}},{key:"onAuthChange",value:function(e){te.onAuthStateChanged((function(a){e(a)}))}},{key:"getProvider",value:function(e){switch(e){case"Sign in with Google":return ce;case"Sign in with Github":return ie;case"Sign in with Facebook":return re;default:throw new Error("not supported provider: ".concat(e))}}}]),e}(),oe=t(15),le=t.n(oe),ue=t(21),me=function(){function e(){Object(q.a)(this,e)}return Object(J.a)(e,[{key:"upload",value:function(){var e=Object(ue.a)(le.a.mark((function e(a){var t,n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",a),t.append("upload_preset","rctfsd0n"),e.next=5,fetch("https://api.cloudinary.com/v1_1/dgm5nhaob/upload",{method:"POST",body:t});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}]),e}(),de=t(11),je=t.n(de),be=Object(c.memo)((function(e){var a=e.imageUploader,t=e.name,n=e.onFileChange,r=Object(c.useState)(!1),i=Object(k.a)(r,2),s=i[0],o=i[1],l=Object(c.useRef)(),u=function(){var e=Object(ue.a)(le.a.mark((function e(t){var c;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),console.log(t.target.files[0]),e.next=4,a.upload(t.target.files[0]);case 4:c=e.sent,o(!1),n({name:c.original_filename,url:c.url});case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:je.a.container,children:[Object(b.jsx)("input",{ref:l,className:je.a.input,type:"file",accept:"image/*",name:"file",onChange:u}),!s&&Object(b.jsx)("button",{className:"".concat(je.a.button," ").concat(t?je.a.pink:je.a.grey),onClick:function(e){e.preventDefault(),l.current.click()},children:t||"No file"}),s&&Object(b.jsx)("div",{className:je.a.loading})]})})),_e=function(){function e(){Object(q.a)(this,e)}return Object(J.a)(e,[{key:"syncCards",value:function(e,a){var t=ne.ref("".concat(e,"/cards"));return t.on("value",(function(e){var t=e.val();t&&a(t)})),function(){return t.off()}}},{key:"saveCard",value:function(e,a){ne.ref("".concat(e,"/cards/").concat(a.id)).set(a)}},{key:"removeCard",value:function(e,a){ne.ref("".concat(e,"/cards/").concat(a.id)).remove()}}]),e}(),fe=(t(58),new se),pe=new _e,he=new me,Oe=Object(c.memo)((function(e){return Object(b.jsx)(be,Object(n.a)(Object(n.a)({},e),{},{imageUploader:he}))}));s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(Z,{authService:fe,FileInput:Oe,cardRepository:pe})}),document.getElementById("root"))},8:function(e,a,t){e.exports={makerBlack:"black",makerWhite:"white",form:"card_edit_form_form__2dmCV",input:"card_edit_form_input__2BRN3",textarea:"card_edit_form_textarea__1SWOY",select:"card_edit_form_select__2ubWq",button:"card_edit_form_button__2ECtM",fileInput:"card_edit_form_fileInput__2CgTk"}},9:function(e,a,t){e.exports={makerBlack:"black",makerWhite:"white",form:"card_add_form_form__23rwe",input:"card_add_form_input__8UiKP",textarea:"card_add_form_textarea__10miQ",select:"card_add_form_select__l3b81",button:"card_add_form_button__3AGUM",fileInput:"card_add_form_fileInput__30Y5m"}}},[[61,1,2]]]);
//# sourceMappingURL=main.71667ba3.chunk.js.map