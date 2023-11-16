import{i as T,b as de,o,c,u as i,h as L,a,n as Te,t as ce,e as Le,w as He,k as Me,g as _e}from"./index-5672abc9.js";const fe={class:"tic-tac-toe-page"},me={key:0,class:"flex flex-col items-center justify-center my-2"},Oe={key:0},Xe={key:1},ge={class:"tic-tac-toe-page__container"},ke={class:"game-field__row"},pe={class:"game-field__row"},xe={class:"game-field__row"},ye={class:"flex flex-col items-center justify-center my-2"},be={__name:"TicTacToePage",setup(Ce){let e=T(),r=T([]),s=T(1),u=T();const ue=async()=>{await Me(),e.value=document.querySelectorAll(".game-field__cell")},t=v=>{e!=null&&e.value&&e.value[v-1].innerHTML==""&&(e.value[v-1].innerHTML=s.value==1?"X":"O",s.value==1?s.value=2:s.value=1,se())},se=()=>{var n,d,l,H,M,_,f,m,O,X,g,k,p,x,y,C,w,b,B,V,A,D,N,P,j,S,q,z,E,R,F,G,I,J,K,Q,U,W,Y,Z,$,h,ee,ne,le,ae,ie,re,te;if(((n=e.value[0])==null?void 0:n.innerHTML)=="X"&&((d=e.value[1])==null?void 0:d.innerHTML)=="X"&&((l=e.value[2])==null?void 0:l.innerHTML)=="X"||((H=e.value[3])==null?void 0:H.innerHTML)=="X"&&((M=e.value[4])==null?void 0:M.innerHTML)=="X"&&((_=e.value[5])==null?void 0:_.innerHTML)=="X"||((f=e.value[6])==null?void 0:f.innerHTML)=="X"&&((m=e.value[7])==null?void 0:m.innerHTML)=="X"&&((O=e.value[8])==null?void 0:O.innerHTML)=="X"||((X=e.value[0])==null?void 0:X.innerHTML)=="X"&&((g=e.value[3])==null?void 0:g.innerHTML)=="X"&&((k=e.value[6])==null?void 0:k.innerHTML)=="X"||((p=e.value[1])==null?void 0:p.innerHTML)=="X"&&((x=e.value[4])==null?void 0:x.innerHTML)=="X"&&((y=e.value[7])==null?void 0:y.innerHTML)=="X"||((C=e.value[2])==null?void 0:C.innerHTML)=="X"&&((w=e.value[5])==null?void 0:w.innerHTML)=="X"&&((b=e.value[8])==null?void 0:b.innerHTML)=="X"||((B=e.value[0])==null?void 0:B.innerHTML)=="X"&&((V=e.value[4])==null?void 0:V.innerHTML)=="X"&&((A=e.value[8])==null?void 0:A.innerHTML)=="X"||((D=e.value[2])==null?void 0:D.innerHTML)=="X"&&((N=e.value[4])==null?void 0:N.innerHTML)=="X"&&((P=e.value[6])==null?void 0:P.innerHTML)=="X"){u.value="Выиграл первый игрок!";return}if(((j=e.value[0])==null?void 0:j.innerHTML)=="O"&&((S=e.value[1])==null?void 0:S.innerHTML)=="O"&&((q=e.value[2])==null?void 0:q.innerHTML)=="O"||((z=e.value[3])==null?void 0:z.innerHTML)=="O"&&((E=e.value[4])==null?void 0:E.innerHTML)=="O"&&((R=e.value[5])==null?void 0:R.innerHTML)=="O"||((F=e.value[6])==null?void 0:F.innerHTML)=="O"&&((G=e.value[7])==null?void 0:G.innerHTML)=="O"&&((I=e.value[8])==null?void 0:I.innerHTML)=="O"||((J=e.value[0])==null?void 0:J.innerHTML)=="O"&&((K=e.value[3])==null?void 0:K.innerHTML)=="O"&&((Q=e.value[6])==null?void 0:Q.innerHTML)=="O"||((U=e.value[1])==null?void 0:U.innerHTML)=="O"&&((W=e.value[4])==null?void 0:W.innerHTML)=="O"&&((Y=e.value[7])==null?void 0:Y.innerHTML)=="O"||((Z=e.value[2])==null?void 0:Z.innerHTML)=="O"&&(($=e.value[5])==null?void 0:$.innerHTML)=="O"&&((h=e.value[8])==null?void 0:h.innerHTML)=="O"||((ee=e.value[0])==null?void 0:ee.innerHTML)=="O"&&((ne=e.value[4])==null?void 0:ne.innerHTML)=="O"&&((le=e.value[8])==null?void 0:le.innerHTML)=="O"||((ae=e.value[2])==null?void 0:ae.innerHTML)=="O"&&((ie=e.value[4])==null?void 0:ie.innerHTML)=="O"&&((re=e.value[6])==null?void 0:re.innerHTML)=="O"){u.value="Выиграл второй игрок!";return}if(!((te=r.value)!=null&&te.map(oe=>oe.innerHTML!="").includes(!1))){u.value="Ничья!";return}},ve=()=>{e.value.forEach(v=>v.innerHTML=""),u.value=null};return ue(),(v,n)=>{const d=de("base-button");return o(),c("div",fe,[i(u)==null?(o(),c("div",me,[i(s)==1?(o(),c("p",Oe,"Ход первого игрока")):L("",!0),i(s)==2?(o(),c("p",Xe,"Ход второго игрока")):L("",!0)])):L("",!0),a("div",ge,[a("div",{class:Te(["tic-tac-toe__game-field",{"pointer-events-none":i(u)!=null}])},[a("div",ke,[a("div",{class:"game-field__cell",ref:l=>i(r)[0]=l,"data-index":1,onClick:n[0]||(n[0]=()=>t(1))},null,512),a("div",{class:"game-field__cell",ref:l=>i(r)[1]=l,"data-index":2,onClick:n[1]||(n[1]=()=>t(2))},null,512),a("div",{class:"game-field__cell",ref:l=>i(r)[2]=l,"data-index":3,onClick:n[2]||(n[2]=()=>t(3))},null,512)]),a("div",pe,[a("div",{class:"game-field__cell",ref:l=>i(r)[3]=l,"data-index":4,onClick:n[3]||(n[3]=()=>t(4))},null,512),a("div",{class:"game-field__cell",ref:l=>i(r)[4]=l,"data-index":5,onClick:n[4]||(n[4]=()=>t(5))},null,512),a("div",{class:"game-field__cell",ref:l=>i(r)[5]=l,"data-index":6,onClick:n[5]||(n[5]=()=>t(6))},null,512)]),a("div",xe,[a("div",{class:"game-field__cell",ref:l=>i(r)[6]=l,"data-index":7,onClick:n[6]||(n[6]=()=>t(7))},null,512),a("div",{class:"game-field__cell",ref:l=>i(r)[7]=l,"data-index":8,onClick:n[7]||(n[7]=()=>t(8))},null,512),a("div",{class:"game-field__cell",ref:l=>i(r)[8]=l,"data-index":9,onClick:n[8]||(n[8]=()=>t(9))},null,512)])],2)]),a("div",ye,[a("p",null,ce(i(u)),1),i(u)!=null?(o(),Le(d,{key:0,class:"w-fit my-2",type:"primary",onClick:ve},{default:He(()=>[_e(" Начать заново ")]),_:1})):L("",!0)])])}}};export{be as default};