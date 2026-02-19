import{j as e,C as p,r as i,c,V as m,u as l,D as v}from"./three-zuKYpvI2.js";const f=`
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,h=`
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
`;function x(){const s=i.useRef(null),o=i.useRef(null),u=i.useRef({uTime:{value:0},uMouse:{value:new m(.5,.5)},uColor1:{value:new c("#a855f7")},uColor2:{value:new c("#06b6d4")}});return l(a=>{o.current&&(o.current.uniforms.uTime.value=a.clock.elapsedTime)}),i.useEffect(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const r=n=>{o.current&&(o.current.uniforms.uMouse.value.x=n.clientX/window.innerWidth,o.current.uniforms.uMouse.value.y=1-n.clientY/window.innerHeight)};return window.addEventListener("mousemove",r),()=>window.removeEventListener("mousemove",r)},[]),e.jsxs("mesh",{"code-path":"src\\components\\BackgroundGrid.tsx:74:5",ref:s,rotation:[-Math.PI/2.5,0,0],position:[0,-2,0],children:[e.jsx("planeGeometry",{"code-path":"src\\components\\BackgroundGrid.tsx:75:7",args:[20,20,1,1]}),e.jsx("shaderMaterial",{"code-path":"src\\components\\BackgroundGrid.tsx:76:7",ref:o,vertexShader:f,fragmentShader:h,uniforms:u.current,transparent:!0,side:v})]})}function g(){const s=i.useRef(null),o=60,[u,a]=i.useMemo(()=>{const r=new Float32Array(o*3),n=new Float32Array(o*3);for(let t=0;t<o;t++){r[t*3]=(Math.random()-.5)*20,r[t*3+1]=(Math.random()-.5)*20,r[t*3+2]=(Math.random()-.5)*20;const d=Math.random()>.5?new c("#a855f7"):new c("#06b6d4");n[t*3]=d.r,n[t*3+1]=d.g,n[t*3+2]=d.b}return[r,n]},[]);return l(r=>{s.current&&(s.current.rotation.y=r.clock.elapsedTime*.05,s.current.rotation.x=Math.sin(r.clock.elapsedTime*.1)*.1)}),e.jsxs("points",{"code-path":"src\\components\\BackgroundGrid.tsx:118:5",ref:s,children:[e.jsxs("bufferGeometry",{"code-path":"src\\components\\BackgroundGrid.tsx:119:7",children:[e.jsx("bufferAttribute",{"code-path":"src\\components\\BackgroundGrid.tsx:120:9",attach:"attributes-position",args:[u,3]}),e.jsx("bufferAttribute",{"code-path":"src\\components\\BackgroundGrid.tsx:124:9",attach:"attributes-color",args:[a,3]})]}),e.jsx("pointsMaterial",{"code-path":"src\\components\\BackgroundGrid.tsx:129:7",size:.05,vertexColors:!0,transparent:!0,opacity:.8,sizeAttenuation:!0})]})}function k(){return e.jsxs("div",{"code-path":"src\\components\\BackgroundGrid.tsx:142:5",className:"fixed inset-0 z-0",children:[e.jsxs(p,{"code-path":"src\\components\\BackgroundGrid.tsx:143:7",camera:{position:[0,3,8],fov:60},dpr:[1,1.25],gl:{antialias:!1,alpha:!0,powerPreference:"high-performance"},performance:{min:.7},children:[e.jsx("ambientLight",{"code-path":"src\\components\\BackgroundGrid.tsx:149:9",intensity:.5}),e.jsx(x,{"code-path":"src\\components\\BackgroundGrid.tsx:150:9"}),e.jsx(g,{"code-path":"src\\components\\BackgroundGrid.tsx:151:9"})]}),e.jsx("div",{"code-path":"src\\components\\BackgroundGrid.tsx:155:7",className:"absolute inset-0 cyber-grid opacity-30 pointer-events-none"})]})}export{k as default};
