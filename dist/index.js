"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=o(function(D,m){
function _(r,e,u,i,y){var h,v,q,t,c,s,a,f,n;if(r<=0)return NaN;if(r===1||i===0)return a=u[y],a===a&&r-e>0?0:NaN;for(v=y,n=0;n<r;n++){if(a=u[v],a===a){h=a;break}v+=i}if(n===r)return NaN;for(v+=i,n+=1,q=0,c=0,f=1,n;n<r;n++)a=u[v],a===a&&(s=a-h,q+=s*s,c+=s,f+=1),v+=i;return t=f-e,t<=0?NaN:q/t-c/f*(c/t)}m.exports=_
});var x=o(function(F,j){
var b=require('@stdlib/strided-base-stride2offset/dist'),k=d();function E(r,e,u,i){return k(r,e,u,i,b(r,i))}j.exports=E
});var N=o(function(G,M){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=x(),g=d();O(l,"ndarray",g);M.exports=l
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=N(),p,R=z(w(__dirname,"./native.js"));A(R)?p=B:p=R;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
