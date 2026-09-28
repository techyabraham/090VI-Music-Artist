export type MotionMode='full'|'reduced';
const KEY='090vi:motion';
let mode:MotionMode='full';let source:'user'|'system'='system';
const listeners=new Set<()=>void>();
function resolve(){if(typeof window==='undefined')return;let override:string|null=null;try{override=sessionStorage.getItem(KEY)}catch{}const system=window.matchMedia('(prefers-reduced-motion: reduce)').matches;mode=override==='full'?'full':override==='reduced'?'reduced':system?'reduced':'full';source=override==='full'||override==='reduced'?'user':'system';document.documentElement.dataset.motion=mode;document.documentElement.dataset.motionSource=source;listeners.forEach(fn=>fn())}
export function subscribeMotion(fn:()=>void){listeners.add(fn);return()=>listeners.delete(fn)}
export function getMotion(){return mode}
export function getServerMotion():MotionMode{return 'reduced'}
export function getMotionSource(){return source}
export function initMotion(){if(typeof window==='undefined')return;resolve();const query=window.matchMedia('(prefers-reduced-motion: reduce)');query.addEventListener('change',resolve);return()=>query.removeEventListener('change',resolve)}
export function toggleMotion(){const next=mode==='full'?'reduced':'full';try{sessionStorage.setItem(KEY,next)}catch{}resolve()}
