webpackJsonp([1],{EoVk:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},o,!1,function(t){a("EoVk")},null,null).exports,n=a("/ocq"),s=a("Xxa5"),c=a.n(s),l=a("exGp"),u=a.n(l),d={data:function(){return{bookid:"",bookname:"",press:"",author:"",publishtime:"",category:"",remain:"",introduction:""}},methods:{addNewBook:function(){var t=this;return u()(c.a.mark(function e(){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="/staff/material/addNew/"+t.bookid+"/"+t.bookname+"/"+t.press+"/"+t.author+"/"+t.publishtime+"/"+t.category+"/"+t.remain+"/"+t.introduction,e.next=3,fetch(a,{method:"POST"});case 3:e.sent.ok?(alert("Book added successfully!"),t.bookid="",t.bookname="",t.press="",t.author="",t.publishtime="",t.category="",t.remain="",t.introduction=""):alert("Failed to add book.");case 5:case"end":return e.stop()}},e,t)}))()},return_to_first_page:function(){var t=this;return u()(c.a.mark(function e(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:window.location.href="../../../staff.html";case 1:case"end":return t.stop()}},e,t)}))()}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"AddNewBooks"},[a("div",{staticClass:"back"},[a("button",{staticStyle:{height:"200%",width:"200%","font-size":"100%"},on:{click:t.return_to_first_page}},[t._v("back")])]),t._v(" "),t._m(0),t._v(" "),a("div"),t._v(" "),a("div",{staticClass:"bookid"},[a("label",{attrs:{for:"bookid"}},[t._v("bookid:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bookid,expression:"bookid"}],staticStyle:{height:"25px","font-size":"20px",width:"150px","text-align":"center"},attrs:{id:"bookid",type:"text"},domProps:{value:t.bookid},on:{input:function(e){e.target.composing||(t.bookid=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"bookname"},[a("label",{attrs:{for:"bookname"}},[t._v("bookname:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bookname,expression:"bookname"}],staticStyle:{height:"25px","font-size":"20px",width:"150px","text-align":"center"},attrs:{id:"bookname",type:"text"},domProps:{value:t.bookname},on:{input:function(e){e.target.composing||(t.bookname=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"category"},[a("label",{attrs:{for:"category"}},[t._v("category:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticStyle:{height:"25px","font-size":"20px",width:"150px","text-align":"center"},attrs:{id:"category",type:"text"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"remain"},[a("label",{attrs:{for:"remain"}},[t._v("remain:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.remain,expression:"remain"}],attrs:{id:"remain",type:"number",min:"0",required:""},domProps:{value:t.remain},on:{input:function(e){e.target.composing||(t.remain=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"introduction"},[a("label",{attrs:{for:"introduction"}},[t._v("introduction:")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.introduction,expression:"introduction"}],staticStyle:{"vertical-align":"middle","font-size":"20px","text-align":"center"},attrs:{id:"introduction",rows:"15"},domProps:{value:t.introduction},on:{input:function(e){e.target.composing||(t.introduction=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"Information"},[a("div",{staticClass:"press"},[a("label",{attrs:{for:"press"}},[t._v("press:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.press,expression:"press"}],staticStyle:{height:"25px","font-size":"20px",width:"150px","text-align":"center"},attrs:{id:"press",type:"text"},domProps:{value:t.press},on:{input:function(e){e.target.composing||(t.press=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"author"},[a("label",{attrs:{for:"author"}},[t._v("author:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticStyle:{height:"25px","font-size":"20px",width:"150px","text-align":"center"},attrs:{id:"author",type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"publishtime"},[a("label",{attrs:{for:"publishtime"}},[t._v("publishtime:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.publishtime,expression:"publishtime"}],staticStyle:{height:"25px","font-size":"20px",width:"200px","text-align":"center"},attrs:{id:"publishtime",type:"date"},domProps:{value:t.publishtime},on:{input:function(e){e.target.composing||(t.publishtime=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"add"},[a("button",{staticStyle:{height:"50%",width:"50%","font-size":"100%"},attrs:{type:"submit"},on:{click:t.addNewBook}},[t._v("Add Book")])]),t._v(" "),a("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Header"},[e("header",[e("h1",[this._v("Material-ADD")])])])}]};var v=a("VU/8")(d,p,!1,function(t){a("cc0a")},null,null).exports;i.a.use(n.a);var m=new n.a({routes:[{path:"/",name:"addNewBooks",component:v}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:m,components:{App:r},template:"<App/>"})},cc0a:function(t, e){}},["NHnr"]);
//# sourceMappingURL=app.6e55ad5b69b2c8b75f9b.js.map