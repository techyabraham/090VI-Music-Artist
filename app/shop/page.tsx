import type {Metadata} from 'next';
import {MerchCollection} from '../../components/MerchCollection';
export const metadata:Metadata={title:'Merch — Lyrical Monster',description:'Explore the 090VI Lyrical Monster hoodie and tee collection.',alternates:{canonical:'/shop/'}};
export default function Shop(){return <section className="section page-section merch-section"><p className="eyebrow">090VI / WEAR THE SOUND</p><h1>Lyrical<br/><em>Monster.</em></h1><p className="merch-lead">From the speakers to the street.<br/>Explore every angle of the collection.</p><MerchCollection/><p className="small-note">Enquire with the team for available sizes, pricing and delivery. Product availability and your order will be confirmed before any payment.</p></section>}
