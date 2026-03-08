import ScrollReveal from '../shared/ScrollReveal';
import './Pillars.css';

export default function Pillars() {
    return (
        <section>
            <ScrollReveal className="section-label">Service Framework</ScrollReveal>
            <ScrollReveal className="section-title">Design. Build. Scale.</ScrollReveal>
            <ScrollReveal className="section-sub">
                Nine services grouped into three pillars. A feature list becomes a sequence — a client journey from brand identity through to full campaign delivery.
            </ScrollReveal>
            <div className="pillars">
                <ScrollReveal className="pillar">
                    <div className="pillar-line design"></div>
                    <h3>Design</h3>
                    <div className="tagline">We shape the perception.</div>
                    <ul className="services">
                        <li>Brand Strategy &amp; Identity</li>
                        <li>Graphic &amp; Presentation Design</li>
                        <li>UI/UX Design &amp; Copywriting</li>
                    </ul>
                </ScrollReveal>
                <ScrollReveal className="pillar">
                    <div className="pillar-line build"></div>
                    <h3>Build</h3>
                    <div className="tagline">We engineer the foundation.</div>
                    <ul className="services">
                        <li>Custom Web Development</li>
                        <li>E-Commerce &amp; Platform Solutions</li>
                        <li>Technical SEO &amp; Integration</li>
                    </ul>
                </ScrollReveal>
                <ScrollReveal className="pillar">
                    <div className="pillar-line scale"></div>
                    <h3>Scale</h3>
                    <div className="tagline">We amplify what we build.</div>
                    <ul className="services">
                        <li>Search Engine Marketing</li>
                        <li>Social Media &amp; Paid Campaigns</li>
                        <li>Conversion &amp; Analytics</li>
                    </ul>
                </ScrollReveal>
            </div>
        </section>
    );
}
