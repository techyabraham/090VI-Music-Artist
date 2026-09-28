 'use client';
import Link from 'next/link';import {useState} from 'react';
type Props={className?:string;label?:string;tabIndex?:number};
export function Logo({className='',label='090VI home',tabIndex}:Props){const [failed,setFailed]=useState(false);return <Link className={`logo-link ${className}`} href="/" aria-label={label} tabIndex={tabIndex}>{failed?<span className="logo-fallback">090VI</span>:<img src="/images/brand/090vi-logo-768.png" srcSet="/images/brand/090vi-logo-384.png 384w, /images/brand/090vi-logo-768.png 768w, /images/logo.png 1536w" sizes="(max-width: 700px) 108px, 144px" width="1536" height="1024" alt="090VI" decoding="async" onError={()=>setFailed(true)}/>}</Link>}
