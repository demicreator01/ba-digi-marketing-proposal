import ScrollReveal from '../shared/ScrollReveal';
import './Pillars.css';

export default function Pillars() {
    return (
        <section>
            <ScrollReveal className="section-label">Service Framework</ScrollReveal>
            <ScrollReveal className="section-title">Build. Grow. Launch.</ScrollReveal>
            <ScrollReveal className="section-sub">
                Seven services grouped into three pillars. A feature list becomes a narrative — a methodology clients follow from first asset to full campaign.
            </ScrollReveal>
            <div className="pillars">
                <ScrollReveal className="pillar">
                    <div className="pillar-line build"></div>
                    <h3>Build</h3>
                    <div className="tagline">We create the assets.</div>
                    <ul className="services">
                        <li>Website Development</li>
                        <li>Graphic Design</li>
                        <li>Presentation Design</li>
                    </ul>
                </ScrollReveal>
                <ScrollReveal className="pillar">
                    <div className="pillar-line grow"></div>
                    <h3>Grow</h3>
                    <div className="tagline">We drive the results.</div>
                    <ul className="services">
                        <li>Digital Marketing</li>
                        <li>Online Advertising</li>
                        <li>Traffic Generation</li>
                    </ul>
                </ScrollReveal>
                <ScrollReveal className="pillar">
                    <div className="pillar-line launch"></div>
                    <h3>Launch</h3>
                    <div className="tagline">We orchestrate the play.</div>
                    <ul className="services">
                        <li>Marketing Campaigns</li>
                        <li>Strategy + Execution</li>
                        <li>Multi-channel Delivery</li>
                    </ul>
                </ScrollReveal>
            </div>
        </section>
    );
}
