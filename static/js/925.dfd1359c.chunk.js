"use strict";(self.webpackChunkr3f_examples=self.webpackChunkr3f_examples||[]).push([[925],{8925:function(e,n,t){t.r(n);var r=t(1413),o=t(9439),s=t(2791),i=t(4647),a=t(4637),c=t(5712),u=t(184),f=function(e){var n=e.onCollide,t=e.size,r=e.position,s=(0,c.EJ)((function(){return{isTrigger:!0,args:t,position:r,onCollide:n}})),i=(0,o.Z)(s,1)[0];return(0,u.jsxs)("mesh",{ref:i,position:r,children:[(0,u.jsx)("boxGeometry",{args:t}),(0,u.jsx)("meshStandardMaterial",{wireframe:!0,color:"green"})]})},l=function(){var e=(0,c.Eo)((function(){return{mass:1,position:[0,20,0],args:[1]}})),n=(0,o.Z)(e,1)[0];return(0,u.jsxs)("mesh",{castShadow:!0,receiveShadow:!0,ref:n,children:[(0,u.jsx)("sphereGeometry",{args:[1,64,64]}),(0,u.jsx)("meshLambertMaterial",{color:"white"})]})},d=function(e){var n=(0,c.xK)((function(){return(0,r.Z)({type:"Static"},e)})),t=(0,o.Z)(n,1)[0];return(0,u.jsxs)("mesh",{ref:t,receiveShadow:!0,children:[(0,u.jsx)("planeGeometry",{args:[100,100]}),(0,u.jsx)("shadowMaterial",{color:"#171717"})]})};n.default=function(e){var n=e.children,t=(0,s.useState)("#171720"),r=(0,o.Z)(t,2),m=r[0],g=r[1];return(0,u.jsxs)(u.Fragment,{children:[n,(0,u.jsxs)(i.Xz,{shadows:!0,dpr:[1,2],camera:{position:[-10,15,5],fov:50},children:[(0,u.jsx)(a.z,{}),(0,u.jsx)("fog",{attach:"fog",args:[m,10,50]}),(0,u.jsx)("color",{attach:"background",args:[m]}),(0,u.jsx)("ambientLight",{intensity:.1}),(0,u.jsx)("spotLight",{position:[10,10,10],angle:.5,intensity:1,castShadow:!0,penumbra:1}),(0,u.jsxs)(c.wI,{children:[(0,u.jsx)(f,{onCollide:function(e){console.log("Collision event on BoxTrigger",e),g("#fe4365")},position:[0,5,0],size:[4,1,4]}),(0,u.jsx)(l,{}),(0,u.jsx)(d,{rotation:[-Math.PI/2,0,0]})]})]})]})}},4637:function(e,n,t){t.d(n,{z:function(){return u}});var r=t(4925),o=t(7462),s=t(1690),i=t(2791),a=t(233),c=["makeDefault","camera","regress","domElement","enableDamping","onChange","onStart","onEnd"],u=i.forwardRef((function(e,n){var t=e.makeDefault,u=e.camera,f=e.regress,l=e.domElement,d=e.enableDamping,m=void 0===d||d,g=e.onChange,h=e.onStart,v=e.onEnd,x=(0,r.Z)(e,c),p=(0,s.w)((function(e){return e.invalidate})),j=(0,s.w)((function(e){return e.camera})),w=(0,s.w)((function(e){return e.gl})),E=(0,s.w)((function(e){return e.events})),b=(0,s.w)((function(e){return e.set})),L=(0,s.w)((function(e){return e.get})),S=(0,s.w)((function(e){return e.performance})),C=u||j,k=l||E.connected||w.domElement,Z=i.useMemo((function(){return new a.z(C)}),[C]);return(0,s.x)((function(){Z.enabled&&Z.update()}),-1),i.useEffect((function(){return Z.connect(k),function(){Z.dispose()}}),[k,f,Z,p]),i.useEffect((function(){var e=function(e){p(),f&&S.regress(),g&&g(e)};return Z.addEventListener("change",e),h&&Z.addEventListener("start",h),v&&Z.addEventListener("end",v),function(){h&&Z.removeEventListener("start",h),v&&Z.removeEventListener("end",v),Z.removeEventListener("change",e)}}),[g,h,v]),i.useEffect((function(){if(t){var e=L().controls;return b({controls:Z}),function(){return b({controls:e})}}}),[t,Z]),i.createElement("primitive",(0,o.Z)({ref:n,object:Z,enableDamping:m},x))}))}}]);
//# sourceMappingURL=925.dfd1359c.chunk.js.map