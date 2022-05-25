"use strict";(self.webpackChunkr3f_examples=self.webpackChunkr3f_examples||[]).push([[1053],{2330:function(e,n,t){t.d(n,{i:function(){return s}});var r=t(9439),o=t(2791),u=t(1690),i=t(3144),c=t(5671),a=t(4942),f=(0,i.Z)((function e(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math;(0,c.Z)(this,e),(0,a.Z)(this,"grad3",[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]]),(0,a.Z)(this,"grad4",[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]]),(0,a.Z)(this,"p",[]),(0,a.Z)(this,"perm",[]),(0,a.Z)(this,"simplex",[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]),(0,a.Z)(this,"dot",(function(e,n,t){return e[0]*n+e[1]*t})),(0,a.Z)(this,"dot3",(function(e,n,t,r){return e[0]*n+e[1]*t+e[2]*r})),(0,a.Z)(this,"dot4",(function(e,n,t,r,o){return e[0]*n+e[1]*t+e[2]*r+e[3]*o})),(0,a.Z)(this,"noise",(function(e,t){var r=(e+t)*(.5*(Math.sqrt(3)-1)),o=Math.floor(e+r),u=Math.floor(t+r),i=(3-Math.sqrt(3))/6,c=(o+u)*i,a=e-(o-c),f=t-(u-c),s=0,d=1;a>f&&(s=1,d=0);var m=a-s+i,l=f-d+i,p=a-1+2*i,v=f-1+2*i,h=255&o,g=255&u,w=n.perm[h+n.perm[g]]%12,E=n.perm[h+s+n.perm[g+d]]%12,Z=n.perm[h+1+n.perm[g+1]]%12,M=.5-a*a-f*f,x=.5-m*m-l*l,b=.5-p*p-v*v;return 70*((M<0?0:(M*=M)*M*n.dot(n.grad3[w],a,f))+(x<0?0:(x*=x)*x*n.dot(n.grad3[E],m,l))+(b<0?0:(b*=b)*b*n.dot(n.grad3[Z],p,v)))})),(0,a.Z)(this,"noise3d",(function(e,t,r){var o,u,i,c,a,f,s=(e+t+r)*(1/3),d=Math.floor(e+s),m=Math.floor(t+s),l=Math.floor(r+s),p=1/6,v=(d+m+l)*p,h=e-(d-v),g=t-(m-v),w=r-(l-v);h>=g?g>=w?(o=1,u=0,i=0,c=1,a=1,f=0):h>=w?(o=1,u=0,i=0,c=1,a=0,f=1):(o=0,u=0,i=1,c=1,a=0,f=1):g<w?(o=0,u=0,i=1,c=0,a=1,f=1):h<w?(o=0,u=1,i=0,c=0,a=1,f=1):(o=0,u=1,i=0,c=1,a=1,f=0);var E=h-o+p,Z=g-u+p,M=w-i+p,x=h-c+2*p,b=g-a+2*p,y=w-f+2*p,k=h-1+.5,L=g-1+.5,R=w-1+.5,S=255&d,q=255&m,D=255&l,j=n.perm[S+n.perm[q+n.perm[D]]]%12,C=n.perm[S+o+n.perm[q+u+n.perm[D+i]]]%12,z=n.perm[S+c+n.perm[q+a+n.perm[D+f]]]%12,A=n.perm[S+1+n.perm[q+1+n.perm[D+1]]]%12,F=.6-h*h-g*g-w*w,I=.6-E*E-Z*Z-M*M,O=.6-x*x-b*b-y*y,T=.6-k*k-L*L-R*R;return 32*((F<0?0:(F*=F)*F*n.dot3(n.grad3[j],h,g,w))+(I<0?0:(I*=I)*I*n.dot3(n.grad3[C],E,Z,M))+(O<0?0:(O*=O)*O*n.dot3(n.grad3[z],x,b,y))+(T<0?0:(T*=T)*T*n.dot3(n.grad3[A],k,L,R)))})),(0,a.Z)(this,"noise4d",(function(e,t,r,o){var u,i,c,a,f,s,d,m,l,p,v,h,g=n.grad4,w=n.simplex,E=n.perm,Z=(Math.sqrt(5)-1)/4,M=(5-Math.sqrt(5))/20,x=(e+t+r+o)*Z,b=Math.floor(e+x),y=Math.floor(t+x),k=Math.floor(r+x),L=Math.floor(o+x),R=(b+y+k+L)*M,S=e-(b-R),q=t-(y-R),D=r-(k-R),j=o-(L-R),C=(S>q?32:0)+(S>D?16:0)+(q>D?8:0)+(S>j?4:0)+(q>j?2:0)+(D>j?1:0),z=S-(u=w[C][0]>=3?1:0)+M,A=q-(i=w[C][1]>=3?1:0)+M,F=D-(c=w[C][2]>=3?1:0)+M,I=j-(a=w[C][3]>=3?1:0)+M,O=S-(f=w[C][0]>=2?1:0)+2*M,T=q-(s=w[C][1]>=2?1:0)+2*M,P=D-(d=w[C][2]>=2?1:0)+2*M,_=j-(m=w[C][3]>=2?1:0)+2*M,H=S-(l=w[C][0]>=1?1:0)+3*M,Y=q-(p=w[C][1]>=1?1:0)+3*M,B=D-(v=w[C][2]>=1?1:0)+3*M,G=j-(h=w[C][3]>=1?1:0)+3*M,J=S-1+4*M,K=q-1+4*M,N=D-1+4*M,Q=j-1+4*M,U=255&b,V=255&y,W=255&k,X=255&L,$=E[U+E[V+E[W+E[X]]]]%32,ee=E[U+u+E[V+i+E[W+c+E[X+a]]]]%32,ne=E[U+f+E[V+s+E[W+d+E[X+m]]]]%32,te=E[U+l+E[V+p+E[W+v+E[X+h]]]]%32,re=E[U+1+E[V+1+E[W+1+E[X+1]]]]%32,oe=.6-S*S-q*q-D*D-j*j,ue=.6-z*z-A*A-F*F-I*I,ie=.6-O*O-T*T-P*P-_*_,ce=.6-H*H-Y*Y-B*B-G*G,ae=.6-J*J-K*K-N*N-Q*Q;return 27*((oe<0?0:(oe*=oe)*oe*n.dot4(g[$],S,q,D,j))+(ue<0?0:(ue*=ue)*ue*n.dot4(g[ee],z,A,F,I))+(ie<0?0:(ie*=ie)*ie*n.dot4(g[ne],O,T,P,_))+(ce<0?0:(ce*=ce)*ce*n.dot4(g[te],H,Y,B,G))+(ae<0?0:(ae*=ae)*ae*n.dot4(g[re],J,K,N,Q)))}));for(var r=0;r<256;r++)this.p[r]=Math.floor(256*t.random());for(var o=0;o<512;o++)this.perm[o]=this.p[255&o]})),s=o.forwardRef((function(e,n){var t=e.intensity,i=void 0===t?1:t,c=e.decay,a=e.decayRate,s=void 0===a?.65:a,d=e.maxYaw,m=void 0===d?.1:d,l=e.maxPitch,p=void 0===l?.1:l,v=e.maxRoll,h=void 0===v?.1:v,g=e.yawFrequency,w=void 0===g?.1:g,E=e.pitchFrequency,Z=void 0===E?.1:E,M=e.rollFrequency,x=void 0===M?.1:M,b=(0,u.w)((function(e){return e.camera})),y=(0,u.w)((function(e){return e.controls})),k=o.useRef(i),L=o.useRef(b.rotation.clone()),R=o.useState((function(){return new f})),S=(0,r.Z)(R,1)[0],q=o.useState((function(){return new f})),D=(0,r.Z)(q,1)[0],j=o.useState((function(){return new f})),C=(0,r.Z)(j,1)[0],z=function(){(k.current<0||k.current>1)&&(k.current=k.current<0?0:1)};return o.useImperativeHandle(n,(function(){return{getIntensity:function(){return k.current},setIntensity:function(e){k.current=e,z()}}}),[]),o.useEffect((function(){if(y){var e=function(){L.current=b.rotation.clone()};return y.addEventListener("change",e),e(),function(){y.removeEventListener("change",e)}}}),[b,y]),(0,u.x)((function(e,n){var t=Math.pow(k.current,2),r=m*t*S.noise(e.clock.elapsedTime*w,1),o=p*t*D.noise(e.clock.elapsedTime*Z,1),u=h*t*C.noise(e.clock.elapsedTime*x,1);b.rotation.set(L.current.x+o,L.current.y+r,L.current.z+u),c&&k.current>0&&(k.current-=s*n,z())})),null}))},4637:function(e,n,t){t.d(n,{z:function(){return f}});var r=t(4925),o=t(7462),u=t(1690),i=t(2791),c=t(233),a=["makeDefault","camera","regress","domElement","enableDamping","onChange","onStart","onEnd"],f=i.forwardRef((function(e,n){var t=e.makeDefault,f=e.camera,s=e.regress,d=e.domElement,m=e.enableDamping,l=void 0===m||m,p=e.onChange,v=e.onStart,h=e.onEnd,g=(0,r.Z)(e,a),w=(0,u.w)((function(e){return e.invalidate})),E=(0,u.w)((function(e){return e.camera})),Z=(0,u.w)((function(e){return e.gl})),M=(0,u.w)((function(e){return e.events})),x=(0,u.w)((function(e){return e.set})),b=(0,u.w)((function(e){return e.get})),y=(0,u.w)((function(e){return e.performance})),k=f||E,L=d||M.connected||Z.domElement,R=i.useMemo((function(){return new c.z(k)}),[k]);return(0,u.x)((function(){R.enabled&&R.update()}),-1),i.useEffect((function(){return R.connect(L),function(){R.dispose()}}),[L,s,R,w]),i.useEffect((function(){var e=function(e){w(),s&&y.regress(),p&&p(e)};return R.addEventListener("change",e),v&&R.addEventListener("start",v),h&&R.addEventListener("end",h),function(){v&&R.removeEventListener("start",v),h&&R.removeEventListener("end",h),R.removeEventListener("change",e)}}),[p,v,h]),i.useEffect((function(){if(t){var e=b().controls;return x({controls:R}),function(){return x({controls:e})}}}),[t,R]),i.createElement("primitive",(0,o.Z)({ref:n,object:R,enableDamping:l},g))}))},6483:function(e,n,t){t.d(n,{v:function(){return c}});var r=t(9439),o=t(2791),u=t(7760),i=t(1690);function c(e,n){var t=o.useRef(),c=o.useState((function(){return n?n instanceof u.Object3D?{current:n}:n:t})),a=(0,r.Z)(c,1)[0],f=o.useState((function(){return new u.AnimationMixer(void 0)})),s=(0,r.Z)(f,1)[0],d=o.useRef({}),m=o.useState((function(){var n={};return e.forEach((function(e){return Object.defineProperty(n,e.name,{enumerable:!0,get:function(){if(a.current)return d.current[e.name]||(d.current[e.name]=s.clipAction(e,a.current))}})})),{ref:a,clips:e,actions:n,names:e.map((function(e){return e.name})),mixer:s}})),l=(0,r.Z)(m,1)[0];return(0,i.x)((function(e,n){return s.update(n)})),o.useEffect((function(){var e=a.current;return function(){d.current={},Object.values(l.actions).forEach((function(n){e&&s.uncacheAction(n,e)}))}}),[e]),l}}}]);
//# sourceMappingURL=1053.63b15f97.chunk.js.map