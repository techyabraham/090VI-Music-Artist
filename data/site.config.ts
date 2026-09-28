const productionHost=process.env.VERCEL_PROJECT_PRODUCTION_URL;
if(process.env.NODE_ENV==='production'&&!process.env.NEXT_PUBLIC_SITE_URL&&!productionHost)console.warn('NEXT_PUBLIC_SITE_URL is unset for production; canonical URLs will use the localhost fallback.');
export const site = { name:'090VI', url: process.env.NEXT_PUBLIC_SITE_URL ?? (productionHost?`https://${productionHost}`:'http://localhost:3000'), features:{music:true,live:true,gallery:true,press:true,booking:true,story:true,visuals:true,shop:false,vault:false,frequencyEngine:true} } as const;
