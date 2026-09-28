import type {Metadata} from 'next';
import {BookingForm} from '../../components/BookingForm';
export const metadata:Metadata={title:'Booking & enquiries',description:'Plan a performance, collaboration or merch enquiry with 090VI. Prepare your details and continue by WhatsApp or email.',alternates:{canonical:'/book/'}};
export default function BookPage(){return <section className="section page-section booking-page"><p className="eyebrow">090VI / LET’S MAKE IT HAPPEN</p><h1>Make room<br/>for the sound.</h1><p className="booking-intro">A stage to fill. An idea to explore. A piece to make yours.<br/>Start here. We’ll take it from there.</p><BookingForm/></section>}
