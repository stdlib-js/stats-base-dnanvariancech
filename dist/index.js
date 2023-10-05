"use strict";var p=function(r,v){return function(){return v||r((v={exports:{}}).exports,v),v.exports}};var y=p(function(B,h){
function x(r,v,s,i){var m,u,f,o,t,c,a,e,n;if(r<=0)return NaN;if(r===1||i===0)return a=s[0],a===a&&r-v>0?0:NaN;for(i<0?u=(1-r)*i:u=0,n=0;n<r;n++){if(a=s[u],a===a){m=a;break}u+=i}if(n===r)return NaN;for(u+=i,n+=1,f=0,t=0,e=1,n;n<r;n++)a=s[u],a===a&&(c=a-m,f+=c*c,t+=c,e+=1),u+=i;return o=e-v,o<=0?NaN:f/o-t/e*(t/o)}h.exports=x
});var j=p(function(C,M){
function R(r,v,s,i,m){var u,f,o,t,c,a,e,n,q;if(r<=0)return NaN;if(r===1||i===0)return e=s[m],e===e&&r-v>0?0:NaN;for(f=m,q=0;q<r;q++){if(e=s[f],e===e){u=e;break}f+=i}if(q===r)return NaN;for(f+=i,q+=1,o=0,c=0,n=1,q;q<r;q++)e=s[f],e===e&&(a=e-u,o+=a*a,c+=a,n+=1),f+=i;return t=n-v,t<=0?NaN:o/t-c/n*(c/t)}M.exports=R
});var d=p(function(D,b){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=y(),E=j();_(l,"ndarray",E);b.exports=l
});var O=require("path").join,g=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=d(),N,k=g(O(__dirname,"./native.js"));w(k)?N=z:N=k;module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
