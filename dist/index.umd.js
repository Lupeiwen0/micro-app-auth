(function(e,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(e=typeof globalThis<"u"?globalThis:e||self,i(e.umd={}))})(this,function(e){"use strict";class i{constructor(t,s){this.target=s,this.scopeCode=`scope.${t.scope}`}checkTargetAuth(){return new Promise((t,s)=>{this.target.getSetting({success:n=>{const o=n.authSetting[this.scopeCode];if(o||o===void 0)return t(!0);o===!1&&this.target.openSetting({success:c=>{const u=c.authSetting[this.scopeCode];u?t(u):s(u)}})},fail(n){s({type:"getSetting fail",err:n})}})})}async execute(t,s){await this.checkTargetAuth(),this.target[t](s)}}e.default=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=index.umd.js.map