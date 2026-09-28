'use client';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';

export function NavigationProgress(){
 const [active,setActive]=useState(false);const [value,setValue]=useState(0);const pathname=usePathname();
 useEffect(()=>{if(!active)return;setValue(100);const done=window.setTimeout(()=>{setActive(false);setValue(0)},240);return()=>window.clearTimeout(done)},[pathname]);
 useEffect(()=>{let startTimer=0,interval=0,finishTimer=0;const onClick=(event:MouseEvent)=>{const target=event.target;if(!(target instanceof Element))return;const anchor=target.closest('a');if(!anchor||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||anchor.target==='_blank'||anchor.hasAttribute('download'))return;const url=new URL(anchor.href,location.href);if(url.origin!==location.origin||(url.pathname===location.pathname&&url.search===location.search))return;setActive(true);setValue(12);window.clearInterval(interval);window.clearTimeout(startTimer);window.clearTimeout(finishTimer);startTimer=window.setTimeout(()=>{interval=window.setInterval(()=>setValue(v=>Math.min(88,v+Math.max(1,(88-v)*.08))),180)},100);finishTimer=window.setTimeout(()=>{setValue(100);window.setTimeout(()=>{setActive(false);setValue(0)},260)},12000)};document.addEventListener('click',onClick);return()=>{document.removeEventListener('click',onClick);window.clearInterval(interval);window.clearTimeout(startTimer);window.clearTimeout(finishTimer)}},[]);
 return <div className={`navigation-progress${active?' is-active':''}`} role="progressbar" aria-label="Loading page" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value} style={{transform:`scaleX(${value/100})`}}/>;
}
