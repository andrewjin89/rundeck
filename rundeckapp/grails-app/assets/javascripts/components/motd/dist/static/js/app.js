webpackJsonp([1],{NHnr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("7+uW"),n=t("ppUw"),r=t.n(n),o=t("mtWM"),i=t.n(o),c=t("M4fF"),h=t.n(c),d={name:"MessageOfTheDay",props:["project"],data:function(){return{message:!1,showMessageTeaser:!0}},methods:{dismissMessage:function(){var e=this.hashMessage(this.project.readme.motd),s=new Date;s.setHours(23,59,59,0),this.$cookies.set(e,"true",s),this.message=!1},hashMessage:function(e){var s=0;if(0===e.length)return s;for(var t=0;t<e.length;t++)s=(s<<5)-s+e.charCodeAt(t),s|=0;return s},checkMessage:function(){var e=this.hashMessage(this.project.readme.motd);return!this.$cookies.get(e)}},mounted:function(){this.checkMessage()&&(this.showMessageTeaser=!0,this.message={shortMessage:h.a.truncate(this.project.readme.motd,{length:250}),fullMessage:!(this.project.readme.motd.length<=250)&&this.project.readme.motdHTML})}},m={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.message?t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-12"},[t("div",{staticClass:"alert alert-info"},[t("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.dismissMessage}},[e._v("×")]),e._v(" "),t("h4",[e._v("Message of The Day")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showMessageTeaser,expression:"showMessageTeaser"}]},[t("span",{domProps:{innerHTML:e._s(e.message.shortMessage)}}),e._v(" "),t("a",{directives:[{name:"show",rawName:"v-show",value:e.message.fullMessage,expression:"message.fullMessage"}],staticClass:"btn btn-sm btn-simple",staticStyle:{margin:"0",padding:"0 0 0 .5em"},on:{click:function(s){e.showMessageTeaser=!e.showMessageTeaser}}},[e._v("[read more]")])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.showMessageTeaser,expression:"!showMessageTeaser"}]},[t("span",{domProps:{innerHTML:e._s(e.message.fullMessage)}}),e._v(" "),t("p",{staticClass:"text-center"},[t("a",{staticClass:"btn btn-sm btn-simple text-center",on:{click:function(s){e.showMessageTeaser=!e.showMessageTeaser}}},[e._v("[show less]")])])])])])]):e._e()},staticRenderFns:[]};var u={name:"App",components:{motd:t("VU/8")(d,m,!1,function(e){t("O0KZ")},"data-v-75c2f4a6",null).exports},data:function(){return{project:null}},mounted:function(){var e=this;window._rundeck&&window._rundeck.rdBase&&window._rundeck.projectName&&i()({method:"get",headers:{"x-rundeck-ajax":!0},url:window._rundeck.rdBase+"menu/homeAjax",params:{projects:""+window._rundeck.projectName},withCredentials:!0}).then(function(s){console.log("response",s),s.data.projects[0]&&(e.project=s.data.projects[0])})}},p={render:function(){var e=this.$createElement,s=this._self._c||e;return this.project?s("div",[this.project&&this.project.readme&&this.project.readme.motd?s("motd",{attrs:{project:this.project}}):this._e()],1):this._e()},staticRenderFns:[]};var l=t("VU/8")(u,p,!1,function(e){t("NxOt")},null,null).exports;a.a.config.productionTip=!1,a.a.use(r.a),new a.a({el:"#project-motd-vue",components:{App:l},template:"<App/>"})},NxOt:function(e,s){},O0KZ:function(e,s){}},["NHnr"]);
//# sourceMappingURL=app.js.map