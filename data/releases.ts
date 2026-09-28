import type { Release } from './types';
const provenance={verified:false,source:'Master build brief §10.3 seed catalogue; owner confirmation pending'};
export const releases: Release[] = [
 {id:'sisi-caro',slug:'sisi-caro',title:'Sisi Caro',type:'single',releaseDate:'2020-01-01',datePrecision:'year',streaming:[],published:true,provenance},
 {id:'estoppel',slug:'estoppel',title:'Estoppel',type:'single',releaseDate:'2022-01-01',datePrecision:'year',streaming:[],published:true,provenance},
 {id:'girl-a-wanna-dance',slug:'girl-a-wanna-dance',title:'Girl a Wanna Dance',type:'single',releaseDate:'2022-01-01',datePrecision:'year',streaming:[],published:true,provenance},
 {id:'kamasutra',slug:'kamasutra',title:'Kamasutra',type:'single',releaseDate:'2023-01-01',datePrecision:'year',streaming:[],published:true,provenance},
 {id:'no-go-kyll-yourself',slug:'no-go-kyll-yourself',title:'No Go Kyll Yourself (NGKYS)',type:'single',releaseDate:'2024-01-01',datePrecision:'year',artwork:{src:'/images/releases/no-go-kill-yourself.jpg',alt:'No Go Kyll Yourself release artwork',width:1280,height:1280},streaming:[],published:true,provenance},
 {id:'anike',slug:'anike',title:'ANIKE',type:'single',releaseDate:'2025-02-14',datePrecision:'day',artwork:{src:'/images/releases/anike.jpg',alt:'ANIKE release artwork',width:1024,height:1024},audio:{src:'/audio/previews/Anike.mp3',durationSec:21.08,kind:'preview',rightsNote:'Owner supplied preview. Measured from MP3 frames; rights require owner confirmation.'},streaming:[{platform:'appleMusic',label:'Apple Music',url:'https://music.apple.com/tt/album/anike-single/1795599518'}],published:true,provenance:{verified:false,source:'Master build brief §10.3; artwork and audio supplied by owner; owner confirmation pending'}}
];
