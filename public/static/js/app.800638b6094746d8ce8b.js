webpackJsonp([0],[,function(t,e,s){var a=s(4),i={methods:{submit:function(t){var e=this,s=$(t.target);$.ajax({method:s.attr("method"),url:s.attr("action"),data:s.serialize(),success:function(t){if(a.isObject(t)&&a.contains(a.keys(t),"event"))switch(t.event){case"create":e.$parent.$emit("onCreate",t.item),UIkit.notification({message:"Has been created",status:"primary",pos:"bottom-center",timeout:5e3});break;case"update":e.$parent.$emit("onUpdate",t.item),UIkit.notification({message:"Has been updated",status:"primary",pos:"bottom-center",timeout:5e3});break;case"send_invitation":UIkit.modal("#inviteModal").hide().then(function(){UIkit.notification({message:"Invitation sent succuessfully",status:"primary",pos:"bottom-center",timeout:5e3})})}},error:function(t){console.log(t)}})}}};t.exports=i},,,,function(t,e,s){"use strict";var a=s(2),i=s(28),o=s(21),u=s.n(o),r=s(18),n=s.n(r);a.a.use(i.a),e.a=new i.a({routes:[{path:"/products",name:"Products",component:u.a},{path:"/users",name:"Users",component:n.a}]})},function(t,e,s){s(16);var a=s(0)(s(8),s(25),null,null);t.exports=a.exports},function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),i=s(6),o=s.n(i),u=s(5);a.a.config.productionTip=!1,t.baseUrl="http://localhost:3001/",new a.a({el:"#app",router:u.a,template:"<App/>",components:{App:o.a}})}).call(e,s(3))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[s(1)],data:function(){return{}},methods:{addBox:function(t){t.preventDefault(),$("#addBox").append('<div class="uk-width-1-1 parentBox"><label class="uk-form-label" for="form-stacked-text">Email</label><div class="uk-form-controls"><input class="uk-input uk-width-2-3" id="form-stacked-text" type="text" placeholder="" name="email[]"><a class="uk-width-1-3 removeBox" uk-icon="icon: close; ratio: 1"></a></div></div>'),$(".removeBox").on("click",function(){$(this).parents(".parentBox").detach()})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(17),i=s.n(a),o=s(4);e.default={name:"clients",data:function(){return{clients:[],activeProduct:{}}},components:{modalInvite:i.a},methods:{changeStatus:function(t,e){var s;switch(t.status){case!0:s=!1;break;case!1:s=!0}this.$set(this.clients,e,o.extend(t,{status:s})),$.ajax({method:"PUT",url:baseUrl+"admin/users/"+t._id+"/status",data:{status:s},dataType:"json",success:function(t){UIkit.notification({message:"Status updated",status:"success",pos:"bottom-center",timeout:5e3})}})}},created:function(){var t=this;this.$nextTick(function(){$.ajax({method:"GET",url:baseUrl+"admin/users",dataType:"json",success:function(e){console.log(e),t.clients=e}})})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[s(1)],data:function(){return{}},computed:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[s(1)],props:["product"],data:function(){return{}},computed:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(20),i=s.n(a),o=s(19),u=s.n(o);e.default={name:"products",data:function(){return{products:[{_id:987654321,title:"Test Product",barcode:"01234567890",price:100,discount:1,status:!0,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis modi, obcaecati earum vitae, molestiae necessitatibus optio sapiente, illo pariatur cumque odit. Pariatur vitae ex consectetur debitis id, cupiditate velit quod. Unde in cumque ad nihil excepturi, beatae at quis facere, fugiat non odio expedita, rerum placeat. Nostrum rem deserunt, repellendus ut dicta eligendi expedita, a facilis minus, aut quis esse eius est aliquid fugit temporibus. Facere recusandae cum magnam provident numquam officiis aspernatur eveniet iusto nesciunt, incidunt enim aut, error officia odit temporibus assumenda debitis doloribus libero veritatis. Esse ipsam provident ipsum recusandae consectetur unde, numquam fugit porro ullam."}],activeProduct:{}}},components:{modalCreateProduct:u.a,modalEditProduct:i.a},methods:{edit:function(t,e){t.index=e,console.log(t),this.activeProduct=t},destroy:function(t,e){var s=this;confirm("Are you sure ?")&&$.ajax({method:"DELETE",url:baseUrl+"admin/products/"+t._id,success:function(t){s.products.splice(e,1)}})}},created:function(){var t=this;this.$nextTick(function(){$.ajax({method:"GET",url:baseUrl+"admin/products",dataType:"json",success:function(e){console.log(e),t.products=e}})}),this.$on("onCreate",function(t){this.products.push(t)}),this.$on("onUpdate",function(t){this.$set(this.products,this.activeProduct.index,t)})}}},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){var a=s(0)(s(9),s(24),null,null);t.exports=a.exports},function(t,e,s){s(14);var a=s(0)(s(10),s(22),"data-v-1a2c3eed",null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(11),s(26),null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(12),s(27),null,null);t.exports=a.exports},function(t,e,s){s(15);var a=s(0)(s(13),s(23),"data-v-3c0e274a",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"clients"},[s("button",{staticClass:"uk-button uk-button-default",attrs:{"uk-toggle":"target: #inviteModal",type:"button"}},[t._v("Invite")]),t._v(" "),s("br"),t._v(" "),s("table",{staticClass:"uk-table uk-table-striped"},[t._m(0),t._v(" "),s("tbody",t._l(t.clients,function(e,a){return s("tr",[s("td",[t._v(t._s(a+1))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[t._v(t._s(e.firstName))]),t._v(" "),s("td",[t._v(t._s(e.lastName))]),t._v(" "),s("td",[t._v(t._s(e.admin?"Admin":"User"))]),t._v(" "),s("td",[t._v(t._s(e.status?"active":"deactive"))]),t._v(" "),s("td",[s("a",{staticClass:"uk-button uk-button-default uk-button-small",on:{click:function(s){s.preventDefault(),t.changeStatus(e,a)}}},[t._v("Status")])])])}))]),t._v(" "),s("modal-invite")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("#")]),t._v(" "),s("th",[t._v("Email")]),t._v(" "),s("th",[t._v("firstName")]),t._v(" "),s("th",[t._v("lastName")]),t._v(" "),s("th",[t._v("Role")]),t._v(" "),s("th",[t._v("Status")]),t._v(" "),s("th",[t._v("Action")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"products"},[s("button",{staticClass:"uk-button uk-button-default",attrs:{"uk-toggle":"target: #createModal",type:"button"}},[t._v("Add Product")]),t._v(" "),s("br"),t._v(" "),s("table",{staticClass:"uk-table uk-table-striped"},[t._m(0),t._v(" "),s("tbody",t._l(t.products,function(e,a){return s("tr",[s("td",[t._v(t._s(a+1))]),t._v(" "),s("td",[t._v(t._s(e.title))]),t._v(" "),s("td",[t._v(t._s(e.barcode))]),t._v(" "),s("td",[t._v(t._s(e.price))]),t._v(" "),s("td",[t._v(t._s(e.status?"active":"deactive"))]),t._v(" "),s("td",[s("a",{staticClass:"uk-button uk-button-default uk-button-small",attrs:{"uk-toggle":"target: #editModal"},on:{click:function(s){s.preventDefault(),t.edit(e,a)}}},[t._v("Edit")]),t._v(" "),s("a",{staticClass:"uk-button uk-button-default uk-button-small",on:{click:function(s){s.preventDefault(),t.destroy(e,a)}}},[t._v("Delete")])])])}))]),t._v(" "),s("modal-edit-product",{attrs:{product:t.activeProduct}}),t._v(" "),s("modal-create-product")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("#")]),t._v(" "),s("th",[t._v("Title")]),t._v(" "),s("th",[t._v("Barcode")]),t._v(" "),s("th",[t._v("Price")]),t._v(" "),s("th",[t._v("Status")]),t._v(" "),s("th",[t._v("Action")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"inviteModal","uk-modal":""}},[s("div",{staticClass:"uk-modal-dialog uk-modal-body"},[s("form",{staticClass:"uk-grid-small",attrs:{"uk-grid":"",method:"POST",id:"formInvite",action:"/admin/invite/"},on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"uk-width-1-1"},[s("button",{staticClass:"uk-button",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.addBox(e)}}},[s("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":"icon: plus"}})])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"uk-width-1-1",attrs:{id:"addBox"}}),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-width-1-1"},[s("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("Email")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("input",{staticClass:"uk-input",attrs:{id:"form-stacked-text",type:"text",placeholder:"",name:"email[]"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-width-1-1"},[s("button",{staticClass:"uk-button uk-button-default uk-modal-close",attrs:{type:"button"}},[t._v("Close")]),t._v(" "),s("input",{staticClass:"uk-button uk-button-default",attrs:{type:"submit",value:"Send Invitation"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"createModal","uk-modal":""}},[s("div",{staticClass:"uk-modal-dialog uk-modal-body"},[s("form",{staticClass:"uk-grid-small",attrs:{"uk-grid":"",method:"POST",id:"formCreateProduct",action:"/admin/products"},on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("button",{staticClass:"uk-button uk-button-default uk-modal-close",attrs:{type:"button"}},[t._v("Close")]),t._v(" "),s("input",{staticClass:"uk-button uk-button-default",attrs:{type:"submit",value:"Submit"}})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-width-1-1"},[s("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("Product Name")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("input",{staticClass:"uk-input",attrs:{id:"form-stacked-text",type:"text",placeholder:"",name:"title"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-width-1-1"},[s("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("Barcode")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("input",{staticClass:"uk-input",attrs:{id:"form-stacked-text",type:"text",placeholder:"",name:"barcode"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-width-1-2@s"},[s("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("Price")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("input",{staticClass:"uk-input",attrs:{id:"form-stacked-text",type:"text",placeholder:"",name:"price"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-width-1-2@s"},[s("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("Discount")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("input",{staticClass:"uk-input",attrs:{id:"form-stacked-text",type:"text",placeholder:"",name:"discount"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-width-1-1"},[s("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("Description")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("textarea",{staticClass:"uk-textarea",attrs:{rows:"5",placeholder:"",name:"description"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-width-1-1"},[s("div",{staticClass:"uk-form-label"},[t._v("Status")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("label",[s("input",{staticClass:"uk-radio",attrs:{type:"radio",checked:"",name:"status",value:"1"}}),t._v(" Publish")]),s("br"),t._v(" "),s("label",[s("input",{staticClass:"uk-radio",attrs:{type:"radio",name:"status",value:"0"}}),t._v(" Unpublished")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"editModal","uk-modal":""}},[s("div",{staticClass:"uk-modal-dialog uk-modal-body"},[s("form",{staticClass:"uk-grid-small",attrs:{"uk-grid":"",method:"PUT",id:"formEditProduct",action:"/admin/products/"+t.product._id},on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"uk-width-1-1"},[s("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("Product Name")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("input",{staticClass:"uk-input",attrs:{id:"form-stacked-text",type:"text",placeholder:"",name:"title"},domProps:{value:t.product.title}})])]),t._v(" "),s("div",{staticClass:"uk-width-1-1"},[s("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("Barcode")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("input",{staticClass:"uk-input",attrs:{id:"form-stacked-text",type:"text",placeholder:"",name:"barcode"},domProps:{value:t.product.barcode}})])]),t._v(" "),s("div",{staticClass:"uk-width-1-2@s"},[s("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("Price")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("input",{staticClass:"uk-input",attrs:{id:"form-stacked-text",type:"text",placeholder:"",name:"price"},domProps:{value:t.product.price}})])]),t._v(" "),s("div",{staticClass:"uk-width-1-2@s"},[s("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("Discount")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("input",{staticClass:"uk-input",attrs:{id:"form-stacked-text",type:"text",placeholder:"",name:"discount"},domProps:{value:t.product.discount}})])]),t._v(" "),s("div",{staticClass:"uk-width-1-1"},[s("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("Description")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("textarea",{staticClass:"uk-textarea",attrs:{rows:"5",placeholder:"",name:"description"}},[t._v(t._s(t.product.description))])])]),t._v(" "),s("div",{staticClass:"uk-width-1-1"},[s("div",{staticClass:"uk-form-label"},[t._v("Status")]),t._v(" "),s("div",{staticClass:"uk-form-controls"},[s("label",[s("input",{staticClass:"uk-radio",attrs:{type:"radio",name:"status",value:"1"},domProps:{checked:!!t.product.status}}),t._v(" Publish")]),s("br"),t._v(" "),s("label",[s("input",{staticClass:"uk-radio",attrs:{type:"radio",name:"status",value:"0"},domProps:{checked:!t.product.status}}),t._v(" Unpublished")])])]),t._v(" "),s("button",{staticClass:"uk-button uk-button-default uk-modal-close",attrs:{type:"button"}},[t._v("Close")]),t._v(" "),s("input",{staticClass:"uk-button uk-button-default",attrs:{type:"submit",value:"Submit"}})])])])},staticRenderFns:[]}}],[7]);
//# sourceMappingURL=app.800638b6094746d8ce8b.js.map