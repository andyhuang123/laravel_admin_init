webpackJsonp([7],{"ES5+":function(e,t,a){var i=a("PiLx");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("2595dee0",i,!0,{})},EUsm:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-content"},[a("div",{staticClass:"container-content-title"},[e._v(e._s(e.$t("agency.setting.info.title")))]),e._v(" "),a("el-form",{staticClass:"el-form-detail",attrs:{"label-width":"120px"}},[a("el-row",[a("el-col",{attrs:{md:12}},[a("el-form-item",{attrs:{label:e.tree.name}},[a("el-tag",{attrs:{effect:"plain",size:"mini",type:"info"}},[e._v(e._s(e.tree.id))])],1)],1),e._v(" "),a("el-col",{attrs:{md:12}},[a("el-form-item",{attrs:{label:"parent_id"}},[a("el-tag",{attrs:{effect:"plain",size:"mini",type:"info"}},[e._v(e._s(e.tree.parent_id))])],1)],1)],1)],1)],1)},staticRenderFns:[]}},OhjN:function(e,t,a){var i=a("VU/8")(a("WmRf"),a("YKcN"),!1,function(e){a("ES5+")},"data-v-2336a418",null);e.exports=i.exports},P7yg:function(e,t,a){var i=a("QXjE");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("31c9b594",i,!0,{})},PiLx:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".tree-node[data-v-2336a418]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-ms-flex:auto;flex:auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:.875rem}.tree-node .node-info[data-v-2336a418]{-webkit-box-flex:1;-ms-flex:auto;flex:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tree-node .node-icon[data-v-2336a418]{color:#c7daf1;margin-right:5px}.tree-node .node-option[data-v-2336a418]{display:none;-ms-flex-negative:0;flex-shrink:0;text-align:center;width:50px}.el-tree-node.is-current>.el-tree-node__content .tree-node .node-option[data-v-2336a418],.el-tree-node__content:hover .node-option[data-v-2336a418]{display:inline-block}",""])},QXjE:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".header-aside .icon[data-v-efcc7480]{-ms-flex-negative:0;flex-shrink:0;width:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.2rem;cursor:pointer;color:#909399}.header-aside .icon[data-v-efcc7480]:hover{color:#606266}[data-v-efcc7480] .container-content{padding:20px}[data-v-efcc7480] .container-content-title{margin-bottom:20px;border-bottom:1px solid #ebeef5;padding-bottom:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:#303133}",""])},SRTJ:function(e,t,a){var i=a("VU/8")(a("WPWs"),a("oNBY"),!1,function(e){a("P7yg")},"data-v-efcc7480",null);e.exports=i.exports},WPWs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("OhjN"),s=a.n(i),n=a("vCZh"),o=a.n(n);t.default={components:{AgencyOrg:s.a,AgencyInfo:o.a},data:function(){return{tree:{}}},methods:{treeSelectNode:function(e){this.tree=e}}}},WmRf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"AgencyOrg",data:function(){return{dataList:[],treeListLoading:"dle",treeList:[],treeProps:{label:"name",children:"children"},nodeCache:{data:{},node:{}},nodePreCache:{node:{},nodeKey:0},dialog:{visible:{create:!1,update:!1,destroy:!1}},dataCreate:{name:"",parent_id:0,parent_name:0},dataUpdate:{id:0,sort:0,name:""},msg:{code:200,message:"",errors:{}}}},watch:{treeList:{deep:!0,handler:function(e,t){this.treeListLoading=this.treeList.length?"dle":"nodata"}}},created:function(){this.getTreeList()},methods:{getTreeList:function(){var e=this;this.treeListLoading="loading",axios.get("/agency/setting/org/getList").then(function(t){200==t.data.resp_msg.code?(e.treeList=t.data.resp_data.treeList,e.dataList=t.data.resp_data.dataList,e.$nextTick(function(){this.treeList.length&&(this.$refs.treeOrg.setCurrentKey(this.treeList[0].id),this.selectNode(this.treeList[0]))})):e.treeListLoading="error"})},selectNode:function(e){this.$emit("click",{id:e.id,name:e.name,parent_id:e.parent_id})},nodeUpdateOrDelete:function(e){if(this.nodeCache.node.key!=this.nodePreCache.nodeKey)return!1;_.isEmpty(e)?this.$emit("click",{}):this.selectNode(e)},nodeOptionSelectNode:function(e,t){this.nodeCache.data=e,this.nodeCache.node=t},nodeOptionVisibleChange:function(e){e?(this.nodePreCache.node=this.$refs.treeOrg.getCurrentNode(),this.nodePreCache.nodeKey=this.$refs.treeOrg.getCurrentKey(),this.$refs.treeOrg.setCurrentKey(this.nodeCache.node.key)):this.$refs.treeOrg.setCurrentKey(this.nodePreCache.nodeKey)},dialogNodeOption:function(e){switch(e){case"create-root":this.initDataCreateRoot(),this.dialog.visible.create=!0;break;case"create":this.initDataCreate(),this.dialog.visible.create=!0;break;case"update":this.initDataUpdate(),this.dialog.visible.update=!0;break;case"destroy":this.dialog.visible.destroy=!0}},initMsg:function(){this.msg.code=200,this.msg.message="",this.msg.errors={}},initDataCreateRoot:function(){this.initMsg(),this.dataCreate.name="",this.dataCreate.parent_id=0,this.dataCreate.parent_name=""},initDataCreate:function(){this.initMsg(),this.dataCreate.name="",this.dataCreate.parent_id=this.nodeCache.data.id,this.dataCreate.parent_name=this.nodeCache.data.name},initDataUpdate:function(){this.initMsg(),this.dataUpdate.id=this.nodeCache.data.id,this.dataUpdate.sort=this.nodeCache.data.sort,this.dataUpdate.name=this.nodeCache.data.name},treeNodeCreate:function(){var e=this;this.initMsg();var t=this.$loading();axios.post("/agency/setting/org/store",this.dataCreate).then(function(a){if(t.close(),200==a.data.resp_msg.code){e.$message({type:"success",message:e.$t("messages.succeeded",{status:e.$t("action.new")}),showClose:!0}),e.dialog.visible.create=!1;var i=a.data.resp_data;e.$set(e.dataList,i.id,i),0==i.parent_id?e.treeList.push(i):e.$refs.treeOrg.append(i,e.nodeCache.node)}else _.includes([42e3],a.data.resp_msg.code)?e.msg=a.data.resp_msg:e.$message({type:"error",message:e.$t("messages.failed",{status:e.$t("action.new")}),showClose:!0})})},treeNodeUpdate:function(){var e=this;this.initMsg();var t=this.$loading();axios.post("/agency/setting/org/update",this.dataUpdate).then(function(a){t.close(),200==a.data.resp_msg.code?(e.$message({type:"success",message:e.$t("messages.succeeded",{status:e.$t("action.edit")}),showClose:!0}),e.dialog.visible.update=!1,e.treeNodeSyncData(a.data.resp_data),e.nodeUpdateOrDelete(a.data.resp_data)):_.includes([42e3],a.data.resp_msg.code)?e.msg=a.data.resp_msg:e.$message({type:"error",message:e.$t("messages.failed",{status:e.$t("action.edit")}),showClose:!0})})},treeNodeSyncData:function(e){this.dataList[e.id].name=e.name,this.dataList[e.id].sort=e.sort,this.nodeCache.data.name=e.name,this.nodeCache.data.sort=e.sort},treeNodeDestroy:function(){var e=this;this.dialog.visible.destroy=!1;var t=this.$loading();axios.post("/agency/setting/org/destroy",{id:this.nodeCache.data.id}).then(function(a){t.close(),200==a.data.resp_msg.code?(e.$message({type:"success",message:e.$t("messages.succeeded",{status:e.$t("action.delete")}),showClose:!0}),e.$delete(e.dataList,e.nodeCache.data.id),e.$refs.treeOrg.remove(e.nodeCache.node),e.nodeUpdateOrDelete(null)):44221==a.data.resp_msg.code?e.$message({type:"warning",message:e.$t("messages.delete-tree-failed"),showClose:!0}):e.$message({type:"error",message:e.$t("messages.failed",{status:e.$t("action.delete")}),showClose:!0})})}}}},YKcN:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"h-100"},[e.treeList.length&&"dle"==e.treeListLoading?a("vue-simplebar",[a("el-tree",{ref:"treeOrg",attrs:{"highlight-current":"","node-key":"id",indent:18,data:e.treeList,props:e.treeProps,"expand-on-click-node":!1},on:{"current-change":e.selectNode},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,s=t.data;return a("div",{staticClass:"tree-node"},[a("div",{staticClass:"node-info"},[a("i",{staticClass:"el-icon-folder node-icon"}),e._v(e._s(s.name)+"\n                ")]),e._v(" "),a("el-dropdown",{staticClass:"node-option",attrs:{size:"small",trigger:"click",placement:"bottom"},on:{command:e.dialogNodeOption,"visible-change":e.nodeOptionVisibleChange}},[a("i",{staticClass:"el-icon-more",on:{click:function(t){return t.stopPropagation(),e.nodeOptionSelectNode(s,i)}}}),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"update"}},[a("i",{staticClass:"el-icon-folder"}),e._v(e._s(e.$t("action.edit"))+"\n                        ")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"destroy"}},[a("i",{staticClass:"el-icon-folder-delete"}),e._v(e._s(e.$t("action.delete"))+"\n                        ")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"create"}},[a("i",{staticClass:"el-icon-folder-add"}),e._v(e._s(e.$t("agency.setting.tree.create"))+"\n                        ")]),e._v(" "),a("el-dropdown-item",{attrs:{disabled:""}},[e._v("ID : "+e._s(s.id))])],1)],1)],1)}}])})],1):a("div",{staticClass:"p-2"},[a("component-page-loading",{attrs:{status:e.treeListLoading},on:{reload:e.getTreeList}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.$t("agency.setting.tree.dialog.create"),width:"400px",visible:e.dialog.visible.create},on:{"update:visible":function(t){return e.$set(e.dialog.visible,"create",t)}},nativeOn:{submit:function(e){e.preventDefault()}}},[a("div",{staticClass:"pr-5"},[a("el-form",{attrs:{model:e.dataCreate,"label-width":"80px"}},[a("el-form-item",{attrs:{label:e.$t("agency.setting.tree.dialog.parent")}},[a("el-tag",{attrs:{type:"info",size:"mini"}},[e._v(e._s(e.dataCreate.parent_id))]),e._v(" "),a("span",{staticClass:"ml-1"},[e._v(e._s(e.dataCreate.parent_name))])],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("agency.setting.tree.dialog.name"),error:Boolean(e.msg.errors.name)?e.msg.errors.name[0]:"",required:""}},[a("el-input",{model:{value:e.dataCreate.name,callback:function(t){e.$set(e.dataCreate,"name",t)},expression:"dataCreate.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.treeNodeCreate}},[e._v(e._s(e.$t("action.confirm")))]),e._v(" "),a("el-button",{on:{click:function(t){e.dialog.visible.create=!1}}},[e._v(e._s(e.$t("action.cancel")))])],1)],1)],1)]),e._v(" "),a("el-dialog",{attrs:{title:e.$t("agency.setting.tree.dialog.update"),width:"400px",visible:e.dialog.visible.update},on:{"update:visible":function(t){return e.$set(e.dialog.visible,"update",t)}}},[a("div",{staticClass:"pr-5"},[a("el-form",{attrs:{model:e.dataUpdate,"label-width":"80px"}},[a("el-form-item",{attrs:{label:e.$t("agency.setting.tree.dialog.sort"),error:Boolean(e.msg.errors.sort)?e.msg.errors.sort[0]:"",required:""}},[a("el-input",{attrs:{placeholder:e.$t("agency.setting.tree.dialog.sortPlaceholder")},model:{value:e.dataUpdate.sort,callback:function(t){e.$set(e.dataUpdate,"sort",t)},expression:"dataUpdate.sort"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("agency.setting.tree.dialog.name"),error:Boolean(e.msg.errors.name)?e.msg.errors.name[0]:"",required:""}},[a("el-input",{model:{value:e.dataUpdate.name,callback:function(t){e.$set(e.dataUpdate,"name",t)},expression:"dataUpdate.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.treeNodeUpdate}},[e._v(e._s(e.$t("action.confirm")))]),e._v(" "),a("el-button",{on:{click:function(t){e.dialog.visible.update=!1}}},[e._v(e._s(e.$t("action.cancel")))])],1)],1)],1)]),e._v(" "),a("el-dialog",{attrs:{title:e.$t("agency.setting.tree.dialog.destroy"),center:"",width:"320px",visible:e.dialog.visible.destroy},on:{"update:visible":function(t){return e.$set(e.dialog.visible,"destroy",t)}}},[a("div",{staticClass:"text-center",domProps:{innerHTML:e._s(e.$t("confirm.tree-delete",{name:e.nodeCache.data.name}))}}),e._v(" "),a("div",{staticClass:"text-center",domProps:{innerHTML:e._s(e.$t("confirm.tree-delete-org"))}}),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"danger"},on:{click:e.treeNodeDestroy}},[e._v(e._s(e.$t("action.confirm")))]),e._v(" "),a("el-button",{on:{click:function(t){e.dialog.visible.destroy=!1}}},[e._v(e._s(e.$t("action.cancel")))])],1)])],1)},staticRenderFns:[]}},l2wi:function(e,t,a){var i=a("ogd/");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("f2d47c24",i,!0,{})},oNBY:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("div",{staticClass:"page-layout"},[a("div",{staticClass:"page-layout-header"},[a("div",{staticClass:"header-aside flex-start-title"},[a("div",{staticClass:"title"},[e._v(e._s(e.$t("agency.setting.titleSide")))]),e._v(" "),a("div",{staticClass:"option"},[a("div",{staticClass:"icon",attrs:{title:e.$t("agency.setting.tree.create-root")},on:{click:function(t){return e.$refs.tree.dialogNodeOption("create-root")}}},[a("i",{staticClass:"el-icon-plus"})])])]),e._v(" "),a("div",{staticClass:"header-main"},[a("div",{staticClass:"title"},[e._v(e._s(e.$t("agency.setting.title")))])])]),e._v(" "),a("div",{staticClass:"page-layout-body"},[a("div",{staticClass:"body-aside"},[a("agency-org",{ref:"tree",on:{click:e.treeSelectNode}})],1),e._v(" "),a("div",{staticClass:"body-main"},[a("vue-simplebar",[a("div",{directives:[{name:"show",rawName:"v-show",value:null!=e.tree.id,expression:"tree.id != null"}]},[a("agency-info",{attrs:{tree:e.tree}}),e._v(" "),a("div",{staticClass:"container-content"},[a("div",{staticClass:"container-content-title"},[e._v(e._s(e.$t("agency.setting.other.title")))]),e._v("\n                            ...\n                        ")])],1)])],1)])])])},staticRenderFns:[]}},"ogd/":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},qX5o:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"AgencyInfo",props:["tree"]}},vCZh:function(e,t,a){var i=a("VU/8")(a("qX5o"),a("EUsm"),!1,function(e){a("l2wi")},"data-v-23c8a7c6",null);e.exports=i.exports}});