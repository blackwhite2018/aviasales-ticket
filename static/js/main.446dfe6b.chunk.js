(this.webpackJsonpaviasales=this.webpackJsonpaviasales||[]).push([[0],[,function(e,t,a){e.exports={ticket:"TicketListItem_ticket__3EtiR","ticket-header":"TicketListItem_ticket-header__34qTm","ticket-header__price":"TicketListItem_ticket-header__price__Diq6H","ticket-header__logo":"TicketListItem_ticket-header__logo__r_aiD","row--title":"TicketListItem_row--title__2cCQS","row--data":"TicketListItem_row--data__oPKGA"}},,,,,,function(e,t,a){e.exports={header:"Header_header__MbTxY",logo:"Header_logo__3yB-7",logo__img:"Header_logo__img__f2igb"}},function(e,t,a){e.exports={"transfer-item":"TransferItem_transfer-item__2BWWC","transfer-item__input":"TransferItem_transfer-item__input__3JRak","transfer-item__text":"TransferItem_transfer-item__text__2hFOY"}},function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__1LkS7",sidebar__title:"Sidebar_sidebar__title__ohKln",transfer:"Sidebar_transfer__3KRWf"}},function(e,t,a){e.exports={page:"App_page__1yGSX",wrapper:"App_wrapper__Z-VQ8",main:"App_main__9tVZ8"}},,,,function(e,t,a){e.exports={tab:"Tab_tab__34Zof","tab--active":"Tab_tab--active__JewID"}},,,function(e,t,a){e.exports={content:"Content_content__3G3IW"}},function(e,t,a){e.exports={tabs:"Tabs_tabs__1Odzd"}},function(e,t,a){e.exports={"ticket-list":"TicketList_ticket-list__1lgRV"}},,function(e,t,a){e.exports=a(41)},,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(6),i=a(4),s=a(2),o=a(20),m=Array(5).fill(!1),_=function(e){return e.every((function(e){return!0===e}))},u=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0,n=null===(e=a.payload)||void 0===e?void 0:e.index,r=Object(o.a)(t),c=!1;switch((r[0]&&0===a.payload.index||0===n&&a.payload.value)&&(c=!r[0],r=r.map((function(e){return c}))),a.type){case"TRANSFER_ACTIVE_SORT":return r[a.payload.index]=a.payload.value,_(r.slice(1))&&(r[0]=!0),_(r)||(r[0]=!1),r;default:return t}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_SORT":return t.payload;default:return e}},f=Object(s.b)({transferSort:u,active:d}),E=(n={},Object(s.c)(f,n)),p=a(7),v=a.n(p),b=function(){return c.a.createElement("header",{className:v.a.header},c.a.createElement("div",{className:v.a.logo},c.a.createElement("img",{src:"".concat("/aviasales-ticket","/img/Logo.png"),className:v.a.logo__img,alt:"aviasales"})))},k=a(3),g=a.n(k),h={transferItemAction:function(e){return{type:"TRANSFER_ACTIVE_SORT",payload:e}}},T=a(8),N=a.n(T),x=Object(i.b)((function(e){return{transferSort:e.transferSort}}),h)((function(e){var t=e.transferSort,a=e.transferItemAction,n=e.value,r=e.index;return c.a.createElement("label",{htmlFor:"transfer-item-".concat(String(r)),className:N.a["transfer-item"]},c.a.createElement("input",{type:"checkbox",onClick:function(e){var t=e.currentTarget;a({index:r,value:t.checked})},id:"transfer-item-".concat(String(r)),className:N.a["transfer-item__input"],checked:!!t[r]}),c.a.createElement("span",{className:N.a["transfer-item__text"]},n))})),y=a(9),S=a.n(y),w=["\u0412\u0441\u0435","\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a","1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430","2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438","3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"],I=function(){var e=w.map((function(e,t){return c.a.createElement(x,{key:g.a.generate(),value:e,index:t})}));return c.a.createElement("aside",{className:S.a.sidebar},c.a.createElement("h3",{className:S.a.sidebar__title},"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),c.a.createElement("form",{action:"",className:S.a.transfer},e))},A=a(17),O=a.n(A),R=function(e){var t=e.children;return c.a.createElement("section",{className:O.a.content},t)},L={sortTicketAction:function(e){return{type:"SELECT_SORT",payload:e}}},C=a(14),j=a.n(C),H=Object(i.b)((function(e){return{indexActive:e.active}}),L)((function(e){var t=e.index,a=e.value,n=e.indexActive,r=e.sortTicketAction;return c.a.createElement("button",{type:"button",className:"".concat(j.a.tab," ").concat(t===n?j.a["tab--active"]:""),onClick:function(){r(t)}},a)})),W=a(18),G=a.n(W),J=["\u0441\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439","\u0441\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"],K=function(){return c.a.createElement("div",{className:G.a.tabs},J.map((function(e,t){return c.a.createElement(H,{key:g.a.generate(),index:t,value:e})})))},V=a(1),B=a.n(V),F=function(){return c.a.createElement("div",{className:B.a.ticket},c.a.createElement("div",{className:B.a["ticket-header"]},c.a.createElement("div",{className:B.a["ticket-header__price"]},"13400 \u0420"),c.a.createElement("div",{className:B.a["ticket-header__logo"]})),c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",{className:B.a["row--title"]},c.a.createElement("td",null,"MOW-\u041d\u041a\u0422"),c.a.createElement("td",null,"\u0432 \u043f\u0443\u0442\u0438"),c.a.createElement("td",null,"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438")),c.a.createElement("tr",{className:B.a["row--data"]},c.a.createElement("td",null,"10:45 \u2013 08:00"),c.a.createElement("td",null,"\u0432 \u043f\u0443\u0442\u0438"),c.a.createElement("td",null,"HKG, JNB")),c.a.createElement("tr",{className:B.a["row--title"]},c.a.createElement("td",null,"MOW-\u041d\u041a\u0422"),c.a.createElement("td",null,"\u0432 \u043f\u0443\u0442\u0438"),c.a.createElement("td",null,"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430")),c.a.createElement("tr",{className:B.a["row--data"]},c.a.createElement("td",null,"11:20 \u2013 00:50"),c.a.createElement("td",null,"13\u0447 30\u043c"),c.a.createElement("td",null,"HKG")))))},M=a(19),D=a.n(M),Z=[1,2,3],q=function(){return c.a.createElement("div",{className:D.a["ticket-list"]},Z.map((function(e){return c.a.createElement(F,{key:g.a.generate()})})))},Q=a(10),Y=a.n(Q),z=function(){return c.a.createElement("div",{className:Y.a.page},c.a.createElement("div",{className:Y.a.wrapper},c.a.createElement(b,null),c.a.createElement("main",{className:Y.a.main},c.a.createElement(I,null),c.a.createElement(R,null,c.a.createElement(K,null),c.a.createElement(q,null)))))};a(40);Object(l.render)(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:E},c.a.createElement(z,null))),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.446dfe6b.chunk.js.map