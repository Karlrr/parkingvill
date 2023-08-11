(function(){"use strict";var t={9006:function(t,n,a){var o=a(9242),l=a(3396),i=a(7139),e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAIhJREFUSEvtVNEKgCAQmz9UfUr9qPUp0Q8VEwN9CK50QeE9iRzbbc5zEJcT4+NfBCOAHgiq9mjd0/MGYCbGaRHBw0XFmgAsrxFwcKoYogJaVBKAldOnFlV0JocqmdI0VErw7RQxUt6k2d6UxbSl6NK4NEX0rFPtIvkjywlaikwpsv/RG53ybXoAT9AtGeBtoawAAAAASUVORK5CYII=";const s={class:"wrapper"},r={class:"hamButton"},c=(0,l._)("img",{src:e,alt:""},null,-1),u=[c],m=(0,l._)("div",{class:"appName"},[(0,l._)("p",{style:{"padding-top":"15px"}},"Application Name")],-1),d={class:"alrim"},p={key:0,class:"hamModal"},_={style:{"margin-top":"50px"}},v=(0,l._)("button",{class:"hamModalButton"},"출차 하기",-1);function f(t,n,a,e,c,f){const h=(0,l.up)("BasicState"),g=(0,l.up)("TimeState"),k=(0,l.up)("ParkingLot"),y=(0,l.up)("ChatList"),b=(0,l.up)("ChatRoom"),w=(0,l.up)("MyInfo");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",{class:"upperBar",onClick:n[9]||(n[9]=(0,o.iM)((t=>c.hamModal=0),["self"]))},[(0,l._)("div",null,[(0,l._)("div",r,[(0,l._)("button",{onClick:n[0]||(n[0]=(...t)=>f.hamModalToggle&&f.hamModalToggle(...t))},u)]),m,(0,l._)("div",d,[(0,l._)("span",{class:"alrimNum",onClick:n[1]||(n[1]=t=>c.parkingState=3)},(0,i.zw)(c.alrim),1)])]),1==c.hamModal?((0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("div",_,[(0,l._)("button",{class:"hamModalButton",onClick:n[2]||(n[2]=t=>(c.parkingState=0,c.hamModal=0))}," 홈으로 "),(0,l._)("button",{class:"hamModalButton",onClick:n[3]||(n[3]=t=>(c.parkingState=1,c.hamModal=0))}," 주차 등록 "),v,(0,l._)("button",{class:"hamModalButton",onClick:n[4]||(n[4]=t=>(c.parkingState=2,c.hamModal=0))}," 주차 현황 "),(0,l._)("button",{class:"hamModalButton",onClick:n[5]||(n[5]=t=>(c.parkingState=3,c.hamModal=0))}," 대화 "),(0,l._)("button",{class:"hamModalButton",onClick:n[6]||(n[6]=t=>(f.say("미구현기능"),c.hamModal=0))}," 나의 주차 "),(0,l._)("button",{class:"hamModalButton",onClick:n[7]||(n[7]=t=>(c.parkingState=5,c.hamModal=0))}," 마이페이지 "),(0,l._)("button",{class:"hamModalButton",onClick:n[8]||(n[8]=t=>(f.say("미구현기능"),c.hamModal=0))}," 로그아웃 ")])])):(0,l.kq)("",!0)]),(0,l._)("div",{class:"main",onClick:n[19]||(n[19]=(0,o.iM)((t=>c.hamModal=0),["self"]))},[0==c.parkingState?((0,l.wg)(),(0,l.j4)(h,{key:0,timeSet:c.timeSet,time_arr:c.time_arr,parkingState:c.parkingState,onExit:n[10]||(n[10]=t=>c.timeSet=0),onRegisterNow:n[11]||(n[11]=t=>c.parkingState=1),onInLot:n[12]||(n[12]=t=>c.parkingState=2)},null,8,["timeSet","time_arr","parkingState"])):(0,l.kq)("",!0),1==c.parkingState?((0,l.wg)(),(0,l.j4)(g,{key:1,now:t.now,timeSet:c.timeSet,onRegistComp:n[13]||(n[13]=t=>(c.parkingState=0,c.timeSet=1,c.time_arr=t))},null,8,["now","timeSet"])):(0,l.kq)("",!0),2==c.parkingState?((0,l.wg)(),(0,l.j4)(k,{key:2,onHome:n[14]||(n[14]=t=>c.parkingState=0),onInTouch:n[15]||(n[15]=t=>c.parkingState=4)})):(0,l.kq)("",!0),3==c.parkingState?((0,l.wg)(),(0,l.j4)(y,{key:3,onGetChatRoom:n[16]||(n[16]=t=>c.parkingState=4)})):(0,l.kq)("",!0),4==c.parkingState?((0,l.wg)(),(0,l.j4)(b,{key:4,onToChatlist:n[17]||(n[17]=t=>c.parkingState=3)})):(0,l.kq)("",!0),5==c.parkingState?((0,l.wg)(),(0,l.j4)(w,{key:5,onMyinfoComplete:n[18]||(n[18]=t=>(c.parkingState=0,f.completeAlert()))})):(0,l.kq)("",!0)]),(0,l._)("div",{class:"lowerBar",onClick:n[25]||(n[25]=(0,o.iM)((t=>c.hamModal=0),["self"]))},[(0,l._)("button",{class:"button lowerButton",onClick:n[20]||(n[20]=t=>c.parkingState=0)}," 홈으로 "),(0,l._)("button",{class:"button lowerButton",onClick:n[21]||(n[21]=t=>c.parkingState=1)},"등록"),(0,l._)("button",{class:"button lowerButton",onClick:n[22]||(n[22]=t=>c.parkingState=2)},"현황"),(0,l._)("button",{class:"button lowerButton",onClick:n[23]||(n[23]=t=>c.parkingState=3)},"대화"),(0,l._)("button",{class:"button lowerButton",onClick:n[24]||(n[24]=t=>c.parkingState=5)},"마이")])])}const h={key:0,class:"show-time"},g=(0,l._)("span",null,"입차 시간",-1),k=(0,l._)("br",null,null,-1),y=(0,l._)("br",null,null,-1),b=(0,l._)("span",null,"출차 예정 시간",-1),w=(0,l._)("br",null,null,-1);function S(t,n,a,o,e,s){return(0,l.wg)(),(0,l.iD)(l.HY,null,[0==a.timeSet?((0,l.wg)(),(0,l.iD)("button",{key:0,class:"mainButton",onClick:n[0]||(n[0]=n=>t.$emit("register-Now"))}," 주차 완료 ")):(0,l.kq)("",!0),(0,l._)("div",null,[1==a.timeSet?((0,l.wg)(),(0,l.iD)("div",h,[(0,l._)("div",null,[g,k,(0,l._)("span",null,(0,i.zw)(a.time_arr.dayIn)+" "+(0,i.zw)(a.time_arr.timeIn),1)]),(0,l._)("div",null,[y,b,w,(0,l._)("span",null,(0,i.zw)(a.time_arr.dayOut)+" "+(0,i.zw)(a.time_arr.timeOut),1)])])):(0,l.kq)("",!0)]),(0,l._)("button",{class:"mainButton",onClick:n[1]||(n[1]=n=>t.$emit("in-lot"))}," 우리 단지 주차 현황 "),(0,l._)("button",{class:"mainButton",onClick:n[2]||(n[2]=n=>t.$emit("exit"))},"출차하기")],64)}var C={name:"BasicState",data(){return{now:new Date}},props:{timeSet:Number,time_arr:Array,parkingState:Number},methods:{}},M=a(89);const A=(0,M.Z)(C,[["render",S]]);var B=A;const I={class:"flex-contatiner"},O={class:"timeset"},T=(0,l._)("span",null,"입차 시간",-1),x=(0,l._)("br",null,null,-1),P={class:"timeset"},N=(0,l._)("span",null,"출차 예정 시간",-1),D=(0,l._)("br",null,null,-1),R=(0,l._)("br",null,null,-1);function q(t,n,a,e,s,r){return(0,l.wg)(),(0,l.iD)("div",I,[(0,l._)("div",O,[T,x,(0,l._)("span",null,(0,i.zw)(s.now.getHours())+" : "+(0,i.zw)(s.now.getMinutes()),1)]),(0,l._)("div",P,[N,D,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>s.arrTime.dayOut=t),type:"date"},null,512),[[o.nr,s.arrTime.dayOut]]),R,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>s.arrTime.timeOut=t),type:"time"},null,512),[[o.nr,s.arrTime.timeOut]])]),(0,l._)("div",null,[(0,l._)("button",{class:"mainButton button-timeset",onClick:n[2]||(n[2]=n=>[t.timeRegist,t.$emit("registComp",s.arrTime)])},"등록 완료")])])}var z={name:"TimeState",data(){return{arrTime:{dayIn:0,timeIn:0,dayOut:0,timeOut:0},now:new Date}},methods:{getTime(){this.dayIn=this.now.getMonth(),alert("hi")}},props:{timeSet:Number}};const j=(0,M.Z)(z,[["render",q]]);var E=j;const U={class:"pl-content"},V={class:"box"},$={class:"box"},K=(0,l._)("div",null,[(0,l._)("button",null,"연락")],-1),L=(0,l._)("div",{style:{clear:"both"}},null,-1);function Z(t,n,a,o,e,s){return(0,l.wg)(),(0,l.iD)("div",U,[(0,l._)("div",null,[(0,l._)("div",V,[(0,l._)("p",null," 차량번호: "+(0,i.zw)(e.arrInfo[1].차량번호)+" 출차예정시간: "+(0,i.zw)(e.arrInfo[1].출차예정시간),1)]),(0,l._)("div",null,[(0,l._)("button",{onClick:n[0]||(n[0]=n=>t.$emit("inTouch"))},"연락")])]),(0,l._)("div",null,[(0,l._)("div",$,[(0,l._)("p",null," 차량번호: "+(0,i.zw)(e.arrInfo[1].차량번호)+" 출차예정시간: "+(0,i.zw)(e.arrInfo[1].출차예정시간),1)]),K]),L])}var F={name:"ParkingLot",data(){return{arrInfo:[{"차량번호":"16무 9906","출차예정시간":"13:30"},{"차량번호":"16무 9907","출차예정시간":"14:30"},{"차량번호":"16무 9908","출차예정시간":"16:30"}]}},props:{},methods:{}};const G=(0,M.Z)(F,[["render",Z]]);var Y=G;const H=(0,l._)("div",null,[(0,l._)("button",{class:"listButton"}," 17허 9907님과의 대화")],-1),Q=(0,l._)("div",null,[(0,l._)("button",{class:"listButton"}," 22바 9907님과의 대화")],-1);function J(t,n,a,o,i,e){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",null,[(0,l._)("button",{class:"listButton",onClick:n[0]||(n[0]=n=>t.$emit("getChatRoom"))}," 16무 9907님과의 대화")]),H,Q])}var X={name:"ChatList",data(){return{}},props:{},methods:{}};const W=(0,M.Z)(X,[["render",J]]);var tt=W;const nt={class:"cr-wrapper"},at={class:"back"},ot=(0,l.uE)('<div class="chatroom-title"><p> 16무 9907님과 대화</p></div><div class="chatroom-content"><div class="chatroom-msg chatroom-msg_my"><span>내 메시지 1</span></div><div class="float-clear"></div><div class="chatroom-msg chatroom-msg_my"><span>내 메시지 2</span></div><div class="float-clear"></div><div class="chatroom-msg chatroom-msg_your"><span>상대 메시지 1</span></div><div class="float-clear"></div></div><div class="chatroom-send"><div class="float-left"><input class="chatroom-send_box" type="text" placeholder="내용을 입력해주세요"></div><div class="float-left"><button class="chatroom-send_button">▶</button></div></div>',3);function lt(t,n,a,o,i,e){return(0,l.wg)(),(0,l.iD)("div",nt,[(0,l._)("div",at,[(0,l._)("button",{class:"back-btn",onClick:n[0]||(n[0]=n=>t.$emit("toChatlist"))},"◀")]),ot])}var it={name:"ChatRoom",data(){return{}},props:{},methods:{}};const et=(0,M.Z)(it,[["render",lt]]);var st=et;const rt={class:"myinfo-wrapper"},ct={key:0,class:"myinfo-carnumModal myinfo-modalbg"},ut={class:"myinfo-modal"},mt=(0,l._)("p",null,"차량번호 변경 팝업입니다",-1),dt={class:"myinfo-btn"},pt={key:1,class:"myinfo-phonenumModal myinfo-modalbg"},_t={class:"myinfo-modal"},vt=(0,l._)("p",null,"전화번호 변경 팝업입니다",-1),ft={class:"myinfo-btn"},ht={key:2,class:"myinfo-adressModal myinfo-modalbg"},gt={class:"myinfo-modal"},kt=(0,l._)("p",null,"주소찾기 팝업입니다",-1),yt={class:"myinfo-btn"},bt=(0,l._)("div",{class:"myinfo-id myinfo-row"},[(0,l._)("div",{class:"myinfo-left"},[(0,l._)("span",null,"계정")]),(0,l._)("div",{class:"myinfo-content"},[(0,l._)("span",null,"사용자1")]),(0,l._)("div",{class:"clear-both"})],-1),wt={class:"myinfo-password myinfo-row"},St=(0,l._)("div",{class:"myinfo-left"},[(0,l._)("span",null,"패스워드")],-1),Ct={class:"myinfo-content"},Mt={class:"myinfo-btn"},At=(0,l._)("div",{class:"clear-both"},null,-1),Bt={class:"myinfo-carnum myinfo-row"},It=(0,l._)("div",{class:"myinfo-left"},[(0,l._)("span",null,"차량번호")],-1),Ot=(0,l._)("div",{class:"myinfo-content"},[(0,l._)("span",null,"16무 9907")],-1),Tt={class:"myinfo-btn"},xt=(0,l._)("div",{class:"clear-both"},null,-1),Pt={class:"myinfo-phonenum myinfo-row"},Nt=(0,l._)("div",{class:"myinfo-left"},[(0,l._)("span",null,"전화번호")],-1),Dt=(0,l._)("div",{class:"myinfo-content"},[(0,l._)("span",null,"010-0000-1234")],-1),Rt={class:"myinfo-btn"},qt=(0,l._)("div",{class:"clear-both"},null,-1),zt={class:"myinfo-adress myinfo-row"},jt=(0,l._)("div",{class:"myinfo-left"},[(0,l._)("span",null,"주소")],-1),Et=(0,l._)("div",{class:"myinfo-content"},[(0,l._)("span",null,"서울특별시 강서구 화곡동 355-37")],-1),Ut={class:"myinfo-btn"},Vt=(0,l._)("div",{class:"clear-both"},null,-1),$t={class:"myinfo-complete"};function Kt(t,n,a,o,i,e){return(0,l.wg)(),(0,l.iD)("div",rt,[(0,l._)("div",null,[1==i.carnumModal?((0,l.wg)(),(0,l.iD)("div",ct,[(0,l._)("div",ut,[mt,(0,l._)("div",dt,[(0,l._)("button",{onClick:n[0]||(n[0]=t=>i.carnumModal=0)},"완료")])])])):(0,l.kq)("",!0),1==i.phonenumModal?((0,l.wg)(),(0,l.iD)("div",pt,[(0,l._)("div",_t,[vt,(0,l._)("div",ft,[(0,l._)("button",{onClick:n[1]||(n[1]=t=>i.phonenumModal=0)},"완료")])])])):(0,l.kq)("",!0),1==i.adressModal?((0,l.wg)(),(0,l.iD)("div",ht,[(0,l._)("div",gt,[kt,(0,l._)("div",yt,[(0,l._)("button",{onClick:n[2]||(n[2]=t=>i.adressModal=0)},"완료")])])])):(0,l.kq)("",!0)]),bt,(0,l._)("div",wt,[St,(0,l._)("div",Ct,[(0,l._)("input",{type:"password",class:"myinfo-passinput",placeholder:"패스워드 입력",onInput:n[3]||(n[3]=t=>i.changePass1=t.target.value)},null,32),(0,l._)("input",{type:"password",class:"myinfo-passinput",placeholder:"패스워드 확인",onInput:n[4]||(n[4]=t=>i.changePass2=t.target.value)},null,32)]),(0,l._)("div",Mt,[(0,l._)("button",{onClick:n[5]||(n[5]=(...t)=>e.changePassword&&e.changePassword(...t))},"수정")]),At]),(0,l._)("div",Bt,[It,Ot,(0,l._)("div",Tt,[(0,l._)("button",{onClick:n[6]||(n[6]=t=>i.carnumModal=1)},"수정")]),xt]),(0,l._)("div",Pt,[Nt,Dt,(0,l._)("div",Rt,[(0,l._)("button",{onClick:n[7]||(n[7]=t=>i.phonenumModal=1)},"수정")]),qt]),(0,l._)("div",zt,[jt,Et,(0,l._)("div",Ut,[(0,l._)("button",{style:{width:"70px"},onClick:n[8]||(n[8]=t=>i.adressModal=1)},"주소 찾기")]),Vt]),(0,l._)("div",$t,[(0,l._)("button",{class:"mainButton",onClick:n[9]||(n[9]=n=>t.$emit("myinfoComplete"))}," 정보 수정 완료 ")])])}var Lt={name:"MyInfo",data(){return{changePass1:"",changePass2:"",carnumModal:0,phonenumModal:0,adressModal:0}},props:{},methods:{changePassword(){this.changePass1!=this.changePass2?alert("변경할 패스워드가 일치하지 않습니다"):""==this.changePass1||""==this.changePass2?alert("패스워드 입력 또는 확인란에 변경할 패스워드를 입력해주세요"):alert("패스워드가 변경되었습니다")}}};const Zt=(0,M.Z)(Lt,[["render",Kt]]);var Ft=Zt,Gt={name:"App",data(){return{alrim:10,hamModal:0,parkingState:0,timeSet:0,time_arr:{},carNum1:"16무 9907",carNum2:"24하 4455"}},components:{BasicState:B,TimeState:E,ParkingLot:Y,ChatList:tt,ChatRoom:st,MyInfo:Ft},methods:{hamModalToggle(){0==this.hamModal?this.hamModal=1:this.hamModal=0},alert1(){1==this.timeSet&&alert("hi")},completeAlert(){alert("정보 수정 완료")},say(t){alert(t)}}};const Yt=(0,M.Z)(Gt,[["render",f]]);var Ht=Yt;(0,o.ri)(Ht).mount("#app")}},n={};function a(o){var l=n[o];if(void 0!==l)return l.exports;var i=n[o]={exports:{}};return t[o].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(n,o,l,i){if(!o){var e=1/0;for(u=0;u<t.length;u++){o=t[u][0],l=t[u][1],i=t[u][2];for(var s=!0,r=0;r<o.length;r++)(!1&i||e>=i)&&Object.keys(a.O).every((function(t){return a.O[t](o[r])}))?o.splice(r--,1):(s=!1,i<e&&(e=i));if(s){t.splice(u--,1);var c=l();void 0!==c&&(n=c)}}return n}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,l,i]}}(),function(){a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,{a:n}),n}}(),function(){a.d=function(t,n){for(var o in n)a.o(n,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};a.O.j=function(n){return 0===t[n]};var n=function(n,o){var l,i,e=o[0],s=o[1],r=o[2],c=0;if(e.some((function(n){return 0!==t[n]}))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(r)var u=r(a)}for(n&&n(o);c<e.length;c++)i=e[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},o=self["webpackChunkparkingvill"]=self["webpackChunkparkingvill"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(9006)}));o=a.O(o)})();
//# sourceMappingURL=app.f7b95bdc.js.map