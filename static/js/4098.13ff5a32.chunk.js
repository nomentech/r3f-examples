"use strict";(self.webpackChunkr3f_examples=self.webpackChunkr3f_examples||[]).push([[4098],{4098:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(1413),o=n(4925),a=n(2791),i=n(4647),u=n(9439),s=n(7760),c=n(1690),v=function(e){return e&&e.isOrthographicCamera},f=a.createContext(null);function m(e){var t=e.children,n=e.damping,r=void 0===n?6:n,o=e.fit,i=e.clip,m=e.observe,l=e.margin,d=void 0===l?1.2:l,x=e.eps,p=void 0===x?.01:x,h=e.onFit,g=a.useRef(null),y=(0,c.w)(),D=y.camera,M=y.invalidate,w=y.size,U=y.controls,b=a.useRef(h);function z(e,t){return Math.abs(e.x-t.x)<p&&Math.abs(e.y-t.y)<p&&Math.abs(e.z-t.z)<p}function j(e,t,n,r){e.x=s.MathUtils.damp(e.x,t.x,n,r),e.y=s.MathUtils.damp(e.y,t.y,n,r),e.z=s.MathUtils.damp(e.z,t.z,n,r)}b.current=h;var E=a.useState((function(){return{animating:!1,focus:new s.Vector3,camera:new s.Vector3,zoom:1}})),S=(0,u.Z)(E,1)[0],C=a.useState((function(){return{focus:new s.Vector3,camera:new s.Vector3,zoom:1}})),V=(0,u.Z)(C,1)[0],k=a.useState((function(){return new s.Box3})),P=(0,u.Z)(k,1)[0],L=a.useMemo((function(){function e(){var e=P.getSize(new s.Vector3),t=P.getCenter(new s.Vector3),n=Math.max(e.x,e.y,e.z),r=v(D)?4*n:n/(2*Math.atan(Math.PI*D.fov/360)),o=v(D)?4*n:r/D.aspect,a=d*Math.max(r,o);return{box:P,size:e,center:t,distance:a}}return{getSize:e,refresh:function(t){if((r=t)&&r.isBox3)P.copy(t);else{var n=t||g.current;n.updateWorldMatrix(!0,!0),P.setFromObject(n)}var r;if(P.isEmpty()){var o=D.position.length()||10;P.setFromCenterAndSize(new s.Vector3,new s.Vector3(o,o,o))}if("OrthographicTrackballControls"===(null==U?void 0:U.constructor.name)){var a=e().distance,i=D.position.clone().sub(U.target).normalize().multiplyScalar(a),u=U.target.clone().add(i);D.position.copy(u)}return this},clip:function(){var t=e().distance;return U&&(U.maxDistance=10*t),D.near=t/100,D.far=100*t,D.updateProjectionMatrix(),U&&U.update(),M(),this},fit:function(){S.camera.copy(D.position),U&&S.focus.copy(U.target);var t=e(),n=t.center,o=t.distance,a=n.clone().sub(D.position).normalize().multiplyScalar(o);if(V.camera.copy(n).sub(a),V.focus.copy(n),v(D)){S.zoom=D.zoom;var i=0,u=0,c=[new s.Vector3(P.min.x,P.min.y,P.min.z),new s.Vector3(P.min.x,P.max.y,P.min.z),new s.Vector3(P.min.x,P.min.y,P.max.z),new s.Vector3(P.min.x,P.max.y,P.max.z),new s.Vector3(P.max.x,P.max.y,P.max.z),new s.Vector3(P.max.x,P.max.y,P.min.z),new s.Vector3(P.max.x,P.min.y,P.max.z),new s.Vector3(P.max.x,P.min.y,P.min.z)];n.applyMatrix4(D.matrixWorldInverse);for(var f=0,m=c;f<m.length;f++){var l=m[f];l.applyMatrix4(D.matrixWorldInverse),i=Math.max(i,Math.abs(l.y-n.y)),u=Math.max(u,Math.abs(l.x-n.x))}i*=2,u*=2;var x=(D.top-D.bottom)/i,p=(D.right-D.left)/u;V.zoom=Math.min(x,p)/d,r||(D.zoom=V.zoom,D.updateProjectionMatrix())}return r?S.animating=!0:(D.position.copy(V.camera),D.lookAt(V.focus),U&&(U.target.copy(V.focus),U.update())),b.current&&b.current(this.getSize()),M(),this}}}),[P,D,U,d,r,M]);a.useLayoutEffect((function(){if(U){var e=function(){return S.animating=!1};return U.addEventListener("start",e),function(){return U.removeEventListener("start",e)}}}),[U]);var R=a.useRef(0);return a.useLayoutEffect((function(){(m||0===R.current++)&&(L.refresh(),o&&L.fit(),i&&L.clip())}),[w,i,o,m,D,U]),(0,c.x)((function(e,t){if(S.animating){if(j(S.focus,V.focus,r,t),j(S.camera,V.camera,r,t),S.zoom=s.MathUtils.damp(S.zoom,V.zoom,r,t),D.position.copy(S.camera),v(D)&&(D.zoom=S.zoom,D.updateProjectionMatrix()),U?(U.target.copy(S.focus),U.update()):D.lookAt(S.focus),M(),v(D)&&!(Math.abs(S.zoom-V.zoom)<p))return;if(!v(D)&&!z(S.camera,V.camera))return;if(U&&!z(S.focus,V.focus))return;S.animating=!1}})),a.createElement("group",{ref:g},a.createElement(f.Provider,{value:L},t))}var l=n(3655),d=n(8202),x=n(4637),p=n(127),h=n(184),g=["name"],y=function(e){var t=e.name,n=(0,o.Z)(e,g),a=(0,l.L)(p).nodes;return(0,h.jsx)("mesh",(0,r.Z)((0,r.Z)({geometry:a[t].geometry,material:a[t].material,"material-emissive":"red","material-roughness":1},n),{},{dispose:null}))},D=function(e){var t=e.children,n=a.useContext(f);return(0,h.jsx)("group",{onClick:function(e){e.stopPropagation(),e.delta<=2&&n.refresh(e.object).fit()},onPointerMissed:function(e){return 0===e.button&&n.refresh().fit()},children:t})},M=function(e){var t=e.children;return(0,h.jsxs)(h.Fragment,{children:[t,(0,h.jsxs)(i.Xz,{camera:{position:[0,-10,80],fov:50},dpr:[1,2],children:[(0,h.jsx)("spotLight",{position:[-100,-100,-100],intensity:.2,angle:.3,penumbra:1}),(0,h.jsx)("hemisphereLight",{color:"white",groundColor:"#ff0f00",position:[-7,25,13],intensity:1}),(0,h.jsxs)(a.Suspense,{fallback:null,children:[(0,h.jsx)(m,{fit:!0,clip:!0,margin:1.2,children:(0,h.jsxs)(D,{children:[(0,h.jsx)(y,{name:"Curly",position:[1,-11,-20],rotation:[2,0,0]}),(0,h.jsx)(y,{name:"DNA",position:[20,0,-17],rotation:[1,1,-2]}),(0,h.jsx)(y,{name:"Headphones",position:[20,2,4],rotation:[1,0,-1]}),(0,h.jsx)(y,{name:"Notebook",position:[-21,-15,-13],rotation:[2,0,1]}),(0,h.jsx)(y,{name:"Rocket003",position:[18,15,-25],rotation:[1,1,0]}),(0,h.jsx)(y,{name:"Roundcube001",position:[-25,-4,5],rotation:[1,0,0],scale:.5}),(0,h.jsx)(y,{name:"Table",position:[1,-4,-28],rotation:[1,0,-1],scale:.5}),(0,h.jsx)(y,{name:"VR_Headset",position:[7,-15,28],rotation:[1,0,-1],scale:5}),(0,h.jsx)(y,{name:"Zeppelin",position:[-20,10,10],rotation:[3,-1,3],scale:.005})]})}),(0,h.jsx)(d.j,{"rotation-x":Math.PI/2,position:[0,-35,0],opacity:.2,width:200,height:200,blur:1,far:50})]}),(0,h.jsx)(x.z,{makeDefault:!0,minPolarAngle:0,maxPolarAngle:Math.PI/1.75})]})]})}},8202:function(e,t,n){n.d(t,{j:function(){return l}});var r=n(1413),o=n(9439),a=n(4925),i=n(7462),u=n(2791),s=n(7760),c=n(1690),v={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:"\n      varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }\n  ",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform float h;\n\n    varying vec2 vUv;\n\n    void main() {\n\n    \tvec4 sum = vec4( 0.0 );\n\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n    \tgl_FragColor = sum;\n\n    }\n  "},f={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:"\n    varying vec2 vUv;\n\n    void main() {\n\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    }\n  ",fragmentShader:"\n\n  uniform sampler2D tDiffuse;\n  uniform float v;\n\n  varying vec2 vUv;\n\n  void main() {\n\n    vec4 sum = vec4( 0.0 );\n\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n    gl_FragColor = sum;\n\n  }\n  "},m=["scale","frames","opacity","width","height","blur","far","resolution","smooth","color","depthWrite","renderOrder"],l=u.forwardRef((function(e,t){var n=e.scale,l=void 0===n?10:n,d=e.frames,x=void 0===d?1/0:d,p=e.opacity,h=void 0===p?1:p,g=e.width,y=void 0===g?1:g,D=e.height,M=void 0===D?1:D,w=e.blur,U=void 0===w?1:w,b=e.far,z=void 0===b?10:b,j=e.resolution,E=void 0===j?512:j,S=e.smooth,C=void 0===S||S,V=e.color,k=void 0===V?"#000000":V,P=e.depthWrite,L=void 0!==P&&P,R=e.renderOrder,Z=(0,a.Z)(e,m),T=(0,c.w)((function(e){return e.scene})),A=(0,c.w)((function(e){return e.gl})),W=u.useRef(null);y*=Array.isArray(l)?l[0]:l||1,M*=Array.isArray(l)?l[1]:l||1;var I=u.useMemo((function(){var e=new s.WebGLRenderTarget(E,E),t=new s.WebGLRenderTarget(E,E);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;var n=new s.PlaneBufferGeometry(y,M).rotateX(Math.PI/2),o=new s.Mesh(n),a=new s.MeshDepthMaterial;a.depthTest=a.depthWrite=!1,a.onBeforeCompile=function(e){e.uniforms=(0,r.Z)((0,r.Z)({},e.uniforms),{},{ucolor:{value:new s.Color(k).convertSRGBToLinear()}}),e.fragmentShader=e.fragmentShader.replace("void main() {","uniform vec3 ucolor;\n           void main() {\n          "),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor, ( 1.0 - fragCoordZ ) * 1.0 );")};var i=new s.ShaderMaterial(v),u=new s.ShaderMaterial(f);return u.depthTest=i.depthTest=!1,[e,n,a,o,i,u,t]}),[E,y,M,l,k]),_=(0,o.Z)(I,7),B=_[0],F=_[1],O=_[2],G=_[3],H=_[4],N=_[5],X=_[6],q=function(e){G.visible=!0,G.material=H,H.uniforms.tDiffuse.value=B.texture,H.uniforms.h.value=1*e/256,A.setRenderTarget(X),A.render(G,W.current),G.material=N,N.uniforms.tDiffuse.value=X.texture,N.uniforms.v.value=1*e/256,A.setRenderTarget(B),A.render(G,W.current),G.visible=!1},J=0;return(0,c.x)((function(){if(W.current&&(x===1/0||J<x)){var e=T.background;T.background=null;var t=T.overrideMaterial;T.overrideMaterial=O,A.setRenderTarget(B),A.render(T,W.current),T.overrideMaterial=t,q(U),C&&q(.4*U),A.setRenderTarget(null),T.background=e,J++}})),u.createElement("group",(0,i.Z)({"rotation-x":Math.PI/2},Z,{ref:t}),u.createElement("mesh",{renderOrder:R,geometry:F,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},u.createElement("meshBasicMaterial",{map:B.texture,"map-encoding":A.outputEncoding,transparent:!0,opacity:h,depthWrite:L})),u.createElement("orthographicCamera",{ref:W,args:[-y/2,y/2,M/2,-M/2,0,z]}))}))},4637:function(e,t,n){n.d(t,{z:function(){return c}});var r=n(4925),o=n(7462),a=n(1690),i=n(2791),u=n(233),s=["makeDefault","camera","regress","domElement","enableDamping","onChange","onStart","onEnd"],c=i.forwardRef((function(e,t){var n=e.makeDefault,c=e.camera,v=e.regress,f=e.domElement,m=e.enableDamping,l=void 0===m||m,d=e.onChange,x=e.onStart,p=e.onEnd,h=(0,r.Z)(e,s),g=(0,a.w)((function(e){return e.invalidate})),y=(0,a.w)((function(e){return e.camera})),D=(0,a.w)((function(e){return e.gl})),M=(0,a.w)((function(e){return e.events})),w=(0,a.w)((function(e){return e.set})),U=(0,a.w)((function(e){return e.get})),b=(0,a.w)((function(e){return e.performance})),z=c||y,j=f||M.connected||D.domElement,E=i.useMemo((function(){return new u.z(z)}),[z]);return(0,a.x)((function(){E.enabled&&E.update()}),-1),i.useEffect((function(){return E.connect(j),function(){E.dispose()}}),[j,v,E,g]),i.useEffect((function(){var e=function(e){g(),v&&b.regress(),d&&d(e)};return E.addEventListener("change",e),x&&E.addEventListener("start",x),p&&E.addEventListener("end",p),function(){x&&E.removeEventListener("start",x),p&&E.removeEventListener("end",p),E.removeEventListener("change",e)}}),[d,x,p]),i.useEffect((function(){if(n){var e=U().controls;return w({controls:E}),function(){return w({controls:e})}}}),[n,E]),i.createElement("primitive",(0,o.Z)({ref:t,object:E,enableDamping:l},h))}))},127:function(e,t,n){e.exports=n.p+"static/media/compressed.9d646d8f6c772acb56c9.glb"}}]);
//# sourceMappingURL=4098.13ff5a32.chunk.js.map