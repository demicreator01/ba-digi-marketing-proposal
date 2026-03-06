import ScrollReveal from '../shared/ScrollReveal';
import './SiteArchitecture.css';

export default function SiteArchitecture() {
    return (
        <section>
            <ScrollReveal className="section-label">Site Architecture</ScrollReveal>
            <ScrollReveal className="section-title">Four Pages. Each With a Job.</ScrollReveal>
            <ScrollReveal className="section-sub">
                Every page advances the argument. No filler, no "about us" walls of text. A structured case for why BA Digi is the right partner.
            </ScrollReveal>
            <div className="site-map">
                <ScrollReveal className="site-page">
                    <div className="page-num">PAGE 01</div>
                    <h3>Home</h3>
                    <p>The showpiece. Hero with visual proof. The three pillars. A craft gallery. Package teaser. Makes the first impression and demonstrates capability before a single word about services.</p>
                </ScrollReveal>
                <ScrollReveal className="site-page">
                    <div className="page-num">PAGE 02</div>
                    <h3>Services</h3>
                    <p>Deep dive into Build, Grow, and Launch. Each pillar gets its own section with services expanded beneath. Not a flat grid — a structured argument for why they work together.</p>
                </ScrollReveal>
                <ScrollReveal className="site-page">
                    <div className="page-num">PAGE 03</div>
                    <h3>Packages</h3>
                    <p>Static pricing tiers from £3k to £20k plus an interactive configurator quiz that recommends a package. Pricing transparency and UX capability — demonstrated in one page.</p>
                </ScrollReveal>
                <ScrollReveal className="site-page">
                    <div className="page-num">PAGE 04</div>
                    <h3>Contact</h3>
                    <p>Clean, direct. Email, phone, WhatsApp. The configurator result feeds into this page with pre-filled context — so leads arrive warm, not cold.</p>
                </ScrollReveal>
            </div>
        </section>
    );
}
