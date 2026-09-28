'use client';
import {useRef} from 'react';
export function VideoViewer(){const dialog=useRef<HTMLDialogElement>(null);return <><button className="text-link" onClick={()=>dialog.current?.showModal()}>WATCH THE FILM ↗</button><dialog ref={dialog} className="video-dialog" onClick={e=>{if(e.target===dialog.current)dialog.current?.close()}}><button className="viewer-close" onClick={()=>dialog.current?.close()}>CLOSE ×</button><video controls playsInline preload="none" poster="/images/artist/hero.jpg"><source src="/video/hero.mp4" type="video/mp4"/></video></dialog></>}
