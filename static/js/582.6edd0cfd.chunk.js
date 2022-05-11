"use strict";(self.webpackChunkr3f_examples=self.webpackChunkr3f_examples||[]).push([[582],{6895:function(e,t,r){r.d(t,{o:function(){return u}});var n=r(4925),i=r(7462),a=r(2794),o=r(2791),s=r(233),c=["domElement","camera","onChange","onStart","onEnd"],u=o.forwardRef((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enableDamping:!0},t=arguments.length>1?arguments[1]:void 0,r=e.domElement,u=e.camera,l=e.onChange,f=e.onStart,y=e.onEnd,h=(0,n.Z)(e,c),v=(0,a.w)((function(e){return e.invalidate})),p=(0,a.w)((function(e){return e.camera})),d=(0,a.w)((function(e){return e.gl})),x=(0,a.w)((function(e){return e.events})),b=r||x.connected||d.domElement,g=u||p,m=o.useMemo((function(){return new s.o(g)}),[g]);return o.useEffect((function(){m.connect(b);var e=function(e){v(),l&&l(e)};return m.addEventListener("change",e),f&&m.addEventListener("start",f),y&&m.addEventListener("end",y),function(){m.dispose(),m.removeEventListener("change",e),f&&m.removeEventListener("start",f),y&&m.removeEventListener("end",y)}}),[l,f,y,m,v,b]),(0,a.x)((function(){return m.update()}),-1),o.createElement("primitive",(0,i.Z)({ref:t,object:m,enableDamping:!0},h))}))},1846:function(e,t,r){r.d(t,{u:function(){return u}});var n=r(9439),i=r(5671),a=r(3144),o=r(136),s=r(9388),c=r(7760),u=function(e){(0,o.Z)(r,e);var t=(0,s.Z)(r);function r(e){var n;return(0,i.Z)(this,r),(n=t.call(this,e)).defaultDPI=90,n.defaultUnit="px",n}return(0,a.Z)(r,[{key:"load",value:function(e,t,r,n){var i=this,a=new c.FileLoader(i.manager);a.setPath(i.path),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,(function(r){try{t(i.parse(r))}catch(a){n?n(a):console.error(a),i.manager.itemError(e)}}),r,n)}},{key:"parse",value:function(e){var t=this;function r(e,t,r,n,a,o,s,c){if(0!=t&&0!=r){n=n*Math.PI/180,t=Math.abs(t),r=Math.abs(r);var u=(s.x-c.x)/2,l=(s.y-c.y)/2,f=Math.cos(n)*u+Math.sin(n)*l,y=-Math.sin(n)*u+Math.cos(n)*l,h=t*t,v=r*r,p=f*f,d=y*y,x=p/h+d/v;if(x>1){var b=Math.sqrt(x);h=(t*=b)*t,v=(r*=b)*r}var g=h*d+v*p,m=(h*v-g)/g,k=Math.sqrt(Math.max(0,m));a===o&&(k=-k);var w=k*t*y/r,A=-k*r*f/t,M=Math.cos(n)*w-Math.sin(n)*A+(s.x+c.x)/2,P=Math.sin(n)*w+Math.cos(n)*A+(s.y+c.y)/2,T=i(1,0,(f-w)/t,(y-A)/r),S=i((f-w)/t,(y-A)/r,(-f-w)/t,(-y-A)/r)%(2*Math.PI);e.currentPath.absellipse(M,P,t,r,T,T+S,0===o,n)}else e.lineTo(c.x,c.y)}function i(e,t,r,n){var i=e*r+t*n,a=Math.sqrt(e*e+t*t)*Math.sqrt(r*r+n*n),o=Math.acos(Math.max(-1,Math.min(1,i/a)));return e*n-t*r<0&&(o=-o),o}function a(e,t){t=Object.assign({},t);var r={};if(e.hasAttribute("class"))for(var n=e.getAttribute("class").split(/\s/).filter(Boolean).map((function(e){return e.trim()})),i=0;i<n.length;i++)r=Object.assign(r,p["."+n[i]]);function a(n,i,a){void 0===a&&(a=function(e){return e.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),e}),e.hasAttribute(n)&&(t[i]=a(e.getAttribute(n))),r[n]&&(t[i]=a(r[n])),e.style&&""!==e.style[n]&&(t[i]=a(e.style[n]))}function o(e){return Math.max(0,Math.min(1,f(e)))}function s(e){return Math.max(0,f(e))}return e.hasAttribute("id")&&(r=Object.assign(r,p["#"+e.getAttribute("id")])),a("fill","fill"),a("fill-opacity","fillOpacity",o),a("fill-rule","fillRule"),a("opacity","opacity",o),a("stroke","stroke"),a("stroke-opacity","strokeOpacity",o),a("stroke-width","strokeWidth",s),a("stroke-linejoin","strokeLineJoin"),a("stroke-linecap","strokeLineCap"),a("stroke-miterlimit","strokeMiterLimit",s),a("visibility","visibility"),t}function o(e,t){return e-(t-e)}function s(e,t,r){if("string"!==typeof e)throw new TypeError("Invalid input: "+typeof e);var n,i={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},a=0,o=!0,s="",c="",u=[];function l(e,t,r){var n=new SyntaxError('Unexpected character "'+e+'" at index '+t+".");throw n.partial=r,n}function f(){""!==s&&(""===c?u.push(Number(s)):u.push(Number(s)*Math.pow(10,Number(c)))),s="",c=""}for(var y=e.length,h=0;h<y;h++)if(n=e[h],Array.isArray(t)&&t.includes(u.length%r)&&i.FLAGS.test(n))a=1,s=n,f();else{if(0===a){if(i.WHITESPACE.test(n))continue;if(i.DIGIT.test(n)||i.SIGN.test(n)){a=1,s=n;continue}if(i.POINT.test(n)){a=2,s=n;continue}i.COMMA.test(n)&&(o&&l(n,h,u),o=!0)}if(1===a){if(i.DIGIT.test(n)){s+=n;continue}if(i.POINT.test(n)){s+=n,a=2;continue}if(i.EXP.test(n)){a=3;continue}i.SIGN.test(n)&&1===s.length&&i.SIGN.test(s[0])&&l(n,h,u)}if(2===a){if(i.DIGIT.test(n)){s+=n;continue}if(i.EXP.test(n)){a=3;continue}i.POINT.test(n)&&"."===s[s.length-1]&&l(n,h,u)}if(3===a){if(i.DIGIT.test(n)){c+=n;continue}if(i.SIGN.test(n)){if(""===c){c+=n;continue}1===c.length&&i.SIGN.test(c)&&l(n,h,u)}}i.WHITESPACE.test(n)?(f(),a=0,o=!1):i.COMMA.test(n)?(f(),a=0,o=!0):i.SIGN.test(n)?(f(),a=1,s=n):i.POINT.test(n)?(f(),a=2,s=n):l(n,h,u)}return f(),u}var u=["mm","cm","in","pt","pc","px"],l={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:12,pc:1,px:-1},px:{px:1}};function f(e){var r="px";if("string"===typeof e||e instanceof String)for(var n=0,i=u.length;n<i;n++){var a=u[n];if(e.endsWith(a)){r=a,e=e.substring(0,e.length-a.length);break}}var o=void 0;return"px"===r&&"px"!==t.defaultUnit?o=l.in[t.defaultUnit]/t.defaultDPI:(o=l[r][t.defaultUnit])<0&&(o=l[r].in*t.defaultDPI),o*parseFloat(e)}function y(e){var t=e.elements;return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function h(e){var t=e.elements;return Math.sqrt(t[3]*t[3]+t[4]*t[4])}var v=[],p={},d=[],x=new c.Matrix3,b=new c.Matrix3,g=new c.Matrix3,m=new c.Matrix3,k=new c.Vector2,w=new c.Vector3,A=new c.Matrix3,M=(new DOMParser).parseFromString(e,"image/svg+xml");return function e(t,i){if(1===t.nodeType){var u=function(e){if(!(e.hasAttribute("transform")||"use"===e.nodeName&&(e.hasAttribute("x")||e.hasAttribute("y"))))return null;var t=function(e){var t=new c.Matrix3,r=x;if("use"===e.nodeName&&(e.hasAttribute("x")||e.hasAttribute("y"))){var n=f(e.getAttribute("x")),i=f(e.getAttribute("y"));t.translate(n,i)}if(e.hasAttribute("transform"))for(var a=e.getAttribute("transform").split(")"),o=a.length-1;o>=0;o--){var u=a[o].trim();if(""!==u){var l=u.indexOf("("),y=u.length;if(l>0&&l<y){var h=u.slice(0,l),v=s(u.slice(l+1));switch(r.identity(),h){case"translate":if(v.length>=1){var p=v[0],d=p;v.length>=2&&(d=v[1]),r.translate(p,d)}break;case"rotate":if(v.length>=1){var k=0,w=0,A=0;k=-v[0]*Math.PI/180,v.length>=3&&(w=v[1],A=v[2]),b.identity().translate(-w,-A),g.identity().rotate(k),m.multiplyMatrices(g,b),b.identity().translate(w,A),r.multiplyMatrices(b,m)}break;case"scale":if(v.length>=1){var M=v[0],P=M;v.length>=2&&(P=v[1]),r.scale(M,P)}break;case"skewX":1===v.length&&r.set(1,Math.tan(v[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":1===v.length&&r.set(1,0,0,Math.tan(v[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":6===v.length&&r.set(v[0],v[2],v[4],v[1],v[3],v[5],0,0,1)}}t.premultiply(r)}}return t}(e);d.length>0&&t.premultiply(d[d.length-1]);return A.copy(t),d.push(t),t}(t),l=!1,M=null;switch(t.nodeName){case"svg":break;case"style":!function(e){if(!e.sheet||!e.sheet.cssRules||!e.sheet.cssRules.length)return;for(var t=0;t<e.sheet.cssRules.length;t++){var r=e.sheet.cssRules[t];if(1===r.type)for(var i=r.selectorText.split(/,/gm).filter(Boolean).map((function(e){return e.trim()})),a=0;a<i.length;a++){var o=Object.fromEntries(Object.entries(r.style).filter((function(e){return""!==(0,n.Z)(e,2)[1]})));p[i[a]]=Object.assign(p[i[a]]||{},o)}}}(t);break;case"g":i=a(t,i);break;case"path":i=a(t,i),t.hasAttribute("d")&&(M=function(e){for(var t=new c.ShapePath,n=new c.Vector2,i=new c.Vector2,a=new c.Vector2,u=!0,l=!1,f=e.getAttribute("d").match(/[a-df-z][^a-df-z]*/gi),y=0,h=f.length;y<h;y++){var v=f[y],p=v.charAt(0),d=v.slice(1).trim();!0===u&&(l=!0,u=!1);var x=void 0;switch(p){case"M":for(var b=0,g=(x=s(d)).length;b<g;b+=2)n.x=x[b+0],n.y=x[b+1],i.x=n.x,i.y=n.y,0===b?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y),0===b&&a.copy(n);break;case"H":for(var m=0,k=(x=s(d)).length;m<k;m++)n.x=x[m],i.x=n.x,i.y=n.y,t.lineTo(n.x,n.y),0===m&&!0===l&&a.copy(n);break;case"V":for(var w=0,A=(x=s(d)).length;w<A;w++)n.y=x[w],i.x=n.x,i.y=n.y,t.lineTo(n.x,n.y),0===w&&!0===l&&a.copy(n);break;case"L":for(var M=0,P=(x=s(d)).length;M<P;M+=2)n.x=x[M+0],n.y=x[M+1],i.x=n.x,i.y=n.y,t.lineTo(n.x,n.y),0===M&&!0===l&&a.copy(n);break;case"C":for(var T=0,S=(x=s(d)).length;T<S;T+=6)t.bezierCurveTo(x[T+0],x[T+1],x[T+2],x[T+3],x[T+4],x[T+5]),i.x=x[T+2],i.y=x[T+3],n.x=x[T+4],n.y=x[T+5],0===T&&!0===l&&a.copy(n);break;case"S":for(var C=0,V=(x=s(d)).length;C<V;C+=4)t.bezierCurveTo(o(n.x,i.x),o(n.y,i.y),x[C+0],x[C+1],x[C+2],x[C+3]),i.x=x[C+0],i.y=x[C+1],n.x=x[C+2],n.y=x[C+3],0===C&&!0===l&&a.copy(n);break;case"Q":for(var E=0,I=(x=s(d)).length;E<I;E+=4)t.quadraticCurveTo(x[E+0],x[E+1],x[E+2],x[E+3]),i.x=x[E+0],i.y=x[E+1],n.x=x[E+2],n.y=x[E+3],0===E&&!0===l&&a.copy(n);break;case"T":for(var L=0,N=(x=s(d)).length;L<N;L+=2){var O=o(n.x,i.x),z=o(n.y,i.y);t.quadraticCurveTo(O,z,x[L+0],x[L+1]),i.x=O,i.y=z,n.x=x[L+0],n.y=x[L+1],0===L&&!0===l&&a.copy(n)}break;case"A":for(var W=0,G=(x=s(d,[3,4],7)).length;W<G;W+=7)if(x[W+5]!=n.x||x[W+6]!=n.y){var q=n.clone();n.x=x[W+5],n.y=x[W+6],i.x=n.x,i.y=n.y,r(t,x[W],x[W+1],x[W+2],x[W+3],x[W+4],q,n),0===W&&!0===l&&a.copy(n)}break;case"m":for(var B=0,D=(x=s(d)).length;B<D;B+=2)n.x+=x[B+0],n.y+=x[B+1],i.x=n.x,i.y=n.y,0===B?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y),0===B&&a.copy(n);break;case"h":for(var R=0,H=(x=s(d)).length;R<H;R++)n.x+=x[R],i.x=n.x,i.y=n.y,t.lineTo(n.x,n.y),0===R&&!0===l&&a.copy(n);break;case"v":for(var j=0,F=(x=s(d)).length;j<F;j++)n.y+=x[j],i.x=n.x,i.y=n.y,t.lineTo(n.x,n.y),0===j&&!0===l&&a.copy(n);break;case"l":for(var Z=0,U=(x=s(d)).length;Z<U;Z+=2)n.x+=x[Z+0],n.y+=x[Z+1],i.x=n.x,i.y=n.y,t.lineTo(n.x,n.y),0===Z&&!0===l&&a.copy(n);break;case"c":for(var X=0,J=(x=s(d)).length;X<J;X+=6)t.bezierCurveTo(n.x+x[X+0],n.y+x[X+1],n.x+x[X+2],n.y+x[X+3],n.x+x[X+4],n.y+x[X+5]),i.x=n.x+x[X+2],i.y=n.y+x[X+3],n.x+=x[X+4],n.y+=x[X+5],0===X&&!0===l&&a.copy(n);break;case"s":for(var Y=0,Q=(x=s(d)).length;Y<Q;Y+=4)t.bezierCurveTo(o(n.x,i.x),o(n.y,i.y),n.x+x[Y+0],n.y+x[Y+1],n.x+x[Y+2],n.y+x[Y+3]),i.x=n.x+x[Y+0],i.y=n.y+x[Y+1],n.x+=x[Y+2],n.y+=x[Y+3],0===Y&&!0===l&&a.copy(n);break;case"q":for(var _=0,K=(x=s(d)).length;_<K;_+=4)t.quadraticCurveTo(n.x+x[_+0],n.y+x[_+1],n.x+x[_+2],n.y+x[_+3]),i.x=n.x+x[_+0],i.y=n.y+x[_+1],n.x+=x[_+2],n.y+=x[_+3],0===_&&!0===l&&a.copy(n);break;case"t":for(var $=0,ee=(x=s(d)).length;$<ee;$+=2){var te=o(n.x,i.x),re=o(n.y,i.y);t.quadraticCurveTo(te,re,n.x+x[$+0],n.y+x[$+1]),i.x=te,i.y=re,n.x=n.x+x[$+0],n.y=n.y+x[$+1],0===$&&!0===l&&a.copy(n)}break;case"a":for(var ne=0,ie=(x=s(d,[3,4],7)).length;ne<ie;ne+=7)if(0!=x[ne+5]||0!=x[ne+6]){var ae=n.clone();n.x+=x[ne+5],n.y+=x[ne+6],i.x=n.x,i.y=n.y,r(t,x[ne],x[ne+1],x[ne+2],x[ne+3],x[ne+4],ae,n),0===ne&&!0===l&&a.copy(n)}break;case"Z":case"z":t.currentPath.autoClose=!0,t.currentPath.curves.length>0&&(n.copy(a),t.currentPath.currentPoint.copy(n),u=!0);break;default:console.warn(v)}l=!1}return t}(t));break;case"rect":i=a(t,i),M=function(e){var t=f(e.getAttribute("x")||0),r=f(e.getAttribute("y")||0),n=f(e.getAttribute("rx")||e.getAttribute("ry")||0),i=f(e.getAttribute("ry")||e.getAttribute("rx")||0),a=f(e.getAttribute("width")),o=f(e.getAttribute("height")),s=.448084975506,u=new c.ShapePath;u.moveTo(t+n,r),u.lineTo(t+a-n,r),(0!==n||0!==i)&&u.bezierCurveTo(t+a-n*s,r,t+a,r+i*s,t+a,r+i);u.lineTo(t+a,r+o-i),(0!==n||0!==i)&&u.bezierCurveTo(t+a,r+o-i*s,t+a-n*s,r+o,t+a-n,r+o);u.lineTo(t+n,r+o),(0!==n||0!==i)&&u.bezierCurveTo(t+n*s,r+o,t,r+o-i*s,t,r+o-i);u.lineTo(t,r+i),(0!==n||0!==i)&&u.bezierCurveTo(t,r+i*s,t+n*s,r,t+n,r);return u}(t);break;case"polygon":i=a(t,i),M=function(e){function t(e,t,r){var a=f(t),o=f(r);0===i?n.moveTo(a,o):n.lineTo(a,o),i++}var r=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,n=new c.ShapePath,i=0;return e.getAttribute("points").replace(r,t),n.currentPath.autoClose=!0,n}(t);break;case"polyline":i=a(t,i),M=function(e){function t(e,t,r){var a=f(t),o=f(r);0===i?n.moveTo(a,o):n.lineTo(a,o),i++}var r=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,n=new c.ShapePath,i=0;return e.getAttribute("points").replace(r,t),n.currentPath.autoClose=!1,n}(t);break;case"circle":i=a(t,i),M=function(e){var t=f(e.getAttribute("cx")||0),r=f(e.getAttribute("cy")||0),n=f(e.getAttribute("r")||0),i=new c.Path;i.absarc(t,r,n,0,2*Math.PI);var a=new c.ShapePath;return a.subPaths.push(i),a}(t);break;case"ellipse":i=a(t,i),M=function(e){var t=f(e.getAttribute("cx")||0),r=f(e.getAttribute("cy")||0),n=f(e.getAttribute("rx")||0),i=f(e.getAttribute("ry")||0),a=new c.Path;a.absellipse(t,r,n,i,0,2*Math.PI);var o=new c.ShapePath;return o.subPaths.push(a),o}(t);break;case"line":i=a(t,i),M=function(e){var t=f(e.getAttribute("x1")||0),r=f(e.getAttribute("y1")||0),n=f(e.getAttribute("x2")||0),i=f(e.getAttribute("y2")||0),a=new c.ShapePath;return a.moveTo(t,r),a.lineTo(n,i),a.currentPath.autoClose=!1,a}(t);break;case"defs":l=!0;break;case"use":i=a(t,i);var P=(t.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),T=t.viewportElement.getElementById(P);T?e(T,i):console.warn("SVGLoader: 'use node' references non-existent node id: "+P)}M&&(void 0!==i.fill&&"none"!==i.fill&&M.color.setStyle(i.fill),function(e,t){function r(e){w.set(e.x,e.y,1).applyMatrix3(t),e.set(w.x,w.y)}for(var n=function(e){return 0!==e.elements[1]||0!==e.elements[3]}(t),i=e.subPaths,a=0,o=i.length;a<o;a++)for(var s=i[a].curves,c=0;c<s.length;c++){var u=s[c];u.isLineCurve?(r(u.v1),r(u.v2)):u.isCubicBezierCurve?(r(u.v0),r(u.v1),r(u.v2),r(u.v3)):u.isQuadraticBezierCurve?(r(u.v0),r(u.v1),r(u.v2)):u.isEllipseCurve&&(n&&console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."),k.set(u.aX,u.aY),r(k),u.aX=k.x,u.aY=k.y,u.xRadius*=y(t),u.yRadius*=h(t))}}(M,A),v.push(M),M.userData={node:t,style:i});for(var S=t.childNodes,C=0;C<S.length;C++){var V=S[C];l&&"style"!==V.nodeName&&"defs"!==V.nodeName||e(V,i)}u&&(d.pop(),d.length>0?A.copy(d[d.length-1]):A.identity())}}(M.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:v,xml:M.documentElement}}}],[{key:"createShapes",value:function(e){var t=999999999,r=0,n=1,i=2,a=3,o=4,s=5,u=6,l={loc:r,t:0};function f(e,t,n,a){var o=e.x,s=t.x,c=n.x,u=a.x,f=e.y,h=t.y,v=n.y,p=a.y,d=(u-c)*(f-v)-(p-v)*(o-c),x=(p-v)*(s-o)-(u-c)*(h-f),b=d/x,g=((s-o)*(f-v)-(h-f)*(o-c))/x;if(0===x&&0!==d||b<=0||b>=1||g<0||g>1)return null;if(0===d&&0===x){for(var m=0;m<2;m++){if(y(0===m?n:a,e,t),l.loc==r){var k=0===m?n:a;return{x:k.x,y:k.y,t:l.t}}if(l.loc==i)return{x:+(o+l.t*(s-o)).toPrecision(10),y:+(f+l.t*(h-f)).toPrecision(10),t:l.t}}return null}for(var w=0;w<2;w++)if(y(0===w?n:a,e,t),l.loc==r){var A=0===w?n:a;return{x:A.x,y:A.y,t:l.t}}return{x:+(o+b*(s-o)).toPrecision(10),y:+(f+b*(h-f)).toPrecision(10),t:b}}function y(e,t,c){var f,y=c.x-t.x,h=c.y-t.y,v=e.x-t.x,p=e.y-t.y,d=y*p-v*h;if(e.x===t.x&&e.y===t.y)return l.loc=r,void(l.t=0);if(e.x===c.x&&e.y===c.y)return l.loc=n,void(l.t=1);d<-Number.EPSILON?l.loc=a:d>Number.EPSILON?l.loc=o:y*v<0||h*p<0?l.loc=s:Math.sqrt(y*y+h*h)<Math.sqrt(v*v+p*p)?l.loc=u:(f=0!==y?v/y:p/h,l.loc=i,l.t=f)}function h(e,t,r){var n=new c.Vector2;t.getCenter(n);var i=[];return r.forEach((function(t){t.boundingBox.containsPoint(n)&&function(e,t){for(var r=[],n=[],i=1;i<e.length;i++)for(var a=e[i-1],o=e[i],s=function(e){var i=t[e-1],s=t[e],u=f(a,o,i,s);null!==u&&void 0===r.find((function(e){return e.t<=u.t+Number.EPSILON&&e.t>=u.t-Number.EPSILON}))&&(r.push(u),n.push(new c.Vector2(u.x,u.y)))},u=1;u<t.length;u++)s(u);return n}(e,t.points).forEach((function(e){i.push({identifier:t.identifier,isCW:t.isCW,point:e})}))})),i.sort((function(e,t){return e.point.x-t.point.x})),i}var v=0,p=t,d=-999999999,x=e.subPaths.map((function(e){for(var r=e.getPoints(),n=-999999999,i=t,a=-999999999,o=t,s=0;s<r.length;s++){var u=r[s];u.y>n&&(n=u.y),u.y<i&&(i=u.y),u.x>a&&(a=u.x),u.x<o&&(o=u.x)}return d<=a&&(d=a+1),p>=o&&(p=o-1),{curves:e.curves,points:r,isCW:c.ShapeUtils.isClockWise(r),identifier:v++,boundingBox:new c.Box2(new c.Vector2(o,i),new c.Vector2(a,n))}})),b=(x=x.filter((function(e){return e.points.length>1}))).map((function(t){return function(e,t,r,n,i){null!==i&&void 0!==i&&""!==i||(i="nonzero");var a=new c.Vector2;e.boundingBox.getCenter(a);var o=h([new c.Vector2(r,a.y),new c.Vector2(n,a.y)],e.boundingBox,t);o.sort((function(e,t){return e.point.x-t.point.x}));var s=[],u=[];o.forEach((function(t){t.identifier===e.identifier?s.push(t):u.push(t)}));for(var l=s[0].point.x,f=[],y=0;y<u.length&&u[y].point.x<l;)f.length>0&&f[f.length-1]===u[y].identifier?f.pop():f.push(u[y].identifier),y++;if(f.push(e.identifier),"evenodd"===i){var v=f.length%2===0,p=f[f.length-2];return{identifier:e.identifier,isHole:v,for:p}}if("nonzero"===i){for(var d=!0,x=null,b=null,g=0;g<f.length;g++){var m=f[g];d?(b=t[m].isCW,d=!1,x=m):b!==t[m].isCW&&(b=t[m].isCW,d=!0)}return{identifier:e.identifier,isHole:d,for:x}}console.warn('fill-rule: "'+i+'" is currently not implemented.')}(t,x,p,d,e.userData.style.fillRule)})),g=[];return x.forEach((function(e){if(!b[e.identifier].isHole){var t=new c.Shape;t.curves=e.curves,b.filter((function(t){return t.isHole&&t.for===e.identifier})).forEach((function(e){var r=x[e.identifier],n=new c.Path;n.curves=r.curves,t.holes.push(n)})),g.push(t)}})),g}},{key:"getStrokeStyle",value:function(e,t,r,n,i){return{strokeColor:t=void 0!==t?t:"#000",strokeWidth:e=void 0!==e?e:1,strokeLineJoin:r=void 0!==r?r:"miter",strokeLineCap:n=void 0!==n?n:"butt",strokeMiterLimit:i=void 0!==i?i:4}}},{key:"pointsToStroke",value:function(e,t,n,i){var a=[],o=[],s=[];if(0===r.pointsToStrokeWithBuffers(e,t,n,i,a,o,s))return null;var u=new c.BufferGeometry;return u.setAttribute("position",new c.Float32BufferAttribute(a,3)),u.setAttribute("normal",new c.Float32BufferAttribute(o,3)),u.setAttribute("uv",new c.Float32BufferAttribute(s,2)),u}},{key:"pointsToStrokeWithBuffers",value:function(e,t,r,n,i,a,o,s){var u=new c.Vector2,l=new c.Vector2,f=new c.Vector2,y=new c.Vector2,h=new c.Vector2,v=new c.Vector2,p=new c.Vector2,d=new c.Vector2,x=new c.Vector2,b=new c.Vector2,g=new c.Vector2,m=new c.Vector2,k=new c.Vector2,w=new c.Vector2,A=new c.Vector2,M=new c.Vector2,P=new c.Vector2;r=void 0!==r?r:12,n=void 0!==n?n:.001,s=void 0!==s?s:0;var T=(e=function(e){for(var t=!1,r=1,i=e.length-1;r<i;r++)if(e[r].distanceTo(e[r+1])<n){t=!0;break}if(!t)return e;var a=[];a.push(e[0]);for(var o=1,s=e.length-1;o<s;o++)e[o].distanceTo(e[o+1])>=n&&a.push(e[o]);return a.push(e[e.length-1]),a}(e)).length;if(T<2)return 0;var S,C,V,E,I,L,N=e[0].equals(e[T-1]),O=e[0],z=t.strokeWidth/2,W=1/(T-1),G=0,q=!1,B=0,D=3*s,R=2*s;K(e[0],e[1],u).multiplyScalar(z),d.copy(e[0]).sub(u),x.copy(e[0]).add(u),b.copy(d),g.copy(x);for(var H=1;H<T;H++){S=e[H],C=H===T-1?N?e[1]:void 0:e[H+1];var j=u;if(K(O,S,j),f.copy(j).multiplyScalar(z),m.copy(S).sub(f),k.copy(S).add(f),V=G+W,E=!1,void 0!==C){K(S,C,l),f.copy(l).multiplyScalar(z),w.copy(S).sub(f),A.copy(S).add(f),I=!0,f.subVectors(C,O),j.dot(f)<0&&(I=!1),1===H&&(q=I),f.subVectors(C,S),f.normalize();var F=Math.abs(j.dot(f));if(0!==F){var Z=z/F;f.multiplyScalar(-Z),y.subVectors(S,O),h.copy(y).setLength(Z).add(f),M.copy(h).negate();var U=h.length(),X=y.length();y.divideScalar(X),v.subVectors(C,S);var J=v.length();switch(v.divideScalar(J),y.dot(M)<X&&v.dot(M)<J&&(E=!0),P.copy(h).add(S),M.add(S),L=!1,E?I?(A.copy(M),k.copy(M)):(w.copy(M),m.copy(M)):te(),t.strokeLineJoin){case"bevel":re(I,E,V);break;case"round":ne(I,E),I?ee(S,m,w,V,0):ee(S,A,k,V,1);break;default:var Y=z*t.strokeMiterLimit/U;if(Y<1){if("miter-clip"!==t.strokeLineJoin){re(I,E,V);break}ne(I,E),I?(v.subVectors(P,m).multiplyScalar(Y).add(m),p.subVectors(P,w).multiplyScalar(Y).add(w),$(m,V,0),$(v,V,0),$(S,V,.5),$(S,V,.5),$(v,V,0),$(p,V,0),$(S,V,.5),$(p,V,0),$(w,V,0)):(v.subVectors(P,k).multiplyScalar(Y).add(k),p.subVectors(P,A).multiplyScalar(Y).add(A),$(k,V,1),$(v,V,1),$(S,V,.5),$(S,V,.5),$(v,V,1),$(p,V,1),$(S,V,.5),$(p,V,1),$(A,V,1))}else E?(I?($(x,G,1),$(d,G,0),$(P,V,0),$(x,G,1),$(P,V,0),$(M,V,1)):($(x,G,1),$(d,G,0),$(P,V,1),$(d,G,0),$(M,V,0),$(P,V,1)),I?w.copy(P):A.copy(P)):I?($(m,V,0),$(P,V,0),$(S,V,.5),$(S,V,.5),$(P,V,0),$(w,V,0)):($(k,V,1),$(P,V,1),$(S,V,.5),$(S,V,.5),$(P,V,1),$(A,V,1)),L=!0}}else te()}else te();N||H!==T-1||ie(e[0],b,g,I,!0,G),G=V,O=S,d.copy(w),x.copy(A)}if(N){if(E&&i){var Q=P,_=M;q!==I&&(Q=M,_=P),I?(L||q)&&(_.toArray(i,0),_.toArray(i,9),L&&Q.toArray(i,3)):!L&&q||(_.toArray(i,3),_.toArray(i,9),L&&Q.toArray(i,0))}}else ie(S,m,k,I,!1,V);return B;function K(e,t,r){return r.subVectors(t,e),r.set(-r.y,r.x).normalize()}function $(e,t,r){i&&(i[D]=e.x,i[D+1]=e.y,i[D+2]=0,a&&(a[D]=0,a[D+1]=0,a[D+2]=1),D+=3,o&&(o[R]=t,o[R+1]=r,R+=2)),B+=3}function ee(e,t,n,i,a){u.copy(t).sub(e).normalize(),l.copy(n).sub(e).normalize();var o=Math.PI,s=u.dot(l);Math.abs(s)<1&&(o=Math.abs(Math.acos(s))),o/=r,f.copy(t);for(var c=0,h=r-1;c<h;c++)y.copy(f).rotateAround(e,o),$(f,i,a),$(y,i,a),$(e,i,.5),f.copy(y);$(y,i,a),$(n,i,a),$(e,i,.5)}function te(){$(x,G,1),$(d,G,0),$(m,V,0),$(x,G,1),$(m,V,1),$(k,V,0)}function re(e,t,r){t?e?($(x,G,1),$(d,G,0),$(m,V,0),$(x,G,1),$(m,V,0),$(M,V,1),$(m,r,0),$(w,r,0),$(M,r,.5)):($(x,G,1),$(d,G,0),$(k,V,1),$(d,G,0),$(M,V,0),$(k,V,1),$(k,r,1),$(A,r,0),$(M,r,.5)):e?($(m,r,0),$(w,r,0),$(S,r,.5)):($(k,r,1),$(A,r,0),$(S,r,.5))}function ne(e,t){t&&(e?($(x,G,1),$(d,G,0),$(m,V,0),$(x,G,1),$(m,V,0),$(M,V,1),$(m,G,0),$(S,V,.5),$(M,V,1),$(S,V,.5),$(w,G,0),$(M,V,1)):($(x,G,1),$(d,G,0),$(k,V,1),$(d,G,0),$(M,V,0),$(k,V,1),$(k,G,1),$(M,V,0),$(S,V,.5),$(S,V,.5),$(M,V,0),$(A,G,1)))}function ie(e,r,n,a,o,s){switch(t.strokeLineCap){case"round":o?ee(e,n,r,s,.5):ee(e,r,n,s,.5);break;case"square":if(o)u.subVectors(r,e),l.set(u.y,-u.x),f.addVectors(u,l).add(e),y.subVectors(l,u).add(e),a?(f.toArray(i,3),y.toArray(i,0),y.toArray(i,9)):(f.toArray(i,3),f.toArray(i,9),y.toArray(i,0));else{u.subVectors(n,e),l.set(u.y,-u.x),f.addVectors(u,l).add(e),y.subVectors(l,u).add(e);var c=i.length;a?(f.toArray(i,c-3),y.toArray(i,c-6),y.toArray(i,c-12)):(f.toArray(i,c-6),y.toArray(i,c-3),y.toArray(i,c-12))}}}}}]),r}(c.Loader)}}]);
//# sourceMappingURL=582.6edd0cfd.chunk.js.map