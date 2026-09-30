import{a as fo}from"./chunk-UULZYQ7V.js";var xc=0,Ho=1,vc=2;var Is=1,yc=2,$i=3,Kn=0,ke=1,Mn=2,nn=0,Ki=1,gi=2,Wo=3,Xo=4,Mc=5;var _i=100,Sc=101,bc=102,wc=103,Tc=104,Ac=200,Ec=201,Cc=202,Rc=203,qo=204,Yo=205,Pc=206,Ic=207,Lc=208,Dc=209,Uc=210,Nc=211,Fc=212,Oc=213,Bc=214,Er=0,Cr=1,Rr=2,Vi=3,Pr=4,Ir=5,Lr=6,Dr=7,Zo=0,zc=1,Vc=2,hn=0,Ls=1,Ds=2,Us=3,Ns=4,Fs=5,Os=6,xi=7;var Jo=300,Qn=301,vi=302,sa=303,ra=304,Bs=306,Ur=1e3,_n=1001,Nr=1002,me=1003,kc=1004;var zs=1005;var Ee=1006,aa=1007;var Sn=1008;var Je=1009,$o=1010,Ko=1011,Qi=1012,oa=1013,un=1014,$e=1015,Ce=1016,la=1017,ca=1018,ji=1020,Qo=35902,jo=35899,tl=1021,el=1022,We=1023,xn=1026,jn=1027,nl=1028,ha=1029,ti=1030,ua=1031;var da=1033,Vs=33776,ks=33777,Gs=33778,Hs=33779,fa=35840,pa=35841,ma=35842,ga=35843,_a=36196,xa=37492,va=37496,ya=37488,Ma=37489,Ws=37490,Sa=37491,ba=37808,wa=37809,Ta=37810,Aa=37811,Ea=37812,Ca=37813,Ra=37814,Pa=37815,Ia=37816,La=37817,Da=37818,Ua=37819,Na=37820,Fa=37821,Oa=36492,Ba=36494,za=36495,Va=36283,ka=36284,Xs=36285,Ga=36286;var fs=2300,Fr=2301,wr=2302,Fo=2303,Oo=2400,Bo=2401,zo=2402;var Gc=3200;var il=0,Hc=1,In="",Oe="srgb",ps="srgb-linear",ms="linear",Yt="srgb";var Tr=7680;var Wc=519,Xc=512,qc=513,Yc=514,Ha=515,Zc=516,Jc=517,Wa=518,$c=519,Kc=35044;var sl="300 es",cn=2e3,gs=2001;function Qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qc(){let i=ki("canvas");return i.style.display="block",i}var $l={},Gi=null;function rl(...i){let t="THREE."+i.shift();Gi?Gi("log",t,...i):console.log(t,...i)}function jc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pt(...i){i=jc(i);let t="THREE."+i.shift();if(Gi)Gi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Rt(...i){i=jc(i);let t="THREE."+i.shift();if(Gi)Gi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function hi(...i){let t=i.join(" ");t in $l||($l[t]=!0,Pt(...i))}function th(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var eh={[Er]:Cr,[Rr]:Lr,[Pr]:Dr,[Vi]:Ir,[Cr]:Er,[Lr]:Rr,[Dr]:Pr,[Ir]:Vi},vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var po=Math.PI/180,Or=180/Math.PI;function qs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Ht(i,t,e){return Math.max(t,Math.min(e,i))}function tu(i,t){return(i%t+t)%t}function mo(i,t,e){return(1-e)*i+e*t}function ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hl=class hl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hl.prototype.isVector2=!0;var Et=hl,yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];if(d!==y||l!==h||c!==m||u!==_){let f=l*h+c*m+u*_+d*y;f<0&&(h=-h,m=-m,_=-_,y=-y,f=-f);let p=1-o;if(f<.9995){let C=Math.acos(f),D=Math.sin(C);p=Math.sin(p*C)/D,o=Math.sin(o*C)/D,l=l*p+h*o,c=c*p+m*o,u=u*p+_*o,d=d*p+y*o}else{l=l*p+h*o,c=c*p+m*o,u=u*p+_*o,d=d*p+y*o;let C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+u*d+l*m-c*h,t[e+1]=l*_+u*h+c*d-o*m,t[e+2]=c*_+u*m+o*h-l*d,t[e+3]=u*_-o*d-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"YXZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"ZXY":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"ZYX":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"YZX":this._x=h*u*d+c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d-h*m*_;break;case"XZY":this._x=h*u*d-c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d+h*m*_;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ul=class ul{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return go.copy(this).projectOnVector(t),this.sub(go)}reflect(t){return this.sub(go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ul.prototype.isVector3=!0;var V=ul,go=new V,Kl=new yn,dl=class dl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],_=n[8],y=s[0],f=s[3],p=s[6],C=s[1],D=s[4],S=s[7],w=s[2],T=s[5],I=s[8];return r[0]=a*y+o*C+l*w,r[3]=a*f+o*D+l*T,r[6]=a*p+o*S+l*I,r[1]=c*y+u*C+d*w,r[4]=c*f+u*D+d*T,r[7]=c*p+u*S+d*I,r[2]=h*y+m*C+_*w,r[5]=h*f+m*D+_*T,r[8]=h*p+m*S+_*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,m=c*r-a*l,_=e*d+n*h+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=d*y,t[1]=(s*c-u*n)*y,t[2]=(o*n-s*a)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=m*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_o.makeScale(t,e)),this}rotate(t){return hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_o.makeRotation(-t)),this}translate(t,e){return hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dl.prototype.isMatrix3=!0;var Lt=dl,_o=new Lt,Ql=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eu(){let i={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Yt&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Yt&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===In?ms:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ps]:{primaries:t,whitePoint:n,transfer:ms,toXYZ:Ql,fromXYZ:jl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:Yt,toXYZ:Ql,fromXYZ:jl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}var Bt=eu();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ti,Br=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ti===void 0&&(Ti=ki("canvas")),Ti.width=t.width,Ti.height=t.height;let s=Ti.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ti}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ki("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nu=0,Hi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xo(s[a].image)):r.push(xo(s[a]))}else r=xo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Br.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var iu=0,vo=new V,Ve=class i extends vn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_n,s=_n,r=Ee,a=Sn,o=We,l=Je,c=i.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=qs(),this.name="",this.source=new Hi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ur:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ur:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Jo;Ve.DEFAULT_ANISOTROPY=1;var fl=class fl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],_=l[9],y=l[2],f=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(c+1)/2,S=(m+1)/2,w=(p+1)/2,T=(u+h)/4,I=(d+y)/4,x=(_+f)/4;return D>S&&D>w?D<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(D),s=T/n,r=I/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=I/r,s=x/r),this.set(n,s,r,e),this}let C=Math.sqrt((f-_)*(f-_)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(C)<.001&&(C=1),this.x=(f-_)/C,this.y=(d-y)/C,this.z=(h-u)/C,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fl.prototype.isVector4=!0;var ae=fl,zr=class extends vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ve(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ee,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Hi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ve=class extends zr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ui=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=me,this.minFilter=me,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vr=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=me,this.minFilter=me,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ia=class ia{constructor(t,e,n,s,r,a,o,l,c,u,d,h,m,_,y,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,m,_,y,f)}set(t,e,n,s,r,a,o,l,c,u,d,h,m,_,y,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=_,p[11]=y,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ia().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),a=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,m=a*d,_=o*u,y=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=h-y*c,e[9]=-o*l,e[2]=y-h*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,m=l*d,_=c*u,y=c*d;e[0]=h+y*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=y+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,m=l*d,_=c*u,y=c*d;e[0]=h-y*o,e[4]=-a*d,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,m=a*d,_=o*u,y=o*d;e[0]=l*u,e[4]=_*c-m,e[8]=h*c+y,e[1]=l*d,e[5]=y*c+h,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,m=a*c,_=o*l,y=o*c;e[0]=l*u,e[4]=y-h*d,e[8]=_*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+_,e[10]=h-y*d}else if(t.order==="XZY"){let h=a*l,m=a*c,_=o*l,y=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+y,e[5]=a*u,e[9]=m*d-_,e[2]=_*d-m,e[6]=o*u,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(su,t,ru)}lookAt(t,e,n){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),zn.crossVectors(n,Xe),zn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),zn.crossVectors(n,Xe)),zn.normalize(),rr.crossVectors(Xe,zn),s[0]=zn.x,s[4]=rr.x,s[8]=Xe.x,s[1]=zn.y,s[5]=rr.y,s[9]=Xe.y,s[2]=zn.z,s[6]=rr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],_=n[2],y=n[6],f=n[10],p=n[14],C=n[3],D=n[7],S=n[11],w=n[15],T=s[0],I=s[4],x=s[8],M=s[12],P=s[1],R=s[5],L=s[9],b=s[13],E=s[2],F=s[6],B=s[10],H=s[14],J=s[3],X=s[7],$=s[11],et=s[15];return r[0]=a*T+o*P+l*E+c*J,r[4]=a*I+o*R+l*F+c*X,r[8]=a*x+o*L+l*B+c*$,r[12]=a*M+o*b+l*H+c*et,r[1]=u*T+d*P+h*E+m*J,r[5]=u*I+d*R+h*F+m*X,r[9]=u*x+d*L+h*B+m*$,r[13]=u*M+d*b+h*H+m*et,r[2]=_*T+y*P+f*E+p*J,r[6]=_*I+y*R+f*F+p*X,r[10]=_*x+y*L+f*B+p*$,r[14]=_*M+y*b+f*H+p*et,r[3]=C*T+D*P+S*E+w*J,r[7]=C*I+D*R+S*F+w*X,r[11]=C*x+D*L+S*B+w*$,r[15]=C*M+D*b+S*H+w*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],m=t[14],_=t[3],y=t[7],f=t[11],p=t[15],C=l*m-c*h,D=o*m-c*d,S=o*h-l*d,w=a*m-c*u,T=a*h-l*u,I=a*d-o*u;return e*(y*C-f*D+p*S)-n*(_*C-f*w+p*T)+s*(_*D-y*w+p*I)-r*(_*S-y*T+f*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],m=t[11],_=t[12],y=t[13],f=t[14],p=t[15],C=e*o-n*a,D=e*l-s*a,S=e*c-r*a,w=n*l-s*o,T=n*c-r*o,I=s*c-r*l,x=u*y-d*_,M=u*f-h*_,P=u*p-m*_,R=d*f-h*y,L=d*p-m*y,b=h*p-m*f,E=C*b-D*L+S*R+w*P-T*M+I*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/E;return t[0]=(o*b-l*L+c*R)*F,t[1]=(s*L-n*b-r*R)*F,t[2]=(y*I-f*T+p*w)*F,t[3]=(h*T-d*I-m*w)*F,t[4]=(l*P-a*b-c*M)*F,t[5]=(e*b-s*P+r*M)*F,t[6]=(f*S-_*I-p*D)*F,t[7]=(u*I-h*S+m*D)*F,t[8]=(a*L-o*P+c*x)*F,t[9]=(n*P-e*L-r*x)*F,t[10]=(_*T-y*S+p*C)*F,t[11]=(d*S-u*T-m*C)*F,t[12]=(o*M-a*R-l*x)*F,t[13]=(e*R-n*M+s*x)*F,t[14]=(y*D-_*w-f*C)*F,t[15]=(u*w-d*D+h*C)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,m=r*u,_=r*d,y=a*u,f=a*d,p=o*d,C=l*c,D=l*u,S=l*d,w=n.x,T=n.y,I=n.z;return s[0]=(1-(y+p))*w,s[1]=(m+S)*w,s[2]=(_-D)*w,s[3]=0,s[4]=(m-S)*T,s[5]=(1-(h+p))*T,s[6]=(f+C)*T,s[7]=0,s[8]=(_+D)*I,s[9]=(f-C)*I,s[10]=(1-(h+y))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ai.set(s[0],s[1],s[2]).length(),o=Ai.set(s[4],s[5],s[6]).length(),l=Ai.set(s[8],s[9],s[10]).length();r<0&&(a=-a),rn.copy(this);let c=1/a,u=1/o,d=1/l;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,e.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=cn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),m=(n+s)/(n-s),_,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===cn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===gs)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=cn,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),m=-(n+s)/(n-s),_,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===cn)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===gs)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ia.prototype.isMatrix4=!0;var fe=ia,Ai=new V,rn=new fe,su=new V(0,0,0),ru=new V(1,1,1),zn=new V,rr=new V,Xe=new V,tc=new fe,ec=new yn,Xn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ec.setFromEuler(this),this.setFromQuaternion(ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var Wi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},au=0,nc=new V,Ei=new yn,Tn=new fe,ar=new V,cs=new V,ou=new V,lu=new yn,ic=new V(1,0,0),sc=new V(0,1,0),rc=new V(0,0,1),ac={type:"added"},cu={type:"removed"},Ci={type:"childadded",child:null},yo={type:"childremoved",child:null},en=class i extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new Xn,n=new yn,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Lt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return nc.copy(t).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ar.copy(t):ar.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(cs,ar,this.up):Tn.lookAt(ar,cs,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ac),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cu),yo.child=t,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ac),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new V(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},hu={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let f=e.getJointPose(y,n),p=this._getHandJoint(c,y);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ci;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},or={h:0,s:0,l:0};function Mo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Bt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Bt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Bt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Bt.workingColorSpace){if(t=tu(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Mo(a,r,t+1/3),this.g=Mo(a,r,t),this.b=Mo(a,r,t-1/3)}return Bt.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Bt.workingToColorSpace(Le.copy(this),t),Math.round(Ht(Le.r*255,0,255))*65536+Math.round(Ht(Le.g*255,0,255))*256+Math.round(Ht(Le.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Bt.workingColorSpace){Bt.workingToColorSpace(Le.copy(this),e);let n=Le.r,s=Le.g,r=Le.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Bt.workingColorSpace){return Bt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Oe){Bt.workingToColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,s=Le.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(or);let n=mo(Vn.h,or.h,e),s=mo(Vn.s,or.s,e),r=mo(Vn.l,or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new Ut;Ut.NAMES=nh;var _s=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},an=new V,An=new V,So=new V,En=new V,Ri=new V,Pi=new V,oc=new V,bo=new V,wo=new V,To=new V,Ao=new ae,Eo=new ae,Co=new ae,Wn=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),An.subVectors(n,e),So.subVectors(t,e);let a=an.dot(an),o=an.dot(An),l=an.dot(So),c=An.dot(An),u=An.dot(So),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ao.setScalar(0),Eo.setScalar(0),Co.setScalar(0),Ao.fromBufferAttribute(t,e),Eo.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ao,r.x),a.addScaledVector(Eo,r.y),a.addScaledVector(Co,r.z),a}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),An.subVectors(t,e),an.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),An.subVectors(this.a,this.b),an.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ri.subVectors(s,n),Pi.subVectors(r,n),bo.subVectors(t,n);let l=Ri.dot(bo),c=Pi.dot(bo);if(l<=0&&c<=0)return e.copy(n);wo.subVectors(t,s);let u=Ri.dot(wo),d=Pi.dot(wo);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ri,a);To.subVectors(t,r);let m=Ri.dot(To),_=Pi.dot(To);if(_>=0&&m<=_)return e.copy(r);let y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Pi,o);let f=u*_-m*d;if(f<=0&&d-u>=0&&m-_>=0)return oc.subVectors(r,s),o=(d-u)/(d-u+(m-_)),e.copy(s).addScaledVector(oc,o);let p=1/(f+y+h);return a=y*p,o=h*p,e.copy(n).addScaledVector(Ri,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),cr.subVectors(this.max,hs),Ii.subVectors(t.a,hs),Li.subVectors(t.b,hs),Di.subVectors(t.c,hs),kn.subVectors(Li,Ii),Gn.subVectors(Di,Li),ri.subVectors(Ii,Di);let e=[0,-kn.z,kn.y,0,-Gn.z,Gn.y,0,-ri.z,ri.y,kn.z,0,-kn.x,Gn.z,0,-Gn.x,ri.z,0,-ri.x,-kn.y,kn.x,0,-Gn.y,Gn.x,0,-ri.y,ri.x,0];return!Ro(e,Ii,Li,Di,cr)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,Ii,Li,Di,cr))?!1:(hr.crossVectors(kn,Gn),e=[hr.x,hr.y,hr.z],Ro(e,Ii,Li,Di,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Cn=[new V,new V,new V,new V,new V,new V,new V,new V],on=new V,lr=new qn,Ii=new V,Li=new V,Di=new V,kn=new V,Gn=new V,ri=new V,hs=new V,cr=new V,hr=new V,ai=new V;function Ro(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ai.fromArray(i,r);let o=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var xe=new V,ur=new Et,uu=0,Be=class extends vn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=$e,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var xs=class extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vs=class extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ze=class extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}},du=new qn,us=new V,Po=new V,qi=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):du.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);let e=us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(Po)),this.expandByPoint(us.copy(t.center).sub(Po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fu=0,tn=new fe,Io=new en,Ui=new V,qe=new qn,ds=new qn,Te=new V,Ye=class i extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?vs:xs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ze(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(qe.min,ds.min),qe.expandByPoint(Te),Te.addVectors(qe.max,ds.max),qe.expandByPoint(Te)):(qe.expandByPoint(ds.min),qe.expandByPoint(ds.max))}qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Te.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(t,c),Te.add(Ui)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Be(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new V,l[x]=new V;let c=new V,u=new V,d=new V,h=new Et,m=new Et,_=new Et,y=new V,f=new V;function p(x,M,P){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),m.fromBufferAttribute(r,M),_.fromBufferAttribute(r,P),u.sub(c),d.sub(c),m.sub(h),_.sub(h);let R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(R),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(R),o[x].add(y),o[M].add(y),o[P].add(y),l[x].add(f),l[M].add(f),l[P].add(f))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let x=0,M=C.length;x<M;++x){let P=C[x],R=P.start,L=P.count;for(let b=R,E=R+L;b<E;b+=3)p(t.getX(b+0),t.getX(b+1),t.getX(b+2))}let D=new V,S=new V,w=new V,T=new V;function I(x){w.fromBufferAttribute(s,x),T.copy(w);let M=o[x];D.copy(M),D.sub(w.multiplyScalar(w.dot(M))).normalize(),S.crossVectors(T,M);let R=S.dot(l[x])<0?-1:1;a.setXYZW(x,D.x,D.y,D.z,R)}for(let x=0,M=C.length;x<M;++x){let P=C[x],R=P.start,L=P.count;for(let b=R,E=R+L;b<E;b+=3)I(t.getX(b+0)),I(t.getX(b+1)),I(t.getX(b+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,u=new V,d=new V;if(t)for(let h=0,m=t.count;h<m;h+=3){let _=t.getX(h+0),y=t.getX(h+1),f=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,f),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),m=0,_=0;for(let y=0,f=l.length;y<f;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*u;for(let p=0;p<u;p++)h[_++]=c[m++]}return new Be(h,u,d)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Lo=new V,pu=new V,mu=new Lt,ln=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Lo.subVectors(n,e).cross(pu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Lo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mu.getNormalMatrix(t),s=this.coplanarPoint(Lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},gu=0,di=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Ki,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Rn=new V,Do=new V,dr=new V,fr=new V,ys=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Do.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),fr.copy(this.origin).sub(Do);let r=t.distanceTo(e)*.5,a=-this.direction.dot(dr),o=fr.dot(this.direction),l=-fr.dot(dr),c=fr.lengthSq(),u=Math.abs(1-a*a),d,h,m,_;if(u>0)if(d=a*l-o,h=a*o-l,_=r*u,d>=0)if(h>=-_)if(h<=_){let y=1/u;d*=y,h*=y,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Do).addScaledVector(dr,h),m}intersectSphere(t,e){if(t.radius<0)return null;Rn.subVectors(t.center,this.origin);let n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,m=t.z-a.z,_=e.x-a.x,y=e.y-a.y,f=e.z-a.z,p=n.x-a.x,C=n.y-a.y,D=n.z-a.z,S=Math.abs(l),w=Math.abs(c),T=Math.abs(u),I,x,M,P,R,L,b,E,F,B,H,J;if(S>=w&&S>=T?(M=l,L=d,F=_,J=p,l>=0?(I=c,x=u,P=h,R=m,b=y,E=f,B=C,H=D):(I=u,x=c,P=m,R=h,b=f,E=y,B=D,H=C)):w>=T?(M=c,L=h,F=y,J=C,c>=0?(I=u,x=l,P=m,R=d,b=f,E=_,B=D,H=p):(I=l,x=u,P=d,R=m,b=_,E=f,B=p,H=D)):(M=u,L=m,F=f,J=D,u>=0?(I=l,x=c,P=d,R=h,b=_,E=y,B=p,H=C):(I=c,x=l,P=h,R=d,b=y,E=_,B=C,H=p)),M===0)return null;let X=I/M,$=x/M,et=1/M,mt=P-X*L,vt=R-$*L,Qt=b-X*F,kt=E-$*F,Wt=B-X*J,Z=H-$*J,tt=Wt*kt-Z*Qt,_t=mt*Z-vt*Wt,It=Qt*vt-kt*mt;if(s){if(tt<0||_t<0||It<0)return null}else if((tt<0||_t<0||It<0)&&(tt>0||_t>0||It>0))return null;let pt=tt+_t+It;if(pt===0)return null;let Ot=et*(tt*L+_t*F+It*J);return(pt>0?Ot<0:Ot>0)?null:this.at(Ot/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lc=new fe,oi=new ys,pr=new qi,cc=new V,mr=new V,gr=new V,_r=new V,Uo=new V,xr=new V,hc=new V,vr=new V,Ae=class extends en{constructor(t=new Ye,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Uo.fromBufferAttribute(d,t),a?xr.addScaledVector(Uo,u):xr.addScaledVector(Uo.sub(e),u))}e.add(xr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(pr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(pr,cc)===null||oi.origin.distanceToSquared(cc)>(t.far-t.near)**2))&&(lc.copy(r).invert(),oi.copy(t.ray).applyMatrix4(lc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){let f=h[_],p=a[f.materialIndex],C=Math.max(f.start,m.start),D=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let S=C,w=D;S<w;S+=3){let T=o.getX(S),I=o.getX(S+1),x=o.getX(S+2);s=yr(this,p,t,n,c,u,d,T,I,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let f=_,p=y;f<p;f+=3){let C=o.getX(f),D=o.getX(f+1),S=o.getX(f+2);s=yr(this,a,t,n,c,u,d,C,D,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){let f=h[_],p=a[f.materialIndex],C=Math.max(f.start,m.start),D=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=C,w=D;S<w;S+=3){let T=S,I=S+1,x=S+2;s=yr(this,p,t,n,c,u,d,T,I,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let f=_,p=y;f<p;f+=3){let C=f,D=f+1,S=f+2;s=yr(this,a,t,n,c,u,d,C,D,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function _u(i,t,e,n,s,r,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Kn,o),l===null)return null;vr.copy(o),vr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(vr);return c<e.near||c>e.far?null:{distance:c,point:vr.clone(),object:i}}function yr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,_r);let u=_u(i,t,e,n,mr,gr,_r,hc);if(u){let d=new V;Wn.getBarycoord(hc,mr,gr,_r,d),s&&(u.uv=Wn.getInterpolatedAttribute(s,o,l,c,d,new Et)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,o,l,c,d,new Et)),a&&(u.normal=Wn.getInterpolatedAttribute(a,o,l,c,d,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new V,materialIndex:0};Wn.getNormal(mr,gr,_r,h.normal),u.face=h,u.barycoord=d}return u}var kr=class extends Ve{constructor(t=null,e=1,n=1,s,r,a,o,l,c=me,u=me,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ms=class extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var li=new qi,xu=new Et(.5,.5),Mr=new V,Ss=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,a=new ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],m=r[7],_=r[8],y=r[9],f=r[10],p=r[11],C=r[12],D=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,m-u,p-_,w-C).normalize(),s[1].setComponents(c+a,m+u,p+_,w+C).normalize(),s[2].setComponents(c+o,m+d,p+y,w+D).normalize(),s[3].setComponents(c-o,m-d,p-y,w-D).normalize(),n)s[4].setComponents(l,h,f,S).normalize(),s[5].setComponents(c-l,m-h,p-f,w-S).normalize();else if(s[4].setComponents(c-l,m-h,p-f,w-S).normalize(),e===cn)s[5].setComponents(c+l,m+h,p+f,w+S).normalize();else if(e===gs)s[5].setComponents(l,h,f,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);let e=xu.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Mr.x=s.normal.x>0?t.max.x:t.min.x,Mr.y=s.normal.y>0?t.max.y:t.min.y,Mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bs=class extends Ve{constructor(t=[],e=Qn,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Yn=class extends Ve{constructor(t,e,n=un,s,r,a,o=me,l=me,c,u=xn,d=1){if(u!==xn&&u!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Gr=class extends Yn{constructor(t,e=un,n=Qn,s,r,a=me,o=me,l,c=xn){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ws=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yi=class i extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(d,2));function _(y,f,p,C,D,S,w,T,I,x,M){let P=S/I,R=w/x,L=S/2,b=w/2,E=T/2,F=I+1,B=x+1,H=0,J=0,X=new V;for(let $=0;$<B;$++){let et=$*R-b;for(let mt=0;mt<F;mt++){let vt=mt*P-L;X[y]=vt*C,X[f]=et*D,X[p]=E,c.push(X.x,X.y,X.z),X[y]=0,X[f]=0,X[p]=T>0?1:-1,u.push(X.x,X.y,X.z),d.push(mt/I),d.push(1-$/x),H+=1}}for(let $=0;$<x;$++)for(let et=0;et<I;et++){let mt=h+et+F*$,vt=h+et+F*($+1),Qt=h+(et+1)+F*($+1),kt=h+(et+1)+F*$;l.push(mt,vt,kt),l.push(vt,Qt,kt),J+=6}o.addGroup(m,J,M),m+=J,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var pi=class i extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,m=[],_=[],y=[],f=[];for(let p=0;p<u;p++){let C=p*h-a;for(let D=0;D<c;D++){let S=D*d-r;_.push(S,-C,0),y.push(0,0,1),f.push(D/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<o;C++){let D=C+c*p,S=C+c*(p+1),w=C+1+c*(p+1),T=C+1+c*p;m.push(D,S,T),m.push(S,w,T)}this.setIndex(m),this.setAttribute("position",new ze(_,3)),this.setAttribute("normal",new ze(y,3)),this.setAttribute("uv",new ze(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(uc(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(uc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ue(i){let t={};for(let e=0;e<i.length;e++){let n=yi(i[e]);for(let s in n)t[s]=n[s]}return t}function uc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function al(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Ln={clone:yi,merge:Ue},yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ce=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yu,this.fragmentShader=Mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yi(t.uniforms),this.uniformsGroups=vu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ae().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Zi=class extends ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Hr=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wr=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ni(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function No(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Zn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xr=class extends Zn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oo,endingEnd:Oo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bo:r=t,o=2*e-n;break;case zo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bo:a=t,l=2*n-e;break;case zo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),y=_*_,f=y*_,p=-h*f+2*h*y-h*_,C=(1+h)*f+(-1.5-2*h)*y+(-.5+h)*_+1,D=(-1-m)*f+(1.5+m)*y+.5*_,S=m*f-m*y;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+C*a[c+w]+D*a[l+w]+S*a[d+w];return r}},qr=class extends Zn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Yr=class extends Zn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zr=class extends Zn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let _=(n-e)/(s-e),y=1-_;for(let f=0;f!==o;++f)r[f]=a[c+f]*y+a[l+f]*_;return r}let h=o*2,m=t-1;for(let _=0;_!==o;++_){let y=a[c+_],f=a[l+_],p=m*h+_*2,C=d[p],D=d[p+1],S=t*h+_*2,w=u[S],T=u[S+1],I=bu(n,e,C,w,s);r[_]=ih(I,y,D,T,f)}return r}};function ih(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Su(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function bu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ih(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Su(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ze=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ni(e,this.TimeBufferType),this.values=Ni(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ni(t.times,Array),values:Ni(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),No(t.settings)&&(n.settings={inTangents:Ni(t.settings.inTangents,Array),outTangents:Ni(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fs:e=this.InterpolantFactoryMethodDiscrete;break;case Fr:e=this.InterpolantFactoryMethodLinear;break;case wr:e=this.InterpolantFactoryMethodSmooth;break;case Fo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return Fr;case this.InterpolantFactoryMethodSmooth:return wr;case this.InterpolantFactoryMethodBezier:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;No(this.settings)&&(dc(this.settings.inTangents,t),dc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Rt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Rt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Rt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Rt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&jh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Rt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,m=d+n;for(let _=0;_!==n;++_){let y=e[d+_];if(y!==e[h+_]||y!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let m=0;m!==n;++m)e[h+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,No(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function dc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ze.prototype.ValueTypeName="";Ze.prototype.TimeBufferType=Float32Array;Ze.prototype.ValueBufferType=Float32Array;Ze.prototype.DefaultInterpolation=Fr;var Jn=class extends Ze{constructor(t,e,n){super(t,e,n)}};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=fs;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Jr.prototype.ValueTypeName="color";var $r=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};$r.prototype.ValueTypeName="number";var Kr=class extends Zn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ts=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Kr(this.times,this.values,this.getValueSize(),t)}};Ts.prototype.ValueTypeName="quaternion";Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends Ze{constructor(t,e,n){super(t,e,n)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=fs;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Qr.prototype.ValueTypeName="vector";var Ar={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(fc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!fc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function fc(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var jr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sh=new jr,Ji=class{constructor(t){this.manager=t!==void 0?t:sh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi=new WeakMap,ta=class extends Ji{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ar.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Fi.get(a);d===void 0&&(d=[],Fi.set(a,d)),d.push({onLoad:e,onError:s})}return a}let o=ki("img");function l(){u(),e&&e(this);let d=Fi.get(this)||[];for(let h=0;h<d.length;h++){let m=d[h];m.onLoad&&m.onLoad(this)}Fi.delete(this),r.manager.itemEnd(t)}function c(d){u(),s&&s(d),Ar.remove(`image:${t}`);let h=Fi.get(this)||[];for(let m=0;m<h.length;m++){let _=h[m];_.onError&&_.onError(d)}Fi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ar.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var As=class extends Ji{constructor(t){super(t)}load(t,e,n,s){let r=new Ve,a=new ta(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}};var Sr=new V,br=new yn,gn=new V,Es=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sr,br,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,br,gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sr,br,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,br,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hn=new V,pc=new Et,mc=new Et,De=class extends Es{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,pc,mc),e.subVectors(mc,pc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var mi=class extends Es{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Cs=class extends Ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Oi=-90,Bi=1,ea=class extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(Oi,Bi,t,e);s.layers=this.layers,this.add(s);let r=new De(Oi,Bi,t,e);r.layers=this.layers,this.add(r);let a=new De(Oi,Bi,t,e);a.layers=this.layers,this.add(a);let o=new De(Oi,Bi,t,e);o.layers=this.layers,this.add(o);let l=new De(Oi,Bi,t,e);l.layers=this.layers,this.add(l);let c=new De(Oi,Bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},na=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Rs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=wu.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function wu(){this._document.hidden===!1&&this.reset()}var ol="\\[\\]\\.:\\/",Tu=new RegExp("["+ol+"]","g"),ll="[^"+ol+"]",Au="[^"+ol.replace("\\.","")+"]",Eu=/((?:WC+[\/:])*)/.source.replace("WC",ll),Cu=/(WCOD+)?/.source.replace("WCOD",Au),Ru=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ll),Pu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ll),Iu=new RegExp("^"+Eu+Cu+Ru+Pu+"$"),Lu=["material","materials","bones","map"],Vo=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tu,"")}static parseTrackName(t){let e=Iu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Rt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Vo;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kg=new Float32Array(1);var gc=new fe,Ps=class{constructor(t,e,n=0,s=1/0){this.ray=new ys(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Wi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Rt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gc),this}intersectObject(t,e=!0,n=[]){return ko(t,this,n,e),n.sort(_c),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ko(t[s],this,n,e);return n.sort(_c),n}};function _c(i,t){return i.distance-t.distance}function ko(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ko(r[a],t,e,!0)}}var pl=class pl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};pl.prototype.isMatrix2=!0;var Go=pl;function cl(i,t,e,n){let s=Du(n);switch(e){case tl:return i*t;case nl:return i*t/s.components*s.byteLength;case ha:return i*t/s.components*s.byteLength;case ti:return i*t*2/s.components*s.byteLength;case ua:return i*t*2/s.components*s.byteLength;case el:return i*t*3/s.components*s.byteLength;case We:return i*t*4/s.components*s.byteLength;case da:return i*t*4/s.components*s.byteLength;case Vs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(t,8)/4;case fa:case ma:return Math.max(i,8)*Math.max(t,8)/2;case _a:case xa:case ya:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case va:case Ws:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Oa:case Ba:case za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Va:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xs:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Du(i){switch(i){case Je:case $o:return{byteLength:1,components:1};case Qi:case Ko:case Ce:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case un:case oa:case $e:return{byteLength:4,components:1};case Qo:case jo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ah(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nu(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<d.length;m++){let _=d[h],y=d[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,d[h]=y)}d.length=h+1;for(let m=0,_=d.length;m<_;m++){let y=d[m];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Fu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ou=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ju=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$u=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,od=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Cd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ud=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,af=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Af=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,If=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,np=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Fu,alphahash_pars_fragment:Ou,alphamap_fragment:Bu,alphamap_pars_fragment:zu,alphatest_fragment:Vu,alphatest_pars_fragment:ku,aomap_fragment:Gu,aomap_pars_fragment:Hu,batching_pars_vertex:Wu,batching_vertex:Xu,begin_vertex:qu,beginnormal_vertex:Yu,bsdfs:Zu,iridescence_fragment:Ju,bumpmap_pars_fragment:$u,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:Qu,clipping_planes_pars_vertex:ju,clipping_planes_vertex:td,color_fragment:ed,color_pars_fragment:nd,color_pars_vertex:id,color_vertex:sd,common:rd,cube_uv_reflection_fragment:ad,defaultnormal_vertex:od,displacementmap_pars_vertex:ld,displacementmap_vertex:cd,emissivemap_fragment:hd,emissivemap_pars_fragment:ud,colorspace_fragment:dd,colorspace_pars_fragment:fd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:gd,envmap_pars_vertex:_d,envmap_physical_pars_fragment:Cd,envmap_vertex:xd,fog_vertex:vd,fog_pars_vertex:yd,fog_fragment:Md,fog_pars_fragment:Sd,gradientmap_pars_fragment:bd,lightmap_pars_fragment:wd,lights_lambert_fragment:Td,lights_lambert_pars_fragment:Ad,lights_pars_begin:Ed,lights_toon_fragment:Rd,lights_toon_pars_fragment:Pd,lights_phong_fragment:Id,lights_phong_pars_fragment:Ld,lights_physical_fragment:Dd,lights_physical_pars_fragment:Ud,lights_fragment_begin:Nd,lights_fragment_maps:Fd,lights_fragment_end:Od,lightprobes_pars_fragment:Bd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:kd,logdepthbuf_vertex:Gd,map_fragment:Hd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:qd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:Zd,morphinstance_vertex:Jd,morphcolor_vertex:$d,morphnormal_vertex:Kd,morphtarget_pars_vertex:Qd,morphtarget_vertex:jd,normal_fragment_begin:tf,normal_fragment_maps:ef,normal_pars_fragment:nf,normal_pars_vertex:sf,normal_vertex:rf,normalmap_pars_fragment:af,clearcoat_normal_fragment_begin:of,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:hf,opaque_fragment:uf,packing:df,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:vf,shadowmap_pars_vertex:yf,shadowmap_vertex:Mf,shadowmask_pars_fragment:Sf,skinbase_vertex:bf,skinning_pars_vertex:wf,skinning_vertex:Tf,skinnormal_vertex:Af,specularmap_fragment:Ef,specularmap_pars_fragment:Cf,tonemapping_fragment:Rf,tonemapping_pars_fragment:Pf,transmission_fragment:If,transmission_pars_fragment:Lf,uv_pars_fragment:Df,uv_pars_vertex:Uf,uv_vertex:Nf,worldpos_vertex:Ff,background_vert:Of,background_frag:Bf,backgroundCube_vert:zf,backgroundCube_frag:Vf,cube_vert:kf,cube_frag:Gf,depth_vert:Hf,depth_frag:Wf,distance_vert:Xf,distance_frag:qf,equirect_vert:Yf,equirect_frag:Zf,linedashed_vert:Jf,linedashed_frag:$f,meshbasic_vert:Kf,meshbasic_frag:Qf,meshlambert_vert:jf,meshlambert_frag:tp,meshmatcap_vert:ep,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:sp,meshphong_vert:rp,meshphong_frag:ap,meshphysical_vert:op,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:hp,points_vert:up,points_frag:dp,shadow_vert:fp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp},ht={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},wn={basic:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ue([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ue([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ue([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ue([ht.points,ht.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ue([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ue([ht.common,ht.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ue([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ue([ht.sprite,ht.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distance:{uniforms:Ue([ht.common,ht.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distance_vert,fragmentShader:Ft.distance_frag},shadow:{uniforms:Ue([ht.lights,ht.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};wn.physical={uniforms:Ue([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var Xa={r:0,b:0,g:0},_p=new fe,Eh=new Lt;Eh.set(-1,0,0,0,1,0,0,0,1);function xp(i,t,e,n,s,r){let a=new Ut(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function m(C){let D=C.isScene===!0?C.background:null;if(D&&D.isTexture){let S=C.backgroundBlurriness>0;D=t.get(D,S)}return D}function _(C){let D=!1,S=m(C);S===null?f(a,o):S&&S.isColor&&(f(S,1),D=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(C,D){let S=m(D);S&&(S.isCubeTexture||S.mapping===Bs)?(c===void 0&&(c=new Ae(new Yi(1,1,1),new ce({name:"BackgroundCubeMaterial",uniforms:yi(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_p.makeRotationFromEuler(D.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Eh),c.material.toneMapped=Bt.getTransfer(S.colorSpace)!==Yt,(u!==S||d!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ae(new pi(2,2),new ce({name:"BackgroundMaterial",uniforms:yi(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=Bt.getTransfer(S.colorSpace)!==Yt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function f(C,D){C.getRGB(Xa,al(i)),e.buffers.color.setClear(Xa.r,Xa.g,Xa.b,D,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,D=1){a.set(C),o=D,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(C){o=C,f(a,o)},render:_,addToRenderList:y,dispose:p}}function vp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(R,L,b,E,F){let B=!1,H=d(R,E,b,L);r!==H&&(r=H,c(r.object)),B=m(R,E,b,F),B&&_(R,E,b,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,S(R,L,b,E),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function d(R,L,b,E){let F=E.wireframe===!0,B=n[L.id];B===void 0&&(B={},n[L.id]=B);let H=R.isInstancedMesh===!0?R.id:0,J=B[H];J===void 0&&(J={},B[H]=J);let X=J[b.id];X===void 0&&(X={},J[b.id]=X);let $=X[F];return $===void 0&&($=h(l()),X[F]=$),$}function h(R){let L=[],b=[],E=[];for(let F=0;F<e;F++)L[F]=0,b[F]=0,E[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:b,attributeDivisors:E,object:R,attributes:{},index:null}}function m(R,L,b,E){let F=r.attributes,B=L.attributes,H=0,J=b.getAttributes();for(let X in J)if(J[X].location>=0){let et=F[X],mt=B[X];if(mt===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor)),et===void 0||et.attribute!==mt||mt&&et.data!==mt.data)return!0;H++}return r.attributesNum!==H||r.index!==E}function _(R,L,b,E){let F={},B=L.attributes,H=0,J=b.getAttributes();for(let X in J)if(J[X].location>=0){let et=B[X];et===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(et=R.instanceColor));let mt={};mt.attribute=et,et&&et.data&&(mt.data=et.data),F[X]=mt,H++}r.attributes=F,r.attributesNum=H,r.index=E}function y(){let R=r.newAttributes;for(let L=0,b=R.length;L<b;L++)R[L]=0}function f(R){p(R,0)}function p(R,L){let b=r.newAttributes,E=r.enabledAttributes,F=r.attributeDivisors;b[R]=1,E[R]===0&&(i.enableVertexAttribArray(R),E[R]=1),F[R]!==L&&(i.vertexAttribDivisor(R,L),F[R]=L)}function C(){let R=r.newAttributes,L=r.enabledAttributes;for(let b=0,E=L.length;b<E;b++)L[b]!==R[b]&&(i.disableVertexAttribArray(b),L[b]=0)}function D(R,L,b,E,F,B,H){H===!0?i.vertexAttribIPointer(R,L,b,F,B):i.vertexAttribPointer(R,L,b,E,F,B)}function S(R,L,b,E){y();let F=E.attributes,B=b.getAttributes(),H=L.defaultAttributeValues;for(let J in B){let X=B[J];if(X.location>=0){let $=F[J];if($===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),$!==void 0){let et=$.normalized,mt=$.itemSize,vt=t.get($);if(vt===void 0)continue;let Qt=vt.buffer,kt=vt.type,Wt=vt.bytesPerElement,Z=kt===i.INT||kt===i.UNSIGNED_INT||$.gpuType===oa;if($.isInterleavedBufferAttribute){let tt=$.data,_t=tt.stride,It=$.offset;if(tt.isInstancedInterleavedBuffer){for(let pt=0;pt<X.locationSize;pt++)p(X.location+pt,tt.meshPerAttribute);R.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let pt=0;pt<X.locationSize;pt++)f(X.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let pt=0;pt<X.locationSize;pt++)D(X.location+pt,mt/X.locationSize,kt,et,_t*Wt,(It+mt/X.locationSize*pt)*Wt,Z)}else{if($.isInstancedBufferAttribute){for(let tt=0;tt<X.locationSize;tt++)p(X.location+tt,$.meshPerAttribute);R.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let tt=0;tt<X.locationSize;tt++)f(X.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let tt=0;tt<X.locationSize;tt++)D(X.location+tt,mt/X.locationSize,kt,et,mt*Wt,mt/X.locationSize*tt*Wt,Z)}}else if(H!==void 0){let et=H[J];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(X.location,et);break;case 3:i.vertexAttrib3fv(X.location,et);break;case 4:i.vertexAttrib4fv(X.location,et);break;default:i.vertexAttrib1fv(X.location,et)}}}}C()}function w(){M();for(let R in n){let L=n[R];for(let b in L){let E=L[b];for(let F in E){let B=E[F];for(let H in B)u(B[H].object),delete B[H];delete E[F]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let L=n[R.id];for(let b in L){let E=L[b];for(let F in E){let B=E[F];for(let H in B)u(B[H].object),delete B[H];delete E[F]}}delete n[R.id]}function I(R){for(let L in n){let b=n[L];for(let E in b){let F=b[E];if(F[R.id]===void 0)continue;let B=F[R.id];for(let H in B)u(B[H].object),delete B[H];delete F[R.id]}}}function x(R){for(let L in n){let b=n[L],E=R.isInstancedMesh===!0?R.id:0,F=b[E];if(F!==void 0){for(let B in F){let H=F[B];for(let J in H)u(H[J].object),delete H[J];delete F[B]}delete b[E],Object.keys(b).length===0&&delete n[L]}}}function M(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:f,disableUnusedAttributes:C}}function yp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Mp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==We&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let x=I===Ce&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Je&&I!==$e&&!x&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Pt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:S,maxSamples:w,samples:T}}function Sp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ln,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||n!==0||s;return s=h,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,m){let _=d.clippingPlanes,y=d.clipIntersection,f=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!f)r?u(null):c();else{let C=r?0:n,D=C*4,S=p.clippingState||null;l.value=S,S=u(_,h,D,m);for(let w=0;w!==D;++w)S[w]=e[w];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,m,_){let y=d!==null?d.length:0,f=null;if(y!==0){if(f=l.value,_!==!0||f===null){let p=m+y*4,C=h.matrixWorldInverse;o.getNormalMatrix(C),(f===null||f.length<p)&&(f=new Float32Array(p));for(let D=0,S=m;D!==y;++D,S+=4)a.copy(d[D]).applyMatrix4(C,o),a.normal.toArray(f,S),f[S+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,f}}var es=4,bp=6,wp=20,Tp=256,Ys=new mi,rh=new Ut,ml=null,gl=0,_l=0,xl=!1,Ap=new V,Mi=new V,Ya=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ap}=r;ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ml,gl,_l),this._renderer.xr.enabled=xl,t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qn||t.mapping===vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:Ce,format:We,colorSpace:ps,depthBuffer:!1},s=ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ep(r)),this._blurMaterial=Rp(r,t,e),this._ggxMaterial=Cp(r,t,e)}return s}_compileMaterial(t){let e=new Ae(new Ye,t);this._renderer.compile(e,Ys)}_sceneToCubeUV(t,e,n,s,r){let l=new De(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(rh),d.toneMapping=hn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ae(new Yi,new fi({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,f=y.material,p=!1,C=t.background;C?C.isColor&&(f.color.copy(C),t.background=null,p=!0):(f.color.copy(rh),p=!0);for(let D=0;D<6;D++){let S=D%3;S===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[D],r.y,r.z)):S===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[D]));let w=this._cubeSize;ts(s,S*w,D>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=m,d.autoClear=h,t.background=C}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qn||t.mapping===vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ts(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ys)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,m=d*h,{_lodMax:_}=this,y=this._sizeLods[n],f=3*y*(n>_-es?n-_+es:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=_-e,ts(r,f,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Ys),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,ts(t,f,p,3*y,2*y),s.setRenderTarget(t),s.render(o,Ys)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-es?s-this._lodMax+es:0),h=4*(this._cubeSize-u);ts(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Ys)}};function Ep(i){let t=[],e=[],n=i,s=i-es+1+bp;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,m=3,_=new Float32Array(m*h*d),y=new Float32Array(m*h*d);for(let p=0;p<d;p++){let C=p%3*2/3-1,D=p>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];_.set(S,m*h*p);for(let w=0;w<h;w++){let T=u[w*2]*2-1,I=u[w*2+1]*2-1;p===0?Mi.set(1,I,T):p===1?Mi.set(-T,1,-I):p===2?Mi.set(-T,I,1):p===3?Mi.set(-1,I,-T):p===4?Mi.set(-T,-1,I):Mi.set(T,I,-1),Mi.toArray(y,(p*h+w)*m)}}let f=new Ye;f.setAttribute("position",new Be(_,m)),f.setAttribute("outputDirection",new Be(y,m)),e.push(new Ae(f,null)),n>es&&n--}return{lodMeshes:e,sizeLods:t}}function ah(i,t,e){let n=new ve(i,t,e);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Cp(i,t,e){return new ce({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Rp(i,t,e){return new ce({name:"SphericalGaussianBlur",defines:{SAMPLES:wp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function oh(){return new ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function lh(){return new ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Za=class extends ve{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yi(5,5,5),r=new ce({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:nn});r.uniforms.tEquirect.value=e;let a=new Ae(s,r),o=e.minFilter;return e.minFilter===Sn&&(e.minFilter=Ee),new ea(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Pp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===sa||m===ra)if(t.has(h)){let _=t.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let y=new Za(_.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let m=h.mapping,_=m===sa||m===ra,y=m===Qn||m===vi;if(_||y){let f=e.get(h),p=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Ya(i)),f=_?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),f.texture;if(f!==void 0)return f.texture;{let C=h.image;return _&&C&&C.height>0||y&&C&&l(C)?(n===null&&(n=new Ya(i)),f=_?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function o(h,m){return m===sa?h.mapping=Qn:m===ra&&(h.mapping=vi),h}function l(h){let m=0,_=6;for(let y=0;y<_;y++)h[y]!==void 0&&m++;return m===_}function c(h){let m=h.target;m.removeEventListener("dispose",c);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ip(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&hi("WebGLRenderer: "+n+" extension not supported."),s}}}function Lp(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)t.update(h[m],i.ARRAY_BUFFER)}function c(d){let h=[],m=d.index,_=d.attributes.position,y=0;if(_===void 0)return;if(m!==null){let C=m.array;y=m.version;for(let D=0,S=C.length;D<S;D+=3){let w=C[D+0],T=C[D+1],I=C[D+2];h.push(w,T,T,I,I,w)}}else{let C=_.array;y=_.version;for(let D=0,S=C.length/3-1;D<S;D+=3){let w=D+0,T=D+1,I=D+2;h.push(w,T,T,I,I,w)}}let f=new(_.count>=65535?vs:xs)(h,1);f.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,f)}function u(d){let h=r.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Dp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,d*a,m),e.update(h,n,m))}function u(d,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,m);let y=0;for(let f=0;f<m;f++)y+=h[f];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Up(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Np(i,t,e){let n=new WeakMap,s=new ae;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],D=0;m===!0&&(D=1),_===!0&&(D=2),y===!0&&(D=3);let S=o.attributes.position.count*D,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*w*4*d),I=new ui(T,S,w,d);I.type=$e,I.needsUpdate=!0;let x=D*4;for(let P=0;P<d;P++){let R=f[P],L=p[P],b=C[P],E=S*w*4*P;for(let F=0;F<R.count;F++){let B=F*x;m===!0&&(s.fromBufferAttribute(R,F),T[E+B+0]=s.x,T[E+B+1]=s.y,T[E+B+2]=s.z,T[E+B+3]=0),_===!0&&(s.fromBufferAttribute(L,F),T[E+B+4]=s.x,T[E+B+5]=s.y,T[E+B+6]=s.z,T[E+B+7]=0),y===!0&&(s.fromBufferAttribute(b,F),T[E+B+8]=s.x,T[E+B+9]=s.y,T[E+B+10]=s.z,T[E+B+11]=b.itemSize===4?s.w:1)}}h={count:d,texture:I,size:new Et(S,w)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Fp(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Op={[Ls]:"LINEAR_TONE_MAPPING",[Ds]:"REINHARD_TONE_MAPPING",[Us]:"CINEON_TONE_MAPPING",[Ns]:"ACES_FILMIC_TONE_MAPPING",[Os]:"AGX_TONE_MAPPING",[xi]:"NEUTRAL_TONE_MAPPING",[Fs]:"CUSTOM_TONE_MAPPING"};function Bp(i,t,e,n,s,r){let a=new ve(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ye;c.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ze([0,2,0,0,2,0],2));let u=new Zi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ae(c,u),h=new mi(-1,1,1,-1,0,1),m=null,_=null,y=!1,f,p=null,C=[],D=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),l!==null&&l.setSize(S,w);for(let T=0;T<C.length;T++){let I=C[T];I.setSize&&I.setSize(S,w)}},this.setEffects=function(S){C=S,D=C.length>0&&C[0].isRenderPass===!0;let w=a.width,T=a.height;C.length>0&&o===null&&(o=new ve(w,T,{type:Ce,depthBuffer:!1,stencilBuffer:!1}),l=new ve(w,T,{type:Ce,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<C.length;I++){let x=C[I];x.setSize&&x.setSize(w,T)}},this.begin=function(S,w){if(y||S.toneMapping===hn&&C.length===0)return!1;if(p=w,w!==null){let T=w.width,I=w.height;(a.width!==T||a.height!==I)&&this.setSize(T,I)}return D===!1&&S.setRenderTarget(a),f=S.toneMapping,S.toneMapping=hn,!0},this.hasRenderPass=function(){return D},this.end=function(S,w){S.toneMapping=f,y=!0;let T=a,I=o;for(let x=0;x<C.length;x++){let M=C[x];M.enabled!==!1&&(M.render(S,I,T,w),M.needsSwap!==!1&&(T=I,I=I===o?l:o))}if(m!==S.outputColorSpace||_!==S.toneMapping){m=S.outputColorSpace,_=S.toneMapping,u.defines={},Bt.getTransfer(m)===Yt&&(u.defines.SRGB_TRANSFER="");let x=Op[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(p),S.render(d,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Ch=new Ve,Ml=new Yn(1,1),Rh=new ui,Ph=new Vr,Ih=new bs,ch=[],hh=[],uh=new Float32Array(16),dh=new Float32Array(9),fh=new Float32Array(4);function is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ch[s];if(r===void 0&&(r=new Float32Array(s),ch[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ka(i,t){let e=hh[t];e===void 0&&(e=new Int32Array(t),hh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function Gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function Hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;fh.set(n),i.uniformMatrix2fv(this.addr,!1,fh),be(e,n)}}function Wp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;dh.set(n),i.uniformMatrix3fv(this.addr,!1,dh),be(e,n)}}function Xp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;uh.set(n),i.uniformMatrix4fv(this.addr,!1,uh),be(e,n)}}function qp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function $p(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ml.compareFunction=e.isReversedDepthBuffer()?Wa:Ha,r=Ml):r=Ch,e.setTexture2D(t||r,s)}function em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ph,s)}function nm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ih,s)}function im(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rh,s)}function sm(i){switch(i){case 5126:return zp;case 35664:return Vp;case 35665:return kp;case 35666:return Gp;case 35674:return Hp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return $p;case 36294:return Kp;case 36295:return Qp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}function rm(i,t){i.uniform1fv(this.addr,t)}function am(i,t){let e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function om(i,t){let e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function lm(i,t){let e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function cm(i,t){let e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hm(i,t){let e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function um(i,t){let e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dm(i,t){i.uniform1iv(this.addr,t)}function fm(i,t){i.uniform2iv(this.addr,t)}function pm(i,t){i.uniform3iv(this.addr,t)}function mm(i,t){i.uniform4iv(this.addr,t)}function gm(i,t){i.uniform1uiv(this.addr,t)}function _m(i,t){i.uniform2uiv(this.addr,t)}function xm(i,t){i.uniform3uiv(this.addr,t)}function vm(i,t){i.uniform4uiv(this.addr,t)}function ym(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ml:a=Ch;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Mm(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ph,r[a])}function Sm(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ih,r[a])}function bm(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Rh,r[a])}function wm(i){switch(i){case 5126:return rm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return dm;case 35667:case 35671:return fm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return xm;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return bm}}var Sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sm(e.type)}},bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wm(e.type)}},wl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},vl=/(\w+)(\])?(\[|\.)?/g;function ph(i,t){i.seq.push(t),i.map[t.id]=t}function Tm(i,t,e){let n=i.name,s=n.length;for(vl.lastIndex=0;;){let r=vl.exec(n),a=vl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ph(e,c===void 0?new Sl(o,i,t):new bl(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new wl(o),ph(e,d)),e=d}}}var ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Tm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function mh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Am=37297,Em=0;function Cm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var gh=new Lt;function Rm(i){Bt._getMatrix(gh,Bt.workingColorSpace,i);let t=`mat3( ${gh.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(i)){case ms:return[t,"LinearTransferOETF"];case Yt:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _h(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Cm(i.getShaderSource(t),o)}else return r}function Pm(i,t){let e=Rm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Im={[Ls]:"Linear",[Ds]:"Reinhard",[Us]:"Cineon",[Ns]:"ACESFilmic",[Os]:"AgX",[xi]:"Neutral",[Fs]:"Custom"};function Lm(i,t){let e=Im[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qa=new V;function Dm(){Bt.getLuminanceCoefficients(qa);let i=qa.x.toFixed(4),t=qa.y.toFixed(4),e=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function Nm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Js(i){return i!==""}function xh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(Om,zm)}var Bm=new Map;function zm(i,t){let e=Ft[t];if(e===void 0){let n=Bm.get(t);if(n!==void 0)e=Ft[n],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Tl(e)}var Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(i){return i.replace(Vm,km)}function km(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Gm={[Is]:"SHADOWMAP_TYPE_PCF",[$i]:"SHADOWMAP_TYPE_VSM"};function Hm(i){return Gm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wm={[Qn]:"ENVMAP_TYPE_CUBE",[vi]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE_UV"};function Xm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Wm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var qm={[vi]:"ENVMAP_MODE_REFRACTION"};function Ym(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zm={[Zo]:"ENVMAP_BLENDING_MULTIPLY",[zc]:"ENVMAP_BLENDING_MIX",[Vc]:"ENVMAP_BLENDING_ADD"};function Jm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zm[i.combine]||"ENVMAP_BLENDING_NONE"}function $m(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Km(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Hm(e),c=Xm(e),u=Ym(e),d=Jm(e),h=$m(e),m=Um(e),_=Nm(r),y=s.createProgram(),f,p,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Js).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Js).join(`
`),p.length>0&&(p+=`
`)):(f=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),p=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hn?"#define TONE_MAPPING":"",e.toneMapping!==hn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==hn?Lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Pm("linearToOutputTexel",e.outputColorSpace),Dm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),a=Tl(a),a=xh(a,e),a=vh(a,e),o=Tl(o),o=xh(o,e),o=vh(o,e),a=yh(a),o=yh(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let D=C+f+a,S=C+p+o,w=mh(s,s.VERTEX_SHADER,D),T=mh(s,s.FRAGMENT_SHADER,S);s.attachShader(y,w),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(R){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(y)||"",b=s.getShaderInfoLog(w)||"",E=s.getShaderInfoLog(T)||"",F=L.trim(),B=b.trim(),H=E.trim(),J=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,w,T);else{let $=_h(s,w,"vertex"),et=_h(s,T,"fragment");Rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+$+`
`+et)}else F!==""?Pt("WebGLProgram: Program Info Log:",F):(B===""||H==="")&&(X=!1);X&&(R.diagnostics={runnable:J,programLog:F,vertexShader:{log:B,prefix:f},fragmentShader:{log:H,prefix:p}})}s.deleteShader(w),s.deleteShader(T),x=new ns(s,y),M=Fm(s,y)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,Am)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Em++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=T,this}var Qm=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new El(t),e.set(t,n)),n}},El=class{constructor(t){this.id=Qm++,this.code=t,this.usedTimes=0}};function jm(i){return i===ti||i===Ws||i===Xs}function tg(i,t,e,n,s,r){let a=new Wi,o=new Al,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,M,P,R,L,b){let E=R.fog,F=L.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=t.get(x.envMap||B,H),X=J&&J.mapping===Bs?J.image.height:null,$=m[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Pt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,mt=et!==void 0?et.length:0,vt=0;F.morphAttributes.position!==void 0&&(vt=1),F.morphAttributes.normal!==void 0&&(vt=2),F.morphAttributes.color!==void 0&&(vt=3);let Qt,kt,Wt,Z;if($){let se=wn[$];Qt=se.vertexShader,kt=se.fragmentShader}else{Qt=x.vertexShader,kt=x.fragmentShader;let se=o.getVertexShaderStage(x),$t=o.getFragmentShaderStage(x);o.update(x,se,$t),Wt=se.id,Z=$t.id}let tt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),It=L.isInstancedMesh===!0,pt=L.isBatchedMesh===!0,Ot=!!x.map,Me=!!x.matcap,zt=!!J,qt=!!x.aoMap,ie=!!x.lightMap,Gt=!!x.bumpMap&&x.wireframe===!1,he=!!x.normalMap,we=!!x.displacementMap,Ge=!!x.emissiveMap,ue=!!x.metalnessMap,ge=!!x.roughnessMap,O=x.anisotropy>0,Re=x.clearcoat>0,jt=x.dispersion>0,A=x.retroreflectivity>0,g=x.iridescence>0,z=x.sheen>0,W=x.transmission>0,Y=O&&!!x.anisotropyMap,it=Re&&!!x.clearcoatMap,st=Re&&!!x.clearcoatNormalMap,K=Re&&!!x.clearcoatRoughnessMap,j=g&&!!x.iridescenceMap,rt=g&&!!x.iridescenceThicknessMap,wt=z&&!!x.sheenColorMap,ct=z&&!!x.sheenRoughnessMap,at=!!x.specularMap,Tt=!!x.specularColorMap,Ct=!!x.specularIntensityMap,Dt=W&&!!x.transmissionMap,N=W&&!!x.thicknessMap,ot=!!x.gradientMap,Q=!!x.alphaMap,lt=x.alphaTest>0,ft=!!x.alphaHash,nt=!!x.extensions,At=hn;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(At=i.toneMapping);let St={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Qt,fragmentShader:kt,defines:x.defines,customVertexShaderID:Wt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:pt,batchingColor:pt&&L._colorsTexture!==null,instancing:It,instancingColor:It&&L.instanceColor!==null,instancingMorph:It&&L.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:Me,envMap:zt,envMapMode:zt&&J.mapping,envMapCubeUVHeight:X,aoMap:qt,lightMap:ie,bumpMap:Gt,normalMap:he,displacementMap:we,emissiveMap:Ge,normalMapObjectSpace:he&&x.normalMapType===Hc,normalMapTangentSpace:he&&x.normalMapType===il,packedNormalMap:he&&x.normalMapType===il&&jm(x.normalMap.format),metalnessMap:ue,roughnessMap:ge,anisotropy:O,anisotropyMap:Y,clearcoat:Re,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:K,dispersion:jt,retroreflection:A,iridescence:g,iridescenceMap:j,iridescenceThicknessMap:rt,sheen:z,sheenColorMap:wt,sheenRoughnessMap:ct,specularMap:at,specularColorMap:Tt,specularIntensityMap:Ct,transmission:W,transmissionMap:Dt,thicknessMap:N,gradientMap:ot,opaque:x.transparent===!1&&x.blending===Ki&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:lt,alphaHash:ft,combine:x.combine,mapUv:Ot&&_(x.map.channel),aoMapUv:qt&&_(x.aoMap.channel),lightMapUv:ie&&_(x.lightMap.channel),bumpMapUv:Gt&&_(x.bumpMap.channel),normalMapUv:he&&_(x.normalMap.channel),displacementMapUv:we&&_(x.displacementMap.channel),emissiveMapUv:Ge&&_(x.emissiveMap.channel),metalnessMapUv:ue&&_(x.metalnessMap.channel),roughnessMapUv:ge&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:it&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ct&&_(x.sheenRoughnessMap.channel),specularMapUv:at&&_(x.specularMap.channel),specularColorMapUv:Tt&&_(x.specularColorMap.channel),specularIntensityMapUv:Ct&&_(x.specularIntensityMap.channel),transmissionMapUv:Dt&&_(x.transmissionMap.channel),thicknessMapUv:N&&_(x.thicknessMap.channel),alphaMapUv:Q&&_(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(he||O),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Ot||Q),fog:!!E,useFog:x.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&he===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:vt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:b.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&Bt.getTransfer(x.map.colorSpace)===Yt,decodeVideoTextureEmissive:Ge&&x.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(x.emissiveMap.colorSpace)===Yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function f(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(M,x),C(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function C(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function D(x){let M=m[x.type],P;if(M){let R=wn[M];P=Ln.clone(R.uniforms)}else P=x.uniforms;return P}function S(x,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new Km(i,M,x,s),c.push(P),u.set(M,P)),P}function w(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function I(){o.dispose()}return{getParameters:y,getProgramCacheKey:f,getUniforms:D,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:I}}function eg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ng(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,_,y,f,p){let C=i[t];return C===void 0?(C={id:h.id,object:h,geometry:m,material:_,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:f,group:p},i[t]=C):(C.id=h.id,C.object=h,C.geometry=m,C.material=_,C.materialVariant=a(h),C.groupOrder=y,C.renderOrder=h.renderOrder,C.z=f,C.group=p),t++,C}function l(h,m,_,y,f,p,C){C.reversedDepth===!0&&(f=-f);let D=o(h,m,_,y,f,p);_.transmission>0?n.push(D):_.transparent===!0?s.push(D):e.push(D)}function c(h,m,_,y,f,p){let C=o(h,m,_,y,f,p);_.transmission>0?n.unshift(C):_.transparent===!0?s.unshift(C):e.unshift(C)}function u(h,m){e.length>1&&e.sort(h||ng),n.length>1&&n.sort(m||Sh),s.length>1&&s.sort(m||Sh)}function d(){for(let h=t,m=i.length;h<m;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function ig(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new bh,i.set(n,[a])):s>=r.length?(a=new bh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function sg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Ut};break;case"SpotLight":e={position:new V,direction:new V,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function rg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ag=0;function og(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lg(i){let t=new sg,e=rg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new fe,a=new fe;function o(c){let u=0,d=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let m=0,_=0,y=0,f=0,p=0,C=0,D=0,S=0,w=0,T=0,I=0,x=0,M=0,P=0;c.sort(og);for(let L=0,b=c.length;L<b;L++){let E=c[L],F=E.color,B=E.intensity,H=E.distance,J=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===ti?J=E.shadow.map.texture:J=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=F.r*B,d+=F.g*B,h+=F.b*B;else if(E.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(E.sh.coefficients[X],B);P++}else if(E.isSunLight){let X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let $=E.shadow,et=e.get(E);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[_]=et,n.sunShadowMap[_]=J;let mt=$.getViewportCount();for(let vt=0;vt<mt;vt++)n.sunShadowMatrix[y+vt]=$.getMatrix(vt),n.sunShadowCascade[y+vt]=$._cascadeData[vt];y+=mt,_++}n.sun[m]=X,m++}else if(E.isDirectionalLight){let X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let $=E.shadow,et=e.get(E);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,n.directionalShadow[f]=et,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=E.shadow.matrix,w++}n.directional[f]=X,f++}else if(E.isSpotLight){let X=t.get(E);X.position.setFromMatrixPosition(E.matrixWorld),X.color.copy(F).multiplyScalar(B),X.distance=H,X.coneCos=Math.cos(E.angle),X.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),X.decay=E.decay,n.spot[C]=X;let $=E.shadow;if(E.map&&(n.spotLightMap[x]=E.map,x++,$.updateMatrices(E),E.castShadow&&M++),n.spotLightMatrix[C]=$.matrix,E.castShadow){let et=e.get(E);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,n.spotShadow[C]=et,n.spotShadowMap[C]=J,I++}C++}else if(E.isRectAreaLight){let X=t.get(E);X.color.copy(F).multiplyScalar(B),X.halfWidth.set(E.width*.5,0,0),X.halfHeight.set(0,E.height*.5,0),n.rectArea[D]=X,D++}else if(E.isPointLight){let X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),X.distance=E.distance,X.decay=E.decay,E.castShadow){let $=E.shadow,et=e.get(E);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=E.shadow.matrix,T++}n.point[p]=X,p++}else if(E.isHemisphereLight){let X=t.get(E);X.skyColor.copy(E.color).multiplyScalar(B),X.groundColor.copy(E.groundColor).multiplyScalar(B),n.hemi[S]=X,S++}}D>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let R=n.hash;(R.sunLength!==m||R.directionalLength!==f||R.pointLength!==p||R.spotLength!==C||R.rectAreaLength!==D||R.hemiLength!==S||R.numSunShadows!==_||R.numDirectionalShadows!==w||R.numPointShadows!==T||R.numSpotShadows!==I||R.numSpotMaps!==x||R.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=f,n.spot.length=C,n.rectArea.length=D,n.point.length=p,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=P,R.sunLength=m,R.directionalLength=f,R.pointLength=p,R.spotLength=C,R.rectAreaLength=D,R.hemiLength=S,R.numSunShadows=_,R.numDirectionalShadows=w,R.numPointShadows=T,R.numSpotShadows=I,R.numSpotMaps=x,R.numLightProbes=P,n.version=ag++)}function l(c,u){let d=0,h=0,m=0,_=0,y=0,f=0,p=u.matrixWorldInverse;for(let C=0,D=c.length;C<D;C++){let S=c[C];if(S.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),d++}else if(S.isDirectionalLight){let w=n.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(S.isSpotLight){let w=n.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),_++}else if(S.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let w=n.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),m++}else if(S.isHemisphereLight){let w=n.hemi[f];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),f++}}}return{setup:o,setupView:l,state:n}}function wh(i){let t=new lg(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function cg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new wh(i),t.set(s,[o])):r>=a.length?(o=new wh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ug=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dg=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],fg=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Th=new fe,Zs=new V,yl=new V;function pg(i,t,e){let n=new Ss,s=new Et,r=new Et,a=new ae,o=new Hr,l=new Wr,c={},u=e.maxTextureSize,d={[Kn]:ke,[ke]:Kn,[Mn]:Mn},h=new ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:hg,fragmentShader:ug}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let _=new Ye;_.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ae(_,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let p=this.type;this.render=function(T,I,x){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===yc&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);let M=i.getRenderTarget(),P=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(nn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let b=p!==this.type;b&&I.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(F=>F.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,F=T.length;E<F;E++){let B=T[E],H=B.shadow;if(H===void 0){Pt("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let J=H.getFrameExtents();s.multiply(J),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,H.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||b===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===$i){if(B.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ve(s.x,s.y,{format:ti,type:Ce,minFilter:Ee,magFilter:Ee,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Yn(s.x,s.y,$e),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=xn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=me,H.map.depthTexture.magFilter=me}else B.isPointLight?(H.map=new Za(s.x),H.map.depthTexture=new Gr(s.x,un)):(H.map=new ve(s.x,s.y),H.map.depthTexture=new Yn(s.x,s.y,un)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=xn,this.type===Is?(H.map.depthTexture.compareFunction=X?Wa:Ha,H.map.depthTexture.minFilter=Ee,H.map.depthTexture.magFilter=Ee):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=me,H.map.depthTexture.magFilter=me);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let $=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();B.isPointLight!==!0&&H.updateMatrices(B,x);for(let et=0;et<$;et++){let mt=H.getCamera(et);if(B.isPointLight){let vt=H.camera,Qt=H.matrix,kt=B.distance||vt.far;kt!==vt.far&&(vt.far=kt,vt.updateProjectionMatrix()),Zs.setFromMatrixPosition(B.matrixWorld),vt.position.copy(Zs),yl.copy(vt.position),yl.add(dg[et]),vt.up.copy(fg[et]),vt.lookAt(yl),vt.updateMatrixWorld(),Qt.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Th.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Th,vt.coordinateSystem,vt.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,et),i.clear();else{et===0&&(i.setRenderTarget(H.map),i.clear());let vt=H.getViewport(et);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),L.viewport(a)}n=H.getFrustum(et),S(I,x,mt,B,this.type)}H.isPointLightShadow!==!0&&this.type===$i&&C(H,x),H.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(M,P,R)};function C(T,I){let x=t.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new ve(s.x,s.y,{format:ti,type:Ce}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,x,h,y,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,x,m,y,null)}function D(T,I,x,M){let P=null,R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)P=R;else if(P=x.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let L=P.uuid,b=I.uuid,E=c[L];E===void 0&&(E={},c[L]=E);let F=E[b];F===void 0&&(F=P.clone(),E[b]=F,I.addEventListener("dispose",w)),P=F}if(P.visible=I.visible,P.wireframe=I.wireframe,M===$i?P.side=I.shadowSide!==null?I.shadowSide:I.side:P.side=I.shadowSide!==null?I.shadowSide:d[I.side],P.alphaMap=I.alphaMap,P.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,P.map=I.map,P.clipShadows=I.clipShadows,P.clippingPlanes=I.clippingPlanes,P.clipIntersection=I.clipIntersection,P.displacementMap=I.displacementMap,P.displacementScale=I.displacementScale,P.displacementBias=I.displacementBias,P.wireframeLinewidth=I.wireframeLinewidth,P.linewidth=I.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let L=i.properties.get(P);L.light=x}return P}function S(T,I,x,M,P){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===$i)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let b=t.update(T),E=T.material;if(Array.isArray(E)){let F=b.groups;for(let B=0,H=F.length;B<H;B++){let J=F[B],X=E[J.materialIndex];if(X&&X.visible){let $=D(T,X,M,P);T.onBeforeShadow(i,T,I,x,b,$,J),i.renderBufferDirect(x,null,b,$,T,J),T.onAfterShadow(i,T,I,x,b,$,J)}}}else if(E.visible){let F=D(T,E,M,P);T.onBeforeShadow(i,T,I,x,b,F,null),i.renderBufferDirect(x,null,b,F,T,null),T.onAfterShadow(i,T,I,x,b,F,null)}}let L=T.children;for(let b=0,E=L.length;b<E;b++)S(L[b],I,x,M,P)}function w(T){T.target.removeEventListener("dispose",w);for(let x in c){let M=c[x],P=T.target.uuid;P in M&&(M[P].dispose(),delete M[P])}}}function mg(i,t){function e(){let N=!1,ot=new ae,Q=null,lt=new ae(0,0,0,0);return{setMask:function(ft){Q!==ft&&!N&&(i.colorMask(ft,ft,ft,ft),Q=ft)},setLocked:function(ft){N=ft},setClear:function(ft,nt,At,St,se){se===!0&&(ft*=St,nt*=St,At*=St),ot.set(ft,nt,At,St),lt.equals(ot)===!1&&(i.clearColor(ft,nt,At,St),lt.copy(ot))},reset:function(){N=!1,Q=null,lt.set(-1,0,0,0)}}}function n(){let N=!1,ot=!1,Q=null,lt=null,ft=null;return{setReversed:function(nt){if(ot!==nt){let At=t.get("EXT_clip_control");nt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ot=nt;let St=ft;ft=null,this.setClear(St)}},getReversed:function(){return ot},setTest:function(nt){nt?tt(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(nt){Q!==nt&&!N&&(i.depthMask(nt),Q=nt)},setFunc:function(nt){if(ot&&(nt=eh[nt]),lt!==nt){switch(nt){case Er:i.depthFunc(i.NEVER);break;case Cr:i.depthFunc(i.ALWAYS);break;case Rr:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Pr:i.depthFunc(i.EQUAL);break;case Ir:i.depthFunc(i.GEQUAL);break;case Lr:i.depthFunc(i.GREATER);break;case Dr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=nt}},setLocked:function(nt){N=nt},setClear:function(nt){ft!==nt&&(ft=nt,ot&&(nt=1-nt),i.clearDepth(nt))},reset:function(){N=!1,Q=null,lt=null,ft=null,ot=!1}}}function s(){let N=!1,ot=null,Q=null,lt=null,ft=null,nt=null,At=null,St=null,se=null;return{setTest:function($t){N||($t?tt(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function($t){ot!==$t&&!N&&(i.stencilMask($t),ot=$t)},setFunc:function($t,sn,pn){(Q!==$t||lt!==sn||ft!==pn)&&(i.stencilFunc($t,sn,pn),Q=$t,lt=sn,ft=pn)},setOp:function($t,sn,pn){(nt!==$t||At!==sn||St!==pn)&&(i.stencilOp($t,sn,pn),nt=$t,At=sn,St=pn)},setLocked:function($t){N=$t},setClear:function($t){se!==$t&&(i.clearStencil($t),se=$t)},reset:function(){N=!1,ot=null,Q=null,lt=null,ft=null,nt=null,At=null,St=null,se=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},m=new WeakMap,_=[],y=null,f=!1,p=null,C=null,D=null,S=null,w=null,T=null,I=null,x=new Ut(0,0,0),M=0,P=!1,R=null,L=null,b=null,E=null,F=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=J>=2);let $=null,et={},mt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Qt=new ae().fromArray(mt),kt=new ae().fromArray(vt);function Wt(N,ot,Q,lt){let ft=new Uint8Array(4),nt=i.createTexture();i.bindTexture(N,nt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<Q;At++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ot+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return nt}let Z={};Z[i.TEXTURE_2D]=Wt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(Vi),Gt(!1),he(Ho),tt(i.CULL_FACE),qt(nn);function tt(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function _t(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function It(N,ot){return h[N]!==ot?(i.bindFramebuffer(N,ot),h[N]=ot,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function pt(N,ot){let Q=_,lt=!1;if(N){Q=m.get(ot),Q===void 0&&(Q=[],m.set(ot,Q));let ft=N.textures;if(Q.length!==ft.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,At=ft.length;nt<At;nt++)Q[nt]=i.COLOR_ATTACHMENT0+nt;Q.length=ft.length,lt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,lt=!0);lt&&i.drawBuffers(Q)}function Ot(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let Me={[_i]:i.FUNC_ADD,[Sc]:i.FUNC_SUBTRACT,[bc]:i.FUNC_REVERSE_SUBTRACT};Me[wc]=i.MIN,Me[Tc]=i.MAX;let zt={[Ac]:i.ZERO,[Ec]:i.ONE,[Cc]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[Uc]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Pc]:i.DST_ALPHA,[Rc]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[Dc]:i.ONE_MINUS_DST_COLOR,[Ic]:i.ONE_MINUS_DST_ALPHA,[Nc]:i.CONSTANT_COLOR,[Fc]:i.ONE_MINUS_CONSTANT_COLOR,[Oc]:i.CONSTANT_ALPHA,[Bc]:i.ONE_MINUS_CONSTANT_ALPHA};function qt(N,ot,Q,lt,ft,nt,At,St,se,$t){if(N===nn){f===!0&&(_t(i.BLEND),f=!1);return}if(f===!1&&(tt(i.BLEND),f=!0),N!==Mc){if(N!==p||$t!==P){if((C!==_i||w!==_i)&&(i.blendEquation(i.FUNC_ADD),C=_i,w=_i),$t)switch(N){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFunc(i.ONE,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Rt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wo:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xo:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",N);break}D=null,S=null,T=null,I=null,x.set(0,0,0),M=0,p=N,P=$t}return}ft=ft||ot,nt=nt||Q,At=At||lt,(ot!==C||ft!==w)&&(i.blendEquationSeparate(Me[ot],Me[ft]),C=ot,w=ft),(Q!==D||lt!==S||nt!==T||At!==I)&&(i.blendFuncSeparate(zt[Q],zt[lt],zt[nt],zt[At]),D=Q,S=lt,T=nt,I=At),(St.equals(x)===!1||se!==M)&&(i.blendColor(St.r,St.g,St.b,se),x.copy(St),M=se),p=N,P=!1}function ie(N,ot){N.side===Mn?_t(i.CULL_FACE):tt(i.CULL_FACE);let Q=N.side===ke;ot&&(Q=!Q),Gt(Q),N.blending===Ki&&N.transparent===!1?qt(nn):qt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let lt=N.stencilWrite;o.setTest(lt),lt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ge(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(N){R!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),R=N)}function he(N){N!==xc?(tt(i.CULL_FACE),N!==L&&(N===Ho?i.cullFace(i.BACK):N===vc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),L=N}function we(N){N!==b&&(H&&i.lineWidth(N),b=N)}function Ge(N,ot,Q){N?(tt(i.POLYGON_OFFSET_FILL),(E!==ot||F!==Q)&&(E=ot,F=Q,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,Q))):_t(i.POLYGON_OFFSET_FILL)}function ue(N){N?tt(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function ge(N){N===void 0&&(N=i.TEXTURE0+B-1),$!==N&&(i.activeTexture(N),$=N)}function O(N,ot,Q){Q===void 0&&($===null?Q=i.TEXTURE0+B-1:Q=$);let lt=et[Q];lt===void 0&&(lt={type:void 0,texture:void 0},et[Q]=lt),(lt.type!==N||lt.texture!==ot)&&($!==Q&&(i.activeTexture(Q),$=Q),i.bindTexture(N,ot||Z[N]),lt.type=N,lt.texture=ot)}function Re(){let N=et[$];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(N){Rt("WebGLState:",N)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(N){Rt("WebGLState:",N)}}function g(){try{i.texSubImage2D(...arguments)}catch(N){Rt("WebGLState:",N)}}function z(){try{i.texSubImage3D(...arguments)}catch(N){Rt("WebGLState:",N)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Rt("WebGLState:",N)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Rt("WebGLState:",N)}}function it(){try{i.texStorage2D(...arguments)}catch(N){Rt("WebGLState:",N)}}function st(){try{i.texStorage3D(...arguments)}catch(N){Rt("WebGLState:",N)}}function K(){try{i.texImage2D(...arguments)}catch(N){Rt("WebGLState:",N)}}function j(){try{i.texImage3D(...arguments)}catch(N){Rt("WebGLState:",N)}}function rt(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function wt(N,ot){d[N]!==ot&&(i.pixelStorei(N,ot),d[N]=ot)}function ct(N){Qt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Qt.copy(N))}function at(N){kt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),kt.copy(N))}function Tt(N,ot){let Q=c.get(ot);Q===void 0&&(Q=new WeakMap,c.set(ot,Q));let lt=Q.get(N);lt===void 0&&(lt=i.getUniformBlockIndex(ot,N.name),Q.set(N,lt))}function Ct(N,ot){let lt=c.get(ot).get(N);l.get(ot)!==lt&&(i.uniformBlockBinding(ot,lt,N.__bindingPointIndex),l.set(ot,lt))}function Dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},$=null,et={},h={},m=new WeakMap,_=[],y=null,f=!1,p=null,C=null,D=null,S=null,w=null,T=null,I=null,x=new Ut(0,0,0),M=0,P=!1,R=null,L=null,b=null,E=null,F=null,Qt.set(0,0,i.canvas.width,i.canvas.height),kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:_t,bindFramebuffer:It,drawBuffers:pt,useProgram:Ot,setBlending:qt,setMaterial:ie,setFlipSided:Gt,setCullFace:he,setLineWidth:we,setPolygonOffset:Ge,setScissorTest:ue,activeTexture:ge,bindTexture:O,unbindTexture:Re,compressedTexImage2D:jt,compressedTexImage3D:A,texImage2D:K,texImage3D:j,pixelStorei:wt,getParameter:rt,updateUBOMapping:Tt,uniformBlockBinding:Ct,texStorage2D:it,texStorage3D:st,texSubImage2D:g,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:ct,viewport:at,reset:Dt}}function gg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,u=new WeakMap,d=new Set,h,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,g){return _?new OffscreenCanvas(A,g):ki("canvas")}function f(A,g,z){let W=1,Y=jt(A);if((Y.width>z||Y.height>z)&&(W=z/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let it=Math.floor(W*Y.width),st=Math.floor(W*Y.height);h===void 0&&(h=y(it,st));let K=g?y(it,st):h;return K.width=it,K.height=st,K.getContext("2d").drawImage(A,0,0,it,st),Pt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+it+"x"+st+")."),K}else return"data"in A&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function p(A){return A.generateMipmaps}function C(A){i.generateMipmap(A)}function D(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,g,z,W,Y,it=!1){if(A!==null){if(i[A]!==void 0)return i[A];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st;W&&(st=t.get("EXT_texture_norm16"),st||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8),z===i.UNSIGNED_SHORT&&st&&(K=st.R16_EXT),z===i.SHORT&&st&&(K=st.R16_SNORM_EXT)),g===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),g===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8),z===i.UNSIGNED_SHORT&&st&&(K=st.RG16_EXT),z===i.SHORT&&st&&(K=st.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),g===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),g===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),g===i.RGB&&(z===i.UNSIGNED_SHORT&&st&&(K=st.RGB16_EXT),z===i.SHORT&&st&&(K=st.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),g===i.RGBA){let j=it?ms:Bt.getTransfer(Y);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=j===Yt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&st&&(K=st.RGBA16_EXT),z===i.SHORT&&st&&(K=st.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function w(A,g){let z;return A?g===null||g===un||g===ji?z=i.DEPTH24_STENCIL8:g===$e?z=i.DEPTH32F_STENCIL8:g===Qi&&(z=i.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===un||g===ji?z=i.DEPTH_COMPONENT24:g===$e?z=i.DEPTH_COMPONENT32F:g===Qi&&(z=i.DEPTH_COMPONENT16),z}function T(A,g){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==me&&A.minFilter!==Ee?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function I(A){let g=A.target;g.removeEventListener("dispose",I),M(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function x(A){let g=A.target;g.removeEventListener("dispose",x),R(g)}function M(A){let g=n.get(A);if(g.__webglInit===void 0)return;let z=A.source,W=m.get(z);if(W){let Y=W[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(A),Object.keys(W).length===0&&m.delete(z)}n.remove(A)}function P(A){let g=n.get(A);i.deleteTexture(g.__webglTexture);let z=A.source,W=m.get(z);delete W[g.__cacheKey],a.memory.textures--}function R(A){let g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Y=0;Y<g.__webglFramebuffer[W].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[W][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let z=A.textures;for(let W=0,Y=z.length;W<Y;W++){let it=n.get(z[W]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(z[W])}n.remove(A)}let L=0;function b(){L=0}function E(){return L}function F(A){L=A}function B(){let A=L;return A>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function H(A){let g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function J(A,g){let z=n.get(A);if(A.isVideoTexture&&O(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let W=A.image;if(W===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(z,A,g);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+g)}function X(A,g){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){_t(z,A,g);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+g)}function $(A,g){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){_t(z,A,g);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+g)}function et(A,g){let z=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){It(z,A,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+g)}let mt={[Ur]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Nr]:i.MIRRORED_REPEAT},vt={[me]:i.NEAREST,[kc]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[Ee]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},Qt={[Xc]:i.NEVER,[$c]:i.ALWAYS,[qc]:i.LESS,[Ha]:i.LEQUAL,[Yc]:i.EQUAL,[Wa]:i.GEQUAL,[Zc]:i.GREATER,[Jc]:i.NOTEQUAL};function kt(A,g){if(g.type===$e&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ee||g.magFilter===aa||g.magFilter===zs||g.magFilter===Sn||g.minFilter===Ee||g.minFilter===aa||g.minFilter===zs||g.minFilter===Sn)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,mt[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,mt[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,mt[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,vt[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,vt[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Qt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===me||g.minFilter!==zs&&g.minFilter!==Sn||g.type===$e&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Wt(A,g){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",I));let W=g.source,Y=m.get(W);Y===void 0&&(Y={},m.set(W,Y));let it=H(g);if(it!==A.__cacheKey){Y[it]===void 0&&(Y[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Y[it].usedTimes++;let st=Y[A.__cacheKey];st!==void 0&&(Y[A.__cacheKey].usedTimes--,st.usedTimes===0&&P(g)),A.__cacheKey=it,A.__webglTexture=Y[it].texture}return z}function Z(A,g,z){return Math.floor(Math.floor(A/z)/g)}function tt(A,g,z,W){let it=A.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,z,W,g.data);else{it.sort((wt,ct)=>wt.start-ct.start);let st=0;for(let wt=1;wt<it.length;wt++){let ct=it[st],at=it[wt],Tt=ct.start+ct.count,Ct=Z(at.start,g.width,4),Dt=Z(ct.start,g.width,4);at.start<=Tt+1&&Ct===Dt&&Z(at.start+at.count-1,g.width,4)===Ct?ct.count=Math.max(ct.count,at.start+at.count-ct.start):(++st,it[st]=at)}it.length=st+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let wt=0,ct=it.length;wt<ct;wt++){let at=it[wt],Tt=Math.floor(at.start/4),Ct=Math.ceil(at.count/4),Dt=Tt%g.width,N=Math.floor(Tt/g.width),ot=Ct,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Dt,N,ot,Q,z,W,g.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function _t(A,g,z){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);let Y=Wt(A,g),it=g.source;e.bindTexture(W,A.__webglTexture,i.TEXTURE0+z);let st=n.get(it);if(it.version!==st.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Q=Bt.getPrimaries(Bt.workingColorSpace),lt=g.colorSpace===In?null:Bt.getPrimaries(g.colorSpace),ft=g.colorSpace===In||Q===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let j=f(g.image,!1,s.maxTextureSize);j=Re(g,j);let rt=r.convert(g.format,g.colorSpace),wt=r.convert(g.type),ct=S(g.internalFormat,rt,wt,g.normalized,g.colorSpace,g.isVideoTexture);kt(W,g);let at,Tt=g.mipmaps,Ct=g.isVideoTexture!==!0,Dt=st.__version===void 0||Y===!0,N=it.dataReady,ot=T(g,j);if(g.isDepthTexture)ct=w(g.format===jn,g.type),Dt&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,ct,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,ct,j.width,j.height,0,rt,wt,null));else if(g.isDataTexture)if(Tt.length>0){Ct&&Dt&&e.texStorage2D(i.TEXTURE_2D,ot,ct,Tt[0].width,Tt[0].height);for(let Q=0,lt=Tt.length;Q<lt;Q++)at=Tt[Q],Ct?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,at.width,at.height,rt,wt,at.data):e.texImage2D(i.TEXTURE_2D,Q,ct,at.width,at.height,0,rt,wt,at.data);g.generateMipmaps=!1}else Ct?(Dt&&e.texStorage2D(i.TEXTURE_2D,ot,ct,j.width,j.height),N&&tt(g,j,rt,wt)):e.texImage2D(i.TEXTURE_2D,0,ct,j.width,j.height,0,rt,wt,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ct&&Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,Tt[0].width,Tt[0].height,j.depth);for(let Q=0,lt=Tt.length;Q<lt;Q++)if(at=Tt[Q],g.format!==We)if(rt!==null)if(Ct){if(N)if(g.layerUpdates.size>0){let ft=cl(at.width,at.height,g.format,g.type);for(let nt of g.layerUpdates){let At=at.data.subarray(nt*ft/at.data.BYTES_PER_ELEMENT,(nt+1)*ft/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,nt,at.width,at.height,1,rt,At)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,j.depth,rt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ct,at.width,at.height,j.depth,0,at.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,j.depth,rt,wt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,ct,at.width,at.height,j.depth,0,rt,wt,at.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ct&&Dt&&e.texStorage2D(i.TEXTURE_2D,ot,ct,Tt[0].width,Tt[0].height);for(let Q=0,lt=Tt.length;Q<lt;Q++)at=Tt[Q],g.format!==We?rt!==null?Ct?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,ct,at.width,at.height,0,at.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,at.width,at.height,rt,wt,at.data):e.texImage2D(i.TEXTURE_2D,Q,ct,at.width,at.height,0,rt,wt,at.data)}else if(g.isDataArrayTexture)if(Ct){if(Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,j.width,j.height,j.depth),N)if(g.layerUpdates.size>0){let Q=cl(j.width,j.height,g.format,g.type);for(let lt of g.layerUpdates){let ft=j.data.subarray(lt*Q/j.data.BYTES_PER_ELEMENT,(lt+1)*Q/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,j.width,j.height,1,rt,wt,ft)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,rt,wt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,j.width,j.height,j.depth,0,rt,wt,j.data);else if(g.isData3DTexture)Ct?(Dt&&e.texStorage3D(i.TEXTURE_3D,ot,ct,j.width,j.height,j.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,rt,wt,j.data)):e.texImage3D(i.TEXTURE_3D,0,ct,j.width,j.height,j.depth,0,rt,wt,j.data);else if(g.isFramebufferTexture){if(Dt)if(Ct)e.texStorage2D(i.TEXTURE_2D,ot,ct,j.width,j.height);else{let Q=j.width,lt=j.height;for(let ft=0;ft<ot;ft++)e.texImage2D(i.TEXTURE_2D,ft,ct,Q,lt,0,rt,wt,null),Q>>=1,lt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),d.add(g),Q.onpaint=lt=>{let ft=lt.changedElements;for(let nt of d)ft.includes(nt.image)&&(nt.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let ft=i.RGBA,nt=i.RGBA,At=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,nt,At,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Ct&&Dt){let Q=jt(Tt[0]);e.texStorage2D(i.TEXTURE_2D,ot,ct,Q.width,Q.height)}for(let Q=0,lt=Tt.length;Q<lt;Q++)at=Tt[Q],Ct?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,rt,wt,at):e.texImage2D(i.TEXTURE_2D,Q,ct,rt,wt,at);g.generateMipmaps=!1}else if(Ct){if(Dt){let Q=jt(j);e.texStorage2D(i.TEXTURE_2D,ot,ct,Q.width,Q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,wt,j)}else e.texImage2D(i.TEXTURE_2D,0,ct,rt,wt,j);p(g)&&C(W),st.__version=it.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function It(A,g,z){if(g.image.length!==6)return;let W=Wt(A,g),Y=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let it=n.get(Y);if(Y.version!==it.__version||W===!0){e.activeTexture(i.TEXTURE0+z);let st=Bt.getPrimaries(Bt.workingColorSpace),K=g.colorSpace===In?null:Bt.getPrimaries(g.colorSpace),j=g.colorSpace===In||st===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let rt=g.isCompressedTexture||g.image[0].isCompressedTexture,wt=g.image[0]&&g.image[0].isDataTexture,ct=[];for(let nt=0;nt<6;nt++)!rt&&!wt?ct[nt]=f(g.image[nt],!0,s.maxCubemapSize):ct[nt]=wt?g.image[nt].image:g.image[nt],ct[nt]=Re(g,ct[nt]);let at=ct[0],Tt=r.convert(g.format,g.colorSpace),Ct=r.convert(g.type),Dt=S(g.internalFormat,Tt,Ct,g.normalized,g.colorSpace),N=g.isVideoTexture!==!0,ot=it.__version===void 0||W===!0,Q=Y.dataReady,lt=T(g,at);kt(i.TEXTURE_CUBE_MAP,g);let ft;if(rt){N&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Dt,at.width,at.height);for(let nt=0;nt<6;nt++){ft=ct[nt].mipmaps;for(let At=0;At<ft.length;At++){let St=ft[At];g.format!==We?Tt!==null?N?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,Dt,St.width,St.height,0,St.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,St.width,St.height,Tt,Ct,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,Dt,St.width,St.height,0,Tt,Ct,St.data)}}}else{if(ft=g.mipmaps,N&&ot){ft.length>0&&lt++;let nt=jt(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Dt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(wt){N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ct[nt].width,ct[nt].height,Tt,Ct,ct[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Dt,ct[nt].width,ct[nt].height,0,Tt,Ct,ct[nt].data);for(let At=0;At<ft.length;At++){let se=ft[At].image[nt].image;N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,se.width,se.height,Tt,Ct,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,Dt,se.width,se.height,0,Tt,Ct,se.data)}}else{N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Tt,Ct,ct[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Dt,Tt,Ct,ct[nt]);for(let At=0;At<ft.length;At++){let St=ft[At];N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,Tt,Ct,St.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,Dt,Tt,Ct,St.image[nt])}}}p(g)&&C(i.TEXTURE_CUBE_MAP),it.__version=Y.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function pt(A,g,z,W,Y,it){let st=r.convert(z.format,z.colorSpace),K=r.convert(z.type),j=S(z.internalFormat,st,K,z.normalized,z.colorSpace),rt=n.get(g),wt=n.get(z);if(wt.__renderTarget=g,!rt.__hasExternalTextures){let ct=Math.max(1,g.width>>it),at=Math.max(1,g.height>>it);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,it,j,ct,at,g.depth,0,st,K,null):e.texImage2D(Y,it,j,ct,at,0,st,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,wt.__webglTexture,0,ue(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,wt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,g,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){let W=g.depthTexture,Y=W&&W.isDepthTexture?W.type:null,it=w(g.stencilBuffer,Y),st=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(g),it,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(g),it,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,it,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,A)}else{let W=g.textures;for(let Y=0;Y<W.length;Y++){let it=W[Y],st=r.convert(it.format,it.colorSpace),K=r.convert(it.type),j=S(it.internalFormat,st,K,it.normalized,it.colorSpace);ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(g),j,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(g),j,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,j,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(A,g,z){let W=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",I)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),kt(i.TEXTURE_CUBE_MAP,g.depthTexture);let rt=r.convert(g.depthTexture.format),wt=r.convert(g.depthTexture.type),ct;g.depthTexture.format===xn?ct=i.DEPTH_COMPONENT24:g.depthTexture.format===jn&&(ct=i.DEPTH24_STENCIL8);for(let at=0;at<6;at++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ct,g.width,g.height,0,rt,wt,null)}}else J(g.depthTexture,0);let it=Y.__webglTexture,st=ue(g),K=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,j=g.depthTexture.format===jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===xn)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,it,0);else if(g.depthTexture.format===jn)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function zt(A){let g=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){let W=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=W}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)Me(g.__webglFramebuffer[W],A,W);else{let W=A.texture.mipmaps;W&&W.length>0?Me(g.__webglFramebuffer[0],A,0):Me(g.__webglFramebuffer,A,0)}else if(z){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),Ot(g.__webglDepthbuffer[W],A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,it)}}else{let W=A.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ot(g.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(A,g,z){let W=n.get(A);g!==void 0&&pt(W.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&zt(A)}function ie(A){let g=A.texture,z=n.get(A),W=n.get(g);A.addEventListener("dispose",x);let Y=A.textures,it=A.isWebGLCubeRenderTarget===!0,st=Y.length>1;if(st||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),it){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let j=0;j<g.mipmaps.length;j++)z.__webglFramebuffer[K][j]=i.createFramebuffer()}else z.__webglFramebuffer[K]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)z.__webglFramebuffer[K]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(st)for(let K=0,j=Y.length;K<j;K++){let rt=n.get(Y[K]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ge(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){let j=Y[K];z.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let rt=r.convert(j.format,j.colorSpace),wt=r.convert(j.type),ct=S(j.internalFormat,rt,wt,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),at=ue(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,z.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),kt(i.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)pt(z.__webglFramebuffer[K][j],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else pt(z.__webglFramebuffer[K],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(g)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let K=0,j=Y.length;K<j;K++){let rt=Y[K],wt=n.get(rt),ct=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,wt.__webglTexture),kt(ct,rt),pt(z.__webglFramebuffer,A,rt,i.COLOR_ATTACHMENT0+K,ct,0),p(rt)&&C(ct)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,W.__webglTexture),kt(K,g),g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)pt(z.__webglFramebuffer[j],A,g,i.COLOR_ATTACHMENT0,K,j);else pt(z.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,K,0);p(g)&&C(K),e.unbindTexture()}A.depthBuffer&&zt(A)}function Gt(A){let g=A.textures;for(let z=0,W=g.length;z<W;z++){let Y=g[z];if(p(Y)){let it=D(A),st=n.get(Y).__webglTexture;e.bindTexture(it,st),C(it),e.unbindTexture()}}}let he=[],we=[];function Ge(A){if(A.samples>0){if(ge(A)===!1){let g=A.textures,z=A.width,W=A.height,Y=i.COLOR_BUFFER_BIT,it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(A),K=g.length>1;if(K)for(let rt=0;rt<g.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let j=A.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<g.length;rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let wt=n.get(g[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,z,W,0,0,z,W,Y,i.NEAREST),l===!0&&(he.length=0,we.length=0,he.push(i.COLOR_ATTACHMENT0+rt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(he.push(it),we.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,we)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let rt=0;rt<g.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let wt=n.get(g[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ue(A){return Math.min(s.maxSamples,A.samples)}function ge(A){let g=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function O(A){let g=a.render.frame;u.get(A)!==g&&(u.set(A,g),A.update())}function Re(A,g){let z=A.colorSpace,W=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ps&&z!==In&&(Bt.getTransfer(z)===Yt?(W!==We||Y!==Je)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",z)),g}function jt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=b,this.getTextureUnits=E,this.setTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=et,this.rebindTextures=qt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _g(i,t){function e(n,s=In){let r,a=Bt.getTransfer(s);if(n===Je)return i.UNSIGNED_BYTE;if(n===la)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$o)return i.BYTE;if(n===Ko)return i.SHORT;if(n===Qi)return i.UNSIGNED_SHORT;if(n===oa)return i.INT;if(n===un)return i.UNSIGNED_INT;if(n===$e)return i.FLOAT;if(n===Ce)return i.HALF_FLOAT;if(n===tl)return i.ALPHA;if(n===el)return i.RGB;if(n===We)return i.RGBA;if(n===xn)return i.DEPTH_COMPONENT;if(n===jn)return i.DEPTH_STENCIL;if(n===nl)return i.RED;if(n===ha)return i.RED_INTEGER;if(n===ti)return i.RG;if(n===ua)return i.RG_INTEGER;if(n===da)return i.RGBA_INTEGER;if(n===Vs||n===ks||n===Gs||n===Hs)if(a===Yt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===xa||n===va||n===ya||n===Ma||n===Ws||n===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_a||n===xa)return a===Yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===va)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ya)return r.COMPRESSED_R11_EAC;if(n===Ma)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ws)return r.COMPRESSED_RG11_EAC;if(n===Sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ba||n===wa||n===Ta||n===Aa||n===Ea||n===Ca||n===Ra||n===Pa||n===Ia||n===La||n===Da||n===Ua||n===Na||n===Fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wa)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pa)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Da)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ua)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Ba||n===za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oa)return a===Yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Va||n===ka||n===Xs||n===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ws(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ce({vertexShader:xg,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rl=class extends vn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,_=null,y=typeof XRWebGLBinding<"u",f=new Cl,p={},C=e.getContextAttributes(),D=null,S=null,w=[],T=[],I=new Et,x=null,M=null,P=new De;P.viewport=new ae;let R=new De;R.viewport=new ae;let L=[P,R],b=new na,E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let tt=w[Z];return tt===void 0&&(tt=new Xi,w[Z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Z){let tt=w[Z];return tt===void 0&&(tt=new Xi,w[Z]=tt),tt.getGripSpace()},this.getHand=function(Z){let tt=w[Z];return tt===void 0&&(tt=new Xi,w[Z]=tt),tt.getHandSpace()};function B(Z){let tt=T.indexOf(Z.inputSource);if(tt===-1)return;let _t=w[tt];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,c||a),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<w.length;Z++){let tt=T[Z];tt!==null&&(T[Z]=null,w[Z].disconnect(tt))}E=null,F=null,f.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(D),m=null,h=null,d=null,s=null,S=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(I.width,I.height,!1),M!==null){let Z=M.camera;Z.fov=M.fov,Z.zoom=M.zoom,Z.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),C.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,It=null,pt=null;C.depth&&(pt=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=C.stencil?jn:xn,It=C.stencil?ji:un);let Ot={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ot),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new ve(h.textureWidth,h.textureHeight,{format:We,type:Je,depthTexture:new Yn(h.textureWidth,h.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _t={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ve(m.framebufferWidth,m.framebufferHeight,{format:We,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function J(Z){for(let tt=0;tt<Z.removed.length;tt++){let _t=Z.removed[tt],It=T.indexOf(_t);It>=0&&(T[It]=null,w[It].disconnect(_t))}for(let tt=0;tt<Z.added.length;tt++){let _t=Z.added[tt],It=T.indexOf(_t);if(It===-1){for(let Ot=0;Ot<w.length;Ot++)if(Ot>=T.length){T.push(_t),It=Ot;break}else if(T[Ot]===null){T[Ot]=_t,It=Ot;break}if(It===-1)break}let pt=w[It];pt&&pt.connect(_t)}}let X=new V,$=new V;function et(Z,tt,_t){X.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(_t.matrixWorld);let It=X.distanceTo($),pt=tt.projectionMatrix.elements,Ot=_t.projectionMatrix.elements,Me=pt[14]/(pt[10]-1),zt=pt[14]/(pt[10]+1),qt=(pt[9]+1)/pt[5],ie=(pt[9]-1)/pt[5],Gt=(pt[8]-1)/pt[0],he=(Ot[8]+1)/Ot[0],we=Me*Gt,Ge=Me*he,ue=It/(-Gt+he),ge=ue*-Gt;if(tt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ge),Z.translateZ(ue),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),pt[10]===-1)Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let O=Me+ue,Re=zt+ue,jt=we-ge,A=Ge+(It-ge),g=qt*zt/Re*O,z=ie*zt/Re*O;Z.projectionMatrix.makePerspective(jt,A,g,z,O,Re),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function mt(Z,tt){tt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(tt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let tt=Z.near,_t=Z.far;f.texture!==null&&(f.depthNear>0&&(tt=f.depthNear),f.depthFar>0&&(_t=f.depthFar)),b.near=R.near=P.near=tt,b.far=R.far=P.far=_t,(E!==b.near||F!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,F=b.far),b.layers.mask=Z.layers.mask|6,P.layers.mask=b.layers.mask&-5,R.layers.mask=b.layers.mask&-3;let It=Z.parent,pt=b.cameras;mt(b,It);for(let Ot=0;Ot<pt.length;Ot++)mt(pt[Ot],It);pt.length===2?et(b,P,R):b.projectionMatrix.copy(P.projectionMatrix),M===null&&Z.isPerspectiveCamera&&(M={camera:Z,fov:Z.fov,zoom:Z.zoom}),vt(Z,b,It)};function vt(Z,tt,_t){_t===null?Z.matrix.copy(tt.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(tt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Or*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(b)},this.getCameraTexture=function(Z){return p[Z]};let Qt=null;function kt(Z,tt){if(u=tt.getViewerPose(c||a),_=tt,u!==null){let _t=u.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let It=!1;_t.length!==b.cameras.length&&(b.cameras.length=0,It=!0);for(let zt=0;zt<_t.length;zt++){let qt=_t[zt],ie=null;if(m!==null)ie=m.getViewport(qt);else{let he=d.getViewSubImage(h,qt);ie=he.viewport,zt===0&&(t.setRenderTargetTextures(S,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(S))}let Gt=L[zt];Gt===void 0&&(Gt=new De,Gt.layers.enable(zt),Gt.viewport=new ae,L[zt]=Gt),Gt.matrix.fromArray(qt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(qt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ie.x,ie.y,ie.width,ie.height),zt===0&&(b.matrix.copy(Gt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),It===!0&&b.cameras.push(Gt)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let zt=d.getDepthInformation(_t[0]);zt&&zt.isValid&&zt.texture&&f.init(zt,s.renderState)}if(pt&&pt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let zt=0;zt<_t.length;zt++){let qt=_t[zt].camera;if(qt){let ie=p[qt];ie||(ie=new ws,p[qt]=ie);let Gt=d.getCameraImage(qt);ie.sourceTexture=Gt}}}}for(let _t=0;_t<w.length;_t++){let It=T[_t],pt=w[_t];It!==null&&pt!==void 0&&pt.update(It,tt,c||a)}Qt&&Qt(Z,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}let Wt=new Ah;Wt.setAnimationLoop(kt),this.setAnimationLoop=function(Z){Qt=Z},this.dispose=function(){}}},yg=new fe,Lh=new Lt;Lh.set(-1,0,0,0,1,0,0,0,1);function Mg(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,al(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,C,D,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&m(f,p,S)):p.isMeshMatcapMaterial?(r(f,p),_(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),y(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,C,D):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===ke&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===ke&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let C=t.get(p),D=C.envMap,S=C.envMapRotation;D&&(f.envMap.value=D,f.envMapRotation.value.setFromMatrix4(yg.makeRotationFromEuler(S)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Lh),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,C,D){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*C,f.scale.value=D*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,C){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=C.texture,f.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function y(f,p){let C=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(C.matrixWorld),f.nearDistance.value=C.shadow.camera.near,f.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){let T=w.program;n.uniformBlockBinding(S,T)}function c(S,w){let T=s[S.id];T===void 0&&(f(S),T=u(S),s[S.id]=T,S.addEventListener("dispose",C));let I=w.program;n.updateUBOMapping(S,I);let x=t.render.frame;r[S.id]!==x&&(h(S),r[S.id]=x)}function u(S){let w=d();S.__bindingPointIndex=w;let T=i.createBuffer(),I=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let w=s[S.id],T=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,M=T.length;x<M;x++){let P=T[x];if(Array.isArray(P))for(let R=0,L=P.length;R<L;R++)m(P[R],x,R,I);else m(P,x,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,w,T,I){if(y(S,w,T,I)===!0){let x=S.__offset,M=S.value;if(Array.isArray(M)){let P=0;for(let R=0;R<M.length;R++){let L=M[R],b=p(L);_(L,S.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=b.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(M,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function _(S,w,T){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,T)}function y(S,w,T,I){let x=S.value,M=w+"_"+T;if(I[M]===void 0)return typeof x=="number"||typeof x=="boolean"?I[M]=x:ArrayBuffer.isView(x)?I[M]=x.slice():I[M]=x.clone(),!0;{let P=I[M];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return I[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function f(S){let w=S.uniforms,T=0,I=16;for(let M=0,P=w.length;M<P;M++){let R=Array.isArray(w[M])?w[M]:[w[M]];for(let L=0,b=R.length;L<b;L++){let E=R[L],F=Array.isArray(E.value)?E.value:[E.value];for(let B=0,H=F.length;B<H;B++){let J=F[B],X=p(J),$=T%I,et=$%X.boundary,mt=$+et;T+=et,mt!==0&&I-mt<X.storage&&(T+=I-mt),E.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=T,T+=X.storage}}}let x=T%I;return x>0&&(T+=I-x),S.__size=T,S.__cache={},this}function p(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",S),w}function C(S){let w=S.target;w.removeEventListener("dispose",C);let T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function D(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:D}}var bg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bn=null;function wg(){return bn===null&&(bn=new kr(bg,16,16,ti,Ce),bn.name="DFG_LUT",bn.minFilter=Ee,bn.magFilter=Ee,bn.wrapS=_n,bn.wrapT=_n,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}var Ja=class{constructor(t={}){let{canvas:e=Qc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Je}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let y=m,f=new Set([da,ua,ha]),p=new Set([Je,un,Qi,ji,la,ca]),C=new Uint32Array(4),D=new Int32Array(4),S=new V,w=null,T=null,I=[],x=[],M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,R=!1,L=null,b=null,E=null,F=null;this._outputColorSpace=Oe;let B=0,H=0,J=null,X=-1,$=null,et=new ae,mt=new ae,vt=null,Qt=new Ut(0),kt=0,Wt=e.width,Z=e.height,tt=1,_t=null,It=null,pt=new ae(0,0,Wt,Z),Ot=new ae(0,0,Wt,Z),Me=!1,zt=new Ss,qt=!1,ie=!1,Gt=new fe,he=new V,we=new ae,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function ge(){return J===null?tt:1}let O=n;function Re(v,U){return e.getContext(v,U)}let jt,A,g,z,W,Y,it,st,K,j,rt,wt,ct,at,Tt,Ct,Dt,N,ot,Q,lt,ft,nt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",se,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",sn,!1),O===null){let U="webgl2";if(O=Re(U,v),O===null)throw Re(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(v){throw e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",sn,!1),Rt("WebGLRenderer: "+v.message),v}function At(){jt=new Ip(O),jt.init(),lt=new _g(O,jt),A=new Mp(O,jt,t,lt),g=new mg(O,jt),A.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),b=O.createFramebuffer(),E=O.createFramebuffer(),F=O.createFramebuffer(),z=new Up(O),W=new eg,Y=new gg(O,jt,g,W,A,lt,z),it=new Pp(P),st=new Nu(O),ft=new vp(O,st),K=new Lp(O,st,z,ft),j=new Fp(O,K,st,ft,z),N=new Np(O,A,Y),Tt=new Sp(W),rt=new tg(P,it,jt,A,ft,Tt),wt=new Mg(P,W),ct=new ig,at=new cg(jt),Dt=new xp(P,it,g,j,_,l),Ct=new pg(P,j,A),nt=new Sg(O,z,A,g),ot=new yp(O,jt,z),Q=new Dp(O,jt,z),z.programs=rt.programs,P.capabilities=A,P.extensions=jt,P.properties=W,P.renderLists=ct,P.shadowMap=Ct,P.state=g,P.info=z}y!==Je&&(M=new Bp(y,e.width,e.height,o,s,r));let St=new Rl(P,O);this.xr=St,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let v=jt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=jt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(v){v!==void 0&&(tt=v,this.setSize(Wt,Z,!1))},this.getSize=function(v){return v.set(Wt,Z)},this.setSize=function(v,U,q=!0){if(St.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=v,Z=U,e.width=Math.floor(v*tt),e.height=Math.floor(U*tt),q===!0&&(e.style.width=v+"px",e.style.height=U+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(Wt*tt,Z*tt).floor()},this.setDrawingBufferSize=function(v,U,q){Wt=v,Z=U,tt=q,e.width=Math.floor(v*q),e.height=Math.floor(U*q),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(y===Je){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(et)},this.getViewport=function(v){return v.copy(pt)},this.setViewport=function(v,U,q,k){v.isVector4?pt.set(v.x,v.y,v.z,v.w):pt.set(v,U,q,k),g.viewport(et.copy(pt).multiplyScalar(tt).round())},this.getScissor=function(v){return v.copy(Ot)},this.setScissor=function(v,U,q,k){v.isVector4?Ot.set(v.x,v.y,v.z,v.w):Ot.set(v,U,q,k),g.scissor(mt.copy(Ot).multiplyScalar(tt).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(v){g.setScissorTest(Me=v)},this.setOpaqueSort=function(v){_t=v},this.setTransparentSort=function(v){It=v},this.getClearColor=function(v){return v.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,q=!0){let k=0;if(v){let G=!1;if(J!==null){let dt=J.texture.format;G=f.has(dt)}if(G){let dt=J.texture.type,xt=p.has(dt),ut=Dt.getClearColor(),yt=Dt.getClearAlpha(),bt=ut.r,Nt=ut.g,Vt=ut.b;xt?(C[0]=bt,C[1]=Nt,C[2]=Vt,C[3]=yt,O.clearBufferuiv(O.COLOR,0,C)):(D[0]=bt,D[1]=Nt,D[2]=Vt,D[3]=yt,O.clearBufferiv(O.COLOR,0,D))}else k|=O.COLOR_BUFFER_BIT}U&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),L=v},this.dispose=function(){e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",sn,!1),Dt.dispose(),ct.dispose(),at.dispose(),W.dispose(),it.dispose(),j.dispose(),ft.dispose(),nt.dispose(),rt.dispose(),St.dispose(),St.removeEventListener("sessionstart",kl),St.removeEventListener("sessionend",Gl),si.stop()};function se(v){v.preventDefault(),rl("WebGLRenderer: Context Lost."),R=!0}function $t(){rl("WebGLRenderer: Context Restored."),R=!1;let v=z.autoReset,U=Ct.enabled,q=Ct.autoUpdate,k=Ct.needsUpdate,G=Ct.type;At(),z.autoReset=v,Ct.enabled=U,Ct.autoUpdate=q,Ct.needsUpdate=k,Ct.type=G}function sn(v){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function pn(v){let U=v.target;U.removeEventListener("dispose",pn),Xh(U)}function Xh(v){qh(v),W.remove(v)}function qh(v){let U=W.get(v).programs;U!==void 0&&(U.forEach(function(q){rt.releaseProgram(q)}),v.isShaderMaterial&&rt.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,q,k,G,dt){U===null&&(U=Ge);let xt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ut=Jh(v,U,q,k,G);g.setMaterial(k,xt);let yt=q.index,bt=1;if(k.wireframe===!0){if(yt=K.getWireframeAttribute(q),yt===void 0)return;bt=2}let Nt=q.drawRange,Vt=q.attributes.position,Mt=Nt.start*bt,Kt=(Nt.start+Nt.count)*bt;dt!==null&&(Mt=Math.max(Mt,dt.start*bt),Kt=Math.min(Kt,(dt.start+dt.count)*bt)),yt!==null?(Mt=Math.max(Mt,0),Kt=Math.min(Kt,yt.count)):Vt!=null&&(Mt=Math.max(Mt,0),Kt=Math.min(Kt,Vt.count));let _e=Kt-Mt;if(_e<0||_e===1/0)return;ft.setup(G,k,ut,q,yt);let oe,ne=ot;if(yt!==null&&(oe=st.get(yt),ne=Q,ne.setIndex(oe)),G.isMesh)k.wireframe===!0?(g.setLineWidth(k.wireframeLinewidth*ge()),ne.setMode(O.LINES)):ne.setMode(O.TRIANGLES);else if(G.isLine){let Pe=k.linewidth;Pe===void 0&&(Pe=1),g.setLineWidth(Pe*ge()),G.isLineSegments?ne.setMode(O.LINES):G.isLineLoop?ne.setMode(O.LINE_LOOP):ne.setMode(O.LINE_STRIP)}else G.isPoints?ne.setMode(O.POINTS):G.isSprite&&ne.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))ne.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Pe=G._multiDrawStarts,gt=G._multiDrawCounts,Fe=G._multiDrawCount,Xt=yt?st.get(yt).bytesPerElement:1,je=W.get(k).currentProgram.getUniforms();for(let mn=0;mn<Fe;mn++)je.setValue(O,"_gl_DrawID",mn),ne.render(Pe[mn]/Xt,gt[mn])}else if(G.isInstancedMesh)ne.renderInstances(Mt,_e,G.count);else if(q.isInstancedBufferGeometry){let Pe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,gt=Math.min(q.instanceCount,Pe);ne.renderInstances(Mt,_e,gt)}else ne.render(Mt,_e)};function Vl(v,U,q,k){L!==null&&v.isNodeMaterial&&L.setObject(k,v),qt===!0&&Tt.setState(v,q,!1),v.transparent===!0&&v.side===Mn&&v.forceSinglePass===!1?(v.side=ke,v.needsUpdate=!0,sr(v,U,k),v.side=Kn,v.needsUpdate=!0,sr(v,U,k),v.side=Mn):sr(v,U,k)}this.compile=function(v,U,q=null){q===null&&(q=v),L!==null&&L.renderStart(v,U,q),T=at.get(q),T.init(U),x.push(T),q.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),v!==q&&v.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),ie=this.localClippingEnabled,qt=Tt.init(this.clippingPlanes,ie),qt===!0&&Tt.setGlobalState(this.clippingPlanes,U),L!==null&&Ct.render(T.state.shadowsArray,q,U);let k=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let dt=G.material;if(dt)if(Array.isArray(dt))for(let xt=0;xt<dt.length;xt++){let ut=dt[xt];Vl(ut,q,U,G),k.add(ut)}else Vl(dt,q,U,G),k.add(dt)}),T=x.pop(),L!==null&&L.renderEnd(),k},this.compileAsync=function(v,U,q=null){let k=this.compile(v,U,q);return new Promise(G=>{function dt(){if(k.forEach(function(xt){let yt=W.get(xt).currentProgram;(yt===void 0||yt.isReady())&&k.delete(xt)}),k.size===0){G(v);return}setTimeout(dt,10)}jt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let ho=null;function Yh(v){ho&&ho(v)}function kl(){si.stop()}function Gl(){si.start()}let si=new Ah;si.setAnimationLoop(Yh),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(v){ho=v,St.setAnimationLoop(v),v===null?si.stop():si.start()},St.addEventListener("sessionstart",kl),St.addEventListener("sessionend",Gl),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(v,U);let q=St.enabled===!0&&St.isPresenting===!0,k=M!==null&&(J===null||q)&&M.begin(P,J);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(U),U=St.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,U,J),T=at.get(v,x.length),T.init(U),T.state.textureUnits=Y.getTextureUnits(),x.push(T),Gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),zt.setFromProjectionMatrix(Gt,cn,U.reversedDepth),ie=this.localClippingEnabled,qt=Tt.init(this.clippingPlanes,ie),w=ct.get(v,I.length),w.init(),I.push(w),St.enabled===!0&&St.isPresenting===!0){let xt=P.xr.getDepthSensingMesh();xt!==null&&uo(xt,U,-1/0,P.sortObjects)}uo(v,U,0,P.sortObjects),w.finish(),L!==null&&L.updateLights(T.state.lightsArray),P.sortObjects===!0&&w.sort(_t,It),ue=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,ue&&Dt.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qt===!0&&Tt.beginShadows();let G=T.state.shadowsArray;if(Ct.render(G,v,U),qt===!0&&Tt.endShadows(),(k&&M.hasRenderPass())===!1){let xt=w.opaque,ut=w.transmissive;if(T.setupLights(),U.isArrayCamera){let yt=U.cameras;if(ut.length>0)for(let bt=0,Nt=yt.length;bt<Nt;bt++){let Vt=yt[bt];Wl(xt,ut,v,Vt)}ue&&Dt.render(v);for(let bt=0,Nt=yt.length;bt<Nt;bt++){let Vt=yt[bt];Hl(w,v,Vt,Vt.viewport)}}else ut.length>0&&Wl(xt,ut,v,U),ue&&Dt.render(v),Hl(w,v,U)}J!==null&&H===0&&(Y.updateMultisampleRenderTarget(J),Y.updateRenderTargetMipmap(J)),k&&M.end(P),v.isScene===!0&&v.onAfterRender(P,v,U),ft.resetDefaultState(),X=-1,$=null,x.pop(),x.length>0?(T=x[x.length-1],Y.setTextureUnits(T.state.textureUnits),qt===!0&&Tt.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,I.pop(),I.length>0?w=I[I.length-1]:w=null,L!==null&&L.renderEnd()};function uo(v,U,q,k){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(zt)){k&&we.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Gt);let xt=j.update(v),ut=v.material;ut.visible&&w.push(v,xt,ut,q,we.z,null,U)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(zt))){let xt=j.update(v),ut=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),we.copy(v.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),we.copy(xt.boundingSphere.center)),we.applyMatrix4(v.matrixWorld).applyMatrix4(Gt)),Array.isArray(ut)){let yt=xt.groups;for(let bt=0,Nt=yt.length;bt<Nt;bt++){let Vt=yt[bt],Mt=ut[Vt.materialIndex];Mt&&Mt.visible&&w.push(v,xt,Mt,q,we.z,Vt,U)}}else ut.visible&&w.push(v,xt,ut,q,we.z,null,U)}}let dt=v.children;for(let xt=0,ut=dt.length;xt<ut;xt++)uo(dt[xt],U,q,k)}function Hl(v,U,q,k){let{opaque:G,transmissive:dt,transparent:xt}=v;T.setupLightsView(q),qt===!0&&Tt.setGlobalState(P.clippingPlanes,q),k&&g.viewport(et.copy(k)),G.length>0&&ir(G,U,q),dt.length>0&&ir(dt,U,q),xt.length>0&&ir(xt,U,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Wl(v,U,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Mt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new ve(1,1,{generateMipmaps:!0,type:Mt?Ce:Je,minFilter:Sn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let dt=T.state.transmissionRenderTarget[k.id],xt=k.viewport||et;dt.setSize(xt.z*P.transmissionResolutionScale,xt.w*P.transmissionResolutionScale);let ut=P.getRenderTarget(),yt=P.getActiveCubeFace(),bt=P.getActiveMipmapLevel();P.setRenderTarget(dt),P.getClearColor(Qt),kt=P.getClearAlpha(),kt<1&&P.setClearColor(16777215,.5),P.clear(),ue&&Dt.render(q);let Nt=P.toneMapping;P.toneMapping=hn;let Vt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),qt===!0&&Tt.setGlobalState(P.clippingPlanes,k),ir(v,q,k),Y.updateMultisampleRenderTarget(dt),Y.updateRenderTargetMipmap(dt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Kt=0,_e=U.length;Kt<_e;Kt++){let oe=U[Kt],{object:ne,geometry:Pe,material:gt,group:Fe}=oe;if(gt.side===Mn&&ne.layers.test(k.layers)){let Xt=gt.side;gt.side=ke,gt.needsUpdate=!0,Xl(ne,q,k,Pe,gt,Fe),gt.side=Xt,gt.needsUpdate=!0,Mt=!0}}Mt===!0&&(Y.updateMultisampleRenderTarget(dt),Y.updateRenderTargetMipmap(dt))}P.setRenderTarget(ut,yt,bt),P.setClearColor(Qt,kt),Vt!==void 0&&(k.viewport=Vt),P.toneMapping=Nt}function ir(v,U,q){let k=U.isScene===!0?U.overrideMaterial:null;for(let G=0,dt=v.length;G<dt;G++){let xt=v[G],{object:ut,geometry:yt,group:bt}=xt,Nt=xt.material;Nt.allowOverride===!0&&k!==null&&(Nt=k),ut.layers.test(q.layers)&&Xl(ut,U,q,yt,Nt,bt)}}function Xl(v,U,q,k,G,dt){L!==null&&G.isNodeMaterial&&L.setObject(v,G),v.onBeforeRender(P,U,q,k,G,dt),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(P,U,q,k,v,dt),G.transparent===!0&&G.side===Mn&&G.forceSinglePass===!1?(G.side=ke,G.needsUpdate=!0,P.renderBufferDirect(q,U,k,G,v,dt),G.side=Kn,G.needsUpdate=!0,P.renderBufferDirect(q,U,k,G,v,dt),G.side=Mn):P.renderBufferDirect(q,U,k,G,v,dt),v.onAfterRender(P,U,q,k,G,dt)}function sr(v,U,q){U.isScene!==!0&&(U=Ge);let k=W.get(v),G=T.state.lights,dt=T.state.shadowsArray,xt=G.state.version,ut=rt.getParameters(v,G.state,dt,U,q,T.state.lightProbeGridArray),yt=rt.getProgramCacheKey(ut),bt=k.programs;k.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let Nt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;k.envMap=it.get(v.envMap||k.environment,Nt),k.envMapRotation=k.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,bt===void 0&&(v.addEventListener("dispose",pn),bt=new Map,k.programs=bt);let Vt=bt.get(yt);if(Vt!==void 0){if(k.currentProgram===Vt&&k.lightsStateVersion===xt)return Yl(v,ut),Vt}else ut.uniforms=rt.getUniforms(v),L!==null&&v.isNodeMaterial&&L.build(v,q,ut),v.onBeforeCompile(ut,P),Vt=rt.acquireProgram(ut,yt),bt.set(yt,Vt),k.uniforms=ut.uniforms;let Mt=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Mt.clippingPlanes=Tt.uniform),Yl(v,ut),k.needsLights=Kh(v),k.lightsStateVersion=xt,k.needsLights&&(Mt.ambientLightColor.value=G.state.ambient,Mt.lightProbe.value=G.state.probe,Mt.sunLights.value=G.state.sun,Mt.sunLightShadows.value=G.state.sunShadow,Mt.directionalLights.value=G.state.directional,Mt.directionalLightShadows.value=G.state.directionalShadow,Mt.spotLights.value=G.state.spot,Mt.spotLightShadows.value=G.state.spotShadow,Mt.rectAreaLights.value=G.state.rectArea,Mt.ltc_1.value=G.state.rectAreaLTC1,Mt.ltc_2.value=G.state.rectAreaLTC2,Mt.pointLights.value=G.state.point,Mt.pointLightShadows.value=G.state.pointShadow,Mt.hemisphereLights.value=G.state.hemi,Mt.sunShadowMatrix.value=G.state.sunShadowMatrix,Mt.sunShadowCascade.value=G.state.sunShadowCascade,Mt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Mt.spotLightMatrix.value=G.state.spotLightMatrix,Mt.spotLightMap.value=G.state.spotLightMap,Mt.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=Vt,k.uniformsList=null,Vt}function ql(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=ns.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Yl(v,U){let q=W.get(v);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Zh(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(U.matrixWorld);for(let q=0,k=v.length;q<k;q++){let G=v[q];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function Jh(v,U,q,k,G){U.isScene!==!0&&(U=Ge),Y.resetTextureUnits();let dt=U.fog,xt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,ut=J===null?P.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Bt.workingColorSpace,yt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,bt=it.get(k.envMap||xt,yt),Nt=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Vt=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Mt=!!q.morphAttributes.position,Kt=!!q.morphAttributes.normal,_e=!!q.morphAttributes.color,oe=hn;k.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(oe=P.toneMapping);let ne=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Pe=ne!==void 0?ne.length:0,gt=W.get(k),Fe=T.state.lights;if(qt===!0&&(ie===!0||v!==$)){let re=v===$&&k.id===X;Tt.setState(k,v,re)}let Xt=!1;k.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Fe.state.version||gt.outputColorSpace!==ut||G.isBatchedMesh&&gt.batching===!1||!G.isBatchedMesh&&gt.batching===!0||G.isBatchedMesh&&gt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&gt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&gt.instancing===!1||!G.isInstancedMesh&&gt.instancing===!0||G.isSkinnedMesh&&gt.skinning===!1||!G.isSkinnedMesh&&gt.skinning===!0||G.isInstancedMesh&&gt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&gt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&gt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&gt.instancingMorph===!1&&G.morphTexture!==null||gt.envMap!==bt||k.fog===!0&&gt.fog!==dt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Tt.numPlanes||gt.numIntersection!==Tt.numIntersection)||gt.vertexAlphas!==Nt||gt.vertexTangents!==Vt||gt.morphTargets!==Mt||gt.morphNormals!==Kt||gt.morphColors!==_e||gt.toneMapping!==oe||gt.morphTargetsCount!==Pe||!!gt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Xt=!0):(Xt=!0,gt.__version=k.version);let je=gt.currentProgram;Xt===!0&&(je=sr(k,U,G),L&&k.isNodeMaterial&&L.onUpdateProgram(k,je,gt));let mn=!1,Fn=!1,bi=!1,te=je.getUniforms(),pe=gt.uniforms;if(g.useProgram(je.program)&&(mn=!0,Fn=!0,bi=!0),k.id!==X&&(X=k.id,Fn=!0),gt.needsLights){let re=Zh(T.state.lightProbeGridArray,G);gt.lightProbeGrid!==re&&(gt.lightProbeGrid=re,Fn=!0)}if(mn||$!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),te.setValue(O,"projectionMatrix",v.projectionMatrix),te.setValue(O,"viewMatrix",v.matrixWorldInverse);let Bn=te.map.cameraPosition;Bn!==void 0&&Bn.setValue(O,he.setFromMatrixPosition(v.matrixWorld)),A.logarithmicDepthBuffer&&te.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&te.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),$!==v&&($=v,Fn=!0,bi=!0)}if(gt.needsLights&&(Fe.state.sunShadowMap.length>0&&te.setValue(O,"sunShadowMap",Fe.state.sunShadowMap,Y),Fe.state.directionalShadowMap.length>0&&te.setValue(O,"directionalShadowMap",Fe.state.directionalShadowMap,Y),Fe.state.spotShadowMap.length>0&&te.setValue(O,"spotShadowMap",Fe.state.spotShadowMap,Y),Fe.state.pointShadowMap.length>0&&te.setValue(O,"pointShadowMap",Fe.state.pointShadowMap,Y)),G.isSkinnedMesh){te.setOptional(O,G,"bindMatrix"),te.setOptional(O,G,"bindMatrixInverse");let re=G.skeleton;re&&(re.boneTexture===null&&re.computeBoneTexture(),te.setValue(O,"boneTexture",re.boneTexture,Y))}G.isBatchedMesh&&(te.setOptional(O,G,"batchingTexture"),te.setValue(O,"batchingTexture",G._matricesTexture,Y),te.setOptional(O,G,"batchingIdTexture"),te.setValue(O,"batchingIdTexture",G._indirectTexture,Y),te.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&te.setValue(O,"batchingColorTexture",G._colorsTexture,Y));let On=q.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&N.update(G,q,je),(Fn||gt.receiveShadow!==G.receiveShadow)&&(gt.receiveShadow=G.receiveShadow,te.setValue(O,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(pe.envMapIntensity.value=U.environmentIntensity),pe.dfgLUT!==void 0&&(pe.dfgLUT.value=wg()),Fn){if(te.setValue(O,"toneMappingExposure",P.toneMappingExposure),gt.needsLights&&$h(pe,bi),dt&&k.fog===!0&&wt.refreshFogUniforms(pe,dt),wt.refreshMaterialUniforms(pe,k,tt,Z,T.state.transmissionRenderTarget[v.id]),gt.needsLights&&gt.lightProbeGrid){let re=gt.lightProbeGrid;pe.probesSH.value=re.texture,pe.probesMin.value.copy(re.boundingBox.min),pe.probesMax.value.copy(re.boundingBox.max),pe.probesResolution.value.copy(re.resolution)}ns.upload(O,ql(gt),pe,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ns.upload(O,ql(gt),pe,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&te.setValue(O,"center",G.center),te.setValue(O,"modelViewMatrix",G.modelViewMatrix),te.setValue(O,"normalMatrix",G.normalMatrix),te.setValue(O,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let re=k.uniformsGroups;for(let Bn=0,wi=re.length;Bn<wi;Bn++){let Jl=re[Bn];nt.update(Jl,je),nt.bind(Jl,je)}}return je}function $h(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.sunLights.needsUpdate=U,v.sunLightShadows.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Kh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(v,U,q){let k=W.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),W.get(v.texture).__webglTexture=U,W.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let q=W.get(v);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,q=0){J=v,B=U,H=q;let k=null,G=!1,dt=!1;if(v){let ut=W.get(v);if(ut.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(O.FRAMEBUFFER,ut.__webglFramebuffer),et.copy(v.viewport),mt.copy(v.scissor),vt=v.scissorTest,g.viewport(et),g.scissor(mt),g.setScissorTest(vt),X=-1;return}else if(ut.__webglFramebuffer===void 0)Y.setupRenderTarget(v);else if(ut.__hasExternalTextures)Y.rebindTextures(v,W.get(v.texture).__webglTexture,W.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Nt=v.depthTexture;if(ut.__boundDepthTexture!==Nt){if(Nt!==null&&W.has(Nt)&&(v.width!==Nt.image.width||v.height!==Nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(v)}}let yt=v.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(dt=!0);let bt=W.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(bt[U])?k=bt[U][q]:k=bt[U],G=!0):v.samples>0&&Y.useMultisampledRTT(v)===!1?k=W.get(v).__webglMultisampledFramebuffer:Array.isArray(bt)?k=bt[q]:k=bt,et.copy(v.viewport),mt.copy(v.scissor),vt=v.scissorTest}else et.copy(pt).multiplyScalar(tt).floor(),mt.copy(Ot).multiplyScalar(tt).floor(),vt=Me;if(q!==0&&(k=b),g.bindFramebuffer(O.FRAMEBUFFER,k)&&g.drawBuffers(v,k),g.viewport(et),g.scissor(mt),g.setScissorTest(vt),G){let ut=W.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ut.__webglTexture,q)}else if(dt){let ut=U;for(let yt=0;yt<v.textures.length;yt++){let bt=W.get(v.textures[yt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+yt,bt.__webglTexture,q,ut)}}else if(v!==null&&q!==0){let ut=W.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ut.__webglTexture,q)}X=-1};function Zl(v){let U=W.get(v);return(U.__readFormat!==v.format||U.__readType!==v.type)&&(U.__readFormat=v.format,U.__readType=v.type,U.__formatReadable=A.textureFormatReadable(v.format),U.__typeReadable=A.textureTypeReadable(v.type)),U}this.readRenderTargetPixels=function(v,U,q,k,G,dt,xt,ut=0){if(!(v&&v.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=W.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt){g.bindFramebuffer(O.FRAMEBUFFER,yt);try{let bt=v.textures[ut],Nt=bt.format,Vt=bt.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let Mt=Zl(bt);if(Mt.__formatReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-k&&q>=0&&q<=v.height-G&&O.readPixels(U,q,k,G,lt.convert(Nt),lt.convert(Vt),dt)}finally{let bt=J!==null?W.get(J).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(v,U,q,k,G,dt,xt,ut=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=W.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt)if(U>=0&&U<=v.width-k&&q>=0&&q<=v.height-G){g.bindFramebuffer(O.FRAMEBUFFER,yt);let bt=v.textures[ut],Nt=bt.format,Vt=bt.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let Mt=Zl(bt);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Kt),O.bufferData(O.PIXEL_PACK_BUFFER,dt.byteLength,O.STREAM_READ),O.readPixels(U,q,k,G,lt.convert(Nt),lt.convert(Vt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let _e=J!==null?W.get(J).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,_e);let oe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await th(O,oe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Kt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,dt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Kt),O.deleteSync(oe),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,q=0){let k=Math.pow(2,-q),G=Math.floor(v.image.width*k),dt=Math.floor(v.image.height*k),xt=U!==null?U.x:0,ut=U!==null?U.y:0;Y.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,xt,ut,G,dt),g.unbindTexture()},this.copyTextureToTexture=function(v,U,q=null,k=null,G=0,dt=0){let xt,ut,yt,bt,Nt,Vt,Mt,Kt,_e,oe=v.isCompressedTexture?v.mipmaps[dt]:v.image;if(q!==null)xt=q.max.x-q.min.x,ut=q.max.y-q.min.y,yt=q.isBox3?q.max.z-q.min.z:1,bt=q.min.x,Nt=q.min.y,Vt=q.isBox3?q.min.z:0;else{let pe=Math.pow(2,-G);xt=Math.floor(oe.width*pe),ut=Math.floor(oe.height*pe),v.isDataArrayTexture?yt=oe.depth:v.isData3DTexture?yt=Math.floor(oe.depth*pe):yt=1,bt=0,Nt=0,Vt=0}k!==null?(Mt=k.x,Kt=k.y,_e=k.z):(Mt=0,Kt=0,_e=0);let ne=lt.convert(U.format),Pe=lt.convert(U.type),gt;U.isData3DTexture?(Y.setTexture3D(U,0),gt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),gt=O.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),gt=O.TEXTURE_2D),g.activeTexture(O.TEXTURE0),g.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Fe=g.getParameter(O.UNPACK_ROW_LENGTH),Xt=g.getParameter(O.UNPACK_IMAGE_HEIGHT),je=g.getParameter(O.UNPACK_SKIP_PIXELS),mn=g.getParameter(O.UNPACK_SKIP_ROWS),Fn=g.getParameter(O.UNPACK_SKIP_IMAGES);g.pixelStorei(O.UNPACK_ROW_LENGTH,oe.width),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,oe.height),g.pixelStorei(O.UNPACK_SKIP_PIXELS,bt),g.pixelStorei(O.UNPACK_SKIP_ROWS,Nt),g.pixelStorei(O.UNPACK_SKIP_IMAGES,Vt);let bi=v.isDataArrayTexture||v.isData3DTexture,te=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let pe=W.get(v),On=W.get(U),re=W.get(pe.__renderTarget),Bn=W.get(On.__renderTarget);g.bindFramebuffer(O.READ_FRAMEBUFFER,re.__webglFramebuffer),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let wi=0;wi<yt;wi++)bi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(v).__webglTexture,G,Vt+wi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(U).__webglTexture,dt,_e+wi)),O.blitFramebuffer(bt,Nt,xt,ut,Mt,Kt,xt,ut,O.DEPTH_BUFFER_BIT,O.NEAREST);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||W.has(v)){let pe=W.get(v),On=W.get(U);g.bindFramebuffer(O.READ_FRAMEBUFFER,E),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let re=0;re<yt;re++)bi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pe.__webglTexture,G,Vt+re):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pe.__webglTexture,G),te?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,On.__webglTexture,dt,_e+re):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,On.__webglTexture,dt),G!==0?O.blitFramebuffer(bt,Nt,xt,ut,Mt,Kt,xt,ut,O.COLOR_BUFFER_BIT,O.NEAREST):te?O.copyTexSubImage3D(gt,dt,Mt,Kt,_e+re,bt,Nt,xt,ut):O.copyTexSubImage2D(gt,dt,Mt,Kt,bt,Nt,xt,ut);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else te?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(gt,dt,Mt,Kt,_e,xt,ut,yt,ne,Pe,oe.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(gt,dt,Mt,Kt,_e,xt,ut,yt,ne,oe.data):O.texSubImage3D(gt,dt,Mt,Kt,_e,xt,ut,yt,ne,Pe,oe):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,dt,Mt,Kt,xt,ut,ne,Pe,oe.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,dt,Mt,Kt,oe.width,oe.height,ne,oe.data):O.texSubImage2D(O.TEXTURE_2D,dt,Mt,Kt,xt,ut,ne,Pe,oe);g.pixelStorei(O.UNPACK_ROW_LENGTH,Fe),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Xt),g.pixelStorei(O.UNPACK_SKIP_PIXELS,je),g.pixelStorei(O.UNPACK_SKIP_ROWS,mn),g.pixelStorei(O.UNPACK_SKIP_IMAGES,Fn),dt===0&&U.generateMipmaps&&O.generateMipmap(gt),g.unbindTexture()},this.initRenderTarget=function(v){W.get(v).__webglFramebuffer===void 0&&Y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Y.setTextureCube(v,0):v.isData3DTexture?Y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Y.setTexture2DArray(v,0):Y.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){B=0,H=0,J=null,g.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Bt._getUnpackColorSpace()}};var ss={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ke=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Tg=new mi(-1,1,1,-1,0,1),Pl=class extends Ye{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}},Ag=new Pl,ei=class{constructor(t){this._mesh=new Ae(Ag,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Tg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var rs=class extends Ke{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ln.clone(t.uniforms),this.material=new ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ei(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $s=class extends Ke{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Qa=class extends Ke{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ja=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Et);this._width=n.width,this._height=n.height,e=new ve(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ce}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rs(ss),this.copyPass.material.blending=nn,this.timer=new Rs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}$s!==void 0&&(a instanceof $s?n=!0:a instanceof Qa&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var to=class extends Ke{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ut}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Dh={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ut(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var as=class i extends Ke{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Et(t.x,t.y):new Et(256,256),this.clearColor=new Ut(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ve(r,a,{type:Ce,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new ve(r,a,{type:Ce,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new ve(r,a,{type:Ce,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=Dh;this.highPassUniforms=Ln.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ce({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Et(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ln.clone(ss.uniforms),this.blendMaterial=new ce({uniforms:this.copyUniforms,vertexShader:ss.vertexShader,fragmentShader:ss.fragmentShader,premultipliedAlpha:!0,blending:gi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ut,this._oldClearAlpha=1,this._basic=new fi,this._fsQuad=new ei(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new ce({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Et(.5,.5)},direction:{value:new Et(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};as.BlurDirectionX=new Et(1,0);as.BlurDirectionY=new Et(0,1);var Ks={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var eo=class extends Ke{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ln.clone(Ks.uniforms),this.material=new Zi({name:Ks.name,uniforms:this.uniforms,vertexShader:Ks.vertexShader,fragmentShader:Ks.fragmentShader}),this._fsQuad=new ei(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Bt.getTransfer(this._outputColorSpace)===Yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ls?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ds?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Us?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ns?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Os?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xi?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fs&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var no=16,Eg=8,Cg=`
precision highp float;
precision highp sampler2DArray;

uniform sampler2DArray uPos;   // xyz position, w brightness
uniform sampler2DArray uDir;   // xyz direction*length, w heat (0 cobalt \u2026 0.6 white \u2026 1 yellow, <0 alarm)
uniform sampler2DArray uAux;   // x group, y param, z fx id, w extra
uniform float uTexW;
uniform vec2  uForms;          // from / to layer (-1 = scattered cloud)
uniform float uMix;
uniform float uTime;
uniform vec2  uRes;
uniform float uPx;
uniform float uWidth;
uniform float uBright;
uniform float uWarm;
uniform float uSwirl;
uniform float uStreak;
uniform float uStagger;
uniform float uLight;          // 0..1 how much of the warm "light" population is switched on
uniform float uIntro;          // 0..1 draw-on sweep for the very first portrait
uniform vec3  uPtr;
uniform float uPtrR;
uniform float uPtrPush;
uniform vec4  uTrail[8];
uniform vec2  uFormRot[16];
uniform vec3  uFormOff[16];
uniform float uFormScale[16];
uniform float uReveal[16];
uniform vec4  uFx;             // w: how far the skyline has grown
uniform vec3  uFocus;          // focus plane z, focus range, fog k
attribute float aId;

varying vec2 vUv;
varying vec4 vCol;

const float PI = 3.14159265;

float hash11(float p) { p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
vec3 hash31(float p) {
  vec3 p3 = fract(vec3(p) * vec3(.1031, .1030, .0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xxy + p3.yzz) * p3.zyx);
}
vec3 flow(vec3 p, float t) {
  return vec3(
    sin(p.y * 1.7 + t) + sin(p.z * 2.3 - t * .8),
    sin(p.z * 1.9 + t * .9) + sin(p.x * 2.1 + t * 1.1),
    sin(p.x * 1.6 - t * .7) + sin(p.y * 2.4 + t * 1.2));
}
float easeIO(float t) { return t < .5 ? 4. * t * t * t : 1. - pow(-2. * t + 2., 3.) * .5; }

vec3 palette(float h) {
  vec3 cobalt = vec3(.30, .42, 1.0);
  vec3 ice    = vec3(.72, .80, 1.0);
  vec3 warm   = vec3(1.0, .93, .78);
  vec3 yellow = vec3(1.0, .80, .18);
  vec3 amber  = vec3(1.0, .55, .06);
  vec3 alarm  = vec3(1.0, .22, .16);
  if (h < 0.) return alarm;
  vec3 c = mix(cobalt, ice, smoothstep(0., .35, h));
  c = mix(c, warm, smoothstep(.35, .6, h));
  c = mix(c, yellow, smoothstep(.6, .85, h));
  c = mix(c, amber, smoothstep(.85, 1., h));
  return c;
}

mat3 rotYX(vec2 r) {
  float cy = cos(r.x), sy = sin(r.x), cp = cos(r.y), sp = sin(r.y);
  mat3 ry = mat3(cy, 0., -sy, 0., 1., 0., sy, 0., cy);
  mat3 rx = mat3(1., 0., 0., 0., cp, sp, 0., -sp, cp);
  return rx * ry;
}

float portraitGate(int layer, vec4 aux) {
  if (layer != 0) return 1.;
  float sweep = smoothstep(aux.y - .3, aux.y, uIntro * 1.3);
  return sweep * (aux.w > .5 ? uLight : 1.);
}

// Per-form dynamic behaviour. p/d/w/heat are the stroke's rest state in form space.
void applyFx(int layer, inout vec3 p, inout vec3 d, inout float w, inout float heat, vec4 aux, float h) {
  int fx = int(aux.z + .5);
  if (fx == 0 || fx == 9 || fx == 10) return;
  float t = uTime;
  if (fx == 5) {            // skyline: towers grow from the ground
    float g = smoothstep(0., 1., clamp(uFx.w * 1.4 - aux.y * .5, 0., 1.));
    p.y = -1.2 + (p.y + 1.2) * g;
    d *= g;
    w *= .25 + .75 * g;
    return;
  }
  if (fx == 8) {            // tunnel dust drifts towards the camera
    p.z += mod(t * 1.2 + h * 40., 80.) - 40.;
    return;
  }
}

void main() {
  int id = int(aId + .5);
  int W = int(uTexW);
  ivec2 tc = ivec2(id % W, id / W);
  float h = hash11(aId * .7311 + 3.7);
  float h2 = hash11(aId * 1.913 + 9.1);

  int la = int(uForms.x + .5); int lb = int(uForms.y + .5);
  bool cloudA = uForms.x < -.5;

  vec3 pa, da; vec4 ua; float wa, ha;
  vec3 pb, db; vec4 ub; float wb, hb;

  if (cloudA) {
    vec3 r = hash31(aId) - .5;
    pa = normalize(r + 1e-3) * (4. + 9. * h2) + flow(r * 3., uTime * .2) * .6;
    da = normalize(hash31(aId + 5.) - .5) * .09; wa = .55; ha = .02; ua = vec4(0.);
  } else {
    vec4 P = texelFetch(uPos, ivec3(tc, la), 0);
    vec4 D = texelFetch(uDir, ivec3(tc, la), 0);
    ua = texelFetch(uAux, ivec3(tc, la), 0);
    pa = P.xyz; wa = P.w; da = D.xyz; ha = D.w;
    applyFx(la, pa, da, wa, ha, ua, h);
    mat3 R = rotYX(uFormRot[la]);
    pa = R * (pa * uFormScale[la]) + uFormOff[la]; da = R * (da * uFormScale[la]);
  }
  {
    vec4 P = texelFetch(uPos, ivec3(tc, lb), 0);
    vec4 D = texelFetch(uDir, ivec3(tc, lb), 0);
    ub = texelFetch(uAux, ivec3(tc, lb), 0);
    pb = P.xyz; wb = P.w; db = D.xyz; hb = D.w;
    applyFx(lb, pb, db, wb, hb, ub, h);
    mat3 R = rotYX(uFormRot[lb]);
    pb = R * (pb * uFormScale[lb]) + uFormOff[lb]; db = R * (db * uFormScale[lb]);
  }

  // per-stroke progress with a stagger so the swarm peels apart instead of moving as one sheet
  float stag = uStagger;
  float t = clamp((uMix - h * stag) / max(1. - stag, .001), 0., 1.);
  float e = easeIO(t);
  float mid = sin(PI * t);

  vec3 P = mix(pa, pb, e);
  vec3 D = mix(da, db, e);
  float w = mix(wa, wb, e);
  float heat = mix(ha, hb, e);

  // travel: swirl + streak along the direction of motion
  vec3 mv = pb - pa;
  vec3 sw = flow(P * .32 + h * 9., uTime * .35);
  P += sw * mid * uSwirl * (.4 + h2);
  float mvl = length(mv) + 1e-4;
  vec3 mdir = mv / mvl;
  D = mix(D, mdir * (length(D) + mid * uStreak * (.3 + h2)), clamp(mid * 1.6, 0., .92));

  // groups draw on (globe arcs, ruler beams \u2026)
  float grpA = ua.x, grpB = ub.x;
  // reveal value: 0..1 draws the group on (by its param), 1..2 adds an "active" glow
  float rvA = grpA < .5 ? 1. : uReveal[int(grpA + .5)];
  float rvB = grpB < .5 ? 1. : uReveal[int(grpB + .5)];
  float revA = grpA < .5 ? 1. : smoothstep(ua.y - .04, ua.y, min(rvA, 1.));
  float revB = grpB < .5 ? 1. : smoothstep(ub.y - .04, ub.y, min(rvB, 1.));
  float glow = mix(max(rvA - 1., 0.), max(rvB - 1., 0.), e);
  w *= mix(revA, revB, e) * (1. + glow * 1.5);
  heat += glow * .3;

  // hero portrait: the sketch draws on left\u2192right, then the warm light develops
  w *= mix(portraitGate(la, ua), portraitGate(lb, ub), e);

  // pointer: the light-pen pushes and lights nearby strokes
  vec3 dp = P - uPtr;
  float inf = exp(-dot(dp, dp) / (uPtrR * uPtrR));
  P += normalize(dp + vec3(1e-4)) * inf * uPtrPush * (.35 + h);
  float lit = inf;
  for (int i = 0; i < 8; i++) {
    vec4 tr = uTrail[i];
    vec3 dq = P - tr.xyz;
    lit += exp(-dot(dq, dq) / (uPtrR * uPtrR * 1.6)) * tr.w * .5;
  }

  // globe strokes fade on the far side so the front reads cleanly
  {
    bool globeStroke = (e > .5) ? (ub.z > 8.5 && ub.z < 9.5) : (ua.z > 8.5 && ua.z < 9.5);
    if (globeStroke) {
      int L = (e > .5) ? lb : la;
      vec3 n = normalize(P - uFormOff[L]);
      float fd = dot(n, normalize(cameraPosition - P));
      w *= mix(.12, 1., smoothstep(-.12, .32, fd));
    }
  }

  // to screen space
  vec3 P0 = P - D * .5, P1 = P + D * .5;
  vec4 c0 = projectionMatrix * viewMatrix * vec4(P0, 1.);
  vec4 c1 = projectionMatrix * viewMatrix * vec4(P1, 1.);
  if (c0.w < .05 || c1.w < .05 || w < .01) { gl_Position = vec4(2., 2., 2., 1.); vCol = vec4(0.); vUv = vec2(0.); return; }

  vec2 s0 = c0.xy / c0.w * .5 * uRes;
  vec2 s1 = c1.xy / c1.w * .5 * uRes;
  vec2 dv = s1 - s0;
  float dl = length(dv);
  vec2 dn = dl > .001 ? dv / dl : vec2(1., 0.);
  vec2 nn = vec2(-dn.y, dn.x);

  vec4 mvp = viewMatrix * vec4(P, 1.);
  float dist = -mvp.z;
  float coc = clamp(abs(dist - uFocus.x) / uFocus.y, 0., 1.);
  float fog = exp(-max(dist - 10., 0.) * uFocus.z);

  float hw = max(.55, uWidth * uPx * (1. + coc * 1.6) * (.75 + .5 * h2)) * .5;
  float minLen = hw * 2.4;
  float ext = max(0., (minLen - dl) * .5);
  vec2 sp = mix(s0, s1, position.x) + dn * (position.x * 2. - 1.) * (hw * .9 + ext) + nn * position.y * hw;
  float bw = mix(c0.w, c1.w, position.x);
  gl_Position = vec4(sp / (.5 * uRes) * bw, mix(c0.z, c1.z, position.x), bw);

  float twinkle = .82 + .18 * sin(uTime * (1.5 + h * 3.) + h * 40.);
  float thin = min(1., hw * 1.9);
  // corridor frames: gone once passed (so they never sit over the image in focus), and only the next two drawn ahead
  float nearK = ((e > .5) ? ub.z : ua.z) > 9.5 ? 1. : 0.;
  float passed = mix(1., smoothstep(uFocus.x - 1.8, uFocus.x - .4, dist) * (1. - smoothstep(uFocus.x + 5., uFocus.x + 10.5, dist)), nearK);
  float a = uBright * w * twinkle * fog * thin * passed / (1. + coc * 1.8) * (1. + lit * 1.6);
  vec3 col = palette(heat < -.5 ? -1. : clamp(heat + uWarm, 0., 1.3));
  vUv = vec2(position.x, position.y);
  vCol = vec4(col * (1. + lit * .5), a);
}
`,Rg=`
precision highp float;
varying vec2 vUv;
varying vec4 vCol;
void main() {
  float across = 1. - vUv.y * vUv.y;
  float along = sin(3.14159265 * vUv.x);
  float a = pow(max(across, 0.), 1.4) * (.3 + .7 * along);
  gl_FragColor = vec4(vCol.rgb, vCol.a * a);
}
`,io=class{constructor(t,e=Eg){this.count=t,this.layers=e,this.texW=Math.ceil(Math.sqrt(t));let n=this.texW*this.texW,s=()=>{let l=new ui(new Float32Array(n*4*e),this.texW,this.texW,e);return l.format=We,l.type=$e,l.minFilter=me,l.magFilter=me,l.generateMipmaps=!1,l.unpackAlignment=1,l.needsUpdate=!0,l};this.pos=s(),this.dir=s(),this.aux=s();let r=new Cs;r.setAttribute("position",new Be(new Float32Array([0,-1,0,0,1,0,1,-1,0,1,1,0]),3)),r.setIndex([0,2,1,1,2,3]);let a=new Float32Array(n);for(let l=0;l<n;l++)a[l]=l;r.setAttribute("aId",new Ms(a,1)),r.instanceCount=t,this.geometry=r;let o=[];for(let l=0;l<8;l++)o.push(new ae(0,0,0,0));this.uniforms={uPos:{value:this.pos},uDir:{value:this.dir},uAux:{value:this.aux},uTexW:{value:this.texW},uForms:{value:new Et(-1,0)},uMix:{value:0},uTime:{value:0},uRes:{value:new Et(1,1)},uPx:{value:1},uWidth:{value:1.35},uBright:{value:.42},uWarm:{value:0},uSwirl:{value:1.15},uStreak:{value:.85},uStagger:{value:.55},uLight:{value:1},uIntro:{value:1},uPtr:{value:new V(0,0,0)},uPtrR:{value:.9},uPtrPush:{value:.35},uTrail:{value:o},uFormRot:{value:new Float32Array(no*2)},uFormOff:{value:new Float32Array(no*3)},uFormScale:{value:new Float32Array(no).fill(1)},uReveal:{value:new Float32Array(no).fill(1)},uFx:{value:new ae(1,0,0,1)},uFocus:{value:new V(9,14,.012)}},this.material=new ce({vertexShader:Cg,fragmentShader:Rg,uniforms:this.uniforms,transparent:!0,blending:gi,depthWrite:!1,depthTest:!0}),this.mesh=new Ae(r,this.material),this.mesh.frustumCulled=!1}setForm(t,e){let n=this.texW*this.texW,s=t*n*4,r=Math.min(e.pos.length,n*4);this.pos.image.data.set(e.pos.subarray(0,r),s),this.dir.image.data.set(e.dir.subarray(0,r),s),this.aux.image.data.set(e.aux.subarray(0,r),s);for(let a of[this.pos,this.dir,this.aux])a.addLayerUpdate?.(t),a.needsUpdate=!0}setActive(t){this.geometry.instanceCount=Math.max(1e3,Math.min(t,this.texW*this.texW))}dispose(){this.geometry.dispose(),this.material.dispose(),this.pos.dispose(),this.dir.dispose(),this.aux.dispose()}};var Il={high:{dpr:1.5,strokes:1,bloom:!0,ca:!0},medium:{dpr:1.25,strokes:.62,bloom:!1,ca:!0},low:{dpr:1,strokes:.32,bloom:!1,ca:!1}},so=["high","medium","low"],Uh={uniforms:{tDiffuse:{value:null},uTime:{value:0},uCA:{value:0},uGrain:{value:.035},uVig:{value:.5},uRes:{value:new Et(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime, uCA, uGrain, uVig; uniform vec2 uRes; varying vec2 vUv;
    float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
    void main(){
      vec2 c = vUv - .5; float r2 = dot(c, c);
      vec2 off = c * (r2 * uCA + 0.0002);
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      col *= 1. - uVig * smoothstep(.16, .62, r2 * 1.6);
      float g = hash(vUv * uRes + fract(uTime) * 91.);
      col += (g - .5) * uGrain * (.25 + col);
      gl_FragColor = vec4(max(col, 0.), 1.);
    }`},ro=class{constructor(t,{tier:e="high",maxStrokes:n=65536}={}){this.canvas=t,this.tierName=e,this.tier=Il[e],this.renderer=new Ja({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.setClearColor(new Ut(329226),1),this.renderer.toneMapping=xi,this.renderer.toneMappingExposure=1,this.scene=new _s,this.camera=new De(32,1,.1,500),this.camera.position.set(0,0,12),this.pp={x:0,y:0},this.strokes=new io(n),this.scene.add(this.strokes.mesh),this.strokes.setActive(Math.floor(n*this.tier.strokes)),this.composer=null,this.bloom=null,this.fin=null,this.frameCbs=[],this.running=!1,this.acc={n:0,t:0,warm:0},this.time=0,this.last=0,this.buildPost(),this.resize(),this._raf=this._raf.bind(this),document.addEventListener("visibilitychange",()=>{document.hidden?this.stop():this.wantRun&&this.start()})}buildPost(){this.composer&&(this.composer.dispose?.(),this.composer=null);let t=this.tier;if(!t.bloom&&!t.ca)return;let e=new ja(this.renderer);e.addPass(new to(this.scene,this.camera)),t.bloom&&(this.bloom=new as(new Et(256,256),.42,.5,.82),e.addPass(this.bloom)),this.fin=new rs({...Uh,uniforms:{...Uh.uniforms,uRes:{value:new Et(1,1)}}}),e.addPass(this.fin),e.addPass(new eo),this.composer=e}setTier(t){Il[t]&&(this.tierName=t,this.tier=Il[t],this.strokes.setActive(Math.floor(this.strokes.count*this.tier.strokes)),this.buildPost(),this.resize())}demote(){let t=so.indexOf(this.tierName);return t<so.length-1?(this.setTier(so[t+1]),so[t+1]):null}resize(){let t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),n=Math.min(window.devicePixelRatio||1,this.tier.dpr);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(t,e)),this.dpr=n,this.w=t,this.h=e;let s=this.strokes.uniforms;s.uRes.value.set(t*n,e*n),s.uPx.value=n,this.fin&&this.fin.uniforms.uRes.value.set(t*n,e*n)}applyPrincipalPoint(){let t=this.camera.projectionMatrix.elements;t[8]=-this.pp.x,t[9]=-this.pp.y,this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert()}onFrame(t){this.frameCbs.push(t)}start(){this.wantRun=!0,!this.running&&(this.running=!0,this.last=performance.now(),requestAnimationFrame(this._raf))}stop(){this.running=!1}_raf(t){if(!this.running)return;requestAnimationFrame(this._raf);let e=Math.min(.1,(t-this.last)/1e3);this.last=t,this.time+=e,this.strokes.uniforms.uTime.value=this.time,this.fin&&(this.fin.uniforms.uTime.value=this.time);for(let n of this.frameCbs)n(e,this.time);this.applyPrincipalPoint(),this.render(),this.govern(e)}render(){this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}govern(t){let e=this.acc;if(!(this.time<3)&&(e.n++,e.t+=t,e.n>=90)){let n=e.t/e.n;if(e.n=0,e.t=0,n>.026){if(e.warm++,e.warm>=2){e.warm=0;let s=this.demote();s&&this.onDemote?.(s)}}else e.warm=0}}dispose(){this.stop(),this.strokes.dispose(),this.composer?.dispose?.(),this.renderer.dispose()}};function Dn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Qe(i,t){let e=1,n=0;for(i=i+1;i>0;)e/=t,n+=e*(i%t),i=Math.floor(i/t);return n}var Jt=(i,t,e)=>Math.min(e,Math.max(t,i)),ee=(i,t,e)=>i+(t-i)*e,Ne=(i,t,e)=>{let n=Jt((e-i)/(t-i),0,1);return n*n*(3-2*n)};function Qs(i,t,e=0,n=i.length-1){for(;e<n;){let s=e+n>>1;i[s]<t?e=s+1:n=s}return e}var Un={lat:24.86,lon:67.01},ni=Math.PI/180,ye=2.55;function dn(i,t,e=1){let n=i*ni,s=t*ni;return[e*Math.cos(n)*Math.sin(s),e*Math.sin(n),e*Math.cos(n)*Math.cos(s)]}function Si(i,t){let e=i*ni,n=t*ni,s=[Math.cos(n),0,-Math.sin(n)],r=[-Math.sin(e)*Math.sin(n),Math.cos(e),-Math.sin(e)*Math.cos(n)];return{east:s,north:r}}function Nh(i){let t=i.naturalWidth||i.width,e=i.naturalHeight||i.height,s=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(t,e):Object.assign(document.createElement("canvas"),{width:t,height:e})).getContext("2d",{willReadFrequently:!0});s.drawImage(i,0,0);let r=s.getImageData(0,0,t,e).data,a=new Uint8Array(t*e),o=new Uint8Array(t*e),l=new Uint8Array(t*e);for(let c=0;c<t*e;c++)a[c]=r[c*4],o[c]=r[c*4+1],l[c]=r[c*4+2];return{W:t,H:e,land:a,lit:o,pk:l}}var js=(i,t,e,n)=>{let s=Jt(Math.floor((n+180)/360*i.W),0,i.W-1),r=Jt(Math.floor((90-e)/180*i.H),0,i.H-1);return t[r*i.W+s]};function Fh(i,t,e,n=11){let s=Dn(n),r=new Float32Array(t*4),a=new Float32Array(t*4),o=new Float32Array(t*4),l=0,c=(M,P,R,L,b,E=0,F=0,B=9,H=0)=>{r[M*4]=P[0],r[M*4+1]=P[1],r[M*4+2]=P[2],r[M*4+3]=L,a[M*4]=R[0],a[M*4+1]=R[1],a[M*4+2]=R[2],a[M*4+3]=b,o[M*4]=E,o[M*4+1]=F,o[M*4+2]=B,o[M*4+3]=H},u=(M,P)=>{let R=Math.hypot(M[0],M[1],M[2])||1;return[M[0]/R*P,M[1]/R*P,M[2]/R*P]},d=e.length,m=e.map(M=>M.country).sort().map(M=>e.findIndex(P=>P.country===M)),_=e.map(()=>[]),y=[];for(let M=0;M<i.H;M++)for(let P=0;P<i.W;P++){let R=i.lit[M*i.W+P];R>10&&_[m[Math.round(R/20)-1]]?.push([P,M]),i.pk[M*i.W+P]>127&&y.push([P,M])}let f=_.map((M,P)=>M.length?P:-1).filter(M=>M>=0),p=[];for(let M of f)p.push((p.at(-1)??0)+Math.sqrt(_[M].length));let C=()=>{let M=s()*p.at(-1);return f[p.findIndex(P=>P>=M)]},D=(M,P=0,R=0)=>[90-(M[1]+R)/i.H*180,(M[0]+P)/i.W*360-180],S=dn(Un.lat,Un.lon),w=e.map(M=>{let P=dn(M.lat,M.lon),R=Jt(S[0]*P[0]+S[1]*P[1]+S[2]*P[2],-1,1),L=Math.acos(R);return{b:P,om:L,lift:.16+.5*(L/Math.PI)}}),T=(M,P)=>{let R=Math.sin(M.om)||1e-6,L=Math.sin((1-P)*M.om)/R,b=Math.sin(P*M.om)/R,E=[S[0]*L+M.b[0]*b,S[1]*L+M.b[1]*b,S[2]*L+M.b[2]*b],F=ye*(1.004+M.lift*Math.pow(Math.sin(Math.PI*P),.85)),B=Math.hypot(E[0],E[1],E[2]);return[E[0]/B*F,E[1]/B*F,E[2]/B*F]},I=0,x=0;for(let M=0;M<t;M++){let P=M%100;if(!f.length&&P>=44&&P<66&&!(P>=52&&P<54)&&(P=0),P<44){let R=0,L=0,b=0;do{let $=Qe(l,2),et=Qe(l,3);l++,L=($*2-1)*180,R=Math.asin(2*et-1)/ni,b++}while(js(i,i.land,R,L)<128&&b<60);let E=Math.abs(js(i,i.land,R+1.2,L)-js(i,i.land,R-1.2,L))+Math.abs(js(i,i.land,R,L+1.6)-js(i,i.land,R,L-1.6))>90,F=dn(R,L,ye),{east:B,north:H}=Si(R,L),J=.55+(s()-.5)*.9,X=u([B[0]*Math.cos(J)+H[0]*Math.sin(J),B[1]*Math.cos(J)+H[1]*Math.sin(J),B[2]*Math.cos(J)+H[2]*Math.sin(J)],E?.13:.1);c(M,F,X,E?.95:.5+s()*.25,E?.5:.22+s()*.1)}else if(P<52){let R=C(),L=_[R][Math.floor(s()*_[R].length)],[b,E]=D(L,s(),s()),F=dn(b,E,ye*1.004),{east:B,north:H}=Si(b,E),J=(s()-.5)*1.4,X=u([B[0]*Math.cos(J)+H[0]*Math.sin(J),B[1]*Math.cos(J)+H[1]*Math.sin(J),B[2]*Math.cos(J)+H[2]*Math.sin(J)],.09);c(M,F,X,.85,.9,1+R,0,9)}else if(P<54){let R=y[Math.floor(s()*y.length)],[L,b]=D(R,s(),s()),E=dn(L,b,ye*1.004),{east:F}=Si(L,b);c(M,E,u(F,.08),.6,.5)}else if(P<63){let R=I++%d,L=s(),b=w[R],E=T(b,L),F=T(b,Math.min(1,L+.01)),B=u([F[0]-E[0],F[1]-E[1],F[2]-E[2]],.12);c(M,E,B,.95,.55+.4*L,1+R,L*.8,9)}else if(P<66){let R=x++%d,L=e[R],b=dn(L.lat,L.lon),{east:E,north:F}=Si(L.lat,L.lon);if(s()<.5){let B=s(),H=[b[0]*(ye+B*.4),b[1]*(ye+B*.4),b[2]*(ye+B*.4)];c(M,H,u(b,.1),1,.95,1+R,.8+.2*B,9)}else{let B=s()*Math.PI*2,H=.15,J=[b[0]*(ye+.4),b[1]*(ye+.4),b[2]*(ye+.4)],X=[J[0]+(E[0]*Math.cos(B)+F[0]*Math.sin(B))*H,J[1]+(E[1]*Math.cos(B)+F[1]*Math.sin(B))*H,J[2]+(E[2]*Math.cos(B)+F[2]*Math.sin(B))*H],$=u([-E[0]*Math.sin(B)+F[0]*Math.cos(B),-E[1]*Math.sin(B)+F[1]*Math.cos(B),-E[2]*Math.sin(B)+F[2]*Math.cos(B)],.12);c(M,X,$,1,1,1+R,1,9)}}else if(P<68){let R=dn(Un.lat,Un.lon),{east:L,north:b}=Si(Un.lat,Un.lon),E=s()*Math.PI*2,F=.1+.12*s(),B=[R[0]*ye*1.005,R[1]*ye*1.005,R[2]*ye*1.005],H=[B[0]+(L[0]*Math.cos(E)+b[0]*Math.sin(E))*F,B[1]+(L[1]*Math.cos(E)+b[1]*Math.sin(E))*F,B[2]+(L[2]*Math.cos(E)+b[2]*Math.sin(E))*F];c(M,H,u([-L[0]*Math.sin(E)+b[0]*Math.cos(E),-L[1]*Math.sin(E)+b[1]*Math.cos(E),-L[2]*Math.sin(E)+b[2]*Math.cos(E)],.08),.7,.7,0,0,9)}else if(P<84)if(s()<.5){let R=Math.round((s()*2-1)*5.5)*15*(Math.abs(s())>0,1),L=(s()*2-1)*180,{east:b}=Si(R,L);c(M,dn(R,L,ye*1.001),u(b,.2),.32,.1,0,0,9)}else{let R=Math.round((s()*2-1)*12)*15,L=Math.asin(s()*2-1)/ni,{north:b}=Si(L,R);c(M,dn(L,R,ye*1.001),u(b,.2),.32,.1,0,0,9)}else if(s()<.35){let R=s()<.5?1:2,L=s()*Math.PI*2,b=ye*(R===1?1.22:1.42),E=R===1?.5:-.35,F=Math.cos(L)*b,B=Math.sin(L)*b,H=[F,B*Math.sin(E),B*Math.cos(E)];c(M,H,u([-Math.sin(L),Math.cos(L)*Math.sin(E),Math.cos(L)*Math.cos(E)],.14),.4,.15,0,0,0)}else{let R=s()*2-1,L=s()*Math.PI*2,b=ye*(1.08+s()*1.1),E=Math.sqrt(1-R*R);c(M,[Math.cos(L)*E*b,R*b,Math.sin(L)*E*b],u([s()-.5,s()-.5,s()-.5],.05),.22,.2,0,0,0)}}return{pos:r,dir:a,aux:o}}function Ll(i,t){return{yaw:-t*ni,pitch:i*ni}}function ao(i){return{N:i,pos:new Float32Array(i*4),dir:new Float32Array(i*4),aux:new Float32Array(i*4)}}function Nn(i,t,e,n,s,r,a,o,l,c,u=0,d=0,h=0,m=0){let _=t*4;i.pos[_]=e,i.pos[_+1]=n,i.pos[_+2]=s,i.pos[_+3]=l,i.dir[_]=r,i.dir[_+1]=a,i.dir[_+2]=o,i.dir[_+3]=c,i.aux[_]=u,i.aux[_+1]=d,i.aux[_+2]=h,i.aux[_+3]=m}function Oh(i,t,e){Nn(i,t,(e()-.5)*2,(e()-.5)*2,(e()-.5)*2,.02,0,0,0,.1)}function Dl(i,t,e,{r0:n=3.5,r1:s=11,w:r=.15,heat:a=.18,sx:o=1,sy:l=1,sz:c=1,fx:u=0}={}){for(let d=t;d<i.N;d++){let h=e()*2-1,m=e()*Math.PI*2,_=Math.sqrt(1-h*h),y=n+(s-n)*Math.pow(e(),.7),f=e()*Math.PI;Nn(i,d,Math.cos(m)*_*y*o,h*y*l,Math.sin(m)*_*y*c,Math.cos(f)*.07,Math.sin(f)*.07,0,r*(.5+e()),a+(e()-.5)*.2,0,0,u,e())}}function Bh(i,t,e,n,s,r){let a=2*(s+r),o=i*a,l,c,u=0,d=0;return o<s?(l=-s/2+o,c=r/2,u=1):(o-=s)<r?(l=s/2,c=r/2-o,d=-1):(o-=r)<s?(l=s/2-o,c=-r/2,u=-1):(o-=s,l=-s/2,c=-r/2+o,d=1),{x:e+l,y:n+c,dx:u,dy:d}}var de=384;function os(i,t,e,n){let s=new Float32Array(t*e),r=new Float32Array(t*e),a=2*n+1;for(let o=0;o<e;o++){let l=0,c=o*t;for(let u=-n;u<=n;u++)l+=i[c+Jt(u,0,t-1)];for(let u=0;u<t;u++)s[c+u]=l/a,l+=i[c+Jt(u+n+1,0,t-1)]-i[c+Jt(u-n,0,t-1)]}for(let o=0;o<t;o++){let l=0;for(let c=-n;c<=n;c++)l+=s[Jt(c,0,e-1)*t+o];for(let c=0;c<e;c++)r[c*t+o]=l/a,l+=s[Jt(c+n+1,0,e-1)*t+o]-s[Jt(c-n,0,e-1)*t+o]}return r}function Ul(i,t,e){let n=new Float32Array(e),s=new Float32Array(t*e),r=0;for(let a=0;a<e;a++){let o=0;for(let l=0;l<t;l++)o+=i[a*t+l],s[a*t+l]=o;if(o>0)for(let l=0;l<t;l++)s[a*t+l]/=o;r+=o,n[a]=r}for(let a=0;a<e;a++)n[a]/=r||1;return{rowCdf:n,colCdf:s}}function zh(i,t,e,n){let s=t*e,r=new Float32Array(s),a=new Float32Array(s),o=new Float32Array(s),l=new Float32Array(s);for(let c=1;c<e-1;c++)for(let u=1;u<t-1;u++){let d=c*t+u,h=i[d+1]-i[d-1]+.5*(i[d-t+1]-i[d-t-1]+i[d+t+1]-i[d+t-1]),m=i[d+t]-i[d-t]+.5*(i[d+t-1]-i[d-t-1]+i[d+t+1]-i[d-t+1]);r[d]=h*h,a[d]=h*m,o[d]=m*m,l[d]=Math.sqrt(h*h+m*m)}return{bxx:os(r,t,e,n),bxy:os(a,t,e,n),byy:os(o,t,e,n),mag:l}}function Vh({bxx:i,bxy:t,byy:e},n,s,r){let a=i[n]-e[n],o=2*t[n],l=Jt(Math.hypot(a,o)/(i[n]+e[n]+1e-6),0,1),c=.5*Math.atan2(o,a)+Math.PI/2,u=Jt(l*1.6,0,1),d=Math.cos(2*c)*u+Math.cos(2*s)*(1-u),h=Math.sin(2*c)*u+Math.sin(2*s)*(1-u);return{ang:.5*Math.atan2(h,d)+(r()-.5)*.35,k:u}}function kh(i,t,e){let n=Dn(e.seed??5),s=i.naturalWidth||i.width,r=i.naturalHeight||i.height,a=e.w/e.h,o=0,l=0,c=s,u=r;s/r>a?(c=r*a,o=(s-c)/2):(u=s/a,l=(r-u)/2);let d=320,h=Math.round(d/a),_=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(d,h):Object.assign(document.createElement("canvas"),{width:d,height:h})).getContext("2d",{willReadFrequently:!0});_.drawImage(i,o,l,c,u,0,0,d,h);let y=_.getImageData(0,0,d,h).data,f=new Float32Array(d*h);for(let b=0;b<d*h;b++)f[b]=(.2126*y[b*4]+.7152*y[b*4+1]+.0722*y[b*4+2])/255;let p=zh(os(f,d,h,1),d,h,2),C=.1,D=new Float32Array(d*h),S=0;for(let b=0;b<d*h;b++)D[b]=Math.max(0,p.mag[b]-C),S=Math.max(S,p.mag[b]);let{rowCdf:w,colCdf:T}=Ul(D,d,h),I=new Float32Array(t*4),x=new Float32Array(t*4),M=e.w/d;for(let b=0;b<t;b++){let E=Qs(w,Qe(b,2)),F=Qs(T,Qe(b,3),E*d,E*d+d-1)-E*d,B=E*d+Jt(F,0,d-1),{ang:H,k:J}=Vh(p,B,0,n),X=Jt(p.mag[B]/(S*.5+1e-6),0,1),$=M*(1.6+2.2*J*(.6+.4*n()));I[b*4]=((F+n())/d-.5)*e.w,I[b*4+1]=(.5-(E+n())/h)*e.h,I[b*4+2]=(n()-.5)*.03,I[b*4+3]=.45+.7*X,x[b*4]=Math.cos(H)*$,x[b*4+1]=-Math.sin(H)*$,x[b*4+3]=.1+.28*X+(n()-.5)*.06}let P=[...Array(t).keys()].sort((b,E)=>I[E*4+3]-I[b*4+3]),R=new Float32Array(t*4),L=new Float32Array(t*4);return P.forEach((b,E)=>{R.set(I.subarray(b*4,b*4+4),E*4),L.set(x.subarray(b*4,b*4+4),E*4)}),{pos:R,dir:L}}function Nl(i,t,e={}){let n=e.height??6.6,s=e.warm??.5,r=Dn(e.seed??7),a=i.naturalWidth||i.width,o=i.naturalHeight||i.height,l=Math.round(de*o/a),u=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(de,l):Object.assign(document.createElement("canvas"),{width:de,height:l})).getContext("2d",{willReadFrequently:!0});u.drawImage(i,0,0,de,l);let d=u.getImageData(0,0,de,l).data,h=de*l,m=new Float32Array(h),_=new Float32Array(h),y=new Float32Array(h),f=new Int8Array(h);for(let b=0;b<h;b++){let E=d[b*4]/255,F=d[b*4+1]/255,B=d[b*4+2]/255,H=d[b*4+3]/255,J=Math.max(E,F,B),X=Math.min(E,F,B),$=J-X,et=J>0?$/J:0,mt=0;$>0&&(mt=J===E?(F-B)/$%6:J===F?(B-E)/$+2:(E-F)/$+4,mt*=60,mt<0&&(mt+=360));let vt=.2126*E+.7152*F+.0722*B;m[b]=H,_[b]=vt,H>.35&&J>.3&&(et>.68&&mt>30&&mt<66||et>.35&&mt>195&&mt<250)?(f[b]=mt>150&&mt<300?-1:1,y[b]=H):y[b]=H*(1-vt)}let p=os(y,de,l,7),C=os(y,de,l,2),D=zh(C,de,l,4),S=new Float32Array(h),w=new Float32Array(h);for(let b=0;b<h;b++){let E=m[b];if(E<.05)continue;let F=Math.max(0,y[b]-.62*p[b]),B=Math.floor(b/de)/l,H=1-.78*Math.min(1,Math.max(0,(B-.58)/.4));S[b]=(f[b]?2.2:F*2.8+y[b]*.03)*(f[b]?1:H),w[b]=f[b]?0:E*Math.pow(_[b],2.2)*Math.max(.04,1-1.5*C[b]-.5*y[b])*H}let T=Ul(S,de,l),I=Ul(w,de,l),x=new Float32Array(t*4),M=new Float32Array(t*4),P=new Float32Array(t*4),R=n/l,L=-.95;for(let b=0;b<t;b++){let E=Qe(b,2),F=Qe(b,3),B=b%5>=3,{rowCdf:H,colCdf:J}=B?I:T,X=Qs(H,E),$=Qs(J,F,X*de,X*de+de-1)-X*de,et=X*de+Jt($,0,de-1),mt=$+r(),vt=X+r(),{ang:Qt,k:kt}=Vh(D,et,L,r),Wt=(.05+.13*kt*(.6+.4*r()))*(n/6.6),Z=Math.cos(Qt)*Wt,tt=-Math.sin(Qt)*Wt,_t=_[et],It=f[et],pt=(_t-.45)*.55+(r()-.5)*.16-vt/l*.15;x[b*4]=(mt/de-.5)*de*R,x[b*4+1]=(.5-vt/l)*l*R,x[b*4+2]=pt,x[b*4+3]=It?1.6:B?.1+r()*.16:.85+r()*.4,M[b*4]=Z,M[b*4+1]=tt,M[b*4+2]=0,M[b*4+3]=It===1?.95:It===-1?.08:B?s+.2+(r()-.5)*.12:.12+(r()-.5)*.1,P[b*4+1]=mt/de,P[b*4+3]=B?1:0}return{pos:x,dir:M,aux:P,worldH:n,worldW:de*R,eye:{x:(.575-.5)*de*R,y:(.5-.365)*l*R}}}var Pg=Math.PI*2,ii={W:5.6,H:2.94,dz:4.6,x:1.15};function Fl(i,t=9,e=null,n=51){let s=ao(i),r=Dn(n),{W:a,H:o,dz:l,x:c}=ii,u=Math.min(i,e?Math.floor(i*.55):t*1300),d=Math.ceil(u/t),h=e&&e.map((y,f)=>kh(y,d,{w:a,h:o,seed:60+f})),m=0;for(;m<u;m++){let y=m%t,f=Math.floor(m/t),p=y%2===0?-c:c,C=Math.sin(y*1.7)*.18,D=-y*l;if(!h||f%8===0){let S=Bh(Qe(h?f/8:f,2),0,p,C,a+.14,o+.14);Nn(s,m,S.x,S.y,D,S.dx*.2,S.dy*.2,0,.55+r()*.4,.2+y/t*.6,0,0,10)}else{let S=h[y],w=f*4;Nn(s,m,p+S.pos[w],C+S.pos[w+1],D-.08+S.pos[w+2],S.dir[w],S.dir[w+1],0,S.pos[w+3],S.dir[w+3],0,0,10)}}for(let y of[-1,1])for(let f=0;f<1500&&m<i;f++,m++){let p=6-Qe(f,2)*(t*l+12);Nn(s,m,y*5.6,-2.5,p,0,0,-.5,.45,.15+r()*.1)}let _=m;for(;m<Math.min(i,_+Math.floor(i*.4));m++){let y=r()*Pg,f=4.5+r()*6;Nn(s,m,Math.cos(y)*f,Math.sin(y)*f*.7,-r()*60+10,0,0,-.18,.22+r()*.2,.2+r()*.25,0,0,8,r())}for(;m<i;m++)Oh(s,m,r);return s}function Ol(i,t,e=71){let n=ao(i),s=Dn(e),r=53,a=7,o=.19,l=Math.max(1,...(t||[]).map(d=>d.count)),c=0,u=-1.2;for(let d=0;d<2600&&c<i;d++,c++){let h=d%a;Nn(n,c,(Qe(d,2)-.5)*r*o,u,(h-3)*o,.2,0,0,.32,.12,0,0,0)}for(let d=0;d<r*a&&c<i;d++){let h=Math.floor(d/a),m=d%a,_=t?.[d]?.count??0,y=.05+Math.pow(_/l,.7)*3.1,f=4+Math.round(y*46),p=(h-(r-1)/2)*o,C=(m-3)*o;for(let D=0;D<f&&c<i;D++,c++){let S=u+D/f*y,w=(s()-.5)*.1;Nn(n,c,p+w,S,C,0,.09,0,.4+(_?.5:0)+s()*.2,_?.35+_/l*.6:.1,0,h/r,5,s())}}return Dl(n,c,s,{r0:5,r1:12,w:.14,sx:1.6,sy:.6}),n}function Bl(i,t=97){let e=ao(i),n=Dn(t);return Dl(e,0,n,{r0:2.5,r1:12,w:.24,heat:.16}),e}var Zt={portrait:0,globe:1,corridor:2,calm:3,skyline:4,calm2:5,portrait2:6},fn={};for(let i of Object.values(Zt))fn[i]=-16*i;var Wh={0:{w:6.4,h:6.7},1:{w:6,h:6},2:{w:6.8,h:3.8},3:{w:10,h:6},4:{w:10.6,h:5},5:{w:10,h:6},6:{w:6.4,h:6.7}};function Gh(i,t){if(!i.length||t<=i[0].c)return 0;for(let e=0;e<i.length-1;e++)if(t<=i[e+1].c)return e+(t-i[e].c)/Math.max(1,i[e+1].c-i[e].c);return i.length-1}var Ig=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e},Lg=(i,t)=>{i.y+=t,i.pitch=-Math.atan2(t,i.D)},Hh=(i,t,e,n)=>{let s=i.uFormRot.value;s[t*2]=e,s[t*2+1]=n},Dg=new V,Ug=(i,t,e)=>{let n=Math.cos(t),s=Math.sin(t),r=Math.cos(e),a=Math.sin(e),o=-s*i[0]+n*i[2];return Dg.set(n*i[0]+s*i[2],r*i[1]-a*o,a*i[1]+r*o)},tr={portrait:{layer:Zt.portrait,pose(i,t,e,n){let s=n.dir.introEase??1;return e.z+=(1-s)*3.2,e.roll+=(1-s)*.06,e}},dive:{from:Zt.portrait,to:Zt.globe,mix:i=>Ne(.3,.84,i),pose(i,t,e,n){let s=n.dir,r=s.segs.find(y=>y.def===tr.portrait),a=s.segs.find(y=>y.def===tr.globe),o=s.eye||{x:.5,y:.7},l=r?s.poseOf(r,1,n):e,c=a?s.poseOf(a,0,n):e,u=.28,d=Jt(t/.5,0,1),h=Jt((t-.5)/.5,0,1),m=d*d*(3-2*d),_=h*h*(3-2*h);if(t<.5){let y=Math.pow(m,1.6);return{x:ee(l.x,o.x,y),y:ee(l.y,o.y,y),z:ee(l.z,u,Math.pow(m,1.25)),yaw:ee(l.yaw,0,y),pitch:ee(l.pitch,0,y),roll:ee(l.roll,0,y),ppx:ee(l.ppx,0,y),ppy:ee(l.ppy,0,y),sz:l.sz}}return{x:ee(o.x,c.x,_),y:ee(o.y,c.y,_),z:ee(u,c.z,_),yaw:0,pitch:0,roll:0,ppx:ee(0,c.ppx,_),ppy:ee(0,c.ppy,_),sz:ee(l.sz,c.sz,_)}},update(i,t){t.u.uSwirl.value=1.5;let e=Jt(Math.floor(t.p*4.4),0,3);i.idx!==e&&(i.idx=e,i.el.querySelectorAll(".method__step").forEach((n,s)=>{n.classList.toggle("is-on",s===e),n.classList.toggle("is-past",s<e)}))}},globe:{layer:Zt.globe,update(i,t){let e=t.u,n=i.places||=i.steps.filter(f=>f.el.dataset.lat).map(f=>({lat:+f.el.dataset.lat,lon:+f.el.dataset.lon,name:f.el.querySelector("h3")?.textContent.trim()||""})),s=Gh(i.steps,t.yc),r=Ll(Un.lat,Un.lon),a=[{yaw:r.yaw,pitch:r.pitch*.9}];for(let f of n){let p=Ll(f.lat,f.lon);a.push({yaw:p.yaw,pitch:p.pitch*.82+.1})}let o=Jt(Math.floor(s),0,a.length-1),l=Jt(o+1,0,a.length-1),c=Ne(0,1,s-o),u=a[o],d=a[l],h=u.yaw+Ig(u.yaw,d.yaw)*c+Math.sin(t.t*.07)*.02,m=ee(u.pitch,d.pitch,c);Hh(e,Zt.globe,h,m);let _=e.uReveal.value;for(let f=0;f<n.length&&f<15;f++){let p=f+1;_[1+f]=Ne(p-.85,p-.2,s)+1-Ne(.3,.75,Math.abs(s-p))}i.state={si:s};let y=t.dir.hud;if(y){let f=Math.round(s)-1,p=n[f];if(p){let C=Ug(dn(p.lat,p.lon,ye+.55),h,m),D=Ne(.15,.45,C.z/(ye+.55));C.z+=fn[Zt.globe],y.place("globe",p.name,C,D*(1-Ne(.2,.42,Math.abs(s-(f+1))))*Ne(.6,.96,t.fade??1))}t.dir._hudFrame=t.frameId}},pose(i,t,e){let n=i.state?.si??0,s=i.places?.length??0,r=Math.max(0,1-Math.abs(n-Math.round(n))*2.2)*(n>=.6&&n<=s+.4?1:0);return e.z-=r*1.2,e}},corridor:{layer:Zt.corridor,update(i,t){let e=Gh(i.steps,t.yc);i.state={si:e},i.lastFrame=t.frameId;let n=t.dir.slabs;n&&n.frame(t.dt,{si:e,vel:t.dir.vel,near:(t.fade??1)>.05,ptr:t.dir.ptr,time:t.t})},pose(i,t,e){let n=Math.max(0,i.steps.length-2),s=Jt((i.state?.si??0)-1,0,n),r=Math.floor(s),a=Math.min(n,r+1),o=Ne(0,1,s-r),l=c=>c%2===0?-ii.x:ii.x;return e.x+=ee(l(r),l(a),o),e.z-=s*ii.dz,e.sz-=s*ii.dz,e}},calm:{layer:Zt.calm},calm2:{layer:Zt.calm2},skyline:{layer:Zt.skyline,update(i,{u:t,p:e,t:n}){t.uFx.value.w=Ne(0,.55,e),Hh(t,Zt.skyline,Math.sin(n*.15)*.05,0)},pose(i,t,e){return Lg(e,1),e.x+=ee(-.5,.5,t),e}},portrait2:{layer:Zt.portrait2,pose(i,t,e,n){let s=n.dir.eye||{x:.5,y:.7},r=Ne(0,.2,t),a=Math.pow(r,.9),o=fn[Zt.portrait2]+.28;return{x:ee(s.x,e.x,a),y:ee(s.y,e.y,a),z:ee(o,e.z,a),yaw:e.yaw,pitch:e.pitch,roll:e.roll,ppx:ee(0,e.ppx,a),ppy:ee(0,e.ppy,a),sz:e.sz}}}};var Ng=32,Fg=Math.tan(Ng*Math.PI/360),Og=i=>i*i*(3-2*i);var oo=class{constructor(t,{mobile:e=!1}={}){this.stage=t,this.u=t.strokes.uniforms,this.mobile=e,this.segs=[],this.phases=[],this.y=0,this.yPrev=0,this.vel=0,this.ptr={x:0,y:0,ax:0,ay:0,tx:9,ty:9,moved:0},this.trail=[],this.intro={done:!1},this.data={},this.active=null,this.pose={x:0,y:0,z:12,yaw:0,pitch:0,roll:0,ppx:0,ppy:0},this._v=new V,this.ready=!1,this.frameId=0,this.slabs=null,this.hud=null,this._hudFrame=-1}measure(){let t=window.innerHeight,e=window.innerWidth,n=window.scrollY;this.vh=t,this.vw=e;let s=[];for(let r of document.querySelectorAll("main > section[data-scene]")){if(r.hidden)continue;let a=tr[r.dataset.scene];if(!a)continue;let o=r.getBoundingClientRect(),l=o.top+n,c=r.querySelector(".stage__subject"),u=r.querySelector(".stage__frame"),d={cx:e*.5,cy:t*.5,w:e*.6,h:t*.7};if(c&&u){let m=u.getBoundingClientRect(),_=c.getBoundingClientRect();d={cx:m.left+m.width/2,cy:m.top-_.top+m.height/2,w:Math.max(40,m.width),h:Math.max(40,m.height)}}let h=[...r.querySelectorAll(".stage__copy .step, .step")].filter((m,_,y)=>y.indexOf(m)===_);s.push({el:r,def:a,id:r.id,top:l,bottom:l+o.height,len:o.height,box:d,steps:h.map(m=>{let _=m.getBoundingClientRect();return{el:m,c:_.top+n+_.height/2,top:_.top+n,h:_.height}})})}this.segs=s,this.buildPhases()}buildPhases(){let t=this.vh,e=this.segs,n=e.length,s=e.slice(0,-1).map((a,o)=>Math.min(t*.45,a.len*.3,e[o+1].len*.3)),r=[];for(let a=0;a<n;a++){let o=e[a];if(r.push({type:"seg",seg:o,i:a,y0:a>0?o.top+s[a-1]:-1e5,y1:a<n-1?o.bottom-s[a]:o.bottom}),a<n-1){let l=o.bottom-s[a];r.push({type:"trans",from:o,to:e[a+1],i:a,y0:l,y1:Math.max(e[a+1].top+s[a],l+1)})}}this.phases=r,this.ready=r.length>0}setPointer(t,e){this.ptr.tx=this.ptr.ax=t,this.ptr.ty=this.ptr.ay=e}update(t,e){if(!this.ready)return;let n=this.stage,s=this.u,r=this.vh,a=window.scrollY,o=1-Math.exp(-t*6.5);this.yPrev=this.y,this.y+=(a-this.y)*o,Math.abs(a-this.y)<.05&&(this.y=a);let l=(this.y-this.yPrev)/Math.max(t,.001)/r;this.vel+=(l-this.vel)*(1-Math.exp(-t*8));let c=this.y+r*.5,u=this.findPhase(c);this.frameId++;let d={dir:this,u:s,t:e,dt:t,vh:r,yc:c,mobile:this.mobile,data:this.data,stage:n,frameId:this.frameId},h,m,_,y;if(u.type==="seg"){let f=u.seg,p=Jt((c-u.y0)/Math.max(1,u.y1-u.y0),0,1),C=f.def;h=C.from??C.layer,m=C.to??C.layer,_=C.mix?C.mix(p,d):0,C.update?.(f,{...d,p,mix:_,fade:1}),y=this.poseOf(f,p,d),this.active=f}else{let f=u.from,p=u.to,C=Jt((c-u.y0)/(u.y1-u.y0),0,1),D=Og(C);h=f.def.to??f.def.layer,m=p.def.from??p.def.layer,_=h===m?0:C,f.def.update?.(f,{...d,p:1,mix:0,fade:1-D}),p.def.update?.(p,{...d,p:0,mix:0,fade:D});let S=this.poseOf(f,1,d),w=this.poseOf(p,0,d);y=this.blendPose(S,w,D),this.active=D<.5?f:p}this.hud&&this._hudFrame!==this.frameId&&this.hud.hideAll(),this.slabs&&!this.segs.some(f=>f.def===tr.corridor&&f.lastFrame===this.frameId)&&this.slabs.hide(),this.intro.done||(window.scrollY>this.vh*.6?(this.intro.done=!0,this.introEase=1,s.uIntro.value=1,s.uLight.value=1,s.uWarm.value=0):(h=-1,m=Zt.portrait,_=this.intro.mix)),s.uForms.value.set(h,m),s.uMix.value=_,this.applyPose(y,t,e),n.fin&&(n.fin.uniforms.uCA.value=n.tier.ca?.004+Jt(Math.abs(this.vel)*.35,0,1)*.11:0),s.uStreak.value=.8+Jt(Math.abs(this.vel)*2.5,0,1.1)}findPhase(t){let e=this.phases;for(let n=0;n<e.length;n++)if(t<=e[n].y1)return e[n];return e[e.length-1]}poseOf(t,e,n){let s=t.def,r=t.box,a=s.layer??s.from,o=s.nom||Wh[a]||{w:6,h:6},l=Math.min(r.w/o.w,r.h/o.h),c=this.vh/(2*Fg*l),u=r.cx/this.vw*2-1,d=1-r.cy/this.vh*2,h={x:0,y:0,z:(fn[a]??0)+c,yaw:0,pitch:0,roll:0,ppx:u,ppy:d,D:c,sz:fn[a]??0};return s.pose&&(h=s.pose(t,e,h,n)||h),h}blendPose(t,e,n){let s={};for(let r of["x","y","z","yaw","pitch","roll","ppx","ppy","sz"])s[r]=ee(t[r],e[r],n);return s}applyPose(t,e,n){let s=this.stage,r=s.camera,a=this.ptr,o=1-Math.exp(-e*5);a.x+=(a.ax-a.x)*o,a.y+=(a.ay-a.y)*o;let l=.5;r.position.set(t.x+a.x*.35*l+Math.sin(n*.13)*.06,t.y+a.y*.22*l+Math.cos(n*.11)*.04,t.z),r.rotation.set(t.pitch-a.y*.018,t.yaw-a.x*.03,t.roll,"YXZ"),s.pp.x=t.ppx,s.pp.y=t.ppy,this.u.uFocus.value.set(Math.abs(t.z-(t.sz??0)),15,.012),this.updatePointerWorld(t)}updatePointerWorld(t){let e=this.stage,n=e.camera,s=this.ptr,r=this.u,a=fn[this.active?.def.layer??this.active?.def.from??0]??0;n.updateMatrixWorld();let o=s.tx,l=s.ty,u=this._v.set(o-0,l-0,.5).unproject(n).sub(n.position).normalize(),d=(a-n.position.z)/(u.z||-1e-4),h=n.position.clone().addScaledVector(u,d);r.uPtr.value.copy(h),s.moved*=.9;let m=r.uTrail.value;(!this._lastHit||this._lastHit.distanceTo(h)>.12)&&(this._lastHit=h.clone(),m.unshift(m.pop()),m[0].set(h.x,h.y,h.z,1));for(let _ of m)_.w*=.955}};var Bg=`
uniform float uBend;
uniform float uHover;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec3 p = position;
  float b = sin(uv.x * 3.14159) * sin(uv.y * 3.14159);
  p.z += b * uBend * 0.55 + uHover * 0.12 * b;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
}`,zg=`
precision highp float;
uniform sampler2D uTex;
uniform float uAspect;     // image w/h
uniform float uSlab;       // slab w/h
uniform float uReveal;
uniform float uHover;
uniform float uFade;
uniform float uMode;       // 0 ink, 1 scan
uniform float uTime;
uniform float uLoaded;
varying vec2 vUv;

float hash(vec2 p) { p = fract(p * vec2(123.34, 345.45)); p += dot(p, p + 34.23); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3. - 2. * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
float fbm(vec2 p) { return .5 * vnoise(p) + .25 * vnoise(p * 2.03) + .125 * vnoise(p * 4.1) + .0625 * vnoise(p * 8.3); }

vec2 cover(vec2 uv) {
  vec2 s = vec2(1.);
  if (uAspect > uSlab) s.x = uSlab / uAspect; else s.y = uAspect / uSlab;
  return (uv - .5) * s + .5;
}

void main() {
  vec2 uv = cover(vUv);
  // hover: split the channels and push the image a touch
  vec2 off = vec2(.006, 0.) * uHover;
  vec3 img = vec3(texture2D(uTex, uv + off).r, texture2D(uTex, uv).g, texture2D(uTex, uv - off).b);
  vec3 sig = vec3(1., .82, .25);

  float vis, edge;
  if (uMode < .5) {
    float n = fbm(vUv * vec2(7., 4.) + 3.1);
    float front = uReveal * 1.25 - .12;
    vis = smoothstep(n - .02, n + .02, front);
    edge = smoothstep(.09, 0., abs(n - front)) * step(.001, uReveal) * step(uReveal, .999);
  } else {
    float x = vUv.x;
    vis = smoothstep(uReveal - .004, uReveal - .03, x);
    edge = exp(-pow((x - uReveal) * 40., 2.)) * step(.001, uReveal) * step(uReveal, .999);
  }
  // not developed yet: nothing at all, and no depth either, so the sketch drawn just behind the slab shows through
  float a = max(vis * uLoaded, edge) * smoothstep(0., .3, uFade);
  if (a < .1) discard;
  vec3 col = img * vis * uLoaded * .76; // a white page stays under the bloom threshold instead of glaring
  // slabs that are not the focus sink into blue; passed ones are already faded out
  float lum = dot(col, vec3(.3, .59, .11));
  col = mix(vec3(lum) * vec3(.45, .6, 1.), col, smoothstep(.2, 1., uFade));
  col *= .18 + .82 * uFade;
  col += sig * (edge * 1.4 + uHover * .04);
  gl_FragColor = vec4(col, a);
}`,lo=class{constructor(t){this.stage=t,this.items=[],this.hover=-1,this.ray=new Ps,this.ndc=new Et(9,9),this.loader=new As,this.loadedAny=!1}build(t){let{W:e,H:n,dz:s,x:r}=ii,a=fn[Zt.corridor];t.forEach((o,l)=>{let c=new ce({vertexShader:Bg,fragmentShader:zg,depthWrite:!0,depthTest:!0,transparent:!0,uniforms:{uTex:{value:null},uAspect:{value:1.905},uSlab:{value:e/n},uReveal:{value:0},uHover:{value:0},uFade:{value:0},uMode:{value:o.mode==="scan"?1:0},uTime:{value:0},uLoaded:{value:0},uBend:{value:0}}}),u=new Ae(new pi(e,n,28,14),c),d=l%2===0?-r:r,h=Math.sin(l*1.7)*.18;u.position.set(d,h,a-l*s-.03),u.renderOrder=-1,u.visible=!1,u.userData.k=l,this.stage.scene.add(u),this.items.push({mesh:u,mat:c,href:o.href,src:o.src,loaded:!1,reveal:0,fade:0,hover:0})})}load(t){let e=this.items[t];!e||e.loading||e.loaded||(e.loading=!0,this.loader.load(e.src,n=>{n.colorSpace=Oe,n.minFilter=Sn,n.anisotropy=4,e.mat.uniforms.uTex.value=n,e.mat.uniforms.uAspect.value=n.image.width/n.image.height,e.loaded=!0}))}frame(t,{si:e,vel:n,near:s,ptr:r,time:a}){let o=this.stage.camera,l=-1;if(s){this.ndc.set(r.tx,r.ty),this.ray.setFromCamera(this.ndc,o);let u=this.items.filter(h=>h.mesh.visible&&h.reveal>.05).map(h=>h.mesh),d=this.ray.intersectObjects(u,!1)[0];d&&(l=d.object.userData.k)}this.hover=l;let c=e-1;for(let u=0;u<this.items.length;u++){let d=this.items[u],h=u-c,m=s&&h>-1.4&&h<3.4;if(d.mesh.visible=s&&h>-2&&h<4.5&&(d.fade>.02||m),s&&h<2.6&&this.load(u),d.mesh.visible){let _=d.mat.uniforms;d.reveal+=(Ne(-.8,-.05,-h)-d.reveal)*(1-Math.exp(-t*3.2));let y=h>=0?ee(1,.28,Ne(0,2.4,h)):ee(1,0,Ne(.05,.45,-h));d.fade+=((m?y:0)-d.fade)*(1-Math.exp(-t*5)),d.hover+=((l===u?1:0)-d.hover)*(1-Math.exp(-t*8)),_.uReveal.value=d.reveal,_.uFade.value=d.fade,_.uHover.value=d.hover,_.uLoaded.value+=((d.loaded?1:0)-_.uLoaded.value)*(1-Math.exp(-t*4)),_.uBend.value=Jt(n*1.4,-1,1),_.uTime.value=a,d.mesh.scale.setScalar(1+d.hover*.025)}}document.documentElement.classList.toggle("slab-hover",l>=0)}open(){let t=this.items[this.hover];t?.href&&window.open(t.href,"_blank","noopener")}hide(){for(let t of this.items)t.mesh.visible=!1;this.hover=-1,document.documentElement.classList.remove("slab-hover")}};var co=class{constructor(t){this.stage=t,this.root=document.createElement("div"),this.root.className="hud",this.root.setAttribute("aria-hidden","true"),document.body.appendChild(this.root),this.labels=new Map,this.v=new V}label(t,e){let n=this.labels.get(t);if(!n){let s=document.createElement("span");s.className="hud__tag",this.root.appendChild(s),n={el:s,on:!1},this.labels.set(t,n)}return n.el.textContent!==e&&(n.el.textContent=e),n}place(t,e,n,s){let r=this.label(t,e);if(s<.02){r.on&&(r.el.style.opacity="0",r.on=!1);return}let a=this.stage.camera;this.v.copy(n).project(a);let o=(this.v.x*.5+.5)*window.innerWidth,l=(-this.v.y*.5+.5)*window.innerHeight;r.el.style.transform=`translate3d(${o.toFixed(1)}px, ${l.toFixed(1)}px, 0)`,r.el.style.opacity=s.toFixed(2),r.on=!0}hideAll(){for(let t of this.labels.values())t.on&&(t.el.style.opacity="0",t.on=!1)}};var zl=i=>new Promise((t,e)=>{let n=new Image;n.decoding="async",n.onload=()=>t(n),n.onerror=e,n.src=i}),er=()=>new Promise(i=>setTimeout(i,0)),Vg=/[?&]debug(?:&|$)/.test(location.search),nr=(i,t)=>{let e=performance.now(),n=t();return Vg&&console.info(`[boot] ${i} ${(performance.now()-e).toFixed(0)}ms`),n};async function qy({canvas:i,tier:t,strokes:e,mobile:n,onProgress:s=()=>{}}){let r=new ro(i,{tier:t,maxStrokes:e}),a=r.strokes.uniforms,o=!1;r.renderer.debug.onShaderError=()=>{o=!0},s(.15);let[l,c]=await Promise.all([zl("./assets/img/hassaan.webp"),zl("./assets/img/earth.png")]);s(.35),await er();let u=r.strokes.texW*r.strokes.texW,d=nr("portrait",()=>Nl(l,u,{height:6.6,warm:.5,seed:7}));r.strokes.setForm(Zt.portrait,d),s(.55),await er();let h=nr("portrait2",()=>Nl(l,u,{height:6.6,warm:.72,seed:7}));r.strokes.setForm(Zt.portrait2,h),s(.7),await er();let m=[...document.querySelectorAll("#clients [data-country]")].map(b=>({country:b.dataset.country,lat:+b.dataset.lat,lon:+b.dataset.lon}));r.strokes.setForm(Zt.globe,nr("globe",()=>Fh(Nh(c),u,m))),s(.75),await er();let _=[[Zt.corridor,()=>Fl(u,document.querySelectorAll("#work .site").length||5)],[Zt.calm,()=>Bl(u)],[Zt.skyline,()=>Ol(u,null)],[Zt.calm2,()=>Bl(u,98)]];for(let b=0;b<_.length;b++)r.strokes.setForm(_[b][0],nr("form "+_[b][0],_[b][1])),s(.75+.2*(b+1)/_.length),await er();let y=a.uFormOff.value;for(let b of Object.values(Zt))y[b*3]=0,y[b*3+1]=0,y[b*3+2]=fn[b];let f=new oo(r,{mobile:n});f.eye=d.eye,f.introEase=0,f.intro={done:!1,mix:0};let p=[...document.querySelectorAll("#work .site")].map(b=>({src:b.querySelector(".site__shot img")?.currentSrc||b.querySelector(".site__shot img")?.src,href:b.querySelector("a.stretch")?.href,mode:b.querySelector(".site__shot")?.dataset.slab==="scan"?"scan":"ink"}));p.length&&p.every(b=>b.src)&&(f.slabs=new lo(r),f.slabs.build(p),document.documentElement.classList.add("slabs"),window.addEventListener("click",b=>{f.slabs.hover>=0&&!b.target.closest("a, button, input, textarea, summary, dialog")&&f.slabs.open()}),document.querySelectorAll("#work .site").forEach((b,E)=>{b.addEventListener("pointerenter",()=>{f.slabs.textHover=E}),b.addEventListener("pointerleave",()=>{f.slabs.textHover=-1})})),f.hud=new co(r),f.measure(),r.onFrame((b,E)=>f.update(b,E));let C=b=>{f.setPointer(b.clientX/window.innerWidth*2-1,1-b.clientY/window.innerHeight*2)};window.addEventListener("pointermove",C,{passive:!0});let D=0;window.addEventListener("pointerdown",b=>{b.pointerType!=="mouse"&&(C(b),clearTimeout(D),D=setTimeout(()=>f.setPointer(9,9),700))},{passive:!0});let S=window.innerWidth,w=window.innerHeight,T=0,I=()=>{let b=Math.abs(window.innerWidth-S),E=Math.abs(window.innerHeight-w);n&&b<2&&E<140||(S=window.innerWidth,w=window.innerHeight,r.resize(),f.measure())};if(window.addEventListener("resize",()=>{clearTimeout(T),T=setTimeout(I,140)}),new ResizeObserver(()=>{clearTimeout(T),T=setTimeout(()=>f.measure(),200)}).observe(document.querySelector("main")),i.addEventListener("webglcontextlost",b=>{b.preventDefault(),r.stop(),r.onLost?.()}),a.uForms.value.set(-1,Zt.portrait),a.uMix.value=0,a.uIntro.value=0,a.uLight.value=0,a.uWarm.value=-.3,await r.renderer.compileAsync(r.scene,r.camera),o)throw r.dispose(),new Error("shader compile failed");r.start(),s(1);let M=async()=>{let b=await Promise.all(p.map(B=>B.src?zl(B.src).catch(()=>null):null));if(!b.length||!b.every(Boolean))return;let E=nr("corridor sketches",()=>Fl(u,p.length,b)),F=()=>{let B=a.uForms.value;if(B.x===Zt.corridor||B.y===Zt.corridor)return void setTimeout(F,400);r.strokes.setForm(Zt.corridor,E)};F()},P=()=>new Promise(b=>{fo.timeline({onComplete:()=>{f.intro.done=!0,setTimeout(M,150),b()}}).to(f.intro,{mix:1,duration:2.6,ease:"power2.inOut"},0).to(a.uIntro,{value:1,duration:2.3,ease:"power1.inOut"},.15).to(f,{introEase:1,duration:3.2,ease:"power3.out"},0).to(a.uLight,{value:1,duration:1.8,ease:"power2.inOut"},1.5).to(a.uWarm,{value:0,duration:2.2,ease:"power2.inOut"},1.4)}),R=b=>{r.strokes.setForm(Zt.skyline,Ol(u,b))},L=()=>{fo.timeline().to(a.uBright,{value:.95,duration:.3,ease:"power2.out"}).to(a.uBright,{value:.42,duration:1.2,ease:"power2.inOut"}).fromTo(a.uSwirl,{value:1.6},{value:3.4,duration:.5,yoyo:!0,repeat:1,ease:"sine.inOut"},0)};return window.addEventListener("smh:send",L),{stage:r,dir:f,playIntro:P,setSkyline:R}}export{qy as boot};
