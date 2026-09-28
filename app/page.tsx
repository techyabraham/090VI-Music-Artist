import Link from 'next/link';
import {getLatestRelease,getPublishedReleases,getStreamingLinks} from '../lib/content';
import {Newsletter} from '../components/Newsletter';
import {Picture} from '../components/Picture';
import {site} from '../data/site.config';
import {HeroCarousel} from '../components/hero/HeroCarousel';
import {StreamingLinks} from '../components/StreamingLinks';
import {MerchCollection} from '../components/MerchCollection';
import {Reactions} from '../components/Reactions';
export default function Home(){const latest=getLatestRelease();return <>
 <link rel="preload" as="image" type="image/avif" imageSrcSet="/images/responsive/artist-hero-480.avif 480w, /images/responsive/artist-hero-768.avif 768w, /images/responsive/artist-hero-1080.avif 1080w" imageSizes="100vw" fetchPriority="high"/>
 <HeroCarousel/>
 <section className="listen-band" aria-label="Listen to 090VI"><p className="eyebrow">FIND YOUR FREQUENCY</p><StreamingLinks links={getStreamingLinks()}/></section>
 {latest&&<section data-reveal className="section music-section" id="music"><div className="section-head"><p className="eyebrow">01 / MUSIC</p><h2>Press play.</h2></div><article className="featured-release">{latest.artwork&&<Picture src={latest.artwork.src} alt={latest.artwork.alt} width={latest.artwork.width} height={latest.artwork.height}/>}<div className="release-info"><p className="eyebrow">FEATURED RELEASE</p><h3>{latest.title}</h3><p className="muted">{latest.releaseDate.slice(0,4)}</p><Link className="text-link" href={`/music/${latest.slug}/`}>EXPLORE RELEASE ↗</Link><StreamingLinks links={latest.streaming}/></div></article><div className="catalogue"><p className="eyebrow">SELECTED CATALOGUE</p><div className="release-list">{getPublishedReleases().toSorted((a,b)=>b.releaseDate.localeCompare(a.releaseDate)).map(r=><Link href={`/music/${r.slug}/`} key={r.slug}><span>{r.releaseDate.slice(0,4)}</span><strong>{r.title}</strong></Link>)}</div></div></section>}
 <section data-reveal className="visuals-section"><div className="visuals-copy"><p className="eyebrow">02 / VISUALS</p><h2>Sound.<br/>In another light.</h2><Link className="text-link" href="/visuals/">EXPLORE VISUALS ↗</Link></div><Link href="/visuals/"><Picture src="/images/artist/portrait.jpg" alt="Portrait of 090VI" width={819} height={1024}/></Link></section>
 <Reactions/>
 <section data-reveal className="section merch-section" id="merch"><div className="merch-intro"><div><p className="eyebrow">090VI / WEAR THE SOUND</p><h2>Lyrical<br/><em>Monster.</em></h2></div><div><p>The music moves with you.<br/>Now the artwork can, too.</p><Link className="text-link" href="/shop/">EXPLORE THE COLLECTION ↗</Link></div></div><MerchCollection compact/><p className="merch-footnote">LOUD IN COLOUR. YOURS IN SPIRIT. / 090VI</p></section>
 <section data-reveal className="section story-section"><p className="eyebrow">03 / STORY</p><h2 className="story-line">Behind the voice.<br/><span>Beyond the obvious.</span></h2><div className="story-content"><Picture src="/images/artist/portrait.jpg" alt="090VI artist portrait" width={819} height={1024}/><div><p>Every sound has a beginning. Step into the story behind the voice, the music, and the world of 090VI.</p><Link className="text-link" href="/story/">READ THE STORY ↗</Link></div></div></section>
 <section data-reveal className="section live-section"><p className="eyebrow">04 / LIVE</p><h2>NO DATES ANNOUNCED</h2><p>The next room. The next connection. New shows will appear here.</p><Link className="text-link" href="/live/">LIVE INFORMATION ↗</Link></section>
 <section data-reveal className="section gallery-section"><div className="section-head"><p className="eyebrow">05 / GALLERY</p><h2>Between moments.</h2></div><Link className="text-link" href="/gallery/">VIEW THE GALLERY ↗</Link></section>
 <section data-reveal className="section press-section"><p className="eyebrow">06 / PRESS</p><h2>Press room.</h2><Link className="text-link" href="/press/">OPEN PRESS ROOM ↗</Link></section>
 <section data-reveal className="section book-section"><p className="eyebrow">07 / BOOKING</p><h2>Your stage.<br/>His sound.<br/><em>One moment.</em></h2><p>Live performances, festivals and creative collaborations.<br/>Tell us what you have in mind.</p><Link className="booking-primary" href="/book/">START AN ENQUIRY ↗</Link></section>
 <Newsletter/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'MusicGroup',name:'090VI',url:site.url,logo:`${site.url}/images/logo.png`})}}/>
 </>}
