(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{952:function(t,e,r){"use strict";r.r(e);var n=r(4),l=(r(38),r(9),r(65),r(68),r(44)),o=r(125),c=r.n(o),m=r(98),v={data:function(){return{active:!1,reviews:[],form:{},rate:0}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.startup();case 2:case"end":return e.stop()}}),e)})))()},methods:{startup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getHttp("/api/ea/review/?product=".concat(t.$route.query.id));case 2:t.reviews=e.sent,r=c.a.filter(t.reviews,(function(t){return t.star>0})),t.rate=c.a.mean(c.a.map(r,"star"));case 5:case"end":return e.stop()}}),e)})))()},storeComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.form.product=t.$route.query.id,t.form.user=t.user.id,e.next=4,l.a.postHttpAlert("/api/ea/review/",t.form);case 4:if(!e.sent.id){e.next=8;break}return e.next=8,t.startup();case 8:t.form={};case 9:case"end":return e.stop()}}),e)})))()}},props:{ea:{default:{}}},computed:{user:function(){return m.a.user},point:function(){return m.a.point},tier:function(){return m.a.tier},tiers:function(){return m.a.tiers},setting:function(){return m.a.setting}}},f=r(57),d=r(74),x=r.n(d),_=r(594),w=r(682),C=r(593),h=r(889),y=r(668),k=r(890),j=r(733),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"p-2 rounded-xl shadow-md bg-white  mb: -mt-24"},[r("v-col",{attrs:{"justify-center":""}},[r("div",{staticClass:"bg-white w-full p-6"},[r("div",{staticClass:"pb-3"},[r("div",{staticClass:"flex justify-between"},[r("div",{staticClass:"flex items-start"},[r("v-avatar",{staticClass:"m-5",attrs:{tile:"",size:"150"}},[r("img",{attrs:{src:t.$url+t.ea.image}})]),t._v(" "),r("div",{staticClass:"m-5"},[r("div",{staticClass:"pb-2 font-bold text-3xl"},[t._v(t._s(t.ea.name))]),t._v(" "),r("h1",{staticClass:" text-green-400 text-2xl mt-2"},[t._v("Price : "+t._s(t.ea.price)+" $")]),t._v(" "),r("h1",{staticClass:" text-gray-400  text-1xl leading-6 mt-2"},[t._v(t._s(t.ea.sub_title)+" ")])])],1),t._v(" "),r("div",{staticClass:"text-right text-sm leading-7"},[r("div",{staticClass:"flex flex-wrap justify-center m-5"},[r("div",{staticClass:"inline-flex "},[r("SemiAuto-FromPurchase",{attrs:{ea:t.ea}})],1),t._v(" "),r("div",{staticClass:"inline-flex "},[r("SemiAuto-FromRequestTest",{attrs:{ea:t.ea}})],1)]),t._v(" "),r("v-rating",{staticClass:"mr-5",attrs:{readonly:"",color:"orange",length:"5",size:"20"},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}})],1)]),t._v(" "),r("h2",{staticClass:"font-bold text-3xl  ml-10 mt-8"},[t._v("\n                        Details\n                    ")]),t._v(" "),r("div",{staticClass:"  ml-10 mt-6"},[r("div",{domProps:{innerHTML:t._s(t.ea.detail)}})]),t._v(" "),r("h2",{staticClass:"font-bold text-3xl  ml-10 mt-8"},[t._v("\n                    Reviews\n                  ")]),t._v(" "),r("div",{staticClass:"ml-10 "},[r("form",{staticClass:"mt-3",on:{submit:function(e){return e.preventDefault(),t.storeComment()}}},[r("v-rating",{staticClass:"justify-end",attrs:{color:"orange",length:"5",size:"24"},model:{value:t.form.star,callback:function(e){t.$set(t.form,"star",e)},expression:"form.star"}}),t._v(" "),r("v-textarea",{staticClass:"mt-3",attrs:{required:"",row:"3",outlined:""},model:{value:t.form.comment,callback:function(e){t.$set(t.form,"comment",e)},expression:"form.comment"}}),t._v(" "),r("div",{staticClass:"flex"},[r("v-spacer"),t._v(" "),r("vs-button",{attrs:{type:"submit",floating:"",color:"success"}},[t._v("Comment")])],1)],1),t._v(" "),t._l(t.reviews,(function(e,n){return r("div",{key:n,staticClass:"mt-4 w-full bg-gray-100 rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4"},[r("v-toolbar",{staticClass:"w-full",attrs:{color:"transparent",flat:""}},[r("img",{staticClass:"rounded-full w-16 h-16 mr-4 shadow-lg mb-4 mt-4",attrs:{alt:"avatar",width:"50",height:"50",src:t.$url+e.user_image}}),t._v(" "),r("div",[r("h3",{staticClass:"text-gray-400 font-semibold text-xl  md:text-left mt-4 "},[t._v(t._s(e.user_full))]),t._v(" "),r("v-rating",{attrs:{readonly:"",color:"orange",length:"5",size:"20"},model:{value:e.star,callback:function(r){t.$set(e,"star",r)},expression:"review.star"}})],1),t._v(" "),r("v-spacer"),t._v(" "),r("span",{staticClass:"text-green-400 text-sm font-bold"},[t._v(t._s(e.created_at))])],1),t._v(" "),r("v-divider"),t._v(" "),r("p",{staticClass:"text-gray-600 text-lg  p-6 md:text-left ",staticStyle:{width:"90%"}},[t._v(t._s(e.comment)+" ")]),r("br")],1)}))],2)])])])],1)])}),[],!1,null,null,null);e.default=component.exports;x()(component,{VAvatar:_.a,VCol:w.a,VDivider:C.a,VRating:h.a,VSpacer:y.a,VTextarea:k.a,VToolbar:j.a})}}]);