"use strict";(self.webpackChunkr3f_examples=self.webpackChunkr3f_examples||[]).push([[816],{7816:function(e,n,t){t.r(n);var r=t(9439),a=t(2791),o=t(7760),i=t(4647),c=t(4637),s=t(4580),u=t(184),f=125e3,d=new o.Object3D,l=new o.Color,m=Array.from({length:f},(function(){return s[17][Math.floor(5*Math.random())]})),v=function(){var e=(0,a.useRef)(),n=(0,a.useState)((function(){return Float32Array.from(Array.from({length:f},(function(e,n){return l.set(m[n]).convertSRGBToLinear().toArray()})).flat())})),t=(0,r.Z)(n,1)[0];return(0,a.useLayoutEffect)((function(){for(var n=0,t=0;t<50;t++)for(var r=0;r<50;r++)for(var a=0;a<50;a++){var o=n++;d.position.set(25-t,25-r,25-a),d.updateMatrix(),e.current.setMatrixAt(o,d.matrix)}e.current.instanceMatrix.needUpdate=!0}),[]),(0,u.jsxs)("instancedMesh",{ref:e,args:[void 0,void 0,f],children:[(0,u.jsx)("boxGeometry",{args:[.15,.15,.15],children:(0,u.jsx)("instancedBufferAttribute",{attach:"attributes-color",args:[t,3]})}),(0,u.jsx)("meshLambertMaterial",{vertexColors:!0,toneMapped:!1})]})};n.default=function(e){var n=e.children;return(0,u.jsxs)(u.Fragment,{children:[n,(0,u.jsxs)(i.Xz,{camera:{position:[0,0,.1]},children:[(0,u.jsx)("color",{attach:"background",args:[15790320]}),(0,u.jsx)("ambientLight",{}),(0,u.jsx)("directionalLight",{position:[150,150,150],intensity:.55}),(0,u.jsx)(v,{}),(0,u.jsx)(c.z,{enablePan:!1})]})]})}},4637:function(e,n,t){t.d(n,{z:function(){return u}});var r=t(4925),a=t(7462),o=t(2794),i=t(2791),c=t(233),s=["makeDefault","camera","regress","domElement","enableDamping","onChange","onStart","onEnd"],u=i.forwardRef((function(e,n){var t=e.makeDefault,u=e.camera,f=e.regress,d=e.domElement,l=e.enableDamping,m=void 0===l||l,v=e.onChange,g=e.onStart,h=e.onEnd,p=(0,r.Z)(e,s),x=(0,o.w)((function(e){return e.invalidate})),b=(0,o.w)((function(e){return e.camera})),E=(0,o.w)((function(e){return e.gl})),j=(0,o.w)((function(e){return e.events})),w=(0,o.w)((function(e){return e.set})),L=(0,o.w)((function(e){return e.get})),M=(0,o.w)((function(e){return e.performance})),k=u||b,y=d||j.connected||E.domElement,A=i.useMemo((function(){return new c.z(k)}),[k]);return(0,o.x)((function(){A.enabled&&A.update()}),-1),i.useEffect((function(){return A.connect(y),function(){A.dispose()}}),[y,f,A,x]),i.useEffect((function(){var e=function(e){x(),f&&M.regress(),v&&v(e)};return A.addEventListener("change",e),g&&A.addEventListener("start",g),h&&A.addEventListener("end",h),function(){g&&A.removeEventListener("start",g),h&&A.removeEventListener("end",h),A.removeEventListener("change",e)}}),[v,g,h]),i.useEffect((function(){if(t){var e=L().controls;return w({controls:A}),function(){return w({controls:e})}}}),[t,A]),i.createElement("primitive",(0,a.Z)({ref:n,object:A,enableDamping:m},p))}))},4580:function(e){e.exports=JSON.parse('{"17":["#99b898","#fecea8","#ff847c","#e84a5f","#2a363b"]}')}}]);
//# sourceMappingURL=816.120be8af.chunk.js.map