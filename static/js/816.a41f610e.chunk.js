"use strict";(self.webpackChunkr3f_examples=self.webpackChunkr3f_examples||[]).push([[816],{7816:function(r,e,t){t.r(e);var a=t(9439),n=t(2791),o=t(7760),s=t(4647),i=t(3520),c=t(4580),f=t(184),u=125e3,l=new o.Object3D,x=new o.Color,h=Array.from({length:u},(function(){return c[17][Math.floor(5*Math.random())]})),d=function(){var r=(0,n.useRef)(),e=(0,n.useState)((function(){return Float32Array.from(Array.from({length:u},(function(r,e){return x.set(h[e]).convertSRGBToLinear().toArray()})).flat())})),t=(0,a.Z)(e,1)[0];return(0,n.useLayoutEffect)((function(){for(var e=0,t=0;t<50;t++)for(var a=0;a<50;a++)for(var n=0;n<50;n++){var o=e++;l.position.set(25-t,25-a,25-n),l.updateMatrix(),r.current.setMatrixAt(o,l.matrix)}r.current.instanceMatrix.needUpdate=!0}),[]),(0,f.jsxs)("instancedMesh",{ref:r,args:[void 0,void 0,u],children:[(0,f.jsx)("boxGeometry",{args:[.15,.15,.15],children:(0,f.jsx)("instancedBufferAttribute",{attach:"attributes-color",args:[t,3]})}),(0,f.jsx)("meshLambertMaterial",{vertexColors:!0,toneMapped:!1})]})};e.default=function(r){var e=r.children;return(0,f.jsxs)(f.Fragment,{children:[e,(0,f.jsxs)(s.Xz,{camera:{position:[0,0,.1]},children:[(0,f.jsx)("color",{attach:"background",args:[15790320]}),(0,f.jsx)("ambientLight",{}),(0,f.jsx)("directionalLight",{position:[150,150,150],intensity:.55}),(0,f.jsx)(d,{}),(0,f.jsx)(i.z,{enablePan:!1})]})]})}},4580:function(r){r.exports=JSON.parse('{"17":["#99b898","#fecea8","#ff847c","#e84a5f","#2a363b"]}')}}]);
//# sourceMappingURL=816.a41f610e.chunk.js.map