import fs from 'node:fs';
import path from 'node:path';
import {gzipSync} from 'node:zlib';

const out=path.resolve('out');
const home=fs.readFileSync(path.join(out,'index.html'),'utf8');
const scripts=[...home.matchAll(/<script\b[^>]*>/g)].filter(([tag])=>!(/\bnomodule\b/i).test(tag)).map(([tag])=>tag.match(/\bsrc="([^"]+\.js)"/)?.[1]).filter(Boolean).map(src=>new URL(src,'https://static.invalid').pathname.replace(/^\//,''));
const unique=[...new Set(scripts)];
let initial=0;
for(const file of unique){const full=path.join(out,file);if(!fs.existsSync(full)){console.error(`Missing exported JavaScript: ${file}`);process.exitCode=1;continue}const bytes=gzipSync(fs.readFileSync(full)).byteLength;initial+=bytes;console.log(`${file}: ${(bytes/1024).toFixed(1)} KiB gzip`)}
console.log(`Initial home JavaScript: ${(initial/1024).toFixed(1)} KiB gzip (budget: 170 KiB)`);
if(initial>170*1024)process.exitCode=1;

const chunksDir=path.join(out,'_next','static','chunks');const engineFiles=fs.readdirSync(chunksDir).filter(file=>file.endsWith('.js')&&(()=>{const source=fs.readFileSync(path.join(chunksDir,file),'utf8');return source.includes('FrequencyCanvas')&&source.includes('devicePixelRatio')})());let lazy=0;for(const file of engineFiles)lazy+=gzipSync(fs.readFileSync(path.join(chunksDir,file))).byteLength;if(engineFiles.length){console.log(`Frequency Canvas chunks (${engineFiles.join(', ')}): ${(lazy/1024).toFixed(1)} KiB gzip (budget: 250 KiB)`);if(lazy>250*1024)process.exitCode=1}else{console.log('Frequency Canvas chunk not found; lazy chunk size check NOT RUN.');process.exitCode=1}
