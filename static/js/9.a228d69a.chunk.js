"use strict";(self.webpackChunkr3f_examples=self.webpackChunkr3f_examples||[]).push([[9],{3009:function(t,r,e){e.r(r),e.d(r,{default:function(){return x}});var n=e(9439),a=e(2791),o=e(323),i=e(4150),s=e(6406),c=JSON.parse('{"17":["#99b898","#fecea8","#ff847c","#e84a5f","#2a363b"]}'),u=e(184),l=new o.Object3D,f=new o.Color,h=Array.from({length:1e3},(function(){return{color:c[17][Math.floor(5*Math.random())],scale:1}})),d=function(){var t=(0,a.useState)(),r=(0,n.Z)(t,2),e=r[0],i=r[1],c=(0,a.useMemo)((function(){return Float32Array.from(new Array(1e3).fill(null).flatMap((function(t,r){return f.set(h[r].color).toArray()})))}),[]),d=(0,a.useRef)(),x=(0,a.useRef)();return(0,a.useEffect)((function(){x.current=e}),[e]),(0,s.x)((function(t){var r=t.clock.getElapsedTime();d.current.rotation.x=Math.sin(r/4),d.current.rotation.y=Math.sin(r/2);for(var n=0,a=0;a<10;a++)for(var i=0;i<10;i++)for(var s=0;s<10;s++){var u=n++;l.position.set(5-a,5-i,5-s),l.rotation.y=Math.sin(a/4+r)+Math.sin(i/4+r)+Math.sin(s/4+r),l.rotation.z=2*l.rotation.y,e!==x.Current&&(f.set(u===e?"white":h[u].color).toArray(c,3*u),d.current.geometry.attributes.color.needsUpdate=!0);var p=h[u].scale=o.MathUtils.lerp(h[u].scale,u===e?3:1,.1);l.scale.setScalar(p),l.updateMatrix(),d.current.setMatrixAt(u,l.matrix)}d.current.instanceMatrix.needsUpdate=!0})),(0,u.jsxs)("instancedMesh",{ref:d,args:[void 0,void 0,1e3],onPointerMove:function(t){return i(t.instanceId)},onPointerOut:function(t){return i(void 0)},children:[(0,u.jsx)("boxGeometry",{args:[.6,.6,.6],children:(0,u.jsx)("instancedBufferAttribute",{attach:"attributes-color",args:[c,3]})}),(0,u.jsx)("meshPhongMaterial",{vertexColors:!0})]})},x=function(t){var r=t.children;return(0,u.jsxs)(u.Fragment,{children:[r,(0,u.jsxs)(i.Xz,{linear:!0,gl:{antialias:!1,alpha:!1},camera:{position:[0,0,15],near:5,far:20},onCreated:function(t){return t.gl.setClearColor("#f0f0f0")},children:[(0,u.jsx)("ambientLight",{}),(0,u.jsx)("pointLight",{position:[150,150,150],intensity:.55}),(0,u.jsx)(d,{})]})]})}}}]);
//# sourceMappingURL=9.a228d69a.chunk.js.map