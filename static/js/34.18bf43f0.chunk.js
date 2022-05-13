"use strict";(self.webpackChunkr3f_examples=self.webpackChunkr3f_examples||[]).push([[34],{2426:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(1413),i=r(2791),a=r(4647),o=r(9439),u=r(1690),c=r(3144),s=r(5671),v=r(4942),f=(0,c.Z)((function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math;(0,s.Z)(this,e),(0,v.Z)(this,"grad3",[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]]),(0,v.Z)(this,"grad4",[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]]),(0,v.Z)(this,"p",[]),(0,v.Z)(this,"perm",[]),(0,v.Z)(this,"simplex",[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]),(0,v.Z)(this,"dot",(function(e,t,r){return e[0]*t+e[1]*r})),(0,v.Z)(this,"dot3",(function(e,t,r,n){return e[0]*t+e[1]*r+e[2]*n})),(0,v.Z)(this,"dot4",(function(e,t,r,n,i){return e[0]*t+e[1]*r+e[2]*n+e[3]*i})),(0,v.Z)(this,"noise",(function(e,r){var n=(e+r)*(.5*(Math.sqrt(3)-1)),i=Math.floor(e+n),a=Math.floor(r+n),o=(3-Math.sqrt(3))/6,u=(i+a)*o,c=e-(i-u),s=r-(a-u),v=0,f=1;c>s&&(v=1,f=0);var d=c-v+o,l=s-f+o,m=c-1+2*o,h=s-1+2*o,p=255&i,x=255&a,g=t.perm[p+t.perm[x]]%12,y=t.perm[p+v+t.perm[x+f]]%12,w=t.perm[p+1+t.perm[x+1]]%12,D=.5-c*c-s*s,U=.5-d*d-l*l,M=.5-m*m-h*h;return 70*((D<0?0:(D*=D)*D*t.dot(t.grad3[g],c,s))+(U<0?0:(U*=U)*U*t.dot(t.grad3[y],d,l))+(M<0?0:(M*=M)*M*t.dot(t.grad3[w],m,h)))})),(0,v.Z)(this,"noise3d",(function(e,r,n){var i,a,o,u,c,s,v=(e+r+n)*(1/3),f=Math.floor(e+v),d=Math.floor(r+v),l=Math.floor(n+v),m=1/6,h=(f+d+l)*m,p=e-(f-h),x=r-(d-h),g=n-(l-h);p>=x?x>=g?(i=1,a=0,o=0,u=1,c=1,s=0):p>=g?(i=1,a=0,o=0,u=1,c=0,s=1):(i=0,a=0,o=1,u=1,c=0,s=1):x<g?(i=0,a=0,o=1,u=0,c=1,s=1):p<g?(i=0,a=1,o=0,u=0,c=1,s=1):(i=0,a=1,o=0,u=1,c=1,s=0);var y=p-i+m,w=x-a+m,D=g-o+m,U=p-u+2*m,M=x-c+2*m,b=g-s+2*m,Z=p-1+.5,S=x-1+.5,E=g-1+.5,R=255&f,j=255&d,k=255&l,T=t.perm[R+t.perm[j+t.perm[k]]]%12,C=t.perm[R+i+t.perm[j+a+t.perm[k+o]]]%12,L=t.perm[R+u+t.perm[j+c+t.perm[k+s]]]%12,q=t.perm[R+1+t.perm[j+1+t.perm[k+1]]]%12,F=.6-p*p-x*x-g*g,A=.6-y*y-w*w-D*D,P=.6-U*U-M*M-b*b,B=.6-Z*Z-S*S-E*E;return 32*((F<0?0:(F*=F)*F*t.dot3(t.grad3[T],p,x,g))+(A<0?0:(A*=A)*A*t.dot3(t.grad3[C],y,w,D))+(P<0?0:(P*=P)*P*t.dot3(t.grad3[L],U,M,b))+(B<0?0:(B*=B)*B*t.dot3(t.grad3[q],Z,S,E)))})),(0,v.Z)(this,"noise4d",(function(e,r,n,i){var a,o,u,c,s,v,f,d,l,m,h,p,x=t.grad4,g=t.simplex,y=t.perm,w=(Math.sqrt(5)-1)/4,D=(5-Math.sqrt(5))/20,U=(e+r+n+i)*w,M=Math.floor(e+U),b=Math.floor(r+U),Z=Math.floor(n+U),S=Math.floor(i+U),E=(M+b+Z+S)*D,R=e-(M-E),j=r-(b-E),k=n-(Z-E),T=i-(S-E),C=(R>j?32:0)+(R>k?16:0)+(j>k?8:0)+(R>T?4:0)+(j>T?2:0)+(k>T?1:0),L=R-(a=g[C][0]>=3?1:0)+D,q=j-(o=g[C][1]>=3?1:0)+D,F=k-(u=g[C][2]>=3?1:0)+D,A=T-(c=g[C][3]>=3?1:0)+D,P=R-(s=g[C][0]>=2?1:0)+2*D,B=j-(v=g[C][1]>=2?1:0)+2*D,I=k-(f=g[C][2]>=2?1:0)+2*D,O=T-(d=g[C][3]>=2?1:0)+2*D,W=R-(l=g[C][0]>=1?1:0)+3*D,_=j-(m=g[C][1]>=1?1:0)+3*D,z=k-(h=g[C][2]>=1?1:0)+3*D,G=T-(p=g[C][3]>=1?1:0)+3*D,H=R-1+4*D,V=j-1+4*D,X=k-1+4*D,Y=T-1+4*D,N=255&M,J=255&b,K=255&Z,Q=255&S,$=y[N+y[J+y[K+y[Q]]]]%32,ee=y[N+a+y[J+o+y[K+u+y[Q+c]]]]%32,te=y[N+s+y[J+v+y[K+f+y[Q+d]]]]%32,re=y[N+l+y[J+m+y[K+h+y[Q+p]]]]%32,ne=y[N+1+y[J+1+y[K+1+y[Q+1]]]]%32,ie=.6-R*R-j*j-k*k-T*T,ae=.6-L*L-q*q-F*F-A*A,oe=.6-P*P-B*B-I*I-O*O,ue=.6-W*W-_*_-z*z-G*G,ce=.6-H*H-V*V-X*X-Y*Y;return 27*((ie<0?0:(ie*=ie)*ie*t.dot4(x[$],R,j,k,T))+(ae<0?0:(ae*=ae)*ae*t.dot4(x[ee],L,q,F,A))+(oe<0?0:(oe*=oe)*oe*t.dot4(x[te],P,B,I,O))+(ue<0?0:(ue*=ue)*ue*t.dot4(x[re],W,_,z,G))+(ce<0?0:(ce*=ce)*ce*t.dot4(x[ne],H,V,X,Y)))}));for(var n=0;n<256;n++)this.p[n]=Math.floor(256*r.random());for(var i=0;i<512;i++)this.perm[i]=this.p[255&i]})),d=i.forwardRef((function(e,t){var r=e.intensity,n=void 0===r?1:r,a=e.decay,c=e.decayRate,s=void 0===c?.65:c,v=e.maxYaw,d=void 0===v?.1:v,l=e.maxPitch,m=void 0===l?.1:l,h=e.maxRoll,p=void 0===h?.1:h,x=e.yawFrequency,g=void 0===x?.1:x,y=e.pitchFrequency,w=void 0===y?.1:y,D=e.rollFrequency,U=void 0===D?.1:D,M=(0,u.w)((function(e){return e.camera})),b=(0,u.w)((function(e){return e.controls})),Z=i.useRef(n),S=i.useRef(M.rotation.clone()),E=i.useState((function(){return new f})),R=(0,o.Z)(E,1)[0],j=i.useState((function(){return new f})),k=(0,o.Z)(j,1)[0],T=i.useState((function(){return new f})),C=(0,o.Z)(T,1)[0],L=function(){(Z.current<0||Z.current>1)&&(Z.current=Z.current<0?0:1)};return i.useImperativeHandle(t,(function(){return{getIntensity:function(){return Z.current},setIntensity:function(e){Z.current=e,L()}}}),[]),i.useEffect((function(){if(b){var e=function(){S.current=M.rotation.clone()};return b.addEventListener("change",e),e(),function(){b.removeEventListener("change",e)}}}),[M,b]),(0,u.x)((function(e,t){var r=Math.pow(Z.current,2),n=d*r*R.noise(e.clock.elapsedTime*g,1),i=m*r*k.noise(e.clock.elapsedTime*w,1),o=p*r*C.noise(e.clock.elapsedTime*U,1);M.rotation.set(S.current.x+i,S.current.y+n,S.current.z+o),a&&Z.current>0&&(Z.current-=s*t,L())})),null})),l=r(3655),m=r(6483),h=r(9142),p=r(4637),x=r.p+"static/media/robot-draco.ac9fcccbce67c4834b80.glb",g=r(184);l.L.preload(x);var y=function(e){var t=(0,l.L)(x),r=t.scene,a=t.animations,o=(0,m.v)(a,r).actions;return(0,i.useEffect)((function(){o.Idle.play(),r.traverse((function(e){return e.isMesh&&(e.receiveShadow=e.castShadow=!0)}))}),[o,r]),(0,g.jsx)("primitive",(0,n.Z)({object:r},e))},w=function(e){var t=e.children;return(0,g.jsxs)(g.Fragment,{children:[t,(0,g.jsxs)(a.Xz,{shadows:!0,camera:{fov:50},className:'bg-[#303035] bg-[url("./basic-examples/staging-and-camerashake/view.svg")] bg-no-repeat bg-contain bg-center z-10',children:[(0,g.jsx)(i.Suspense,{fallback:null,children:(0,g.jsx)(h.H,{contactShadow:{opacity:1,blur:2},children:(0,g.jsx)(y,{})})}),(0,g.jsx)(p.z,{makeDefault:!0}),(0,g.jsx)(d,{maxYaw:.1,maxPitch:.1,maxRoll:.1,yawFrequency:.1,pitchFrequency:.1,rollFrequency:.1,intensity:1,decayRate:.65})]})]})}},8202:function(e,t,r){r.d(t,{j:function(){return l}});var n=r(1413),i=r(9439),a=r(4925),o=r(7462),u=r(2791),c=r(7760),s=r(1690),v={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:"\n      varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }\n  ",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform float h;\n\n    varying vec2 vUv;\n\n    void main() {\n\n    \tvec4 sum = vec4( 0.0 );\n\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n    \tgl_FragColor = sum;\n\n    }\n  "},f={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:"\n    varying vec2 vUv;\n\n    void main() {\n\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    }\n  ",fragmentShader:"\n\n  uniform sampler2D tDiffuse;\n  uniform float v;\n\n  varying vec2 vUv;\n\n  void main() {\n\n    vec4 sum = vec4( 0.0 );\n\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n    gl_FragColor = sum;\n\n  }\n  "},d=["scale","frames","opacity","width","height","blur","far","resolution","smooth","color","depthWrite","renderOrder"],l=u.forwardRef((function(e,t){var r=e.scale,l=void 0===r?10:r,m=e.frames,h=void 0===m?1/0:m,p=e.opacity,x=void 0===p?1:p,g=e.width,y=void 0===g?1:g,w=e.height,D=void 0===w?1:w,U=e.blur,M=void 0===U?1:U,b=e.far,Z=void 0===b?10:b,S=e.resolution,E=void 0===S?512:S,R=e.smooth,j=void 0===R||R,k=e.color,T=void 0===k?"#000000":k,C=e.depthWrite,L=void 0!==C&&C,q=e.renderOrder,F=(0,a.Z)(e,d),A=(0,s.w)((function(e){return e.scene})),P=(0,s.w)((function(e){return e.gl})),B=u.useRef(null);y*=Array.isArray(l)?l[0]:l||1,D*=Array.isArray(l)?l[1]:l||1;var I=u.useMemo((function(){var e=new c.WebGLRenderTarget(E,E),t=new c.WebGLRenderTarget(E,E);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;var r=new c.PlaneBufferGeometry(y,D).rotateX(Math.PI/2),i=new c.Mesh(r),a=new c.MeshDepthMaterial;a.depthTest=a.depthWrite=!1,a.onBeforeCompile=function(e){e.uniforms=(0,n.Z)((0,n.Z)({},e.uniforms),{},{ucolor:{value:new c.Color(T).convertSRGBToLinear()}}),e.fragmentShader=e.fragmentShader.replace("void main() {","uniform vec3 ucolor;\n           void main() {\n          "),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor, ( 1.0 - fragCoordZ ) * 1.0 );")};var o=new c.ShaderMaterial(v),u=new c.ShaderMaterial(f);return u.depthTest=o.depthTest=!1,[e,r,a,i,o,u,t]}),[E,y,D,l,T]),O=(0,i.Z)(I,7),W=O[0],_=O[1],z=O[2],G=O[3],H=O[4],V=O[5],X=O[6],Y=function(e){G.visible=!0,G.material=H,H.uniforms.tDiffuse.value=W.texture,H.uniforms.h.value=1*e/256,P.setRenderTarget(X),P.render(G,B.current),G.material=V,V.uniforms.tDiffuse.value=X.texture,V.uniforms.v.value=1*e/256,P.setRenderTarget(W),P.render(G,B.current),G.visible=!1},N=0;return(0,s.x)((function(){if(B.current&&(h===1/0||N<h)){var e=A.background;A.background=null;var t=A.overrideMaterial;A.overrideMaterial=z,P.setRenderTarget(W),P.render(A,B.current),A.overrideMaterial=t,Y(M),j&&Y(.4*M),P.setRenderTarget(null),A.background=e,N++}})),u.createElement("group",(0,o.Z)({"rotation-x":Math.PI/2},F,{ref:t}),u.createElement("mesh",{renderOrder:q,geometry:_,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},u.createElement("meshBasicMaterial",{map:W.texture,"map-encoding":P.outputEncoding,transparent:!0,opacity:x,depthWrite:L})),u.createElement("orthographicCamera",{ref:B,args:[-y/2,y/2,D/2,-D/2,0,Z]}))}))},9142:function(e,t,r){r.d(t,{H:function(){return l}});var n=r(9439),i=r(4925),a=r(7462),o=r(2791),u=r(7760),c=r(1690),s=r(9292),v=r(8202),f=["children","controls","shadows","adjustCamera","environment","intensity","preset","shadowBias","contactShadow"],d={rembrandt:{main:[1,2,1],fill:[-2,-.5,-2]},portrait:{main:[-1,2,.5],fill:[-1,.5,-1.5]},upfront:{main:[0,2,1],fill:[-1,.5,-1.5]},soft:{main:[-2,4,4],fill:[-1,.5,-1.5]}};function l(e){var t=e.children,r=e.controls,l=e.shadows,m=void 0===l||l,h=e.adjustCamera,p=void 0===h||h,x=e.environment,g=void 0===x?"city":x,y=e.intensity,w=void 0===y?1:y,D=e.preset,U=void 0===D?"rembrandt":D,M=e.shadowBias,b=void 0===M?0:M,Z=e.contactShadow,S=void 0===Z?{blur:2,opacity:.5,position:[0,0,0]}:Z,E=(0,i.Z)(e,f),R=d[U],j=(0,c.w)((function(e){return e.camera})),k=(0,c.w)((function(e){return e.controls})),T=o.useRef(null),C=o.useRef(null),L=o.useState({radius:0,width:0,height:0}),q=(0,n.Z)(L,2),F=q[0],A=F.radius,P=F.width,B=F.height,I=q[1];return o.useLayoutEffect((function(){T.current.position.set(0,0,0),T.current.updateWorldMatrix(!0,!0);var e=(new u.Box3).setFromObject(C.current),t=new u.Vector3,r=new u.Sphere,n=e.max.y-e.min.y,i=e.max.x-e.min.x;e.getCenter(t),e.getBoundingSphere(r),I({radius:r.radius,width:i,height:n}),T.current.position.set(-t.x,-t.y+n/2,-t.z)}),[t]),o.useLayoutEffect((function(){if(p){var e=A/(B>P?1.5:2.5);j.position.set(0,.5*A,2.5*A),j.near=.1,j.far=Math.max(5e3,4*A),j.lookAt(0,e,0);var t=k||(null==r?void 0:r.current);t&&(t.target.set(0,e,0),t.update())}}),[k,A,B,P,p]),o.createElement("group",E,o.createElement("group",{ref:T},o.createElement("group",{ref:C},t)),S&&o.createElement(v.j,(0,a.Z)({scale:2*A,far:A/2},S)),g&&o.createElement(s.qA,{preset:g}),o.createElement("ambientLight",{intensity:w/3}),o.createElement("spotLight",{penumbra:1,position:[R.main[0]*A,R.main[1]*A,R.main[2]*A],intensity:2*w,castShadow:m,"shadow-bias":b}),o.createElement("pointLight",{position:[R.fill[0]*A,R.fill[1]*A,R.fill[2]*A],intensity:w}))}},6483:function(e,t,r){r.d(t,{v:function(){return u}});var n=r(9439),i=r(2791),a=r(7760),o=r(1690);function u(e,t){var r=i.useRef(),u=i.useState((function(){return t?t instanceof a.Object3D?{current:t}:t:r})),c=(0,n.Z)(u,1)[0],s=i.useState((function(){return new a.AnimationMixer(void 0)})),v=(0,n.Z)(s,1)[0],f=i.useRef({}),d=i.useState((function(){var t={};return e.forEach((function(e){return Object.defineProperty(t,e.name,{enumerable:!0,get:function(){if(c.current)return f.current[e.name]||(f.current[e.name]=v.clipAction(e,c.current))}})})),{ref:c,clips:e,actions:t,names:e.map((function(e){return e.name})),mixer:v}})),l=(0,n.Z)(d,1)[0];return(0,o.x)((function(e,t){return v.update(t)})),i.useEffect((function(){var e=c.current;return function(){f.current={},Object.values(l.actions).forEach((function(t){e&&v.uncacheAction(t,e)}))}}),[e]),l}}}]);
//# sourceMappingURL=34.18bf43f0.chunk.js.map