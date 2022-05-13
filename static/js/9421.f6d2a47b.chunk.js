"use strict";(self.webpackChunkr3f_examples=self.webpackChunkr3f_examples||[]).push([[9421],{4637:function(e,t,r){r.d(t,{z:function(){return c}});var o=r(4925),n=r(7462),i=r(1690),a=r(2791),s=r(233),l=["makeDefault","camera","regress","domElement","enableDamping","onChange","onStart","onEnd"],c=a.forwardRef((function(e,t){var r=e.makeDefault,c=e.camera,h=e.regress,u=e.domElement,v=e.enableDamping,f=void 0===v||v,m=e.onChange,p=e.onStart,d=e.onEnd,g=(0,o.Z)(e,l),y=(0,i.w)((function(e){return e.invalidate})),x=(0,i.w)((function(e){return e.camera})),b=(0,i.w)((function(e){return e.gl})),N=(0,i.w)((function(e){return e.events})),w=(0,i.w)((function(e){return e.set})),M=(0,i.w)((function(e){return e.get})),V=(0,i.w)((function(e){return e.performance})),S=c||x,U=u||N.connected||b.domElement,k=a.useMemo((function(){return new s.z(S)}),[S]);return(0,i.x)((function(){k.enabled&&k.update()}),-1),a.useEffect((function(){return k.connect(U),function(){k.dispose()}}),[U,h,k,y]),a.useEffect((function(){var e=function(e){y(),h&&V.regress(),m&&m(e)};return k.addEventListener("change",e),p&&k.addEventListener("start",p),d&&k.addEventListener("end",d),function(){p&&k.removeEventListener("start",p),d&&k.removeEventListener("end",d),k.removeEventListener("change",e)}}),[m,p,d]),a.useEffect((function(){if(r){var e=M().controls;return w({controls:k}),function(){return w({controls:e})}}}),[r,k]),a.createElement("primitive",(0,n.Z)({ref:t,object:k,enableDamping:f},g))}))},4671:function(e,t,r){r.d(t,{q:function(){return p}});var o=r(9439),n=r(4925),i=r(7462),a=r(2791),s=r(3144),l=r(5671),c=r(136),h=r(9388),u=r(4942),v=r(7760),f=function(e){(0,c.Z)(r,e);var t=(0,h.Z)(r);function r(){return(0,l.Z)(this,r),t.call(this,new v.BoxGeometry(1,1,1),r.material)}return(0,s.Z)(r)}(v.Mesh);(0,u.Z)(f,"SkyShader",{uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new v.Vector3},up:{value:new v.Vector3(0,1,0)}},vertexShader:["uniform vec3 sunPosition;","uniform float rayleigh;","uniform float turbidity;","uniform float mieCoefficient;","uniform vec3 up;","varying vec3 vWorldPosition;","varying vec3 vSunDirection;","varying float vSunfade;","varying vec3 vBetaR;","varying vec3 vBetaM;","varying float vSunE;","const float e = 2.71828182845904523536028747135266249775724709369995957;","const float pi = 3.141592653589793238462643383279502884197169;","const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );","const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );","const float v = 4.0;","const vec3 K = vec3( 0.686, 0.678, 0.666 );","const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );","const float cutoffAngle = 1.6110731556870734;","const float steepness = 1.5;","const float EE = 1000.0;","float sunIntensity( float zenithAngleCos ) {","\tzenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );","\treturn EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );","}","vec3 totalMie( float T ) {","\tfloat c = ( 0.2 * T ) * 10E-18;","\treturn 0.434 * c * MieConst;","}","void main() {","\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );","\tvWorldPosition = worldPosition.xyz;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","\tgl_Position.z = gl_Position.w;","\tvSunDirection = normalize( sunPosition );","\tvSunE = sunIntensity( dot( vSunDirection, up ) );","\tvSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );","\tfloat rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );","\tvBetaR = totalRayleigh * rayleighCoefficient;","\tvBetaM = totalMie( turbidity ) * mieCoefficient;","}"].join("\n"),fragmentShader:["varying vec3 vWorldPosition;","varying vec3 vSunDirection;","varying float vSunfade;","varying vec3 vBetaR;","varying vec3 vBetaM;","varying float vSunE;","uniform float mieDirectionalG;","uniform vec3 up;","const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );","const float pi = 3.141592653589793238462643383279502884197169;","const float n = 1.0003;","const float N = 2.545E25;","const float rayleighZenithLength = 8.4E3;","const float mieZenithLength = 1.25E3;","const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;","const float THREE_OVER_SIXTEENPI = 0.05968310365946075;","const float ONE_OVER_FOURPI = 0.07957747154594767;","float rayleighPhase( float cosTheta ) {","\treturn THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );","}","float hgPhase( float cosTheta, float g ) {","\tfloat g2 = pow( g, 2.0 );","\tfloat inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );","\treturn ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );","}","void main() {","\tvec3 direction = normalize( vWorldPosition - cameraPos );","\tfloat zenithAngle = acos( max( 0.0, dot( up, direction ) ) );","\tfloat inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );","\tfloat sR = rayleighZenithLength * inverse;","\tfloat sM = mieZenithLength * inverse;","\tvec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );","\tfloat cosTheta = dot( direction, vSunDirection );","\tfloat rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );","\tvec3 betaRTheta = vBetaR * rPhase;","\tfloat mPhase = hgPhase( cosTheta, mieDirectionalG );","\tvec3 betaMTheta = vBetaM * mPhase;","\tvec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );","\tLin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );","\tfloat theta = acos( direction.y ); // elevation --\x3e y-axis, [-pi/2, pi/2]","\tfloat phi = atan( direction.z, direction.x ); // azimuth --\x3e x-axis [-pi/2, pi/2]","\tvec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );","\tvec3 L0 = vec3( 0.1 ) * Fex;","\tfloat sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );","\tL0 += ( vSunE * 19000.0 * Fex ) * sundisk;","\tvec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );","\tvec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );","\tgl_FragColor = vec4( retColor, 1.0 );","#include <tonemapping_fragment>","#include <encodings_fragment>","}"].join("\n")}),(0,u.Z)(f,"material",new v.ShaderMaterial({name:"SkyShader",fragmentShader:f.SkyShader.fragmentShader,vertexShader:f.SkyShader.vertexShader,uniforms:v.UniformsUtils.clone(f.SkyShader.uniforms),side:v.BackSide,depthWrite:!1}));var m=["inclination","azimuth","distance","mieCoefficient","mieDirectionalG","rayleigh","turbidity","sunPosition"];var p=a.forwardRef((function(e,t){var r=e.inclination,s=void 0===r?.6:r,l=e.azimuth,c=void 0===l?.1:l,h=e.distance,u=void 0===h?1e3:h,p=e.mieCoefficient,d=void 0===p?.005:p,g=e.mieDirectionalG,y=void 0===g?.8:g,x=e.rayleigh,b=void 0===x?.5:x,N=e.turbidity,w=void 0===N?10:N,M=e.sunPosition,V=void 0===M?function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new v.Vector3,o=Math.PI*(e-.5),n=2*Math.PI*(t-.5);return r.x=Math.cos(n),r.y=Math.sin(o),r.z=Math.sin(n),r}(s,c):M,S=(0,n.Z)(e,m),U=a.useMemo((function(){return(new v.Vector3).setScalar(u)}),[u]),k=a.useState((function(){return new f})),E=(0,o.Z)(k,1)[0];return a.createElement("primitive",(0,i.Z)({object:E,ref:t,"material-uniforms-mieCoefficient-value":d,"material-uniforms-mieDirectionalG-value":y,"material-uniforms-rayleigh-value":b,"material-uniforms-sunPosition-value":V,"material-uniforms-turbidity-value":w,scale:U},S))}))},3429:function(e,t,r){r.d(t,{g:function(){return v}});var o=r(1413),n=r(4942),i=r(9439),a=r(3144),s=r(5671),l=r(7326),c=r(136),h=r(9388),u=r(7760);function v(e,t,r,v){return function(f){(0,c.Z)(p,f);var m=(0,h.Z)(p);function p(){var a;(0,s.Z)(this,p);var c=Object.entries(e);return a=m.call(this,{uniforms:c.reduce((function(e,t){var r=(0,i.Z)(t,2),a=r[0],s=r[1],l=u.UniformsUtils.clone((0,n.Z)({},a,{value:s}));return(0,o.Z)((0,o.Z)({},e),l)}),{}),vertexShader:t,fragmentShader:r}),c.forEach((function(e){var t=(0,i.Z)(e,1)[0];return Object.defineProperty((0,l.Z)(a),t,{get:function(){return a.uniforms[t].value},set:function(e){return a.uniforms[t].value=e}})})),v&&v((0,l.Z)(a)),a}return(0,a.Z)(p)}(u.ShaderMaterial)}},9954:function(e,t,r){var o=r(5671),n=r(3144),i=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6,s=1/6,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),u=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.random;(0,o.Z)(this,e);var r="function"==typeof t?t:m(t);this.p=f(r),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var n=0;n<512;n++)this.perm[n]=this.p[255&n],this.permMod12[n]=this.perm[n]%12}return(0,n.Z)(e,[{key:"noise2D",value:function(e,t){var r,o,n=this.permMod12,s=this.perm,l=0,c=0,u=0,v=(e+t)*i,f=Math.floor(e+v),m=Math.floor(t+v),p=(f+m)*a,d=e-(f-p),g=t-(m-p);d>g?(r=1,o=0):(r=0,o=1);var y=d-r+a,x=g-o+a,b=d-1+2*a,N=g-1+2*a,w=255&f,M=255&m,V=.5-d*d-g*g;if(V>=0){var S=3*n[w+s[M]];l=(V*=V)*V*(h[S]*d+h[S+1]*g)}var U=.5-y*y-x*x;if(U>=0){var k=3*n[w+r+s[M+o]];c=(U*=U)*U*(h[k]*y+h[k+1]*x)}var E=.5-b*b-N*N;if(E>=0){var B=3*n[w+1+s[M+1]];u=(E*=E)*E*(h[B]*b+h[B+1]*N)}return 70*(l+c+u)}},{key:"noise3D",value:function(e,t,r){var o,n,i,a,l,c,u,v,f,m,p=this.permMod12,d=this.perm,g=.3333333333333333*(e+t+r),y=Math.floor(e+g),x=Math.floor(t+g),b=Math.floor(r+g),N=(y+x+b)*s,w=e-(y-N),M=t-(x-N),V=r-(b-N);w>=M?M>=V?(l=1,c=0,u=0,v=1,f=1,m=0):w>=V?(l=1,c=0,u=0,v=1,f=0,m=1):(l=0,c=0,u=1,v=1,f=0,m=1):M<V?(l=0,c=0,u=1,v=0,f=1,m=1):w<V?(l=0,c=1,u=0,v=0,f=1,m=1):(l=0,c=1,u=0,v=1,f=1,m=0);var S=w-l+s,U=M-c+s,k=V-u+s,E=w-v+2*s,B=M-f+2*s,A=V-m+2*s,T=w-1+.5,D=M-1+.5,C=V-1+.5,Z=255&y,_=255&x,P=255&b,R=.6-w*w-M*M-V*V;if(R<0)o=0;else{var F=3*p[Z+d[_+d[P]]];o=(R*=R)*R*(h[F]*w+h[F+1]*M+h[F+2]*V)}var I=.6-S*S-U*U-k*k;if(I<0)n=0;else{var G=3*p[Z+l+d[_+c+d[P+u]]];n=(I*=I)*I*(h[G]*S+h[G+1]*U+h[G+2]*k)}var z=.6-E*E-B*B-A*A;if(z<0)i=0;else{var L=3*p[Z+v+d[_+f+d[P+m]]];i=(z*=z)*z*(h[L]*E+h[L+1]*B+h[L+2]*A)}var W=.6-T*T-D*D-C*C;if(W<0)a=0;else{var H=3*p[Z+1+d[_+1+d[P+1]]];a=(W*=W)*W*(h[H]*T+h[H+1]*D+h[H+2]*C)}return 32*(o+n+i+a)}},{key:"noise4D",value:function(e,t,r,o){var n,i,a,s,h,v=this.perm,f=(e+t+r+o)*l,m=Math.floor(e+f),p=Math.floor(t+f),d=Math.floor(r+f),g=Math.floor(o+f),y=(m+p+d+g)*c,x=e-(m-y),b=t-(p-y),N=r-(d-y),w=o-(g-y),M=0,V=0,S=0,U=0;x>b?M++:V++,x>N?M++:S++,x>w?M++:U++,b>N?V++:S++,b>w?V++:U++,N>w?S++:U++;var k=M>=3?1:0,E=V>=3?1:0,B=S>=3?1:0,A=U>=3?1:0,T=M>=2?1:0,D=V>=2?1:0,C=S>=2?1:0,Z=U>=2?1:0,_=M>=1?1:0,P=V>=1?1:0,R=S>=1?1:0,F=U>=1?1:0,I=x-k+c,G=b-E+c,z=N-B+c,L=w-A+c,W=x-T+2*c,H=b-D+2*c,O=N-C+2*c,X=w-Z+2*c,j=x-_+3*c,q=b-P+3*c,J=N-R+3*c,Y=w-F+3*c,K=x-1+4*c,Q=b-1+4*c,$=N-1+4*c,ee=w-1+4*c,te=255&m,re=255&p,oe=255&d,ne=255&g,ie=.6-x*x-b*b-N*N-w*w;if(ie<0)n=0;else{var ae=v[te+v[re+v[oe+v[ne]]]]%32*4;n=(ie*=ie)*ie*(u[ae]*x+u[ae+1]*b+u[ae+2]*N+u[ae+3]*w)}var se=.6-I*I-G*G-z*z-L*L;if(se<0)i=0;else{var le=v[te+k+v[re+E+v[oe+B+v[ne+A]]]]%32*4;i=(se*=se)*se*(u[le]*I+u[le+1]*G+u[le+2]*z+u[le+3]*L)}var ce=.6-W*W-H*H-O*O-X*X;if(ce<0)a=0;else{var he=v[te+T+v[re+D+v[oe+C+v[ne+Z]]]]%32*4;a=(ce*=ce)*ce*(u[he]*W+u[he+1]*H+u[he+2]*O+u[he+3]*X)}var ue=.6-j*j-q*q-J*J-Y*Y;if(ue<0)s=0;else{var ve=v[te+_+v[re+P+v[oe+R+v[ne+F]]]]%32*4;s=(ue*=ue)*ue*(u[ve]*j+u[ve+1]*q+u[ve+2]*J+u[ve+3]*Y)}var fe=.6-K*K-Q*Q-$*$-ee*ee;if(fe<0)h=0;else{var me=v[te+1+v[re+1+v[oe+1+v[ne+1]]]]%32*4;h=(fe*=fe)*fe*(u[me]*K+u[me+1]*Q+u[me+2]*$+u[me+3]*ee)}return 27*(n+i+a+s+h)}}]),e}();function f(e){for(var t=new Uint8Array(256),r=0;r<256;r++)t[r]=r;for(var o=0;o<255;o++){var n=o+~~(e()*(256-o)),i=t[o];t[o]=t[n],t[n]=i}return t}function m(e){var t=0,r=0,o=0,n=1,i=function(){var e=4022871197;return function(t){t=t.toString();for(var r=0;r<t.length;r++){var o=.02519603282416938*(e+=t.charCodeAt(r));o-=e=o>>>0,e=(o*=e)>>>0,e+=4294967296*(o-=e)}return 2.3283064365386963e-10*(e>>>0)}}();return t=i(" "),r=i(" "),o=i(" "),(t-=i(e))<0&&(t+=1),(r-=i(e))<0&&(r+=1),(o-=i(e))<0&&(o+=1),function(){var e=2091639*t+2.3283064365386963e-10*n;return t=r,r=o,o=e-(n=0|e)}}t.ZP=v},8430:function(e,t,r){r.d(t,{Z:function(){return u}});var o=r(5671),n=r(3144),i=r(136),a=r(9388),s=r(7760),l=new s.Matrix4,c=new s.Object3D,h=new s.Vector3,u=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,o.Z)(this,r),(e=t.call(this)).uuid=s.MathUtils.generateUUID(),e.name="",e.type="Geometry",e.vertices=[],e.colors=[],e.faces=[],e.faceVertexUvs=[[]],e.morphTargets=[],e.morphNormals=[],e.skinWeights=[],e.skinIndices=[],e.lineDistances=[],e.boundingBox=null,e.boundingSphere=null,e.elementsNeedUpdate=!1,e.verticesNeedUpdate=!1,e.uvsNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.lineDistancesNeedUpdate=!1,e.groupsNeedUpdate=!1,e}return(0,n.Z)(r,[{key:"applyMatrix4",value:function(e){for(var t=(new s.Matrix3).getNormalMatrix(e),r=0,o=this.vertices.length;r<o;r++){this.vertices[r].applyMatrix4(e)}for(var n=0,i=this.faces.length;n<i;n++){var a=this.faces[n];a.normal.applyMatrix3(t).normalize();for(var l=0,c=a.vertexNormals.length;l<c;l++)a.vertexNormals[l].applyMatrix3(t).normalize()}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this}},{key:"rotateX",value:function(e){return l.makeRotationX(e),this.applyMatrix4(l),this}},{key:"rotateY",value:function(e){return l.makeRotationY(e),this.applyMatrix4(l),this}},{key:"rotateZ",value:function(e){return l.makeRotationZ(e),this.applyMatrix4(l),this}},{key:"translate",value:function(e,t,r){return l.makeTranslation(e,t,r),this.applyMatrix4(l),this}},{key:"scale",value:function(e,t,r){return l.makeScale(e,t,r),this.applyMatrix4(l),this}},{key:"lookAt",value:function(e){return c.lookAt(e),c.updateMatrix(),this.applyMatrix4(c.matrix),this}},{key:"fromBufferGeometry",value:function(e){var t=this,r=null!==e.index?e.index:void 0,o=e.attributes;if(void 0===o.position)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;var n=o.position,i=o.normal,a=o.color,l=o.uv,c=o.uv2;void 0!==c&&(this.faceVertexUvs[1]=[]);for(var h=0;h<n.count;h++)t.vertices.push((new s.Vector3).fromBufferAttribute(n,h)),void 0!==a&&t.colors.push((new s.Color).fromBufferAttribute(a,h));function u(e,r,o,n){var h=void 0===a?[]:[t.colors[e].clone(),t.colors[r].clone(),t.colors[o].clone()],u=void 0===i?[]:[(new s.Vector3).fromBufferAttribute(i,e),(new s.Vector3).fromBufferAttribute(i,r),(new s.Vector3).fromBufferAttribute(i,o)],v=new f(e,r,o,u,h,n);t.faces.push(v),void 0!==l&&t.faceVertexUvs[0].push([(new s.Vector2).fromBufferAttribute(l,e),(new s.Vector2).fromBufferAttribute(l,r),(new s.Vector2).fromBufferAttribute(l,o)]),void 0!==c&&t.faceVertexUvs[1].push([(new s.Vector2).fromBufferAttribute(c,e),(new s.Vector2).fromBufferAttribute(c,r),(new s.Vector2).fromBufferAttribute(c,o)])}var v=e.groups;if(v.length>0)for(var m=0;m<v.length;m++)for(var p=v[m],d=p.start,g=d,y=d+p.count;g<y;g+=3)void 0!==r?u(r.getX(g),r.getX(g+1),r.getX(g+2),p.materialIndex):u(g,g+1,g+2,p.materialIndex);else if(void 0!==r)for(var x=0;x<r.count;x+=3)u(r.getX(x),r.getX(x+1),r.getX(x+2));else for(var b=0;b<n.count;b+=3)u(b,b+1,b+2);return this.computeFaceNormals(),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),this}},{key:"center",value:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(h).negate(),this.translate(h.x,h.y,h.z),this}},{key:"normalize",value:function(){this.computeBoundingSphere();var e=this.boundingSphere.center,t=this.boundingSphere.radius,r=0===t?1:1/t,o=new s.Matrix4;return o.set(r,0,0,-r*e.x,0,r,0,-r*e.y,0,0,r,-r*e.z,0,0,0,1),this.applyMatrix4(o),this}},{key:"computeFaceNormals",value:function(){for(var e=new s.Vector3,t=new s.Vector3,r=0,o=this.faces.length;r<o;r++){var n=this.faces[r],i=this.vertices[n.a],a=this.vertices[n.b],l=this.vertices[n.c];e.subVectors(l,a),t.subVectors(i,a),e.cross(t),e.normalize(),n.normal.copy(e)}}},{key:"computeVertexNormals",value:function(){for(var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=new Array(this.vertices.length),r=0,o=this.vertices.length;r<o;r++)t[r]=new s.Vector3;if(e)for(var n=new s.Vector3,i=new s.Vector3,a=0,l=this.faces.length;a<l;a++){var c=this.faces[a],h=this.vertices[c.a],u=this.vertices[c.b],v=this.vertices[c.c];n.subVectors(v,u),i.subVectors(h,u),n.cross(i),t[c.a].add(n),t[c.b].add(n),t[c.c].add(n)}else{this.computeFaceNormals();for(var f=0,m=this.faces.length;f<m;f++){var p=this.faces[f];t[p.a].add(p.normal),t[p.b].add(p.normal),t[p.c].add(p.normal)}}for(var d=0,g=this.vertices.length;d<g;d++)t[d].normalize();for(var y=0,x=this.faces.length;y<x;y++){var b=this.faces[y],N=b.vertexNormals;3===N.length?(N[0].copy(t[b.a]),N[1].copy(t[b.b]),N[2].copy(t[b.c])):(N[0]=t[b.a].clone(),N[1]=t[b.b].clone(),N[2]=t[b.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)}},{key:"computeFlatVertexNormals",value:function(){this.computeFaceNormals();for(var e=0,t=this.faces.length;e<t;e++){var r=this.faces[e],o=r.vertexNormals;3===o.length?(o[0].copy(r.normal),o[1].copy(r.normal),o[2].copy(r.normal)):(o[0]=r.normal.clone(),o[1]=r.normal.clone(),o[2]=r.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)}},{key:"computeMorphNormals",value:function(){for(var e=0,t=this.faces.length;e<t;e++){var o=this.faces[e];o.__originalFaceNormal?o.__originalFaceNormal.copy(o.normal):o.__originalFaceNormal=o.normal.clone(),o.__originalVertexNormals||(o.__originalVertexNormals=[]);for(var n=0,i=o.vertexNormals.length;n<i;n++)o.__originalVertexNormals[n]?o.__originalVertexNormals[n].copy(o.vertexNormals[n]):o.__originalVertexNormals[n]=o.vertexNormals[n].clone()}var a=new r;a.faces=this.faces;for(var l=0,c=this.morphTargets.length;l<c;l++){if(!this.morphNormals[l]){this.morphNormals[l]={},this.morphNormals[l].faceNormals=[],this.morphNormals[l].vertexNormals=[];for(var h=this.morphNormals[l].faceNormals,u=this.morphNormals[l].vertexNormals,v=0,f=this.faces.length;v<f;v++){var m=new s.Vector3,p={a:new s.Vector3,b:new s.Vector3,c:new s.Vector3};h.push(m),u.push(p)}}var d=this.morphNormals[l];a.vertices=this.morphTargets[l].vertices,a.computeFaceNormals(),a.computeVertexNormals();for(var g=0,y=this.faces.length;g<y;g++){var x=this.faces[g],b=d.faceNormals[g],N=d.vertexNormals[g];b.copy(x.normal),N.a.copy(x.vertexNormals[0]),N.b.copy(x.vertexNormals[1]),N.c.copy(x.vertexNormals[2])}}for(var w=0,M=this.faces.length;w<M;w++){var V=this.faces[w];V.normal=V.__originalFaceNormal,V.vertexNormals=V.__originalVertexNormals}}},{key:"computeBoundingBox",value:function(){null===this.boundingBox&&(this.boundingBox=new s.Box3),this.boundingBox.setFromPoints(this.vertices)}},{key:"computeBoundingSphere",value:function(){null===this.boundingSphere&&(this.boundingSphere=new s.Sphere),this.boundingSphere.setFromPoints(this.vertices)}},{key:"merge",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e&&e.isGeometry){var o,n=this.vertices.length,i=this.vertices,a=e.vertices,l=this.faces,c=e.faces,h=this.colors,u=e.colors;void 0!==t&&(o=(new s.Matrix3).getNormalMatrix(t));for(var v=0,m=a.length;v<m;v++){var p=a[v],d=p.clone();void 0!==t&&d.applyMatrix4(t),i.push(d)}for(var g=0,y=u.length;g<y;g++)h.push(u[g].clone());for(var x=0,b=c.length;x<b;x++){var N=c[x],w=void 0,M=void 0,V=N.vertexNormals,S=N.vertexColors,U=new f(N.a+n,N.b+n,N.c+n);U.normal.copy(N.normal),void 0!==o&&U.normal.applyMatrix3(o).normalize();for(var k=0,E=V.length;k<E;k++)w=V[k].clone(),void 0!==o&&w.applyMatrix3(o).normalize(),U.vertexNormals.push(w);U.color.copy(N.color);for(var B=0,A=S.length;B<A;B++)M=S[B],U.vertexColors.push(M.clone());U.materialIndex=N.materialIndex+r,l.push(U)}for(var T=0,D=e.faceVertexUvs.length;T<D;T++){var C=e.faceVertexUvs[T];void 0===this.faceVertexUvs[T]&&(this.faceVertexUvs[T]=[]);for(var Z=0,_=C.length;Z<_;Z++){for(var P=C[Z],R=[],F=0,I=P.length;F<I;F++)R.push(P[F].clone());this.faceVertexUvs[T].push(R)}}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e)}},{key:"mergeMesh",value:function(e){e&&e.isMesh?(e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e)}},{key:"mergeVertices",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t={},r=[],o=[],n=Math.pow(10,e),i=0,a=this.vertices.length;i<a;i++){var s=this.vertices[i],l=Math.round(s.x*n)+"_"+Math.round(s.y*n)+"_"+Math.round(s.z*n);void 0===t[l]?(t[l]=i,r.push(this.vertices[i]),o[i]=r.length-1):o[i]=o[t[l]]}for(var c=[],h=0,u=this.faces.length;h<u;h++){var v=this.faces[h];v.a=o[v.a],v.b=o[v.b],v.c=o[v.c];for(var f=[v.a,v.b,v.c],m=0;m<3;m++)if(f[m]===f[(m+1)%3]){c.push(h);break}}for(var p=c.length-1;p>=0;p--){var d=c[p];this.faces.splice(d,1);for(var g=0,y=this.faceVertexUvs.length;g<y;g++)this.faceVertexUvs[g].splice(d,1)}var x=this.vertices.length-r.length;return this.vertices=r,x}},{key:"setFromPoints",value:function(e){this.vertices=[];for(var t=0,r=e.length;t<r;t++){var o=e[t];this.vertices.push(new s.Vector3(o.x,o.y,o.z||0))}return this}},{key:"sortFacesByMaterialIndex",value:function(){for(var e=this.faces,t=e.length,r=0;r<t;r++)e[r]._id=r;e.sort((function(e,t){return e.materialIndex-t.materialIndex}));var o,n,i=this.faceVertexUvs[0],a=this.faceVertexUvs[1];i&&i.length===t&&(o=[]),a&&a.length===t&&(n=[]);for(var s=0;s<t;s++){var l=e[s]._id;o&&o.push(i[l]),n&&n.push(a[l])}o&&(this.faceVertexUvs[0]=o),n&&(this.faceVertexUvs[1]=n)}},{key:"toJSON",value:function(){var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),void 0!==this.parameters){var t=this.parameters;for(var r in t)void 0!==t[r]&&(e[r]=t[r]);return e}for(var o=[],n=0;n<this.vertices.length;n++){var i=this.vertices[n];o.push(i.x,i.y,i.z)}for(var a=[],s=[],l={},c=[],h={},u=[],v={},f=0;f<this.faces.length;f++){var m=this.faces[f],p=void 0!==this.faceVertexUvs[0][f],d=m.normal.length()>0,g=m.vertexNormals.length>0,y=1!==m.color.r||1!==m.color.g||1!==m.color.b,x=m.vertexColors.length>0,b=0;if(b=V(b,0,0),b=V(b,1,!0),b=V(b,2,!1),b=V(b,3,p),b=V(b,4,d),b=V(b,5,g),b=V(b,6,y),b=V(b,7,x),a.push(b),a.push(m.a,m.b,m.c),a.push(m.materialIndex),p){var N=this.faceVertexUvs[0][f];a.push(k(N[0]),k(N[1]),k(N[2]))}if(d&&a.push(S(m.normal)),g){var w=m.vertexNormals;a.push(S(w[0]),S(w[1]),S(w[2]))}if(y&&a.push(U(m.color)),x){var M=m.vertexColors;a.push(U(M[0]),U(M[1]),U(M[2]))}}function V(e,t,r){return r?e|1<<t:e&~(1<<t)}function S(e){var t=e.x.toString()+e.y.toString()+e.z.toString();return void 0!==l[t]||(l[t]=s.length/3,s.push(e.x,e.y,e.z)),l[t]}function U(e){var t=e.r.toString()+e.g.toString()+e.b.toString();return void 0!==h[t]||(h[t]=c.length,c.push(e.getHex())),h[t]}function k(e){var t=e.x.toString()+e.y.toString();return void 0!==v[t]||(v[t]=u.length/2,u.push(e.x,e.y)),v[t]}return e.data={},e.data.vertices=o,e.data.normals=s,c.length>0&&(e.data.colors=c),u.length>0&&(e.data.uvs=[u]),e.data.faces=a,e}},{key:"clone",value:function(){return(new r).copy(this)}},{key:"copy",value:function(e){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;for(var t=e.vertices,r=0,o=t.length;r<o;r++)this.vertices.push(t[r].clone());for(var n=e.colors,i=0,a=n.length;i<a;i++)this.colors.push(n[i].clone());for(var s=e.faces,l=0,c=s.length;l<c;l++)this.faces.push(s[l].clone());for(var h=0,u=e.faceVertexUvs.length;h<u;h++){var v=e.faceVertexUvs[h];void 0===this.faceVertexUvs[h]&&(this.faceVertexUvs[h]=[]);for(var f=0,m=v.length;f<m;f++){for(var p=v[f],d=[],g=0,y=p.length;g<y;g++){var x=p[g];d.push(x.clone())}this.faceVertexUvs[h].push(d)}}for(var b=e.morphTargets,N=0,w=b.length;N<w;N++){var M={};if(M.name=b[N].name,void 0!==b[N].vertices){M.vertices=[];for(var V=0,S=b[N].vertices.length;V<S;V++)M.vertices.push(b[N].vertices[V].clone())}if(void 0!==b[N].normals){M.normals=[];for(var U=0,k=b[N].normals.length;U<k;U++)M.normals.push(b[N].normals[U].clone())}this.morphTargets.push(M)}for(var E=e.morphNormals,B=0,A=E.length;B<A;B++){var T={};if(void 0!==E[B].vertexNormals){T.vertexNormals=[];for(var D=0,C=E[B].vertexNormals.length;D<C;D++){var Z=E[B].vertexNormals[D],_={};_.a=Z.a.clone(),_.b=Z.b.clone(),_.c=Z.c.clone(),T.vertexNormals.push(_)}}if(void 0!==E[B].faceNormals){T.faceNormals=[];for(var P=0,R=E[B].faceNormals.length;P<R;P++)T.faceNormals.push(E[B].faceNormals[P].clone())}this.morphNormals.push(T)}for(var F=e.skinWeights,I=0,G=F.length;I<G;I++)this.skinWeights.push(F[I].clone());for(var z=e.skinIndices,L=0,W=z.length;L<W;L++)this.skinIndices.push(z[L].clone());for(var H=e.lineDistances,O=0,X=H.length;O<X;O++)this.lineDistances.push(H[O]);var j=e.boundingBox;null!==j&&(this.boundingBox=j.clone());var q=e.boundingSphere;return null!==q&&(this.boundingSphere=q.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this}},{key:"toBufferGeometry",value:function(){var e=(new v).fromGeometry(this),t=new s.BufferGeometry,r=new Float32Array(3*e.vertices.length);if(t.setAttribute("position",new s.BufferAttribute(r,3).copyVector3sArray(e.vertices)),e.normals.length>0){var o=new Float32Array(3*e.normals.length);t.setAttribute("normal",new s.BufferAttribute(o,3).copyVector3sArray(e.normals))}if(e.colors.length>0){var n=new Float32Array(3*e.colors.length);t.setAttribute("color",new s.BufferAttribute(n,3).copyColorsArray(e.colors))}if(e.uvs.length>0){var i=new Float32Array(2*e.uvs.length);t.setAttribute("uv",new s.BufferAttribute(i,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){var a=new Float32Array(2*e.uvs2.length);t.setAttribute("uv2",new s.BufferAttribute(a,2).copyVector2sArray(e.uvs2))}for(var l in t.groups=e.groups,e.morphTargets){for(var c=[],h=e.morphTargets[l],u=0,f=h.length;u<f;u++){var m=h[u],p=new s.Float32BufferAttribute(3*m.data.length,3);p.name=m.name,c.push(p.copyVector3sArray(m.data))}t.morphAttributes[l]=c}if(e.skinIndices.length>0){var d=new s.Float32BufferAttribute(4*e.skinIndices.length,4);t.setAttribute("skinIndex",d.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){var g=new s.Float32BufferAttribute(4*e.skinWeights.length,4);t.setAttribute("skinWeight",g.copyVector4sArray(e.skinWeights))}return null!==e.boundingSphere&&(t.boundingSphere=e.boundingSphere.clone()),null!==e.boundingBox&&(t.boundingBox=e.boundingBox.clone()),t}},{key:"computeTangents",value:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")}},{key:"computeLineDistances",value:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")}},{key:"applyMatrix",value:function(e){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}},{key:"dispose",value:function(){this.dispatchEvent({type:"dispose"})}}],[{key:"createBufferGeometryFromObject",value:function(e){var t=new s.BufferGeometry,r=e.geometry;if(e.isPoints||e.isLine){var o=new s.Float32BufferAttribute(3*r.vertices.length,3),n=new s.Float32BufferAttribute(3*r.colors.length,3);if(t.setAttribute("position",o.copyVector3sArray(r.vertices)),t.setAttribute("color",n.copyColorsArray(r.colors)),r.lineDistances&&r.lineDistances.length===r.vertices.length){var i=new s.Float32BufferAttribute(r.lineDistances.length,1);t.setAttribute("lineDistance",i.copyArray(r.lineDistances))}null!==r.boundingSphere&&(t.boundingSphere=r.boundingSphere.clone()),null!==r.boundingBox&&(t.boundingBox=r.boundingBox.clone())}else e.isMesh&&(t=r.toBufferGeometry());return t}}]),r}(s.EventDispatcher);u.prototype.isGeometry=!0;var v=function(){function e(){(0,o.Z)(this,e),this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}return(0,n.Z)(e,[{key:"computeGroups",value:function(e){var t,r,o=[],n=void 0,i=e.faces;for(r=0;r<i.length;r++){var a=i[r];a.materialIndex!==n&&(n=a.materialIndex,void 0!==t&&(t.count=3*r-t.start,o.push(t)),t={start:3*r,materialIndex:n})}void 0!==t&&(t.count=3*r-t.start,o.push(t)),this.groups=o}},{key:"fromGeometry",value:function(e){var t,r=e.faces,o=e.vertices,n=e.faceVertexUvs,i=n[0]&&n[0].length>0,a=n[1]&&n[1].length>0,l=e.morphTargets,c=l.length;if(c>0){t=[];for(var h=0;h<c;h++)t[h]={name:l[h].name,data:[]};this.morphTargets.position=t}var u,v=e.morphNormals,f=v.length;if(f>0){u=[];for(var m=0;m<f;m++)u[m]={name:v[m].name,data:[]};this.morphTargets.normal=u}var p=e.skinIndices,d=e.skinWeights,g=p.length===o.length,y=d.length===o.length;o.length>0&&0===r.length&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(var x=0;x<r.length;x++){var b=r[x];this.vertices.push(o[b.a],o[b.b],o[b.c]);var N=b.vertexNormals;if(3===N.length)this.normals.push(N[0],N[1],N[2]);else{var w=b.normal;this.normals.push(w,w,w)}var M=b.vertexColors;if(3===M.length)this.colors.push(M[0],M[1],M[2]);else{var V=b.color;this.colors.push(V,V,V)}if(!0===i){var S=n[0][x];void 0!==S?this.uvs.push(S[0],S[1],S[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",x),this.uvs.push(new s.Vector2,new s.Vector2,new s.Vector2))}if(!0===a){var U=n[1][x];void 0!==U?this.uvs2.push(U[0],U[1],U[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",x),this.uvs2.push(new s.Vector2,new s.Vector2,new s.Vector2))}for(var k=0;k<c;k++){var E=l[k].vertices;t[k].data.push(E[b.a],E[b.b],E[b.c])}for(var B=0;B<f;B++){var A=v[B].vertexNormals[x];u[B].data.push(A.a,A.b,A.c)}g&&this.skinIndices.push(p[b.a],p[b.b],p[b.c]),y&&this.skinWeights.push(d[b.a],d[b.b],d[b.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),this}}]),e}(),f=function(){function e(t,r,n,i,a){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;(0,o.Z)(this,e),this.a=t,this.b=r,this.c=n,this.normal=i&&i.isVector3?i:new s.Vector3,this.vertexNormals=Array.isArray(i)?i:[],this.color=a&&a.isColor?a:new s.Color,this.vertexColors=Array.isArray(a)?a:[],this.materialIndex=l}return(0,n.Z)(e,[{key:"clone",value:function(){return(new this.constructor).copy(this)}},{key:"copy",value:function(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(var t=0,r=e.vertexNormals.length;t<r;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(var o=0,n=e.vertexColors.length;o<n;o++)this.vertexColors[o]=e.vertexColors[o].clone();return this}}]),e}()}}]);
//# sourceMappingURL=9421.f6d2a47b.chunk.js.map