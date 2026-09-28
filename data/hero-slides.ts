export type HeroSlide={id:'film'|'portrait'|'still';label:string;image:string;alt:string;position:string;video?:string;maxDurationMs?:number};
export const heroSlides:HeroSlide[]=[
 {id:'film',label:'A moving portrait',image:'/images/artist/hero.jpg',alt:'090VI in a cinematic portrait',position:'68% center',video:'/video/hero.mp4',maxDurationMs:10_000},
 {id:'portrait',label:'The artist',image:'/images/artist/hero2.jpg',alt:'090VI, looking beyond the obvious',position:'52% center'},
 {id:'still',label:'Lagos · Afropop',image:'/images/artist/hero.jpg',alt:'090VI in a cinematic portrait',position:'68% center'},
];
