"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(w,v){
var p=require('@stdlib/stats-base-svarianceyc/dist').ndarray,x=require('@stdlib/math-base-special-sqrtf/dist');function j(e,r,s,a,f){return x(p(e,r,s,a,f))}v.exports=j
});var q=i(function(z,n){
var m=require('@stdlib/strided-base-stride2offset/dist'),l=t();function R(e,r,s,a){return l(e,r,s,a,m(e,a))}n.exports=R
});var d=i(function(A,y){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),E=t();_(c,"ndarray",E);y.exports=c
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=d(),u,o=b(O(__dirname,"./native.js"));g(o)?u=h:u=o;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
