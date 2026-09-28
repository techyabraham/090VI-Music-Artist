'use client';
import {useEffect,useRef,useState} from 'react';
import type {GalleryImage} from '../data/types';
import {Picture} from './Picture';

export function GalleryGrid({items}:{items:GalleryImage[]}){
 const [active,setActive]=useState<number|null>(null);
 const trigger=useRef<HTMLElement|null>(null);
 const selected=active===null?undefined:items[active];
 useEffect(()=>{if(active===null){trigger.current?.focus();return}const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setActive(null);if(e.key==='ArrowRight')setActive(i=>i===null?0:(i+1)%items.length);if(e.key==='ArrowLeft')setActive(i=>i===null?0:(i-1+items.length)%items.length);if(e.key==='Tab'){const controls=[...document.querySelectorAll<HTMLElement>('.gallery-viewer button')],first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}}};document.body.style.overflow='hidden';window.addEventListener('keydown',onKey);return()=>{document.body.style.overflow='';window.removeEventListener('keydown',onKey)}},[active,items.length]);
 return <><div className="gallery-grid">{items.map((item,i)=><button type="button" key={item.id} onClick={e=>{trigger.current=e.currentTarget;setActive(i)}} aria-label={`View image: ${item.caption}`}><Picture src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} loading="lazy"/><span>{item.caption}</span></button>)}</div>{selected&&<div className="gallery-viewer" role="dialog" aria-modal="true" aria-label="Gallery image" onClick={e=>{if(e.target===e.currentTarget)setActive(null)}}><button className="viewer-close" onClick={()=>setActive(null)} autoFocus>CLOSE ×</button><button className="viewer-prev" aria-label="Previous image" onClick={()=>setActive((active!-1+items.length)%items.length)}>←</button><figure><Picture src={selected.image.src} alt={selected.image.alt} width={selected.image.width} height={selected.image.height}/><figcaption>{selected.caption}</figcaption></figure><button className="viewer-next" aria-label="Next image" onClick={()=>setActive((active!+1)%items.length)}>→</button></div>}</>
}
