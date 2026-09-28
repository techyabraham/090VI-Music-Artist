import type {Metadata} from 'next';
import Link from 'next/link';
import {Picture} from '../../components/Picture';
import {getPublishedReleases} from '../../lib/content';

export const metadata:Metadata={
  title:'The Story',
  description:'A closer look at the perspective and feeling behind 090VI: beyond the obvious.',
  alternates:{canonical:'/story/'},
};

export default function StoryPage(){
  const releases=getPublishedReleases().toSorted((a,b)=>a.releaseDate.localeCompare(b.releaseDate));
  return <article className="story-page">
    <header className="story-hero">
      <div className="story-hero-copy">
        <p className="eyebrow">090VI / THE STORY</p>
        <h1>Beyond<br/>the <span>obvious.</span></h1>
        <p className="story-deck">A sound shaped by the feelings beneath the surface.</p>
      </div>
      <figure className="story-portrait">
        <Picture className="artist-landscape" src="/images/artist/portrait1.jpg" alt="090VI singing into a microphone among other performers" width={1443} height={1090} priority sizes="(max-width: 750px) 100vw, 52vw"/>
        <figcaption><span>090VI</span><span>LAGOS · AFROPOP</span></figcaption>
      </figure>
      <span className="story-vertical" aria-hidden="true">A POINT OF VIEW · 090VI</span>
    </header>

    <section className="story-opening" aria-labelledby="story-opening-title">
      <p className="story-index">01 <span>·</span> A WAY OF SEEING</p>
      <div className="story-opening-copy">
        <h2 id="story-opening-title">Some things are felt<br/>before they’re understood.</h2>
        <p>Joy with a little pressure behind it. Desire beside uncertainty. The drive to become, held against the demands of an ordinary day. Life rarely arrives as one feeling at a time.</p>
        <p>For 090VI, that in-between is where a song can begin: with the detail just beneath the first impression, the feeling that stays after the moment has passed, the story that is hard to explain and impossible to ignore.</p>
      </div>
    </section>

    <section className="story-image-break" aria-label="Portrait of 090VI">
      <Picture src="/images/gallery/3.jpg" alt="090VI in a supplied performance photograph" width={1024} height={1024} loading="lazy" sizes="100vw"/>
      <p>Look again.<br/><span>There’s more there.</span></p>
    </section>

    <section className="story-chapter" aria-labelledby="story-perspective-title">
      <p className="story-index">02 <span>·</span> THE PERSPECTIVE</p>
      <div className="story-chapter-copy">
        <h2 id="story-perspective-title">A name that asks<br/>you to look closer.</h2>
        <p>090VI is more than a name on a track. It carries a point of view: to look beyond what is immediately visible and stay with what is actually there—ambition and doubt, closeness and distance, the bright parts and the complicated ones.</p>
        <p>That perspective leaves room for contradiction. A feeling does not have to resolve neatly to be worth a song. It only has to be real enough to recognise.</p>
      </div>
    </section>

    <section className="story-sound" aria-labelledby="story-sound-title">
      <div className="story-sound-heading">
        <p className="story-index">03 <span>·</span> THE SOUND</p>
        <h2 id="story-sound-title">Rhythm<br/>with room<br/>to <em>feel.</em></h2>
      </div>
      <div className="story-sound-copy">
        <p>Afropop gives the music a pulse, not a boundary. Rhythm makes space for movement; melody and expression make space for feeling. There is room for experimentation, for different moods, for the sound to change shape as life does.</p>
        <p>The stories stay human. They belong to the person reaching for something, the person trying to hold on to love, the person finding their way through disappointment, or simply the person who needs a song to say what words cannot.</p>
      </div>
      <div className="story-statement" aria-label="Music for the moments. Music for the memories.">
        <span>MUSIC FOR THE MOMENTS.</span>
        <span>MUSIC FOR THE MEMORIES.</span>
      </div>
    </section>

    <section className="story-timeline" aria-labelledby="story-timeline-title">
      <div className="story-timeline-heading">
        <p className="story-index">04 <span>·</span> THE RELEASES</p>
        <h2 id="story-timeline-title">A story in motion.</h2>
        <p>The catalogue moves through different moods and shades of the same human experience. It is still taking shape.</p>
      </div>
      <ol>{releases.map((release,index)=><li key={release.id}>
        <span className="story-timeline-number">{String(index+1).padStart(2,'0')}</span>
        <time dateTime={release.releaseDate}>{release.releaseDate.slice(0,4)}</time>
        <Link href={`/music/${release.slug}/`}>{release.title}<span aria-hidden="true">↗</span></Link>
      </li>)}</ol>
      <p className="story-footnote">Release years are shown as currently listed and await owner confirmation.</p>
      <Link className="text-link" href="/music/">EXPLORE THE MUSIC ↗</Link>
    </section>

    <footer className="story-ending">
      <p className="eyebrow">STILL UNFOLDING</p>
      <h2>Not a finished shape.<br/><span>A sound becoming.</span></h2>
      <p>090VI is about staying true while making room for what comes next. To look again. To listen a little closer.</p>
      <Link className="story-listen-link" href="/music/">STEP INTO THE MUSIC <span aria-hidden="true">↗</span></Link>
      <Link className="story-press-link" href="/press/">Press materials and original artist documents</Link>
    </footer>
  </article>;
}
