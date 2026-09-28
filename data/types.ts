export interface Provenance { verified: boolean; source?: string; note?: string }
export interface MediaImage { src: string; alt: string; width: number; height: number }
export interface AudioAsset { src: string; durationSec: number; kind: 'preview' | 'full'; rightsNote: string }
export type Platform = 'spotify'|'appleMusic'|'youtubeMusic'|'youtube'|'audiomack'|'amazonMusic'|'boomplay'|'linktree';
export interface StreamingLink { platform: Platform; label: string; url: string }
export type ReleaseType = 'single'|'ep'|'album'|'mixtape'|'feature';
export interface Release { id: string; slug: string; title: string; type: ReleaseType; releaseDate: string; datePrecision: 'day'|'month'|'year'; artwork?: MediaImage; audio?: AudioAsset; streaming: StreamingLink[]; published: boolean; provenance: Provenance }
export interface Video { id:string; slug:string; title:string; category:'music-video'|'live'|'bts'|'studio'|'short-film'; poster:MediaImage; src?:string; provenance:Provenance }
export interface EventItem { id:string; date:string; venue:string; city:string; country:string; ticketUrl?:string; status:'upcoming'|'soldout'|'cancelled'|'past' }
export interface GalleryImage { id:string; image:MediaImage; caption?:string; provenance?:Provenance }
export interface Artist { name:'090VI'; shortBio?:string; bio?:string; heroImage?:MediaImage; portrait?:MediaImage; bookingEmail?:string; managementEmail?:string; pressEmail?:string; provenance:Provenance }
