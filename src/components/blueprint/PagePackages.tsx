import ScrollReveal from '../shared/ScrollReveal';
import './PagePackages.css';

export default function PagePackages() {
    return (
        <section className="s">
            <div className="page-detail">
                <ScrollReveal className="page-header">
                    <div className="page-num-large">03</div>
                    <div className="page-name">Packages</div>
                </ScrollReveal>
                <ScrollReveal className="page-intent" as="p">
                    The decision page. Where browsing becomes buying. Arc: <strong style={{ color: 'var(--cream-bright)' }}>Frame → Compare → Discover → Reassure → Convert.</strong>
                </ScrollReveal>

                <div className="section-cards">
                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 1</div>
                            <div className="sc-name">Hero</div>
                        </div>
                        <div className="sc-content">
                            "Transparent Pricing. Structured Delivery." — "Every package is scoped, priced, and delivered with full clarity. No hourly surprises. No scope creep."
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 2</div>
                            <div className="sc-name">Tier Cards</div>
                            <div className="sc-belief">"There's a clear tier for my business size and need."</div>
                        </div>
                        <div className="sc-content">
                            4 detailed cards — more detail than the Home preview. Each card includes tier name, price, target audience, 4–5 bullet points of what's included, and a CTA button.
                            <ul className="sc-list">
                                <li><strong>Starter £3,000</strong> — small businesses, new brands. One core service. Foundation-level delivery.</li>
                                <li><strong>Growth £5,000</strong> — businesses ready to scale. Two combined services. Integrated delivery.</li>
                                <li><strong>Premium £10,000</strong> — established businesses. Full-stack: design + development + marketing. Highlighted as "Most Popular."</li>
                                <li><strong>Enterprise £20,000</strong> — large projects. Bespoke scope. Dedicated team. Ongoing management.</li>
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 3</div>
                            <div className="sc-name">Interactive Configurator</div>
                            <div className="sc-belief">"They'll recommend the right package for me in 60 seconds."</div>
                        </div>
                        <div className="sc-content">
                            5-step quiz in a dark panel with progress bar:
                            <div className="config-mini">
                                <div className="cm-q">What do you need?</div>
                                <div className="cm-opt">A new website</div>
                                <div className="cm-opt sel">Marketing & advertising</div>
                                <div className="cm-opt">Creative / design work</div>
                                <div className="cm-opt">A full campaign</div>
                            </div>
                            <br />Steps: What do you need → Business stage → Timeline → Budget range → Specific services (multi-select).<br /><br />
                            <strong>Result:</strong> recommended tier with reasoning, what's included, and "Get a Proposal for This Package →" CTA that links to Contact with the package pre-selected.
                            <div className="sc-note">The configurator does three things simultaneously — helps the visitor, qualifies the lead, and demonstrates BA Digi's UX capability. "If they built this quiz this well, imagine what they'd build for my website."</div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 4</div>
                            <div className="sc-name">What's Always Included</div>
                        </div>
                        <div className="sc-content">
                            4 cards: Dedicated point of contact · Clear project timeline · Full documentation · Post-delivery support. Standards that never change regardless of tier.
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 5</div>
                            <div className="sc-name">FAQ</div>
                        </div>
                        <div className="sc-content">
                            Accordion — 5–6 questions: Can I customise? What if my needs don't fit a tier? Typical timelines? Payment terms? Post-delivery support? Can I add services later?
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 6</div>
                            <div className="sc-name">CTA</div>
                        </div>
                        <div className="sc-content">"Pick a package or get a custom proposal."</div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
