import ScrollReveal from '../shared/ScrollReveal';
import './VisitorBeliefs.css';

export default function VisitorBeliefs() {
    return (
        <section className="s">
            <ScrollReveal className="s-label">Visitor Psychology</ScrollReveal>
            <ScrollReveal className="s-title">Four Beliefs Before They Pay</ScrollReveal>
            <ScrollReveal className="s-sub">
                Every visitor lands with skepticism. Within 60 seconds, the site must advance these four beliefs. If a section doesn't serve one of them, it doesn't belong.
            </ScrollReveal>
            <div className="beliefs">
                <ScrollReveal className="belief">
                    <div className="b-num">01</div>
                    <p><strong>They're good at what they do.</strong> The site itself proves this — the design, the interactions, the information architecture. Capability demonstrated, not claimed.</p>
                </ScrollReveal>
                <ScrollReveal className="belief">
                    <div className="b-num">02</div>
                    <p><strong>They have a structured approach.</strong> Not making it up as they go. Three pillars, clear process, defined methodology. This is a studio, not a freelancer.</p>
                </ScrollReveal>
                <ScrollReveal className="belief">
                    <div className="b-num">03</div>
                    <p><strong>Their pricing is clear and within reach.</strong> No "contact us for a quote" mystery. Tiers are visible, transparent, and structured. The visitor can self-qualify.</p>
                </ScrollReveal>
                <ScrollReveal className="belief">
                    <div className="b-num">04</div>
                    <p><strong>Getting started is simple and low-pressure.</strong> Multiple contact paths, no hard sell, configurator quiz for the undecided. The door is open, not guarded.</p>
                </ScrollReveal>
            </div>
        </section>
    );
}
