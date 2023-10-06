"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=i(function(w,u){
var f=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/stats-base-svarianceyc/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,a,t){return f(x(p(e,r,a,t)))}u.exports=j
});var q=i(function(z,n){
var m=require('@stdlib/number-float64-base-to-float32/dist'),F=require('@stdlib/stats-base-svarianceyc/dist').ndarray,R=require('@stdlib/math-base-special-sqrt/dist');function T(e,r,a,t,l){return m(R(F(e,r,a,t,l)))}n.exports=T
});var y=i(function(A,c){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=v(),E=q();_(o,"ndarray",E);c.exports=o
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),s,d=b(O(__dirname,"./native.js"));g(d)?s=h:s=d;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
