import ScrollReveal from '../shared/ScrollReveal';
import './Packages.css';

export default function Packages() {
    return (
        <section>
            <ScrollReveal className="section-label">Pricing Structure</ScrollReveal>
            <ScrollReveal className="section-title">Transparent. Structured. <em>Real.</em></ScrollReveal>
            <ScrollReveal className="section-sub">
                Four tiers from £3k to £20k. Each scoped, priced, and delivered with clarity. The Packages page will also feature an interactive configurator that recommends the right tier in 60 seconds.
            </ScrollReveal>
            <div className="packages-grid">
                <ScrollReveal className="package">
                    <div className="tier-from">Starting from</div>
                    <div className="tier-price">£3,000</div>
                    <div className="tier-name">Starter</div>
                    <div className="tier-desc">For businesses getting started online. One core service — website or marketing setup.</div>
                </ScrollReveal>
                <ScrollReveal className="package">
                    <div className="tier-from">Starting from</div>
                    <div className="tier-price">£5,000</div>
                    <div className="tier-name">Growth</div>
                    <div className="tier-desc">For businesses ready to scale. Two combined services with integrated delivery.</div>
                </ScrollReveal>
                <ScrollReveal className="package featured">
                    <div className="tier-from">Starting from</div>
                    <div className="tier-price">£10,000</div>
                    <div className="tier-name">Premium</div>
                    <div className="tier-desc">Full-stack: design, development, and marketing. End-to-end creative delivery.</div>
                </ScrollReveal>
                <ScrollReveal className="package">
                    <div className="tier-from">Starting from</div>
                    <div className="tier-price">£20,000</div>
                    <div className="tier-name">Enterprise</div>
                    <div className="tier-desc">Bespoke scope. Dedicated team. Campaign, build, and ongoing management.</div>
                </ScrollReveal>
            </div>
        </section>
    );
}
