"use strict";(self.webpackChunkr3f_examples=self.webpackChunkr3f_examples||[]).push([[925],{8925:function(e,s,r){r.r(s);var o=r(1413),n=r(9439),t=r(2791),i=r(4647),a=r(3520),c=r(5712),l=r(184),h=function(e){var s=e.onCollide,r=e.size,o=e.position,t=(0,c.EJ)((function(){return{isTrigger:!0,args:r,position:o,onCollide:s}})),i=(0,n.Z)(t,1)[0];return(0,l.jsxs)("mesh",{ref:i,position:o,children:[(0,l.jsx)("boxGeometry",{args:r}),(0,l.jsx)("meshStandardMaterial",{wireframe:!0,color:"green"})]})},x=function(){var e=(0,c.Eo)((function(){return{mass:1,position:[0,20,0],args:[1]}})),s=(0,n.Z)(e,1)[0];return(0,l.jsxs)("mesh",{castShadow:!0,receiveShadow:!0,ref:s,children:[(0,l.jsx)("sphereGeometry",{args:[1,64,64]}),(0,l.jsx)("meshLambertMaterial",{color:"white"})]})},u=function(e){var s=(0,c.xK)((function(){return(0,o.Z)({type:"Static"},e)})),r=(0,n.Z)(s,1)[0];return(0,l.jsxs)("mesh",{ref:r,receiveShadow:!0,children:[(0,l.jsx)("planeGeometry",{args:[100,100]}),(0,l.jsx)("shadowMaterial",{color:"#171717"})]})};s.default=function(e){var s=e.children,r=(0,t.useState)("#171720"),o=(0,n.Z)(r,2),f=o[0],d=o[1];return(0,l.jsxs)(l.Fragment,{children:[s,(0,l.jsxs)(i.Xz,{shadows:!0,dpr:[1,2],camera:{position:[-10,15,5],fov:50},children:[(0,l.jsx)(a.z,{}),(0,l.jsx)("fog",{attach:"fog",args:[f,10,50]}),(0,l.jsx)("color",{attach:"background",args:[f]}),(0,l.jsx)("ambientLight",{intensity:.1}),(0,l.jsx)("spotLight",{position:[10,10,10],angle:.5,intensity:1,castShadow:!0,penumbra:1}),(0,l.jsxs)(c.wI,{children:[(0,l.jsx)(h,{onCollide:function(e){console.log("Collision event on BoxTrigger",e),d("#fe4365")},position:[0,5,0],size:[4,1,4]}),(0,l.jsx)(x,{}),(0,l.jsx)(u,{rotation:[-Math.PI/2,0,0]})]})]})]})}}}]);
//# sourceMappingURL=925.7f4c685f.chunk.js.map