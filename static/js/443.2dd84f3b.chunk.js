/*! For license information please see 443.2dd84f3b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkr3f_examples=self.webpackChunkr3f_examples||[]).push([[443],{2443:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(1413),o=n(9439),i=n(4925),u=n(2791),a=n(4647),c=n(1690),s=n(3655),f=n(7543),v=n(2541),l=n(4637),d=n(8202),m=n(3433),p=n(7762),h=Symbol(),y=Symbol(),g=Symbol(),x=Object.getPrototypeOf,b=new WeakMap,w=function(e){return e&&(b.has(e)?b.get(e):x(e)===Object.prototype||x(e)===Array.prototype)},D=function(e){return"object"==typeof e&&null!==e},j=function(e,t){var n=!1,r=function(t,r,o){if(!n){var i=t.a.get(e);i||(i=new Set,t.a.set(e,i)),o&&i.has(h)||i.add(r)}},o={f:t,get:function(t,n){return n===g?e:(r(this,n),S(t[n],this.a,this.c))},has:function(t,o){return o===y?(n=!0,this.a.delete(e),!0):(r(this,o),o in t)},getOwnPropertyDescriptor:function(e,t){return r(this,t,!0),Object.getOwnPropertyDescriptor(e,t)},ownKeys:function(e){return r(this,h),Reflect.ownKeys(e)}};return t&&(o.set=o.deleteProperty=function(){return!1}),o},S=function(e,t,n){if(!w(e))return e;var r=e[g]||e,o=function(e){return Object.isFrozen(e)||Object.values(Object.getOwnPropertyDescriptors(e)).some((function(e){return!e.writable}))}(r),i=n&&n.get(r);return i&&i.f===o||((i=j(r,o)).p=new Proxy(o?function(e){if(Array.isArray(e))return Array.from(e);var t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach((function(e){e.configurable=!0})),Object.create(x(e),t)}(r):r,i),n&&n.set(r,i)),i.a=t,i.c=n,i.p},U=function(e,t){var n=Reflect.ownKeys(e),r=Reflect.ownKeys(t);return n.length!==r.length||n.some((function(e,t){return e!==r[t]}))},O=function e(t,n,r,o){if(Object.is(t,n))return!1;if(!D(t)||!D(n))return!0;var i=r.get(t);if(!i)return!0;if(o){var u=o.get(t);if(u&&u.n===n)return u.g;o.set(t,{n:n,g:!1})}var a,c=null,s=(0,p.Z)(i);try{for(s.s();!(a=s.n()).done;){var f=a.value,v=f===h?U(t,n):e(t[f],n[f],r,o);if(!0!==v&&!1!==v||(c=v),c)break}}catch(l){s.e(l)}finally{s.f()}return null===c&&(c=!0),o&&o.set(t,{n:n,g:c}),c},P=function(e){return w(e)&&e[g]||null},R=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];b.set(e,t)},M=n(7248),E=Symbol("VERSION"),k=Symbol("LISTENERS"),A=Symbol("SNAPSHOT"),W=Symbol("HANDLER"),Z=Symbol("PROMISE_RESULT"),C=Symbol("PROMISE_ERROR"),T=new WeakSet;var L=function(e){return"object"===typeof e&&null!==e},I=function(e){return L(e)&&!T.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)},_=new WeakMap,N=1,B=new WeakMap;function K(e){return L(e)?e[E]:void 0}function V(e){return(null==e?void 0:e[A])||console.warn("Please use proxy object"),e[A]}var F=function(e,t){var n=(0,u.useRef)();(0,u.useEffect)((function(){n.current=function(e,t){var n=[],r=new WeakSet;return function e(o,i){if(!r.has(o)){D(o)&&r.add(o);var u=t.get(o);u?u.forEach((function(t){e(o[t],i?[].concat((0,m.Z)(i),[t]):[t])})):i&&n.push(i)}}(e),n}(e,t)})),(0,u.useDebugValue)(n.current)};function z(e,t){var n=new WeakMap,r=(0,u.useRef)(),o=(0,u.useRef)(),i=null==t?void 0:t.sync,a=(0,M.useSyncExternalStore)((0,u.useCallback)((function(t){o.current=t;var n=function(e,t,n){var r;(null==e?void 0:e[k])||console.warn("Please use proxy object");var o=[],i=function(e){o.push(e),n?t(o.splice(0)):r||(r=Promise.resolve().then((function(){r=void 0,t(o.splice(0))})))};return e[k].add(i),function(){e[k].delete(i)}}(e,t,i);return function(){n(),o.current=void 0}}),[e,i]),(0,u.useMemo)((function(){var t;return function(){var n=V(e);try{if(t&&r.current&&!O(t,n,r.current,new WeakMap))return t}catch(h){}return t=n}}),[e]),(0,u.useCallback)((function(){return V(e)}),[e])),c=K(e);(0,u.useEffect)((function(){r.current=n,c!==K(e)&&o.current&&o.current()})),F(a,n);var s=(0,u.useMemo)((function(){return new WeakMap}),[]);return S(a,n,s)}var G=n(127),H=n(184),X=["name"],q=["translate","rotate","scale"],Y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!L(t))throw new Error("object required");var n=_.get(t);if(n)return n;var r=N,o=new Set,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++N;r!==t&&(r=t,o.forEach((function(n){return n(e,t)})))},u=new Map,a=function(e){var t=u.get(e);return t||(t=function(t,n){var r=(0,m.Z)(t);r[1]=[e].concat((0,m.Z)(r[1])),i(r,n)},u.set(e,t)),t},c=function(e){var t=u.get(e);return u.delete(e),t},s=function(e,t){var n=B.get(t);if((null==n?void 0:n[0])===r)return n[1];var o=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return R(o,!0),B.set(t,[r,o]),Reflect.ownKeys(e).forEach((function(n){var r=Reflect.get(e,n,t);if(T.has(r))R(r,!1),o[n]=r;else if(r instanceof Promise)if(Z in r)o[n]=r[Z];else{var i=r[C]||r;Object.defineProperty(o,n,{get:function(){if(Z in r)return r[Z];throw i}})}else(null==r?void 0:r[k])?o[n]=r[A]:o[n]=r})),Object.freeze(o),o},f=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t)),v={get:function(e,t,n){return t===E?r:t===k?o:t===A?s(e,n):t===W?v:Reflect.get(e,t,n)},deleteProperty:function(e,t){var n=Reflect.get(e,t),r=null==n?void 0:n[k];r&&r.delete(c(t));var o=Reflect.deleteProperty(e,t);return o&&i(["delete",[t],n]),o},is:Object.is,canProxy:I,set:function(t,n,r,o){var u,s=Reflect.has(t,n),f=Reflect.get(t,n,o);if(s&&this.is(f,r))return!0;var v,l=null==f?void 0:f[k];return l&&l.delete(c(n)),L(r)&&(r=P(r)||r),(null==(u=Object.getOwnPropertyDescriptor(t,n))?void 0:u.set)?v=r:r instanceof Promise?v=r.then((function(e){return v[Z]=e,i(["resolve",[n],e]),e})).catch((function(e){v[C]=e,i(["reject",[n],e])})):(null==r?void 0:r[k])?(v=r)[k].add(a(n)):this.canProxy(r)?(v=e(r))[k].add(a(n)):v=r,Reflect.set(t,n,v,o),i(["set",[n],r,f]),!0}},l=new Proxy(f,v);return _.set(t,l),Reflect.ownKeys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);n.get||n.set?Object.defineProperty(f,e,n):l[e]=t[e]})),l}({current:null,mode:0}),J=function(e){var t=e.name,n=(0,i.Z)(e,X),a=z(Y),c=(0,s.L)(G).nodes,v=(0,u.useState)(!1),l=(0,o.Z)(v,2),d=l[0],m=l[1];return(0,f.j)(d),(0,H.jsx)("mesh",(0,r.Z)((0,r.Z)({onClick:function(e){e.stopPropagation(),Y.current=t},onPointerMissed:function(e){return"click"===e.type&&(Y.current=null)},onContextMenu:function(e){return a.current===t&&(e.stopPropagation(),Y.mode=(a.mode+1)%q.length)},onPointerOver:function(e){e.stopPropagation(),m(!0)},onPointerOut:function(e){return m(!1)},name:t,geometry:c[t].geometry,material:c[t].material,"material-color":a.current===t?"#ff6080":"white"},n),{},{dispose:null}))},Q=function(){var e=z(Y),t=(0,c.w)((function(e){return e.scene}));return(0,H.jsxs)(H.Fragment,{children:[e.current&&(0,H.jsx)(v.Y,{object:t.getObjectByName(e.current),mode:q[e.mode]}),(0,H.jsx)(l.z,{makeDefault:!0,minPolarAngle:0,maxPolarAngle:Math.PI/1.75})]})},$=function(e){var t=e.children;return(0,H.jsxs)(H.Fragment,{children:[t,(0,H.jsxs)(a.Xz,{camera:{position:[0,-10,80],fov:50},dpr:[1,2],children:[(0,H.jsx)("pointLight",{position:[100,100,100],intensity:.8}),(0,H.jsx)("hemisphereLight",{color:"#ffffff",groundColor:"#b9b9b9",position:[-7,25,13],intensity:.85}),(0,H.jsx)(u.Suspense,{fallback:null,children:(0,H.jsxs)("group",{position:[0,10,0],children:[(0,H.jsx)(J,{name:"Curly",position:[1,-11,-20],rotation:[2,0,0]}),(0,H.jsx)(J,{name:"DNA",position:[20,0,-17],rotation:[1,1,-2]}),(0,H.jsx)(J,{name:"Headphones",position:[20,2,4],rotation:[1,0,-1]}),(0,H.jsx)(J,{name:"Notebook",position:[-21,-15,-13],rotation:[2,0,1]}),(0,H.jsx)(J,{name:"Rocket003",position:[18,15,-25],rotation:[1,1,0]}),(0,H.jsx)(J,{name:"Roundcube001",position:[-25,-4,5],rotation:[1,0,0],scale:.5}),(0,H.jsx)(J,{name:"Table",position:[1,-4,-28],rotation:[1,0,-1],scale:.5}),(0,H.jsx)(J,{name:"VR_Headset",position:[7,-15,28],rotation:[1,0,-1],scale:5}),(0,H.jsx)(J,{name:"Zeppelin",position:[-20,10,10],rotation:[3,-1,3],scale:.005}),(0,H.jsx)(d.j,{"rotation-x":Math.PI/2,position:[0,-35,0],opacity:.25,width:200,height:200,blur:1,far:50})]})}),(0,H.jsx)(Q,{})]})]})}},8202:function(e,t,n){n.d(t,{j:function(){return d}});var r=n(1413),o=n(9439),i=n(4925),u=n(7462),a=n(2791),c=n(7760),s=n(1690),f={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:"\n      varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }\n  ",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform float h;\n\n    varying vec2 vUv;\n\n    void main() {\n\n    \tvec4 sum = vec4( 0.0 );\n\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n    \tgl_FragColor = sum;\n\n    }\n  "},v={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:"\n    varying vec2 vUv;\n\n    void main() {\n\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    }\n  ",fragmentShader:"\n\n  uniform sampler2D tDiffuse;\n  uniform float v;\n\n  varying vec2 vUv;\n\n  void main() {\n\n    vec4 sum = vec4( 0.0 );\n\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n    gl_FragColor = sum;\n\n  }\n  "},l=["scale","frames","opacity","width","height","blur","far","resolution","smooth","color","depthWrite","renderOrder"],d=a.forwardRef((function(e,t){var n=e.scale,d=void 0===n?10:n,m=e.frames,p=void 0===m?1/0:m,h=e.opacity,y=void 0===h?1:h,g=e.width,x=void 0===g?1:g,b=e.height,w=void 0===b?1:b,D=e.blur,j=void 0===D?1:D,S=e.far,U=void 0===S?10:S,O=e.resolution,P=void 0===O?512:O,R=e.smooth,M=void 0===R||R,E=e.color,k=void 0===E?"#000000":E,A=e.depthWrite,W=void 0!==A&&A,Z=e.renderOrder,C=(0,i.Z)(e,l),T=(0,s.w)((function(e){return e.scene})),L=(0,s.w)((function(e){return e.gl})),I=a.useRef(null);x*=Array.isArray(d)?d[0]:d||1,w*=Array.isArray(d)?d[1]:d||1;var _=a.useMemo((function(){var e=new c.WebGLRenderTarget(P,P),t=new c.WebGLRenderTarget(P,P);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;var n=new c.PlaneBufferGeometry(x,w).rotateX(Math.PI/2),o=new c.Mesh(n),i=new c.MeshDepthMaterial;i.depthTest=i.depthWrite=!1,i.onBeforeCompile=function(e){e.uniforms=(0,r.Z)((0,r.Z)({},e.uniforms),{},{ucolor:{value:new c.Color(k).convertSRGBToLinear()}}),e.fragmentShader=e.fragmentShader.replace("void main() {","uniform vec3 ucolor;\n           void main() {\n          "),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor, ( 1.0 - fragCoordZ ) * 1.0 );")};var u=new c.ShaderMaterial(f),a=new c.ShaderMaterial(v);return a.depthTest=u.depthTest=!1,[e,n,i,o,u,a,t]}),[P,x,w,d,k]),N=(0,o.Z)(_,7),B=N[0],K=N[1],V=N[2],F=N[3],z=N[4],G=N[5],H=N[6],X=function(e){F.visible=!0,F.material=z,z.uniforms.tDiffuse.value=B.texture,z.uniforms.h.value=1*e/256,L.setRenderTarget(H),L.render(F,I.current),F.material=G,G.uniforms.tDiffuse.value=H.texture,G.uniforms.v.value=1*e/256,L.setRenderTarget(B),L.render(F,I.current),F.visible=!1},q=0;return(0,s.x)((function(){if(I.current&&(p===1/0||q<p)){var e=T.background;T.background=null;var t=T.overrideMaterial;T.overrideMaterial=V,L.setRenderTarget(B),L.render(T,I.current),T.overrideMaterial=t,X(j),M&&X(.4*j),L.setRenderTarget(null),T.background=e,q++}})),a.createElement("group",(0,u.Z)({"rotation-x":Math.PI/2},C,{ref:t}),a.createElement("mesh",{renderOrder:Z,geometry:K,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},a.createElement("meshBasicMaterial",{map:B.texture,"map-encoding":L.outputEncoding,transparent:!0,opacity:y,depthWrite:W})),a.createElement("orthographicCamera",{ref:I,args:[-x/2,x/2,w/2,-w/2,0,U]}))}))},1561:function(e,t,n){var r=n(2791);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useState,u=r.useEffect,a=r.useLayoutEffect,c=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var f="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,f=r[1];return a((function(){o.value=n,o.getSnapshot=t,s(o)&&f({inst:o})}),[e,n,t]),u((function(){return s(o)&&f({inst:o}),e((function(){s(o)&&f({inst:o})}))}),[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},7248:function(e,t,n){e.exports=n(1561)},127:function(e,t,n){e.exports=n.p+"static/media/compressed.9d646d8f6c772acb56c9.glb"}}]);
//# sourceMappingURL=443.2dd84f3b.chunk.js.map