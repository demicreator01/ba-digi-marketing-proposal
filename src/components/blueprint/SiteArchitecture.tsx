import ScrollReveal from '../shared/ScrollReveal';
import './SiteArchitecture.css';

export default function SiteArchitecture() {
    return (
        <section className="s">
            <ScrollReveal className="s-label">Site Architecture</ScrollReveal>
            <ScrollReveal className="s-title">Four Pages. Each With a Job.</ScrollReveal>
            <ScrollReveal className="s-sub">
                Every page advances the argument. No filler. A structured funnel that moves visitors from curiosity to conversion.
            </ScrollReveal>
            <div className="funnel">
                <ScrollReveal className="funnel-step">
                    <div className="f-page">Page 01</div>
                    <h4>Home</h4>
                    <div className="f-job">The Hook</div>
                    <p>Makes the visitor stay. Demonstrates capability within 5 seconds. Previews everything — pillars, proof, packages — but goes deep on none. Creates doors to the other three pages.</p>
                </ScrollReveal>
                <ScrollReveal className="funnel-step">
                    <div className="f-page">Page 02</div>
                    <h4>Services</h4>
                    <div className="f-job">The Depth</div>
                    <p>Answers "can you do what I specifically need?" Walks through Build, Grow, Launch with enough detail to feel comprehensive. Shows the process — how BA Digi works start to finish.</p>
                </ScrollReveal>
                <ScrollReveal className="funnel-step">
                    <div className="f-page">Page 03</div>
                    <h4>Packages</h4>
                    <div className="f-job">The Decision</div>
                    <p>Where browsing becomes buying. Clear tiers, clear pricing, clear scope. The configurator quiz helps the undecided find their tier and captures lead data before they even reach Contact.</p>
                </ScrollReveal>
                <ScrollReveal className="funnel-step">
                    <div className="f-page">Page 04</div>
                    <h4>Contact</h4>
                    <div className="f-job">The Conversion</div>
                    <p>By now, they've decided to talk. Zero friction. Email, phone, WhatsApp, form. Configurator context pre-filled. The page feels like opening a door, not filling out an application.</p>
                </ScrollReveal>
            </div>
        </section>
    );
}
