(this["webpackJsonpxml5e-converter"]=this["webpackJsonpxml5e-converter"]||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},438:function(e,t,n){},439:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(18),i=n.n(c),r=(n(135),n(30)),o=n(3),l=n(77),d=n(126),j=n(127),b=n(24),u=n(131),h=n(130),m=(n(136),n(0)),O=function(e){var t=e.sendData,n=Object(a.useState)(!1),s=Object(o.a)(n,2),c=s[0],i=s[1],r=Object(a.useState)(!1),l=Object(o.a)(r,2),d=l[0],j=l[1],b=Object(a.useState)(!1),u=Object(o.a)(b,2),h=u[0],O=u[1],p=Object(a.useState)(!1),x=Object(o.a)(p,2),g=x[0],f=x[1],v=Object(a.useState)(!1),S=Object(o.a)(v,2),y=S[0],N=S[1],k=Object(a.useState)(!1),C=Object(o.a)(k,2),D=C[0],F=C[1],w=Object(a.useState)(!1),I=Object(o.a)(w,2),T=I[0],A=I[1],R=Object(a.useState)(!1),P=Object(o.a)(R,2),M=P[0],E=P[1],L=Object(a.useState)(!1),z=Object(o.a)(L,2),B=z[0],H=z[1],V=Object(a.useState)(!1),U=Object(o.a)(V,2),G=U[0],J=U[1],W=Object(a.useState)(!1),X=Object(o.a)(W,2),q=X[0],K=X[1],Q=Object(a.useState)(!1),Y=Object(o.a)(Q,2),Z=Y[0],$=Y[1],_=Object(a.useState)(!1),ee=Object(o.a)(_,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(!1),se=Object(o.a)(ae,2),ce=se[0],ie=se[1],re=Object(a.useState)(!1),oe=Object(o.a)(re,2),le=oe[0],de=oe[1],je=[i,j,O,f,N,F,A,E,H,K,J,$,ne,ie,de],be=[c,d,h,g,y,D,T,M,B,q,G,Z,te,ce,le];return Object(a.useEffect)((function(){t("conditionImmunities",{blinded:c,charmed:d,deafened:h,exhaustion:g,frightened:y,grappled:D,incapacitated:T,invisible:M,paralyzed:B,poisoned:G,petrified:q,prone:Z,restrained:te,stunned:ce,unconscious:le})}),be),Object(m.jsx)("div",{className:"row button-box",children:["Blinded","Charmed","Deafened","Exhaustion","Frightened","Grappled","Incapacitated","Invisible","Paralyzed","Petrified","Poisoned","Prone","Restrained","Stunned","Unconscious"].map((function(e,t){return Object(m.jsxs)("div",{className:"custom-control custom-switch",children:[Object(m.jsx)("input",{type:"checkbox",className:"custom-control-input",id:e+"Btn",onClick:function(e){return je[t](e.target.checked)},defaultChecked:be[t]}),Object(m.jsx)("label",{className:"custom-control-label",htmlFor:e+"Btn",children:e})]},t)}))})},p=function(e){var t=e.sendData,n=Object(a.useState)("none"),s=Object(o.a)(n,2),c=s[0],i=s[1],r=Object(a.useState)("none"),l=Object(o.a)(r,2),d=l[0],j=l[1],b=Object(a.useState)("none"),u=Object(o.a)(b,2),h=u[0],O=u[1],p=Object(a.useState)("none"),x=Object(o.a)(p,2),g=x[0],f=x[1],v=Object(a.useState)("none"),S=Object(o.a)(v,2),y=S[0],N=S[1],k=Object(a.useState)("none"),C=Object(o.a)(k,2),D=C[0],F=C[1],w=Object(a.useState)("none"),I=Object(o.a)(w,2),T=I[0],A=I[1],R=Object(a.useState)("none"),P=Object(o.a)(R,2),M=P[0],E=P[1],L=Object(a.useState)("none"),z=Object(o.a)(L,2),B=z[0],H=z[1],V=Object(a.useState)("none"),U=Object(o.a)(V,2),G=U[0],J=U[1],W=Object(a.useState)("none"),X=Object(o.a)(W,2),q=X[0],K=X[1],Q=Object(a.useState)("none"),Y=Object(o.a)(Q,2),Z=Y[0],$=Y[1],_=Object(a.useState)("none"),ee=Object(o.a)(_,2),te=ee[0],ne=ee[1],ae=Object(a.useState)("none"),se=Object(o.a)(ae,2),ce=se[0],ie=[i,j,O,f,N,F,A,E,H,J,K,$,ne,se[1]];return Object(a.useEffect)((function(){t("DamageTypes",{Slashing:c,Piercing:d,Bludgeoning:h,Poison:g,Acid:y,Fire:D,Cold:T,Radiant:M,Necrotic:B,Lightning:G,Thunder:q,Force:Z,Psychic:te,Nonmagical:ce})}),[c,d,h,g,y,D,T,M,B,G,q,Z,te,ce]),Object(m.jsx)("div",{className:"form-group row",children:["Slashing","Piercing","Bludgeoning","Poison","Acid","Fire","Cold","Radiant","Necrotic","Lightning","Thunder","Force","Psychic","Nonmagical"].map((function(e,t){return Object(m.jsxs)("div",{className:"form-check form-check-inline",id:e+"Radio",onChange:function(e){ie[t](e.target.value)},children:[Object(m.jsx)("label",{className:"form-check-label",htmlFor:e+"Box",children:e}),Object(m.jsxs)("div",{className:"form-check form-check-inline",children:[Object(m.jsx)("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions"+e,id:e+"inlineRadio1",value:"none",defaultChecked:!0}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio1",children:Object(m.jsx)("i",{className:"fa fa-fist-raised","aria-hidden":"true"})})]}),Object(m.jsxs)("div",{className:"form-check form-check-inline",children:[Object(m.jsx)("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions"+e,id:e+"inlineRadio2",value:"resistant"}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio2",children:"R"})]}),Object(m.jsxs)("div",{className:"form-check form-check-inline",children:[Object(m.jsx)("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions"+e,id:e+"inlineRadio3",value:"immune"}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio3",children:"I"})]}),Object(m.jsxs)("div",{className:"form-check form-check-inline",children:[Object(m.jsx)("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions"+e,id:e+"inlineRadio4",value:"vulnerable"}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio4",children:"V"})]})]},t)}))})},x=function(e){var t=e.sendData,n=Object(a.useState)(""),s=Object(o.a)(n,2),c=s[0],i=s[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),d=l[0],j=l[1],b=Object(a.useState)(""),u=Object(o.a)(b,2),h=u[0],O=u[1],p=Object(a.useState)(""),x=Object(o.a)(p,2),g=x[0],f=x[1],v=Object(a.useState)(""),S=Object(o.a)(v,2),y=S[0],N=S[1],k=Object(a.useState)(""),C=Object(o.a)(k,2),D=C[0],F=C[1];Object(a.useEffect)((function(){t("savingThrows",{str:c,dex:d,con:h,int:g,wis:y,cha:D})}),[c,d,h,g,y,D]);var w=[i,j,O,f,N,F];return Object(m.jsx)("div",{className:"form-group row text-box-spaced",children:["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"].map((function(e,t){return Object(m.jsxs)("div",{className:"form-check col-sm-4",children:[Object(m.jsx)("label",{className:"form-check-label",htmlFor:e+"Box",children:e}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:e+"Mod"}),Object(m.jsx)("input",{type:"text",className:"form-control bg-dark text-light",name:"",id:e+"Mod","aria-describedby":"helpId",placeholder:"+0",onChange:function(e){return w[t](e.target.value)}}),Object(m.jsx)("small",{id:"helpId",className:"form-text text-muted",children:"Mod value, ex. +4"})]})]},t)}))})},g=function(e){var t=e.sendData,n=Object(a.useState)(""),s=Object(o.a)(n,2),c=s[0],i=s[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),d=l[0],j=l[1],b=Object(a.useState)(""),u=Object(o.a)(b,2),h=u[0],O=u[1],p=Object(a.useState)(""),x=Object(o.a)(p,2),g=x[0],f=x[1],v=Object(a.useState)(""),S=Object(o.a)(v,2),y=S[0],N=S[1],k=Object(a.useState)(""),C=Object(o.a)(k,2),D=C[0],F=C[1],w=Object(a.useState)(""),I=Object(o.a)(w,2),T=I[0],A=I[1],R=Object(a.useState)(""),P=Object(o.a)(R,2),M=P[0],E=P[1],L=Object(a.useState)(""),z=Object(o.a)(L,2),B=z[0],H=z[1],V=Object(a.useState)(""),U=Object(o.a)(V,2),G=U[0],J=U[1],W=Object(a.useState)(""),X=Object(o.a)(W,2),q=X[0],K=X[1],Q=Object(a.useState)(""),Y=Object(o.a)(Q,2),Z=Y[0],$=Y[1],_=Object(a.useState)(""),ee=Object(o.a)(_,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(""),se=Object(o.a)(ae,2),ce=se[0],ie=se[1],re=Object(a.useState)(""),oe=Object(o.a)(re,2),le=oe[0],de=oe[1],je=Object(a.useState)(""),be=Object(o.a)(je,2),ue=be[0],he=be[1],me=Object(a.useState)(""),Oe=Object(o.a)(me,2),pe=Oe[0],xe=Oe[1],ge=Object(a.useState)(""),fe=Object(o.a)(ge,2),ve=fe[0],Se=[i,j,O,f,N,F,A,E,H,J,K,$,ne,ie,de,he,xe,fe[1]];return Object(a.useEffect)((function(){t("skills",{Acrobatics:c,AnimalHandling:d,Arcana:h,Athletics:g,Deception:y,History:D,Insight:T,Intimidation:M,Investigation:B,Medicine:G,Nature:q,Perception:Z,Performance:te,Persuasion:ce,Religion:le,SlightOfHand:ue,Stealth:pe,Survival:ve})}),[c,d,h,g,y,D,T,M,B,G,q,Z,te,ce,le,ue,pe,ve]),Object(m.jsx)("div",{children:["Acrobatics","Animal Handling","Arcana","Athletics","Deception","History","Insight","Intimidation","Investigation","Medicine","Nature","Perception","Performance","Persuasion","Religion","Slight Of Hand","Stealth","Survival"].map((function(e,t){return Object(m.jsx)("div",{className:"form-check-inline form-group",children:Object(m.jsxs)("div",{className:"input-group-prepend",children:[Object(m.jsx)("span",{className:"input-group-text bg-dark text-light",htmlFor:e+"Box",children:e}),Object(m.jsx)("input",{type:"text",className:"form-control col-xs-1 bg-dark text-light",name:"",id:e+"Mod","aria-describedby":"helpId",placeholder:"+0 (default)",onChange:function(e){return Se[t](e.target.value)}})]})},t)}))})},f=function(e){e.onChange,e.state;var t=e.sendData,n=Object(a.useState)(10),s=Object(o.a)(n,2),c=s[0],i=s[1],r=Object(a.useState)(10),l=Object(o.a)(r,2),d=l[0],j=l[1],b=Object(a.useState)(10),u=Object(o.a)(b,2),h=u[0],O=u[1],p=Object(a.useState)(10),x=Object(o.a)(p,2),g=x[0],f=x[1],v=Object(a.useState)(10),S=Object(o.a)(v,2),y=S[0],N=S[1],k=Object(a.useState)(10),C=Object(o.a)(k,2),D=C[0],F=C[1],w=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];Object(a.useEffect)((function(){t("stats",{str:c,dex:d,con:h,int:g,wis:y,cha:D})}),[c,d,h,g,y,D]);var I=function(){return w.map((function(e,t){return Object(m.jsx)("option",{value:e,children:e},t)}))};return Object(m.jsxs)("div",{className:"form-group text-box-spaced",children:[Object(m.jsx)("h3",{children:"Stats"}),Object(m.jsxs)("div",{className:"form-group row",children:[Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"strSelector",children:"Strength"}),Object(m.jsx)("select",{id:"strSelector",defaultValue:"10",name:"strStat",onChange:function(e){return i(parseInt(e.currentTarget.value))},children:I()})]}),Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"dexSelector",children:" Dexterity"}),Object(m.jsx)("select",{id:"dexSelector",defaultValue:"10",name:"dexStat",onChange:function(e){return j(parseInt(e.currentTarget.value))},children:I()})]}),Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"conSelector",children:" Constitution"}),Object(m.jsx)("select",{id:"conSelector",defaultValue:"10",name:"conStat",onChange:function(e){return O(parseInt(e.currentTarget.value))},children:I()})]}),Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"intSelector",children:" Intelligence"}),Object(m.jsx)("select",{id:"intSelector",defaultValue:"10",name:"intStat",onChange:function(e){return f(parseInt(e.currentTarget.value))},children:I()})]}),Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"wisSelector",children:" Wisdom"}),Object(m.jsx)("select",{id:"wisSelector",defaultValue:"10",name:"wisStat",onChange:function(e){return N(parseInt(e.currentTarget.value))},children:I()})]}),Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"chaSelector",children:" Charisma"}),Object(m.jsx)("select",{id:"chaSelector",defaultValue:"10",name:"chaStat",onChange:function(e){return F(parseInt(e.currentTarget.value))},children:I()})]})]})]})},v=function(e){var t=e.sendData,n=Object(a.useState)(""),s=Object(o.a)(n,2),c=s[0],i=s[1];return Object(a.useEffect)((function(){t("cr",c)}),[c]),Object(m.jsxs)("div",{className:"form-group text-box-spaced",children:[Object(m.jsx)("label",{htmlFor:"crForm",children:"Challenge Rating"}),Object(m.jsx)("select",{className:"form-control bg-dark text-light text-box-spaced",name:"",id:"crForm",onChange:function(e){i(e.target.value)},children:["0","1/8","1/4","1/2","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"].map((function(e,t){return Object(m.jsx)("option",{value:e,children:e},t)}))})]})},S=(n(138),function(e){var t=e.state,n=e.sendData,s=function(e){var t=function(e,t){e<t-1&&(c+=", ")},n=Object.entries(e.savingThrows).filter((function(e){return Object(o.a)(e,2)[1]})).map((function(e){return Object(o.a)(e,1)[0]})),a=Object.entries(e.skills).filter((function(e){return Object(o.a)(e,2)[1]})).map((function(e){return Object(o.a)(e,1)[0]})),s=Object.keys(e.DamageTypes),c="";(c+="\t<monster>\n",e.name&&(c+="\t\t<name>"+e.name+"</name>\n"),e.size&&(c+="\t\t<size>"+e.size+"</size>\n"),e.type&&(c+="\t\t<type>"+e.type+"</type>\n"),e.alignment&&(c+="\t\t<alignment>"+e.alignment+"</alignment>\n"),e.ac&&(c+="\t\t<ac>"+e.ac+"</ac>\n"),e.hp&&(c+="\t\t<hp>"+e.hp+"</hp>\n"),e.speed&&(c+="\t\t<speed>"+e.speed+"</speed>\n"),e.stats.str&&(c+="\t\t<str>"+e.stats.str+"</str>\n"),e.stats.dex&&(c+="\t\t<dex>"+e.stats.dex+"</dex>\n"),e.stats.con&&(c+="\t\t<con>"+e.stats.con+"</con>\n"),e.stats.int&&(c+="\t\t<int>"+e.stats.int+"</int>\n"),e.stats.wis&&(c+="\t\t<wis>"+e.stats.wis+"</wis>\n"),e.stats.cha&&(c+="\t\t<cha>"+e.stats.cha+"</cha>\n"),Object.keys(e.savingThrows).some((function(t){return e.savingThrows[t]}))&&(c+="\t\t<saves>",n.map((function(a,s){return function(n,a,s){e.savingThrows[n]&&(c+=n+" "+e.savingThrows[n]),t(a,s)}(a,s,n.length)})),c+="</saves>\n"),Object.keys(e.skills).some((function(t){return e.skills[t]}))&&(c+="\t\t<skills>",a.map((function(n,s){return function(n,a,s){e.skills[n]&&(c+=n+" "+e.skills[n]),t(a,s)}(n,s,a.length)})),c+="</skills>\n"),Object.keys(e.DamageTypes).some((function(t){return"resist"==e.DamageTypes[t]}))&&(c+="\t<resist>",s.map((function(t){"resist"==e.DamageTypes[t]&&(c+=t+" ")})),c+="</resist>\n"),Object.keys(e.DamageTypes).some((function(t){return"immune"==e.DamageTypes[t]}))&&(c+="\t\t<immune>",s.map((function(t){console.log(t," checked for immune"),"immune"==e.DamageTypes[t]&&(c+=t+" ")})),c+="</immune>\n"),Object.keys(e.DamageTypes).some((function(t){return"vulnerable"==e.DamageTypes[t]})))&&(c+="\t\t<vulnerable>",Object.keys(e.DamageTypes).map((function(t){"vulnerable"==e.DamageTypes[t]&&(c+=t+" ")})),c+="</vulnerable>\n");if(e.senses&&(c+="\t\t<senses>"+e.senses+"</senses>\n"),e.passive&&(c+="\t\t<passive>"+e.passive+"</passive>\n"),e.languages&&(c+="\t\t<languages>"+e.languages+"</languages>\n"),e.cr&&(c+="\t\t<cr>"+e.cr+"</cr>\n"),e.traits.length>0)for(var i=0;i<e.traits.length;i++){var r=e.traits[i];c+="\t\t<trait>\n\t\t\t<name>"+r.title+"</name>\n\t\t\t<text>"+r.text+"</text>\n\t\t</trait>\n"}if(e.actions.length>0)for(var l=0;l<e.actions.length;l++){var d=e.actions[l];c+="\t\t<action>\n\t\t\t<name>"+d.title+"</name>\n\t\t\t<text>"+d.text+"</text>\n\t\t</action>\n"}if(e.legendaryActions.length>0)for(var j=0;j<e.legendaryActions.length;j++){var b=e.legendaryActions[j];c+="\t\t<legendary>\n\t\t\t<name>"+b.title+"</name>\n\t\t\t<text>"+b.text+"</text>\n\t\t</legendary>\n"}return e.description&&(c+="\t\t<description>"+e.description+"</description>\n"),c+="\t</monster>"}(t);return Object(a.useEffect)((function(){n("monsterString",s)}),[s]),Object(m.jsxs)("div",{className:"jumbotron bg-dark text-light",children:[Object(m.jsx)("h1",{className:"display-3",children:"Output:"}),Object(m.jsx)("p",{className:"output-text",style:{whiteSpace:"pre-wrap"},children:s})]})}),y=(n(139),n(19)),N=n.n(y),k=function(e){var t=e.sendCardData,n=e.eleindex,s=e.remove,c=e.type,i=Object(a.useState)(""),r=Object(o.a)(i,2),l=r[0],d=r[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),u=b[0],h=b[1];return Object(a.useEffect)((function(){t({title:l,text:u},n)}),[l,u]),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"card text-white bg-dark mb-3 d-inline-block",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("input",{type:"text",className:"form-control bg-dark text-light",name:"title",id:"cardTitle","aria-describedby":"helpId",placeholder:"",onChange:function(e){d(e.target.value)}})}),Object(m.jsxs)("small",{id:"helpId",className:"form-text text-muted",children:["Name of ",c]}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"cardDescription"}),Object(m.jsx)("textarea",{className:"form-control bg-dark text-light",name:"description",id:"cardDescription",placeholder:"describe "+c+" here",rows:"3",onChange:function(e){h(e.target.value)}})]}),Object(m.jsxs)("button",{type:"button",className:"btn btn-danger",eleindex:n,onClick:function(e){s(e.target.eleindex)},children:["Remove ",c]})]})]})})},C=function(e){var t=e.sendData,n=e.type,s=e.statevar,c=Object(a.useState)([{}]),i=Object(o.a)(c,2),l=i[0],d=i[1],j=function(e,t){var n=Object(r.a)(l);n[t]=e,d(Object(r.a)(n))},b=function(e){var t=Object(r.a)(l);t.splice(e,1),d(t)};return Object(a.useEffect)((function(){t(s,l)}),[l]),Object(m.jsxs)("div",{children:[Object(m.jsxs)("button",{type:"button",className:"btn btn-success",onClick:function(e){var t;t={title:"",text:""},d([].concat(Object(r.a)(l),[t]))},children:["Add ",n]}),Object(m.jsx)("div",{className:"card-deck",children:l.map((function(e,t){return Object(m.jsx)(k,{type:n,sendCardData:j,eleindex:t,value:e,remove:b},t)}))})]})},D=(n(142).render,function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={name:"",type:"",stats:{str:10,dex:10,con:10,int:10,wis:10,cha:10},hp:"",ac:"",languages:"",size:"",alignment:"",speed:"",cr:"",senses:"",passive:"",savingThrows:{str:"",dex:"",con:"",int:"",wis:"",cha:""},skills:{Athletics:"",Acrobatics:"",SleightOfHand:"",Stealth:"",Arcana:"",History:"",Investigation:"",Nature:"",Religion:"",AnimalHandling:"",Insight:"",Medicine:"",Perception:"",Survival:"",Deception:"",Intimidation:"",Performance:"",Persuasion:""},DamageTypes:{Slashing:"none",Piercing:"none",Bludgeoning:"none",Poison:"none",Acid:"none",Fire:"none",Cold:"none",Radiant:"none",Necrotic:"none",Lightning:"none",Thunder:"none",Force:"none",Psychic:"none",Nonmagical:"none"},conditionImmunities:{Blinded:!1,Charmed:!1,Deafened:!1,Exhaustion:!1,Frightened:!1,Grappled:!1,Incapacitated:!1,Invisible:!1,Paralyzed:!1,Petrified:!1,Poisoned:!1,Prone:!1,Restrained:!1,Stunned:!1,Unconscious:!1},traits:[],actions:[],legendaryActions:[],description:"",environment:"",monsterString:""},a.baseState=a.state,a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.render=a.render.bind(Object(b.a)(a)),a.getDataFrom=a.getDataFrom.bind(Object(b.a)(a)),a.browserSave=a.browserSave.bind(Object(b.a)(a)),a.reset=a.reset.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"getDataFrom",value:function(e,t){this.setState(Object(l.a)({},e,t))}},{key:"handleChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(l.a)({},a,n))}},{key:"browserSave",value:function(){console.log("saved to browser"),N.a.set("state",this.state)}},{key:"componentDidMount",value:function(){0==N.a.get("state")?N.a.set("state",JSON.stringify(this.state)):this.setState(N.a.get("state"))}},{key:"reset",value:function(){this.setState(this.baseState)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("form",{children:[Object(m.jsx)("button",{type:"button",name:"",id:"",onClick:this.browserSave,className:"btn btn-primary btn-lg btn-block",children:"Save Current Monster to LocalStorage"}),Object(m.jsx)("p",{className:"text-muted",children:"Use this button to save the current form and come back later.  This does not save the monster to the compendium as a whole, please see the bottom of the page for that."}),Object(m.jsx)("button",{type:"button",name:"",id:"",onClick:this.reset,className:"btn btn-danger btn-lg btn-block",children:"Reset entire form"}),Object(m.jsx)("p",{className:"text-muted",children:"Resets the inputs on the form, will not affect compendium or saved storage."}),Object(m.jsxs)("div",{className:"form-group row text-box-spaced",children:[Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"nameInput",children:"Name"}),Object(m.jsx)("input",{type:"text",id:"nameInput",placeholder:"creature name",name:"name",value:this.state.name,onChange:this.handleChange,className:"form-control bg-dark  text-light"})]}),Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"typeInput",children:"Type"}),Object(m.jsx)("input",{type:"text",id:"typeInput",placeholder:"Humanoid, monstrosity, etc",name:"type",value:this.state.type,onChange:this.handleChange,className:"form-control bg-dark text-light"})]}),Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"sizeInput",children:"Size"}),Object(m.jsx)("input",{type:"text",id:"sizeInput",placeholder:"Small, Medium, Large, Huge",name:"size",value:this.state.size,onChange:this.handleChange,className:"form-control bg-dark text-light"})]})]}),Object(m.jsxs)("div",{className:"form-group row text-box-spaced",children:[Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"alignmentInput",children:"Alignment"}),Object(m.jsx)("input",{type:"text",id:"alignmentInput",placeholder:"Lawful good, neutral evil, ect.",name:"alignment",value:this.state.alignment,onChange:this.handleChange,className:"form-control bg-dark text-light"})]}),Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"hpInput",children:"hp"}),Object(m.jsx)("input",{type:"text",id:"hpInput",placeholder:"optional: can be done automatically from stats",name:"hp",value:this.state.hp,onChange:this.handleChange,className:"form-control bg-dark text-light"})]}),Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"armorInput",children:"AC"}),Object(m.jsx)("input",{type:"text",id:"armorInput",placeholder:"12, light armor",name:"ac",value:this.state.ac,onChange:this.handleChange,className:"form-control bg-dark text-light"})]})]}),Object(m.jsxs)("div",{className:"form-group row text-box-spaced",children:[Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"speedInput",children:"Speed"}),Object(m.jsx)("input",{type:"text",id:"speedInput",placeholder:" walk 30 ft., fly 50 ft. ",name:"speed",value:this.state.speed,onChange:this.handleChange,className:"form-control bg-dark text-light"})]}),Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"nameInput",children:"Languages"}),Object(m.jsx)("input",{type:"text",id:"nameInput",placeholder:"Common, Elvish, Abyssal.",name:"languages",value:this.state.languages,onChange:this.handleChange,className:"form-control bg-dark text-light"})]}),Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("label",{htmlFor:"senseInput",children:" Senses "}),Object(m.jsx)("input",{type:"text",id:"senseInput",placeholder:"Darkvision 60 ft.",name:"senses",value:this.state.senses,onChange:this.handleChange,className:"form-control bg-dark text-light"})]})]}),Object(m.jsx)(v,{value:this.state.stats,sendData:this.getDataFrom}),Object(m.jsx)("hr",{}),Object(m.jsx)(f,{value:this.state.stats,sendData:this.getDataFrom}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Saving Throws"}),Object(m.jsx)(x,{onChange:this.handleChange,sendData:this.getDataFrom})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Skills"}),Object(m.jsx)(g,{sendData:this.getDataFrom})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),Object(m.jsx)("h3",{children:"Damage types"}),Object(m.jsxs)("label",{children:[Object(m.jsx)("i",{className:"fa fa-fist-raised","aria-hidden":"true"}),"= normal, R= Resistance, I= immunity, V=Vulnerability"]}),Object(m.jsx)(p,{sendData:this.getDataFrom})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Condition Immunities"}),Object(m.jsx)(O,{onChange:this.handleChange,sendData:this.getDataFrom})]}),Object(m.jsx)("h3",{children:"Traits"}),Object(m.jsx)(C,{type:"trait",statevar:"traits",sendData:this.getDataFrom},"trait"),Object(m.jsx)("h3",{children:"Actions"}),Object(m.jsx)(C,{type:"action",statevar:"actions",sendData:this.getDataFrom},"action"),Object(m.jsx)("h3",{children:"Legendary Actions"}),Object(m.jsx)(C,{type:"legendary action",statevar:"legendaryActions",sendData:this.getDataFrom},"LegAction"),Object(m.jsxs)("div",{className:"form-group text-box-spaced",children:[Object(m.jsx)("label",{htmlFor:"environmentInput",children:" Environment "}),Object(m.jsx)("input",{type:"text",id:"senseInput",placeholder:"Mountain, hills, etc.",name:"environment",value:this.state.environment,onChange:this.handleChange,className:"form-control bg-dark text-light"})]}),Object(m.jsxs)("div",{className:"form-group text-box-spaced",children:[Object(m.jsx)("label",{htmlFor:"descriptionInput",children:"Description"}),Object(m.jsx)("textarea",{className:"form-control bg-dark text-light",type:"text",id:"descriptionInput",name:"description",onChange:this.handleChange,placeholder:"Flavor text and/or description for your monster."})]}),Object(m.jsx)(S,{state:this.state,sendData:this.getDataFrom}),Object(m.jsx)("button",{type:"button",name:"",id:"",className:"btn btn-primary btn-lg btn-block",onClick:function(t){e.props.exportFunction({name:e.state.name,xml:e.state.monsterString})},children:"Save to compendium"}),Object(m.jsx)("p",{className:"text-muted",children:"Puts current monster in compendium for later export.  (Don't forget to save your compendium!)"})]})}}]),n}(n(2).Component));n(438);var F=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){0==N.a.get("compendium")?(console.log("cant find file!"),N.a.set("compendium",n)):(console.log("We found a compendium file, attempting to load"),s(N.a.get("compendium")))}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("header",{className:"App-header",children:Object(m.jsx)("h1",{children:"XML Monster Muncher"})}),Object(m.jsx)(D,{exportFunction:function(e){s(n===[]?e:[].concat(Object(r.a)(n||[]),[e]))}}),Object(m.jsx)("div",{className:"row",id:"monsterlist",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("h3",{children:"Saved monsters:"}),(n||[]).map((function(e,t){return Object(m.jsx)("li",{children:e.name},t)}))]})}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){console.log("saved to browser"),N.a.set("compendium",n)},children:"Save compendium to localstorage"}),Object(m.jsx)("p",{className:"text-muted",children:"Saves your compendium to browser's localstorage, allowing you to add to it later"}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){!function(e){for(var t="<compendium>\n",n=0;n<e.length;n++)t+=e[n].xml;t+="\n</compendium>";var a=document.createElement("a"),s=new Blob([t],{type:"text/xml"});a.href=URL.createObjectURL(s),a.download="myCompendium.xml",document.body.appendChild(a),a.click()}(n)},children:"Create XML file"}),Object(m.jsx)("p",{className:"text-muted",children:"Creates an XML file, and allows the user to download the entire compendium with all monsters listed above"}),Object(m.jsx)("div",{className:"Row"}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{className:"form-text text-muted",children:'Fill in what is needed for your monster, then copy paste into a txt file ending in .xml with a surrounding tag of compendium.  Currently, you can save to your browser\'s localstorage with the button on the top.  At the bottom there is a button to add the monster to your "Compendium" (also saved to local storage).  Then import into your favorite combat tracker.  Currently optimized for game master 5.'})}),Object(m.jsxs)("footer",{children:[Object(m.jsxs)("a",{href:"https://github.com/sbrevolution5/xml-monster-muncher",children:["Contribute on Github ",Object(m.jsx)("i",{className:"fa fa-github","aria-hidden":"true"})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("i",{className:"fa fa-copyright","aria-hidden":"true"})," Seth A. Burleson 2021"]})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,440)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),w()}},[[439,1,2]]]);
//# sourceMappingURL=main.7fa43f36.chunk.js.map