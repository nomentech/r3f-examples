"use strict";(self.webpackChunkr3f_examples=self.webpackChunkr3f_examples||[]).push([[55],{6055:function(e,t,r){r.r(t);var n=r(1413),o=r(2791),a=r(1690),i=r(4647),s=r(4956),c=r(184),u=function(e){return(0,c.jsxs)("mesh",(0,n.Z)((0,n.Z)({},e),{},{children:[(0,c.jsx)("dodecahedronGeometry",{}),(0,c.jsx)("meshStandardMaterial",{roughness:.75,emissive:"#404057"}),(0,c.jsx)(s.V,{distanceFactor:10,children:(0,c.jsxs)("div",{className:"p-[10px] text-left bg-[#202035] text-white rounded-md",children:["hello ",(0,c.jsx)("br",{}),"world"]})})]}))},l=function(){var e=(0,o.useRef)();return(0,a.x)((function(){e.current.rotation.x=e.current.rotation.y=e.current.rotation.z+=.01})),(0,c.jsxs)("group",{ref:e,children:[(0,c.jsx)(u,{position:[-2,0,0]}),(0,c.jsx)(u,{position:[0,-2,-3]}),(0,c.jsx)(u,{position:[2,0,0]})]})};t.default=function(e){var t=e.children;return(0,c.jsxs)(c.Fragment,{children:[t,(0,c.jsxs)(i.Xz,{dpr:[1,2],camera:{position:[0,0,7.5]},children:[(0,c.jsx)("pointLight",{color:"indianred"}),(0,c.jsx)("pointLight",{position:[10,10,-10],color:"orange"}),(0,c.jsx)("pointLight",{position:[-10,-10,10],color:"lightblue"}),(0,c.jsx)(l,{})]})]})}},4956:function(e,t,r){r.d(t,{V:function(){return M}});var n=r(1413),o=r(9439),a=r(4925),i=r(7462),s=r(2791),c=r(1250),u=r(7760),l=r(1690),d=["children","eps","style","className","prepend","center","fullscreen","portal","distanceFactor","sprite","transform","occlude","onOcclude","zIndexRange","calculatePosition","as","wrapperClass","pointerEvents"],f=new u.Vector3,p=new u.Vector3,m=new u.Vector3;function h(e,t,r){var n=f.setFromMatrixPosition(e.matrixWorld);n.project(t);var o=r.width/2,a=r.height/2;return[n.x*o+o,-n.y*a+a]}var x=function(e){return Math.abs(e)<1e-10?0:e};function v(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n="matrix3d(",o=0;16!==o;o++)n+=x(t[o]*e.elements[o])+(15!==o?",":")");return r+n}var g,y=(g=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],function(e){return v(e,g)}),w=function(e,t){return v(e,[1/(r=t),1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1],"translate(-50%,-50%)");var r},M=s.forwardRef((function(e,t){var r,v=e.children,g=e.eps,M=void 0===g?.001:g,j=e.style,b=e.className,P=e.prepend,W=e.center,E=e.fullscreen,F=e.portal,C=e.distanceFactor,R=e.sprite,z=void 0!==R&&R,Z=e.transform,I=void 0!==Z&&Z,N=e.occlude,O=e.onOcclude,T=e.zIndexRange,k=void 0===T?[16777271,0]:T,L=e.calculatePosition,V=void 0===L?h:L,S=e.as,A=void 0===S?"div":S,_=e.wrapperClass,D=e.pointerEvents,G=void 0===D?"auto":D,X=(0,a.Z)(e,d),q=(0,l.w)((function(e){return e.gl})),B=(0,l.w)((function(e){return e.camera})),H=(0,l.w)((function(e){return e.scene})),J=(0,l.w)((function(e){return e.size})),K=(0,l.w)((function(e){return e.raycaster})),Q=s.useState((function(){return document.createElement(A)})),U=(0,o.Z)(Q,1)[0],Y=s.useMemo((function(){return c.createRoot(U)}),[U]),$=s.useRef(null),ee=s.useRef(0),te=s.useRef([0,0]),re=s.useRef(null),ne=s.useRef(null),oe=null!==(r=null==F?void 0:F.current)&&void 0!==r?r:q.domElement.parentNode;s.useEffect((function(){if($.current){if(H.updateMatrixWorld(),I)U.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{var e=V($.current,B,J);U.style.cssText="position:absolute;top:0;left:0;transform:translate3d(".concat(e[0],"px,").concat(e[1],"px,0);transform-origin:0 0;")}return oe&&(P?oe.prepend(U):oe.appendChild(U)),function(){oe&&oe.removeChild(U),Y.unmount()}}}),[oe,I]),s.useLayoutEffect((function(){_&&(U.className=_)}),[_]);var ae=s.useMemo((function(){return I?{position:"absolute",top:0,left:0,width:J.width,height:J.height,transformStyle:"preserve-3d",pointerEvents:"none"}:(0,n.Z)((0,n.Z)({position:"absolute",transform:W?"translate3d(-50%,-50%,0)":"none"},E&&{top:-J.height/2,left:-J.width/2,width:J.width,height:J.height}),j)}),[j,W,E,J,I]),ie=s.useMemo((function(){return{position:"absolute",pointerEvents:G}}),[G]);s.useLayoutEffect((function(){I?Y.render(s.createElement("div",{ref:re,style:ae},s.createElement("div",{ref:ne,style:ie},s.createElement("div",{ref:t,className:b,style:j,children:v})))):Y.render(s.createElement("div",{ref:t,style:ae,className:b,children:v}))}));var se=s.useRef(!0);return(0,l.x)((function(){if($.current){B.updateMatrixWorld(),$.current.updateWorldMatrix(!0,!1);var e=I?te.current:V($.current,B,J);if(I||Math.abs(ee.current-B.zoom)>M||Math.abs(te.current[0]-e[0])>M||Math.abs(te.current[1]-e[1])>M){var t=function(e,t){var r=f.setFromMatrixPosition(e.matrixWorld),n=p.setFromMatrixPosition(t.matrixWorld),o=r.sub(n),a=t.getWorldDirection(m);return o.angleTo(a)>Math.PI/2}($.current,B),r=!1;"boolean"===typeof N?!0===N&&(r=[H]):Array.isArray(N)&&(r=N.map((function(e){return e.current})));var n=se.current;if(r){var o=function(e,t,r,n){var o=f.setFromMatrixPosition(e.matrixWorld),a=o.clone();a.project(t),r.setFromCamera(a,t);var i=r.intersectObjects(n,!0);if(i.length){var s=i[0].distance;return o.distanceTo(r.ray.origin)<s}return!0}($.current,B,K,r);se.current=o&&!t}else se.current=!t;if(n!==se.current&&(O?O(!se.current):U.style.display=se.current?"block":"none"),U.style.zIndex="".concat(function(e,t,r){if(t instanceof u.PerspectiveCamera||t instanceof u.OrthographicCamera){var n=f.setFromMatrixPosition(e.matrixWorld),o=p.setFromMatrixPosition(t.matrixWorld),a=n.distanceTo(o),i=(r[1]-r[0])/(t.far-t.near),s=r[1]-i*t.far;return Math.round(i*a+s)}}($.current,B,k)),I){var a=J.width/2,i=J.height/2,s=B.projectionMatrix.elements[5]*i,c=B.isOrthographicCamera,l=B.top,d=B.left,h=B.bottom,v=B.right,g=y(B.matrixWorldInverse),j=c?"scale(".concat(s,")translate(").concat(x(-(v+d)/2),"px,").concat(x((l+h)/2),"px)"):"translateZ(".concat(s,"px)"),b=$.current.matrixWorld;z&&((b=B.matrixWorldInverse.clone().transpose().copyPosition(b).scale($.current.scale)).elements[3]=b.elements[7]=b.elements[11]=0,b.elements[15]=1),U.style.width=J.width+"px",U.style.height=J.height+"px",U.style.perspective=c?"":"".concat(s,"px"),re.current&&ne.current&&(re.current.style.transform="".concat(j).concat(g,"translate(").concat(a,"px,").concat(i,"px)"),ne.current.style.transform=w(b,1/((C||10)/400)))}else{var P=void 0===C?1:function(e,t){if(t instanceof u.OrthographicCamera)return t.zoom;if(t instanceof u.PerspectiveCamera){var r=f.setFromMatrixPosition(e.matrixWorld),n=p.setFromMatrixPosition(t.matrixWorld),o=t.fov*Math.PI/180,a=r.distanceTo(n);return 1/(2*Math.tan(o/2)*a)}return 1}($.current,B)*C;U.style.transform="translate3d(".concat(e[0],"px,").concat(e[1],"px,0) scale(").concat(P,")")}te.current=e,ee.current=B.zoom}}})),s.createElement("group",(0,i.Z)({},X,{ref:$}))}))}}]);
//# sourceMappingURL=55.2ece2f44.chunk.js.map