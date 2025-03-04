// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(r,e,t,n,s){var i,a,d,f,o,u,m,l,N;if(r<=0)return NaN;if(1===r||0===n)return(m=t[s])==m&&r-e>0?0:NaN;for(a=s,N=0;N<r;N++){if((m=t[a])==m){i=m;break}a+=n}if(N===r)return NaN;for(a+=n,N+=1,d=0,o=0,l=1;N<r;N++)(m=t[a])==m&&(d+=(u=m-i)*u,o+=u,l+=1),a+=n;return(f=l-e)<=0?NaN:d/f-o/l*(o/f)}function n(r,n,s,i){return t(r,n,s,i,e(r,i))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
