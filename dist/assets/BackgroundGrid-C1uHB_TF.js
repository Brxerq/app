import{j as e,C as p,r as i,c as a,V as m,u as l,D as v}from"./three-zuKYpvI2.js";function f(){const s=i.useRef(null),r=i.useRef(null),c=`
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,u=`
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vec2 grid = fract(vUv * 30.0);
      float line = step(0.95, grid.x) + step(0.95, grid.y);
      
      float dist = distance(vUv, uMouse);
      float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.5 + 0.5;
      ripple *= smoothstep(0.5, 0.0, dist);
      
      float alpha = line * 0.3 + ripple * 0.2;
      
      vec3 color = mix(uColor1, uColor2, vUv.y + sin(uTime * 0.5) * 0.2);
      
      gl_FragColor = vec4(color, alpha * 0.5);
    }
  `,t=i.useRef({uTime:{value:0},uMouse:{value:new m(.5,.5)},uColor1:{value:new a("#a855f7")},uColor2:{value:new a("#06b6d4")}});return l(n=>{r.current&&(r.current.uniforms.uTime.value=n.clock.elapsedTime)}),i.useEffect(()=>{const n=o=>{r.current&&(r.current.uniforms.uMouse.value.x=o.clientX/window.innerWidth,r.current.uniforms.uMouse.value.y=1-o.clientY/window.innerHeight)};return window.addEventListener("mousemove",n),()=>window.removeEventListener("mousemove",n)},[]),e.jsxs("mesh",{"code-path":"src\\components\\BackgroundGrid.tsx:69:5",ref:s,rotation:[-Math.PI/2.5,0,0],position:[0,-2,0],children:[e.jsx("planeGeometry",{"code-path":"src\\components\\BackgroundGrid.tsx:70:7",args:[20,20,1,1]}),e.jsx("shaderMaterial",{"code-path":"src\\components\\BackgroundGrid.tsx:71:7",ref:r,vertexShader:c,fragmentShader:u,uniforms:t.current,transparent:!0,side:v})]})}function x(){const s=i.useRef(null),r=100,[c,u]=i.useMemo(()=>{const t=new Float32Array(r*3),n=new Float32Array(r*3);for(let o=0;o<r;o++){t[o*3]=(Math.random()-.5)*20,t[o*3+1]=(Math.random()-.5)*20,t[o*3+2]=(Math.random()-.5)*20;const d=Math.random()>.5?new a("#a855f7"):new a("#06b6d4");n[o*3]=d.r,n[o*3+1]=d.g,n[o*3+2]=d.b}return[t,n]},[]);return l(t=>{s.current&&(s.current.rotation.y=t.clock.elapsedTime*.05,s.current.rotation.x=Math.sin(t.clock.elapsedTime*.1)*.1)}),e.jsxs("points",{"code-path":"src\\components\\BackgroundGrid.tsx:113:5",ref:s,children:[e.jsxs("bufferGeometry",{"code-path":"src\\components\\BackgroundGrid.tsx:114:7",children:[e.jsx("bufferAttribute",{"code-path":"src\\components\\BackgroundGrid.tsx:115:9",attach:"attributes-position",args:[c,3]}),e.jsx("bufferAttribute",{"code-path":"src\\components\\BackgroundGrid.tsx:119:9",attach:"attributes-color",args:[u,3]})]}),e.jsx("pointsMaterial",{"code-path":"src\\components\\BackgroundGrid.tsx:124:7",size:.05,vertexColors:!0,transparent:!0,opacity:.8,sizeAttenuation:!0})]})}function g(){return e.jsxs("div",{"code-path":"src\\components\\BackgroundGrid.tsx:137:5",className:"fixed inset-0 z-0",children:[e.jsxs(p,{"code-path":"src\\components\\BackgroundGrid.tsx:138:7",camera:{position:[0,3,8],fov:60},dpr:[1,2],gl:{antialias:!0,alpha:!0},children:[e.jsx("ambientLight",{"code-path":"src\\components\\BackgroundGrid.tsx:143:9",intensity:.5}),e.jsx(f,{"code-path":"src\\components\\BackgroundGrid.tsx:144:9"}),e.jsx(x,{"code-path":"src\\components\\BackgroundGrid.tsx:145:9"})]}),e.jsx("div",{"code-path":"src\\components\\BackgroundGrid.tsx:149:7",className:"absolute inset-0 cyber-grid opacity-30 pointer-events-none"})]})}export{g as default};
