import fs from 'node:fs';
// Check the actual local text backplates against a worst-case pure white photo.
// The portrait outside these text blocks does not need a dark blanket overlay.
const css=fs.readFileSync('app/experience.css','utf8');
const luminance=(v:number)=>{const s=v/255;return s<=.04045?s/12.92:((s+.055)/1.055)**2.4};
for(const selector of ['hero-copy','hero-poetry']){
 const rule=css.match(new RegExp(`\\.${selector}\\{([^}]+)\\}`))?.[1];
 const alpha=Number(rule?.match(/background:rgba\(5,5,5,([.\d]+)\)/)?.[1]);
 if(!alpha)throw new Error(`Cannot find the ${selector} text backplate`);
 const background=255*(1-alpha)+5*alpha;
 const ratio=(luminance(240)+.05)/(luminance(background)+.05);
 console.log(`${selector}: minimum contrast ${ratio.toFixed(2)}:1 on a white photo (required 4.5:1)`);
 if(ratio<4.5)throw new Error(`${selector} text contrast is below 4.5:1`);
}
